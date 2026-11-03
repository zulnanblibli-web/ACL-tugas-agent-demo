# Zuno Web (Vercel)

Versi live Zuno Studio v2 dengan tampilan HUD. Logika agen tetap dari `prototypes/zuno-studio-v2.html`. Di artifact, halaman memanggil Claude lewat `window.claude`; di web, panggilan itu lewat server sendiri (`/api/ai`), dan API key hanya disimpan di Vercel.

## Isi folder
| File | Fungsi |
|---|---|
| `index.html` | Halaman jadi (hasil `build.mjs`, jangan diedit langsung) |
| `src/hero.html`, `src/tail.html`, `src/hud.css`, `src/hud.js` | Tampilan HUD: judul ZUNO, inti, panel status, diagram "Cara kerja" yang ikut proses asli |
| `src/live.js` | Jembatan: `window.claude.use('sample')` diarahkan ke `/api/ai` (streaming) |
| `api/ai.js` | Server AI. Penyedia bisa diganti lewat `AI_PROVIDER` |
| `api/status.js` | Status untuk panel HUD (tanpa membocorkan kunci) |
| `dev-server.mjs` | Server lokal untuk uji di komputer sendiri (lihat bagian "Jalankan di komputer sendiri") |
| `.env.local.example` | Contoh pengaturan lokal; salin jadi `.env.local` |
| `build.mjs` | Membangun ulang `index.html` setelah `zuno-studio-v2.html` berubah: `node web/build.mjs` |

## Setelan Vercel
- Root Directory: `web`. Framework: Other. Tanpa build command.
- Environment variables:

| Nama | Isi | Wajib |
|---|---|---|
| `ZUNO_ACCESS_KEY` | Kunci akses halaman (acak, min. 16 karakter). Diisi sekali di tombol KUNCI AKSES | Ya |
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

**Windows (paling mudah):** klik dua kali `jalankan-lokal.bat` di akar repo. Pertama kali: memasang paket, membuat `web/.env.local` dari contoh, dan membukanya di Notepad. Isi `ZUNO_ACCESS_KEY` dan key penyedia AI, simpan, lalu klik dua kali lagi. Browser terbuka ke http://localhost:3000.

**Manual (Windows, Mac, Linux):**
```
cd web
npm install                      # sekali saja
copy .env.local.example .env.local   # Mac/Linux: cp .env.local.example .env.local
# isi web/.env.local, lalu:
node dev-server.mjs
```
Buka http://localhost:3000, klik KUNCI AKSES dan masukkan isi `ZUNO_ACCESS_KEY` dari `.env.local`. Panel STATUS SISTEM harus ONLINE. Butuh Node 20 ke atas.

- API key hanya ditaruh di `web/.env.local` (tidak ikut ke GitHub). Jangan tempel ke chat.
- Setelah `prototypes/zuno-studio-v2.html` berubah: `node build.mjs` (di folder `web`), lalu muat ulang halaman. Server tidak perlu dimulai ulang untuk perubahan halaman; perubahan di `.env.local` atau `api/` butuh mulai ulang (Ctrl+C lalu jalankan lagi).
- Port lain: isi `PORT` di `.env.local`.

## Uji
- `node tests/zuno-web-dev-server-test.mjs` (server lokal: halaman, aset, status, kunci akses, streaming, berkas yang tidak boleh disajikan; butuh `npm install` di folder `web`)
- `cd web && npm install && node ../tests/zuno-web-api-test.mjs && node ../tests/zuno-web-gemini-test.mjs && node ../tests/zuno-web-openrouter-test.mjs` (server AI dengan Claude, Gemini, dan OpenRouter tiruan)
- `node tests/zuno-web-stub-test.js` (halaman web + HUD dengan AI tiruan, butuh Playwright)
