// Membaca profil agents/NN-*.md menjadi data untuk menu "Tambah agen" di Workspace (web/assets/agen-profil.json):
// struktur agen yang sudah ada dipakai sebagai contoh isian dan bahan pelatihan HRD (H.1 Hana).
// Dipanggil oleh web/build.mjs. Bisa juga sendiri:  node tools/agen/profil-web.mjs
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const bersih = (t) => String(t || '').replace(/\*\*/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim();

function bagian(md) {
  const out = {};
  let nama = null;
  for (const baris of md.split('\n')) {
    const h = /^## (.+)$/.exec(baris);
    if (h) { nama = h[1].trim(); out[nama] = []; continue; }
    if (/^#{1,3} /.test(baris)) { if (/^### /.test(baris)) nama = null; continue; } // sub-bagian "Tugas gabungan" tidak diambil
    if (nama) out[nama].push(baris);
  }
  return out;
}
const butir = (baris) => (baris || []).filter((b) => /^\s*- /.test(b)).map((b) => bersih(b.replace(/^\s*- /, ''))).filter(Boolean);
const paragraf = (baris) => bersih((baris || []).filter((b) => b.trim() && !/^\s*- /.test(b)).join(' '));

export function bacaProfil() {
  const dir = join(root, 'agents');
  return readdirSync(dir).filter((f) => /^\d\d-.*\.md$/.test(f)).sort().map((f) => {
    const md = readFileSync(join(dir, f), 'utf8');
    const fm = {};
    const m = /^---\n([\s\S]*?)\n---/.exec(md);
    if (m) m[1].split('\n').forEach((l) => { const k = /^([a-z_]+):\s*(.*)$/.exec(l); if (k) fm[k[1]] = k[2].replace(/^"|"$/g, '').trim(); });
    if (!fm.kode || !fm.panggilan) throw new Error(f + ': frontmatter kode/panggilan wajib');
    const b = bagian(md.replace(/^---\n[\s\S]*?\n---\n/, ''));
    const integrasi = {};
    butir(b['Integrasi Alur Kerja']).forEach((x) => { const k = /^([^:]+):\s*(.*)$/.exec(x); if (k) integrasi[k[1].trim().toLowerCase()] = k[2].trim(); });
    return {
      file: 'agents/' + f,
      kode: fm.kode, panggilan: fm.panggilan, nama: fm.name, deskripsi: fm.description || '', divisi: fm.divisi || '',
      status: fm.status || '', vibe: fm.vibe || '', urutan: Number(fm.urutan) || 0,
      peran: paragraf(b['Definisi Peran']),
      kemampuan: butir(b['Kemampuan Inti']),
      tugas: butir(b['Tugas di Zuno']),
      masukan: butir(b['Masukan']),
      keluaran: butir(b['Keluaran']),
      menerima: integrasi['menerima dari'] || '',
      kolaborasi: integrasi['berkolaborasi dengan'] || '',
      menyerahkan: integrasi['menyerahkan ke'] || '',
      eskalasi: integrasi['mengeskalasi ke'] || '',
      dilarang: butir(b['Dilarang']),
      metrik: butir(b['Metrik Keberhasilan']),
      gaya: butir(b['Gaya Komunikasi']),
      memori: butir(b['Pembelajaran & Memori'])
    };
  });
}

export function tulisProfilWeb(tujuan) {
  const data = bacaProfil();
  writeFileSync(tujuan, JSON.stringify({ dibuat: 'tools/agen/profil-web.mjs dari agents/', agen: data }));
  return data.length;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const n = tulisProfilWeb(join(root, 'web', 'assets', 'agen-profil.json'));
  console.log('web/assets/agen-profil.json: ' + n + ' profil');
}
