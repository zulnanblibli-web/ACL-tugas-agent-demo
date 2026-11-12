// Uji server lokal web/dev-server.mjs: halaman, aset, status, kunci akses, streaming /api/ai (penyedia tiruan), dan berkas yang tidak boleh disajikan.
// Jalankan dari akar repo: node tests/zuno-web-dev-server-test.mjs   (butuh `cd web && npm install` agar paket SDK ada)
import http from 'node:http';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fake = http.createServer((req, res) => {
  req.on('data', () => {}); req.on('end', () => {
    res.writeHead(200, { 'content-type': 'text/event-stream' });
    const d = (o) => res.write('data: ' + JSON.stringify(o) + '\n\n');
    d({ model: 'm-x', choices: [{ delta: { content: '{"halo":' } }] });
    d({ model: 'm-x', choices: [{ delta: { content: '"lokal"}' }, finish_reason: 'stop' }] });
    res.write('data: [DONE]\n\n'); res.end();
  });
});
await new Promise((r) => fake.listen(0, r));
const PORT = 3917;
// Port 3917 sengaja dipakai dulu: server lokal harus pindah sendiri ke port berikutnya.
const blocker = http.createServer(() => {}); await new Promise((r) => blocker.listen(PORT, '127.0.0.1', r));
import fs from 'node:fs';
const LOGF = path.join(root, 'web', 'server-lokal.log'); try { fs.unlinkSync(LOGF); } catch {}
const child = spawn(process.execPath, ['dev-server.mjs'], { cwd: path.join(root, 'web'), env: { ...process.env, PORT: String(PORT), AI_PROVIDER: 'openrouter', OPENROUTER_API_KEY: 'kunci-tiruan', AI_MODEL: 'm-x', ZUNO_ACCESS_KEY: 'rahasia-lokal-1234567', NEXA_CORS_ORIGIN: 'https://situs.contoh', COMPAT_BASE_URL_TEST: 'http://127.0.0.1:' + fake.address().port + '/v1/chat/completions' } });
let log = ''; child.stdout.on('data', (d) => (log += d)); child.stderr.on('data', (d) => (log += d));
for (let i = 0; i < 50 && !/Nexaoffice jalan/.test(log); i++) await new Promise((r) => setTimeout(r, 100));
const m = log.match(/jalan di\s+(http:\/\/127\.0\.0\.1:(\d+))/);
const U = m ? m[1] : 'http://127.0.0.1:' + (PORT + 1);
const out = [];
const ok = (n, c) => out.push([n, !!c]);
try {
  ok('port sibuk: pindah otomatis ke ' + (PORT + 1), m && Number(m[2]) === PORT + 1 && /sedang dipakai aplikasi lain/.test(log));
  const lg = fs.existsSync(LOGF) ? fs.readFileSync(LOGF, 'utf8') : '';
  ok('log diagnosa ditulis tanpa isi key', /jalan di http:\/\/127\.0\.0\.1:/.test(lg) && /key terisi/.test(lg) && !lg.includes('kunci-tiruan') && !lg.includes('rahasia-lokal'));
  let r = await fetch(U + '/'); let t = await r.text();
  ok('halaman utama Nexaoffice 200 (hero kantor 3D + Workspace)', r.status === 200 && /Nexaoffice/.test(t) && t.includes('id="beranda"') && t.includes('/office/ruang.html'));
  r = await fetch(U + '/office/ruang.html'); t = await r.text(); ok('kantor 3D sematan /office/ruang.html 200', r.status === 200 && t.includes('class="sematan"'));
  r = await fetch(U + '/kantor.html'); ok('/kantor.html tidak dipakai lagi (404)', r.status === 404);
  r = await fetch(U + '/api/ai', { method: 'OPTIONS', headers: { origin: 'https://situs.contoh', 'access-control-request-method': 'POST' } });
  ok('CORS: situs di NEXA_CORS_ORIGIN boleh (204 + header)', r.status === 204 && r.headers.get('access-control-allow-origin') === 'https://situs.contoh' && /x-llm-key/.test(r.headers.get('access-control-allow-headers')));
  r = await fetch(U + '/api/ai', { method: 'OPTIONS', headers: { origin: 'https://lain.contoh' } }); ok('CORS: situs lain ditolak (403)', r.status === 403 && !r.headers.get('access-control-allow-origin'));
  r = await fetch(U + '/api/status', { headers: { origin: 'https://situs.contoh' } }); ok('CORS: /api/status menyertakan izin asal', r.headers.get('access-control-allow-origin') === 'https://situs.contoh');
  r = await fetch(U + '/studio.html'); t = await r.text();
  ok('ruang kerja /studio.html 200 dan memuat ZUNO + input gambar cover', r.status === 200 && /ZUNO/.test(t) && t.includes('id="coverfile"'));
  r = await fetch(U + '/assets/foto-zulnan.webp'); ok('foto cover webp 200', r.status === 200 && r.headers.get('content-type') === 'image/webp' && (await r.arrayBuffer()).byteLength > 10000);
  r = await fetch(U + '/assets/karakter/zuno-tim-orkestrasi.webp'); ok('gambar karakter 200', r.status === 200);
  { const v = await fetch(U + '/api/versi'); const j = await v.json(); ok('/api/versi: app nexaoffice + sidik versi halaman', v.status === 200 && j.app === 'nexaoffice' && /^[0-9a-f]{10}$/.test(j.versi)); }
  r = await fetch(U + '/studio-nexa.css'); ok('css 200', r.status === 200 && /text\/css/.test(r.headers.get('content-type')));
  r = await fetch(U + '/api/status'); const s0 = await r.json(); ok('status tanpa kunci akses: terkunci, tanpa penyedia/model/setelan', s0.online === true && s0.terkunci === true && Object.keys(s0).length === 2);
  r = await fetch(U + '/api/status', { headers: { 'x-zuno-key': 'rahasia-lokal-1234567' } }); const s = await r.json(); ok('status online, penyedia openrouter, key terisi, tanpa membocorkan kunci', s.online === true && s.provider === 'openrouter' && s.ai_key_set === true && s.access_set === true && !JSON.stringify(s).includes('kunci-tiruan') && !JSON.stringify(s).includes('rahasia-lokal'));
  r = await fetch(U + '/api/ai', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ input: 'x' }) }); ok('tanpa kunci akses: 401', r.status === 401);
  r = await fetch(U + '/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-zuno-key': 'salah' }, body: JSON.stringify({ input: 'x' }) }); ok('kunci salah: 401', r.status === 401);
  r = await fetch(U + '/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-zuno-key': 'rahasia-lokal-1234567' }, body: JSON.stringify({ input: 'tes' }) });
  const L = (await r.text()).trim().split('\n').map((l) => JSON.parse(l));
  ok('streaming /api/ai lewat server lokal: teks utuh + done', r.status === 200 && L.filter((l) => l.t === 'delta').map((l) => l.text).join('') === '{"halo":"lokal"}' && L.at(-1).t === 'done');
  for (const p of ['/.env.local', '/.env.local.example', '/api/ai.js', '/dev-server.mjs', '/bangun.mjs', '/package.json', '/vercel.json', '/src/hud.js', '/src/site/index.html', '/node_modules/x', '/%2e%2e/package.json', '/assets/../package.json', '/server-lokal.log']) { r = await fetch(U + p); ok('tidak disajikan: ' + p, r.status === 404); }
  r = await fetch(U + '/', { method: 'DELETE' }); ok('metode DELETE ditolak (405)', r.status === 405);
} finally { child.kill(); fake.close(); blocker.close(); try { fs.unlinkSync(LOGF); } catch {} }
let bad = 0; for (const [n, c] of out) { console.log((c ? 'OK   ' : 'GAGAL') + ' ' + n); if (!c) bad++; }
console.log(bad ? bad + ' GAGAL\n' + log : 'semua lolos');
process.exit(bad ? 1 : 0);
