// Uji jalur OpenRouter/format OpenAI di web/api/ai.js dengan server tiruan. Jalankan dari folder web: node ../tests/zuno-web-openrouter-test.mjs
import http from 'node:http';
let last = null, mode = 'ok', hits = 0;
const fake = http.createServer((req, res) => {
  let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => {
    hits++;
    last = { headers: req.headers, json: JSON.parse(b || '{}') };
    if (mode === 'limit1' && hits === 1) { res.writeHead(429, { 'content-type': 'application/json', 'retry-after': '1' }); return res.end(JSON.stringify({ error: { message: 'Rate limit exceeded', code: 429 } })); }
    if (mode === 'limitterus') { res.writeHead(429, { 'content-type': 'application/json', 'retry-after': '1' }); return res.end(JSON.stringify({ error: { message: 'Rate limit exceeded', code: 429 } })); }
    if (mode === 'kredit') { res.writeHead(402, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ error: { message: 'Insufficient credits', code: 402 } })); }
    res.writeHead(200, { 'content-type': 'text/event-stream' });
    res.write(': OPENROUTER PROCESSING\n\n');
    const d = (o) => res.write('data: ' + JSON.stringify(o) + '\n\n');
    d({ model: 'penyedia/model-x', choices: [{ delta: { role: 'assistant', content: '' } }] });
    d({ model: 'penyedia/model-x', choices: [{ delta: { content: '{"halo":' } }] });
    d({ model: 'penyedia/model-x', choices: [{ delta: { content: '"openrouter"}' }, finish_reason: mode === 'potong' ? 'length' : 'stop' }] });
    res.write('data: [DONE]\n\n'); res.end();
  });
});
await new Promise((r) => fake.listen(0, r));
Object.assign(process.env, { COMPAT_BASE_URL_TEST: 'http://127.0.0.1:' + fake.address().port + '/v1/chat/completions', OPENROUTER_API_KEY: 'kunci-or-tiruan', AI_PROVIDER: 'openrouter', AI_MODEL: 'penyedia/model-x', ZUNO_ACCESS_KEY: 'rahasia-uji-123' });
const { POST } = await import('../web/api/ai.js');
const call = async (body) => { const r = await POST(new Request('http://x/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-zuno-key': 'rahasia-uji-123' }, body: JSON.stringify(body) })); return (await r.text()).trim().split('\n').map((l) => JSON.parse(l)); };
const out = [];
let L = await call({ input: 'tes' });
out.push(['streaming teks utuh (komentar SSE dilewati)', L.filter((l) => l.t === 'delta').map((l) => l.text).join('') === '{"halo":"openrouter"}' && L.filter((l) => l.t === 'delta').length === 2]);
out.push(['stream:true + model + key Bearer', last.json.stream === true && last.json.model === 'penyedia/model-x' && last.headers.authorization === 'Bearer kunci-or-tiruan' && last.headers['x-title'] === 'Zuno']);
out.push(['done end_turn', L.at(-1).t === 'done' && L.at(-1).stop === 'end_turn']);
L = await call({ input: 'x', images: [{ media_type: 'image/jpeg', data: 'QUJD' }] });
out.push(['gambar jadi image_url', Array.isArray(last.json.messages[0].content) && last.json.messages[0].content[0].type === 'image_url']);
mode = 'potong'; L = await call({ input: 'x' }); out.push(['length -> max_tokens', L.at(-1).stop === 'max_tokens']);
mode = 'limit1'; hits = 0; const t0 = Date.now(); L = await call({ input: 'x' });
out.push(['429 sekali -> tunggu lalu berhasil', hits === 2 && L.at(-1).t === 'done' && Date.now() - t0 >= 900]);
mode = 'limitterus'; hits = 0; L = await call({ input: 'x' });
out.push(['429 terus -> berhenti setelah 3x, kode rate_limited', hits === 3 && L.at(-1).t === 'error' && L.at(-1).code === 'rate_limited']);
mode = 'kredit'; hits = 0; L = await call({ input: 'x' });
out.push(['saldo habis (402) -> error jelas, tanpa ulang', hits === 1 && L.at(-1).t === 'error' && /credits/i.test(L.at(-1).message)]);
fake.close();
let f = 0; for (const [n, ok] of out) { console.log((ok ? 'LOLOS ' : 'GAGAL ') + n); if (!ok) f++; }
console.log(f ? f + ' gagal' : 'semua lolos'); process.exit(f ? 1 : 0);
