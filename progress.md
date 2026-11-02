# Progress: Zuno

Terakhir diperbarui: 2026-11-02 (versi web Zuno untuk Vercel dibuat, tampilan HUD ala JARVIS jadi ZUNO, menunggu izin push + API key untuk deploy; naskah konten dipertajam: pilar, bank fakta Zulnan, hook kuat, CTA komentar; Build App aman menurut Zulnan; perbaikan Pengembang tertahan di Build App, menunggu dicoba ulang Zulnan; Engineering standby + tab Build App di Zuno Studio v2; Divisi Engineering 4 agen ditambahkan; prompt orkestrasi ditulis ulang ke Lead + 6 divisi; tim dirampingkan jadi Lead + 6 divisi, 14 agen; Divisi Mutu penasihat tanpa veto; sumber luar sebagai bahan konten)

## Status singkat
- Blueprint dan prompt orkestrasi: **selesai, struktur Lead + 6 divisi kreatif + Divisi Engineering (18 agen)** (`docs/prompt-orkestrasi-zuno.md`, Word, dan Claude Doc sudah sama).
- Divisi Engineering (build web app pribadi/portofolio/klien): **standby; profil, aturan, skill, dan tab Build App di Zuno Studio v2 sudah dibuat; lolos tes stub, error "Pengembang tertahan" saat dicoba Zulnan; sudah diperbaiki (kode ditulis bertahap dan dilanjutkan bila terpotong), lolos tes stub, menunggu dicoba ulang dengan Claude asli.**
- Preview skema (simulasi berskrip): **selesai**, tidak memanggil AI.
- Zuno Studio v1 (tool live, tiap sub-agen memanggil Claude): **jalan, tapi terlalu rumit** menurut Zulnan. Dipakai sebagai bahan, akan diganti v2.
- Zuno Studio v2: **dibangun dan dipublikasikan sebagai preview, lolos tes stub (Claude tiruan); belum diuji dengan Claude asli.** Carousel: PNG nyata (template A-D). Video: paket naskah + storyboard + Kartu Gaya + rencana render (.md, bisa diunduh), bukan file video; pratinjau kanvas hanya kasar.
- Profil agen (23 peran, nama dan format dari katalog agency-agents-id): **selesai ditulis ulang lengkap di `agents/`, menunggu dicek Zulnan.**

## Naskah konten (keputusan Zulnan 2026-11-02)
- Metode tetap Killer Script; masalahnya bahan kosong dan arah tidak jelas, bukan strukturnya.
- 6 pilar konten jadi fondasi (cuan dari AI, tutorial, storytelling proses membangun, peluang produk digital, tools AI, AI agent); satu konten satu pilar dan satu arah.
- Hook paling penting; storytelling boleh. Register lu/gua, santai tapi informatif. Video motion sekitar 30 detik, utamakan naskah lengkap.
- Bank fakta: 6 web aktif (produk digital + landing page, sekitar 30 menit per web), sedang membangun Zuno. SMK tidak dipakai. Contoh suara tidak diperlukan (motion = suara AI, rekaman = suara Zulnan).
- BOFU = bukti tentang Zulnan, arah ke follow dan komentar. Tokoh/brand boleh disebut bila informatif.
- Konten menang: retensi, komentar, view; alat ukur utama komentar.
- Riset otomatis via Apify/Scrapelyfy saat live; video referensi diunggah Zulnan.

## Divisi Engineering (keputusan Zulnan 2026-11-02)
- Kantor dua sayap di bawah Lead: kreatif (6 divisi konten) dan Engineering (build web app).
- 4 agen: T.1 Arsitek & Analis Kebutuhan, T.2 Desainer UI/UX, T.3 Pengembang Aplikasi, T.4 Penguji & Rilis (`agents/15-18`). Profil baru (tidak ada padanan di 23 profil lama).
- Aturan: `docs/aturan-engineering.md`. Empat prinsip kerja dari andrej-karpathy-skills (MIT); tiga gerbang persetujuan Zulnan (ruang lingkup, tampilan, hasil uji); "selesai" wajib ada bukti uji.
- Standar proyek (keputusan Zulnan): kredit "Creative @nexamind.ai" di proyek pribadi/portofolio, proyek klien sesuai klien; akun login acak per proyek, kotak Contoh akses tetap di frontend (setelan TAMPILKAN_CONTOH_LOGIN), menu Reset Akses; password di-hash; penyedia LLM fleksibel (AI_PROVIDER), API key di server; skill bebas platform LLM.
- Skill disesuaikan di `skills/engineering/` (01-idea-to-scope-lock, 08-motion-purpose-check, webapp-builder-full-gas, webapp-builder-gas-blogger, webapp-builder-firebase; .zip siap unggah ulang). Skill gas-* lain dipakai apa adanya.
- google/artemis (uji di HP Android sungguhan): **di-hold** atas keputusan Zulnan.
- **Standby** (keputusan Zulnan): tidak ikut alur konten; aktif saat ada permintaan build. Zuno Studio v2 punya dua tab terpisah: **Konten** (state S, alur konten) dan **Build App** (state B, T.1 ruang lingkup > gerbang 1 > T.2 desain > gerbang 2 > T.3 kode > T.4 cek otomatis + tinjauan AI > gerbang 3). Akun awal acak dibuat halaman. Unduhan: index.html, file backend, PANDUAN.md. Rilis tidak dilakukan di halaman. Tes: `node tests/zuno-studio-v2-build-stub-test.js [--klien|--buruk]`.

## Struktur divisi: 23 profil jadi 14 agen (keputusan Zulnan 2026-11-02)
- Lead tetap: Orkestraror Agen (L.0, + tata kelola otomasi) dan Juru Kabar (L.1).
- Divisi Riset: Peneliti Tren (R.1, + umpan balik audiens), Ahli Strategi Media Sosial (R.2).
- Divisi Produksi: Kreator Konten (P.1, + halaman produk/portofolio), Spesialis Optimasi Video (P.2).
- Divisi Desain: Pencerita Visual (D.1, + prompt gambar).
- Divisi Editing: Pelatih Editing Video Pendek (E.1, + VO dan subtitle), Perender (E.2).
- Divisi Mutu (tambahan, penasihat tanpa veto): Penjaga Merek (Q.1, + fakta dan sumber), Pengumpul Bukti (Q.2, + kepatuhan).
- Divisi Marketing: Kurator Instagram (M.1, + leads/arsip/papan kerja), Pelapor Analitik (M.2, + eksperimen), Strategis Iklan Sosial Berbayar (M.3, standby Fase 4).
- Profil diambil dari 23 profil lama (tidak dibuat baru); tugas profil yang digabung ada di bagian "Tugas gabungan". 23 profil lama utuh di `agents/arsip-23-agen/`.
- Zuno Studio v2 mengikuti struktur ini: tampilan proses per divisi, kode peran baru, Divisi Mutu 2 panggilan (sebelumnya 4). Tes stub lolos. Preview diperbarui (versi 1793591635-df2a).

## Otoritas konten dan Penjaga Mutu (keputusan Zulnan 2026-11-02)
- **Otoritas konten ada di Zulnan.** Agen 2 (Penjaga Merek, Pemeriksa Realitas, Pengumpul Bukti, Pemeriksa Kepatuhan Hukum) menjadi **penasihat tanpa veto**: satu putaran periksa, hasilnya **Catatan Mutu** bertingkat (Aman, Saran, Perlu keputusan Zulnan, Risiko nyata). Agen 2 tidak menolak, tidak menahan, tidak mengembalikan kartu.
- Pola dasar hukum dan kepatuhan (klaim hasil, data sensitif, privasi, izin testimoni) tetap dicek, tetapi hasilnya catatan yang proporsional, bukan penolakan. Risiko nyata ditaruh paling atas; keputusannya di Zulnan.
- **Lead (Orkestraror Agen + Juru Kabar)** menerima semua Catatan Mutu dan mengirim **Ringkasan Sebelum Terbit** ke Zulnan lebih dulu: kualitas, kesesuaian dengan keinginan Zulnan untuk video dan carousel, catatan penting, saran tindakan.
- Tidak ada putaran revisi otomatis dan tidak ada status Tidak Lolos. Revisi hanya atas permintaan Zulnan (di v2: "Revisi sesuai catatanmu" atau "Terapkan saran Penjaga Mutu"). Rantai status: Ide, Draf, Teredit, **Ditinjau**, Disetujui, Terjadwal, Tayang, Terukur.
- **Memori tentang Zulnan bukan bahan konten**: dipakai untuk suara, gaya, batas aman. Cerita pribadi hanya bila diminta atau pas, tidak di setiap konten.
- **Bahan konten dari sumber luar**: Peneliti Tren mencari berita, artikel, dan konten viral (judul, tautan, tanggal), lalu tim mengolahnya jadi konten kreatif sendiri (tanpa menyalin, sumber disebut). Zuno Studio v2 tidak punya akses pencarian, jadi ada kolom **Sumber bahan** untuk menempel tautan atau isi; tanpa itu riset tetap hipotesis. Pencarian sungguhan bisa dilakukan lewat Claude Code.
- Berubah: `CLAUDE.md`, `docs/brief-gaya-konten.md` (bagian 3, 4, 7c baru, 8), `docs/prompt-orkestrasi-zuno.md`, profil agen 01, 02, 03, 06, 09, 10, 15, 16-19, baris standby di 8 profil, `agents/README.md`, `agents/semua-agen.md` (dibangun ulang), `prototypes/zuno-studio-v2.html`, `tests/zuno-studio-v2-stub-test.js`. `docs/prompt-orkestrasi-zuno.docx` dan Claude Doc prompt **belum** disamakan.

## Zuno Studio v2: terhubung ke profil agen dan brief (2026-11-01)
File: `prototypes/zuno-studio-v2.html` (artifact Claude, capability `sample` dan `downloads`). Belum diuji dengan Claude asli; baru tes stub (`tests/zuno-studio-v2-stub-test.js`).
- Alur mengikuti `agents/README.md`: Orkestraror Agen, Ahli Strategi Media Sosial, Kreator Konten, Pencerita Visual, Perender (render sebelum QA), Agen 2 paralel (Penjaga Merek, Pemeriksa Realitas, Pengumpul Bukti, Pemeriksa Kepatuhan Hukum), gerbang Zulnan, lalu Kurator Instagram menyiapkan paket posting (belum memposting). Peneliti Tren dan agen standby lain belum dipanggil (tidak ada akses pencarian di artifact).
- Memori inti dari `docs/brief-gaya-konten.md` masuk ke prompt: audiens 25-35, fakta yang boleh dipakai, larangan, harga [HARGA BELUM DITENTUKAN], TOFU/MOFU/BOFU. SMK Broadcasting tidak dipakai (belum dikonfirmasi).
- Carousel: Pencerita Visual memilih satu template A Papan Tulis, B Neon Gelap, C Majalah, atau D Kartu Layar per carousel (usulan TOFU B/A, MOFU A/D, BOFU C); bisa dipaksa lewat pilihan di layar. Dirender ke PNG 1080x1350 dengan nama dan penomoran (handle belum diisi).
- Video: Kartu Gaya dengan lima preset (Dentum, Orbit Megah, Glitch Digital, Kartu Layar, Editorial Cepat); tiap adegan maksimal 2 detik; slogan lengkap disisipkan otomatis setelah hook; WebM pratinjau 540x960 tanpa suara. Mode Tampil dan alat claude-video-effects tetap di komputer Zulnan.
- (Diganti 2026-11-02) Agen 2 tanpa veto; Lead mengirim Ringkasan Sebelum Terbit. Lihat bagian "Otoritas konten dan Penjaga Mutu".
- **Paket per perintah: 1 carousel + 1 video.** Satu video = satu palet dan satu latar (bisa beda antar video).
- **Referensi video (foto/video, maks. 3) diinput langsung di tool.** Tool mengukur palet dominan dan energi gerak, mengirim cuplikan gambar ke Pencerita Visual, dan Kartu Gaya diisi dari referensi (palet, font, latar, jenis masuk teks, kamera, ekstra, energi). Tanpa referensi: preset. Mesin render video kini parametrik dan ramai (latar bergerak, teks berjalan, bentuk, partikel, kamera, irisan transisi).
- Draf diberi tanda "suara perlu dicek" dan "handle belum diisi" sampai butir [ISI] brief terisi.
- `docs/desain-zulnan-motion.md` (brief motion Zulnan: Teal Tech, avatar voxel, MP4 VO ElevenLabs) disimpan sebagai referensi. Pada hal yang bertentangan, `docs/brief-gaya-konten.md` yang berlaku (gaya video berubah per video, bukan satu palet tetap).

## Profil agen: sudah ditulis (2026-11-01)
Folder `agents/` (baca `agents/README.md` dulu; `agents/semua-agen.md` adalah versi gabungan).
- 23 profil, nomor file = urutan alur kerja. Format mengikuti contoh katalog: Definisi Peran, Kemampuan Inti, Keahlian Khusus, Integrasi Alur Kerja, Kerangka Pengambilan Keputusan, Metrik Keberhasilan, Contoh Kasus Penggunaan, kerangka khusus peran, Gaya Komunikasi, Pembelajaran & Memori; ditambah bagian Zuno (Status, Tugas di Zuno, Dilarang, Masukan, Keluaran). Frontmatter: name, description, tools, color, emoji, vibe, kode, tim, urutan, status, acuan.
- Metrik = metrik proses; tidak ada angka target karangan. Ambang performa menunggu Zulnan.
- Semua agen ada; yang tidak ikut alur harian berstatus **standby** (siaga, jalan saat ditugaskan lewat Kartu Konten). Aturan fase dan persetujuan Zulnan tetap berlaku; Agen 2 penasihat tanpa veto (sejak 2026-11-02).
- Tambahan baru: Juru Kabar (juru bicara tim, Ringkasan Sebelum Terbit), Insinyur Prompt Gambar, Pelatih Editing Video Pendek, Perender (file jadi), Narator & Subtitle, Spesialis Optimasi Video, Arsitek Tata Kelola Otomasi, Pelacak Eksperimen, Penyintesis Umpan Balik.
- Katalog tidak punya agen yang benar-benar merender gambar atau video; Perender dan Narator & Subtitle dibuat sendiri.

## Gaya visual (2026-11-01)
Baca `docs/gaya-video.md`. Ringkas:
- Video: gaya berubah per video, dipilih lewat Kartu Gaya (pemilik: Pencerita Visual). Adegan maksimal 2 detik, megah, penuh motion; Mode Tampil atau Tanpa Wajah; typography mengikuti referensi. Referensi dari Zulnan (Pinterest) dilampirkan sebagai gambar.
- Sumber gaya: Motion Prompt (MIT), claude-video-effects (MIT), HyperFrames (Apache 2.0), Remotion (lisensi khusus; cek bila Zuno dijual).
- Carousel: **campuran sesuai topik** (keputusan Zulnan). Satu carousel memakai satu dari 4 template (A Papan Tulis, B Neon Gelap, C Majalah, D Kartu Layar), dipilih Pencerita Visual. Contoh: artifact "Pilihan Template Carousel" (https://claude.ai/artifact/PHNp692VhrsaWiqzwhusP4), salinan di `prototypes/zuno-carousel-opsi.html`.
- Brief dasar lengkap (memori inti): `docs/brief-gaya-konten.md`. Isi tanda **[ISI]** di sana bersama Zulnan; jangan menebak.
- Belum diuji: semua alat render video. Status video tetap "Prompt siap generate" sampai ada file.

## Tugas berikutnya
0000. **Deploy Zuno Web ke Vercel** (`web/`, panduan di `web/README.md`). Sudah: halaman HUD (ZUNO, inti, panel status, diagram Cara Kerja yang ikut proses asli), server `/api/ai` (Claude lewat SDK resmi, streaming, fallback otomatis; penyedia bisa diganti), kunci akses `ZUNO_ACCESS_KEY`, tes server dan halaman lolos dengan AI tiruan. Belum: push branch (izin Zulnan), buat proyek Vercel (Root Directory `web`), isi `ANTHROPIC_API_KEY` dan `ZUNO_ACCESS_KEY` di Vercel (Zulnan sendiri, jangan lewat chat), deploy, uji dengan Claude asli. Setiap `prototypes/zuno-studio-v2.html` berubah, jalankan `node web/build.mjs`.
000. **(Zulnan: naskah better) Uji naskah baru tab Konten dengan Claude asli** (preview versi 1793600384-376a). Zulnan menilai naskah sebelumnya "basi, umum, tidak jelas arahnya". Perbaikan: tiap kartu wajib satu dari 6 pilar konten + arah (untuk siapa, masalah apa, dapat apa); P.1 menulis 3 kandidat hook berbeda jenis lalu memakai yang terkuat; storytelling boleh; bank fakta Zulnan (6 web aktif, sekitar 30 menit per web, sedang membangun Zuno) untuk hook proof dan BOFU; CTA memancing komentar; register lu/gua; tanpa sumber, Peneliti Tren mengisi bahan pengetahuan umum per pilar (perlu dicek). Minta Zulnan menilai naskah baru; bila masih umum, minta contoh video referensi dan naskahnya.
00. **(Zulnan: sudah aman 2026-11-02) Coba ulang tab Build App** di preview (versi 1793597823-5d32). Error sebelumnya: Pengembang (T.3) tertahan saat menulis kode. Dugaan penyebab: satu jawaban kode panjang melewati batas panjang/waktu `sample` (sekitar 5 menit per jawaban). Perbaikan: `askText` menulis bertahap (streaming, `effort: low`, target index.html di bawah 450 baris) dan melanjutkan otomatis bila jawaban terpotong atau putus di tengah (maks. 5 bagian); progres "KB tertulis" tampil; pesan error menyebut agen yang tertahan; tombol "Coba lagi" dan "Unduh log debug" di tab Build App. Penyebab pasti belum terbukti dengan Claude asli: bila masih error, minta Zulnan unduh log debug Build App (`zuno-build-log-debug.json`) dan kirim. Tes: `node tests/zuno-studio-v2-build-stub-test.js [--klien|--buruk|--potong|--gagal]`.
0. **Cek alur baru Penjaga Mutu** di preview: jalankan satu perintah dengan tautan atau isi berita di kolom Sumber; pastikan tidak ada penolakan atau revisi otomatis, Ringkasan Sebelum Terbit terbaca jelas, dan catatan Agen 2 tidak berlebihan.
1. **Uji v2 dengan Claude asli** di preview (https://claude.ai/artifact/8B5S1yzoCDfKY2f9P5zZ2g): jalankan satu perintah, cek kualitas naskah (hook, problem, twist, solusi, CTA), cek unggah referensi (foto, MP4, WebM), dan cek tombol unduh (`downloads.save` dengan Blob belum terverifikasi). Bila error, minta Zulnan mengirim pesan error atau log debug (tombol "Unduh log debug").
2. **Uji render nyata** paket video: jalankan komposisi HyperFrames (`npx hyperframes preview`, lalu `render`) dan satu rencana efek `claude-video-effects` (butuh rekaman asli Zulnan, ffmpeg, Python 3.12). Format keduanya diambil dari README, belum pernah dijalankan. Catat hasilnya jujur di riwayat. Bila kualitas tampilan tidak sesuai referensi, perbaiki templat HyperFrames di `buildHF` atau pindahkan render ke Claude Code.
3. **Pasang maskot** (`assets/maskot/`) di carousel Zuno Studio bila Zulnan minta; tunggu keputusan varian default (A kaos teal atau B kaos putih) dan apakah maskot dipakai di video.
4. **Proyek pertama Divisi Engineering**: coba tab Build App di preview dengan Claude asli (cek apakah index.html tidak terpotong dan pratinjau jalan); jalankan alur T.1-T.4 dengan tiga gerbang. Bila Zulnan setuju, unggah ulang .zip di `skills/engineering/` ke claude.ai agar versi skill di akun sama.
5. Isi sisa butir **[ISI]** di `docs/brief-gaya-konten.md` bagian 10 (handle, hasil nyata bila ada, tayangan minimal, harga, alat video Tanpa Wajah, varian maskot). Contoh suara, detail web, ukuran konten menang, dan latar SMK sudah dijawab 2026-11-02. Jangan menebak.
5b. **Riset otomatis saat live**: sambungkan Peneliti Tren ke Apify atau Scrapelyfy (keputusan Zulnan). Konektor Apify gagal tersambung di sesi ini; perlu dicek ulang saat dikerjakan.
6. Opsional: suara dan musik, MP4 1080x1920, Peneliti Tren dengan akses pencarian, Pelapor Analitik dan Strategis Iklan di v2, lalu pindah ke web app (Vercel/Supabase): ganti `sample` dengan API backend; Bagian RENDER dan UI di `zuno-studio-v2.html` tetap.

## Video: paket + rencana render, bukan render di tool (2026-11-01)
Keputusan Zulnan: Zuno Studio menghasilkan **paket .md** (naskah hook-problem-twist-solusi-cta, storyboard per adegan maks. 2 detik, Kartu Gaya dari referensi, rencana efek `claude-video-effects` untuk Mode Tampil, komposisi HTML HyperFrames untuk Tanpa Wajah) yang bisa diunduh dan dipratinjau; video dirender di komputer Zulnan atau lewat Claude Code. Kanvas hanya pratinjau kasar (opsional). Wajah maks. 2-3 detik lalu motion; latar selalu bergerak. Naskah memakai metode Killer Script plus uji retensi. Carousel tidak diubah. Format rencana efek dan HTML HyperFrames diambil dari README kedua repo; **belum diuji dijalankan**.

## Maskot (2026-11-01)
Dua gambar maskot voxel disimpan di `assets/maskot/` dan dicatat di `docs/brief-gaya-konten.md` (bagian 6, "Maskot di carousel"). Zuno Studio v2 **belum** memakai maskot; carousel di preview tetap sama sampai Zulnan minta. Varian default dan pemakaian di video menunggu keputusan Zulnan.

## Keputusan yang sudah diambil
- Nama agen: Zuno. Target awal: Zulnan sendiri, lalu content creator pemula 25-35 tahun.
- Platform: Instagram, TikTok, Threads. Target harian: 2 carousel + 1 video motion grafis (Mode Tampil / Tanpa Wajah).
- Fase 1 default: Agen 3 hanya menyiapkan paket, belum eksekusi.
- Tugas paralel: A antar konten; B (1.1 dengan 3.2); C (2.1-2.4); D (3.1 dengan 3.3). Tetap berurutan: rantai status, persetujuan Zulnan, alur iklan, putaran revisi.
- Urutan konflik (sejak 2026-11-02): keputusan Zulnan, keamanan (data sensitif, klaim hasil), data performa, ide kreatif. Bila buntu, tanya Zulnan tanpa menahan produksi.

## Belum nyata / belum selesai
- Posting otomatis, Meta Ads, data performa asli, generator gambar/video asli: belum ada.
- Tiga celah blueprint: validasi pengguna, ketersediaan nama/domain/akun Zuno, akses platform dan iklan.
- Belum ditetapkan: ukuran "konten menang" dan tayangan minimal, panjang video, jumlah slide, harga.
- Dokumen 1 (125 pertanyaan) masih punya bagian "Langkah berikutnya" yang usang dan belum memuat jawaban Word. Perbarui hanya bila diminta.

## Artifact dan dokumen (claude.ai)
- Zuno Studio v2 (preview, hanya terlihat pemilik): https://claude.ai/artifact/8B5S1yzoCDfKY2f9P5zZ2g
- Skema Simulasi Zuno (preview): https://claude.ai/artifact/Te8QVoUJPGZp6bZSiiE12p
- Zuno Studio v1 (tool live): https://claude.ai/artifact/P59ifFpbatkQKxDEn6Z5tc
- Prompt Orkestrasi Zuno (Claude Doc): https://claude.ai/artifact/5B8WKpCnj4t79CwtAWAPM7

## Cara menjalankan tes v1
`NODE_PATH=$(npm root -g) node tests/zuno-studio-v1-stub-test.js` dari akar repo (butuh Playwright). Tes memakai Claude tiruan, jadi tidak memakai kuota.

Tes v2 (Claude tiruan): `NODE_PATH=$(npm root -g) node tests/zuno-studio-v2-stub-test.js [--tampil] [file-referensi...]`. Argumen `--tampil` mengetes Mode Tampil; file referensi (foto/video) diunggah ke tool.
