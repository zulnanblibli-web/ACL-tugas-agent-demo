# Nexaoffice

Kantor AI dengan 18 agen untuk konten dan build (web app, website, game, 3D). Kamu memberi perintah di Workspace, agen bekerja di kantor 3D, dan hasilnya tampil saat itu juga. Tidak ada yang terbit sebelum kamu setujui. Web ini milikmu sendiri: berjalan di laptop, akun Vercel, atau VPS-mu, dan memakai API key AI-mu sendiri.

"Nexaoffice" nama bawaan. Setelah **Pengaturan brand** diisi, nama brand-mu yang tampil.

## Jalankan di laptop (satu perintah)

Web di `http://localhost:3000` **plus** Claude Code dengan semua skill (desain web, 3D/Blender, video dari kode, YouTube, marketing):
- Windows: klik dua kali `pasang.bat`
- macOS / Linux / VPS: `bash pasang.sh`

Urutan pasang, kebutuhan tiap skill, dan skill tambahan yang disarankan: [PANDUAN-LOKAL.md](PANDUAN-LOKAL.md).

## Atau pasang di Vercel (4 langkah)

1. Masuk ke GitHub. Di kanan atas halaman repo ini, klik **Fork** lalu **Create fork**.
2. Buat akun gratis di [vercel.com](https://vercel.com) (pilih **Continue with GitHub**). Klik **Add New… → Project**, pilih repo hasil fork tadi, lalu klik **Import**.
3. Buka **Environment Variables**, lalu isi 2 baris:
   - **GEMINI_API_KEY**: buat gratis di [aistudio.google.com/apikey](https://aistudio.google.com/apikey).
   - **ZUNO_ACCESS_KEY**: kata sandi buatanmu sendiri, minimal 16 karakter. Ini dipakai untuk membuka web.
4. Klik **Deploy**.

Setelah selesai, buka link web-mu, isi **Pengaturan brand**, lalu klik **Pengaturan** (kanan atas) dan masukkan `ZUNO_ACCESS_KEY` di **Kunci akses server**.

Di VPS sendiri: `docs/vps-nexaoffice.md`.

Panduan lengkap (mengenal Workspace, tambah agen, ganti penyedia AI, pindah perangkat, masalah umum): [PANDUAN.md](PANDUAN.md).

## Penting
- API key hanya disimpan di server-mu (Vercel, `.env.local` di laptop/VPS) atau di browser-mu sendiri bila memakai API key lokal. Tidak pernah tampil di halaman.
- Biaya AI ditagih penyedia AI langsung ke akunmu. Gemini punya kuota gratis dengan batas harian.
- Pembaruan: buka repo fork-mu di GitHub, klik **Sync fork → Update branch**. Vercel memasang versi baru otomatis; di laptop/VPS jalankan `git pull`.
- Lisensi pemakaian: [LISENSI.md](LISENSI.md).
