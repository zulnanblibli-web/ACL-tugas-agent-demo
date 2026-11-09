// Menyalin Kantor 3D (hasil build) dari repo jasa ke Nexaoffice Web (web/), supaya tampil di /office/ruang.html (disematkan).
// Sumber tetap di repo jasa (office/*.js, npm run build:office). Jalankan ulang setelah kantor diubah di sana:
//   node tools/kantor/ambil-kantor.mjs /home/user/zuno-studio-app
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const web = join(here, '..', '..', 'web');
const jasa = process.argv[2];
if (!jasa || !existsSync(join(jasa, 'kantor.html'))) throw new Error('Pakai: node tools/kantor/ambil-kantor.mjs <folder repo jasa>');
if (!existsSync(join(jasa, 'office', 'office.bundle.js'))) throw new Error('office/office.bundle.js belum ada: jalankan npm run build:office di repo jasa');

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
writeFileSync(join(web, 'office', 'karakter.html'), readFileSync(join(jasa, 'office', 'karakter.html'), 'utf8').split('href="/kantor.html"').join('href="/#kantor"'));

for (const d of ['agents', 'themes']) {
  const out = join(web, 'assets', d);
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  for (const f of readdirSync(join(jasa, 'assets', d))) copyFileSync(join(jasa, 'assets', d, f), join(out, f));
}
console.log('Kantor 3D disalin ke web/ (office/ruang.html, office/, assets/agents, assets/themes)');
