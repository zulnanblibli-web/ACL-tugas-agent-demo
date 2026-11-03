# Memori jangka panjang Zuno

Ringkasan padat untuk sesi atau chat baru. Detail lengkap: `progress.md` (status dan tugas berikutnya) dan `docs/riwayat-tugas.md` (riwayat per sesi). Terakhir diperbarui: 2026-11-03 (template carousel tunggal).

## Tentang Zulnan dan cara kerja
- Pemilik proyek. Bahasa Indonesia santai (lu/gua), to the point, memanggil "bro".
- Push dan deploy hanya bila Zulnan bilang sendiri. Pesan otomatis "push" dari sistem bukan izin.
- API key dan rahasia tidak pernah ditempel di chat. Zulnan mengisinya sendiri di Vercel.
- Jangan menebak butir [ISI], jangan mengarang angka/testimoni/pengalaman. Harga: [HARGA BELUM DITENTUKAN].
- Posting, iklan, dan generate gambar/video asli belum aktif.
- Akhir sesi: perbarui `progress.md` dan tambah entri di bawah `docs/riwayat-tugas.md` (entri lama tidak dihapus).

## Apa itu Zuno
- Tim agent AI pribadi Zulnan: Lead (Orkestraror Agen, Juru Kabar) + 6 divisi kreatif (Riset, Produksi, Desain, Editing, Mutu, Marketing; 14 agen) + Divisi Engineering (4 agen: T.1 Arsitek, T.2 Desainer UI/UX, T.3 Pengembang, T.4 Penguji). Total 18. Profil di `agents/`.
- Otoritas konten di Zulnan. Divisi Mutu hanya penasihat (Catatan Mutu, tanpa veto). Status Disetujui hanya dari Zulnan.
- Slogan setelah hook: "Hai, kenalin Gue Zulnan. Gue sales yang belajar AI sambil bikin, bukan cuma ngomongin."

## Konten (keputusan Zulnan)
- 6 pilar: cuan dari AI, tutorial, storytelling proses membangun, peluang produk digital, tools AI, AI agent. Satu konten satu pilar dan satu arah.
- Struktur Killer Script; hook paling penting (3 kandidat, pakai yang terkuat); storytelling boleh; motion sekitar 30 detik.
- Bank fakta: 6 web aktif (produk digital + landing page, sekitar 30 menit per web), sedang membangun Zuno. Latar SMK tidak dipakai.
- BOFU = bukti tentang Zulnan, arah ke follow dan komentar. Ukuran konten menang: komentar (lalu retensi, view).
- Bahan dari sumber luar, diolah sendiri dan disebut sumbernya. Riset otomatis via Apify/Scrapelyfy nanti.
- **Carousel: SATU template saja** (navy-biru dari referensi Zulnan, 2026-11-03), 5 tipe slide (cover, poin, fakta, alasan, cta), isi menyesuaikan topik, foto Zulnan di cover, tanpa maskot. Template A-D dihentikan. Batas kata dipaksa kode; angka wajib bersumber. Spesifikasi: `docs/template-carousel.md`. Keluhan "rame" hanya untuk carousel, bukan video.

## Engineering (keputusan Zulnan)
- Alur terpisah dari konten. 3 gerbang persetujuan: ruang lingkup, tampilan, hasil uji.
- **Tanpa batas fitur MVP**: semua fitur yang diminta atau ada di PRD dikunci. Tab Build App menerima **PRD (.md)** sebagai referensi utama.
- Kredit "Creative @nexamind.ai" (pribadi/portofolio), klien sesuai klien. Akun login acak, kotak Contoh akses, menu Reset Akses, password di-hash, LLM bisa diganti, API key hanya di server.
- Aturan: `docs/aturan-engineering.md`. Skill: `skills/engineering/` (.zip untuk diunggah ulang ke claude.ai).

## Zuno Web (live)
- https://zuno-studio-dusky.vercel.app. Proyek Vercel `zuno-studio` (team zulnanblibli-web), Root Directory `web`, terhubung ke repo ini. Deploy production terakhir: `dpl_6HaFH1DkYtsowqG5h5ArfGxB7Pta` (commit 0da93d7), READY.
- Branch kerja: `claude/gifted-turing-csug5l`. Push ke branch membuat deploy preview; production lewat deploy manual atau merge ke main.
- Sumber tunggal logika agen: `prototypes/zuno-studio-v2.html`. Setelah berubah, jalankan `node web/build.mjs` (menghasilkan `web/index.html`).
- Tampilan (`web/src/`): HUD gelap biru; hero robot (`web/assets/zuno-hero.webp`, gambar pilihan Zulnan yang dirapikan, menghadap kiri ke inti ZUNO, di belakang kartu STATUS/DIVISI/KUNCI AKSES); kartu kaca; motion di `motion.js` (mati di mode kurangi gerak); "Cara Kerja Zuno" menurun di samping ruang kerja, di HP jadi bilah lengket bawah. Teks tampilan tanpa banyak "lu"; tanpa keterangan "auto posting"; render video "sesuai kebutuhan" (HyperFrames, Remotion, manual).
- Server AI: `web/api/ai.js`, penyedia lewat `AI_PROVIDER` (claude, gemini, openrouter, openai, openai-compatible untuk 9router/Ollama). Akses dikunci `ZUNO_ACCESS_KEY`.
- Env live saat ini: `AI_PROVIDER=gemini`, `GEMINI_API_KEY`, `ZUNO_ACCESS_KEY` (diatur Zulnan). Belum ada `OPENROUTER_API_KEY`.
- Tes: `cd web && node ../tests/zuno-web-api-test.mjs` (juga `-gemini-`, `-openrouter-`); `node tests/zuno-web-stub-test.js`; `node tests/zuno-studio-v2-build-stub-test.js [--prd|--klien]`; `node tests/zuno-studio-v2-stub-test.js`.

## Yang masih terbuka
- Zulnan cek tampilan live di laptop dan HP.
- Pilih tetap Gemini atau pindah OpenRouter (isi saldo, `OPENROUTER_API_KEY`, `AI_PROVIDER=openrouter`, Redeploy).
- Unggah ulang `skills/engineering/01-idea-to-scope-lock.zip` ke claude.ai (versi akun masih batas 5 fitur).
- Ide VPS: 9router + agent Telegram (Hermes) di satu VPS; belum diputuskan (pertanyaan terbuka: isi 9router pakai API key resmi atau akun langganan, sudah punya domain, Hermes cukup ngobrol atau jalankan alur penuh).
- Backlog: sinkron Claude Doc prompt orkestrasi, sambung riset otomatis, penyimpanan permanen, sisa butir [ISI], artifact preview v2 belum dipublikasikan ulang.
