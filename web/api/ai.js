// Zuno / Nexaoffice: perantara AI di server (Vercel Function, atau server VPS lewat dev-server.mjs).
// Penyedia bawaan diatur lewat env AI_PROVIDER tanpa mengubah kode halaman:
// "claude" (bawaan) | "openrouter" | "openai" | "gemini" | "openai-compatible" (9router, Ollama, LM Studio; isi AI_BASE_URL).
//
// Mode "API key lokal" (menu Pengaturan AI): halaman boleh mengirim API key milik pemakai per permintaan lewat header
// x-llm-provider, x-llm-key, x-llm-model, x-llm-base. Key itu hanya dipakai untuk permintaan ini: tidak disimpan,
// tidak dicatat. Kunci akses (x-zuno-key) tetap wajib, supaya server ini tidak jadi perantara terbuka.
// Matikan dengan env NEXA_KUNCI_PENGGUNA=off.
//
// Masuk : POST JSON {input: string | [{role, content}], images?: [{media_type, data}], tier?: "quick"|"default", effort?: "low"|"medium"|"high"}
//         header x-zuno-key: kunci akses (env ZUNO_ACCESS_KEY)
// Keluar: aliran NDJSON, satu objek per baris:
//         {"t":"delta","text":"..."}            potongan jawaban
//         {"t":"done","stop":"end_turn|max_tokens|refusal","model":"..."}
//         {"t":"error","code":"...","message":"..."}
import Anthropic from '@anthropic-ai/sdk';
import { timingSafeEqual, createHash } from 'node:crypto';

const PROVIDER = (process.env.AI_PROVIDER || 'claude').toLowerCase();
export const PENYEDIA = ['claude', 'gemini', 'openai', 'openrouter', 'openai-compatible'];
const ENV_KEY = { claude: 'ANTHROPIC_API_KEY', openai: 'OPENAI_API_KEY', gemini: 'GEMINI_API_KEY', openrouter: 'OPENROUTER_API_KEY', 'openai-compatible': 'AI_API_KEY' };

// Setelan satu permintaan: dari env server (bawaan) atau dari header mode "API key lokal".
export function konfigServer() {
  return { provider: PROVIDER, key: process.env[ENV_KEY[PROVIDER]] || '', model: process.env.AI_MODEL || '', modelQuick: process.env.AI_MODEL_QUICK || '', base: process.env.AI_BASE_URL || '', pengguna: false };
}
function alamatAman(u) {
  let url; try { url = new URL(u); } catch { return false; }
  const lokal = /^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|0\.|\[::1\]$|\[f[cd])/i.test(url.hostname);
  if (process.env.NEXA_IZINKAN_LOKAL === '1') return ['http:', 'https:'].includes(url.protocol);
  return url.protocol === 'https:' && !lokal;
}
export function konfigDari(request) {
  const key = String(request.headers.get('x-llm-key') || '').trim();
  if (!key) return konfigServer();
  if (process.env.NEXA_KUNCI_PENGGUNA === 'off') throw { status: 403, code: 'byok_off', message: 'Server ini tidak menerima API key dari halaman. Pakai mode Server di Pengaturan AI.' };
  const provider = String(request.headers.get('x-llm-provider') || '').toLowerCase();
  if (!PENYEDIA.includes(provider)) throw { status: 400, code: 'invalid_request', message: 'Penyedia di Pengaturan AI tidak dikenal.' };
  if (key.length > 400 || /\s/.test(key)) throw { status: 400, code: 'invalid_request', message: 'API key di Pengaturan AI tidak valid.' };
  const model = String(request.headers.get('x-llm-model') || '').trim().slice(0, 120);
  const base = String(request.headers.get('x-llm-base') || '').trim().replace(/\/+$/, '');
  if (provider === 'openai-compatible' && (!base || !alamatAman(base))) throw { status: 400, code: 'invalid_request', message: 'Alamat endpoint harus https:// dan bukan alamat jaringan lokal.' };
  return { provider, key, model, modelQuick: '', base, pengguna: true };
}
const MODEL_DEFAULT = {
  claude: 'claude-opus-5-5',
  openai: 'ISI_NAMA_MODEL',
  gemini: 'otomatis',
  openrouter: 'openrouter/auto', // router otomatis OpenRouter; ganti lewat AI_MODEL untuk model tetap
  'openai-compatible': 'ISI_NAMA_MODEL'
};
function modelFor(cfg, tier) {
  if (tier === 'quick' && cfg.modelQuick) return cfg.modelQuick;
  return cfg.model || MODEL_DEFAULT[cfg.provider] || 'ISI_NAMA_MODEL';
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
async function* streamClaude({ cfg, turns, images, tier, effort, signal }) {
  const client = new Anthropic(cfg.key ? { apiKey: cfg.key } : {}); // key dari env server, atau dari Pengaturan AI (mode lokal)
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
  const model = modelFor(cfg, tier);
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

// ---------- Gemini (Google AI Studio, streaming SSE) ----------
// Bila AI_MODEL kosong, server memilih sendiri dari daftar model Google:
// model stabil (tanpa "preview"/"exp") versi tertinggi; "pro" untuk tahap biasa, "flash" untuk tahap ringan.
const GEMINI_BASE = process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com';
const geminiPicks = new Map(); // per sidik key (sha256), bukan key itu sendiri
export async function pickGemini(tier, cfg = konfigServer()) {
  if (tier === 'quick' && cfg.modelQuick) return { name: cfg.modelQuick, out: null };
  if (cfg.model) return { name: cfg.model, out: null };
  const sidik = createHash('sha256').update(cfg.key || '').digest('hex');
  let geminiPick = geminiPicks.get(sidik) || null;
  if (!geminiPick) {
    const r = await fetch(GEMINI_BASE + '/v1beta/models?pageSize=200', { headers: { 'x-goog-api-key': cfg.key || '' } });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw { status: r.status, message: (j.error && j.error.message) || 'Daftar model Gemini gagal dibaca' };
    const ok = (j.models || []).filter((m) => (m.supportedGenerationMethods || []).includes('generateContent'))
      .map((m) => { const id = String(m.name || '').replace(/^models\//, ''); const v = /^gemini-(\d+(?:\.\d+)?)-(pro|flash)$/.exec(id); return v ? { name: id, ver: Number(v[1]), kind: v[2], out: m.outputTokenLimit || null } : null; })
      .filter(Boolean).sort((a, b) => b.ver - a.ver);
    geminiPick = { pro: ok.find((m) => m.kind === 'pro') || ok[0] || null, flash: ok.find((m) => m.kind === 'flash') || ok[0] || null };
    if (!geminiPick.pro) throw { status: 500, message: 'Tidak ada model Gemini stabil di daftar. Isi nama model (AI_MODEL atau kolom Model di Pengaturan AI).' };
    if (geminiPicks.size > 50) geminiPicks.clear();
    geminiPicks.set(sidik, geminiPick);
  }
  return tier === 'quick' ? geminiPick.flash : geminiPick.pro;
}

async function* streamGemini({ cfg, turns, images, tier, signal }) {
  const m = await pickGemini(tier, cfg);
  const contents = turns.map((t, i) => ({
    role: t.role === 'assistant' ? 'model' : 'user',
    parts: [...(i === 0 && images.length ? images.map((im) => ({ inline_data: { mime_type: im.media_type, data: im.data } })) : []), { text: t.content }]
  }));
  const body = { contents };
  const limit = Number(process.env.AI_MAX_TOKENS || m.out || 0);
  if (limit) body.generationConfig = { maxOutputTokens: limit };
  const r = await fetchRetry(GEMINI_BASE + '/v1beta/models/' + encodeURIComponent(m.name) + ':streamGenerateContent?alt=sse', {
    method: 'POST', signal, headers: { 'content-type': 'application/json', 'x-goog-api-key': cfg.key || '' }, body: JSON.stringify(body)
  });
  if (!r.ok) { const j = await r.json().catch(() => ({})); throw { status: r.status, message: (j.error && j.error.message) || 'HTTP ' + r.status }; }
  const reader = r.body.getReader(), dec = new TextDecoder();
  let buf = '', stop = 'end_turn';
  for (;;) {
    const c = await reader.read();
    if (c.done) break;
    buf += dec.decode(c.value, { stream: true });
    let nl;
    while ((nl = buf.indexOf('\n')) > -1) {
      const line = buf.slice(0, nl).trim(); buf = buf.slice(nl + 1);
      if (!line.startsWith('data:')) continue;
      let j; try { j = JSON.parse(line.slice(5)); } catch { continue; }
      if (j.error) throw { status: j.error.code, message: j.error.message };
      const cand = (j.candidates || [])[0] || {};
      const text = ((cand.content && cand.content.parts) || []).filter((p) => !p.thought).map((p) => p.text || '').join('');
      if (text) yield { t: 'delta', text };
      if (cand.finishReason === 'MAX_TOKENS') stop = 'max_tokens';
      else if (['SAFETY', 'PROHIBITED_CONTENT', 'BLOCKLIST', 'RECITATION'].includes(cand.finishReason)) stop = 'refusal';
      if (j.promptFeedback && j.promptFeedback.blockReason) stop = 'refusal';
    }
  }
  yield { t: 'done', stop, model: m.name };
}

// ---------- Coba ulang saat kena limit / server sibuk ----------
// Hanya sebelum jawaban mulai mengalir. Maks. 3 percobaan, jeda dari header retry-after (maks. 20 detik).
const sleep = (ms, signal) => new Promise((res, rej) => { const t = setTimeout(res, ms); if (signal) signal.addEventListener('abort', () => { clearTimeout(t); rej({ status: 499, message: 'dibatalkan' }); }, { once: true }); });
export async function fetchRetry(url, opts, tries = 3) {
  for (let i = 0; ; i++) {
    const r = await fetch(url, opts);
    if (r.ok || i >= tries - 1 || ![429, 500, 502, 503, 504].includes(r.status)) return r;
    const ra = Number(r.headers.get('retry-after'));
    await sleep(Math.min(20000, ra > 0 ? ra * 1000 : [2000, 6000][i] || 6000), opts.signal);
  }
}

// ---------- Format OpenAI (streaming SSE): OpenRouter, OpenAI, dan endpoint kompatibel (9router, Ollama, LM Studio) ----------
function compatTarget(cfg) {
  if (cfg.provider === 'openrouter') return { url: 'https://openrouter.ai/api/v1/chat/completions', key: cfg.key, extra: { 'X-Title': 'Zuno' } };
  if (cfg.provider === 'openai') return { url: 'https://api.openai.com/v1/chat/completions', key: cfg.key, extra: {} };
  if (cfg.provider === 'openai-compatible') {
    const base = String(cfg.base || '').replace(/\/+$/, '');
    if (!base) throw { status: 500, message: 'AI_BASE_URL belum diisi.' };
    return { url: base + '/chat/completions', key: cfg.key || '', extra: {} };
  }
  throw { status: 500, message: 'AI_PROVIDER tidak dikenal: ' + cfg.provider };
}
async function* streamCompat({ cfg, turns, images, tier, signal }) {
  const model = modelFor(cfg, tier);
  if (!model || model === 'ISI_NAMA_MODEL') throw { status: 500, message: cfg.pengguna ? 'Isi nama model di Pengaturan AI.' : 'AI_MODEL belum diisi di Vercel.' };
  const tg = compatTarget(cfg);
  if (process.env.COMPAT_BASE_URL_TEST) tg.url = process.env.COMPAT_BASE_URL_TEST; // khusus uji
  const messages = turns.map((m, i) => (i === 0 && m.role === 'user' && images.length)
    ? { role: 'user', content: [...images.map((im) => ({ type: 'image_url', image_url: { url: 'data:' + im.media_type + ';base64,' + im.data } })), { type: 'text', text: m.content }] }
    : m);
  const body = { model, messages, stream: true };
  if (process.env.AI_MAX_TOKENS) body.max_tokens = Number(process.env.AI_MAX_TOKENS);
  const headers = { 'content-type': 'application/json', ...tg.extra };
  if (tg.key) headers.authorization = 'Bearer ' + tg.key;
  const r = await fetchRetry(tg.url, { method: 'POST', signal, headers, body: JSON.stringify(body) });
  if (!r.ok) { const j = await r.json().catch(() => ({})); throw { status: r.status, message: (j.error && (j.error.message || j.error)) || 'HTTP ' + r.status }; }
  const reader = r.body.getReader(), dec = new TextDecoder();
  let buf = '', stop = 'end_turn', used = model;
  for (;;) {
    const c = await reader.read();
    if (c.done) break;
    buf += dec.decode(c.value, { stream: true });
    let nl;
    while ((nl = buf.indexOf('\n')) > -1) {
      const line = buf.slice(0, nl).trim(); buf = buf.slice(nl + 1);
      if (!line.startsWith('data:')) continue; // baris komentar ": OPENROUTER PROCESSING" dilewati
      const data = line.slice(5).trim();
      if (data === '[DONE]') continue;
      let j; try { j = JSON.parse(data); } catch { continue; }
      if (j.error) throw { status: j.error.code || 500, message: j.error.message || 'error dari penyedia' };
      if (j.model) used = j.model;
      const ch = (j.choices || [])[0] || {};
      const text = ch.delta && ch.delta.content;
      if (text) yield { t: 'delta', text };
      if (ch.finish_reason === 'length') stop = 'max_tokens';
      else if (ch.finish_reason === 'content_filter') stop = 'refusal';
    }
  }
  yield { t: 'done', stop, model: used };
}

function errCode(e, cfg) {
  const s = e && (e.status || (e.error && e.error.status));
  if (s === 401 || s === 403) return cfg && cfg.pengguna ? 'user_key' : 'server_key';
  if (s === 402) return 'no_credit';
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
  let cfg;
  try { cfg = konfigDari(request); } catch (e) { return Response.json({ code: e.code || 'invalid_request', message: e.message }, { status: e.status || 400 }); }
  const args = {
    cfg,
    turns,
    images: cleanImages(body.images),
    tier: body.tier === 'quick' ? 'quick' : 'default',
    effort: ['low', 'medium', 'high'].includes(body.effort) ? body.effort : null,
    signal: request.signal
  };
  const gen = cfg.provider === 'claude' ? streamClaude(args) : cfg.provider === 'gemini' ? streamGemini(args) : streamCompat(args);
  const enc = new TextEncoder();
  const stream = new ReadableStream({
    async start(ctrl) {
      const send = (o) => ctrl.enqueue(enc.encode(JSON.stringify(o) + '\n'));
      try {
        for await (const ev of gen) send(ev);
      } catch (e) {
        if (!request.signal.aborted) send({ t: 'error', code: errCode(e, cfg), message: String((e && e.message) || e).slice(0, 400) });
      }
      ctrl.close();
    }
  });
  return new Response(stream, { headers: { 'content-type': 'application/x-ndjson; charset=utf-8', 'cache-control': 'no-store' } });
}
