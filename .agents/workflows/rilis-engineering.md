---
description: Rilis proyek Divisi Engineering Zuno dari paket rilis Build App sampai live, lalu minta Zulnan cek link live (gerbang 3)
---

Jalankan di folder proyek hasil ekstrak paket `*_rilis.zip` dari tab Build App. Patuhi aturan di `.agents/rules/zuno-engineering.md`.

## 0. Baca paket
1. Baca `INSTRUKSI-RILIS.md`, `PANDUAN.md`, `ruang-lingkup.json`, `desain.json`, dan `PRD.md` bila ada. Gerbang 1 dan 2 sudah disetujui Zulnan.
2. Bila ada folder `referensi-desain/`: itu acuan tampilan dari Zulnan (lihat `acuan_referensi` di `desain.json`). Ikuti arahnya, jangan menyalin logo, merek, atau teks milik orang lain.
3. Tulis ringkasan 5 baris: nama proyek, mesin (`mesin` di ruang lingkup), jumlah fitur, apa yang harus Zulnan isi sendiri. Lanjut tanpa menunggu.

## 1. Lengkapi dan uji
1. Jalankan lokal sesuai `PANDUAN.md` (aplikasi statis: `npx serve`).
2. Perbaiki bug dengan mencari akar masalahnya dulu, bukan menebak.
3. Uji di browser Antigravity:
   - semua butir `definisi_selesai`;
   - lebar laptop (1280) dan HP (390);
   - data terburuk: nama sangat panjang, kosong, ribuan item, teks non-Latin;
   - keamanan: API key hanya di server, password di-hash, akun acak, kotak Contoh akses, menu Reset Akses, kredit sesuai jenis proyek.
4. Catat bukti: perintah yang dijalankan, hasilnya, dan screenshot di `bukti/`.

## 2. Deploy ke link live
Pilih jalur sesuai `mesin`. Login CLI dilakukan Zulnan sendiri. Bila belum login, berhenti dan minta Zulnan login.

| Mesin | Link untuk dicek (gerbang 3) | Final setelah Zulnan oke |
|---|---|---|
| Vercel + Supabase | `vercel deploy` (URL preview) | `vercel deploy --prod` |
| Apps Script + Sheets/Blogger | `clasp push` lalu `clasp deploy` (URL web app `/exec`) | Deployment yang sama ditandai final di `PANDUAN.md` |
| Firebase | `firebase hosting:channel:deploy cek-<nama>` | `firebase deploy --only hosting` |

- Env dan API key diisi Zulnan sendiri di dashboard. Jangan ditulis di kode atau di chat.
- Proyek klien dideploy ke akun yang ditentukan Zulnan. Bila belum jelas, tanya dulu.
- Bila mesin atau paket butuh bayar, berhenti dan minta izin.

## 3. Cek link live
1. Buka link live di browser Antigravity. Ikuti alur utama: login dengan akun contoh, coba tiap menu, Reset Akses.
2. Ulangi di lebar HP (390).
3. Simpan screenshot di `bukti/`.
4. Jendela izin Google, login, dan UAC: berhenti dan minta Zulnan yang klik.

## 4. Gerbang 3 (Zulnan)
1. Laporkan singkat: link live, akun contoh, tabel bukti uji, apa yang belum bisa diuji dan kenapa, langkah yang perlu Zulnan lakukan (isi env dan sebagainya).
2. Tunggu jawaban Zulnan:
   - **oke**: jalankan langkah "Final" di tabel bagian 2, catat link final di `PANDUAN.md`, status "Rilis";
   - **revisi**: ubah hanya bagian yang diminta, ulangi bagian 1 sampai 4.
3. Jangan pernah menyatakan "rilis" atau "selesai" sebelum Zulnan oke dan sebelum ada bukti uji.
