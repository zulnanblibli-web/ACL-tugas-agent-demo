---
name: rilis-engineering
description: Rilis proyek Divisi Engineering Zuno dari paket rilis Build App sampai benar-benar live, di laptop Zulnan (Claude Code + agent-desktop), lalu minta Zulnan cek link live (gerbang 3). Pakai saat Zulnan bilang "rilis proyek <nama>", "bikin sampai live", "deploy webapp", atau ada folder baru di proyek/.
---

# Rilis Engineering (laptop Zulnan)

Aturan induk: `docs/aturan-engineering.md` dan `docs/tangan-komputer.md`. Skill ini hanya jalan di laptop Zulnan. Sesi cloud tidak bisa men-deploy dari laptop.

## 0. Ambil paket
1. Cari `*_rilis.zip` terbaru di folder Downloads Zulnan (`%USERPROFILE%\Downloads`). Bila ada, ekstrak ke root repo; isinya `proyek/<nama>/`. Folder `proyek/` tidak ikut ke GitHub.
2. Baca isi paket:
   - `INSTRUKSI-RILIS.md`;
   - `ruang-lingkup.json` dan `desain.json` (gerbang 1 dan 2, sudah disetujui Zulnan);
   - `PANDUAN.md`;
   - `PRD.md` bila ada;
   - gambar di `referensi-desain/` bila ada: acuan tampilan dari Zulnan (lihat `acuan_referensi` di `desain.json`). Ikuti arahnya, jangan menyalin logo, merek, atau teks milik orang lain.
3. Fitur, tampilan, kredit, dan aturan akun tidak boleh diubah di luar yang disetujui. Bila ada yang tidak mungkin dikerjakan, tanya Zulnan dulu. Jangan diam-diam memangkas fitur.

## 1. Lengkapi dan uji (T.3, T.4)
1. Jalankan lokal:
   - aplikasi statis: `npx serve`;
   - mesin lain: sesuai `PANDUAN.md`.
2. Perbaiki bug. Pakai `systematic-debugging` untuk cari akar masalah dan `review-my-diff` sebelum lanjut.
3. Uji:
   - semua butir `definisi_selesai`;
   - lebar laptop (1280) dan HP (390), dengan Playwright;
   - `break-ui` untuk data terburuk;
   - `mobile-native`;
   - `vibe-security`: API key hanya di server, password di-hash, akun acak, kotak Contoh akses, menu Reset Akses, kredit sesuai jenis proyek.
4. Catat bukti dengan `prove-it-ran`: perintah, hasil, dan screenshot di `proyek/<nama>/bukti/`.

## 2. Deploy ke link live
Pilih jalur sesuai `mesin` di ruang lingkup. Login CLI dilakukan Zulnan sendiri sekali. Bila belum login, berhenti dan minta Zulnan login. Jangan mengetik password atau kode OTP.

| Mesin | Link untuk dicek (gerbang 3) | Final setelah Zulnan oke |
|---|---|---|
| Vercel + Supabase | `vercel deploy` (URL preview) | `vercel deploy --prod` |
| Apps Script + Sheets/Blogger | `clasp push` lalu `clasp deploy` (URL web app `/exec`) | Deployment yang sama ditandai final di `PANDUAN.md` |
| Firebase | `firebase hosting:channel:deploy cek-<nama>` | `firebase deploy --only hosting` |

- Env dan API key diisi Zulnan sendiri di dashboard (Vercel, Supabase, Firebase) atau di Script Properties. Jangan ditulis di kode atau di chat.
- Proyek klien dideploy ke akun yang ditentukan Zulnan. Bila belum jelas, tanya dulu.
- Biaya: bila mesin atau paket butuh bayar, berhenti dan minta izin Zulnan.

## 3. Cek link live (agent-desktop)
1. Buka link live di browser lewat agent-desktop. Ikuti alur utama: login dengan akun contoh, coba tiap menu, Reset Akses.
2. Ulangi di lebar HP dengan Playwright.
3. Simpan screenshot di `proyek/<nama>/bukti/`. Jangan menyimpan isi layar lain.
4. Jendela izin Google ("Allow access", consent OAuth), login, dan UAC: berhenti dan minta Zulnan yang klik.

## 4. Gerbang 3 (Zulnan)
1. Laporkan singkat ke Zulnan (gaya Juru Kabar):
   - link live;
   - akun contoh;
   - tabel bukti uji;
   - apa yang belum bisa diuji dan kenapa;
   - langkah yang perlu Zulnan lakukan (isi env, dan lain-lain).
2. Tunggu jawaban Zulnan:
   - **oke**: jalankan langkah "Final" di tabel bagian 2, catat link final di `PANDUAN.md`, status "Rilis".
   - **revisi**: ubah hanya bagian yang diminta, ulangi bagian 1 sampai 4.
3. Jangan pernah menyatakan "rilis" atau "selesai" sebelum Zulnan oke dan sebelum ada bukti uji.
