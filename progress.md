# Progress: Zuno

Terakhir diperbarui: 2026-11-01

## Status singkat
- Blueprint dan prompt orkestrasi: **selesai** (`docs/prompt-orkestrasi-zuno.md`, juga Word dan Claude Doc).
- Preview skema (simulasi berskrip): **selesai**, tidak memanggil AI.
- Zuno Studio v1 (tool live, tiap sub-agen memanggil Claude): **jalan, tapi terlalu rumit** menurut Zulnan. Dipakai sebagai bahan, akan diganti v2.
- Zuno Studio v2 (sederhana, output nyata): **sudah dibangun, lolos tes stub; belum diuji dengan Claude asli.**

## Zuno Studio v2: sudah dibangun (2026-11-01)
File: `prototypes/zuno-studio-v2.html` (artifact Claude, butuh capability `sample` dan `downloads`).
- Proses garis besar: 4 baris (Lead, Agen 1, Agen 2, Agen 3) dengan status dan satu kalimat aktivitas. Output sub-agen tidak ditampilkan; disimpan di log tersembunyi (tombol "Unduh log debug").
- Veto: pemberitahuan muncul dulu (kartu, bagian, putaran revisi), jeda, baru revisi. "Tidak Lolos" hanya setelah 2 revisi habis dan setelah pemberitahuan.
- Hasil nyata: carousel (canvas, PNG per slide) dan video motion grafis teks (canvas + MediaRecorder, WebM, tanpa suara), plus caption. Status Disetujui hanya dari tombol Setujui milik Zulnan; ada "Revisi ulang" dengan catatan.
- Slogan pasca-hook dipaksa di kode untuk video bila model lupa.
- Struktur kode: CORE (agen, tanpa DOM), RENDER, UI, agar mudah dipindah ke web app.
Keputusan Zulnan: carousel HTML/canvas ke PNG; video animasi teks di browser; jalan sebagai artifact dulu; log tersembunyi disimpan.

## Tugas berikutnya
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
