// Menyalin Kantor 3D (hasil build) dari repo jasa ke Nexaoffice Web (web/), supaya bisa dibuka di /kantor.html.
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

// Halaman kantor: tautan kembali ke situs Nexaoffice dan ke ruang kerja (/studio.html).
let kantor = readFileSync(join(jasa, 'kantor.html'), 'utf8');
kantor = swap(kantor, 'aria-label="Kembali ke Zuno Studio"', 'aria-label="Kembali ke Nexaoffice"', 'kantor.html');
kantor = swap(kantor, '<a href="/#ruangKerja">Buka Studio ↗</a>', '<a href="/studio.html#ruangKerja">Buka ruang kerja ↗</a>', 'kantor.html');
kantor = swap(kantor, '<meta name="author" content="Zuno Studio">', '<meta name="author" content="Creative @nexamind.ai">', 'kantor.html');
writeFileSync(join(web, 'kantor.html'), kantor);

mkdirSync(join(web, 'office'), { recursive: true });
for (const f of ['office.bundle.js', 'office.css', 'karakter.html']) copyFileSync(join(jasa, 'office', f), join(web, 'office', f));

for (const d of ['agents', 'themes']) {
  const out = join(web, 'assets', d);
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  for (const f of readdirSync(join(jasa, 'assets', d))) copyFileSync(join(jasa, 'assets', d, f), join(out, f));
}
console.log('Kantor 3D disalin ke web/ (kantor.html, office/, assets/agents, assets/themes)');
