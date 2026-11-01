# Progress: Zuno

Terakhir diperbarui: 2026-11-01 (brief gaya konten lengkap; siap lanjut di Claude Code)

## Status singkat
- Blueprint dan prompt orkestrasi: **selesai** (`docs/prompt-orkestrasi-zuno.md`, juga Word dan Claude Doc).
- Preview skema (simulasi berskrip): **selesai**, tidak memanggil AI.
- Zuno Studio v1 (tool live, tiap sub-agen memanggil Claude): **jalan, tapi terlalu rumit** menurut Zulnan. Dipakai sebagai bahan, akan diganti v2.
- Zuno Studio v2 (sederhana, output nyata): **sudah dibangun, lolos tes stub; belum diuji dengan Claude asli.**
- Profil agen (23 peran, nama dan format dari katalog agency-agents-id): **selesai ditulis ulang lengkap di `agents/`, menunggu dicek Zulnan.**

## Zuno Studio v2: terhubung ke profil agen dan brief (2026-11-01)
File: `prototypes/zuno-studio-v2.html` (artifact Claude, capability `sample` dan `downloads`). Belum diuji dengan Claude asli; baru tes stub (`tests/zuno-studio-v2-stub-test.js`).
- Alur mengikuti `agents/README.md`: Orkestraror Agen, Ahli Strategi Media Sosial, Kreator Konten, Pencerita Visual, Perender (render sebelum QA), Agen 2 paralel (Penjaga Merek, Pemeriksa Realitas, Pengumpul Bukti, Pemeriksa Kepatuhan Hukum), gerbang Zulnan, lalu Kurator Instagram menyiapkan paket posting (belum memposting). Peneliti Tren dan agen standby lain belum dipanggil (tidak ada akses pencarian di artifact).
- Memori inti dari `docs/brief-gaya-konten.md` masuk ke prompt: audiens 25-35, fakta yang boleh dipakai, larangan, harga [HARGA BELUM DITENTUKAN], TOFU/MOFU/BOFU. SMK Broadcasting tidak dipakai (belum dikonfirmasi).
- Carousel: Pencerita Visual memilih satu template A Papan Tulis, B Neon Gelap, C Majalah, atau D Kartu Layar per carousel (usulan TOFU B/A, MOFU A/D, BOFU C); bisa dipaksa lewat pilihan di layar. Dirender ke PNG 1080x1350 dengan nama dan penomoran (handle belum diisi).
- Video: Kartu Gaya dengan lima preset (Dentum, Orbit Megah, Glitch Digital, Kartu Layar, Editorial Cepat); tiap adegan maksimal 1,5 detik; slogan lengkap disisipkan otomatis setelah hook; WebM pratinjau 540x960 tanpa suara. Mode Tampil dan alat claude-video-effects tetap di komputer Zulnan.
- Veto: Juru Kabar memberi pemberitahuan (kartu, bagian, siapa memperbaiki, putaran) sebelum status berubah; Tidak Lolos hanya setelah 2 revisi habis.
- Draf diberi tanda "suara perlu dicek" dan "handle belum diisi" sampai butir [ISI] brief terisi.
- `docs/desain-zulnan-motion.md` (brief motion Zulnan: Teal Tech, avatar voxel, MP4 VO ElevenLabs) disimpan sebagai referensi. Pada hal yang bertentangan, `docs/brief-gaya-konten.md` yang berlaku (gaya video berubah per video, bukan satu palet tetap).

## Profil agen: sudah ditulis (2026-11-01)
Folder `agents/` (baca `agents/README.md` dulu; `agents/semua-agen.md` adalah versi gabungan).
- 23 profil, nomor file = urutan alur kerja. Format mengikuti contoh katalog: Definisi Peran, Kemampuan Inti, Keahlian Khusus, Integrasi Alur Kerja, Kerangka Pengambilan Keputusan, Metrik Keberhasilan, Contoh Kasus Penggunaan, kerangka khusus peran, Gaya Komunikasi, Pembelajaran & Memori; ditambah bagian Zuno (Status, Tugas di Zuno, Dilarang, Masukan, Keluaran). Frontmatter: name, description, tools, color, emoji, vibe, kode, tim, urutan, status, acuan.
- Metrik = metrik proses; tidak ada angka target karangan. Ambang performa menunggu Zulnan.
- Semua agen ada; yang tidak ikut alur harian berstatus **standby** (siaga, jalan saat ditugaskan lewat Kartu Konten). Aturan fase, veto Agen 2, 2 putaran revisi, dan persetujuan Zulnan tetap berlaku.
- Tambahan baru: Juru Kabar (kabar sebelum Tidak Lolos), Insinyur Prompt Gambar, Pelatih Editing Video Pendek, Perender (file jadi), Narator & Subtitle, Spesialis Optimasi Video, Arsitek Tata Kelola Otomasi, Pelacak Eksperimen, Penyintesis Umpan Balik.
- Katalog tidak punya agen yang benar-benar merender gambar atau video; Perender dan Narator & Subtitle dibuat sendiri.

## Gaya visual (2026-11-01)
Baca `docs/gaya-video.md`. Ringkas:
- Video: gaya berubah per video, dipilih lewat Kartu Gaya (pemilik: Pencerita Visual). Adegan maksimal 1,5 detik, megah, penuh motion; Mode Tampil atau Tanpa Wajah; typography mengikuti referensi. Referensi dari Zulnan (Pinterest) dilampirkan sebagai gambar.
- Sumber gaya: Motion Prompt (MIT), claude-video-effects (MIT), HyperFrames (Apache 2.0), Remotion (lisensi khusus; cek bila Zuno dijual).
- Carousel: **campuran sesuai topik** (keputusan Zulnan). Satu carousel memakai satu dari 4 template (A Papan Tulis, B Neon Gelap, C Majalah, D Kartu Layar), dipilih Pencerita Visual. Contoh: artifact "Pilihan Template Carousel" (https://claude.ai/artifact/PHNp692VhrsaWiqzwhusP4), salinan di `prototypes/zuno-carousel-opsi.html`.
- Brief dasar lengkap (memori inti): `docs/brief-gaya-konten.md`. Isi tanda **[ISI]** di sana bersama Zulnan; jangan menebak.
- Belum diuji: semua alat render video. Status video tetap "Prompt siap generate" sampai ada file.

## Tugas berikutnya
00. **Lanjut di Claude Code (urutan):**
   a. Zulnan mengirim satu rekaman asli (video vertikal) dan memilih satu preset di `docs/gaya-video.md`. Uji claude-video-effects di komputernya (butuh ffmpeg dan Python 3.12): clone ke `~/.claude/skills/effects`, tulis `<video>_effects.json`, cek frame, render. Catat hasilnya jujur (berhasil atau gagal) di riwayat. Batas: tiap adegan maksimal 1,5 detik; wajah tidak tertutup.
   b. Bersama Zulnan isi butir **[ISI]** di `docs/brief-gaya-konten.md` bagian 10 (contoh suara, handle, detail 5 web Nexamind, ukuran konten menang, tayangan minimal, harga, alat video Tanpa Wajah, izin latar SMK Broadcasting).
   c. Pilih alat video Tanpa Wajah (HyperFrames atau Remotion; cek lisensi Remotion bila Zuno dijual).
   d. Render satu carousel contoh (HTML/canvas ke PNG) memakai template pilihan sesuai topik.
   e. Perbarui prompt orkestrasi (md, docx, Claude Doc): 9 tambahan, Juru Kabar, Kartu Gaya, memori inti dari brief.
   f. ~~Hubungkan profil, brief, dan Kartu Gaya ke Zuno Studio v2~~ (selesai 2026-11-01). Sisa: uji v2 dengan Claude asli dan unduhan `downloads.save`.
0. Zulnan mengecek `agents/`; setelah setuju, perbarui `docs/prompt-orkestrasi-zuno.md` (dan .docx, Claude Doc) dengan 9 tambahan dan Juru Kabar, lalu hubungkan profil ke Zuno Studio v2.
1. Publikasikan v2 sebagai artifact (declare capability `sample` dan `downloads`) dan uji dengan Claude asli (belum diuji; hanya tes stub).
2. Uji unduhan `downloads.save` dengan Blob di claude.ai (format data belum terverifikasi).
3. Opsional: ekspor PDF carousel, MP4, musik/suara, Mode Tampil, 1.1 riset tren, 3.x agen penerbit.
4. Pindah ke web app (Vercel/Supabase): ganti `sample` dengan API backend.

## Keputusan yang sudah diambil
- Nama agen: Zuno. Target awal: Zulnan sendiri, lalu content creator pemula 25-35 tahun.
- Platform: Instagram, TikTok, Threads. Target harian: 2 carousel + 1 video motion grafis (Mode Tampil / Tanpa Wajah).
- Fase 1 default: Agen 3 hanya menyiapkan paket, belum eksekusi.
- Tugas paralel: A antar konten; B (1.1 dengan 3.2); C (2.1-2.4); D (3.1 dengan 3.3). Tetap berurutan: rantai status, persetujuan Zulnan, alur iklan, putaran revisi.
- Urutan konflik: brand/safety, lalu data performa, lalu ide kreatif.

## Belum nyata / belum selesai
- Posting otomatis, Meta Ads, data performa asli, generator gambar/video asli: belum ada.
- Tiga celah blueprint: validasi pengguna, ketersediaan nama/domain/akun Zuno, akses platform dan iklan.
- Belum ditetapkan: ukuran "konten menang" dan tayangan minimal, panjang video, jumlah slide, harga.
- Dokumen 1 (125 pertanyaan) masih punya bagian "Langkah berikutnya" yang usang dan belum memuat jawaban Word. Perbarui hanya bila diminta.

## Artifact dan dokumen (claude.ai)
- Skema Simulasi Zuno (preview): https://claude.ai/artifact/Te8QVoUJPGZp6bZSiiE12p
- Zuno Studio v1 (tool live): https://claude.ai/artifact/P59ifFpbatkQKxDEn6Z5tc
- Prompt Orkestrasi Zuno (Claude Doc): https://claude.ai/artifact/5B8WKpCnj4t79CwtAWAPM7

## Cara menjalankan tes v1
`NODE_PATH=$(npm root -g) node tests/zuno-studio-v1-stub-test.js` dari akar repo (butuh Playwright). Tes memakai Claude tiruan, jadi tidak memakai kuota.

Tes v2: `NODE_PATH=$(npm root -g) node tests/zuno-studio-v2-stub-test.js`
