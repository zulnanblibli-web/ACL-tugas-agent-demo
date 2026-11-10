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
    ? '<title>Nexaoffice · Workspace</title>\n<meta name="description" content="Workspace Nexaoffice: beri perintah, 18 agen AI bekerja di kantor 3D untuk riset, naskah, desain, dan build web app.">\n<meta name="author" content="Creative @nexamind.ai">\n<meta name="theme-color" content="#12221e">'
    : '<title>ZUNO · Tim Agent AI</title>\n<meta name="description" content="Zuno: tim agent AI pribadi untuk riset, naskah, desain, dan build web app.">\n<meta name="author" content="Creative @nexamind.ai">\n<meta name="theme-color" content="#12221e">');
  swap('</style>\n</head>', nexa
    ? '</style>\n<script>if(!matchMedia(\'(prefers-reduced-motion: reduce)\').matches)document.documentElement.classList.add(\'nx-gerak\')</script>\n<link rel="stylesheet" href="/studio-nexa.css">\n</head>'
    : '</style>\n<link rel="stylesheet" href="/hud.css">\n</head>');
  // Ruang kerja dan diagram "Cara kerja" (menurun) berdampingan, supaya proses terlihat tanpa scroll.
  // Nexaoffice: satu tempat kerja. Kantor 3D di kiri (agen ikut status kerja asli), perintah + format di kanan,
  // di bawahnya hasil kerja agen yang tampil live (menggantikan diagram "Cara kerja" dan panel Proses).
  // Jasa: tampilan HUD lama, ruang kerja dan diagram "Cara kerja" berdampingan.
  swap('<body>\n<div class="wrap">\n<h1>Zuno Studio</h1>', nexa
    ? '<body>\n' + part('studio-hero.html') + '<div class="wrap">'
    : '<body>\n' + heroHud() + '\n<div class="ws-title" id="ruangKerja">RUANG KERJA</div>\n<div class="ws-layout">\n<div class="wrap">');
  swap('</div><!-- /wsBuild -->\n</div>', nexa
    ? '</div><!-- /wsBuild -->\n</div>\n</div><!-- /ws-kanan -->\n</main>\n' + part('studio-tail.html') + '\n' + part('pengaturan-ai.html') + '\n' + part('tim-agen.html')
    : '</div><!-- /wsBuild -->\n</div>\n' + part('flow.html') + '</div><!-- /ws-layout -->\n' + part('tail.html') + '\n' + part('pengaturan-ai.html'));
  swap('\n<script>\n', nexa
    ? '\n<script src="/live.js"></script>\n<script src="/hud.js"></script>\n<script src="/pengaturan-ai.js"></script>\n<script src="/office/kendali.js"></script>\n<script src="/studio-nexa.js" defer></script>\n<script src="/site/gerak.js" defer></script>\n<script src="/ui.js" defer></script>\n<script src="/serah.js" defer></script>\n<script src="/tim-agen.js" defer></script>\n<script>\n'
    : '\n<script src="/live.js"></script>\n<script src="/hud.js"></script>\n<script src="/pengaturan-ai.js"></script>\n<script src="/motion.js" defer></script>\n<script>\n');
  // Pesan error disesuaikan untuk versi web.
  swap("not_granted:'Izin Claude belum diberikan.'", "not_granted:'Kunci akses " + (nexa ? 'Nexaoffice' : 'Zuno') + " salah atau belum diisi. Buka " + (nexa ? 'Pengaturan' : 'Pengaturan AI') + " di atas.',not_configured:'Server " + (nexa ? 'Nexaoffice' : 'Zuno') + " belum disetel (ZUNO_ACCESS_KEY di server).',user_key:'API key di Pengaturan AI ditolak penyedia. Periksa key dan modelnya, lalu simpan ulang.',byok_off:'Server ini tidak menerima API key dari halaman. Pakai mode Server di Pengaturan AI.',no_credit:'Saldo penyedia AI habis. Isi saldo di halaman Credits OpenRouter, lalu jalankan lagi.'");
  swap("info.textContent='Halaman ini baru bisa menjalankan agen saat dibuka di claude.ai dan diberi izin memakai Claude.'", "info.textContent='Server " + (nexa ? 'Nexaoffice' : 'Zuno') + " tidak bisa dihubungi. Muat ulang halaman.'");
  if (nexa) {
    // Tab format: Konten / Build App.
    swap('id="wsK" aria-selected="true">Konten · divisi kreatif</button>', 'id="wsK" aria-selected="true">Konten</button>');
    swap('id="wsB" aria-selected="false">Build App · Divisi Engineering</button>', 'id="wsB" aria-selected="false">Build App</button>');
    swap('<label for="cmd" class="muted">Perintah atau bahan konten</label>', '<label for="cmd" class="muted">Perintah untuk tim</label>');
    // Panel Proses diganti tempat hasil kerja agen yang tampil live (ui.js). Daftar tahap tetap ada tapi tersembunyi:
    // dibaca ui.js untuk menggerakkan agen di kantor 3D.
    swap('<div class="panel hidden" id="noticep" aria-live="polite"><h2>Pemberitahuan <span class="muted">dari Juru Kabar</span></h2><div id="notices"></div></div>\n\n<div class="panel hidden" id="procp">\n  <h2>Proses</h2>\n  <div id="tracks"></div>\n  <div class="cards" id="cardlist"></div>\n</div>',
      '<section class="panel live-panel hidden" id="procp" aria-labelledby="liveJudulK">\n  <h2 id="liveJudulK">Hasil kerja agen</h2>\n  <div class="live" id="liveKonten" data-ws="konten"></div>\n  <div id="tracks" hidden></div>\n  <div class="cards" id="cardlist"></div>\n</section>\n\n<div class="panel hidden" id="noticep" aria-live="polite"><h2>Pemberitahuan <span class="muted">dari Juru Kabar</span></h2><div id="notices"></div></div>');
    swap('<div class="panel hidden" id="bprocp">\n  <h2>Proses build <span class="muted">dipantau Juru Kabar</span></h2>\n  <div id="btracks"></div>',
      '<section class="panel live-panel hidden" id="bprocp" aria-labelledby="liveJudulB">\n  <h2 id="liveJudulB">Hasil kerja agen</h2>\n  <div class="live" id="liveBuild" data-ws="build"></div>\n  <div id="btracks" hidden></div>');
    swap('  <div class="cards" id="bcard"></div>\n</div>\n<div class="panel hidden" id="bresp">', '  <div class="cards" id="bcard"></div>\n</section>\n<div class="panel hidden" id="bresp">');
  }
  return out;
}
