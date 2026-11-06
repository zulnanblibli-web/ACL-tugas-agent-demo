---
name: rilis-engineering
description: Use when Zulnan says "rilis proyek <nama>", "bikin sampai live", "deploy webapp", or a new *_rilis.zip from Build App is waiting in C:\zuno-proyek\unduhan. Brings the package live on Zulnan's laptop for the engine he chose (Apps Script + Sheets/Blogger, Firebase, Vercel + Supabase) using rilis.mjs, Claude Desktop (Remote Control) as the brain and agent-desktop as the hands, then reports the live link.
---

# Rilis Engineering (laptop Zulnan, tanpa disentuh)

Aturan induk: `docs/aturan-engineering.md`, `docs/tangan-komputer.md`, dan `CLAUDE.md` di folder paket. Permintaan Zulnan 2026-11-06: setelah zip dari Build App diunduh, Engineering sendiri yang mengoperasikan laptopnya sampai web app live sesuai mesin yang dia pilih. Otak: Claude Desktop (Remote Control). Tangan: agent-desktop.

## 0. Sambung ke laptop
- **Dari sesi cloud atau HP**: panggil `list_computer_folders`. Pilih folder `zuno-proyek` milik laptop Zulnan yang `online`, lalu `request_computer_folder`. Bila folder tidak ada atau laptop offline: bilang ke Zulnan satu kalimat ("buka Claude Desktop di laptop, Remote Control folder C:\zuno-proyek belum tersambung") dan berhenti.
- **Di Claude Desktop langsung**: kerja di `C:\zuno-proyek`.
- Pemasangan sekali: `pasang-tangan-komputer.bat` di repo Zuno (agent-desktop, clasp/firebase/vercel, folder kerja, sambungan agent-desktop ke Claude Desktop, login sekali).

## 1. Ambil paket
1. Cari zip terbaru: `dir /b /o-d C:\zuno-proyek\unduhan\*_rilis.zip` (cadangan: `%USERPROFILE%\Downloads`). Bila Zulnan menyebut nama, pakai yang cocok.
2. Ekstrak: `tar -xf <zip> -C C:\zuno-proyek`. Hasilnya `C:\zuno-proyek\proyek\<nama>\`. Rilis ulang (revisi) menimpa file paket tetapi `.zuno-rilis-state.json` tetap, jadi deployment dan link tetap sama.
3. Baca `CLAUDE.md`, `rilis.json`, `INSTRUKSI-RILIS.md`, `PANDUAN.md` di folder itu. Ruang lingkup dan desain terkunci; jangan memangkas fitur.

## 2. Jalankan rilis.mjs
`cd C:\zuno-proyek\proyek\<nama>` lalu `node rilis.mjs`. Baris terakhir keluaran = JSON `{status, url, perlu, galat}`; laporan di `LAPORAN-RILIS.md`.

| Status (kode keluar) | Tindakan |
|---|---|
| `live` (0) | Lanjut ke bagian 3 |
| `perlu_agen` (10) | Kerjakan butir `perlu` bersiapa `agen` dengan agent-desktop, lalu `node rilis.mjs --cek` (Firebase: `--akun-firebase`) |
| `perlu_zulnan` (20) | Berhenti. Kirim butirnya ke Zulnan apa adanya. Setelah dia bilang selesai, jalankan lagi |
| `gagal` (1) | Baca `galat`, cari akar masalah (`systematic-debugging`), perbaiki seperlunya, jalankan lagi. Maks. 3 kali |

Yang dikerjakan rilis.mjs per mesin:
- **Apps Script + Google Sheets**: Spreadsheet + Apps Script baru (`clasp create-script --type sheets`), kirim `Code.gs` + `Index.html` + manifest web app, deploy, link `/exec`, cek link berisi aplikasi ini. Rilis ulang memakai deployment yang sama.
- **Apps Script + Blogger**: sama, plus `blogger-widget.html` (GAS_URL terisi) yang ditempel agen ke Blogger.
- **Firebase**: proyek, web app, `firebaseConfig`, Firestore, deploy hosting + rules; agen mengaktifkan Email/Password di console; akun Admin dibuat skrip lewat API (`--akun-firebase`).
- **Vercel + Supabase**: agen menyiapkan proyek Supabase di dashboard (paket Free) + menjalankan `schema.sql` + menulis `supabase.json`; skrip menyuntik URL + anon key lalu `vercel deploy --prod`.

## 3. agent-desktop (tangan)
1. Sekali per sesi: `agent-desktop skills get desktop` dan `agent-desktop skills get platform`. Ikuti aturan loop: snapshot, aksi pada ref, snapshot lagi untuk cek.
2. Di PowerShell kutip setiap ref (`'@s8f3k2p9:e8'`). `type` butuh `--headed`; utamakan `set-value`. Chrome: beri `--timeout-ms` lebih panjang saat snapshot.
3. Uji link live: buka di Chrome, login akun Contoh dari `akun-awal.json` lewat `set-value` (jangan ditulis ke chat atau log), coba tiap menu, Reset Akses. Screenshot hanya jendela aplikasi ini, simpan di `bukti/`.
4. **Larangan** (CLAUDE.md repo): tidak mengetik/menyimpan password akun Google/Vercel/Firebase/Supabase Zulnan; halaman login, OTP, captcha, UAC = berhenti dan minta Zulnan; tidak membayar atau upgrade; tidak mengubah pengaturan Windows/keamanan; tidak mengirim pesan; tidak menghapus di luar folder paket; jendela tak terduga = berhenti dan tanya.
5. Jendela izin Google ("Izinkan") untuk Apps Script baru: diklik agen **hanya** bila `opsi.izinGoogleOtomatis` di `rilis.json` bernilai `true` dan nama aplikasi di jendela sama persis dengan `nama` di `rilis.json`. Selain itu minta Zulnan.

## 4. Lapor (gaya Juru Kabar)
- link live (+ link Spreadsheet untuk Apps Script);
- hasil cek (dari `hasil-rilis.json` + uji agent-desktop), yang belum bisa diuji dan kenapa;
- catatan keputusan dari `PANDUAN.md` + keputusan saat rilis;
- yang masih perlu Zulnan (bila ada).
Tulis link final di `PANDUAN.md` dengan status "Rilis (live)". Jangan menyatakan live tanpa `status: live` dan link yang benar-benar terbuka. Push ke GitHub hanya bila Zulnan bilang sendiri.
