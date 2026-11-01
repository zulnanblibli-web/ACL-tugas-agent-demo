# Progress: Zuno

Terakhir diperbarui: 2026-11-01 (Zuno Studio v2: paket naskah dan storyboard .md, input referensi, maskot di brief; semua sudah di GitHub)

## Status singkat
- Blueprint dan prompt orkestrasi: **selesai** (`docs/prompt-orkestrasi-zuno.md`, juga Word dan Claude Doc).
- Preview skema (simulasi berskrip): **selesai**, tidak memanggil AI.
- Zuno Studio v1 (tool live, tiap sub-agen memanggil Claude): **jalan, tapi terlalu rumit** menurut Zulnan. Dipakai sebagai bahan, akan diganti v2.
- Zuno Studio v2: **dibangun dan dipublikasikan sebagai preview, lolos tes stub (Claude tiruan); belum diuji dengan Claude asli.** Carousel: PNG nyata (template A-D). Video: paket naskah + storyboard + Kartu Gaya + rencana render (.md, bisa diunduh), bukan file video; pratinjau kanvas hanya kasar.
- Profil agen (23 peran, nama dan format dari katalog agency-agents-id): **selesai ditulis ulang lengkap di `agents/`, menunggu dicek Zulnan.**

## Zuno Studio v2: terhubung ke profil agen dan brief (2026-11-01)
File: `prototypes/zuno-studio-v2.html` (artifact Claude, capability `sample` dan `downloads`). Belum diuji dengan Claude asli; baru tes stub (`tests/zuno-studio-v2-stub-test.js`).
- Alur mengikuti `agents/README.md`: Orkestraror Agen, Ahli Strategi Media Sosial, Kreator Konten, Pencerita Visual, Perender (render sebelum QA), Agen 2 paralel (Penjaga Merek, Pemeriksa Realitas, Pengumpul Bukti, Pemeriksa Kepatuhan Hukum), gerbang Zulnan, lalu Kurator Instagram menyiapkan paket posting (belum memposting). Peneliti Tren dan agen standby lain belum dipanggil (tidak ada akses pencarian di artifact).
- Memori inti dari `docs/brief-gaya-konten.md` masuk ke prompt: audiens 25-35, fakta yang boleh dipakai, larangan, harga [HARGA BELUM DITENTUKAN], TOFU/MOFU/BOFU. SMK Broadcasting tidak dipakai (belum dikonfirmasi).
- Carousel: Pencerita Visual memilih satu template A Papan Tulis, B Neon Gelap, C Majalah, atau D Kartu Layar per carousel (usulan TOFU B/A, MOFU A/D, BOFU C); bisa dipaksa lewat pilihan di layar. Dirender ke PNG 1080x1350 dengan nama dan penomoran (handle belum diisi).
- Video: Kartu Gaya dengan lima preset (Dentum, Orbit Megah, Glitch Digital, Kartu Layar, Editorial Cepat); tiap adegan maksimal 2 detik; slogan lengkap disisipkan otomatis setelah hook; WebM pratinjau 540x960 tanpa suara. Mode Tampil dan alat claude-video-effects tetap di komputer Zulnan.
- Veto: Juru Kabar memberi pemberitahuan (kartu, bagian, siapa memperbaiki, putaran) sebelum status berubah; Tidak Lolos hanya setelah 2 revisi habis.
- **Paket per perintah: 1 carousel + 1 video.** Satu video = satu palet dan satu latar (bisa beda antar video).
- **Referensi video (foto/video, maks. 3) diinput langsung di tool.** Tool mengukur palet dominan dan energi gerak, mengirim cuplikan gambar ke Pencerita Visual, dan Kartu Gaya diisi dari referensi (palet, font, latar, jenis masuk teks, kamera, ekstra, energi). Tanpa referensi: preset. Mesin render video kini parametrik dan ramai (latar bergerak, teks berjalan, bentuk, partikel, kamera, irisan transisi).
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
- Video: gaya berubah per video, dipilih lewat Kartu Gaya (pemilik: Pencerita Visual). Adegan maksimal 2 detik, megah, penuh motion; Mode Tampil atau Tanpa Wajah; typography mengikuti referensi. Referensi dari Zulnan (Pinterest) dilampirkan sebagai gambar.
- Sumber gaya: Motion Prompt (MIT), claude-video-effects (MIT), HyperFrames (Apache 2.0), Remotion (lisensi khusus; cek bila Zuno dijual).
- Carousel: **campuran sesuai topik** (keputusan Zulnan). Satu carousel memakai satu dari 4 template (A Papan Tulis, B Neon Gelap, C Majalah, D Kartu Layar), dipilih Pencerita Visual. Contoh: artifact "Pilihan Template Carousel" (https://claude.ai/artifact/PHNp692VhrsaWiqzwhusP4), salinan di `prototypes/zuno-carousel-opsi.html`.
- Brief dasar lengkap (memori inti): `docs/brief-gaya-konten.md`. Isi tanda **[ISI]** di sana bersama Zulnan; jangan menebak.
- Belum diuji: semua alat render video. Status video tetap "Prompt siap generate" sampai ada file.

## Tugas berikutnya
1. **Uji v2 dengan Claude asli** di preview (https://claude.ai/artifact/8B5S1yzoCDfKY2f9P5zZ2g): jalankan satu perintah, cek kualitas naskah (hook, problem, twist, solusi, CTA), cek unggah referensi (foto, MP4, WebM), dan cek tombol unduh (`downloads.save` dengan Blob belum terverifikasi). Bila error, minta Zulnan mengirim pesan error atau log debug (tombol "Unduh log debug").
2. **Uji render nyata** paket video: jalankan komposisi HyperFrames (`npx hyperframes preview`, lalu `render`) dan satu rencana efek `claude-video-effects` (butuh rekaman asli Zulnan, ffmpeg, Python 3.12). Format keduanya diambil dari README, belum pernah dijalankan. Catat hasilnya jujur di riwayat. Bila kualitas tampilan tidak sesuai referensi, perbaiki templat HyperFrames di `buildHF` atau pindahkan render ke Claude Code.
3. **Pasang maskot** (`assets/maskot/`) di carousel Zuno Studio bila Zulnan minta; tunggu keputusan varian default (A kaos teal atau B kaos putih) dan apakah maskot dipakai di video.
4. Isi butir **[ISI]** di `docs/brief-gaya-konten.md` bagian 10 bersama Zulnan (contoh suara, handle, detail 5 web Nexamind, ukuran konten menang, tayangan minimal, harga, alat video Tanpa Wajah, izin latar SMK Broadcasting). Jangan menebak.
5. Perbarui prompt orkestrasi (`docs/prompt-orkestrasi-zuno.md`, .docx, Claude Doc): 9 tambahan agen, Juru Kabar, Kartu Gaya, metode naskah Killer Script, batas adegan 2 detik, memori inti dari brief.
6. Opsional: suara dan musik, MP4 1080x1920, Peneliti Tren dengan akses pencarian, agen standby lain (Pelacak Eksperimen, Penyintesis Umpan Balik, Operasional Studio), lalu pindah ke web app (Vercel/Supabase): ganti `sample` dengan API backend; Bagian RENDER dan UI di `zuno-studio-v2.html` tetap.

## Video: paket + rencana render, bukan render di tool (2026-11-01)
Keputusan Zulnan: Zuno Studio menghasilkan **paket .md** (naskah hook-problem-twist-solusi-cta, storyboard per adegan maks. 2 detik, Kartu Gaya dari referensi, rencana efek `claude-video-effects` untuk Mode Tampil, komposisi HTML HyperFrames untuk Tanpa Wajah) yang bisa diunduh dan dipratinjau; video dirender di komputer Zulnan atau lewat Claude Code. Kanvas hanya pratinjau kasar (opsional). Wajah maks. 2-3 detik lalu motion; latar selalu bergerak. Naskah memakai metode Killer Script plus uji retensi. Carousel tidak diubah. Format rencana efek dan HTML HyperFrames diambil dari README kedua repo; **belum diuji dijalankan**.

## Maskot (2026-11-01)
Dua gambar maskot voxel disimpan di `assets/maskot/` dan dicatat di `docs/brief-gaya-konten.md` (bagian 6, "Maskot di carousel"). Zuno Studio v2 **belum** memakai maskot; carousel di preview tetap sama sampai Zulnan minta. Varian default dan pemakaian di video menunggu keputusan Zulnan.

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
- Zuno Studio v2 (preview, hanya terlihat pemilik): https://claude.ai/artifact/8B5S1yzoCDfKY2f9P5zZ2g
- Skema Simulasi Zuno (preview): https://claude.ai/artifact/Te8QVoUJPGZp6bZSiiE12p
- Zuno Studio v1 (tool live): https://claude.ai/artifact/P59ifFpbatkQKxDEn6Z5tc
- Prompt Orkestrasi Zuno (Claude Doc): https://claude.ai/artifact/5B8WKpCnj4t79CwtAWAPM7

## Cara menjalankan tes v1
`NODE_PATH=$(npm root -g) node tests/zuno-studio-v1-stub-test.js` dari akar repo (butuh Playwright). Tes memakai Claude tiruan, jadi tidak memakai kuota.

Tes v2 (Claude tiruan): `NODE_PATH=$(npm root -g) node tests/zuno-studio-v2-stub-test.js [--tampil] [file-referensi...]`. Argumen `--tampil` mengetes Mode Tampil; file referensi (foto/video) diunggah ke tool.
