// Membangun web/studio.html (ruang kerja) dari prototypes/zuno-studio-v2.html, plus halaman utama Nexaoffice (web/index.html dari web/src/site/), (sumber tunggal logika agen)
// + tampilan HUD + jembatan /api/ai. Jalankan ulang setiap kali zuno-studio-v2.html berubah:
//   node web/build.mjs
import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pasang } from './merek.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, '..', 'prototypes', 'zuno-studio-v2.html'), 'utf8');
const part = (f) => readFileSync(join(here, 'src', f), 'utf8');

let out = src;
// Gambar hero: web/assets/zuno-hero.(webp|jpg|png), robot menghadap ke kiri (ke inti ZUNO).
function heroHtml() {
  const img = ['webp', 'jpg', 'png'].map((e) => 'zuno-hero.' + e).find((f) => existsSync(join(here, 'assets', f)));
  if (!img) throw new Error('Gambar hero tidak ada: taruh web/assets/zuno-hero.webp (lihat web/assets/README.md)');
  const fig = '<img src="/assets/' + img + '" alt="" width="736" height="910" decoding="async" fetchpriority="high">';
  return part('hero.html').replace('<!--FIGURE-->', () => fig);
}
function swap(oldStr, newStr) {
  const n = out.split(oldStr).length - 1;
  if (n !== 1) throw new Error('Penanda tidak ditemukan tepat satu kali (' + n + '): ' + oldStr.slice(0, 60));
  out = out.replace(oldStr, () => newStr);
}

swap('<title>Zuno Studio v2</title>', '<title>ZUNO · Tim Agent AI</title>\n<meta name="description" content="Zuno: tim agent AI pribadi untuk riset, naskah, desain, dan build web app.">\n<meta name="author" content="Creative @nexamind.ai">\n<meta name="theme-color" content="#03060b">');
swap('</style>\n</head>', '</style>\n<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800;900&display=swap" rel="stylesheet">\n<link rel="stylesheet" href="/hud.css">\n</head>');
// Ruang kerja dan diagram "Cara kerja" (menurun) berdampingan, supaya proses terlihat tanpa scroll.
swap('<body>\n<div class="wrap">\n<h1>Zuno Studio</h1>', '<body>\n' + heroHtml() + '\n<div class="ws-title" id="ruangKerja">RUANG KERJA</div>\n<div class="ws-layout">\n<div class="wrap">');
swap('</div><!-- /wsBuild -->\n</div>', '</div><!-- /wsBuild -->\n</div>\n' + part('flow.html') + '</div><!-- /ws-layout -->\n' + part('tail.html'));
swap('\n<script>\n', '\n<script src="/live.js"></script>\n<script src="/hud.js"></script>\n<script src="/motion.js" defer></script>\n<script>\n');
// Pesan error disesuaikan untuk versi web.
swap("not_granted:'Izin Claude belum diberikan.'", "not_granted:'Kunci akses Zuno salah atau belum diisi. Klik KUNCI AKSES di atas.',not_configured:'Server Zuno belum disetel (ZUNO_ACCESS_KEY di Vercel).',no_credit:'Saldo penyedia AI habis. Isi saldo di halaman Credits OpenRouter, lalu jalankan lagi.'");
swap("info.textContent='Halaman ini baru bisa menjalankan agen saat dibuka di claude.ai dan diberi izin memakai Claude.'", "info.textContent='Server Zuno tidak bisa dihubungi. Muat ulang halaman.'");

// Ruang kerja pindah ke /studio.html dengan merek Nexaoffice (ekspor jasa melepas mereknya lagi, lihat merek.mjs).
writeFileSync(join(here, 'studio.html'), pasang(out));
for (const f of ['hud.css', 'hud.js', 'live.js', 'motion.js', 'serah.js']) copyFileSync(join(here, 'src', f), join(here, f));
// Halaman utama Nexaoffice (/): web/src/site/index.html, gaya dan skrip di /site/.
mkdirSync(join(here, 'site'), { recursive: true });
for (const f of ['site.css', 'tokens.css', 'base.css', 'site.js']) copyFileSync(join(here, 'src', 'site', f), join(here, 'site', f));
copyFileSync(join(here, 'src', 'site', 'index.html'), join(here, 'index.html'));
console.log('web/studio.html dibuat (' + out.length + ' karakter), web/index.html = halaman utama Nexaoffice');
