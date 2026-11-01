# Profil Agen Zuno

Tim: **Lead (Orkestraror Agen) + Juru Kabar + 21 sub-agen dalam 3 tim (Kreator, Penjaga Mutu, Operator) = 23 profil**. Zuno adalah nama tim. Nama jabatan mengikuti katalog [agency-agents-id](https://github.com/jnMetaCode/agency-agents-id) (MIT); yang bertanda "baru" atau "nama sendiri" dibuat khusus untuk Zuno.

## Tiga tim

| Tim | Fungsi | Anggota |
|---|---|---|
| **Kreator Zuno** (Agen 1) | Membuat konten sampai file jadi | Peneliti Tren, Ahli Strategi Media Sosial, Penulis Produk & Portofolio, Kreator Konten, Pencerita Visual, Insinyur Prompt Gambar, Pelatih Editing Video Pendek, Narator & Subtitle, Perender, Spesialis Optimasi Video |
| **Penjaga Mutu Zuno** (Agen 2) | Memeriksa mutu dan memegang veto | Penjaga Merek, Pemeriksa Realitas, Pengumpul Bukti, Pemeriksa Kepatuhan Hukum |
| **Operator Zuno** (Agen 3) | Menjalankan operasional setelah Zulnan setuju | Kurator Instagram, Pelapor Analitik, Operasional Studio, Strategis Iklan Sosial Berbayar, Arsitek Tata Kelola Otomasi, Pelacak Eksperimen, Penyintesis Umpan Balik |

Lead: Orkestraror Agen dan Juru Kabar.

## Alur kerja (urutan file = urutan kerja)

```
Zulnan memberi perintah
   v
[01 Orkestraror Agen]   rencana + Kartu Konten        [02 Juru Kabar] menyala sepanjang proses
   v
[03 Peneliti Tren] ===paralel=== [04 Pelapor Analitik]     (05 Penyintesis Umpan Balik: standby)
   v
[06 Ahli Strategi Media Sosial]                            (07 Pelacak Eksperimen: standby)
   v                                    \
[09 Kreator Konten]         [08 Penulis Produk & Portofolio] (standby; bila menyangkut produk)
   v
[10 Pencerita Visual]  pemilik paket visual
   |--> [11 Insinyur Prompt Gambar]   (carousel)
   |--> [12 Pelatih Editing Video Pendek]   (video)
   |--> [13 Narator & Subtitle]   (video; standby)
   v
[14 Perender]  file jadi: slide PNG / video       (standby sampai bentuk render ditetapkan)
   v
[15 Spesialis Optimasi Video]  saran hook, retensi, cover (standby; tanpa veto)
   v
Agen 2 paralel: [16 Penjaga Merek] [17 Pemeriksa Realitas] [18 Pengumpul Bukti] [19 Pemeriksa Kepatuhan Hukum]
   |  satu Tidak Lolos -> Juru Kabar memberi tahu Zulnan DULU -> kembali ke pemilik tugas (maks. 2 revisi)
   v
GERBANG: Zulnan menyetujui (status Disetujui hanya dari Zulnan)
   v
Agen 3 paralel: [20 Kurator Instagram] [21 Operasional Studio]
   (22 Arsitek Tata Kelola Otomasi: audit sebelum auto-posting atau iklan nyala; standby)
   v
Setelah tayang: [04 Pelapor Analitik] -> (07 Pelacak Eksperimen) -> (05 Penyintesis Umpan Balik) -> kembali ke 03 dan 06
   v
Fase 4: (23 Strategis Iklan Sosial Berbayar; standby; butuh label Menang + persetujuan Agen 2 dan Zulnan + batas anggaran)
```

Catatan nomor: kode (1.1, 3.2, dan seterusnya) mengikuti prompt orkestrasi. Kode baru: L.1 Juru Kabar; 1.6 sampai 1.10 tambahan di tim Kreator; 3.5 sampai 3.7 tambahan di tim Operator. Nomor file mengikuti urutan kerja, bukan nomor kode.

## Aturan standby

Semua 23 agen ada dan siaga. **Aktif harian** berarti ikut setiap kartu. **Standby** berarti tidak berbuat apa pun sampai Orkestraror Agen menugaskan lewat Kartu Konten, lalu langsung berjalan. Standby tidak melonggarkan aturan: Fase 1 tetap tidak memposting dan tidak menjalankan iklan; Agen 2 tetap memegang veto; maksimal 2 putaran revisi; status Disetujui hanya dari Zulnan.

## Daftar

| # | Nama | Kode | Tim | Status | Tanggung jawab |
|---|---|---|---|---|---|
| 1 | [Orkestraror Agen](01-orkestraror-agen.md) | Lead | Lead · Koordinator | aktif harian | Koordinator tim Zuno: menerima perintah Zulnan, merencanakan, membuat Kartu Konten, dan menunjuk siapa yang jalan. |
| 2 | [Juru Kabar](02-juru-kabar.md) | L.1 | Lead · Koordinator | aktif harian | Mengubah aktivitas tiap agen menjadi satu baris status dan memberi kabar sebelum tugas ditandai Tidak Lolos. |
| 3 | [Peneliti Tren](03-peneliti-tren.md) | 1.1 | Agen 1 · Kreator Zuno | aktif harian | Mencari tren dan topik yang relevan dengan niche produk digital dan AI untuk audiens pemula. |
| 4 | [Pelapor Analitik](04-pelapor-analitik.md) | 3.2 | Agen 3 · Operator Zuno | aktif harian | Membaca performa konten dan melabeli Menang, Kalah, atau Data belum cukup; di Fase 1 menyusun rencana ukur. |
| 5 | [Penyintesis Umpan Balik](05-penyintesis-umpan-balik.md) | 3.7 | Agen 3 · Operator Zuno | standby | Mengubah komentar, pertanyaan audiens, dan umpan balik leads menjadi ide dan prioritas konten. |
| 6 | [Ahli Strategi Media Sosial](06-ahli-strategi-media-sosial.md) | 1.2 | Agen 1 · Kreator Zuno | aktif harian | Memilih ide, angle, tahap funnel, platform, dan hook untuk setiap Kartu Konten. |
| 7 | [Pelacak Eksperimen](07-pelacak-eksperimen.md) | 3.6 | Agen 3 · Operator Zuno | standby | Merancang dan mencatat A/B test (misalnya hook) dan menentukan kapan hasilnya cukup untuk disimpulkan. |
| 8 | [Penulis Produk & Portofolio](08-penulis-produk-portofolio.md) | 1.4 | Agen 1 · Kreator Zuno | standby | Menulis halaman jual produk digital dan studi kasus portofolio (5 web Nexamind) dari data nyata. |
| 9 | [Kreator Konten](09-kreator-konten.md) | 1.3 | Agen 1 · Kreator Zuno | aktif harian | Menulis teks slide carousel, naskah video, caption, dan hashtag dengan gaya Zulnan. |
| 10 | [Pencerita Visual](10-pencerita-visual.md) | 1.5 | Agen 1 · Kreator Zuno | aktif harian | Pemilik paket visual: merancang tata letak slide dan storyboard video dari teks Kreator Konten. |
| 11 | [Insinyur Prompt Gambar](11-insinyur-prompt-gambar.md) | 1.6 | Agen 1 · Kreator Zuno | aktif harian | Menulis prompt gambar siap generate per slide dan adegan beserta spesifikasinya. |
| 12 | [Pelatih Editing Video Pendek](12-pelatih-editing-video-pendek.md) | 1.7 | Agen 1 · Kreator Zuno | aktif harian | Menyusun arahan edit pasca-produksi: potongan, ritme, subtitle, motion grafis, dan ekspor per platform. |
| 13 | [Narator & Subtitle](13-narator-subtitle.md) | 1.8 | Agen 1 · Kreator Zuno | standby | Menyiapkan voice-over dari naskah dan subtitle dengan waktu yang pas. |
| 14 | [Perender](14-perender.md) | 1.9 | Agen 1 · Kreator Zuno | standby | Mengubah rancangan menjadi file nyata: slide carousel (PNG) dan video motion grafis. |
| 15 | [Spesialis Optimasi Video](15-spesialis-optimasi-video.md) | 1.10 | Agen 1 · Kreator Zuno | standby | Memberi saran hook, retensi, pembabakan, dan cover sebelum video masuk QA. |
| 16 | [Penjaga Merek](16-penjaga-merek.md) | 2.1 | Agen 2 · Penjaga Mutu Zuno | aktif harian | Memeriksa suara, gaya, slogan, kata terlarang, dan konsistensi brand setiap konten. |
| 17 | [Pemeriksa Realitas](17-pemeriksa-realitas.md) | 2.2 | Agen 2 · Penjaga Mutu Zuno | aktif harian | Memeriksa setiap fakta, angka, dan klaim, termasuk teks yang tampil di gambar dan video. |
| 18 | [Pengumpul Bukti](18-pengumpul-bukti.md) | 2.3 | Agen 2 · Penjaga Mutu Zuno | aktif harian | Memeriksa format, aturan platform, keterbacaan, dan file hasil render. |
| 19 | [Pemeriksa Kepatuhan Hukum](19-pemeriksa-kepatuhan-hukum.md) | 2.4 | Agen 2 · Penjaga Mutu Zuno | aktif harian | Memeriksa leads, privasi, dan izin testimoni atau studi kasus. |
| 20 | [Kurator Instagram](20-kurator-instagram.md) | 3.1 | Agen 3 · Operator Zuno | aktif harian | Menyusun paket posting per platform untuk konten yang sudah Disetujui Zulnan. |
| 21 | [Operasional Studio](21-operasional-studio.md) | 3.3 | Agen 3 · Operator Zuno | aktif harian | Mencatat leads dan arsip, serta memperbarui Papan Kerja Mingguan. |
| 22 | [Arsitek Tata Kelola Otomasi](22-arsitek-tata-kelola-otomasi.md) | 3.5 | Agen 3 · Operator Zuno | standby | Mengaudit nilai, risiko, dan kemudahan pemeliharaan sebelum otomasi posting atau iklan dinyalakan. |
| 23 | [Strategis Iklan Sosial Berbayar](23-strategis-iklan-sosial-berbayar.md) | 3.4 | Agen 3 · Operator Zuno | standby | Menyiapkan dan menjalankan iklan Meta Ads; baru aktif di Fase 4 setelah persetujuan Zulnan. |

## Catatan untuk perbaikan berikutnya

- Prompt orkestrasi (`docs/prompt-orkestrasi-zuno.md`) masih menyebut 13 sub-agen; tambahan 1.6 sampai 1.10, 3.5 sampai 3.7, dan Juru Kabar belum dimasukkan. Perbarui setelah profil ini disetujui.
- Profil ini belum dipakai di Zuno Studio v2; di sana tiap peran masih berupa potongan prompt di kode.
- Format tiap profil mengikuti contoh katalog (Definisi Peran, Kemampuan Inti, Keahlian Khusus, Integrasi Alur Kerja, Kerangka Pengambilan Keputusan, Metrik Keberhasilan, Contoh Kasus Penggunaan, kerangka khusus peran, Gaya Komunikasi, Pembelajaran & Memori) ditambah bagian khusus Zuno (Status, Tugas di Zuno, Dilarang, Masukan, Keluaran).
- Metrik sengaja bukan angka tolok ukur katalog. Angka target performa menunggu ditetapkan Zulnan (ukuran konten menang dan tayangan minimal belum ada).
