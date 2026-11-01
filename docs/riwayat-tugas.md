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

## 10. (entri berikutnya di sini)
