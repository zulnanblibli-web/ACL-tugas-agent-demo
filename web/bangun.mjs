// Membangun halaman ruang kerja dari prototypes/zuno-studio-v2.html (sumber tunggal logika agen).
//   bangunRuangKerja('nexa') -> web/studio.html, tampilan Nexaoffice (dipakai web/build.mjs)
//   bangunRuangKerja('jasa') -> index.html edisi jasa, tampilan HUD lama (dipakai tools/jasa/ekspor-jasa.mjs)
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const part = (f) => readFileSync(join(here, 'src', f), 'utf8');

// Gambar hero HUD: web/assets/zuno-hero.(webp|jpg|png), robot menghadap ke kiri (ke inti ZUNO).
function heroHud() {
  const img = ['webp', 'jpg', 'png'].map((e) => 'zuno-hero.' + e).find((f) => existsSync(join(here, 'assets', f)));
  if (!img) throw new Error('Gambar hero tidak ada: taruh web/assets/zuno-hero.webp (lihat web/assets/README.md)');
  const fig = '<img src="/assets/' + img + '" alt="" width="736" height="910" decoding="async" fetchpriority="high">';
  return part('hero.html').replace('<!--FIGURE-->', () => fig);
}

export function bangunRuangKerja(varian) {
  if (varian !== 'nexa' && varian !== 'jasa') throw new Error('varian harus nexa atau jasa');
  let out = readFileSync(join(here, '..', 'prototypes', 'zuno-studio-v2.html'), 'utf8');
  const swap = (oldStr, newStr) => {
    const n = out.split(oldStr).length - 1;
    if (n !== 1) throw new Error('Penanda tidak ditemukan tepat satu kali (' + n + '): ' + oldStr.slice(0, 60));
    out = out.replace(oldStr, () => newStr);
  };
  const nexa = varian === 'nexa';
  swap('<title>Zuno Studio v2</title>', nexa
    ? '<title>Nexaoffice · Ruang Kerja</title>\n<meta name="description" content="Ruang kerja Nexaoffice: 18 agen AI untuk riset, naskah, desain, dan build web app.">\n<meta name="author" content="Creative @nexamind.ai">\n<meta name="theme-color" content="#060b14">'
    : '<title>ZUNO · Tim Agent AI</title>\n<meta name="description" content="Zuno: tim agent AI pribadi untuk riset, naskah, desain, dan build web app.">\n<meta name="author" content="Creative @nexamind.ai">\n<meta name="theme-color" content="#03060b">');
  swap('</style>\n</head>', nexa
    ? '</style>\n<link rel="preload" href="/assets/fonts/antonio-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>\n<link rel="preload" href="/assets/fonts/onest-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>\n<link rel="stylesheet" href="/studio-nexa.css">\n</head>'
    : '</style>\n<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800;900&display=swap" rel="stylesheet">\n<link rel="stylesheet" href="/hud.css">\n</head>');
  // Ruang kerja dan diagram "Cara kerja" (menurun) berdampingan, supaya proses terlihat tanpa scroll.
  swap('<body>\n<div class="wrap">\n<h1>Zuno Studio</h1>', nexa
    ? '<body>\n' + part('studio-hero.html') + '\n<div class="ws-layout" id="ruangKerja">\n<div class="wrap">'
    : '<body>\n' + heroHud() + '\n<div class="ws-title" id="ruangKerja">RUANG KERJA</div>\n<div class="ws-layout">\n<div class="wrap">');
  swap('</div><!-- /wsBuild -->\n</div>', '</div><!-- /wsBuild -->\n</div>\n' + part('flow.html') + '</div><!-- /ws-layout -->\n' + part(nexa ? 'studio-tail.html' : 'tail.html'));
  swap('\n<script>\n', nexa
    ? '\n<script src="/live.js"></script>\n<script src="/hud.js"></script>\n<script src="/studio-nexa.js" defer></script>\n<script src="/serah.js" defer></script>\n<script>\n'
    : '\n<script src="/live.js"></script>\n<script src="/hud.js"></script>\n<script src="/motion.js" defer></script>\n<script>\n');
  // Pesan error disesuaikan untuk versi web.
  swap("not_granted:'Izin Claude belum diberikan.'", "not_granted:'Kunci akses " + (nexa ? 'Nexaoffice' : 'Zuno') + " salah atau belum diisi. Klik KUNCI AKSES di atas.',not_configured:'Server " + (nexa ? 'Nexaoffice' : 'Zuno') + " belum disetel (ZUNO_ACCESS_KEY di Vercel).',no_credit:'Saldo penyedia AI habis. Isi saldo di halaman Credits OpenRouter, lalu jalankan lagi.'");
  swap("info.textContent='Halaman ini baru bisa menjalankan agen saat dibuka di claude.ai dan diberi izin memakai Claude.'", "info.textContent='Server " + (nexa ? 'Nexaoffice' : 'Zuno') + " tidak bisa dihubungi. Muat ulang halaman.'");
  if (nexa) {
    // Diagram cara kerja dan dialog kunci memakai nama Nexaoffice.
    swap('<aside class="hud-flow" id="hFlowBox" aria-label="Cara kerja Zuno">', '<aside class="hud-flow" id="hFlowBox" aria-label="Cara kerja tim">');
    swap('<h2>CARA KERJA ZUNO</h2>', '<h2>Cara kerja tim</h2>');
  }
  return out;
}
