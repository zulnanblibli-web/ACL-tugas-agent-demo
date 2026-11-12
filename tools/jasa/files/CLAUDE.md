# Aturan kerja Claude Code di repo ini (Nexaoffice)

Pemilik repo ini adalah pemilik brand yang tercantum di Pengaturan brand web. Jawab dalam bahasa yang dipakai pemilik (bawaan: Bahasa Indonesia, santai, to the point).

## Skill
- Skill ada di `.claude/skills` (daftar dan pemakainya di `.claude/skills/README.md`). Cara pasang alat yang dibutuhkan skill: `PANDUAN-LOKAL.md`. Cek kesiapan: `node tools/pasang/cek-kesiapan.mjs`.
- **Referensi dulu, pemilik memilih.** Sebelum mengerjakan dengan skill (arah desain, tema, palet, gaya film, konsep, gaya 3D), tampilkan pilihan referensi dari skill itu dan biarkan pemilik memilih. Untuk halaman/situs baru, tawarkan juga pilihan skill-nya (hallmark, impeccable, awwwards).
- Aturan di file ini jadi acuan. Bila sebuah aturan membuat hasil lebih jelek, sebutkan bentroknya dan biarkan pemilik yang memutuskan.

## Wajib
- **Layanan berbayar tidak dipakai tanpa izin pemilik** (contoh: DataForSEO, impeccable Pro, Hyper3D/Sketchfab, API gambar berbayar, upgrade paket).
- **API key dan rahasia** hanya di `.env.local` atau environment, tidak pernah ditulis ke chat, log, atau file yang ikut ke GitHub.
- **Jangan mengarang** angka, testimoni, logo klien, pengalaman, atau fakta pemilik. Bagian yang belum ada isinya ditandai [ISI]. Harga yang belum ditentukan pemilik: [HARGA BELUM DITENTUKAN].
- **Posting**: hasilkan output lengkap; pemilik memilih; yang dipilih masuk Antrian Posting. Tidak ada yang diunggah tanpa persetujuan pemilik.
- **Deploy**: buat preview dulu sebagai `index.html` yang bisa dibuka pemilik; setelah pemilik setuju, baru deploy.
- **Push ke GitHub** hanya bila pemilik memintanya.
- Sebelum menyatakan pekerjaan selesai, tunjukkan bukti uji (tes atau pemeriksaan yang benar-benar dijalankan). Kegagalan dilaporkan apa adanya.
- Jangan menghapus file di luar folder repo dan folder kerja; jangan mengubah pengaturan sistem atau keamanan komputer.
