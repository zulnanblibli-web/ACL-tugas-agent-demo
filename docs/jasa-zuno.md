# Zuno Studio edisi jasa (dijual ke pembeli)

Keputusan Zulnan 2026-11-04: Zuno Studio dijual sebagai jasa. Tiap pembeli mendapat **salinan sendiri** (fork) yang dipasang di Vercel miliknya, dengan **API key miliknya sendiri**. Key pembeli tidak pernah lewat akun Zulnan. Produk jasa ada di **repo terpisah**; repo ini hanya menyimpan alat ekspor dan tesnya.

## Isi
- `tools/jasa/ekspor-jasa.mjs`: membuat edisi jasa dari `web/` (sumber tetap satu, `prototypes/zuno-studio-v2.html`).
- `tools/jasa/files/`:
  - `brand.js`: halaman Pengaturan Brand dan pengganti identitas;
  - `README.md`, `PANDUAN.md` (panduan pembeli), `LISENSI.md`;
  - `.gitignore`.
- `tests/zuno-jasa-test.js`: tes edisi jasa. Yang dicek:
  - prompt, halaman, dan unduhan tanpa nama atau fakta Zulnan;
  - memakai data brand pembeli;
  - Pengaturan Brand muncul di pemakaian pertama dan bisa disimpan;
  - alur konten jalan sampai Setujui.

## Bedanya dengan Zuno milik Zulnan
- Identitas Zulnan (nama, bank fakta, slogan, audiens, pilar, kredit Nexamind, foto, avatar) diganti data dari **PENGATURAN BRAND**. Data itu disimpan di browser pembeli, dengan ekspor/impor `.json`.
- Penyedia AI otomatis mengikuti key yang diisi: Gemini, OpenRouter, OpenAI, lalu Claude. `AI_PROVIDER` tidak wajib.
- Foto Zulnan dan gambar avatar percakapan tidak ikut. Gambar tim Zuno dan hero robot ikut.
- Logika agen tetap sama dengan Zuno. Pembaruan Zuno cukup diekspor ulang.

## Membuat atau memperbarui repo jasa
1. `node web/build.mjs`
2. `node tools/jasa/ekspor-jasa.mjs <folder-clone-repo-jasa>`
3. `node tests/zuno-jasa-test.js <folder-clone-repo-jasa>`. Wajib berakhir **HASIL: SEMUA LOLOS**.
4. Commit dan push repo jasa, hanya bila langkah 3 lolos.

**Aturan Zulnan: salinan jasa harus selalu bisa jalan.**
- Setiap ada perubahan di Zuno Web atau `prototypes/zuno-studio-v2.html`, jalankan langkah 1-3.
- Bila ekspor berhenti ("penanda ditemukan 0 kali") atau tes gagal, perbaiki sampai lolos sebelum push.
- Bagian yang belum selesai di Zuno, misalnya posting Metricool yang masih pending, tidak dinyatakan berfungsi di panduan pembeli.

**Fitur khusus repo jasa (2026-11-09).** Repo jasa punya bagian yang tidak ada di Zuno; ekspor menjaganya:
- `index.html`: agen E.2 Bima (Remotion), E.3 Fira (Google Flow), T.5 Damar (audit bug & security di Build App), dan tombol hero "JELAJAHI KANTOR 3D". Disimpan di `tools/jasa/tambahan-jasa.mjs` dan ditempel ulang tiap ekspor; penanda yang hilang menghentikan ekspor. Fitur baru yang dibuat langsung di `index.html` repo jasa harus ditambahkan ke file itu, kalau tidak akan terhapus di ekspor berikutnya.
- `assets/agents/` (18 GLB + PNG) dan `assets/themes/` tidak dihapus ekspor. Folder aset lain tetap diganti dari Zuno.
- `package.json` digabung (dependensi `three`, devDependencies, script Kantor 3D tetap); `package-lock.json` repo jasa dipertahankan dan ekspor berhenti bila dependensi Zuno belum ada di dalamnya.
- Sejak Nexaoffice (2026-11-09): ekspor membaca ruang kerja dari `web/studio.html` dan melepas merek Nexaoffice (`web/merek.mjs`), jadi `index.html` jasa tetap white-label. Halaman utama Nexaoffice (`web/index.html`, `web/site/`) dan aset situs (`assets/site`, `assets/fonts`, `nexaoffice-alur.*`) tidak ikut; salinan Kantor 3D di `web/` juga tidak ikut (sumbernya repo jasa).
- File yang tidak disentuh ekspor sama sekali: `kantor.html`, `office/`, `preview/`, `tests/`, `tools/`, `artifacts/`, `AGENTS-18.md`, `progress.md`, `.github/`.

## Menjual ke pembeli
1. Repo jasa dibuat **private** di GitHub Zulnan, `zulnanblibli-web/zuno-studio-app` (https://github.com/zulnanblibli-web/zuno-studio-app).
2. Undang pembeli: GitHub → repo jasa → **Settings → Collaborators → Add people** (akses Read).
3. Pembeli mengikuti `README.md` / `PANDUAN.md` di repo itu: Fork, impor ke Vercel, isi `GEMINI_API_KEY` + `ZUNO_ACCESS_KEY`, lalu Deploy.
4. Pembaruan sampai ke pembeli lewat **Sync fork**.
5. Mencabut akses (lisensi berakhir): hapus pembeli dari Collaborators.

Belum diisi Zulnan:
- [ISI kontak penjual] dan [ISI masa dukungan] di `LISENSI.md`;
- harga jasa: [HARGA BELUM DITENTUKAN].

Draf lisensi bukan nasihat hukum. Cek ke ahli bila perlu.

## Riset otomatis untuk pembeli (2026-11-06)
Pembeli bisa menyetel riset web sendiri lewat Environment Variables di Vercel mereka (`RISET_KATA_KUNCI`, `RISET_NEGARA`, `RISET_BAHASA`, `RISET_SUMBER`, `RISET_HARI_BERITA`, `RISET_HARI_DISKUSI`, `RISET_AKTIF`). Panduannya ada di `PANDUAN.md` edisi jasa bagian 6. Sumbernya gratis tanpa API key. Catatan ketentuan: feed Google News hanya untuk pemakaian pribadi.
