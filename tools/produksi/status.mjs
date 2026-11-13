#!/usr/bin/env node
// Ubah status episode + catat riwayat. Pakai: node tools/produksi/status.mjs <folder-episode> <status> ["catatan"]
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const ALUR = ['ide', 'naskah', 'naskah-disetujui', 'render', 'ditinjau', 'disetujui', 'terjadwal', 'tayang'];
const [dir, status, catatan = ''] = process.argv.slice(2);
if (!dir || !ALUR.includes(status)) { console.log('Pakai: node tools/produksi/status.mjs <folder-episode> <' + ALUR.join('|') + '> ["catatan"]'); process.exit(1); }
if (['naskah-disetujui', 'disetujui'].includes(status) && !process.env.ZULNAN_SETUJU) { console.log(`Status "${status}" hanya dari Zulnan. Jalankan dengan ZULNAN_SETUJU=1 hanya atas perintah Zulnan.`); process.exit(1); }
const f = join(dir, 'episode.json'), e = JSON.parse(readFileSync(f, 'utf8'));
const tanggal = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jakarta' }).format(new Date());
e.status = status; (e.riwayat ||= []).push({ tanggal, status, catatan });
writeFileSync(f, JSON.stringify(e, null, 2) + '\n'); console.log(`${e.judul}: ${status}`);
