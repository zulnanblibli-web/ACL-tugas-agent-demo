# Progress: Zuno

Terakhir diperbarui: 2026-11-01

## Status singkat
- Blueprint dan prompt orkestrasi: **selesai** (`docs/prompt-orkestrasi-zuno.md`, juga Word dan Claude Doc).
- Preview skema (simulasi berskrip): **selesai**, tidak memanggil AI.
- Zuno Studio v1 (tool live, tiap sub-agen memanggil Claude): **jalan, tapi terlalu rumit** menurut Zulnan. Dipakai sebagai bahan, akan diganti v2.
- Zuno Studio v2 (sederhana, output nyata): **belum dikerjakan. Ini tugas berikutnya.**

## Tugas berikutnya: Zuno Studio v2
Permintaan Zulnan (inti):
1. Ketik perintah, lalu agen dan sub-agen berkoordinasi. Tampilkan **proses garis besar saja** per agen dengan tanda/status (menunggu, bekerja, selesai). **Jangan** tampilkan output tiap sub-agen.
2. **Jangan menyatakan tugas "Tidak Lolos" tanpa memberi tahu dulu.** Bila Agen 2 menolak, tampilkan pemberitahuan jelas (kartu mana, bagian mana, akan direvisi) sebelum status berubah.
3. Hasil akhir **nyata**: carousel dan video, bukan laporan.
4. Akan dijadikan web app, jadi arsitektur harus bisa dipindah ke app sungguhan.

Pertanyaan yang perlu diputuskan sebelum membangun (tanyakan ke Zulnan, jangan menebak):
- Bentuk "carousel nyata": slide yang bisa dilihat dan diunduh (PNG/PDF) dari HTML/SVG? Atau gambar AI?
- Bentuk "video nyata": video motion grafis dari teks animasi (dirender di browser atau server, mis. MP4/WebM), atau generator video AI (mis. lewat connector Higgsfield)?
- Berjalan di mana: tetap artifact Claude (`sample`), atau web app dengan backend dan API key sendiri (Vercel/Supabase seperti proyek lain)?
- Kesepakatan: proses tak terlihat tapi apakah log detail tetap perlu disimpan untuk debugging?

Usulan desain v2 (belum disetujui):
- Satu layar: kotak perintah, jalur proses 4 baris (Lead, Agen 1, Agen 2, Agen 3), tiap baris punya status dan satu kalimat aktivitas ("Kreator menulis slide"). Output sub-agen disimpan di memori halaman, tidak ditampilkan.
- Notifikasi veto: banner "Agen 2 menemukan masalah di KK-001 (bagian teks). Menunggu revisi" sebelum kartu ditandai gagal; kartu baru ditandai Tidak Lolos setelah revisi habis dan Zulnan diberi tahu.
- Hasil: tab "Carousel" (slide dirender) dan "Video" (preview + unduh), plus caption.
- Reuse dari v1: `ROLES`, `BASE`, `P()` (rakitan prompt per sub-agen), limiter, `qaLoop`/`revise`, panel gerbang persetujuan, tes stub Playwright.

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
