# Panduan Zuno Studio

Panduan ini untuk pemilik web Zuno Studio. Tidak perlu bisa coding.

## 1. Pasang (sekali saja, sekitar 10 menit)

1. **Akun Vercel.** Buka [vercel.com/signup](https://vercel.com/signup), pilih **Continue with GitHub**. Belum punya GitHub? Buat dulu di [github.com/signup](https://github.com/signup), gratis.
2. **Key AI gratis (Gemini).**
   - Buka [aistudio.google.com/apikey](https://aistudio.google.com/apikey), masuk pakai akun Google.
   - Klik **Create API key**, lalu salin key-nya.
   - Simpan baik-baik. Jangan dibagikan ke siapa pun, termasuk penjual.
3. **Kata sandi web (ZUNO_ACCESS_KEY).** Buat sendiri, minimal 16 karakter campuran huruf dan angka, misalnya `kuerina-2026-dapur-77`. Siapa pun yang tahu kata sandi ini bisa memakai web dan kuota AI-mu.
4. **Salin repo (fork).**
   - Buka repo Zuno Studio dari penjual di GitHub.
   - Klik **Fork** di kanan atas, lalu **Create fork**.
5. **Deploy.**
   - Di [vercel.com/new](https://vercel.com/new), pilih repo hasil fork, lalu klik **Import**.
   - Buka **Environment Variables**. Tambahkan `GEMINI_API_KEY` (isi key dari langkah 2) dan `ZUNO_ACCESS_KEY` (kata sandi dari langkah 3).
   - Klik **Deploy**. Tunggu sampai muncul "Congratulations".
   - Klik **Continue to Dashboard**, lalu buka link web-mu (`...vercel.app`).

## 2. Pemakaian pertama

1. Buka link web-mu. Jendela **Pengaturan brand** terbuka sendiri. Isi:
   - **Nama brand atau pemilik**: wajib. Nama ini dipakai agen di konten.
   - **Niche, positioning, audiens, platform**: satu kalimat masing-masing.
   - **Pilar konten**: topik besar, satu per baris.
   - **Gaya bahasa**: misalnya "santai pakai aku/kamu".
   - **Fakta brand**: hanya fakta nyata. Agen dilarang mengarang di luar ini.
   - **Slogan setelah hook video**: boleh kosong.
   - **Kredit aplikasi**: dipakai di web app buatan tab Build App.
2. Klik **Simpan dan muat ulang**.
3. Klik **KUNCI AKSES** di atas, lalu masukkan `ZUNO_ACCESS_KEY`. Status berubah jadi ONLINE.

## 3. Cara pakai

**Tab Konten**
1. Tulis perintah, misalnya "bikin konten tentang cara mulai jualan kue dari rumah".
2. Boleh tempel sumber bahan (link atau isi berita).
3. Pilih paket (carousel, video, atau dua-duanya), lalu klik **Jalankan**.
4. Tim agen bekerja berurutan. Hasilnya muncul di **Hasil**:
   - carousel berupa gambar PNG siap unduh;
   - video berupa naskah, storyboard, dan paket render.
5. Baca **Ringkasan Sebelum Terbit**. Lalu klik **Setujui**, atau tulis catatan revisi.
6. Konten yang disetujui masuk **Antrian Posting** beserta caption dan hashtag. Posting otomatis belum aktif di versi ini: unggah sendiri ke platform.

**Tab Build App**
1. Tulis permintaan aplikasi, atau unggah PRD (.md).
2. Setujui ruang lingkup (gerbang 1), lalu tampilan (gerbang 2).
3. Unduh `index.html`, file backend, dan `PANDUAN.md` proyek. Ikuti panduan proyek itu untuk memasangnya.

## 4. Pindah perangkat
Pengaturan brand tersimpan di browser.
1. Di perangkat lama: **PENGATURAN BRAND** → **Ekspor (.json)**.
2. Di perangkat baru: **PENGATURAN BRAND** → **Impor (.json)**.
3. Isi **KUNCI AKSES** sekali di tiap perangkat.

## 5. Ganti penyedia AI (opsional)
Gemini gratis punya batas harian. Kalau sering muncul "batas pemakaian tercapai", pakai penyedia lain:
1. Vercel → proyek **zuno-studio** → **Settings** → **Environment Variables**.
2. Tambahkan salah satu:

   | Penyedia | Isi variabel | Tempat ambil key |
   |---|---|---|
   | OpenRouter (banyak model, isi saldo) | `OPENROUTER_API_KEY` | [openrouter.ai/keys](https://openrouter.ai/keys) |
   | Claude (Anthropic) | `ANTHROPIC_API_KEY` + `AI_PROVIDER` = `claude` | [console.anthropic.com](https://console.anthropic.com) |
   | OpenAI | `OPENAI_API_KEY` + `AI_PROVIDER` = `openai` | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |

3. Bila lebih dari satu key terisi, tulis penyedia yang dipakai di `AI_PROVIDER`: `gemini`, `openrouter`, `claude`, atau `openai`.
4. Buka tab **Deployments**, klik titik tiga di deploy teratas, lalu pilih **Redeploy**.

## 6. Masalah umum

| Tanda | Penyebab | Cara beres |
|---|---|---|
| "Kunci akses salah atau belum diisi" | Kata sandi web salah | Klik KUNCI AKSES, isi persis seperti `ZUNO_ACCESS_KEY` di Vercel |
| "Server Zuno belum disetel" | `ZUNO_ACCESS_KEY` belum diisi di Vercel | Isi di Environment Variables, lalu Redeploy |
| "Batas pemakaian tercapai" | Kuota gratis penyedia AI habis | Tunggu besok, atau ganti penyedia (bagian 5) |
| "Saldo penyedia AI habis" | Saldo OpenRouter atau penyedia lain habis | Isi saldo di akun penyedia |
| Status OTAK AI kosong | Key AI belum diisi atau salah | Cek nama dan isi variabel, lalu Redeploy |
| Agen memakai nama atau fakta yang keliru | Pengaturan brand belum lengkap | Lengkapi PENGATURAN BRAND, lalu simpan |

## 7. Pembaruan dari penjual
1. Buka repo fork-mu di GitHub.
2. Bila ada tulisan "This branch is X commits behind", klik **Sync fork → Update branch**.
3. Vercel memasang versi baru otomatis dalam 1-2 menit.

Pengaturan brand dan key-mu tidak hilang saat pembaruan. Versi yang terpasang tertulis di `VERSI.txt`.
