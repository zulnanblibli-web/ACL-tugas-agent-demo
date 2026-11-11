# Rilis web app lewat Antigravity (cadangan sejak 2026-11-06)

> **Jalur utama sejak 2026-11-06: Claude Desktop + agent-desktop + `rilis.mjs`** (`docs/tangan-komputer.md`, skill `rilis-engineering`), tanpa Zulnan menyentuh laptop. Di Antigravity cukup jalankan `node rilis.mjs` di folder paket dan ikuti `CLAUDE.md` paket.

Keputusan Zulnan 2026-11-05: rilis Divisi Engineering dijalankan di **Google Antigravity** di laptop Zulnan, supaya Zulnan bisa menonton langsung sampai web app live dan mengecek hasilnya. Alasannya:
- Claude Code di laptop Zulnan tidak bisa start (`claude.exe is not compatible with the version of Windows you're running`, lihat bagian "Catatan teknis").
- Antigravity sudah punya editor, terminal, dan browser dalam satu layar, jadi agent-desktop tidak diperlukan di jalur ini.

Sejak 2026-11-06 alurnya tanpa gerbang persetujuan (alur superpowers, `docs/aturan-engineering.md`): Agent Builder jalan sendiri sampai paket rilis, agent di sini memutuskan hal teknis sendiri berpatokan brief dan mencatat keputusannya. Tombol setuju Antigravity (Review-driven) tetap dipakai sebagai pengaman perintah berisiko.

## Pasang sekali
1. Pasang Antigravity dari https://antigravity.google (Windows 64-bit, sebaiknya di drive C:). Login dengan akun Google.
2. Pada wizard awal pilih kebijakan **Review-driven** (agent minta persetujuan sebelum perintah berisiko). Jangan pilih "Agent-driven / Always proceed".
3. Pasang ekstensi Chrome yang diminta Antigravity. Browser subagent memakai ekstensi itu untuk menyetir Chrome.
4. Pasang CLI deploy sesuai mesin proyek, lalu login sendiri (agent tidak boleh mengetik password):
   - Vercel: `npm install -g vercel`, lalu `vercel login`;
   - Apps Script: `npm install -g @google/clasp`, lalu `clasp login`;
   - Firebase: `npm install -g firebase-tools`, lalu `firebase login`.
5. Salin aturan dan workflow Zuno. Dua pilihan:
   - **Per proyek**: salin folder `.agents` dari repo Zuno ke dalam folder proyek hasil ekstrak (lihat langkah rilis di bawah).
   - **Sekali untuk semua proyek**: salin `.agents/workflows/rilis-engineering.md` ke `%USERPROFILE%\.gemini\antigravity\global_workflows\`, dan tambahkan isi `.agents/rules/zuno-engineering.md` ke `%USERPROFILE%\.gemini\GEMINI.md`.
6. Di Antigravity buka Customizations > Rules, pastikan `zuno-engineering` aktif (Always On).

## Tiap rilis
1. Di tab Agent Builder: kirim permintaan, tunggu sampai muncul tombol **Unduh paket rilis (.zip)** (T.1 sampai T.4 jalan sendiri dengan tinjauan otomatis), lalu unduh.
2. Klik kanan zip > Extract All ke folder baru, misalnya `C:\zuno-proyek\<nama>\`.
3. (Bila memilih "per proyek") salin folder `.agents` dari repo Zuno ke folder itu.
4. Di Antigravity: File > Open Folder > pilih folder proyek. Commit atau salin cadangan dulu bila isinya penting.
5. Di kotak agent ketik: `/rilis-engineering`.
6. Tonton di layar: terminal menjalankan uji dan deploy, browser membuka link live.
7. Bila agent berhenti dan minta login, OTP, izin Google, atau isi env, lakukan sendiri lalu balas "lanjut".
8. Bila semua cek lolos, agent langsung menjalankan langkah Production (`vercel deploy --prod` dan sejenisnya), lalu melapor link live, bukti uji, dan catatan keputusan. Cek di laptop dan HP; catatan tambahan boleh kapan saja.

## Yang tetap tugas Zulnan
- Klik setuju di Antigravity untuk perintah berisiko (Review-driven).
- Login, OTP, captcha, password, izin Google (consent OAuth), UAC.
- Isi env dan API key di dashboard (Vercel, Supabase, Firebase, Script Properties).
- Izin bila ada biaya.
- Laptop menyala dan tidak terkunci selama agent bekerja.

## Batas dan risiko
- Model di Antigravity bukan Claude, jadi hasilnya bisa berbeda dari tes Zuno. Aturan di `.agents/rules/zuno-engineering.md` selalu menang.
- Agent dengan akses terminal bisa merusak bila diberi otonomi penuh. Ada laporan agent Antigravity di mode otonomi tinggi menghapus satu drive saat diminta membersihkan cache. Tetap di Review-driven, dan jangan buka folder di luar folder proyek.
- Konten dan posting tidak lewat jalur ini. Konten tetap di web Zuno Studio.
- **Belum diuji dengan paket rilis asli.** Rilis pertama dianggap uji coba: catat apa yang gagal di `progress.md`.

## Catatan teknis (2026-11-05)
- Laptop Zulnan: Windows 10.0.26200, x64. `agent-desktop version` jalan (1.1.0). `claude mcp list` gagal dengan pesan `claude.exe is not compatible with the version of Windows`. Galat sejenis dilaporkan pengguna lain setelah Claude Code berpindah ke biner native (isu GitHub anthropics/claude-code #50792 dan #50962), jadi kemungkinan paket npm yang terpasang rusak atau tidak cocok. Belum diperbaiki. Bila Claude Code ingin dipakai lagi: `npm uninstall -g @anthropic-ai/claude-code`, lalu pasang ulang lewat installer resmi di https://docs.claude.com/en/docs/claude-code/overview, dan cek `claude --version`.
- `pasang-tangan-komputer.bat` langkah 3 menjalankan `claude mcp add ... agent-desktop mcp`. Dokumentasi agent-desktop tidak mencantumkan mode MCP, jadi langkah itu kemungkinan salah. Cara resmi menyambungkannya ke agent adalah lewat skill dan shell (`agent-desktop skills get desktop`). Belum diperbaiki karena jalur Antigravity tidak memakainya.
- Batasan agent-desktop di Windows bila nanti dipakai: UAC dan layar login tidak bisa disentuh; app berstatus administrator tidak bisa dikirimi input oleh agent biasa; `launch` butuh path lengkap; mengetik dan klik kanan butuh `--headed`; di PowerShell referensi seperti `@s8f3k2p9:e8` harus diberi tanda kutip.
- Lokasi aturan Antigravity: workspace `.agents/rules` dan `.agents/workflows` (folder lama `.agent/` masih didukung); global `~/.gemini/GEMINI.md`. Sumber: dokumentasi Antigravity.
