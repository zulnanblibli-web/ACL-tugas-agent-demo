# Rencana: Zuno jalan lokal dengan Claude Code + semua skill (cara C)

Keputusan Zulnan 2026-11-11: untuk sementara Zuno dijalankan di lokal; tombol di web menyerahkan pekerjaan ke Claude Code di mesin yang sama supaya semua skill (termasuk skripnya: pemeriksa browser, render video, Blender) jalan utuh. Edisi jasa ikut: pembeli menjalankan di laptop mereka dengan paket dari GitHub dan langsung berfungsi. VPS bisa menyusul tanpa membangun ulang.

## Gambaran

```
Browser (localhost:3000)
  └─ web/dev-server.mjs  (sudah ada; laptop atau VPS)
       ├─ /api/ai, /api/riset, /api/gambar, /api/status   (alur sekarang, tetap)
       └─ /api/kerja  (BARU)  ── Claude Agent SDK / claude -p ──> folder kerja/<tanggal-jenis-judul>/
                                   memakai .claude/skills + CLAUDE.md repo
                                   hasil: preview index.html, file, log langkah
```

## Fase dan cara cek

| Fase | Isi | Cara cek (selesai bila) | Status |
|---|---|---|---|
| 0. Cek mesin Zulnan | Jalankan `pasang.bat` di laptop Zulnan; pastikan `claude --version`, `claude doctor`, dan `claude -p "halo"` jalan. Dulu `claude.exe` gagal start di laptop ini: penyebabnya dicatat (PATH, PowerShell x86, 32-bit, Git Bash) dan diperbaiki | Ketiga perintah jalan; `node tools/pasang/cek-kesiapan.mjs` menunjukkan Claude Code OK | **Menunggu Zulnan** |
| 1. Pemasang satu perintah + panduan | `pasang.bat`/`pasang.sh`, `tools/pasang/` (pemasang, cek kesiapan, daftar kebutuhan skill), `docs/panduan-pasang-lokal.md`; edisi jasa: `PANDUAN-LOKAL.md`, skill ikut paket kecuali yang lisensinya tidak jelas | `bash pasang.sh --inti` jalan bersih di Linux; Windows dicoba di laptop Zulnan (Fase 0) | **Selesai** (Windows belum dicoba) |
| 2. Jembatan web ke Claude Code | Endpoint `/api/kerja` di `dev-server.mjs` (hanya aktif bila `ZUNO_KERJA_LOKAL=on`): wajib `x-zuno-key`, satu pekerjaan sekaligus, `cwd` = `kerja/<tanggal-jenis-judul>/` di dalam repo, Claude Agent SDK `@anthropic-ai/claude-agent-sdk` `query()` dengan `settingSources: ['project']` (memuat CLAUDE.md + skill), `permissionMode` terbatas, alat Bash/Edit/Write hanya di folder kerja, batas biaya (`maxBudgetUsd`) dan batas waktu. Progres dialirkan ke browser (SSE). Tidak ada push/deploy/posting dari jembatan | Tes: dev-server tiruan menjalankan pekerjaan stub, folder kerja terbentuk, permintaan tanpa kunci ditolak, pekerjaan kedua ditolak saat ada yang jalan, path di luar folder kerja ditolak | Belum |
| 3. Tampilan Workspace | Agent Builder: pilihan "Kerjakan di laptop (Claude Code + skill)" bila server lokal melaporkan jembatan aktif. Alur: agen menampilkan **pilihan referensi** dulu (aturan Zulnan), Zulnan memilih, lalu build; hasil = preview `index.html` di `/kerja/...`; tombol "Setujui & deploy" baru muncul setelah preview dibuka. Konten: video lemo-opuscar lewat jalur yang sama (hasil masuk Antrian Posting setelah dipilih Zulnan) | Tes Playwright: alur pilih referensi -> preview -> setujui; tombol deploy tidak ada sebelum disetujui | Belum |
| 4. Paket jasa lengkap | Ekspor menyertakan jembatan + tampilan; white-label `CLAUDE.md`; aturan pembeli memakai API key/langganan sendiri; versi lemo-opuscar dikunci di edisi jual (opsional, keputusan Zulnan) | `zuno-jasa-test` lolos + uji pasang bersih di folder kosong | Sebagian (skill + pemasang + panduan sudah ikut) |
| 5. VPS (bila dipakai) | Layanan systemd + Caddy (sudah ada), Claude Code dengan API key, jembatan hanya pemilik, tanpa Blender/agent-desktop | Uji di server: login kunci akses, satu build sampai preview | Belum |

## Aturan keamanan jembatan (wajib, juga untuk laptop)

- Hanya mendengar di `127.0.0.1` (bawaan `dev-server.mjs`); VPS lewat Caddy + kunci akses.
- Tanpa `x-zuno-key` yang cocok = ditolak (pola `keyOk` di `web/api/status.js`).
- Claude Code bekerja hanya di folder `kerja/<tugas>/`; tidak boleh menyentuh `.env.local`, `.git`, atau folder lain.
- Tidak ada push, deploy, posting, pembayaran, atau pengiriman pesan dari jembatan. Deploy hanya setelah Zulnan menyetujui preview.
- Log langkah disimpan tanpa isi key.

## Ketentuan akun Claude (dari dokumentasi resmi)

- Zulnan memakai langganan Claude atau API key untuk dirinya sendiri: boleh.
- Produk yang dijual dan memakai Agent SDK: pembeli memakai **API key Claude Console miliknya sendiri** (atau langganannya sendiri untuk pemakaian pribadi). Penjual tidak boleh menjual ulang atau menjadi perantara pemakaian Claude atas nama pembeli, dan tidak boleh memakai login langganan untuk melayani orang lain.
- Sumber: https://code.claude.com/docs/en/legal-and-compliance, https://code.claude.com/docs/en/agent-sdk/overview

## Keputusan yang masih terbuka (untuk Zulnan)

1. Mulai Fase 2-3 setelah Fase 0 berhasil di laptop.
2. Situs Vercel tetap sebagai etalase (halaman utama, demo) atau dimatikan selama lokal.
3. Edisi jual: kunci versi lemo-opuscar (stabil) atau biarkan ikut update dari GitHub.
