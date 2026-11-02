// Uji jalur Gemini di web/api/ai.js dengan server Google tiruan. Jalankan dari folder web: node ../tests/zuno-web-gemini-test.mjs
import http from 'node:http';
let last = null, mode = 'ok';
const fake = http.createServer((req, res) => {
  let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => {
    if (req.url.startsWith('/v1beta/models?')) {
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify({ models: [
        { name: 'models/gemini-9.0-pro-preview-01', supportedGenerationMethods: ['generateContent'] },
        { name: 'models/gemini-8.5-pro', supportedGenerationMethods: ['generateContent'], outputTokenLimit: 65536 },
        { name: 'models/gemini-8.5-flash', supportedGenerationMethods: ['generateContent'], outputTokenLimit: 65536 },
        { name: 'models/gemini-7.0-pro', supportedGenerationMethods: ['generateContent'] },
        { name: 'models/text-embedding-9', supportedGenerationMethods: ['embedContent'] }
      ] }));
    }
    last = { url: req.url, key: req.headers['x-goog-api-key'], json: JSON.parse(b || '{}') };
    res.writeHead(200, { 'content-type': 'text/event-stream' });
    const d = (o) => res.write('data: ' + JSON.stringify(o) + '\r\n\r\n');
    d({ candidates: [{ content: { parts: [{ text: 'mikir', thought: true }] } }] });
    d({ candidates: [{ content: { parts: [{ text: '{"halo":' }] } }] });
    d({ candidates: [{ content: { parts: [{ text: '"gemini"}' }] }, finishReason: mode === 'potong' ? 'MAX_TOKENS' : mode === 'tolak' ? 'SAFETY' : 'STOP' }] });
    res.end();
  });
});
await new Promise((r) => fake.listen(0, r));
Object.assign(process.env, { GEMINI_BASE_URL: 'http://127.0.0.1:' + fake.address().port, GEMINI_API_KEY: 'kunci-gemini-tiruan', AI_PROVIDER: 'gemini', ZUNO_ACCESS_KEY: 'rahasia-uji-123' });
const { POST } = await import('../web/api/ai.js');
const { GET } = await import('../web/api/status.js');
const call = async (body) => { const r = await POST(new Request('http://x/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-zuno-key': 'rahasia-uji-123' }, body: JSON.stringify(body) })); return (await r.text()).trim().split('\n').map((l) => JSON.parse(l)); };
const out = [];
let L = await call({ input: 'tes', tier: 'default' });
out.push(['teks utuh tanpa bagian "thought"', L.filter((l) => l.t === 'delta').map((l) => l.text).join('') === '{"halo":"gemini"}']);
out.push(['pilih pro stabil versi tertinggi', /gemini-8\.5-pro:streamGenerateContent\?alt=sse/.test(last.url) && L.at(-1).model === 'gemini-8.5-pro']);
out.push(['maxOutputTokens dari daftar model', last.json.generationConfig && last.json.generationConfig.maxOutputTokens === 65536]);
out.push(['key lewat header', last.key === 'kunci-gemini-tiruan' && !/key=/.test(last.url)]);
L = await call({ input: [{ role: 'user', content: 'a' }, { role: 'assistant', content: 'b' }, { role: 'user', content: 'c' }], images: [{ media_type: 'image/png', data: 'QUJD' }], tier: 'quick' });
out.push(['tahap ringan pakai flash', L.at(-1).model === 'gemini-8.5-flash']);
out.push(['peran model + gambar inline', last.json.contents[1].role === 'model' && !!last.json.contents[0].parts[0].inline_data]);
mode = 'potong'; L = await call({ input: 'x' }); out.push(['MAX_TOKENS -> max_tokens', L.at(-1).stop === 'max_tokens']);
mode = 'tolak'; L = await call({ input: 'x' }); out.push(['SAFETY -> refusal', L.at(-1).stop === 'refusal']);
const st = await (await GET()).json();
out.push(['status: model otomatis', st.model === 'gemini-8.5-pro (otomatis)' && st.ai_key_set && !JSON.stringify(st).includes('tiruan')]);
fake.close();
let f = 0; for (const [n, ok] of out) { console.log((ok ? 'LOLOS ' : 'GAGAL ') + n); if (!ok) f++; }
console.log(f ? f + ' gagal' : 'semua lolos'); process.exit(f ? 1 : 0);
