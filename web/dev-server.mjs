// Nexaoffice / Zuno: server Node tanpa Vercel, untuk laptop sendiri ATAU server VPS.
// Menyajikan halaman dan memakai handler yang sama dengan Vercel (api/ai.js, api/status.js, api/riset.js, api/gambar.js).
// Laptop:  npm install && node dev-server.mjs   lalu buka http://localhost:3000
// VPS   :  lihat docs/vps-nexaoffice.md (skrip tools/vps/pasang-vps.sh memasang ini sebagai layanan systemd + Caddy).
// Pengaturan dibaca dari .env.local di folder ini (salin dari .env.local.example). API key hanya ada di file itu.
//   HOST              alamat dengar (bawaan 127.0.0.1; di VPS tetap 127.0.0.1 di belakang Caddy)
//   NEXA_CORS_ORIGIN  situs lain yang boleh memakai server ini, dipisah koma (mis. https://zuno-studio-dusky.vercel.app)
//   NEXA_SERVER       label server di /api/status (mis. vps)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';

const here = path.dirname(fileURLToPath(import.meta.url));
const BUKA = process.argv.includes('--buka'); // buka browser otomatis setelah server siap

// Log diagnosa (tanpa isi key): web/server-lokal.log. Kirim berkas ini bila server lokal gagal.
const LOG = path.join(here, 'server-lokal.log');
function log(msg) {
  try { fs.appendFileSync(LOG, new Date().toISOString() + '  ' + msg + '\n'); } catch {}
}
function gagal(judul, saran, e) {
  console.error('\n[GAGAL] ' + judul + '\n  ' + saran + (e ? '\n  Detail: ' + String((e && e.message) || e).split('\n')[0].slice(0, 300) : '') + '\n  Log: web\\server-lokal.log\n');
  log('GAGAL ' + judul + ' | ' + (e ? String((e && e.stack) || e).slice(0, 1500) : ''));
  process.exitCode = 1;
}
process.on('uncaughtException', (e) => { gagal('Galat tak terduga', 'Kirim isi web\\server-lokal.log ke Claude Code.', e); process.exit(1); });
log('--- mulai | node ' + process.version + ' | ' + process.platform + ' ' + process.arch + ' | folder ' + here);
if (Number(process.versions.node.split('.')[0]) < 20) {
  gagal('Node.js terlalu lama (' + process.version + ')', 'Pasang Node.js 20 atau lebih baru dari https://nodejs.org, lalu jalankan lagi.');
  process.exit(1);
}

function loadEnv(file) {
  if (!fs.existsSync(file)) return false;
  for (const raw of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!(m[1] in process.env) && v !== '') process.env[m[1]] = v; // variabel dari terminal menang atas file
  }
  return true;
}
const hasEnvFile = loadEnv(path.join(here, '.env.local'));
// Endpoint lokal (Ollama/LM Studio di mesin ini) boleh dipakai dari menu Pengaturan AI saat server jalan sendiri.
if (!('NEXA_IZINKAN_LOKAL' in process.env)) process.env.NEXA_IZINKAN_LOKAL = '1';
const HOST = process.env.HOST || '127.0.0.1';
const CORS = String(process.env.NEXA_CORS_ORIGIN || '').split(',').map((s) => s.trim().replace(/\/+$/, '')).filter(Boolean);

// Handler dimuat setelah env terisi (api/ai.js membaca env saat dimuat).
let POST, GET, RISET, GAMBAR;
try {
  ({ POST } = await import('./api/ai.js'));
  ({ GET } = await import('./api/status.js'));
  ({ GET: RISET } = await import('./api/riset.js'));
  ({ GET: GAMBAR } = await import('./api/gambar.js'));
} catch (e) {
  if (e && e.code === 'ERR_MODULE_NOT_FOUND') gagal('Paket belum terpasang', 'Jalankan "npm install" di folder web (atau hapus folder web\\node_modules lalu klik jalankan-lokal.bat lagi). Bila gagal, matikan VPN sebentar.', e);
  else gagal('Server AI tidak bisa dimuat', 'Kirim isi web\\server-lokal.log ke Claude Code.', e);
  process.exit(1);
}

let PORT = Number(process.env.PORT || 3000);
if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) PORT = 3000;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.ico': 'image/x-icon', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json', '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.hdr': 'application/octet-stream', '.glb': 'model/gltf-binary'
};
// Hanya berkas halaman yang disajikan: bukan .env.local, file bertitik, api/, node_modules, tools/, tes, .mjs, atau .json di luar assets/.
function bolehDisajikan(rel) {
  if (!/^[A-Za-z0-9._\/-]+$/.test(rel) || rel.split('/').some((p) => !p || p.startsWith('.'))) return false;
  if (/^(api|node_modules|tools|tests|artifacts|preview|prototypes|docs|src)\//.test(rel)) return false;
  return /\.(html|css|js|webp|png|jpe?g|svg|ico|glb|hdr|woff2|mp4|webm)$/.test(rel) || /^assets\/.+\.json$/.test(rel);
}
function corsHeaders(req) {
  const o = String(req.headers.origin || '').replace(/\/+$/, '');
  if (!o || !CORS.includes(o)) return null;
  return {
    'access-control-allow-origin': o, vary: 'Origin',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type, x-zuno-key, x-llm-provider, x-llm-key, x-llm-model, x-llm-base',
    'access-control-expose-headers': 'x-zuno-sumber, x-zuno-asal',
    'access-control-max-age': '600'
  };
}

async function toWebRequest(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const body = Buffer.concat(chunks);
  const headers = {};
  for (const [k, v] of Object.entries(req.headers)) if (!['host', 'connection', 'content-length', 'transfer-encoding'].includes(k)) headers[k] = Array.isArray(v) ? v.join(', ') : v;
  const ac = new AbortController();
  req.on('close', () => { if (!req.complete || req.destroyed) ac.abort(); });
  return new Request('http://localhost:' + PORT + req.url, { method: req.method, headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : body, signal: ac.signal });
}
async function sendWeb(res, resp, extra) {
  res.writeHead(resp.status, { ...Object.fromEntries(resp.headers), ...(extra || {}) });
  if (!resp.body) return res.end();
  const reader = resp.body.getReader();
  res.on('close', () => reader.cancel().catch(() => {}));
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!res.write(value)) await new Promise((r) => res.once('drain', r));
  }
  res.end();
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname.startsWith('/api/')) {
      const cors = corsHeaders(req);
      if (req.method === 'OPTIONS') { res.writeHead(cors ? 204 : 403, cors || {}); return res.end(); }
      if (url.pathname === '/api/ai' && req.method === 'POST') return await sendWeb(res, await POST(await toWebRequest(req)), cors);
      if (url.pathname === '/api/status' && req.method === 'GET') return await sendWeb(res, await GET(await toWebRequest(req)), cors);
      if (url.pathname === '/api/riset' && req.method === 'GET') return await sendWeb(res, await RISET(await toWebRequest(req)), cors);
      if (url.pathname === '/api/gambar' && req.method === 'GET') return await sendWeb(res, await GAMBAR(await toWebRequest(req)), cors);
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
    const rel = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const file = path.resolve(here, rel);
    if (!bolehDisajikan(rel) || !file.startsWith(here + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); return res.end('Tidak ditemukan'); }
    res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-store' });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  } catch (e) {
    if (!res.headersSent) res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Galat server lokal: ' + String((e && e.message) || e).slice(0, 200));
  }
});

function bukaBrowser(url) {
  const cmd = process.platform === 'win32' ? 'start "" "' + url + '"' : process.platform === 'darwin' ? 'open "' + url + '"' : 'xdg-open "' + url + '"';
  exec(cmd, (e) => { if (e) { console.log('  (Browser tidak terbuka otomatis. Buka sendiri: ' + url + ')'); log('buka browser gagal: ' + e.message); } });
}

// Port sibuk (EADDRINUSE): coba port berikutnya, maksimal 10 kali.
let percobaan = 0;
server.on('error', (e) => {
  if (e && e.code === 'EADDRINUSE' && percobaan < 9) {
    log('port ' + PORT + ' dipakai aplikasi lain, coba ' + (PORT + 1));
    console.log('  Port ' + PORT + ' sedang dipakai aplikasi lain, mencoba ' + (PORT + 1) + '...');
    percobaan++; PORT++; return server.listen(PORT, HOST);
  }
  if (e && e.code === 'EADDRINUSE') gagal('Port ' + (PORT - 9) + '-' + PORT + ' semua dipakai', 'Tutup aplikasi lain atau isi PORT=4000 di web\\.env.local.', e);
  else if (e && e.code === 'EACCES') gagal('Port ' + PORT + ' diblokir Windows/antivirus', 'Isi PORT=4000 di web\\.env.local lalu jalankan lagi.', e);
  else gagal('Server tidak bisa jalan', 'Kirim isi web\\server-lokal.log ke Claude Code.', e);
  process.exit(1);
});

server.listen(PORT, HOST);
server.on('listening', () => {
  const url = 'http://' + (HOST === '0.0.0.0' ? '127.0.0.1' : HOST) + ':' + PORT;
  const provider = (process.env.AI_PROVIDER || 'claude').toLowerCase();
  const keyEnv = { claude: 'ANTHROPIC_API_KEY', openai: 'OPENAI_API_KEY', gemini: 'GEMINI_API_KEY', openrouter: 'OPENROUTER_API_KEY', 'openai-compatible': 'AI_BASE_URL' }[provider];
  console.log('\nNexaoffice jalan di  ' + url + (HOST === '127.0.0.1' ? '  (hanya dari mesin ini' + (process.env.NEXA_SERVER === 'vps' ? '; dari luar lewat Caddy/HTTPS)' : ')') : ''));
  if (CORS.length) console.log('  Situs lain diizinkan: ' + CORS.join(', '));
  console.log('  Berkas pengaturan : ' + (hasEnvFile ? 'web/.env.local terbaca' : 'TIDAK ADA. Salin web/.env.local.example menjadi web/.env.local lalu isi'));
  console.log('  Penyedia AI       : ' + provider + (keyEnv && process.env[keyEnv] ? ' (key terisi)' : ' (key BELUM terisi: ' + (keyEnv || '?') + ')'));
  console.log('  Kunci akses       : ' + (process.env.ZUNO_ACCESS_KEY ? 'terisi (masukkan lewat tombol KUNCI AKSES di halaman)' : 'BELUM terisi (ZUNO_ACCESS_KEY, acak, minimal 16 karakter)'));
  console.log('  Berhenti          : tekan Ctrl+C (jendela ini jangan ditutup selama dipakai)\n');
  log('jalan di ' + url + ' | env ' + (hasEnvFile ? 'ada' : 'tidak ada') + ' | penyedia ' + provider + ' | key ' + (keyEnv && process.env[keyEnv] ? 'terisi' : 'kosong') + ' | akses ' + (process.env.ZUNO_ACCESS_KEY ? 'terisi' : 'kosong'));
  if (BUKA) bukaBrowser(url);
});
