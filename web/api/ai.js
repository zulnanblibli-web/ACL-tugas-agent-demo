// Zuno: perantara AI di server (Vercel Function).
// Halaman tidak pernah memegang API key. Penyedia bisa diganti lewat env AI_PROVIDER
// tanpa mengubah kode halaman: "claude" (bawaan) | "openai" | "gemini" | "openrouter".
//
// Masuk : POST JSON {input: string | [{role, content}], images?: [{media_type, data}], tier?: "quick"|"default", effort?: "low"|"medium"|"high"}
//         header x-zuno-key: kunci akses (env ZUNO_ACCESS_KEY)
// Keluar: aliran NDJSON, satu objek per baris:
//         {"t":"delta","text":"..."}            potongan jawaban
//         {"t":"done","stop":"end_turn|max_tokens|refusal","model":"..."}
//         {"t":"error","code":"...","message":"..."}
import Anthropic from '@anthropic-ai/sdk';
import { timingSafeEqual } from 'node:crypto';

const PROVIDER = (process.env.AI_PROVIDER || 'claude').toLowerCase();
const MODEL_DEFAULT = {
  claude: 'claude-opus-5-5',
  openai: 'ISI_NAMA_MODEL',
  gemini: 'ISI_NAMA_MODEL',
  openrouter: 'ISI_NAMA_MODEL'
};
function modelFor(tier) {
  if (tier === 'quick' && process.env.AI_MODEL_QUICK) return process.env.AI_MODEL_QUICK;
  return process.env.AI_MODEL || MODEL_DEFAULT[PROVIDER] || 'ISI_NAMA_MODEL';
}
const MAX_OUT = Number(process.env.AI_MAX_TOKENS || 64000);

function keyOk(given) {
  const want = process.env.ZUNO_ACCESS_KEY || '';
  if (!want || !given) return false;
  const a = Buffer.from(String(given)), b = Buffer.from(want);
  return a.length === b.length && timingSafeEqual(a, b);
}

function toTurns(input) {
  if (typeof input === 'string') return [{ role: 'user', content: input }];
  if (Array.isArray(input)) {
    return input
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant'))
      .map((m) => ({ role: m.role, content: String(m.content || '') }));
  }
  return null;
}

function cleanImages(images) {
  if (!Array.isArray(images)) return [];
  return images
    .filter((x) => x && /^image\/(jpeg|png|webp|gif)$/.test(x.media_type) && typeof x.data === 'string')
    .slice(0, 8);
}

// ---------- Claude (SDK resmi) ----------
async function* streamClaude({ turns, images, tier, effort, signal }) {
  const client = new Anthropic(); // ANTHROPIC_API_KEY dari env Vercel
  const messages = turns.map((m) => ({ role: m.role, content: m.content }));
  if (images.length) {
    const first = messages.findIndex((m) => m.role === 'user');
    messages[first] = {
      role: 'user',
      content: [
        ...images.map((im) => ({ type: 'image', source: { type: 'base64', media_type: im.media_type, data: im.data } })),
        { type: 'text', text: messages[first].content }
      ]
    };
  }
  const model = modelFor(tier);
  const body = {
    model,
    max_tokens: MAX_OUT,
    messages,
    output_config: { effort: effort || (tier === 'quick' ? 'low' : 'medium') }
  };
  const useFallback = process.env.CLAUDE_FALLBACK !== 'off';
  const stream = useFallback
    ? client.beta.messages.stream({ ...body, betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' }, { signal })
    : client.messages.stream(body, { signal });
  for await (const ev of stream) {
    if (ev.type === 'content_block_delta' && ev.delta.type === 'text_delta') yield { t: 'delta', text: ev.delta.text };
  }
  const fin = await stream.finalMessage();
  yield { t: 'done', stop: fin.stop_reason || 'end_turn', model: fin.model || model };
}

// ---------- Penyedia lain (HTTP biasa, tanpa streaming) ----------
async function* oneShotOther({ turns, images, tier, signal }) {
  const model = modelFor(tier);
  let text = '', stop = 'end_turn';
  if (PROVIDER === 'openai' || PROVIDER === 'openrouter') {
    const url = PROVIDER === 'openai' ? 'https://api.openai.com/v1/chat/completions' : 'https://openrouter.ai/api/v1/chat/completions';
    const key = PROVIDER === 'openai' ? process.env.OPENAI_API_KEY : process.env.OPENROUTER_API_KEY;
    const messages = turns.map((m, i) => {
      if (i === 0 && m.role === 'user' && images.length) {
        return { role: 'user', content: [...images.map((im) => ({ type: 'image_url', image_url: { url: 'data:' + im.media_type + ';base64,' + im.data } })), { type: 'text', text: m.content }] };
      }
      return m;
    });
    const r = await fetch(url, { method: 'POST', signal, headers: { 'content-type': 'application/json', authorization: 'Bearer ' + key }, body: JSON.stringify({ model, messages }) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw { status: r.status, message: (j.error && j.error.message) || 'HTTP ' + r.status };
    const ch = (j.choices || [])[0] || {};
    text = (ch.message && ch.message.content) || '';
    if (ch.finish_reason === 'length') stop = 'max_tokens';
  } else if (PROVIDER === 'gemini') {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent';
    const contents = turns.map((m, i) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [...(i === 0 && images.length ? images.map((im) => ({ inline_data: { mime_type: im.media_type, data: im.data } })) : []), { text: m.content }]
    }));
    const r = await fetch(url, { method: 'POST', signal, headers: { 'content-type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY || '' }, body: JSON.stringify({ contents }) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw { status: r.status, message: (j.error && j.error.message) || 'HTTP ' + r.status };
    const c = (j.candidates || [])[0] || {};
    text = ((c.content && c.content.parts) || []).map((p) => p.text || '').join('');
    if (c.finishReason === 'MAX_TOKENS') stop = 'max_tokens';
  } else {
    throw { status: 500, message: 'AI_PROVIDER tidak dikenal: ' + PROVIDER };
  }
  if (text) yield { t: 'delta', text };
  yield { t: 'done', stop, model };
}

function errCode(e) {
  const s = e && (e.status || (e.error && e.error.status));
  if (s === 401 || s === 403) return 'server_key';
  if (s === 429) return 'rate_limited';
  if (s === 413) return 'prompt_too_large';
  if (s === 400) return 'invalid_request';
  return 'upstream_error';
}

export async function POST(request) {
  if (!process.env.ZUNO_ACCESS_KEY) return Response.json({ code: 'not_configured', message: 'Server belum diberi ZUNO_ACCESS_KEY.' }, { status: 503 });
  if (!keyOk(request.headers.get('x-zuno-key'))) return Response.json({ code: 'not_granted', message: 'Kunci akses Zuno salah atau kosong.' }, { status: 401 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ code: 'invalid_request', message: 'Body bukan JSON.' }, { status: 400 }); }
  const turns = toTurns(body && body.input);
  if (!turns || !turns.length) return Response.json({ code: 'invalid_request', message: 'input kosong.' }, { status: 400 });
  const args = {
    turns,
    images: cleanImages(body.images),
    tier: body.tier === 'quick' ? 'quick' : 'default',
    effort: ['low', 'medium', 'high'].includes(body.effort) ? body.effort : null,
    signal: request.signal
  };
  const gen = PROVIDER === 'claude' ? streamClaude(args) : oneShotOther(args);
  const enc = new TextEncoder();
  const stream = new ReadableStream({
    async start(ctrl) {
      const send = (o) => ctrl.enqueue(enc.encode(JSON.stringify(o) + '\n'));
      try {
        for await (const ev of gen) send(ev);
      } catch (e) {
        if (!request.signal.aborted) send({ t: 'error', code: errCode(e), message: String((e && e.message) || e).slice(0, 400) });
      }
      ctrl.close();
    }
  });
  return new Response(stream, { headers: { 'content-type': 'application/x-ndjson; charset=utf-8', 'cache-control': 'no-store' } });
}
