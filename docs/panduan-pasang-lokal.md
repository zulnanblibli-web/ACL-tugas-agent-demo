# Panduan pasang lokal: web + Claude Code + semua skill (satu perintah)

Untuk menjalankan Zuno di laptop sendiri (atau VPS): web Zuno di `http://localhost:3000`, plus Claude Code yang memakai semua skill di `.claude/skills` lengkap dengan skripnya. Repo jasa punya versi white-label panduan ini (`PANDUAN-LOKAL.md`).

Status uji: `pasang.sh` sudah dicoba jalan di Linux (Ubuntu 24.04, mode `--inti` dan `--coba`). `pasang.bat`/`pasang.ps1` untuk Windows **belum pernah dijalankan di Windows sungguhan**: coba dulu dengan `pasang.bat -Coba`, lalu jalankan biasa dan kirim tulisan yang muncul bila ada yang gagal.

## 1. Sebelum mulai

| Perlu | Keterangan |
|---|---|
| Windows 10/11 (64-bit) dengan **winget** | winget bawaan Windows ("App Installer"). Bila tidak ada: pasang "App Installer" dari Microsoft Store. |
| atau macOS dengan **Homebrew** | Pasang dari https://brew.sh bila belum ada. |
| atau Linux Ubuntu/Debian (termasuk WSL dan VPS) | Butuh `sudo`. Distro lain: pasang alat di bagian 3 secara manual. |
| Internet | Unduhan inti sekitar 300-600 MB; paket video lemo-opuscar 350 MB - 1 GB lagi; Blender sekitar 400 MB. |
| Akun Claude untuk Claude Code | Langganan Claude (Pro/Max/Team/Enterprise) untuk dipakai sendiri, **atau** API key dari Claude Console (bayar per token). Paket Free tidak termasuk Claude Code. |
| Key AI untuk web | Satu key di `.env.local`: `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `OPENROUTER_API_KEY`, atau `OPENAI_API_KEY`, plus `ZUNO_ACCESS_KEY` (kata sandi web buatan sendiri, minimal 16 karakter). |

## 2. Satu perintah

1. Ambil repo ke laptop (sekali):
   - `git clone https://github.com/zulnanblibli-web/ACL-tugas-agent-demo.git` lalu masuk ke foldernya, **atau**
   - unduh ZIP dari GitHub, klik kanan > **Extract All** (jangan jalankan dari dalam ZIP).
2. Jalankan pemasang dari folder repo:

**Windows** (klik dua kali, atau ketik di terminal):
```bat
pasang.bat
```

**macOS / Linux / WSL / VPS:**
```bash
bash pasang.sh
```

Pilihan tambahan (sama untuk keduanya; Windows memakai `-Inti`, `-Semua`, `-Coba`):

| Pilihan | Artinya |
|---|---|
| tanpa pilihan | paket inti, lalu ditanya satu per satu untuk paket opsional |
| `--inti` / `-Inti` | hanya paket inti, tanpa pertanyaan |
| `--semua` / `-Semua` | inti + semua paket opsional, tanpa pertanyaan |
| `--coba` / `-Coba` | hanya menampilkan langkah; tidak memasang apa pun |

Pemasang aman dijalankan berulang: yang sudah terpasang dilewati, `.env.local` yang sudah ada tidak diubah. Pemasang tidak meminta dan tidak menyimpan API key.

## 3. Urutan yang dikerjakan pemasang

| No | Langkah | Windows | macOS | Linux/VPS |
|---|---|---|---|---|
| 1 | Alat dasar: Git (+ Git Bash), Python 3, ffmpeg | winget `Git.Git`, `Python.Python.3.12`, `Gyan.FFmpeg` | brew `git python ffmpeg` | apt `git curl python3 python3-venv python3-pip ffmpeg` |
| 2 | Node.js 22+ | winget `OpenJS.NodeJS.LTS` | brew `node@22` | NodeSource `setup_22.x` + apt `nodejs` |
| 3 | uv dan Claude Code | winget `astral-sh.uv`; `irm https://claude.ai/install.ps1 \| iex` | `curl -LsSf https://astral.sh/uv/install.sh \| sh`; `curl -fsSL https://claude.ai/install.sh \| bash` | sama dengan macOS |
| 4 | Paket web + file pengaturan | `npm install` di folder web; `.env.local` dibuat dari contoh lalu Notepad terbuka | sama; isi `.env.local` dengan editor teks | sama |
| 5 | Browser untuk pemeriksa skill | Edge/Chrome yang sudah ada; bila tidak ada: `npx playwright install chromium` | Chrome bila ada, atau Playwright Chromium | Playwright Chromium (`--with-deps`) |
| 6 | Paket opsional (ditanya) | lihat bagian 5 | lihat bagian 5 | lihat bagian 5 |
| 7 | Cek kesiapan | `node tools\pasang\cek-kesiapan.mjs` | `node tools/pasang/cek-kesiapan.mjs` | sama |

Cek kesiapan bisa dijalankan kapan saja. Ia menampilkan alat yang sudah/belum ada, pengaturan web (tanpa menampilkan isi key), dan skill yang siap atau masih kurang alat.

## 4. Langkah manual setelah pemasang (tidak bisa otomatis)

1. **Isi `.env.local`** (folder `web/`): `ZUNO_ACCESS_KEY` dan satu key AI. Jangan tempel isinya ke chat.
2. **Login Claude Code sekali**: buka terminal baru di folder repo, ketik `claude`, lalu ikuti `/login`. Atau isi `ANTHROPIC_API_KEY` di environment. Catatan: bila `ANTHROPIC_API_KEY` terisi, Claude Code mode otomatis (`claude -p`) selalu memakai key itu (bayar per token), bukan langganan.
3. **Nyalakan web**: `jalankan-lokal.bat` (Windows) atau `node web/dev-server.mjs --buka`, lalu buka `http://localhost:3000`. Di menu Pengaturan AI isi kunci akses (`ZUNO_ACCESS_KEY`).
4. **Kerja dengan skill**: ketik `claude` di folder repo. Skill terbaca otomatis. Aturan pakai skill GitHub (referensi dulu, berbayar tidak dipakai, deploy setelah preview disetujui) ada di `CLAUDE.md`.
5. **Opsional, hook impeccable** (cek desain otomatis tiap file diedit): salin isi `.claude/settings.json` dari repo pbakaus/impeccable (commit c1e0e54) ke `.claude/settings.json` repo ini. Tidak dipasang otomatis karena mengubah pengaturan Claude Code.
6. **Opsional, tangan komputer (rilis Engineering)**: tetap lewat `pasang-tangan-komputer.bat` dan `docs/tangan-komputer.md`.

## 5. Paket opsional dan kebutuhan tiap skill

| Skill | Butuh | Dipasang pemasang? | Jalan di |
|---|---|---|---|
| frontend-design, grilling, writing-plans, superpowers, skill marketing, vibe-security, prove-it-ran, review-my-diff, break-ui, mobile-native, slides, banner-design (tanpa gambar AI) | tidak ada (panduan) | - | lokal, VPS |
| hallmark | Node; browser untuk `sloplint --render` | ya (inti) | lokal, VPS |
| impeccable | Node; programnya diunduh sendiri dari GitHub saat pertama dipakai; browser untuk mode live | ya (inti) | lokal, VPS. Mengirim data pemakaian ke impeccable.style kecuali `DO_NOT_TRACK=1`. impeccable Pro (berbayar) tidak dipakai |
| ui-ux-pro-max, design-system | Python 3 | ya (inti) | lokal, VPS. Kueri pakai bahasa Inggris |
| ui-styling | Node + Python (shadcn lewat npx) | ya (inti) | lokal, VPS |
| design (logo, ikon, mockup) | Python + paket `google-genai` + `GEMINI_API_KEY` (atau ATLASCLOUD/MUAPI) | **tidak**: generator gambar memakai API yang bisa berbayar; isi key sendiri hanya bila mau | lokal, VPS |
| brand, hue | Node (hue memanggil `npx js-yaml`) | ya (inti) | lokal, VPS |
| design-taste-frontend (taste-skill) | Node 22 + Chrome/Edge/Chromium | ya (inti) | lokal, VPS. Hanya dipakai bila disebut; gate-nya bisa menahan agen sampai selesai dicek |
| awwwards, jury | Node + browser; Playwright dipasang sendiri oleh skill saat dipakai | ya (inti) | lokal, VPS |
| ffmpeg-skill | ffmpeg 6.1+ dan Python 3.10+ | ya (inti) | lokal, VPS |
| youtube | Python + `google-api-python-client`, `google-auth-oauthlib`, `yt-dlp`; data channel butuh `YOUTUBE_API_KEY` atau OAuth (`~/.claude/youtube_client_secrets.json`) milik pemilik channel | paket: **opsional "YouTube"**; key/OAuth: manual | lokal, VPS. DataForSEO (berbayar) tidak dipakai |
| lemo-opuscar (video dari kode) | Node 20+, ffmpeg **7+**, Python 3.11+, Git (Windows: Git Bash); library diklon ke `~/lemo-opuscar` dan diperbarui otomatis dari GitHub tiap jalan | **opsional "Video"** | lokal; VPS bisa tapi berat. Suara edge-tts mengirim teks ke Microsoft (pakai hanya bila setuju). Sampel instrumen CC BY: cantumkan kredit bila dipakai |
| 94 skill Blender (`blender-director` dkk.) | Blender 4.x + addon BlenderMCP + uv; server MCP `blender` di Claude Code | **opsional "Blender"** (Blender + daftar MCP); **addon manual** | lokal (butuh layar). Sketchfab/Hyper3D berbayar tidak dipakai |
| docling, graphify | CLI `docling` dan `graphify` | **opsional "Alat dokumen"** (`uv tool install`) | lokal, VPS |

**Langkah manual Blender** (sekali):
1. Unduh `addon.py` dari repo ahujasid/blender-mcp.
2. Blender > Edit > Preferences > Add-ons > Install... > pilih `addon.py` > centang "Interface: Blender MCP".
3. Di 3D View tekan N, buka tab **BlenderMCP**, klik **Connect to Claude** (port 9876). Status harus "Connected".
4. Simpan file `.blend` sebelum sesi: alat `execute_blender_code` menjalankan Python apa saja di Blender.
5. Pemasang sudah mendaftarkan server MCP lewat `claude mcp add -s user blender -e DISABLE_TELEMETRY=true -- uvx --python 3.11 blender-mcp`. Cek dengan `claude mcp list`.

**ffmpeg 7 untuk lemo-opuscar**: Ubuntu 24.04 masih ffmpeg 6.1. Windows (Gyan.FFmpeg) dan Homebrew sudah 7+. Di Ubuntu pakai build statis ffmpeg 7 atau PPA yang dipercaya, lalu cek `ffmpeg -version`.

## 6. Yang tidak bisa atau terbatas

- **Skill hanya terbaca oleh Claude Code** (terminal, Claude Desktop, sesi cloud). Web Zuno (Vercel maupun localhost) belum memanggil Claude Code; yang terbawa ke web hanya ringkasan anti-slop di prompt Agent Builder. Jembatan web ke Claude Code ada di rencana (`docs/rencana-lokal-claude-code.md`).
- **Blender** butuh layar dan Blender terbuka: tidak cocok di VPS.
- **agent-desktop** (rilis lewat layar) hanya di laptop Windows.
- **Generator gambar** (`design`, `banner-design`, mockup impeccable) memakai API yang bisa berbayar: tidak dipakai tanpa izin.
- **Pemeriksa bahasa** di taste-skill dan impeccable dibuat untuk teks Inggris: untuk teks Indonesia cek tetap manual.

## 7. Kalau nanti pindah ke VPS

1. Server Ubuntu/Debian, `git clone` repo, lalu `bash pasang.sh --inti` (paket video bila perlu: `bash pasang.sh` lalu pilih).
2. Web sebagai layanan: `docs/vps-nexaoffice.md` (systemd + Caddy, `tools/vps/`).
3. Claude Code di server memakai **API key** (`ANTHROPIC_API_KEY`), bukan login langganan.
4. Keamanan: server tetap mendengar di `127.0.0.1` di belakang Caddy; kunci akses wajib. Jembatan web ke Claude Code (bila sudah dibangun) hanya untuk pemilik dan hanya bekerja di folder kerja.
5. Tidak jalan di VPS: Blender, agent-desktop. Render video berat: butuh server yang cukup kuat.

## 8. Masalah umum

| Gejala | Penyebab | Perbaikan |
|---|---|---|
| `'claude' is not recognized` | `%USERPROFILE%\.local\bin` belum di PATH | Tutup terminal, buka lagi; bila masih, tambahkan folder itu ke PATH |
| "Claude Code on Windows requires either Git for Windows (for bash) or PowerShell" | PowerShell tidak ada di PATH | Tambahkan `C:\Windows\System32\WindowsPowerShell\v1.0\` ke PATH, atau pasang PowerShell 7 |
| "Claude Code does not support 32-bit Windows" | Terminal "Windows PowerShell (x86)" | Pakai Windows PowerShell biasa (bukan x86) |
| `running scripts is disabled on this system` | Kebijakan skrip PowerShell | Jalankan lewat `pasang.bat` (sudah memakai `-ExecutionPolicy Bypass` hanya untuk proses itu) |
| winget tidak ada | App Installer belum terpasang | Pasang "App Installer" dari Microsoft Store |
| Perintah baru belum dikenali setelah dipasang | PATH baru belum terbaca | Tutup jendela, buka terminal baru, jalankan pemasang lagi |
| Gagal unduh / TLS | VPN atau jaringan kantor | Matikan VPN sebentar, coba lagi |
| Diagnosis Claude Code | - | `claude doctor` |

Dokumentasi resmi Claude Code: https://code.claude.com/docs/en/setup (pasang), https://code.claude.com/docs/en/troubleshoot-install (masalah pasang).
