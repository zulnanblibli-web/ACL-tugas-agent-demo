#!/usr/bin/env node
// Rekap semua episode -> produksi/KALENDER.md (status + rencana posting per akun)
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'produksi');
const rows = [];
for (const akun of readdirSync(AKAR)) { const a = join(AKAR, akun); if (!statSync(a).isDirectory()) continue;
  for (const ep of readdirSync(a)) { const f = join(a, ep, 'episode.json'); if (!existsSync(f)) continue;
    const e = JSON.parse(readFileSync(f, 'utf8')); const final = join(a, ep, 'final');
    const mp4 = existsSync(final) ? readdirSync(final).filter(x => x.endsWith('.mp4')) : [];
    rows.push({ akun: e.akun, tanggal: e.tanggal, judul: e.judul, status: e.status, jadwal: e.rencana_posting?.jadwal || '-', folder: `${akun}/${ep}`, mp4: mp4.length ? 'ada' : '-' }); } }
rows.sort((x, y) => (x.tanggal + x.akun).localeCompare(y.tanggal + y.akun));
const t = ['# Kalender produksi dan rencana posting', '', `Dibuat otomatis oleh \`node tools/produksi/rekap.mjs\`. Jangan diedit manual; ubah \`episode.json\` di folder episode.`, '',
  '| Tanggal | Akun | Judul | Status | Jadwal posting | Video | Folder |', '|---|---|---|---|---|---|---|',
  ...rows.map(r => `| ${r.tanggal} | ${r.akun} | ${r.judul} | ${r.status} | ${r.jadwal} | ${r.mp4} | \`${r.folder}\` |`)];
writeFileSync(join(AKAR, 'KALENDER.md'), t.join('\n') + '\n'); console.log(`${rows.length} episode -> produksi/KALENDER.md`);
