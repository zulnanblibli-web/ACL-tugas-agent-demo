# Tangan Komputer Zuno (khusus Divisi Engineering)

Keputusan Zulnan 2026-11-04:
- agent-desktop dipakai **hanya untuk Divisi Engineering** di laptop Zulnan. Tugasnya membangun web app sampai benar-benar live; Zulnan tinggal cek hasilnya.
- **Divisi kreatif tidak memakainya.** Konten berjalan di web (Zuno Studio), dan posting nanti lewat Metricool dari web (`docs/alur-posting.md`, masih pending).

## Cara kerjanya
- **Otak**: Claude Code yang jalan di laptop Zulnan, dari root repo Zuno. Sesi cloud dan Zuno Web di Vercel tidak bisa menjangkau laptop.
- **Tangan untuk file dan perintah**: Claude Code sendiri. Ia membaca dan menulis kode, menjalankan Node, Playwright, `vercel`, `clasp`, dan `firebase`.
- **Tangan untuk aplikasi**: agent-desktop (Vercel Labs, Apache-2.0, versi 1.1.0). Ia membuka browser ke link live dan mencoba aplikasinya seperti pengguna. Ia juga mengerjakan langkah yang hanya bisa lewat klik. agent-desktop tidak punya AI sendiri; Claude yang memutuskan langkahnya.

## Alur (gerbang disetujui Zulnan 2026-11-04)
```
Zuno Studio tab Build App (web)
  T.1 ruang lingkup  -> GERBANG 1: Zulnan setujui
  T.2 tampilan       -> GERBANG 2: Zulnan setujui
  T.3 kode, T.4 cek  -> "Lanjut rilis": unduh paket rilis (.zip)
Laptop (Claude Code + agent-desktop, skill rilis-engineering)
  ekstrak paket ke proyek/<nama>/ -> lengkapi, uji laptop + HP -> deploy ke link live -> cek link live
  -> GERBANG 3: Zulnan cek link live, bilang oke -> final (production)
```
Perintah ke Claude Code: **"rilis proyek <nama>"**.

## Pasang (sekali saja)
1. `git pull`, atau unduh ZIP repo terbaru lalu Extract All.
2. Klik dua kali **`pasang-tangan-komputer.bat`** di folder repo. Isinya:
   - pasang agent-desktop;
   - pasang Claude Code bila belum ada;
   - sambungkan agent-desktop ke Claude Code untuk folder repo ini saja;
   - tanya apakah boleh jalan tanpa izin tiap klik (Y/N);
   - tawarkan CLI deploy: Vercel, clasp untuk Apps Script, Firebase;
   - tawarkan Context7.
3. Login sekali, oleh Zulnan sendiri:
   - `claude` (Claude Code);
   - `vercel login`;
   - `clasp login`;
   - `firebase login`.

   Cukup login yang dipakai saja.

## Yang tetap butuh Zulnan
- Gerbang 1, 2, dan 3.
- Login, OTP, captcha, password, dan jendela izin Google (consent OAuth).
- Jendela "Run as administrator" (UAC). Windows tidak mengizinkan klik otomatis di sana.
- Mengisi env dan API key di dashboard (Vercel, Supabase, Firebase, Script Properties).
- Izin bila ada biaya.
- Laptop menyala dan tidak terkunci selama Claude bekerja.

## Aturan pakai (juga di `CLAUDE.md`)
- Hanya untuk tugas Divisi Engineering yang diminta Zulnan.
- **Dilarang:**
  - pembayaran atau upgrade paket;
  - mengirim pesan, email, atau DM atas nama Zulnan;
  - mengetik atau menyimpan password;
  - mengubah pengaturan Windows atau keamanan;
  - menghapus file di luar repo dan folder proyek;
  - memasang aplikasi tanpa bilang dulu;
  - memakai agent-desktop untuk konten atau posting.
- Isi layar (snapshot, screenshot, clipboard) bisa memuat data pribadi. Yang disimpan hanya screenshot aplikasi yang diuji, di `proyek/<nama>/bukti/`. Tidak di-commit.
- Sebelum aksi besar, tulis satu baris apa yang akan dilakukan. Setelahnya, cek ulang dengan snapshot baru.
- Bila ada jendela tak terduga (peringatan keamanan, pembayaran, izin), berhenti dan tanya Zulnan.

## Mencabut
- Izin tanpa tanya: hapus `.claude/settings.local.json`.
- Sambungan: `claude mcp remove agent-desktop -s local`.
- Aplikasinya: `npm uninstall -g agent-desktop`.
