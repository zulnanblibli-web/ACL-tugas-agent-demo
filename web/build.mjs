// Membangun Nexaoffice Web:
//   web/studio.html  ruang kerja (dari prototypes/zuno-studio-v2.html, sumber tunggal logika agen) dengan tampilan Nexaoffice
//   web/index.html   halaman utama Nexaoffice (dari web/src/site/)
// Jalankan ulang setiap kali zuno-studio-v2.html atau web/src/ berubah:  node web/build.mjs
// Edisi jasa (tampilan HUD lama) dibangun oleh tools/jasa/ekspor-jasa.mjs lewat bangunRuangKerja('jasa').
import { writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { bangunRuangKerja } from './bangun.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const studio = bangunRuangKerja('nexa');
bangunRuangKerja('jasa'); // ikut dicek supaya penanda edisi jasa tidak rusak diam-diam
writeFileSync(join(here, 'studio.html'), studio);
// hud.* dan motion.js tetap disalin: dipakai edisi jasa (diambil ekspor dari web/) dan diagram cara kerja.
for (const f of ['hud.css', 'hud.js', 'live.js', 'motion.js', 'serah.js', 'studio-nexa.css', 'studio-nexa.js', 'ui.js', 'pengaturan-ai.js']) copyFileSync(join(here, 'src', f), join(here, f));
mkdirSync(join(here, 'site'), { recursive: true });
for (const f of ['site.css', 'tokens.css', 'base.css', 'gerak.css', 'gerak.js', 'site.js']) copyFileSync(join(here, 'src', 'site', f), join(here, 'site', f));
copyFileSync(join(here, 'src', 'site', 'index.html'), join(here, 'index.html'));
// Kantor 3D sematan: pengatur di dalam iframe (sematan.*) dan kendali dari halaman induk (kendali.js).
mkdirSync(join(here, 'office'), { recursive: true });
for (const f of ['sematan.css', 'sematan.js', 'kendali.js']) copyFileSync(join(here, 'src', 'kantor', f), join(here, 'office', f));
console.log('web/studio.html dibuat (' + studio.length + ' karakter), web/index.html = halaman utama Nexaoffice');
