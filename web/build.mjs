// Membangun Nexaoffice Web:
//   web/studio.html  ruang kerja (dari prototypes/zuno-studio-v2.html, sumber tunggal logika agen) dengan tampilan Nexaoffice
//   web/index.html   halaman utama Nexaoffice (dari web/src/site/)
// Jalankan ulang setiap kali zuno-studio-v2.html atau web/src/ berubah:  node web/build.mjs
// Edisi jasa memakai studio.html + berkas yang sama, dijadikan white-label oleh tools/jasa/ekspor-jasa.mjs.
import { writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { bangunRuangKerja } from './bangun.mjs';
import { tulisProfilWeb } from '../tools/agen/profil-web.mjs';

const here = dirname(fileURLToPath(import.meta.url));
// Kantor 3D: sumbernya kantor-3d/ di repo ini (sejak 2026-11-12). Disalin ke web/ setiap build supaya tidak ketinggalan.
// Kode kantor diubah? Jalankan dulu: (cd kantor-3d && npm run build:themes)
execFileSync(process.execPath, [join(here, '..', 'tools', 'kantor', 'ambil-kantor.mjs')], { stdio: 'inherit' });
const studio = bangunRuangKerja('nexa');
writeFileSync(join(here, 'studio.html'), studio);
// hud.js: logika status dan kunci akses (tetap dipakai Workspace walau tampilan HUD lama sudah dihapus).
for (const f of ['hud.js', 'live.js', 'serah.js', 'studio-nexa.css', 'studio-nexa.js', 'ui.js', 'pengaturan-ai.js', 'tim-agen.js']) copyFileSync(join(here, 'src', f), join(here, f));
// Profil agents/ untuk menu Tambah agen (contoh isian + bahan pelatihan HRD).
tulisProfilWeb(join(here, 'assets', 'agen-profil.json'));
mkdirSync(join(here, 'site'), { recursive: true });
for (const f of ['site.css', 'tokens.css', 'base.css', 'gerak.css', 'gerak.js', 'site.js']) copyFileSync(join(here, 'src', 'site', f), join(here, 'site', f));
copyFileSync(join(here, 'src', 'site', 'index.html'), join(here, 'index.html'));
// Kantor 3D sematan: pengatur di dalam iframe (sematan.*) dan kendali dari halaman induk (kendali.js).
mkdirSync(join(here, 'office'), { recursive: true });
for (const f of ['sematan.css', 'sematan.js', 'kendali.js', 'nexa-sematan.css', 'nexa-sematan.js']) copyFileSync(join(here, 'src', 'kantor', f), join(here, 'office', f));
console.log('web/studio.html dibuat (' + studio.length + ' karakter), web/index.html = halaman utama Nexaoffice');
