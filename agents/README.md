# Profil Agen Zuno

Struktur dirampingkan 2026-11-02 atas permintaan Zulnan: dari 23 profil menjadi **14 agen dalam Lead + 6 divisi**. Profil diambil dari 23 profil lama (nama dan isi tetap); tugas profil yang mirip digabung ke satu agen supaya serah-terima lebih sedikit, tanpa membuat satu agen terlalu berat. Profil lama tersimpan utuh di `agents/arsip-23-agen/`. Nama jabatan mengikuti katalog [agency-agents-id](https://github.com/jnMetaCode/agency-agents-id) (MIT).

Tujuan tetap: Zulnan bisa ngonten pakai AI agent, dari ide sampai paket siap tayang, dengan keputusan akhir di tangan Zulnan.

## Lead dan divisi

| Divisi | Fungsi | Agen (kode) | Gabungan dari profil lama |
|---|---|---|---|
| **Lead** | Memimpin, merencanakan, melapor ke Zulnan sebelum terbit | Orkestraror Agen (L.0), Juru Kabar (L.1) | + Arsitek Tata Kelola Otomasi |
| **1. Riset** | Sumber, tren, umpan balik, arah konten | Peneliti Tren (R.1), Ahli Strategi Media Sosial (R.2) | + Penyintesis Umpan Balik |
| **2. Produksi** | Naskah, caption, uji retensi | Kreator Konten (P.1), Spesialis Optimasi Video (P.2) | + Penulis Produk & Portofolio |
| **3. Desain** | Template carousel, maskot, Kartu Gaya video, prompt gambar | Pencerita Visual (D.1) | + Insinyur Prompt Gambar |
| **4. Editing** | Rencana edit video, VO, subtitle, file jadi | Pelatih Editing Video Pendek (E.1), Perender (E.2) | + Narator & Subtitle |
| **5. Mutu** (tambahan) | Catatan Mutu, tanpa veto | Penjaga Merek (Q.1), Pengumpul Bukti (Q.2) | + Pemeriksa Realitas, + Pemeriksa Kepatuhan Hukum |
| **6. Marketing** | Paket posting, leads dan arsip, performa, iklan | Kurator Instagram (M.1), Pelapor Analitik (M.2), Strategis Iklan Sosial Berbayar (M.3) | + Operasional Studio, + Pelacak Eksperimen |

Divisi Mutu tetap ada sebagai divisi kecil karena pemeriksaan fakta, klaim, dan kepatuhan tetap perlu. Sifatnya penasihat: tidak menolak, tidak menahan, tidak ada revisi otomatis.

## Alur kerja (urutan file = urutan kerja)

```
Zulnan memberi perintah (+ sumber berita/artikel/viral, + referensi gaya bila ada)
   v
LEAD      [01 Orkestraror Agen] rencana + Kartu Konten        [02 Juru Kabar] status sepanjang proses
   v
RISET     [03 Peneliti Tren] sumber + sudut  ==paralel==  [13 Pelapor Analitik] pelajaran performa lama
          [04 Ahli Strategi Media Sosial] ide, funnel, platform, angle, hook
   v
PRODUKSI  [05 Kreator Konten] naskah Killer Script, caption, Daftar Fakta & Klaim
          [06 Spesialis Optimasi Video] uji retensi, tulis ulang kalimat lemah (satu kali)
   v
DESAIN    [07 Pencerita Visual] template carousel + maskot / Kartu Gaya video
   v
EDITING   [08 Pelatih Editing Video Pendek] storyboard, efek, VO, subtitle (video)
          [09 Perender] PNG carousel / paket render video
   v
MUTU      [10 Penjaga Merek] ==paralel== [11 Pengumpul Bukti]   Catatan Mutu, tanpa veto, satu putaran
   v
LEAD      [01 + 02] Ringkasan Sebelum Terbit: kualitas, kesesuaian dengan keinginan Zulnan, catatan penting
   v
GERBANG   Zulnan: Setujui / revisi bagian tertentu (status Disetujui hanya dari Zulnan)
   v
MARKETING [12 Kurator Instagram] paket posting + leads/arsip (Fase 1: belum memposting)
          [13 Pelapor Analitik] baca performa setelah tayang -> pelajaran ke Riset
          [14 Strategis Iklan Sosial Berbayar] Fase 4 saja (standby)
```

Tugas paralel: antar kartu; Peneliti Tren dengan Pelapor Analitik; Penjaga Merek dengan Pengumpul Bukti.

## Aturan tim

- Otoritas konten ada di Zulnan; status Disetujui hanya dari Zulnan. Satu pemilik per output.
- Divisi Mutu hanya memberi Catatan Mutu (Aman, Saran, Perlu keputusan Zulnan, Risiko nyata). Lead merangkumnya dan memberi tahu Zulnan sebelum konten terbit. Revisi hanya atas permintaan Zulnan.
- Memori tentang Zulnan dipakai untuk suara dan gaya, bukan bahan konten. Bahan utama dari sumber luar yang diolah jadi karya sendiri dan disebut sumbernya.
- Fase 1 (default): tidak memposting, tidak menjalankan iklan. Strategis Iklan Sosial Berbayar standby sampai Fase 4.
- Tidak ada angka, testimoni, sumber, atau pengalaman Zulnan yang dikarang. Harga: [HARGA BELUM DITENTUKAN].

## Daftar

| # | Nama | Kode | Divisi | Status | Tanggung jawab |
|---|---|---|---|---|---|
| 1 | [Orkestraror Agen](01-orkestraror-agen.md) | L.0 | Lead | aktif harian | Memimpin tim, Kartu Konten, tata kelola otomasi, Ringkasan Sebelum Terbit bersama Juru Kabar |
| 2 | [Juru Kabar](02-juru-kabar.md) | L.1 | Lead | aktif harian | Status per divisi dan Ringkasan Sebelum Terbit untuk Zulnan |
| 3 | [Peneliti Tren](03-peneliti-tren.md) | R.1 | Riset | aktif harian | Berita, artikel, konten viral, umpan balik audiens jadi bahan dan sudut konten |
| 4 | [Ahli Strategi Media Sosial](04-ahli-strategi-media-sosial.md) | R.2 | Riset | aktif harian | Ide, funnel, platform, angle, hook per kartu |
| 5 | [Kreator Konten](05-kreator-konten.md) | P.1 | Produksi | aktif harian | Naskah Killer Script, teks carousel, caption, Daftar Fakta & Klaim, halaman produk bila ditugaskan |
| 6 | [Spesialis Optimasi Video](06-spesialis-optimasi-video.md) | P.2 | Produksi | aktif harian | Uji retensi dan tulis ulang kalimat lemah sebelum desain |
| 7 | [Pencerita Visual](07-pencerita-visual.md) | D.1 | Desain | aktif harian | Template carousel, maskot, Kartu Gaya video, prompt gambar |
| 8 | [Pelatih Editing Video Pendek](08-pelatih-editing-video-pendek.md) | E.1 | Editing | aktif harian (video) | Storyboard, efek, VO, subtitle, ekspor |
| 9 | [Perender](09-perender.md) | E.2 | Editing | aktif harian | PNG carousel dan paket render video |
| 10 | [Penjaga Merek](10-penjaga-merek.md) | Q.1 | Mutu | aktif harian | Catatan suara, merek, fakta, klaim, sumber |
| 11 | [Pengumpul Bukti](11-pengumpul-bukti.md) | Q.2 | Mutu | aktif harian | Catatan format file, platform, privasi, izin |
| 12 | [Kurator Instagram](12-kurator-instagram.md) | M.1 | Marketing | setelah Disetujui | Paket posting per platform, leads, arsip, papan kerja |
| 13 | [Pelapor Analitik](13-pelapor-analitik.md) | M.2 | Marketing | aktif harian (Fase 1: rencana ukur) | Performa, label Menang/Kalah, uji hook, pelajaran ke Riset |
| 14 | [Strategis Iklan Sosial Berbayar](14-strategis-iklan-sosial-berbayar.md) | M.3 | Marketing | standby (Fase 4) | Draf iklan Meta dari konten Menang, dalam batas anggaran Zulnan |

Versi gabungan semua profil: `agents/semua-agen.md`.
