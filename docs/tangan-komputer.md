# Tangan Komputer Zuno (khusus Divisi Engineering)

> **Update 2026-11-06 (permintaan Zulnan):** setelah zip dari Build App diunduh, Engineering sendiri yang mengoperasikan laptop sampai web app live sesuai mesin yang dipilih, tanpa disentuh. **Otak: Claude Desktop** (Remote Control, bisa disuruh dari HP atau sesi cloud). **Tangan: agent-desktop** (versi terbaru, 1.2.0 per 2026-11-06, sudah punya mode MCP). Pekerjaan pasti dikerjakan skrip **`rilis.mjs`** yang ikut di setiap paket rilis. Antigravity (`docs/rilis-antigravity.md`) tinggal cadangan.

Keputusan Zulnan 2026-11-04:
- agent-desktop dipakai **hanya untuk Divisi Engineering** di laptop Zulnan. Tugasnya membawa web app sampai benar-benar live; Zulnan tinggal cek hasilnya.
- **Divisi kreatif tidak memakainya.** Konten berjalan di web (Zuno Studio), dan posting nanti lewat Metricool dari web (`docs/alur-posting.md`, masih pending).

## Cara kerjanya
- **Otak**: Claude Desktop di laptop Zulnan. Folder `C:\zuno-proyek` dibagikan lewat Remote Control, jadi Claude bisa diperintah dari HP, dari sesi cloud (`request_computer_folder`), atau langsung di laptop.
- **Tangan untuk perintah**: shell di folder itu: `node rilis.mjs`, `clasp`, `firebase`, `vercel`, `tar`.
- **Tangan untuk layar**: agent-desktop. Membuka Chrome ke link live dan mencoba aplikasinya seperti pengguna, serta mengerjakan langkah yang hanya bisa lewat klik (tempel ke Blogger, aktifkan login Email/Password di Firebase, dashboard Supabase). agent-desktop tidak punya AI sendiri; Claude yang memutuskan langkahnya. Tersambung ke Claude Desktop sebagai MCP (`agent-desktop mcp`) dan juga bisa dipanggil sebagai CLI.
- **Skrip pasti**: `rilis.mjs` (sumber `tools/rilis/rilis.mjs`) membaca `rilis.json` (mesin pilihan Zulnan) dan mengerjakan deploy-nya. Keluar dengan status `live`, `perlu_agen`, `perlu_zulnan`, atau `gagal`, plus `LAPORAN-RILIS.md`.

## Alur
```
Zuno Studio tab Build App (web), jalan sendiri tanpa menunggu Zulnan
  T.1 ruang lingkup + mesin -> T.2 tampilan -> T.3 kode -> T.4 uji (tiap tahap ditinjau, diperbaiki)
  -> "Unduh paket rilis (.zip)" -> tersimpan di C:\zuno-proyek\unduhan (lokasi download Chrome)
Zulnan bilang ke Claude: "rilis proyek <nama>" (dari HP pun bisa)
Laptop (Claude Desktop + agent-desktop, skill rilis-engineering)
  ekstrak ke C:\zuno-proyek\proyek\<nama> -> node rilis.mjs (sesuai mesin)
  -> langkah layar oleh agent-desktop -> uji link live di Chrome -> link live + bukti + catatan keputusan ke Zulnan
```

| Mesin | Dikerjakan rilis.mjs | Dikerjakan agent-desktop | Zulnan (sekali) |
|---|---|---|---|
| Apps Script + Google Sheets | Spreadsheet + Apps Script baru, push, deploy web app, link /exec, cek; rilis ulang = link sama | uji link live | `clasp login`, nyalakan Apps Script API, klik "Izinkan" Google tiap aplikasi baru (bisa diserahkan ke agen: `opsi.izinGoogleOtomatis`) |
| Apps Script + Blogger | sama + `blogger-widget.html` | tempel widget ke Blogger, uji | sama |
| Firebase | proyek, web app, firebaseConfig, Firestore, deploy hosting + rules, akun Admin lewat API | aktifkan Email/Password di console, uji | `firebase login` |
| Vercel + Supabase | suntik URL + anon key, `vercel deploy --prod`, cek | buat proyek Supabase (Free), jalankan schema.sql, salin URL + anon key, uji | `vercel login`, login Supabase di Chrome |

## Pasang (sekali saja)
1. `git pull`, atau unduh ZIP repo terbaru lalu Extract All.
2. Klik dua kali **`pasang-tangan-komputer.bat`**. Isinya: agent-desktop terbaru, clasp + firebase-tools + vercel, folder `C:\zuno-proyek\unduhan` dan `proyek`, sambungan agent-desktop ke Claude Desktop (`tools/laptop/sambung-agent-desktop.mjs`, cadangan config dibuat), lalu menawarkan login `clasp`/`firebase`/`vercel` dan membuka halaman Apps Script API.
3. Di aplikasi, sekali: Claude Desktop > Settings > Claude Code > Remote Control > tambahkan `C:\zuno-proyek`; Chrome > Setelan > Download > lokasi `C:\zuno-proyek\unduhan`; tutup lalu buka lagi Claude Desktop.
4. Belum terbukti di laptop Zulnan: Claude Desktop di Windows 10.0.26200 (Claude Code CLI sebelumnya gagal start) dan fitur folder Remote Control dari sesi cloud (belum tersedia untuk semua akun). Uji pertama dicatat di `progress.md`.

## Yang tetap butuh Zulnan
- Keputusan teknis tidak butuh Zulnan (diputuskan sendiri, dicatat). Yang tetap butuh Zulnan ada di bawah ini.
- Akun deploy proyek klien bila belum jelas.
- Login, OTP, captcha, dan password akun Zulnan. Jendela izin Google (consent OAuth) untuk Apps Script baru: Zulnan, kecuali `opsi.izinGoogleOtomatis: true` di `rilis.json` (agen hanya mengklik bila nama aplikasinya sama persis).
- Jendela "Run as administrator" (UAC). Windows tidak mengizinkan klik otomatis di sana.
- Mengisi env dan API key di dashboard (Vercel, Supabase, Firebase, Script Properties).
- Izin bila ada biaya.
- Laptop menyala dan tidak terkunci selama Claude bekerja.

## Aturan pakai (juga di `CLAUDE.md`)
- Hanya untuk tugas Divisi Engineering yang diminta Zulnan.
- **Dilarang:**
  - pembayaran atau upgrade paket;
  - mengirim pesan, email, atau DM atas nama Zulnan;
  - mengetik atau menyimpan password akun Zulnan (Google, Vercel, Firebase, Supabase). Pengecualian: akun Contoh/Admin acak aplikasi yang sedang diuji (`akun-awal.json`), diisi lewat `set-value`, tidak ditulis ke chat atau log;
  - mengubah pengaturan Windows atau keamanan;
  - menghapus file di luar repo dan folder proyek;
  - memasang aplikasi tanpa bilang dulu (kecuali CLI deploy resmi yang dipasang rilis.mjs: @google/clasp, firebase-tools, vercel);
  - memakai agent-desktop untuk konten atau posting.
- Isi layar (snapshot, screenshot, clipboard) bisa memuat data pribadi. Yang disimpan hanya screenshot aplikasi yang diuji, di `proyek/<nama>/bukti/`. Tidak di-commit.
- Sebelum aksi besar, tulis satu baris apa yang akan dilakukan. Setelahnya, cek ulang dengan snapshot baru.
- Bila ada jendela tak terduga (peringatan keamanan, pembayaran, izin), berhenti dan tanya Zulnan.

## Mencabut
- Izin tanpa tanya: hapus `.claude/settings.local.json`.
- Sambungan Claude Desktop: hapus `agent-desktop` dari `mcpServers` di `%APPDATA%\\Claude\\claude_desktop_config.json` (cadangan: `.cadangan-zuno`).
- Remote Control: matikan folder `C:\\zuno-proyek` di Claude Desktop > Settings > Claude Code > Remote Control.
- Aplikasinya: `npm uninstall -g agent-desktop`.
