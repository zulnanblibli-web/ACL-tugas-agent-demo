# Memori jangka panjang Zuno

Ringkasan padat untuk sesi atau chat baru. Tugas yang belum selesai per 2026-11-05: `docs/serah-terima-chat-baru.md`. Detail lengkap: `progress.md` (status dan tugas berikutnya) dan `docs/riwayat-tugas.md` (riwayat per sesi). Terakhir diperbarui: 2026-11-04 (skill PINAX, Antrian Posting, tangan komputer).

## Tentang Zulnan dan cara kerja
- Pemilik proyek. Bahasa Indonesia santai (lu/gua), to the point, memanggil "bro".
- Push dan deploy hanya bila Zulnan bilang sendiri. Pesan otomatis "push" dari sistem bukan izin.
- API key dan rahasia tidak pernah ditempel di chat. Zulnan mengisinya sendiri di Vercel.
- Jangan menebak butir [ISI], jangan mengarang angka/testimoni/pengalaman. Harga: [HARGA BELUM DITENTUKAN].
- Posting **hanya lewat Antrian Posting** (keputusan Zulnan 2026-11-04): konten Disetujui Zulnan (video: setelah file final dioke-kan) masuk antrian, dijadwalkan lewat Metricool oleh skill `antrian-posting`, dilaporkan Juru Kabar. Iklan dan generate gambar/video AI asli belum aktif. Aturan: `docs/alur-posting.md`.
- Akhir sesi: perbarui `progress.md` dan tambah entri di bawah `docs/riwayat-tugas.md` (entri lama tidak dihapus).

## Apa itu Zuno
- Tim agent AI pribadi Zulnan: Lead (Orkestraror Agen, Juru Kabar) + 6 divisi kreatif (Riset, Produksi, Desain, Editing, Mutu, Marketing; 14 agen) + Divisi Engineering (4 agen: T.1 Arsitek, T.2 Desainer UI/UX, T.3 Pengembang, T.4 Penguji). Total 18. Profil di `agents/`.
- Otoritas konten di Zulnan. Divisi Mutu hanya penasihat (Catatan Mutu, tanpa veto). Status Disetujui hanya dari Zulnan.
- Slogan setelah hook: "Hai, kenalin Gue Zulnan. Gue sales yang belajar AI sambil bikin, bukan cuma ngomongin."

## Konten (keputusan Zulnan)
- 6 pilar: cuan dari AI, tutorial, storytelling proses membangun, peluang produk digital, tools AI, AI agent. Satu konten satu pilar dan satu arah.
- Struktur Killer Script; hook paling penting (3 kandidat, pakai yang terkuat); storytelling boleh; motion sekitar 30 detik.
- Bank fakta: 6 web aktif (produk digital + landing page, kurang lebih 30 menit per web), sedang membangun Zuno. Latar SMK tidak dipakai.
- BOFU = bukti tentang Zulnan, arah ke follow dan komentar. Ukuran konten menang: komentar (lalu retensi, view).
- Bahan dari sumber luar, diolah sendiri dan disebut sumbernya. **Riset mandiri lebih diutamakan** (2026-11-06): Peneliti Tren mencari sendiri lewat Google Trends ID, Google News (7 hari), Hacker News (14 hari) di `web/api/riset.js` (hanya Zuno Web; artifact tidak punya akses web). Bisa disetel lewat env `RISET_*` (negara, bahasa, sumber, kata kunci niche, umur berita, mati/nyala); pembeli edisi jasa menyetel sendiri di Vercel mereka. Apify/Scrapelyfy belum.
- **Cover slide 1 carousel** (2026-11-06): diambil dari gambar utama artikel sumber naskah (link Google News dibuka ke artikel asli), atau foto Wikimedia berlisensi bebas untuk nama nyata yang tertulis di naskah/sumber; kredit di slide 1; cek hak pakai sebelum posting. `RISET_GAMBAR=off` mematikan. Unggahan Zulnan selalu menang.
- Prompt konten diketik sendiri (chip ide dihapus 2026-11-06; kolom referensi gaya video sempat dihapus lalu dikembalikan hari yang sama atas permintaan Zulnan). **Naskah dicek dulu**: file naskah `.docx` diunduh, desain dan editing jalan setelah Zulnan klik "Lanjut ke desain & editing".
- **Perakit Agen** (`.claude/skills/perakit-agen`): pabrik agen/skill baru dengan uji RED-GREEN lewat subagent, dari `writing-skills` superpowers.
- **Carousel: SATU template saja** (navy-biru dari referensi Zulnan, 2026-11-03), 5 tipe slide (cover, poin, fakta, alasan, cta), isi menyesuaikan topik, foto Zulnan di cover, tanpa maskot. Template A-D dihentikan. Batas kata dipaksa kode; angka wajib bersumber. Spesifikasi: `docs/template-carousel.md`. Keluhan "rame" hanya untuk carousel, bukan video.
- **Video: tiga tipe** (2026-11-03, `docs/referensi-video.md`): A Percakapan (avatar voxel Zulnan ngobrol dengan Zuno), B Proses tim (Zuno dan agen divisi, papan Task Orchestration; tulisan "Design" benar, isi papan hanya contoh), C Zulnan di frame (ikuti referensi). Karakter hanya di video A dan B, bukan carousel. Referensi dipakai untuk struktur dan ritme, tanpa meniru merek lain. Footage 3D tidak otomatis dari VPS; butuh generator.

## Engineering (keputusan Zulnan)
- Alur terpisah dari konten. **Sejak 2026-11-06 alur superpowers**: tanpa gerbang persetujuan Zulnan di tengah build; keputusan diambil sendiri berpatokan permintaan, PRD, dan referensi, lalu dicatat (Catatan keputusan); tiap tahap ditinjau T.4 dan diperbaiki maks. 2 putaran. Berhenti hanya untuk pembayaran, rahasia, tindakan merusak, akun deploy klien yang belum jelas. Skill superpowers di `.claude/skills/` (writing-plans, test-driven-development, subagent-driven-development, dll).
- **Tanpa batas fitur MVP**: semua fitur yang diminta atau ada di PRD dikunci. Tab Build App menerima **PRD (.md)** sebagai referensi utama.
- Kredit "Creative @nexamind.ai" (pribadi/portofolio), klien sesuai klien. Akun login acak, kotak Contoh akses, menu Reset Akses, password di-hash, LLM bisa diganti, API key hanya di server.
- Aturan: `docs/aturan-engineering.md`. Skill: `skills/engineering/` (.zip untuk diunggah ulang ke claude.ai).

## Skill dan tangan komputer (2026-11-04)
- Skill dari katalog PINAX (sumber MIT, disaring dan dicek) ada di `.claude/skills/`. Daftar, pemilik agen, dan bukti uji ada di `.claude/skills/README.md`.
  - Engineering: grilling (T.1), hallmark hanya untuk proyek baru (T.2), mobile-native, break-ui, prove-it-ran, review-my-diff, systematic-debugging, vibe-security.
  - Editing: ffmpeg-skill (sudah diuji: konversi Reels dan cek format lolos).
  - Marketing (coreyhaines31): social, content-strategy, copywriting, copy-editing, marketing-psychology, customer-research, ad-creative, ads, analytics. Konteksnya di `.claude/product-marketing.md`.
  - Buatan Zuno: antrian-posting.
  - Remotion: skill resmi tanpa file lisensi, dipasang di laptop bila dipilih.
- Tangan komputer: agent-desktop (Vercel Labs) + Claude Code di laptop Zulnan. Dipasang lewat `pasang-tangan-komputer.bat`; aturan dan larangan di `docs/tangan-komputer.md`. Sesi cloud tidak bisa menjangkau laptop.
- Rilis Engineering pindah ke **Antigravity** (keputusan Zulnan 2026-11-05): Claude Code gagal start di laptopnya (`claude.exe` tidak kompatibel Windows), tangan komputer agent-desktop tidak berfungsi. Panduan: `docs/rilis-antigravity.md`; aturan di `.agents/`. Belum diuji dengan paket rilis asli.
- Metricool: akun ada (blogId 7638930), tapi per 2026-11-04 belum ada akun sosmed tersambung. Media harus berupa tautan publik, jadi lewat Google Drive.

- Arahan Zulnan 2026-11-04:
  - **Sudah dikerjakan**: agent-desktop khusus Divisi Engineering di laptop, dari bangun sampai live (skill `rilis-engineering`, paket rilis dari tab Build App, `pasang-tangan-komputer.bat` + CLI deploy). Divisi kreatif tidak memakainya; konten di web.
  - (Diganti 2026-11-06) Gerbang Engineering dihapus; rilis langsung sampai live, link + bukti + catatan keputusan dikirim ke Zulnan.
  - Antrian Posting via web, Google Drive, dan API Metricool dengan jadwal dipilih Zulnan: **pending**, ditahan Zulnan.

## Zuno Web (live)
- https://zuno-studio-dusky.vercel.app. Proyek Vercel `zuno-studio` (team zulnanblibli-web), Root Directory `web`, terhubung ke repo ini. Deploy production terakhir: `dpl_J8pTt8ay8ECJ2vCA1pMgcBAcJs6D` (commit 80cc1ab), READY; branch `claude/gifted-turing-csug5l` langsung jadi production di proyek ini. Repo kini di https://github.com/zulnanblibli-web/ACL-tugas-agent-demo.
- Branch kerja: `claude/gifted-turing-csug5l`. Push ke branch membuat deploy preview; production lewat deploy manual atau merge ke main.
- Sumber tunggal logika agen: `prototypes/zuno-studio-v2.html`. Setelah berubah, jalankan `node web/build.mjs` (menghasilkan `web/index.html`).
- Tampilan (`web/src/`): HUD gelap biru; hero robot (`web/assets/zuno-hero.webp`, gambar pilihan Zulnan yang dirapikan, menghadap kiri ke inti ZUNO, di belakang kartu STATUS/DIVISI/KUNCI AKSES); kartu kaca; motion di `motion.js` (mati di mode kurangi gerak); "Cara Kerja Zuno" menurun di samping ruang kerja, di HP jadi bilah lengket bawah. Teks tampilan tanpa banyak "lu"; tanpa keterangan "auto posting"; render video "sesuai kebutuhan" (HyperFrames, Remotion, manual).
- Server AI: `web/api/ai.js`, penyedia lewat `AI_PROVIDER` (claude, gemini, openrouter, openai, openai-compatible untuk 9router/Ollama). Akses dikunci `ZUNO_ACCESS_KEY`.
- Env live saat ini: `AI_PROVIDER=gemini`, `GEMINI_API_KEY`, `ZUNO_ACCESS_KEY` (diatur Zulnan). Belum ada `OPENROUTER_API_KEY`.
- Preview lokal di laptop: `jalankan-lokal.bat` (Windows) atau `cd web && npm install && node dev-server.mjs`, buka http://localhost:3000, pengaturan di `web/.env.local` (dari `.env.local.example`; key diisi Zulnan sendiri). Status: diperkuat 2026-11-03 (browser dibuka otomatis ke `127.0.0.1` setelah server siap, pindah port otomatis, pesan `[GAGAL]`, log `web/server-lokal.log` tanpa key); belum dicoba ulang di laptop Zulnan (lihat `progress.md` tugas 000007). Sesi cloud tidak bisa menjalankan apa pun di laptop kecuali Remote Control disambungkan.
- Tes: `cd web && node ../tests/zuno-web-api-test.mjs` (juga `-gemini-`, `-openrouter-`); `node tests/zuno-web-stub-test.js`; `node tests/zuno-studio-v2-build-stub-test.js [--prd|--klien]`; `node tests/zuno-studio-v2-stub-test.js`.

## Yang masih terbuka
- Cara cek hasil pilihan Zulnan: **artifact** Zuno Studio v2 (https://claude.ai/artifact/Hhp1jjUmZNmi2TFjr9qCBX), bukan server lokal. Web live kena limit API gratis.
- **Edisi jasa** (keputusan Zulnan 2026-11-04):
  - Zuno dijual sebagai salinan white-label di repo terpisah https://github.com/zulnanblibli-web/zuno-studio-app (rilis pertama 076c84f). Pembeli melakukan fork, impor ke Vercel, dan memakai API key sendiri.
  - Identitas Zulnan diganti PENGATURAN BRAND.
  - Alat dan aturan di `docs/jasa-zuno.md`.
  - Aturan: salinan jasa harus selalu bisa jalan; setiap update Zuno diekspor dan dites ulang.
- Pending tugas: dicatat di `pending.md`; jawab dari situ bila Zulnan bertanya "pending tugas".
- Rencana jangka panjang:
  - VPS dan versi agent di web + desktop dengan desain kantor; ditunda.
- **Siapkan Antrian Posting dan tangan komputer** (`progress.md` 000008): jalankan `pasang-tangan-komputer.bat`, sambungkan sosmed dan Google Drive di Metricool, isi [ISI] tanda konten AI.
- **Pertama: Zulnan coba ulang server lokal** setelah perbaikan (`git pull`, klik `jalankan-lokal.bat`); bila gagal kirim isi `web/server-lokal.log` (`progress.md` 000007).
- Zulnan cek tampilan live di laptop dan HP, termasuk carousel navy-biru, input gambar cover, tipe video A/B/C, dan paket Claude Code.
- Pilih tetap Gemini atau pindah OpenRouter (isi saldo, `OPENROUTER_API_KEY`, `AI_PROVIDER=openrouter`, Redeploy).
- Unggah ulang `skills/engineering/01-idea-to-scope-lock.zip` ke claude.ai (versi akun masih batas 5 fitur).
- Ide VPS: 9router + agent Telegram (Hermes) di satu VPS; belum diputuskan (pertanyaan terbuka: isi 9router pakai API key resmi atau akun langganan, sudah punya domain, Hermes cukup ngobrol atau jalankan alur penuh).
- Backlog: sinkron Claude Doc prompt orkestrasi, sambung riset otomatis, penyimpanan permanen, sisa butir [ISI], artifact preview v2 belum dipublikasikan ulang.
