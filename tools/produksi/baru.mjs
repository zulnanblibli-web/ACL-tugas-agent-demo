#!/usr/bin/env node
// Buat folder episode baru yang rapi: produksi/<akun>/<tanggal>_<judul>/
// Pakai: node tools/produksi/baru.mjs --akun faktadibedah --judul "Kenapa motong bawang bikin nangis?" [--tanggal 2026-11-13]
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'produksi');
const AKUN = { faktadibedah: 'Fakta harian + fakta umum yang orang belum tahu', teknikdibedah: 'Mesin apa pun + pembangunan', pulau: 'Seri pulau (nanti)', stickman: 'Akun stickman (nanti)', zulnan: 'Akun personal Zulnan' };
const arg = k => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : undefined; };
const akun = arg('akun'), judul = arg('judul');
if (!akun || !judul || !AKUN[akun]) { console.log('Pakai: node tools/produksi/baru.mjs --akun <' + Object.keys(AKUN).join('|') + '> --judul "Judul video" [--tanggal YYYY-MM-DD]'); process.exit(1); }
const tanggal = arg('tanggal') || new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jakarta' }).format(new Date());
const slug = judul.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
const dir = join(AKAR, akun, `${tanggal}_${slug}`);
if (existsSync(dir)) { console.log('Sudah ada: ' + dir); process.exit(1); }
for (const d of ['proyek', 'suara', 'final']) mkdirSync(join(dir, d), { recursive: true });
const ep = { akun: '@' + akun, judul, tanggal, status: 'ide', riwayat: [{ tanggal, status: 'ide', catatan: 'folder dibuat' }],
  rencana_posting: { platform: ['TikTok', 'Instagram Reels', 'YouTube Shorts'], jadwal: '', link: {} }, durasi_detik: null, suara: null };
writeFileSync(join(dir, 'episode.json'), JSON.stringify(ep, null, 2) + '\n');
writeFileSync(join(dir, '01-naskah.md'), `# Naskah: ${judul}\nAkun @${akun} · ${tanggal} · status: draf (dicek Zulnan dulu sebelum render)\n\nAlur wajib: ZOOM OUT (hal umum yang orang lihat) -> ZOOM IN (bendanya) -> BEDAH (pokok bahasan) -> JAWABAN -> PENUTUP. Gaya "lu", relate, 3 fakta "wah baru tau".\n\n---\n\n**1. ZOOM OUT** · *visual*\n> "narasi"\n\nTeks layar: -\n\n**10. PENUTUP** · *visual + kartu pertanyaan*\n> "... Tulis dikomentar, nanti gua pilih, kita ${akun === 'teknikdibedah' ? 'bongkar' : 'bedah'} sesuai permintaan lu."\n\nTeks layar: Kartu penutup + @${akun}\n`);
writeFileSync(join(dir, '02-fakta.md'), `# Fakta + sumber: ${judul}\n\n| # | Klaim | Sumber (URL) | Kutipan |\n|---|---|---|---|\n`);
writeFileSync(join(dir, '03-treatment.md'), `# Treatment: ${judul}\n\n(struktur, shot list, desain suara)\n`);
writeFileSync(join(dir, 'posting.md'), `# Rencana posting: ${judul}\n\n- Status: belum disetujui\n- Jadwal: [ISI]\n- Platform: TikTok, Instagram Reels, YouTube Shorts\n\n## Caption\n[ISI]\n\nSumber: (dari 02-fakta.md)\nKonten ini dibuat dengan bantuan AI (suara narator).\n\n## Hashtag\n#${akun}\n\n## Link setelah tayang\n- TikTok:\n- Instagram:\n- YouTube:\n`);
writeFileSync(join(dir, '.gitignore'), 'suara/*.wav\nproyek/out/\nproyek/stills/\nproyek/events.json\nfinal/*.mp4\nfinal/*.wav\n');
console.log(dir);
