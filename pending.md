# Pending tugas

Daftar tugas yang ditahan Zulnan. Aturan (Zulnan 2026-11-04):
- Bila Zulnan bilang sesuatu "pending", catat di sini.
- Bila Zulnan bertanya "pending tugas", jawab dari daftar ini.
- Hapus butir hanya bila Zulnan bilang lanjut atau batal; pindahkan ke "Selesai / dibatalkan" dengan tanggal.

| # | Tugas | Sejak | Catatan |
|---|---|---|---|
| P1 | Auto posting dari web lewat Google Drive + API Metricool. Isinya: jadwal tanggal/jam dipilih Zulnan per konten; hapus skill `antrian-posting` versi laptop dan tombol zip | 2026-11-04 | Perlu: menu API Metricool ada atau tidak; sambungkan IG/TikTok/Threads + Google Drive di Metricool. Lihat `docs/alur-posting.md` |
| P2 | Isi [ISI] brief: handle akun | 2026-11-04 | Dipasang di slide carousel |
| P3 | Isi [ISI] brief: tayangan minimal (batas view konten "menang") | 2026-11-04 | Angka dari Zulnan |
| P4 | Isi [ISI]: tanda konten AI di Instagram/TikTok (semua atau hanya visual AI) | 2026-11-04 | Ikut P1 |
| P5 | VPS (9router + agent Telegram Hermes) dan versi agent live di web + desktop berdesain kantor | 2026-11-04 | Diputuskan setelah fondasi workflow beres |
| P6 | Riset otomatis (Apify/Scrapelyfy) | 2026-11-02 | Sebagian jalan 2026-11-06: Google Trends + Google News + Hacker News di Zuno Web (`web/api/riset.js`). Apify/Scrapelyfy (Instagram/TikTok) belum |
| P7 | Penyimpanan permanen (kartu dan antrian tidak hilang saat refresh) | 2026-11-02 | |
| P8 | Footage karakter video tipe A/B (butuh generator) dan render di VPS | 2026-11-03 | |
| P10 | Isi untuk edisi jasa: [ISI kontak penjual], [ISI masa dukungan] di LISENSI, harga jasa | 2026-11-04 | `docs/jasa-zuno.md` |
| P9 | Kontras tombol Zuno Web (hasil cek hallmark 2.14:1, standar 4.5:1) | 2026-11-04 | Keputusan tampilan di Zulnan |
| P11 | Kantor 3D di repo jasa (branch `feat/kantor-3d-voxel`, 7 commit 2026-11-09 dari sesi agent lain, sampai `3717c8f`): putuskan diamankan dari ekspor, dipindah jadi fitur Zuno, atau dibiarkan. Revisi desain yang sempat terpotong sudah dikerjakan ulang 2026-11-09 (commit `1f06a8f`: dua tema Menara Senja + Griya Langit dengan bangunan sendiri, semua tes kantor lolos); branch belum di-merge ke `main` | 2026-11-09 | Risiko: `tools/jasa/ekspor-jasa.mjs` menimpa `index.html` dan menghapus `assets/` di repo jasa. Bila branch di-merge ke `main`, ekspor berikutnya menghapus 18 GLB agen, gambar tema, dan link "JELAJAHI KANTOR 3D". Sama untuk 4 commit langsung di `main` 2026-11-08 (`AGENTS-18.md`, perubahan `index.html`). Jangan jalankan ekspor jasa sebelum ini diputuskan |

## Selesai / dibatalkan
(belum ada)
