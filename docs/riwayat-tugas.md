# Riwayat tugas

Catatan berurutan. Tambah entri baru di bawah; jangan hapus yang lama.

## 1. Pertanyaan pemandu dan Blueprint
- 125 pertanyaan pemandu (Claude Doc 1), jawaban acuan, Blueprint Fase 2 final (Claude Doc 2), teks web dalam .md dan .docx.

## 2. Prompt orkestrasi Zuno (2026-10-29)
- Permintaan: jadikan file md dan simpan sebagai Docs untuk dibaca menyeluruh.
- Hasil: `docs/prompt-orkestrasi-zuno.md`, Claude Doc, dan versi Word. Isi: peran, Lead, Agen 1-3 beserta sub-agen, aturan orkestrasi dan memori (7 aturan), aturan generate laporan.

## 3. Tugas paralel (2026-10-29)
- Permintaan: tentukan mana yang bisa paralel; Zulnan memilih empat kelompok (antar konten, 1.1 dengan 3.2, Agen 2, 3.1 dengan 3.3) dan minta dimasukkan di bawah bagian estafet.
- Hasil: blok "Tugas paralel" di md, Docs, dan Word. Versi siap salin-tempel diberikan di chat.

## 4. Preview skema simulasi (2026-11-01)
- Permintaan: simulasi alur kerja dari prompt sebagai web app dan preview skemanya.
- Hasil: artifact "Skema Simulasi Zuno" (`prototypes/zuno-skema-preview.html`), simulasi berskrip dengan contoh tulisan tangan, tanpa AI.

## 5. Zuno Studio v1 (2026-11-01)
- Permintaan: tool sungguhan; ketik perintah dan lihat semua agen dan sub-agen bekerja.
- Hasil: `prototypes/zuno-studio-v1.html`; ~25 panggilan Claude untuk 3 konten, paralel maksimal 3, veto dan revisi otomatis, gerbang persetujuan, laporan .md. Tes stub lolos.
- Umpan balik Zulnan: **terlalu kompleks**. Mau proses garis besar saja, tanpa output tiap sub-agen; tidak boleh menandai Tidak Lolos tanpa pemberitahuan; hasil akhir harus carousel dan video nyata, bukan laporan.

## 6. Pindah ke Claude Code (2026-11-01)
- Permintaan: jadikan memori jangka panjang; catat progress.md dan riwayat di repo ini; lanjut di Claude Code.
- Hasil: memori diperbarui; repo disiapkan dengan progress.md, CLAUDE.md, README, dan riwayat ini.
- Catatan: dari sesi chat, push ke GitHub tidak bisa (tidak ada izin push ke repo). Paket diberikan sebagai file untuk didorong dari komputer Zulnan.

## 7. Zuno Studio v2 (2026-11-01)
- Permintaan: lanjutkan dari catatan; push ke GitHub.
- Hasil: repo didorong ke branch `claude/gifted-turing-csug5l`; v2 dibangun (`prototypes/zuno-studio-v2.html`) dengan proses garis besar, pemberitahuan veto sebelum gagal, carousel PNG dan video WebM nyata. Tes stub `tests/zuno-studio-v2-stub-test.js` lolos tanpa error.
- Tertunda: uji dengan Claude asli, uji unduhan di claude.ai, publikasi artifact, PDF/MP4/suara.

## 8. Profil agen Zuno (2026-11-01)
- Permintaan: isi profile agent untuk Zuno, Lead, dan sub-agen memakai katalog agency-agents-id; beri nama dan tanggung jawab; tambahan boleh asal relevan untuk automation konten; semua tetap ada dengan status standby; file .md urut sesuai alur kerja.
- Hasil: folder `agents/` berisi 23 profil bernomor menurut urutan kerja, `README.md` (tim, diagram alur, aturan standby, daftar), dan `semua-agen.md` (gabungan untuk dibaca sekali jalan). Nama jabatan dari katalog (Orkestraror Agen, Peneliti Tren, Kreator Konten, Pencerita Visual, Penjaga Merek, Pemeriksa Realitas, dan seterusnya).
- Sembilan tambahan, semuanya standby atau aktif sesuai fungsinya: Juru Kabar (baru), Insinyur Prompt Gambar, Pelatih Editing Video Pendek, Perender (baru), Narator & Subtitle (baru), Spesialis Optimasi Video, Arsitek Tata Kelola Otomasi, Pelacak Eksperimen, Penyintesis Umpan Balik.
- Perubahan lingkup: Pengumpul Bukti (2.3) juga memeriksa file hasil render; Juru Kabar wajib memberi kabar sebelum kartu ditandai Tidak Lolos.
- Catatan: katalog aslinya tidak punya editor yang benar-benar membuat file gambar atau video; Pelatih Editing Video Pendek dan Insinyur Prompt Gambar hanya memberi arahan dan prompt, jadi file jadi dibuat Perender (peran baru).
- Tertunda: prompt orkestrasi belum diperbarui untuk tambahan ini; profil belum dihubungkan ke Zuno Studio v2; nama kode baru (L.1, 1.6 sampai 1.10, 3.5 sampai 3.7) perlu dikonfirmasi saat prompt diperbarui.

## 9. Profil agen format lengkap ala katalog (2026-11-01)
- Permintaan: setiap agen dibuat seperti contoh katalog ("Agent Ahli Strategi Media Sosial"), jelas di tiap bagian; jangan cuma ambil nama, tugas dan tanggung jawab harus lengkap.
- Hasil: 23 profil di `agents/` ditulis ulang. Tiap file kini punya: Definisi Peran, Status, Kemampuan Inti, Keahlian Khusus, Integrasi Alur Kerja (Menerima dari / Berkolaborasi dengan / Menyerahkan ke / Mengeskalasi ke / Paralel), Kerangka Pengambilan Keputusan, Metrik Keberhasilan, Contoh Kasus Penggunaan, kerangka khusus peran (2-3 per agen), Tugas di Zuno, Dilarang, Masukan, Keluaran, Gaya Komunikasi, Pembelajaran & Memori. `README.md` dan `semua-agen.md` dibuat ulang.
- Aturan isi: metrik berupa metrik proses (misalnya nol klaim tanpa bukti, maksimal 2 putaran revisi), bukan angka tolok ukur katalog; ambang performa menunggu Zulnan. Angka yang ada (5-10 temuan, 2-3 hari, basi 1-2 minggu) berasal dari prompt orkestrasi. Nama 5 web Nexamind tidak dikarang.
- File berubah: seluruh `agents/*.md`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: Zulnan mengecek profil; prompt orkestrasi (md/docx/Claude Doc) belum memuat 9 tambahan dan Juru Kabar; profil belum dihubungkan ke Zuno Studio v2; publikasi dan uji v2.

## 10. Pustaka gaya video dan template carousel (2026-11-01)
- Permintaan: gaya visual video berubah-ubah (referensi dari Pinterest); carousel boleh satu template tetap. Sumber gaya editing: Motion Prompt, claude-video-effects, Remotion, HyperFrames. Video: adegan berubah tidak lebih dari 1,5 detik, megah, penuh motion, Mode Tampil atau Tanpa Wajah; typography mengikuti referensi. Carousel: beri pilihan dengan contoh. Hal lain boleh ditanyakan.
- Hasil: `docs/gaya-video.md` (aturan gaya, 5 preset awal yang dipetakan ke nomor Motion Prompt dan nama efek claude-video-effects, typography, alat render per bentuk, template Kartu Gaya, daftar yang masih terbuka). `prototypes/zuno-carousel-opsi.html` (artifact "Pilihan Template Carousel": A Papan Tulis, B Neon Gelap, C Majalah, D Kartu Layar, masing-masing 3 slide contoh). Profil Pencerita Visual, Pelatih Editing Video Pendek, Perender, Pengumpul Bukti, dan Orkestraror Agen diperbarui (Kartu Gaya, aturan 1,5 detik, alat render).
- Catatan sumber: tautan 2 dan 3 awalnya sama; tautan 3 dikoreksi Zulnan menjadi Remotion. Lisensi: Motion Prompt dan claude-video-effects MIT, HyperFrames Apache 2.0, Remotion berlisensi khusus (gratis untuk individu dan sampai 3 karyawan; cek remotion.pro bila Zuno dijual sebagai produk).
- Keputusan Zulnan (setelah pertanyaan): suara campur; tiap adegan maksimal 1,5 detik; alat render pertama claude-video-effects; panjang video dan jumlah slide mengikuti topik.
- Tertunda: belum ada alat render yang diuji; preset hanyalah usulan; Zulnan memilih template carousel; uji claude-video-effects menunggu rekaman asli; alat Tanpa Wajah belum dipilih; prompt orkestrasi belum diperbarui; Zuno Studio v2 belum memakai Kartu Gaya.

## 11. Brief gaya konten lengkap, siap pindah ke Claude Code (2026-11-01)
- Permintaan: butuh brief .md gaya konten yang lengkap, simpan di git beserta langkah berikutnya; Zulnan pindah ke Claude Code. Jawaban: carousel campuran sesuai topik; rekaman video dikirim nanti di Claude Code.
- Hasil: `docs/brief-gaya-konten.md` (posisi dan audiens, suara, fakta yang boleh dipakai, larangan, TOFU/MOFU/BOFU, gaya carousel 4 template, gaya video, cara kerja tim, cara memberi perintah, daftar [ISI]). `docs/gaya-video.md` dipulihkan dan disesuaikan (carousel campuran). `CLAUDE.md` dan `README.md` menunjuk ke brief. Profil Pencerita Visual diperbarui. `progress.md` berisi urutan kerja berikutnya.
- Kesalahan yang diperbaiki: commit `a1e7ed1` memotong `docs/gaya-video.md` jadi tinggal bagian 7 (file ditulis ulang sebelum dibaca). Dipulihkan penuh dari commit `6dbdbce`.
- Tertunda: seluruh butir [ISI] di brief; uji claude-video-effects menunggu rekaman asli; alat Tanpa Wajah belum dipilih; prompt orkestrasi dan Zuno Studio v2 belum memakai brief.

## 12. Hubungkan profil agen dan brief ke Zuno Studio v2 (2026-11-01)
- Permintaan: ganti isi v2 sesuai data agen dan brief konten yang dikirim; cek GitHub untuk meneruskan task.
- Temuan: file kiriman identik dengan `agents/semua-agen.md` dan `docs/brief-gaya-konten.md` di GitHub (sesi lain sudah lebih dulu mendorong). Dua commit lokal saya di-rebase di atas `246d965` tanpa konflik. `docs/profil-agen-zuno.md` (draf saya) dihapus karena digantikan `agents/`.
- Hasil: `prototypes/zuno-studio-v2.html` ditulis ulang mengikuti profil dan brief (lihat `progress.md`). Gaya Teal Tech dan avatar voxel dari putaran sebelumnya dilepas karena bertentangan dengan brief (gaya video berubah per video, carousel template A-D). Dicek lewat tes stub dan tangkapan layar tiap template dan preset.
- File berubah: `prototypes/zuno-studio-v2.html`, `tests/zuno-studio-v2-stub-test.js`, `progress.md`, `docs/riwayat-tugas.md`; `docs/desain-zulnan-motion.md` ditambah; `docs/profil-agen-zuno.md` dihapus.
- Tertunda: uji dengan Claude asli; suara dan MP4 (butuh backend); Mode Tampil; butir [ISI] brief; commit belum didorong ke GitHub atas permintaan Zulnan.

## 13. Satu output per jenis, motion lebih ramai, input referensi (2026-11-01)
- Permintaan: output carousel 1 dan video 1; video terasa sepi; tool menerima referensi video atau foto supaya tidak menebak. Juga: satu video satu warna dan satu latar.
- Hasil: paket default 1 carousel + 1 video. Mesin video parametrik dengan latar bergerak, teks berjalan, bentuk, partikel, kamera, dan irisan transisi (palet tetap per video). Referensi diunggah di tool: palet dan energi gerak diukur di browser, cuplikan dikirim ke Pencerita Visual, Kartu Gaya diisi dari referensi. Kemampuan `sample` dideklarasikan dengan `images`. Tes stub diperbarui (mengunggah foto dan video sungguhan).
- Batas jujur: ketepatan "meniru kesan" bergantung pada Claude membaca cuplikan; yang terukur hanya palet, energi gerak, dan perkiraan potongan per detik. Video referensi panjang diukur dari 4 detik pertama.
- Tertunda: uji dengan Claude asli; suara dan MP4; Mode Tampil; commit belum didorong ke GitHub atas permintaan Zulnan.

## 14. Perbaikan error referensi dan dukungan MP4 (2026-11-01)
- Permintaan: Zuno Studio v2 error saat diberi referensi; rapikan dukungan MP4.
- Temuan: pesan error lama terlalu umum ("koneksi terputus") sehingga penyebab sebenarnya tersembunyi; pengiriman gambar ke Claude tidak punya cadangan; pembacaan video rapuh (seek tanpa guard, tipe file kosong tidak dikenali, satu file gagal bisa menggagalkan alur). Penyebab persis di Claude asli belum bisa direproduksi (tes memakai Claude tiruan).
- Hasil: pesan error menyebut kode dan detail; bila Claude menolak gambar, alur lanjut tanpa gambar dengan pemberitahuan; referensi tidak terbaca tidak menghentikan alur (kembali ke preset, disertai alasan); MP4/MOV/WebM dikenali lewat ekstensi juga; ukuran gambar dikecilkan dan jumlahnya dibatasi 8; log debug mencatat file, tipe, ukuran, dan error. Diuji: MP4+PNG, Claude menolak gambar, MP4 rusak.
- Tertunda: uji dengan Claude asli; video HEVC/H.265 (mis. sebagian rekaman iPhone) tetap tidak bisa dibaca browser dan perlu diekspor ulang sebagai H.264.

## 15. Maskot untuk carousel (2026-11-01)
- Permintaan: dua gambar maskot untuk carousel (desain disesuaikan agen saat mengerjakan), tambahkan ke brief; juga tanya kenapa hasil video belum sesuai referensi.
- Hasil: gambar disimpan di `assets/maskot/` (PNG transparan), bagian "Maskot di carousel" ditambahkan ke `docs/brief-gaya-konten.md` (dua varian, aturan pakai, larangan mengubah karakter, butir [ISI] untuk varian default). `progress.md` diperbarui.
- Penjelasan video: lihat jawaban di chat; mesin render canvas hanya meniru arah (palet, energi, jenis gerak), bukan footage atau efek referensi.
- Tertunda: maskot belum dipakai di Zuno Studio v2; keputusan varian default; aturan maskot untuk video.

## 16. Paket naskah dan storyboard (.md), rencana render, naskah Killer Script (2026-11-01)
- Permintaan: video lewat paket (naskah dan storyboard maks. 2 detik, Kartu Gaya dari referensi, rencana efek claude-video-effects atau HTML HyperFrames); wajah maks. 2-3 detik lalu motion; latar tidak diam; naskah tidak datar dengan riset dan alur hook-problem-twist-solusi-cta (memakai skill Killer Script); hapus keterangan di bawah judul; keluaran .md yang bisa diunduh dengan pratinjau.
- Hasil: `prototypes/zuno-studio-v2.html` ditulis ulang di bagian naskah dan keluaran: Peneliti Tren (hipotesis), Kreator Konten dengan metode Killer Script, uji retensi Spesialis Optimasi Video, pilihan Mode Tampil, rencana efek per segmen wajah (Pelatih Editing Video Pendek), komposisi HyperFrames, paket .md per konten dengan pratinjau dan tombol unduh, pratinjau kanvas hanya opsional. Keterangan di bawah judul dan catatan kecil dihapus. Batas adegan 2 detik diterapkan di kode, brief, gaya-video, dan profil agen.
- Batas jujur: bahan riset hanya hipotesis (tidak ada pencarian); rencana efek dan HTML HyperFrames belum diuji dijalankan di alatnya masing-masing; kualitas naskah bergantung pada Claude asli (tes memakai Claude tiruan).
- Tertunda: uji dengan Claude asli; uji render dengan HyperFrames dan claude-video-effects; musik/suara; commit belum didorong ke GitHub atas permintaan Zulnan.

## 17. Penutup sesi: push ke GitHub (2026-11-01)
- Permintaan: push ke GitHub dan catat progress sampai titik ini.
- Hasil: `progress.md` diperbarui (status, tugas berikutnya, tautan preview, cara menjalankan tes v2). Seluruh commit sesi ini didorong ke branch `claude/gifted-turing-csug5l` (tanpa PR).
- Keadaan: v2 lolos tes dengan Claude tiruan; belum diuji dengan Claude asli; video belum dirender oleh alat mana pun.

## 18. Penjaga Mutu jadi penasihat, sumber luar, memori bukan bahan konten (2026-11-02)
- Permintaan: cek kenapa Penjaga Mutu menolak konten. Otoritas konten tetap di Zulnan, Agen 2 tidak boleh menghambat produksi. Semua catatan diserahkan ke Lead/Juru Bicara yang memberi tahu Zulnan dulu soal konten yang akan terbit (kualitas dan kesesuaian video/carousel). Memori tentang Zulnan jangan selalu jadi bahan konten. Tim harus bisa mencari sumber (artikel, berita, konten viral) dan mengolahnya jadi konten kreatif. Aturan hukum tetap dicek tapi jangan selalu ditolak.
- Temuan penyebab: aturan "satu penolakan = Tidak Lolos" + revisi otomatis 2 putaran di brief, prompt orkestrasi, profil 16-19, dan kode v2 (`cardFlow`); Pemeriksa Realitas dengan "toleransi nol" dan "wajib dihapus"; fakta Zulnan ditulis sebagai satu-satunya bahan cerita, sehingga agen condong memakai memori pribadi.
- Hasil: Agen 2 jadi penasihat tanpa veto (Catatan Mutu: Aman, Saran, Perlu keputusan Zulnan, Risiko nyata; satu putaran). Lead (Orkestraror Agen + Juru Kabar) menyusun Ringkasan Sebelum Terbit. Revisi otomatis dan status Tidak Lolos dihapus; revisi hanya atas permintaan Zulnan. Memori Zulnan dipakai untuk suara dan gaya saja. Peneliti Tren berbasis sumber luar; v2 punya kolom Sumber bahan dan Daftar sumber di paket .md. Tes stub diperbarui dan lolos (Tanpa Wajah, Mode Tampil, tombol Terapkan saran). Preview diperbarui (versi 1793590461-3592).
- File berubah: `CLAUDE.md`, `progress.md`, `docs/brief-gaya-konten.md`, `docs/prompt-orkestrasi-zuno.md`, `agents/` (01, 02, 03, 05, 06, 07, 08, 09, 10, 13, 14, 15, 16, 17, 18, 19, 22, 23, README, semua-agen), `prototypes/zuno-studio-v2.html`, `tests/zuno-studio-v2-stub-test.js`.
- Tertunda: uji dengan Claude asli; samakan `prompt-orkestrasi-zuno.docx` dan Claude Doc; v2 belum punya pencarian web sendiri (sumber ditempel Zulnan atau dicari lewat Claude Code); belum di-push (menunggu izin Zulnan).

## 19. Rampingkan tim jadi Lead + 6 divisi (2026-11-02)
- Permintaan: rampingkan divisi agen (research, production, editing, design, marketing; tambahan boleh asal tidak gemuk), sub-agen secukupnya, profil cukup dirampingkan, tujuan tetap (ngonten pakai AI agent). Lead tetap ada. Ambil dari 23 profil yang relevan, jangan buat baru.
- Hasil: 14 agen: Lead (Orkestraror Agen, Juru Kabar), Riset (Peneliti Tren, Ahli Strategi Media Sosial), Produksi (Kreator Konten, Spesialis Optimasi Video), Desain (Pencerita Visual), Editing (Pelatih Editing Video Pendek, Perender), Mutu (Penjaga Merek, Pengumpul Bukti), Marketing (Kurator Instagram, Pelapor Analitik, Strategis Iklan Sosial Berbayar). Sembilan profil lama digabung ke profil yang paling dekat (bagian "Tugas gabungan"). Profil lama diarsipkan di `agents/arsip-23-agen/`. README agen, `semua-agen.md`, brief, `CLAUDE.md`, `gaya-video.md`, dan Zuno Studio v2 (kode peran, tampilan proses per divisi, Divisi Mutu 2 panggilan) diperbarui. Tes stub lolos (Tanpa Wajah, Mode Tampil, revisi atas permintaan). Preview diperbarui.
- File berubah: `agents/` (14 profil baru dari arsip, README, semua-agen, folder arsip), `CLAUDE.md`, `docs/brief-gaya-konten.md`, `docs/gaya-video.md`, `prototypes/zuno-studio-v2.html`, `tests/zuno-studio-v2-stub-test.js`, `progress.md`.
- Tertunda: prompt orkestrasi masih struktur lama (perlu ditulis ulang); uji dengan Claude asli; belum di-push.

## 20. Prompt orkestrasi ke struktur Lead + 6 divisi (2026-11-02)
- Permintaan: lanjut tugas berikutnya: tulis ulang prompt orkestrasi pakai struktur divisi baru (uji preview dengan Claude asli dikerjakan Zulnan).
- Hasil: prompt orkestrasi ditulis ulang: tabel struktur tim, Lead (L.0, L.1), 6 divisi dengan 14 agen (tugas sub-agen lama dipetakan ke agen gabungan), format estafet per divisi plus Ringkasan Sebelum Terbit, tugas paralel dengan kode agen baru, memori dan template laporan per divisi. Aturan lama tetap: Divisi Mutu penasihat tanpa veto, sumber luar, memori bukan bahan konten, Fase 1 default. Versi .md, .docx (dibuat ulang dengan python-docx), dan Claude Doc (judul diganti "Lead + 6 Divisi, 14 Agen") sudah sama.
- File berubah: `docs/prompt-orkestrasi-zuno.md`, `docs/prompt-orkestrasi-zuno.docx`, `progress.md`. Claude Doc: https://claude.ai/artifact/5B8WKpCnj4t79CwtAWAPM7
- Tertunda: uji v2 dan prompt baru dengan Claude asli; uji render; maskot; butir [ISI].

## 21. Divisi Engineering (2026-11-02)
- Permintaan: tambah satu divisi Engineering yang fokus build apa yang Zulnan minta (pribadi, portofolio, atau klien jasa web app), sub-agen efisien tapi optimal. Cek repo google/artemis dan multica-ai/andrej-karpathy-skills, serta 5 skill unggahan (01-idea-to-scope-lock, 08-motion-purpose-check, webapp-builder-firebase, webapp-builder-full-gas, webapp-builder-gas-blogger). Keputusan Zulnan: catatan keamanan boleh diubah; password acak tapi contoh login tetap tampil di frontend plus menu reset; kredit "Creative @nexamind.ai" untuk proyek pribadi/portofolio, klien sesuai permintaan; fleksibel ke semua LLM; artemis di-hold; skill seri 02-07/09 tidak ada (diabaikan).
- Hasil: 4 agen baru (T.1 Arsitek & Analis Kebutuhan, T.2 Desainer UI/UX, T.3 Pengembang Aplikasi, T.4 Penguji & Rilis). `docs/aturan-engineering.md` (prinsip Karpathy, gerbang, pilihan mesin, standar kredit/akses/hash/AI_PROVIDER, data klien). Lima skill disesuaikan di `skills/engineering/` (password bawaan admin2026/edudigital diganti akun acak, TAMPILKAN_CONTOH_LOGIN, menu Reset Akses, hash, kredit, AI fleksibel, bebas platform) + .zip. README agen, semua-agen, CLAUDE.md, prompt orkestrasi (.md, .docx, Claude Doc: "Lead + 7 Divisi, 18 Agen") diperbarui. Nama "Menu riset" dari Zulnan ditafsirkan sebagai menu Reset Akses.
- File berubah: `agents/15-18` (baru), `agents/README.md`, `agents/semua-agen.md`, `docs/aturan-engineering.md` (baru), `skills/engineering/` (baru), `CLAUDE.md`, `docs/prompt-orkestrasi-zuno.md`, `docs/prompt-orkestrasi-zuno.docx`, `progress.md`.
- Tertunda: proyek pertama untuk menguji alur Engineering; unggah ulang skill ke claude.ai bila Zulnan setuju; artemis di-hold.

## 22. Engineering standby + tab Build App di Zuno Studio v2 (2026-11-02)
- Permintaan: push; Divisi Engineering sifatnya standby tapi langsung kerja bila ada task; taruh di Zuno v2 dengan alur konten dan build app dibedakan, jangan disatukan. Tanya apa yang masih kurang.
- Hasil: push commit Divisi Engineering. Zuno Studio v2 punya dua tab: Konten (tidak diubah) dan Build App (state, tracker, hasil, prompt dasar BASE_ENG sendiri). Alur Build App: T.1 ruang lingkup (MVP dipotong ke 5), gerbang 1, T.2 desain (animasi tanpa tujuan dibuang, durasi 100-300 ms), gerbang 2, T.3 index.html + backend sesuai mesin, T.4 cek otomatis 11-12 butir + tinjauan AI, gerbang 3; tiap gerbang bisa direvisi dengan catatan (hanya bagian itu). Akun awal acak dibuat halaman; pratinjau HP/desktop di iframe sandbox; unduh index.html, backend, PANDUAN.md. Status standby dicatat di profil 15-18, README agen, aturan Engineering, CLAUDE.md, prompt orkestrasi (.md, .docx, Claude Doc). Tes stub baru lolos (portofolio, klien, aplikasi buruk tertangkap 9 cek gagal); tes konten lama tetap lolos. Preview diperbarui (versi 1793596339-d897).
- File berubah: `prototypes/zuno-studio-v2.html`, `tests/zuno-studio-v2-build-stub-test.js` (baru), `agents/15-18`, `agents/README.md`, `agents/semua-agen.md`, `docs/aturan-engineering.md`, `CLAUDE.md`, `docs/prompt-orkestrasi-zuno.md`, `.docx`, `progress.md`.
- Tertunda: uji Build App dan Konten dengan Claude asli (panjang index.html bisa terpotong); penyimpanan permanen proyek; rilis/deploy belum dari halaman.

## 23. Laporan error tab Build App, catat dan push (2026-11-02)
- Permintaan: Zulnan mencoba tab Build App (Divisi Engineering) di preview dan masih error. Minta commit, push, dan catat yang belum.
- Hasil: belum ada perbaikan kode (rincian error belum diterima). Dicatat di `progress.md` sebagai tugas 00: minta teks error dan tahapnya, tambah tombol "Unduh log debug" di tab Build App (belum ada), daftar dugaan penyebab yang perlu dicek. Semua perubahan sebelumnya sudah di-push.
- File berubah: `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: perbaikan error Build App; uji Konten dengan Claude asli; penyimpanan permanen; butir [ISI]; akses cari sumber; eksekusi Fase 2 (posting, suara, render, deploy); template penawaran dan serah terima jasa Engineering.

## 24. Perbaikan "Pengembang tertahan" di Build App (2026-11-02)
- Permintaan: error muncul saat Pengembang menulis kode (tertahan); tambahkan tombol log dan perbaiki; hapus keterangan di bawah Zuno Studio pada tab Divisi Engineering.
- Hasil: banner keterangan standby di tab Build App dihapus. `askText` ditulis ulang: streaming dengan progres KB, `effort: low`, kelanjutan otomatis bila jawaban terpotong (`truncated`) atau putus dengan teks sebagian (`e.text`), maks. 5 bagian; berhenti langsung pada refused/prompt_too_large/invalid_request/izin. Target index.html diperkecil (di bawah 450 baris). Pesan error menyebut agen yang tertahan; tombol "Coba lagi" mengulang tahap itu; tombol "Unduh log debug" khusus Build App. Tes stub baru `--potong` dan `--gagal` lolos, tes lama (portofolio, klien, buruk, konten) tetap lolos. Preview diperbarui (versi 1793597823-5d32). Penyebab pasti belum dibuktikan dengan Claude asli.
- File berubah: `prototypes/zuno-studio-v2.html`, `tests/zuno-studio-v2-build-stub-test.js`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: Zulnan coba ulang Build App; bila masih error, kirim log debug Build App.

## 25. Penutup sesi: commit, push, catat (2026-11-02)
- Permintaan: commit dan push, catat riwayat seperti biasa.
- Hasil: semua perubahan sesi ini sudah di-commit dan di-push ke `claude/gifted-turing-csug5l` (tanpa PR). Ringkasan sesi: prompt orkestrasi ke struktur divisi (entri 20), Divisi Engineering 4 agen + aturan + skill (21), Engineering standby + tab Build App terpisah di Zuno Studio v2 (22), laporan error Build App (23), perbaikan Pengembang tertahan (24).
- Keadaan: Zuno Studio v2 (preview versi 1793597823-5d32) lolos semua tes stub (konten dan build); belum terbukti dengan Claude asli. Tab Build App menunggu dicoba ulang Zulnan.
- File berubah: `docs/riwayat-tugas.md`.
- Tertunda: coba ulang Build App (bila error, kirim log debug); uji tab Konten dengan Claude asli; penyimpanan permanen; butir [ISI]; akses cari sumber; eksekusi Fase 2 (posting, suara, render, deploy); template penawaran dan serah terima jasa Engineering; artemis di-hold.

## 26. Naskah konten dipertajam (skill Killer Script + jawaban Zulnan) (2026-11-02)
- Permintaan: Build App sudah aman. Naskah konten belum oke (bahan kosong, umum, arah tidak jelas). Cek skill killer-script dan tanyakan yang dibutuhkan; Zulnan menjawab 13 pertanyaan (lu/gua, 6 web aktif sekitar 30 menit per web, sedang membangun Zuno, SMK tidak dipakai, riset otomatis via Apify/Scrapelyfy nanti, storytelling boleh tapi hook kuat, berpijak pada pilar konten, motion sekitar 30 detik, konten menang diukur dari komentar, tokoh boleh, BOFU = bukti tentang Zulnan ke follow dan komentar).
- Hasil: struktur Killer Script sudah ada di P.1; penyebab naskah lemah adalah bahan kosong, fakta Zulnan belum ada, dan tidak ada pilar/arah. Zuno Studio v2: konstanta 6 pilar; L.0 memberi pilar dan arah per kartu (tampil di kartu dan paket .md); BASE berisi pilar, suara lu/gua, bank fakta, aturan BOFU, ukuran konten menang, aturan tokoh; P.1 menentukan arah dulu, menulis 3 kandidat hook lalu memakai yang terkuat, storytelling boleh, CTA memancing komentar, durasi sekitar 30 detik; P.2 mengecek pilar/arah dan hook spesifik; R.1 tanpa sumber mengisi bahan pengetahuan umum per pilar (perlu dicek, tanpa berita/angka karangan). Brief, prompt orkestrasi (.md/.docx), dan profil agen 04, 05, 10 diperbarui ke 6 web aktif. Tes stub konten dan build lolos. Preview dipublikasikan ulang (versi 1793600384-376a).
- File berubah: `prototypes/zuno-studio-v2.html`, `docs/brief-gaya-konten.md`, `docs/prompt-orkestrasi-zuno.md`, `docs/prompt-orkestrasi-zuno.docx`, `agents/04-ahli-strategi-media-sosial.md`, `agents/05-kreator-konten.md`, `agents/10-penjaga-merek.md`, `agents/semua-agen.md`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: Zulnan uji naskah baru dengan Claude asli; sambungan riset otomatis (Apify/Scrapelyfy); Claude Doc prompt orkestrasi belum disinkronkan dengan perubahan fakta; sisa butir [ISI].

## 27. Zuno jadi web live (Vercel) dengan tampilan HUD (2026-11-02)
- Permintaan: naskah sudah lebih baik. Jadikan preview Zuno live lewat web di Vercel dengan tampilan seperti poster JARVIS (gambar dari Zulnan), JARVIS diganti ZUNO, isi disesuaikan, alur proses tetap terlihat.
- Hasil: folder `web/`. `build.mjs` membangun `web/index.html` dari `prototypes/zuno-studio-v2.html` (sumber tunggal logika agen) + tampilan HUD (`web/src/`): judul ZUNO metalik, inti cincin berputar (lebih cepat saat bekerja), panel status sistem/otak AI/proses/divisi aktif, 5 fitur, diagram "Cara Kerja Zuno" yang membaca keadaan panel Proses asli (alur Konten dan Build App terpisah), panel teknologi, strip bawah, footer. Helm Iron Man di referensi tidak dipakai (karakter milik pihak lain). `web/src/live.js` mengganti `window.claude` dengan panggilan `/api/ai` (streaming NDJSON, potongan teks dikembalikan saat putus agar kelanjutan otomatis jalan). `web/api/ai.js`: Claude lewat SDK resmi `@anthropic-ai/sdk` 1.x, streaming, model bawaan `claude-opus-5-5`, effort low/medium, fallback otomatis saat model menolak (bisa dimatikan `CLAUDE_FALLBACK=off`); penyedia lain (OpenAI, Gemini, OpenRouter) lewat `AI_PROVIDER` tanpa streaming; dilindungi `ZUNO_ACCESS_KEY`; API key hanya di env Vercel. `web/api/status.js` untuk panel HUD. Tes: `tests/zuno-web-api-test.mjs` 11/11 lolos (server Anthropic tiruan), `tests/zuno-web-stub-test.js` alur konten penuh lolos tanpa error di halaman web; tampilan dicek di 1280px dan 390px (tanpa scroll samping). Placeholder kolom Sumber di v2 diperbarui.
- File berubah: `web/` (baru), `tests/zuno-web-api-test.mjs`, `tests/zuno-web-stub-test.js` (baru), `prototypes/zuno-studio-v2.html`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: izin push; proyek Vercel + env (`ANTHROPIC_API_KEY`, `ZUNO_ACCESS_KEY`) oleh Zulnan; deploy; uji dengan Claude asli; penyedia selain Claude belum diuji dengan key asli.

## 28. Push dan deploy Zuno Web, pakai Gemini (2026-11-02)
- Permintaan: push dan deploy; API key pakai AI Studio, model Gemini.
- Hasil: jalur Gemini di `web/api/ai.js` ditulis ulang jadi streaming (`streamGenerateContent?alt=sse`, key lewat header, bagian "thought" disaring, MAX_TOKENS dan blokir keamanan dipetakan). Nama model tidak ditebak: bila `AI_MODEL` kosong, server membaca daftar model Google dan memilih Pro stabil versi tertinggi (Flash untuk tahap ringan) dengan batas output dari daftar itu. Panel HUD menampilkan penyedia aktif. Tes baru `tests/zuno-web-gemini-test.mjs` 9/9 lolos; tes Claude 11/11 dan tes halaman tetap lolos. Push 2 commit. Proyek Vercel `zuno-studio` dibuat (Root Directory `web`, terhubung ke repo, env `AI_PROVIDER=gemini`), deploy production READY dengan build bersih: https://zuno-studio-dusky.vercel.app.
- File berubah: `web/api/ai.js`, `web/api/status.js`, `web/src/hud.js`, `web/src/tail.html`, `web/index.html`, `web/hud.js`, `web/README.md`, `tests/zuno-web-gemini-test.mjs` (baru), `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: Zulnan isi `GEMINI_API_KEY` dan `ZUNO_ACCESS_KEY` di Vercel lalu Redeploy; uji dengan Gemini asli (belum bisa dicek dari sesi ini karena domain vercel.app dan dokumentasi Google diblokir jaringan sesi).

## 29. Pindah ke OpenRouter (2026-11-02)
- Permintaan: Gemini kena limit. Tanya API key dari Claude Pro / ChatGPT Plus (jawab: tidak termasuk, API terpisah dan berbayar), OpenRouter, Ollama, 9router (jawab: bisa lewat jalur format OpenAI; Ollama/9router lokal butuh tunnel; 9router yang memakai akun langganan berisiko melanggar aturan pemakaian). Arti layar key OpenRouter (credit limit = batas pengaman, bukan saldo; saldo prabayar). Lalu: benerin dulu, hapus Gemini.
- Hasil: `web/api/ai.js` jalur format OpenAI ditulis ulang jadi streaming SSE untuk OpenRouter, OpenAI, dan `openai-compatible` baru (`AI_BASE_URL`, untuk 9router/Ollama/LM Studio). Coba ulang otomatis saat 429/5xx (maks. 3 kali, ikut retry-after) untuk semua jalur fetch; saldo habis (402) jadi pesan "Saldo penyedia AI habis". OpenRouter tanpa `AI_MODEL` memakai `openrouter/auto`. Kode Gemini tetap ada sebagai pilihan (aturan fleksibel ke semua LLM), tetapi tidak dipakai: env Vercel `AI_PROVIDER` diganti ke `openrouter`. `GEMINI_API_KEY` tidak bisa dihapus dari sini (tidak ada alat hapus env); Zulnan menghapusnya sendiri. Tes baru `tests/zuno-web-openrouter-test.mjs` 8/8 lolos; tes Claude, Gemini, dan halaman tetap lolos.
- File berubah: `web/api/ai.js`, `web/api/status.js`, `web/build.mjs`, `web/src/tail.html`, `web/index.html`, `web/README.md`, `tests/zuno-web-openrouter-test.mjs` (baru), `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: Zulnan isi saldo + `OPENROUTER_API_KEY`, hapus `GEMINI_API_KEY`, Redeploy; uji dengan OpenRouter asli.

## 30. Revisi tampilan Zuno Web + Engineering tanpa batas MVP, input PRD .md (2026-11-03)
- Permintaan: revisi tampilan https://zuno-studio-dusky.vercel.app: render jangan cuma HyperFrames (alat menyesuaikan pemakaian); hapus "Tanpa auto posting"; kurangi kata "lu" dan tonjolkan fungsi Zuno; "Cara kerja" dibuat menurun dan berdampingan dengan ruang kerja supaya proses terlihat tanpa scroll, juga di HP. Engineering: skill idea dan scope jangan membatasi fitur MVP; tambah menu input PRD (.md) sebagai referensi.
- Hasil: teks hero/bawah ditulis ulang tanpa "lu" (mis. "18 AGEN AI DALAM SATU TIM", "TERBIT SETELAH DISETUJUI", fitur "PERSETUJUAN"); kartu teknologi "Render video: HyperFrames, Remotion, atau manual, sesuai kebutuhan"; strip tinggal 3 (Ganti LLM, 3 Gerbang, Creative @nexamind.ai). "Cara Kerja Zuno" pindah ke kolom kanan ruang kerja (`web/src/flow.html`), menurun dengan garis penghubung, lengket saat scroll; di HP jadi bilah lengket di bawah layar (langkah aktif + persen), diketuk untuk membuka daftar langkah. Engineering: T.1 mencatat semua fitur tanpa batas jumlah (kolom `fitur`, bukan `fitur_mvp` maks. 5), Out of Scope hanya untuk yang jelas tidak diminta, daftar Nanti hanya yang Zulnan tunda; T.3 tidak lagi dibatasi 450 baris. Tab Build App punya input PRD (.md/.markdown/.txt, maks. 2 MB, dipotong 60.000 karakter) yang dikirim ke semua tahap sebagai referensi utama; permintaan build boleh kosong bila PRD diunggah. Skill `01-idea-to-scope-lock` (+ .zip), aturan engineering, profil Arsitek, semua-agen, prompt orkestrasi (.md/.docx) disamakan. Tes: build stub lolos (7 fitur tetap, PRD sampai ke Arsitek, juga mode klien), stub konten v2 lolos, stub web lolos tanpa error, tes API Claude/Gemini/OpenRouter lolos; tampilan dicek di 1440px dan 390px (tanpa scroll samping, panel alur tetap terlihat saat scroll).
- File berubah: `web/src/hero.html`, `web/src/tail.html`, `web/src/flow.html` (baru), `web/src/hud.css`, `web/src/hud.js`, `web/build.mjs`, `web/index.html`, `web/hud.css`, `web/hud.js`, `prototypes/zuno-studio-v2.html`, `tests/zuno-studio-v2-build-stub-test.js`, `skills/engineering/01-idea-to-scope-lock/SKILL.md` (+ .zip), `skills/engineering/README.md`, `docs/aturan-engineering.md`, `agents/15-arsitek-analis-kebutuhan.md`, `agents/semua-agen.md`, `docs/prompt-orkestrasi-zuno.md`, `docs/prompt-orkestrasi-zuno.docx`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: izin push + deploy; skill 01 di akun claude.ai perlu diunggah ulang dari .zip; Claude Doc prompt orkestrasi belum disinkronkan; artifact preview v2 belum dipublikasikan ulang; layar live masih menunjukkan Gemini (env `AI_PROVIDER` di deploy yang dilihat Zulnan masih gemini atau belum redeploy).

## 31. Hero agent + motion di Zuno Web (2026-11-03)
- Permintaan: pasang gambar robot berjas (dari Zulnan) sebagai hero di atas web, plus motion per halaman dan interaksi supaya web terlihat hidup.
- Hasil: gambar dari Zulnan tidak dipasang karena bertanda watermark kreator lain (@AI_ART_PRODUCTION) dan helmnya mirip desain karakter milik pihak lain; sebagai gantinya dibuat ilustrasi SVG orisinal dengan nuansa sama (helm hitam mengkilap, mata biru menyala, jas, dasi navy) di bagian hero paling atas (`web/src/figure.html`), dengan slot `web/assets/zuno-hero.(webp|jpg|png)` untuk gambar milik/berlisensi Zulnan. Hero baru: layar penuh, figur + judul ZUNO + tombol "Mulai di ruang kerja" + penanda gulir. Motion (`web/src/motion.js` + CSS): animasi masuk hero sekali; figur melayang, mata berkedip, garis pindai, lampu LED; saat Zuno bekerja mata dan lampu lebih cepat/terang (status dari hud.js); parallax figur dan judul mengikuti kursor; bagian muncul naik bertahap saat masuk layar; panel Proses/Hasil dan ganti tab masuk dengan transisi singkat; sorotan cahaya mengikuti kursor di kartu/panel; riak cahaya saat tombol diketuk; hover kartu dan ikon; garis progres scroll di atas; langkah selesai di Cara Kerja berdenyut sekali. Semua gerak mati bila pengguna memilih kurangi gerak. Tes: stub web, stub konten v2, stub build (dengan PRD) lolos tanpa error; dicek di 1440px, 390px, dan mode kurangi gerak (tanpa scroll samping).
- File berubah: `web/src/hero.html`, `web/src/figure.html` (baru), `web/src/motion.js` (baru), `web/src/hud.css`, `web/src/hud.js`, `web/build.mjs`, `web/assets/README.md` (baru), `web/index.html`, `web/hud.css`, `web/hud.js`, `web/motion.js` (baru), `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: izin push + deploy (bersama entri 30); gambar hero milik/berlisensi Zulnan bila ingin mengganti ilustrasi.

## 32. Hero robot dari Zulnan + UI lebih natural (2026-11-03)
- Permintaan: ilustrasi SVG tidak disukai. Pakai gambar robot baru (helm hitam, aksen ungu), diperhalus; robot jadi hero di atas, menghadap ke tulisan ZUNO STANDBY, di belakang panel KUNCI AKSES, besar. Tambah animasi dan perbaiki UI/UX supaya lebih natural.
- Hasil: gambar dirapikan dengan skrip (teks acak hasil AI di helm "CNGO", "Lrcaxx", "Sparth Cear", tulisan di modul telinga dihapus; lampu neon latar diredupkan; latar digelapkan; dibalik supaya menghadap ke kiri) jadi `web/assets/zuno-hero.webp` (51 KB). Bagian hero layar penuh dari entri 31 dan ilustrasi SVG dihapus; robot sekarang di dalam panel atas, besar di kanan, di belakang kartu STATUS, DIVISI AKTIF, dan KUNCI AKSES, menghadap inti ZUNO; tepi gambar dipudarkan ke latar. Di HP inti ZUNO dikecilkan ke kiri dan robot di kanan menghadapnya. Animasi robot: masuk dari kanan, melayang, kilau mata berdenyut/berkedip, garis pindai, aura ungu-biru, parallax kursor; saat Zuno bekerja mata, pindai, dan aura lebih cepat dan gambar lebih terang. UI: kartu kaca (blur di belakang) supaya robot terlihat di balik panel, sudut lebih bulat, sudut braket lebih halus, hover lebih lembut, fokus keyboard jelas, scroll halus, aksen ungu kedua. Semua gerak tetap mati di mode kurangi gerak. Tes: stub web, stub build (PRD) lolos tanpa error; dicek di 1440px dan 390px tanpa scroll samping.
- File berubah: `web/assets/zuno-hero.webp` (baru), `web/assets/README.md`, `web/src/hero.html`, `web/src/figure.html` (dihapus), `web/src/hud.css`, `web/src/motion.js`, `web/build.mjs`, `web/index.html`, `web/hud.css`, `web/motion.js`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: izin push + deploy (bersama entri 30 dan 31).

## 33. Push dan deploy revisi tampilan, PRD, motion, hero robot (2026-11-03)
- Permintaan: push dan deploy.
- Hasil: 3 commit (fff0e00, 93675b8, 0da93d7) di-push ke `claude/gifted-turing-csug5l`. Deploy production `dpl_6HaFH1DkYtsowqG5h5ArfGxB7Pta` READY (build 4 detik, tanpa error), alias https://zuno-studio-dusky.vercel.app. Env Vercel saat dicek: `AI_PROVIDER=gemini` dan `GEMINI_API_KEY` (diperbarui sendiri oleh Zulnan), tanpa `OPENROUTER_API_KEY`; jadi otak AI live tetap Gemini. Env tidak diubah dari sesi ini.
- File berubah: `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: Zulnan cek tampilan live (hero robot, Cara Kerja, menu PRD) di laptop dan HP; pilih tetap Gemini atau pindah OpenRouter.

## 34. Memori jangka panjang (2026-11-03)
- Permintaan: simpan jadi memori jangka panjang sebelum Zulnan pindah ke chat.
- Hasil: `docs/memori-zuno.md` (ringkasan padat: aturan kerja Zulnan, struktur Zuno, keputusan konten dan Engineering, Zuno Web live + env + tes, yang masih terbuka). `CLAUDE.md` mewajibkan membacanya di awal sesi dan memperbaruinya di akhir sesi bila ada keputusan baru.
- File berubah: `docs/memori-zuno.md` (baru), `CLAUDE.md`, `docs/riwayat-tugas.md`.
- Tertunda: lihat bagian "Yang masih terbuka" di `docs/memori-zuno.md`.

## 35. Template carousel tunggal navy-biru (2026-11-03)
- Permintaan: pakai referensi navy-biru yang Zulnan kirim sebagai satu-satunya template carousel (hanya satu hasil keluaran, isi menyesuaikan topik), foto Zulnan dari referensi dipakai di cover, lalu push agar live di Vercel. Konteks: template lama terasa terlalu rame (hanya carousel, bukan video).
- Hasil: renderer carousel di `prototypes/zuno-studio-v2.html` ditulis ulang (canvas): 5 tipe slide (cover, poin, fakta, alasan, cta), token dari referensi (Poppins + Inter, `#0B0F1A` dan biru `#3EA6FF`), batas kata dipaksa kode (`CAR_LIM`, teks dipotong dan dicatat di paket .md), foto cover dimuat dari `/assets/foto-zulnan.webp` (hanya di versi web). Pilihan template A-D dihapus dari layar dan prompt: P.1 memilih tipe slide dan mengisi kolomnya (fakta wajib bersumber, dilarang angka karangan), D.1 hanya menulis label slide. Tes stub v2 dan web lolos; tampilan dicek lewat render browser headless (versi web menampilkan foto). Sebelum perubahan: prototipe HTML ke PNG di `prototypes/carousel-template/` sebagai dasar renderer sisi server nanti.
- Catatan: foto cover diambil dari gambar referensi (sekitar 283x348 px, diperbesar), teks bawaan gambar dihapus lewat inpaint; perlu diganti foto asli resolusi tinggi. Font Manrope tidak tersedia di sesi ini, dipakai Poppins (opsi di referensi). Contoh angka "78%" di referensi tidak dipakai.
- File berubah: `prototypes/zuno-studio-v2.html`, `prototypes/arsip/zuno-carousel-opsi.html` (dipindah), `prototypes/carousel-template/` (baru), `web/index.html`, `web/assets/foto-zulnan.webp` (baru), `web/assets/README.md`, `docs/template-carousel.md` (baru), `docs/brief-gaya-konten.md`, `docs/gaya-video.md`, `docs/prompt-orkestrasi-zuno.md`, `tests/zuno-studio-v2-stub-test.js`, `tests/zuno-web-stub-test.js`, `progress.md`, `docs/memori-zuno.md`, `docs/riwayat-tugas.md`.
- Tertunda: uji dengan Claude asli di live; foto asli resolusi tinggi; `docs/prompt-orkestrasi-zuno.docx` dan Claude Doc belum disamakan dengan perubahan template; unggah ulang skill 01 ke claude.ai (entri lama).

## 36. Tipe video A, B, C dari tiga referensi (2026-11-03)
- Permintaan: video referensi 1 memakai karakter dari gambar 1 (percakapan Zulnan dan Zuno), referensi 2 memakai footage gambar 2 (Zuno dan agen divisi; tulisan "Design" benar, isi papan hanya contoh), konten dengan Zulnan di frame mengikuti referensi 3. Set semuanya.
- Hasil: tiga video dibedah (struktur, ritme, loudness) dan ditulis ke `docs/referensi-video.md` beserta pemetaan tipe A/B/C dan jawaban soal VPS (VPS = render dan orkestrasi, bukan generator footage 3D). Zuno Studio v2: pilihan "Tipe video" (A, B, C, otomatis); tipe memaksa mode (A/B Tanpa Wajah, C Mode Tampil), resep dan karakter masuk konteks semua agen dan Kartu Gaya; batas wajah tipe C dilonggarkan (maks. 12 detik berurutan, `faceMax()`), tipe lain tetap 3 detik. Tes stub v2 (default, --tampil, --tipe=A/B/C) dan web lolos.
- File berubah: `prototypes/zuno-studio-v2.html`, `web/index.html`, `assets/karakter/` (dua gambar acuan, baru), `docs/referensi-video.md` (baru), `docs/gaya-video.md`, `docs/brief-gaya-konten.md`, `docs/desain-zulnan-motion.md`, `tests/zuno-studio-v2-stub-test.js`, `progress.md`, `docs/memori-zuno.md`, `docs/riwayat-tugas.md`.
- Tertunda: belum diuji dengan Claude asli; belum ada render MP4; keputusan cara membuat footage karakter (gambar acuan dengan gerak kode atau generator video) dan VPS render; file MP4 referensi tidak disimpan di repo.

## 37. Paket serah-terima Claude Code (2026-11-03)
- Permintaan: video tipe A dan B diarahkan agar bisa diedit di Claude Code di komputer Zulnan; mulai dari cara 1 (paket folder).
- Hasil: tombol "Unduh paket Claude Code (.zip)" di hasil video Zuno Studio. ZIP dibuat di browser (penulis ZIP tanpa kompresi + CRC32, tanpa dependensi) berisi `INSTRUKSI.md`, `CLAUDE.md`, `paket.md`, `komposisi-hyperframes.html`, `kartu-gaya.json`, `naskah-adegan.json`, `rencana-efek.json` (tipe C), gambar karakter acuan (tipe A/B, versi web), folder `hasil/` dan `footage/`. Instruksi: alat render bebas (HyperFrames, Remotion, claude-video-effects, ffmpeg, skill terpasang sebagai acuan; keputusan Zulnan), Claude Code berhenti di `hasil/*.mp4`, tidak upload, tidak mengubah naskah, tidak mengarang hasil. Gambar karakter disalin ke `web/assets/karakter/` supaya terlayani di Vercel. Tes stub (default, --tampil, --tipe A/B/C, web) lolos; ZIP dicek valid (Python zipfile).
- File berubah: `prototypes/zuno-studio-v2.html`, `web/index.html`, `web/assets/karakter/` (baru), `tests/zuno-studio-v2-stub-test.js`, `docs/referensi-video.md`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: coba di Claude Code asli; format `npx hyperframes` belum teruji; cara 2 dan 3 (antrean job dan `claude -p` di laptop atau VPS) belum dibangun.

## 38. Gambar cover carousel bisa diunggah per topik (2026-11-03)
- Permintaan: slide 1 carousel belum ada foto Zulnan di hasil; buat input gambar untuk slide 1 karena beda topik beda gambar.
- Hasil: kolom unggah "Gambar cover carousel (slide 1)" di layar perintah (JPG/PNG/WebP, maks. 25 MB, diperkecil ke 1600 px) dengan pratinjau dan tombol Hapus; tombol "Ganti gambar cover (slide 1)" di hasil yang merender ulang slide 1 saja (unduhan PNG ikut gambar baru). Tata letak otomatis: potret di kanan bawah dengan tepi kiri dan atas memudar, lanskap atau persegi sebagai kartu bersudut membulat. Prioritas gambar: unggahan, lalu foto bawaan (versi web), lalu cover teks. Paket .md mencatat asal gambar cover. Tes v2 (default, --tampil, --tipe=B, --cover) dan web lolos; hasil render dicek dengan gambar potret dan lanskap.
- Sebab masalah sebelumnya: foto bawaan hanya termuat di versi web (Vercel); di artifact preview tidak ada folder assets, jadi cover tampil tanpa foto.
- File berubah: `prototypes/zuno-studio-v2.html`, `web/index.html`, `tests/zuno-studio-v2-stub-test.js`, `docs/template-carousel.md`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: coba dengan gambar sungguhan; bila hasil potong gambar kurang pas, bisa ditambah pilihan tata letak manual.

## 39. Server lokal untuk preview di laptop (2026-11-03)
- Permintaan: push, lalu bikin server lokal untuk preview di laptop Zulnan (bukan artifact).
- Hasil: push `84fdca9` (carousel gambar cover) ke `claude/gifted-turing-csug5l`, deploy production READY. Dibuat `web/dev-server.mjs` (server lokal tanpa dependensi tambahan; sajikan halaman dan aset dari allowlist, teruskan `/api/ai` dan `/api/status` ke handler Vercel yang sama, bind 127.0.0.1, baca `web/.env.local`), `web/.env.local.example`, `jalankan-lokal.bat` (Windows, klik dua kali: pasang paket, buat `.env.local`, buka browser), `.gitattributes` (bat berakhiran baris CRLF), `.env.local` masuk `.gitignore`, `web/.vercelignore`, panduan di `web/README.md`, dan `tests/zuno-web-dev-server-test.mjs` (18 pemeriksaan lolos: halaman, aset, status tanpa membocorkan kunci, 401 tanpa kunci, streaming dengan penyedia tiruan, berkas rahasia dan jalur `..` ditolak). Sandbox sesi ini tidak bisa `npm install`, jadi tes memakai SDK tiruan sementara (dihapus).
- Catatan: artifact tidak dipakai untuk preview ini; browser bawaan aplikasi juga tidak bisa membuka server yang dijalankan dari sesi cloud, jadi server dijalankan di laptop Zulnan sendiri.
- File berubah: `web/dev-server.mjs`, `web/.env.local.example`, `web/.gitignore`, `web/.vercelignore`, `web/README.md`, `jalankan-lokal.bat`, `.gitattributes`, `tests/zuno-web-dev-server-test.mjs`, `progress.md`, `docs/riwayat-tugas.md`.
- Tertunda: Zulnan mencoba di laptop (Windows); key penyedia AI diisi sendiri di `web/.env.local`.

## 40. (entri berikutnya di sini)
