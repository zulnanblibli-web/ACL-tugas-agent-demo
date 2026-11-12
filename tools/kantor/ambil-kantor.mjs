// Menyalin Kantor 3D (hasil build) dari kantor-3d/ ke Nexaoffice Web (web/), supaya tampil di /office/ruang.html (disematkan).
// Sejak 2026-11-12 sumber Kantor 3D ada di repo ini (kantor-3d/), bukan lagi di repo jasa: kerja satu arah,
// ubah di Zuno lalu ekspor ke jasa. web/build.mjs menjalankan skrip ini otomatis. Manual:
//   (cd kantor-3d && npm run build:themes)   bila kode kantor diubah
//   node tools/kantor/ambil-kantor.mjs [folder-sumber]   (bawaan: kantor-3d/)
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync, existsSync, rmSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const web = join(here, '..', '..', 'web');
const jasa = process.argv[2] || join(here, '..', '..', 'kantor-3d'); // nama variabel lama: folder sumber Kantor 3D
if (!existsSync(join(jasa, 'kantor.html'))) throw new Error('Sumber Kantor 3D tidak ditemukan: ' + jasa + ' (harus berisi kantor.html)');
if (!existsSync(join(jasa, 'office', 'office.bundle.js'))) throw new Error('office/office.bundle.js belum ada: jalankan npm run build:themes di kantor-3d/');

function swap(teks, cari, ganti, nama) {
  const n = teks.split(cari).length - 1;
  if (n !== 1) throw new Error(nama + ': penanda harus ada tepat satu kali (' + n + '): ' + cari);
  return teks.replace(cari, () => ganti);
}

// Kantor 3D tidak lagi punya halaman sendiri (/kantor.html): tampil langsung di situs dan User Interface
// lewat iframe ke /office/ruang.html (DOM kantor yang sama + sematan.css/js dari web/src/kantor).
let kantor = readFileSync(join(jasa, 'kantor.html'), 'utf8');
kantor = swap(kantor, '<html lang="id">', '<html lang="id" class="sematan">', 'kantor.html');
kantor = swap(kantor, '<meta name="author" content="Zuno Studio">', '<meta name="author" content="Creative @nexamind.ai">', 'kantor.html');
kantor = kantor.replace(/<title>[^<]*<\/title>/, '<title>Kantor 3D · Nexaoffice</title>');
kantor = swap(kantor, '<link rel="stylesheet" href="/office/office.css">', '<link rel="stylesheet" href="/office/office.css"><link rel="stylesheet" href="/office/sematan.css">', 'kantor.html');
kantor = swap(kantor, '<script type="module" src="/office/office.bundle.js"></script>', '<script src="/office/sematan.js" defer></script><script type="module" src="/office/office.bundle.js"></script>', 'kantor.html');
mkdirSync(join(web, 'office'), { recursive: true });
writeFileSync(join(web, 'office', 'ruang.html'), kantor);
rmSync(join(web, 'kantor.html'), { force: true });

mkdirSync(join(web, 'office'), { recursive: true });
for (const f of ['office.bundle.js', 'office.css']) copyFileSync(join(jasa, 'office', f), join(web, 'office', f));
// Galeri karakter: tautan kembali ke kantor di situs (bukan /kantor.html).
// Modul gerak bersama (web/src/site/gerak.*) ikut dipasang.
let galeri = readFileSync(join(jasa, 'office', 'karakter.html'), 'utf8').split('href="/kantor.html"').join('href="/#kantor"');
galeri = swap(galeri, '</head>', "<script>if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('nx-gerak')</script><link rel=\"stylesheet\" href=\"/site/gerak.css\"></head>", 'karakter.html');
galeri = swap(galeri, '</body>', "<script src=\"/site/gerak.js\" defer></script></body>", 'karakter.html');
writeFileSync(join(web, 'office', 'karakter.html'), galeri);

for (const d of ['agents', 'themes']) {
  const out = join(web, 'assets', d);
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  for (const f of readdirSync(join(jasa, 'assets', d))) copyFileSync(join(jasa, 'assets', d, f), join(out, f));
}

// The Grotto (tema ketiga): scene satu lantai sendiri di repo jasa (nexa.html + nexa/ + assets/nexa).
// Di Nexaoffice tampil di iframe kantor yang sama (hero dan Workspace) lewat web/src/kantor/nexa-sematan.*;
// pilihan tema dikendalikan web/src/kantor/kendali.js (ganti src iframe), bukan oleh halaman The Grotto sendiri.
let nexa = readFileSync(join(jasa, 'nexa.html'), 'utf8');
nexa = swap(nexa, '<link rel="stylesheet" href="/nexa/style.css">', '<link rel="stylesheet" href="/nexa/style.css"><link rel="stylesheet" href="/office/nexa-sematan.css">', 'nexa.html');
nexa = swap(nexa, '<script type="module" src="/nexa/studio.bundle.js"></script>', '<script src="/office/nexa-sematan.js" defer></script><script type="module" src="/nexa/studio.bundle.js"></script>', 'nexa.html');
nexa = swap(nexa, 'href="/#ruangKerja"', 'href="/studio.html"', 'nexa.html');
writeFileSync(join(web, 'nexa.html'), nexa);
mkdirSync(join(web, 'nexa'), { recursive: true });
copyFileSync(join(jasa, 'nexa', 'style.css'), join(web, 'nexa', 'style.css'));
// Menu tema di halaman The Grotto kembali ke kantor tertanam (bukan /kantor.html, yang di Nexaoffice dialihkan ke beranda).
let bundel = readFileSync(join(jasa, 'nexa', 'studio.bundle.js'), 'utf8');
bundel = swap(bundel, '/kantor.html?theme=', '/office/ruang.html?awal=dalam&theme=', 'nexa/studio.bundle.js');
writeFileSync(join(web, 'nexa', 'studio.bundle.js'), bundel);
function salinFolder(a, b) {
  rmSync(b, { recursive: true, force: true });
  mkdirSync(b, { recursive: true });
  for (const f of readdirSync(a)) {
    const s = join(a, f);
    if (statSync(s).isDirectory()) salinFolder(s, join(b, f)); else copyFileSync(s, join(b, f));
  }
}
salinFolder(join(jasa, 'assets', 'nexa'), join(web, 'assets', 'nexa'));
console.log('Kantor 3D disalin ke web/ (office/ruang.html, office/, assets/agents, assets/themes, nexa.html, nexa/, assets/nexa)');
