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

## 20. (entri berikutnya di sini)
