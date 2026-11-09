// Uji menu Pengaturan AI di sisi server (web/api/ai.js): mode server (key env) vs mode API key lokal (header x-llm-*),
// penolakan yang wajib, dan key pemakai tidak bocor ke balasan. Penyedia tiruan, tanpa jaringan luar.
//   node tests/nexaoffice-pengaturan-ai-test.mjs
import http from 'node:http';
const terima = [];
const fake = http.createServer((req, res) => {
  let body = ''; req.on('data', (d) => (body += d)); req.on('end', () => {
    terima.push({ url: req.url, auth: req.headers.authorization || '', goog: req.headers['x-goog-api-key'] || '', body });
    if ((req.headers.authorization || '').includes('key-ditolak')) { res.writeHead(401, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ error: { message: 'Invalid API key' } })); }
    if (req.url.startsWith('/v1beta/models?')) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ models: [{ name: 'models/gemini-9.0-pro', supportedGenerationMethods: ['generateContent'] }, { name: 'models/gemini-9.0-flash', supportedGenerationMethods: ['generateContent'] }] })); }
    res.writeHead(200, { 'content-type': 'text/event-stream' });
    if (req.url.includes(':streamGenerateContent')) { res.write('data: ' + JSON.stringify({ candidates: [{ content: { parts: [{ text: 'OK gemini' }] }, finishReason: 'STOP' }] }) + '\n\n'); return res.end(); }
    res.write('data: ' + JSON.stringify({ model: 'm', choices: [{ delta: { content: 'OK' }, finish_reason: 'stop' }] }) + '\n\n'); res.write('data: [DONE]\n\n'); res.end();
  });
});
await new Promise((r) => fake.listen(0, '127.0.0.1', r));
const F = 'http://127.0.0.1:' + fake.address().port;
Object.assign(process.env, { ZUNO_ACCESS_KEY: 'akses-uji-1234567890', AI_PROVIDER: 'openrouter', OPENROUTER_API_KEY: 'kunci-server', AI_MODEL: 'm-server', COMPAT_BASE_URL_TEST: F + '/v1/chat/completions', GEMINI_BASE_URL: F });
delete process.env.NEXA_KUNCI_PENGGUNA; delete process.env.NEXA_IZINKAN_LOKAL;
const { POST } = await import('../web/api/ai.js');
const out = []; const ok = (n, c) => out.push([n, !!c]);
async function panggil(h, input = 'tes') {
  const r = await POST(new Request('http://x/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-zuno-key': 'akses-uji-1234567890', ...h }, body: JSON.stringify({ input, tier: 'quick' }) }));
  const teks = await r.text();
  return { status: r.status, teks, L: r.status === 200 ? teks.trim().split('\n').map((l) => JSON.parse(l)) : [] };
}
try {
  let a = await panggil({});
  ok('mode server: memakai key env server', a.status === 200 && terima.at(-1).auth === 'Bearer kunci-server' && JSON.parse(terima.at(-1).body).model === 'm-server');
  a = await panggil({ 'x-llm-provider': 'openrouter', 'x-llm-key': 'key-pemakai-abc', 'x-llm-model': 'model-pilihan' });
  ok('mode lokal: memakai key dan model dari Pengaturan AI', a.status === 200 && terima.at(-1).auth === 'Bearer key-pemakai-abc' && JSON.parse(terima.at(-1).body).model === 'model-pilihan');
  ok('mode lokal: key pemakai tidak muncul di balasan', !a.teks.includes('key-pemakai-abc'));
  a = await panggil({ 'x-llm-provider': 'gemini', 'x-llm-key': 'key-gemini-pemakai' });
  ok('mode lokal Gemini: model otomatis dipilih dengan key pemakai', a.status === 200 && terima.some((t) => t.url.startsWith('/v1beta/models?') && t.goog === 'key-gemini-pemakai') && terima.at(-1).goog === 'key-gemini-pemakai' && a.L.at(-1).model === 'gemini-9.0-flash');
  a = await panggil({ 'x-llm-provider': 'openrouter', 'x-llm-key': 'key-ditolak' });
  ok('key pemakai ditolak penyedia: kode user_key (bukan server_key)', a.L.some((l) => l.t === 'error' && l.code === 'user_key'));
  a = await panggil({ 'x-llm-provider': 'entah', 'x-llm-key': 'k' });
  ok('penyedia tak dikenal: 400', a.status === 400);
  a = await panggil({ 'x-llm-provider': 'openai-compatible', 'x-llm-key': 'k', 'x-llm-model': 'm', 'x-llm-base': 'http://10.0.0.5/v1' });
  ok('endpoint jaringan lokal/http ditolak di server publik: 400', a.status === 400 && /https/.test(a.teks));
  a = await panggil({ 'x-llm-provider': 'openai-compatible', 'x-llm-key': 'k', 'x-llm-model': 'm', 'x-llm-base': 'https://localhost:8080/v1' });
  ok('endpoint localhost https juga ditolak: 400', a.status === 400);
  process.env.NEXA_KUNCI_PENGGUNA = 'off';
  a = await panggil({ 'x-llm-provider': 'openrouter', 'x-llm-key': 'k' });
  ok('NEXA_KUNCI_PENGGUNA=off: 403 byok_off', a.status === 403 && /byok_off/.test(a.teks));
  delete process.env.NEXA_KUNCI_PENGGUNA;
  const r = await POST(new Request('http://x/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-llm-provider': 'openrouter', 'x-llm-key': 'k' }, body: JSON.stringify({ input: 'x' }) }));
  ok('mode lokal tetap butuh kunci akses: 401', r.status === 401);
} finally { fake.close(); }
let bad = 0; for (const [n, c] of out) { console.log((c ? 'OK    ' : 'GAGAL ') + n); if (!c) bad++; }
console.log(bad ? 'HASIL: ' + bad + ' GAGAL' : 'HASIL: SEMUA LOLOS');
process.exit(bad ? 1 : 0);
