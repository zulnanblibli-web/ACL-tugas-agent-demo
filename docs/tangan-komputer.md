# Tangan Komputer Zuno (agent-desktop di laptop Zulnan)

Keputusan Zulnan 2026-11-04: agent-desktop dipakai sebagai "tangan" Claude di laptop Zulnan, supaya pekerjaan di laptop bisa jalan tanpa Zulnan menyentuh komputer.

## Cara kerjanya
- **Otak**: Claude Code yang jalan **di laptop Zulnan**, di folder repo ini. Sesi cloud (claude.ai/code) dan Zuno Web di Vercel tidak bisa menjangkau laptop.
- **Tangan untuk file dan perintah**: Claude Code sendiri (baca/tulis file, jalankan ffmpeg, Node, git).
- **Tangan untuk aplikasi**: agent-desktop (Vercel Labs, Apache-2.0, versi 1.1.0). Membaca struktur jendela aplikasi lewat UI Automation Windows, lalu klik, ketik, buka, dan tutup aplikasi. agent-desktop tidak punya AI sendiri; Claude yang memutuskan langkahnya.

## Pasang (sekali saja)
1. `git pull`, atau unduh ZIP terbaru repo lalu Extract All.
2. Klik dua kali **`pasang-tangan-komputer.bat`** di folder repo. Isinya:
   - pasang agent-desktop;
   - pasang Claude Code bila belum ada;
   - sambungkan agent-desktop ke Claude Code untuk folder ini saja (`claude mcp add --scope local`);
   - tanya apakah Claude boleh memakainya tanpa minta izin tiap klik. Bila Y, izin disimpan di `.claude/settings.local.json`, hanya di laptop ini;
   - tawarkan pemasangan ffmpeg dan Python lewat winget, untuk `ffmpeg-skill`;
   - tawarkan Context7, dengan login yang dilakukan Zulnan sendiri.
3. Pakai: buka Command Prompt di folder repo, ketik `claude`, lalu minta pekerjaannya.

## Yang bisa dikerjakan sendiri
- Menjalankan Antrian Posting: ambil zip dari Downloads, cek, jadwalkan di Metricool (`docs/alur-posting.md`).
- Merender video dari paket Claude Code (HyperFrames, Remotion, ffmpeg) lalu mengecek hasilnya dengan `ffmpeg-skill`.
- Menjalankan server lokal Zuno, membuka browser, mengecek tampilan.
- Membuka dan mengoperasikan aplikasi desktop (misalnya editor video atau File Explorer) bila langkahnya bisa dilakukan lewat klik dan ketik.

## Yang tetap butuh Zulnan
Ini batas alat dan Windows, bukan pilihan:
- **Sekali di awal**: klik dua kali bat di atas, login Claude Code, sambungkan akun sosmed dan Google Drive di Metricool.
- **Laptop menyala dan tidak terkunci** selama Claude bekerja. Claude Code juga harus sedang jalan dengan tugas yang diberikan; tidak bisa dibangunkan dari jauh kecuali Remote Control disambungkan.
- **Login, kode OTP, captcha, dan password**: Zulnan yang mengetik.
- **Jendela "Run as administrator" (UAC)**: Windows tidak mengizinkan klik otomatis di sana.
- **Persetujuan konten** (Setujui di Zuno Studio, oke untuk video final): selalu Zulnan.

## Aturan pakai (wajib, juga ditulis di `CLAUDE.md`)
- Hanya mengerjakan tugas yang diminta Zulnan atau yang ada di `progress.md`.
- **Dilarang** memakai tangan komputer untuk:
  - pembayaran, belanja, transfer;
  - mengirim pesan, email, atau DM atas nama Zulnan;
  - mengetik atau menyimpan password;
  - mengubah pengaturan Windows atau keamanan;
  - menghapus file di luar folder repo dan folder kerja yang disebut;
  - memasang aplikasi tanpa bilang dulu.
- **Posting** hanya lewat Antrian Posting dan Metricool, bukan dengan mengklik aplikasi Instagram, TikTok, atau Threads.
- Isi layar (snapshot, screenshot, clipboard) bisa memuat data pribadi. Jangan disimpan ke repo, jangan dikirim ke luar, dan jangan di-commit.
- Sebelum aksi besar (lebih dari sekadar membuka atau melihat), Claude menulis satu baris apa yang akan dilakukan. Setelahnya Claude mengecek ulang hasilnya dengan snapshot baru.
- Bila ragu atau ada jendela tak terduga (peringatan keamanan, permintaan izin, pembayaran), berhenti dan tanya Zulnan.

## Mencabut
- Izin tanpa tanya: hapus `.claude/settings.local.json`.
- Sambungan: `claude mcp remove agent-desktop -s local`.
- Aplikasinya: `npm uninstall -g agent-desktop`.
