// Zuno Web: server lokal untuk uji di komputer sendiri (tanpa Vercel).
// Menyajikan halaman dan memakai handler yang sama dengan Vercel (api/ai.js, api/status.js).
// Pakai:  cd web && npm install && node dev-server.mjs   lalu buka http://localhost:3000
// Pengaturan dibaca dari web/.env.local (salin dari .env.local.example). API key hanya ada di file itu.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

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

// Handler dimuat setelah env terisi (api/ai.js membaca env saat dimuat).
const { POST } = await import('./api/ai.js');
const { GET } = await import('./api/status.js');

const PORT = Number(process.env.PORT || 3000);
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json'
};
// Hanya berkas halaman yang disajikan (bukan .env.local, api/, node_modules, dll).
const ALLOWED = /^(index\.html|hud\.css|hud\.js|live\.js|motion\.js|assets\/[A-Za-z0-9._\/-]+)$/;

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
async function sendWeb(res, resp) {
  res.writeHead(resp.status, Object.fromEntries(resp.headers));
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
    if (url.pathname === '/api/ai' && req.method === 'POST') return await sendWeb(res, await POST(await toWebRequest(req)));
    if (url.pathname === '/api/status' && req.method === 'GET') return await sendWeb(res, await GET(await toWebRequest(req)));
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
    const rel = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const file = path.resolve(here, rel);
    if (!ALLOWED.test(rel) || !file.startsWith(here + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); return res.end('Tidak ditemukan'); }
    res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-store' });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  } catch (e) {
    if (!res.headersSent) res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Galat server lokal: ' + String((e && e.message) || e).slice(0, 200));
  }
});

server.listen(PORT, '127.0.0.1', () => {
  const provider = (process.env.AI_PROVIDER || 'claude').toLowerCase();
  const keyEnv = { claude: 'ANTHROPIC_API_KEY', openai: 'OPENAI_API_KEY', gemini: 'GEMINI_API_KEY', openrouter: 'OPENROUTER_API_KEY', 'openai-compatible': 'AI_BASE_URL' }[provider];
  console.log('\nZuno Web lokal jalan di  http://localhost:' + PORT + '  (hanya bisa dibuka dari komputer ini)');
  console.log('  Berkas pengaturan : ' + (hasEnvFile ? 'web/.env.local terbaca' : 'TIDAK ADA. Salin web/.env.local.example menjadi web/.env.local lalu isi'));
  console.log('  Penyedia AI       : ' + provider + (keyEnv && process.env[keyEnv] ? ' (key terisi)' : ' (key BELUM terisi: ' + (keyEnv || '?') + ')'));
  console.log('  Kunci akses       : ' + (process.env.ZUNO_ACCESS_KEY ? 'terisi (masukkan lewat tombol KUNCI AKSES di halaman)' : 'BELUM terisi (ZUNO_ACCESS_KEY, acak, minimal 16 karakter)'));
  console.log('  Berhenti          : tekan Ctrl+C\n');
});
