# Panduan pasang lokal (satu perintah)

Panduan ini untuk menjalankan Nexaoffice di laptop sendiri (atau server VPS): web di `http://localhost:3000`, plus **Claude Code** yang memakai semua skill di folder `.claude/skills` lengkap dengan skripnya (pemeriksa desain di browser, render video, Blender, dan lainnya). Tidak perlu bisa coding.

Pemasang untuk Linux/macOS sudah diuji. Pemasang Windows (`pasang.bat`) belum diuji di semua jenis laptop: bila ada langkah yang gagal, baca pesannya di layar dan lihat bagian 8.

## 1. Yang perlu disiapkan

| Perlu | Keterangan |
|---|---|
| Windows 10/11 64-bit dengan **winget** | winget sudah ada di Windows ("App Installer"). Bila tidak ada: pasang "App Installer" dari Microsoft Store. |
| atau macOS dengan **Homebrew** | Pasang dari https://brew.sh |
| atau Linux Ubuntu/Debian (termasuk WSL dan VPS) | Butuh akses `sudo`. |
| Internet | Paket inti sekitar 300-600 MB. Paket video 350 MB - 1 GB lagi. Blender sekitar 400 MB. |
| **Akun Claude milikmu sendiri** untuk Claude Code | Langganan Claude (Pro/Max/Team/Enterprise) untuk dipakai sendiri, atau API key dari https://console.anthropic.com (bayar per token). Paket Free tidak termasuk Claude Code. Penjual tidak menyediakan akun atau key Claude. |
| Key AI untuk web | Satu key di `.env.local` (Gemini gratis, Claude, OpenRouter, atau OpenAI) dan `ZUNO_ACCESS_KEY` (kata sandi web buatan sendiri, minimal 16 karakter). |

## 2. Satu perintah

1. Ambil repo ke laptop (sekali): `git clone <alamat-repo-mu>` lalu masuk ke foldernya, **atau** unduh ZIP dari GitHub lalu klik kanan > **Extract All**. Jangan jalankan dari dalam ZIP.
2. Dari folder repo, jalankan:

**Windows** (klik dua kali `pasang.bat`, atau ketik di terminal):
```bat
pasang.bat
```

**macOS / Linux / WSL / VPS:**
```bash
bash pasang.sh
```

| Pilihan | Artinya |
|---|---|
| tanpa pilihan | paket inti, lalu ditanya satu per satu untuk paket opsional |
| `-Inti` (Windows) / `--inti` | hanya paket inti, tanpa pertanyaan |
| `-Semua` / `--semua` | inti + semua paket opsional, tanpa pertanyaan |
| `-Coba` / `--coba` | hanya menampilkan langkah, tidak memasang apa pun |

Aman dijalankan berulang: yang sudah terpasang dilewati dan `.env.local` yang sudah ada tidak diubah. Pemasang tidak meminta dan tidak menyimpan API key.

## 3. Urutan yang dikerjakan pemasang

1. **Alat dasar**: Git (Windows: termasuk Git Bash), Python 3, ffmpeg.
2. **Node.js 22+**.
3. **uv** (pemasang alat Python) dan **Claude Code** dari installer resmi Anthropic (`irm https://claude.ai/install.ps1 | iex` di Windows, `curl -fsSL https://claude.ai/install.sh | bash` di macOS/Linux).
4. **Paket web** (`npm install`) dan file **`.env.local`** dari contoh. Di Windows, Notepad terbuka: isi `ZUNO_ACCESS_KEY` dan satu key AI, simpan, tutup.
5. **Browser** untuk pemeriksa skill: memakai Edge/Chrome yang sudah ada; bila tidak ada, Chromium dipasang lewat Playwright.
6. **Paket opsional** (ditanya): Video, YouTube, Blender, Alat dokumen. Lihat bagian 5.
7. **Cek kesiapan**: daftar alat yang sudah/belum ada dan skill yang siap. Bisa diulang kapan saja: `node tools/pasang/cek-kesiapan.mjs`.

## 4. Langkah manual setelah pemasang

1. **Isi `.env.local`** di folder utama repo (bila belum): `ZUNO_ACCESS_KEY` + satu key AI. Jangan bagikan isinya.
2. **Login Claude Code sekali**: buka terminal baru di folder repo, ketik `claude`, ikuti `/login`. Atau isi `ANTHROPIC_API_KEY` (key Console milikmu). Bila `ANTHROPIC_API_KEY` terisi, mode otomatis Claude Code selalu memakai key itu (bayar per token).
3. **Nyalakan web**: klik dua kali `jalankan-lokal.bat` (Windows) atau `node server.mjs --buka`, lalu buka `http://localhost:3000`. Isi kunci akses di menu **PENGATURAN AI**.
4. **Kerja dengan skill**: ketik `claude` di folder repo. Semua skill di `.claude/skills` terbaca otomatis. Aturan pakainya ada di `CLAUDE.md`.
5. **Opsional, hook impeccable** (cek desain otomatis setiap file diedit): salin isi `.claude/settings.json` dari repo https://github.com/pbakaus/impeccable ke `.claude/settings.json` repo ini.

## 5. Kebutuhan tiap skill

| Skill | Butuh | Dipasang pemasang? |
|---|---|---|
| frontend-design, grilling, writing-plans, superpowers (executing-plans dkk.), skill marketing, vibe-security, prove-it-ran, review-my-diff, break-ui, mobile-native, slides, banner-design | tidak ada (panduan) | - |
| hallmark | Node; browser untuk `sloplint --render` | ya |
| impeccable | Node; programnya diunduh sendiri dari GitHub saat pertama dipakai; browser untuk mode live. Mengirim data pemakaian ke impeccable.style kecuali diset `DO_NOT_TRACK=1`. Paket Pro berbayar tidak diperlukan | ya |
| ui-ux-pro-max, design-system | Python 3. Kueri database pakai bahasa Inggris | ya |
| design (logo, ikon, mockup) | Python + paket `google-genai` + `GEMINI_API_KEY` (atau ATLASCLOUD/MUAPI). Bisa berbayar: isi key sendiri hanya bila mau | tidak |
| brand, hue | Node (hue memanggil `npx js-yaml`) | ya |
| awwwards, jury | Node + browser; Playwright dipasang sendiri oleh skill saat dipakai | ya |
| ffmpeg-skill | ffmpeg 6.1+ dan Python 3.10+ | ya |
| youtube | Python + `google-api-python-client`, `google-auth-oauthlib`, `yt-dlp`. Data channel butuh `YOUTUBE_API_KEY` atau OAuth milik pemilik channel. DataForSEO berbayar, tidak wajib | paket: opsional "YouTube"; key: manual |
| lemo-opuscar (film/explainer dari kode) | Node 20+, ffmpeg **7+**, Python 3.11+, Git (Windows: Git Bash). Library diklon ke `~/lemo-opuscar` dan diperbarui otomatis dari GitHub setiap jalan. Suara edge-tts mengirim teks ke Microsoft. Sampel instrumen berlisensi CC BY: cantumkan kredit di video | opsional "Video" |
| 94 skill Blender (`blender-director` dkk.) | Blender 4.x + addon BlenderMCP + uv + server MCP `blender` di Claude Code. Sketchfab/Hyper3D berbayar, tidak wajib | opsional "Blender" (addon: manual) |
| docling, graphify | CLI `docling`, `graphify` | opsional "Alat dokumen" |

**Langkah manual Blender** (sekali):
1. Unduh `addon.py` dari https://github.com/ahujasid/blender-mcp
2. Blender > **Edit > Preferences > Add-ons** > **Install...** > pilih `addon.py` > aktifkan **Interface: Blender MCP**.
3. Di 3D View tekan **N**, buka tab **BlenderMCP**, klik **Connect to Claude** (port 9876).
4. Simpan file `.blend` sebelum sesi: alat `execute_blender_code` menjalankan Python apa saja di Blender.
5. Server MCP sudah didaftarkan pemasang (`claude mcp add -s user blender -e DISABLE_TELEMETRY=true -- uvx --python 3.11 blender-mcp`). Cek dengan `claude mcp list`.

**ffmpeg 7 untuk Video**: Windows (winget) dan Homebrew sudah 7+. Ubuntu 24.04 masih 6.1: pakai build ffmpeg 7 lain lalu cek `ffmpeg -version`.

## 6. Skill tambahan yang disarankan (pasang sendiri)

Dua skill ini bagus dipakai, tapi **tidak ikut paket** karena lisensi sebagian isinya tidak bisa dipastikan untuk dijual ulang. Kamu bisa memasangnya sendiri dari sumber aslinya untuk dipakai sendiri. Baca catatan lisensinya dulu.

### 6a. taste-skill (`design-taste-frontend`): website kelas premium
- **Gunanya**: membangun website perusahaan, produk, toko, tempat, atau SaaS dengan design system sendiri, efek WebGL, dan 12 pemeriksa di browser yang menahan hasil sampai lolos.
- **Kenapa tidak ikut paket**: berisi 413 foto contoh dengan lisensi campuran (Unsplash License, CC BY-SA, CC BY). Untuk situs klien yang dijual, cek lisensi tiap foto yang dipakai (daftarnya di `assets/photos/photos.json`) atau ganti dengan foto sendiri.
- **Butuh**: Node 22+ dan Chrome/Edge/Chromium (sudah dipasang oleh pemasang inti).
- **Pasang** (dari folder repo):

  macOS/Linux:
  ```bash
  git clone --depth 1 https://github.com/Leonxlnx/taste-skill /tmp/taste-skill
  cp -r /tmp/taste-skill/skills/taste-skill .claude/skills/design-taste-frontend
  cp /tmp/taste-skill/LICENSE .claude/skills/design-taste-frontend/LICENSE
  ```
  Windows (PowerShell):
  ```powershell
  git clone --depth 1 https://github.com/Leonxlnx/taste-skill "$env:TEMP\taste-skill"
  Copy-Item -Recurse "$env:TEMP\taste-skill\skills\taste-skill" .claude\skills\design-taste-frontend
  Copy-Item "$env:TEMP\taste-skill\LICENSE" .claude\skills\design-taste-frontend\LICENSE
  ```
- **Catatan pakai**: skill ini punya hook yang aktif saat skill dipakai dan bisa menahan Claude sampai pemeriksaan selesai (bisa beberapa menit). Panggil hanya bila perlu, misalnya: "pakai taste-skill untuk landing page ini". Versi yang diuji penjual: commit `f6b7657`.

### 6b. ui-styling: komponen shadcn/ui + Tailwind
- **Gunanya**: membangun antarmuka dengan komponen shadcn/ui (dialog, dropdown, form, tabel), tema, dark mode, dan desain canvas.
- **Kenapa tidak ikut paket**: file lisensi Apache di folder skill ini belum diisi pemiliknya (`Copyright [yyyy]`), dan font di `canvas-fonts/` berasal dari sumber lain (masing-masing membawa lisensi OFL sendiri).
- **Butuh**: Node + Python (sudah dipasang oleh pemasang inti).
- **Pasang** (dari folder repo):

  macOS/Linux:
  ```bash
  git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill /tmp/uupm
  cp -r /tmp/uupm/.claude/skills/ui-styling .claude/skills/ui-styling
  ```
  Windows (PowerShell):
  ```powershell
  git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill "$env:TEMP\uupm"
  Copy-Item -Recurse "$env:TEMP\uupm\.claude\skills\ui-styling" .claude\skills\ui-styling
  ```
- Versi yang diuji penjual: commit `6ae86f6`.

**Urutan**: pasang dulu paket inti (bagian 2), lalu salin skill tambahan di atas, lalu jalankan `node tools/pasang/cek-kesiapan.mjs` untuk memastikan statusnya SIAP. Buka sesi `claude` baru supaya skill baru terbaca.

## 7. Yang tidak bisa atau terbatas

- **Skill hanya dipakai lewat Claude Code** (terminal atau Claude Desktop). Web Nexaoffice memanggil AI langsung dan tidak membaca folder skill.
- **Blender** butuh layar dan Blender terbuka: tidak untuk VPS.
- **Generator gambar AI** (`design`, mockup impeccable) memakai API yang bisa berbayar.
- **Pemeriksa teks** di beberapa skill dibuat untuk bahasa Inggris.

**Pindah ke VPS** nanti: `git clone`, `bash pasang.sh --inti`, lalu ikuti `docs/vps-nexaoffice.md`. Di server, Claude Code memakai API key (bukan login langganan). Blender tidak jalan di VPS.

## 8. Masalah umum

| Gejala | Perbaikan |
|---|---|
| `'claude' is not recognized` | Tutup terminal, buka terminal baru. Bila masih, tambahkan `%USERPROFILE%\.local\bin` ke PATH |
| "Claude Code on Windows requires either Git for Windows (for bash) or PowerShell" | Tambahkan `C:\Windows\System32\WindowsPowerShell\v1.0\` ke PATH, atau pasang PowerShell 7 |
| "Claude Code does not support 32-bit Windows" | Pakai Windows PowerShell biasa, bukan yang "(x86)" |
| `running scripts is disabled on this system` | Jalankan lewat `pasang.bat` (sudah mengizinkan skrip hanya untuk proses itu) |
| winget tidak ada | Pasang "App Installer" dari Microsoft Store |
| Perintah baru belum dikenali setelah dipasang | Tutup jendela, buka terminal baru, jalankan `pasang.bat` lagi |
| Gagal unduh | Matikan VPN sebentar, coba lagi |
| Diagnosis Claude Code | `claude doctor` |

Dokumentasi resmi Claude Code: https://code.claude.com/docs/en/setup dan https://code.claude.com/docs/en/troubleshoot-install
