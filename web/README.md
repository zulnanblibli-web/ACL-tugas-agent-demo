# Nexaoffice Web (Vercel)

Sejak 2026-11-09 Zuno Web jadi **Nexaoffice**: `/` = situs utama (hero = Kantor 3D asli (zoom ke lantai studio, agen bergerak)), `/studio.html` = menu **Workspace**, satu tempat kerja: Kantor 3D di kiri (agen ke meja hanya saat tahapnya benar-benar jalan, siaga = santai), perintah + pilihan format (Konten / Build App) di kanan, di bawahnya **Hasil kerja agen** yang menampilkan tulisan tiap agen saat itu juga dari aliran jawaban AI, tombol **Chat ZUNO** (menu Chat, `#chat`: ZUNO melapor tiap langkah, laporan kinerja agen, tombol ke hasil, tanya-jawab, simpan hasil ke folder lokal per tugas lewat File System Access API atau .zip), plus menu Pengaturan AI. `/kantor.html` tidak dipakai lagi (dialihkan ke `/#kantor`). Workspace adalah versi live Zuno Studio v2. Logika agen tetap dari `prototypes/zuno-studio-v2.html`. Di artifact, halaman memanggil Claude lewat `window.claude`; di web, panggilan itu lewat server sendiri (`/api/ai`), dan API key hanya disimpan di Vercel.

## Isi folder
| File | Fungsi |
|---|---|
| `index.html` | Halaman utama **Nexaoffice** (salinan `src/site/index.html` oleh `build.mjs`): menu ala lembur.id, hero simulasi kerja agen (demo berlabel), Kantor 3D tertanam (iframe `office/ruang.html`, tema dan tampilan bisa diganti), cara kerja (video Remotion), tim, isi paket, biaya, FAQ |
| `src/site/` | Sumber halaman utama: `index.html`, `site.css` (+ `tokens.css`, `base.css` dari Hallmark), `site.js` (menu, simulasi hero, kendali kantor 3D, tab, video). Disalin ke `site/` |
| `studio.html` | Ruang kerja (hasil `build.mjs` dari `zuno-studio-v2.html`, jangan diedit langsung), tampilan Nexaoffice: `src/studio-hero.html` (menu, kantor 3D kiri, status, judul kolom kanan), `src/studio-tail.html`, `src/studio-nexa.css`, `src/studio-nexa.js`, `src/ui.js` (kantor 3D ikut panel tahap yang disembunyikan + panel Hasil kerja agen live dari event `nexa:ai` di `live.js`), `src/pengaturan-ai.html` + `src/pengaturan-ai.js` (menu Pengaturan AI: server / API key lokal / VPS, dipakai juga edisi jasa) |
| `bangun.mjs` | `bangunRuangKerja('nexa')` untuk `studio.html`, `bangunRuangKerja('jasa')` untuk edisi jasa (tampilan HUD lama: `src/hero.html`, `src/tail.html`, `src/hud.css`, `motion.js`) |
| `src/serah.js` | Serah terima: `/studio.html?perintah=...&divisi=konten\|build&jalan=1` mengisi perintah lalu langsung menjalankan tim |
| `office/ruang.html`, `office/`, `assets/agents/`, `assets/themes/` | Kantor 3D, disalin dari repo jasa: `node tools/kantor/ambil-kantor.mjs <repo-jasa>` (sumbernya di repo jasa). `ruang.html` = DOM kantor + `src/kantor/sematan.css/js` (versi tertanam); `src/kantor/kendali.js` mengendalikannya dari halaman induk |
| `src/hero.html`, `src/tail.html`, `src/hud.css`, `src/hud.js` | Tampilan HUD: judul ZUNO, inti, panel status, diagram "Cara kerja" yang ikut proses asli |
| `src/live.js` | Jembatan: `window.claude.use('sample')` diarahkan ke `/api/ai` (streaming) |
| `api/ai.js` | Server AI. Penyedia bisa diganti lewat `AI_PROVIDER` |
| `api/status.js` | Status untuk panel HUD (tanpa membocorkan kunci) |
| `dev-server.mjs` | Server lokal untuk uji di komputer sendiri (lihat bagian "Jalankan di komputer sendiri") |
| `.env.local.example` | Contoh pengaturan lokal; salin jadi `.env.local` |
| `build.mjs` | Membangun ulang `index.html` setelah `zuno-studio-v2.html` berubah: `node web/build.mjs` |

## Setelan Vercel
- Root Directory: `web`. Framework: Other. Tanpa build command.
- Riset web Peneliti Tren (`api/riset.js`): setelan opsional `RISET_AKTIF`, `RISET_SUMBER`, `RISET_NEGARA`, `RISET_BAHASA`, `RISET_KATA_KUNCI`, `RISET_HARI_BERITA`, `RISET_HARI_DISKUSI` (lihat komentar di atas file dan `.env.local.example`). Tanpa API key.
- Environment variables:

| Nama | Isi | Wajib |
|---|---|---|
| `ZUNO_ACCESS_KEY` | Kunci akses halaman (acak, min. 16 karakter). Diisi sekali di menu Pengaturan AI | Ya |
| `AI_PROVIDER` | `openrouter` (dipakai sekarang), `claude` (bawaan kode), `openai`, `gemini`, `openai-compatible` (9router, Ollama, LM Studio) | Tidak |
| `ANTHROPIC_API_KEY` | API key Claude (bila `claude`) | Ya untuk Claude |
| `OPENROUTER_API_KEY` / `OPENAI_API_KEY` / `GEMINI_API_KEY` | Key penyedia yang dipakai | Sesuai penyedia |
| `AI_BASE_URL`, `AI_API_KEY` | Untuk `openai-compatible`: alamat endpoint (mis. `https://alamat-tunnel/v1`) dan key-nya bila ada | Untuk `openai-compatible` |
| `AI_MODEL` | Nama model. Bawaan Claude: `claude-opus-5-5`. Gemini: kosong = server memilih sendiri Gemini Pro stabil terbaru dari daftar model Google (Flash untuk tahap ringan) | OpenRouter: kosong = `openrouter/auto` (OpenRouter memilih model). Wajib untuk OpenAI dan `openai-compatible` |
| `AI_MODEL_QUICK` | Model untuk langkah ringan (opsional, mis. lebih murah) | Tidak |
| `CLAUDE_FALLBACK` | `off` untuk mematikan fallback otomatis saat model menolak | Tidak |

- Batas waktu fungsi: 300 detik (`vercel.json`). Jawaban panjang yang terpotong dilanjutkan otomatis oleh halaman.

## Catatan
- Fallback otomatis Claude (`fallbacks: "default"`) aktif: bila model menolak sebuah permintaan, server API mencoba ulang di model lain. Matikan dengan `CLAUDE_FALLBACK=off`.
- Semua jalur streaming. Bila kena limit (429) atau server penyedia sibuk, server mencoba ulang maks. 3 kali sebelum jawaban mulai. Saldo habis (402) langsung dilaporkan.
- OpenRouter memakai saldo prabayar (Credits). Credit limit di pengaturan key hanya batas pengaman, bukan saldo.
- Selain Claude dan jalur tiruan, belum diuji dengan key asli.
- Biaya pemakaian API ditanggung akun penyedia AI. Kunci akses mencegah orang lain memakai server ini.

## Jalankan di komputer sendiri (tanpa Vercel)
Untuk mencoba perubahan di laptop sebelum atau tanpa deploy. Server lokal memakai handler yang sama dengan Vercel (`api/ai.js`, `api/status.js`) dan hanya bisa dibuka dari komputer itu sendiri (`127.0.0.1`).

**Windows (paling mudah):** klik dua kali `jalankan-lokal.bat` di akar repo. Pertama kali: memasang paket, membuat `web/.env.local` dari contoh, dan membukanya di Notepad. Isi `ZUNO_ACCESS_KEY` dan key penyedia AI, simpan, tutup Notepad; server langsung jalan dan browser terbuka sendiri setelah server siap (http://127.0.0.1:3000, atau port berikutnya bila 3000 dipakai). Jendela hitam jangan ditutup selama dipakai. Berkas .bat juga mengecek: dijalankan dari dalam ZIP (harus diekstrak dulu), folder `web` ada, Node 20+, npm ada.

**Manual (Windows, Mac, Linux):**
```
cd web
npm install                      # sekali saja
copy .env.local.example .env.local   # Mac/Linux: cp .env.local.example .env.local
# isi web/.env.local, lalu:
node dev-server.mjs --buka      # --buka = buka browser otomatis
```
Buka alamat yang tertulis di layar (biasanya http://127.0.0.1:3000), klik Pengaturan AI dan masukkan isi `ZUNO_ACCESS_KEY` dari `.env.local` di kolom Kunci akses server. Panel STATUS SISTEM harus ONLINE. Butuh Node 20 ke atas.

- API key hanya ditaruh di `web/.env.local` (tidak ikut ke GitHub). Jangan tempel ke chat.
- Setelah `prototypes/zuno-studio-v2.html` berubah: `node build.mjs` (di folder `web`), lalu muat ulang halaman. Server tidak perlu dimulai ulang untuk perubahan halaman; perubahan di `.env.local` atau `api/` butuh mulai ulang (Ctrl+C lalu jalankan lagi).
- Port lain: isi `PORT` di `.env.local`. Bila port sedang dipakai aplikasi lain, server mencoba port berikutnya sendiri (maks. 10).

**Bila gagal:** server menulis pesan `[GAGAL]` + saran di layar, dan log diagnosa di `web/server-lokal.log` (versi Node, folder, port, penyedia, key terisi atau kosong; tanpa isi key). Kirim isi log itu ke Claude Code. Penyebab umum: belum `git pull` / folder salah; Node belum terpasang atau versi lama; `npm install` gagal karena VPN; port dipakai aplikasi lain (sudah otomatis); membuka `localhost` yang diarahkan ke IPv6 (pakai alamat `127.0.0.1` yang tertulis).

## Uji
- `node tests/zuno-web-dev-server-test.mjs` (server lokal: halaman, aset, status, kunci akses, streaming, berkas yang tidak boleh disajikan; butuh `npm install` di folder `web`)
- `cd web && npm install && node ../tests/zuno-web-api-test.mjs && node ../tests/zuno-web-gemini-test.mjs && node ../tests/zuno-web-openrouter-test.mjs` (server AI dengan Claude, Gemini, dan OpenRouter tiruan)
- `node tests/zuno-web-stub-test.js` (halaman web + HUD dengan AI tiruan, butuh Playwright)

## Pengaturan AI dan VPS (2026-11-09)

Menu **Pengaturan AI** di Workspace: tiga sambungan (Server ini, API key lokal, Server VPS). Server memakai key dari header `x-llm-*` hanya untuk permintaan itu (`api/ai.js`, `konfigDari`), kunci akses tetap wajib. Matikan dengan `NEXA_KUNCI_PENGGUNA=off`. `dev-server.mjs` sekaligus server VPS (`HOST`, `NEXA_CORS_ORIGIN`, `NEXA_SERVER`). Pasang di VPS: `tools/vps/pasang-vps.sh`, panduan lengkap `docs/vps-nexaoffice.md`.
