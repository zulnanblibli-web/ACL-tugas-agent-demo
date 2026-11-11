# Zuno Studio

Tim agent AI untuk konten dan web app. Isinya riset, naskah, desain carousel, rencana video, dan build web app, dengan persetujuanmu di setiap langkah penting. Web ini milikmu sendiri: berjalan di akun Vercel-mu dan memakai API key AI-mu sendiri.

## Pasang dalam 4 langkah

1. Masuk ke GitHub. Di kanan atas halaman repo ini, klik **Fork** lalu **Create fork**. Sekarang kamu punya salinan sendiri.
2. Buat akun gratis di [vercel.com](https://vercel.com) (pilih **Continue with GitHub**). Klik **Add New… → Project**, lalu pilih repo hasil fork tadi dan klik **Import**.
3. Buka bagian **Environment Variables**, lalu isi 2 baris:
   - **GEMINI_API_KEY**: buat gratis di [aistudio.google.com/apikey](https://aistudio.google.com/apikey).
   - **ZUNO_ACCESS_KEY**: kata sandi buatanmu sendiri, minimal 16 karakter. Ini dipakai untuk membuka web.
4. Klik **Deploy**.

Setelah selesai, buka link web-mu. Klik **KUNCI AKSES**, masukkan `ZUNO_ACCESS_KEY`, lalu isi **PENGATURAN BRAND**.

Panduan lengkap (ganti penyedia AI, pindah perangkat, masalah umum): [PANDUAN.md](PANDUAN.md).

## Atau jalankan di laptop sendiri (satu perintah)

Untuk memakai web di `http://localhost:3000` **plus** Claude Code dengan semua skill (desain web, 3D/Blender, video dari kode, YouTube, marketing):
- Windows: klik dua kali `pasang.bat`
- macOS / Linux / VPS: `bash pasang.sh`

Urutan pasang, kebutuhan tiap skill, dan skill tambahan yang disarankan: [PANDUAN-LOKAL.md](PANDUAN-LOKAL.md).

## Penting
- API key hanya disimpan di server Vercel-mu, tidak pernah tampil di halaman.
- Biaya AI ditagih penyedia AI langsung ke akunmu. Gemini punya kuota gratis dengan batas harian.
- Pembaruan: buka repo fork-mu di GitHub, klik **Sync fork → Update branch**. Vercel memasang versi baru otomatis.
- Lisensi pemakaian: [LISENSI.md](LISENSI.md).
