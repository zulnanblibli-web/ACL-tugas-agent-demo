#!/usr/bin/env node
// Cek kesiapan: alat apa yang sudah terpasang, skill mana yang siap jalan penuh, apa yang masih kurang.
// Tidak memasang apa pun dan tidak menampilkan isi API key.
//   node tools/pasang/cek-kesiapan.mjs          (tabel)
//   node tools/pasang/cek-kesiapan.mjs --json   (untuk dibaca program)
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { homedir, platform } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const WIN = platform() === 'win32';
const JSONMODE = process.argv.includes('--json');

function jalan(cmd) {
  try { return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], timeout: 20000, windowsHide: true }).toString().trim(); }
  catch (e) { return null; }
}
const ada = (bin) => !!jalan(WIN ? 'where ' + bin : 'command -v ' + bin);
const versi = (cmd, re) => { const o = jalan(cmd); if (!o) return null; const m = (o.match(re || /(\d+)\.(\d+)(?:\.(\d+))?/) || []); return m[0] || o.split('\n')[0].slice(0, 40); };
const mayor = (v) => Number(String(v || '').split('.')[0]) || 0;

const PY = ['python3', 'python', 'py'].find((b) => ada(b) && jalan(b + ' --version')) || null;
const pyMod = (m) => !!(PY && jalan(PY + ' -c "import ' + m + '"'));

function cariBrowser() {
  const cand = WIN
    ? [join(process.env.PROGRAMFILES || 'C:\\Program Files', 'Google\\Chrome\\Application\\chrome.exe'),
       join(process.env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)', 'Microsoft\\Edge\\Application\\msedge.exe'),
       join(process.env.PROGRAMFILES || 'C:\\Program Files', 'Microsoft\\Edge\\Application\\msedge.exe'),
       join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe')]
    : ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge', '/opt/pw-browsers/chromium'];
  for (const p of cand) if (p && existsSync(p)) return p;
  for (const b of ['google-chrome', 'chromium', 'chromium-browser', 'microsoft-edge']) if (!WIN && ada(b)) return b;
  const pw = join(homedir(), WIN ? 'AppData\\Local\\ms-playwright' : '.cache/ms-playwright');
  if (existsSync(pw) && readdirSync(pw).some((d) => d.startsWith('chromium'))) return pw;
  return null;
}
function cariBlender() {
  if (ada('blender')) return 'blender';
  if (WIN) {
    const base = join(process.env.PROGRAMFILES || 'C:\\Program Files', 'Blender Foundation');
    if (existsSync(base)) for (const d of readdirSync(base)) if (existsSync(join(base, d, 'blender.exe'))) return join(base, d, 'blender.exe');
  } else if (existsSync('/Applications/Blender.app')) return '/Applications/Blender.app';
  return null;
}

const node = process.versions.node;
const ff = versi('ffmpeg -version', /version n?(\d+)\.(\d+)/);
const ffV = ff ? (ff.match(/(\d+)\.(\d+)/) || [])[0] : null;
const claudeV = versi('claude --version');
const mcpList = claudeV ? (jalan('claude mcp list') || '') : '';
const alat = {
  git: { ok: ada('git'), info: versi('git --version') },
  node: { ok: mayor(node) >= 20, info: node },
  node22: { ok: mayor(node) >= 22, info: node },
  python: { ok: !!PY, info: PY ? versi(PY + ' --version') : null },
  ffmpeg: { ok: !!ffV, info: ffV },
  ffmpeg7: { ok: mayor(ffV) >= 7, info: ffV },
  uv: { ok: ada('uv'), info: versi('uv --version') },
  claude: { ok: !!claudeV, info: claudeV },
  browser: { ok: !!cariBrowser(), info: cariBrowser() },
  blender: { ok: !!cariBlender(), info: cariBlender() },
  'blender-mcp': { ok: /blender/i.test(mcpList), info: /blender/i.test(mcpList) ? 'terdaftar di Claude Code' : null },
  'yt-dlp': { ok: ada('yt-dlp'), info: versi('yt-dlp --version', /\d{4}\.\d+\.\d+/) },
  docling: { ok: ada('docling'), info: null },
  graphify: { ok: ada('graphify'), info: null },
  'py:google-api-python-client': { ok: pyMod('googleapiclient'), info: null },
  'py:google-auth-oauthlib': { ok: pyMod('google_auth_oauthlib'), info: null },
  'py:google-genai': { ok: pyMod('google.genai'), info: null },
  'lemo-library': { ok: existsSync(process.env.LEMO_OPUSCAR_HOME || join(homedir(), 'lemo-opuscar')), info: process.env.LEMO_OPUSCAR_HOME || join(homedir(), 'lemo-opuscar') }
};

// ---------- pengaturan server (tanpa menampilkan isi key) ----------
const webDir = existsSync(join(root, 'web', 'dev-server.mjs')) ? join(root, 'web') : root;
const envFile = join(webDir, '.env.local');
const env = {};
if (existsSync(envFile)) for (const l of readFileSync(envFile, 'utf8').split(/\r?\n/)) { const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)$/.exec(l); if (m) env[m[1]] = m[2].trim(); }
const isi = (k) => !!(env[k] || process.env[k]);
const keyAI = ['ANTHROPIC_API_KEY', 'GEMINI_API_KEY', 'OPENROUTER_API_KEY', 'OPENAI_API_KEY'].filter(isi);
const server = {
  'file .env.local': { ok: existsSync(envFile), info: existsSync(envFile) ? envFile : 'belum ada (dibuat oleh pemasang)' },
  'paket web (npm install)': { ok: existsSync(join(webDir, 'node_modules', '@anthropic-ai', 'sdk')), info: null },
  'ZUNO_ACCESS_KEY': { ok: isi('ZUNO_ACCESS_KEY'), info: isi('ZUNO_ACCESS_KEY') ? 'terisi' : 'kosong' },
  'key penyedia AI': { ok: keyAI.length > 0, info: keyAI.length ? keyAI.join(', ') + ' terisi' : 'belum ada' },
  'YOUTUBE_API_KEY (opsional)': { ok: isi('YOUTUBE_API_KEY') || existsSync(join(homedir(), '.claude', 'youtube-credentials.json')), info: null, opsional: true }
};

// ---------- skill ----------
const keb = JSON.parse(readFileSync(join(here, 'kebutuhan-skill.json'), 'utf8'));
const dirSkill = join(root, '.claude', 'skills');
const daftar = existsSync(dirSkill) ? readdirSync(dirSkill).filter((d) => existsSync(join(dirSkill, d, 'SKILL.md'))) : [];
// Skill Blender dikenali dari LICENSE bawaan repo blender-skills (94 skill, satu baris di laporan).
const blender = new Set(daftar.filter((d) => existsSync(join(dirSkill, d, 'LICENSE')) && /blender-skills contributors/.test(readFileSync(join(dirSkill, d, 'LICENSE'), 'utf8'))));
const hasil = [];
for (const s of daftar) {
  const k = keb.skill[s] || (blender.has(s) ? keb.skill['blender-*'] : null);
  if (blender.has(s) && s !== 'blender-director') continue; // Blender diringkas jadi satu baris
  const nama = blender.has(s) ? 'Blender (' + blender.size + ' skill)' : s;
  if (!k) { hasil.push({ skill: nama, status: 'siap', kurang: [], catatan: 'panduan (tanpa alat)' }); continue; }
  const kurang = (k.alat || []).filter((a) => !(alat[a] && alat[a].ok));
  const opsKurang = (k.opsional || []).filter((a) => !(alat[a] && alat[a].ok));
  hasil.push({ skill: nama, status: kurang.length ? 'kurang' : 'siap', kurang, opsional_kurang: opsKurang, catatan: k.catatan || '' });
}

const ringkas = { siap: hasil.filter((h) => h.status === 'siap').length, kurang: hasil.filter((h) => h.status === 'kurang').length };
if (JSONMODE) { console.log(JSON.stringify({ alat, server, skill: hasil, ringkas }, null, 2)); process.exit(0); }

const V = (o) => (o ? 'OK   ' : 'BELUM');
console.log('\n=== Cek kesiapan (' + (WIN ? 'Windows' : platform()) + ') ===\n');
console.log('Alat:');
for (const [n, a] of Object.entries(alat)) if (!n.startsWith('py:') && n !== 'node22' && n !== 'ffmpeg7') console.log('  ' + V(a.ok) + '  ' + n.padEnd(14) + (a.info ? ' ' + a.info : ''));
console.log('  ' + V(alat['py:google-api-python-client'].ok && alat['py:google-auth-oauthlib'].ok) + '  paket Python YouTube');
console.log('\nServer web:');
for (const [n, a] of Object.entries(server)) console.log('  ' + (a.opsional && !a.ok ? '-    ' : V(a.ok)) + '  ' + n + (a.info ? ': ' + a.info : ''));
console.log('\nSkill (' + daftar.length + ' folder di .claude/skills):');
for (const h of hasil) {
  if (h.status === 'siap' && !(h.opsional_kurang || []).length && h.catatan === 'panduan (tanpa alat)') continue;
  console.log('  ' + (h.status === 'siap' ? 'SIAP ' : 'KURANG') + ' ' + h.skill.padEnd(24) + (h.kurang.length ? ' perlu: ' + h.kurang.join(', ') : '') + ((h.opsional_kurang || []).length ? '  (opsional: ' + h.opsional_kurang.join(', ') + ')' : ''));
}
console.log('  Skill panduan lain (tanpa alat): ' + hasil.filter((h) => h.catatan === 'panduan (tanpa alat)').length + ' siap.');
const saran = Object.keys(keb.tidak_ikut_jasa || {}).filter((d) => !daftar.includes(d));
if (saran.length) console.log('  SARAN  belum dipasang (pasang sendiri, lihat PANDUAN-LOKAL.md bagian 6): ' + saran.map((d) => d === 'design-taste-frontend' ? 'taste-skill' : d).join(', '));
console.log('\nRingkas: ' + ringkas.siap + ' siap, ' + ringkas.kurang + ' masih kurang alat.');
if (!alat.claude.ok) console.log('PENTING: Claude Code belum terpasang. Skill hanya dipakai lewat Claude Code.');
console.log('Cara memasang yang kurang: lihat panduan pasang lokal (docs/panduan-pasang-lokal.md atau PANDUAN-LOKAL.md).\n');
