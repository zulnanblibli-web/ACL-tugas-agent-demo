// Uji web/api/ai.js tanpa Vercel: server Anthropic tiruan (SSE) lewat ANTHROPIC_BASE_URL.
// Jalankan: node tests/zuno-web-api-test.mjs
import http from 'node:http';
let lastBody = null, mode = 'ok';
const fake = http.createServer((req, res) => {
  let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => {
    lastBody = { url: req.url, headers: req.headers, json: JSON.parse(b || '{}') };
    if (mode === '401') { res.writeHead(401, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ type: 'error', error: { type: 'authentication_error', message: 'bad key' } })); }
    res.writeHead(200, { 'content-type': 'text/event-stream' });
    const ev = (t, d) => res.write('event: ' + t + '\ndata: ' + JSON.stringify(d) + '\n\n');
    const model = lastBody.json.model;
    ev('message_start', { type: 'message_start', message: { id: 'msg_1', type: 'message', role: 'assistant', model, content: [], stop_reason: null, stop_sequence: null, usage: { input_tokens: 5, output_tokens: 0 } } });
    ev('content_block_start', { type: 'content_block_start', index: 0, content_block: { type: 'text', text: '' } });
    for (const p of ['{"halo":', '"zuno"}']) ev('content_block_delta', { type: 'content_block_delta', index: 0, delta: { type: 'text_delta', text: p } });
    ev('content_block_stop', { type: 'content_block_stop', index: 0 });
    ev('message_delta', { type: 'message_delta', delta: { stop_reason: mode === 'potong' ? 'max_tokens' : 'end_turn', stop_sequence: null }, usage: { output_tokens: 4 } });
    ev('message_stop', { type: 'message_stop' });
    res.end();
  });
});
await new Promise((r) => fake.listen(0, r));
process.env.ANTHROPIC_BASE_URL = 'http://127.0.0.1:' + fake.address().port;
process.env.ANTHROPIC_API_KEY = 'tiruan';
process.env.ZUNO_ACCESS_KEY = 'rahasia-uji-123';
const { POST } = await import('../web/api/ai.js');
const { GET } = await import('../web/api/status.js');
const call = async (body, key = 'rahasia-uji-123') => {
  const r = await POST(new Request('http://x/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-zuno-key': key }, body: JSON.stringify(body) }));
  const txt = await r.text();
  return { status: r.status, lines: txt.trim().split('\n').map((l) => JSON.parse(l)) };
};
const out = [];
let r = await call({ input: 'tes' }, 'salah');
out.push(['kunci salah -> 401', r.status === 401 && r.lines[0].code === 'not_granted']);
r = await call({ input: 'tes', tier: 'default' });
const text = r.lines.filter((l) => l.t === 'delta').map((l) => l.text).join('');
out.push(['stream teks utuh', text === '{"halo":"zuno"}']);
out.push(['done end_turn + model', r.lines.at(-1).t === 'done' && r.lines.at(-1).stop === 'end_turn' && r.lines.at(-1).model === 'claude-opus-5-5']);
out.push(['fallbacks default + beta header', lastBody.json.fallbacks === 'default' && /server-side-fallback-2026-07-01/.test(lastBody.headers['anthropic-beta'] || '')]);
out.push(['effort default medium', lastBody.json.output_config && lastBody.json.output_config.effort === 'medium']);
out.push(['tanpa temperature', !('temperature' in lastBody.json)]);
r = await call({ input: [{ role: 'user', content: 'a' }, { role: 'assistant', content: 'b' }, { role: 'user', content: 'lanjut' }], images: [{ media_type: 'image/jpeg', data: 'QUJD' }], tier: 'quick', effort: 'low' });
const m0 = lastBody.json.messages[0];
out.push(['turn array + gambar di user pertama', lastBody.json.messages.length === 3 && Array.isArray(m0.content) && m0.content[0].type === 'image']);
out.push(['effort low diteruskan', lastBody.json.output_config.effort === 'low']);
mode = 'potong'; r = await call({ input: 'panjang' });
out.push(['max_tokens dilaporkan', r.lines.at(-1).stop === 'max_tokens']);
mode = '401'; r = await call({ input: 'x' });
out.push(['key server salah -> event error', r.lines.at(-1).t === 'error' && r.lines.at(-1).code === 'server_key']);
const st = await (await GET()).json();
out.push(['status tanpa bocor kunci', st.ai_key_set === true && st.access_set === true && !JSON.stringify(st).includes('tiruan')]);
fake.close();
let fail = 0; for (const [n, ok] of out) { console.log((ok ? 'LOLOS ' : 'GAGAL ') + n); if (!ok) fail++; }
console.log(fail ? fail + ' gagal' : 'semua lolos'); process.exit(fail ? 1 : 0);
