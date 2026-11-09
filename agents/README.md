# Profil Agen Zuno

Struktur dirampingkan 2026-11-02 atas permintaan Zulnan: dari 23 profil menjadi 14 agen kreatif dalam Lead + 6 divisi, lalu ditambah Divisi Engineering. **Sejak 2026-11-09 disamakan dengan 18 agen di Nexaoffice (web, kantor 3D, ruang kerja): 13 agen kreatif termasuk Lead + Divisi Engineering 5 agen = 18.** Perender, Pelapor Analitik, dan Strategis Iklan Sosial Berbayar diarsipkan di `agents/arsip-2026-11-09/`; masuk Editor Remotion (Bima), Editor Google Flow (Fira), dan Auditor Bug & Security (Damar). Tiap agen punya nama di kantor (ZUNO, Lia, Raka, dst.) yang sama dengan web. Profil diambil dari 23 profil lama (nama dan isi tetap); tugas profil yang mirip digabung ke satu agen supaya serah-terima lebih sedikit, tanpa membuat satu agen terlalu berat. Profil lama tersimpan utuh di `agents/arsip-23-agen/`. Nama jabatan mengikuti katalog [agency-agents-id](https://github.com/jnMetaCode/agency-agents-id) (MIT).

Tujuan tetap: Zulnan bisa ngonten pakai AI agent, dari ide sampai paket siap tayang, dengan keputusan akhir di tangan Zulnan.

Anggap ini satu kantor: **Lead** memimpin dua sayap, yaitu **sayap kreatif** (6 divisi konten) dan **Divisi Engineering** (build web app untuk pribadi, portofolio, atau klien jasa). Aturan Engineering: `docs/aturan-engineering.md`.

## Lead dan divisi

| Divisi | Fungsi | Agen (kode) | Gabungan dari profil lama |
|---|---|---|---|
| **Lead** | Memimpin, merencanakan, melapor ke Zulnan sebelum terbit | Orkestraror Agen (L.0), Juru Kabar (L.1) | + Arsitek Tata Kelola Otomasi |
| **1. Riset** | Sumber, tren, umpan balik, arah konten | Peneliti Tren (R.1), Ahli Strategi Media Sosial (R.2) | + Penyintesis Umpan Balik |
| **2. Produksi** | Naskah, caption, uji retensi | Kreator Konten (P.1), Spesialis Optimasi Video (P.2) | + Penulis Produk & Portofolio |
| **3. Desain** | Template carousel, maskot, Kartu Gaya video, prompt gambar | Pencerita Visual (D.1) | + Insinyur Prompt Gambar |
| **4. Editing** | Rencana edit video, VO, subtitle, rencana Remotion, prompt Google Flow, file jadi | Pelatih Editing Video Pendek (E.1 Edo), Editor Remotion (E.2 Bima), Editor Google Flow (E.3 Fira) | + Narator & Subtitle; render PNG oleh mesin render Zuno Web |
| **5. Mutu** (tambahan) | Catatan Mutu, tanpa veto | Penjaga Merek (Q.1), Pengumpul Bukti (Q.2) | + Pemeriksa Realitas, + Pemeriksa Kepatuhan Hukum |
| **6. Marketing** | Paket posting, leads dan arsip, catatan performa | Kurator Instagram (M.1 Maya) | + Operasional Studio, + catatan performa (dulu Pelapor Analitik). Iklan: belum ada agen sampai Fase 4 |
| **7. Engineering** | Build web app: ruang lingkup, desain, kode, uji, audit, rilis | Arsitek & Analis Kebutuhan (T.1 Arga), Desainer UI/UX (T.2 Rani), Pengembang Aplikasi (T.3 Fajar), Penguji & Rilis (T.4 Tio), Auditor Bug & Security (T.5 Damar) | profil baru (tidak ada padanan di 23 profil lama) |

Divisi Mutu tetap ada sebagai divisi kecil karena pemeriksaan fakta, klaim, dan kepatuhan tetap perlu. Sifatnya penasihat: tidak menolak, tidak menahan, tidak ada revisi otomatis.

## Alur kerja (urutan file = urutan kerja)

```
Zulnan memberi perintah (+ sumber berita/artikel/viral, + referensi gaya bila ada)
   v
LEAD      [01 Orkestraror Agen] rencana + Kartu Konten        [02 Juru Kabar] status sepanjang proses
   v
RISET     [03 Peneliti Tren] sumber + sudut (+ pelajaran performa dari 13 bila ada data)
          [04 Ahli Strategi Media Sosial] ide, funnel, platform, angle, hook
   v
PRODUKSI  [05 Kreator Konten] naskah Killer Script, caption, Daftar Fakta & Klaim
          [06 Spesialis Optimasi Video] uji retensi, tulis ulang kalimat lemah (satu kali)
   v
DESAIN    [07 Pencerita Visual] template carousel + maskot / Kartu Gaya video
   v
EDITING   [08 Pelatih Editing Video Pendek] storyboard, efek, VO, subtitle (video)
          [09 Editor Remotion] rencana Remotion (video)   [10 Editor Google Flow] prompt adegan (video)
          mesin render Zuno Web: PNG carousel (bukan agen)
   v
MUTU      [11 Penjaga Merek] ==paralel== [12 Pengumpul Bukti]   Catatan Mutu, tanpa veto, satu putaran
   v
LEAD      [01 + 02] Ringkasan Sebelum Terbit: kualitas, kesesuaian dengan keinginan Zulnan, catatan penting
   v
GERBANG   Zulnan: Setujui / revisi bagian tertentu (status Disetujui hanya dari Zulnan)
   v
MARKETING [13 Kurator Instagram] paket posting -> Antrian Posting + leads/arsip
          + catatan performa setelah tayang (data nyata) -> pelajaran ke Riset
```

Alur Engineering (standby; terpisah dari alur konten, di Zuno Studio v2 ada ruang kerja sendiri "Build App"):

```
Permintaan build (+ PRD, + referensi desain)
  -> [14 Arsitek & Analis Kebutuhan] ruang lingkup + mesin -> tinjauan [17] -> perbaiki
  -> [15 Desainer UI/UX] wireframe + gaya + cek animasi -> tinjauan [17] -> perbaiki
  -> [16 Pengembang Aplikasi] bangun (preview dulu) -> [17 Penguji & Rilis] uji + bukti
  -> [18 Auditor Bug & Security] audit statis -> [16] perbaiki temuan
  -> paket rilis -> laptop: live -> link + bukti + catatan keputusan ke Zulnan
(sejak 2026-11-06: alur superpowers, diputuskan sendiri berpatokan brief; tanpa gerbang persetujuan di tengah)
```

Tugas paralel: antar kartu; Editor Remotion dengan Editor Google Flow; Penjaga Merek dengan Pengumpul Bukti.

## Aturan tim

- Otoritas konten ada di Zulnan; status Disetujui hanya dari Zulnan. Satu pemilik per output.
- Divisi Mutu hanya memberi Catatan Mutu (Aman, Saran, Perlu keputusan Zulnan, Risiko nyata). Lead merangkumnya dan memberi tahu Zulnan sebelum konten terbit. Revisi hanya atas permintaan Zulnan.
- Memori tentang Zulnan dipakai untuk suara dan gaya, bukan bahan konten. Bahan utama dari sumber luar yang diolah jadi karya sendiri dan disebut sumbernya.
- Posting hanya lewat Antrian Posting (keputusan Zulnan 2026-11-04): konten yang Disetujui Zulnan masuk antrian dan dijadwalkan lewat Metricool (`docs/alur-posting.md`). Iklan belum aktif; profil Strategis Iklan Sosial Berbayar diarsipkan sampai Fase 4.
- Tidak ada angka, testimoni, sumber, atau pengalaman Zulnan yang dikarang. Harga: [HARGA BELUM DITENTUKAN].

## Daftar

| # | Nama | Kode | Nama di kantor | Divisi | Status | Tanggung jawab |
|---|---|---|---|---|---|---|
| 1 | [Orkestraror Agen](01-orkestraror-agen.md) | L.0 | ZUNO | Lead | aktif harian | Memimpin tim, Kartu Konten, tata kelola otomasi, Ringkasan Sebelum Terbit bersama Juru Kabar |
| 2 | [Juru Kabar](02-juru-kabar.md) | L.1 | Lia | Lead | aktif harian | Status per divisi dan Ringkasan Sebelum Terbit untuk Zulnan |
| 3 | [Peneliti Tren](03-peneliti-tren.md) | R.1 | Raka | Riset | aktif harian | Berita, artikel, konten viral, umpan balik audiens jadi bahan dan sudut konten |
| 4 | [Ahli Strategi Media Sosial](04-ahli-strategi-media-sosial.md) | R.2 | Nara | Riset | aktif harian | Ide, funnel, platform, angle, hook per kartu |
| 5 | [Kreator Konten](05-kreator-konten.md) | P.1 | Dika | Produksi | aktif harian | Naskah Killer Script, teks carousel, caption, Daftar Fakta & Klaim |
| 6 | [Spesialis Optimasi Video](06-spesialis-optimasi-video.md) | P.2 | Vino | Produksi | aktif harian | Uji retensi dan tulis ulang kalimat lemah sebelum desain |
| 7 | [Pencerita Visual](07-pencerita-visual.md) | D.1 | Sari | Desain | aktif harian | Template carousel, maskot, Kartu Gaya video, prompt gambar |
| 8 | [Pelatih Editing Video Pendek](08-pelatih-editing-video-pendek.md) | E.1 | Edo | Editing | aktif harian (video) | Storyboard, efek, VO, subtitle, ekspor; memimpin Divisi Editing |
| 9 | [Editor Remotion](09-editor-remotion.md) | E.2 | Bima | Editing | aktif harian (video) | Rencana Remotion: adegan, frame, komposisi, panduan render |
| 10 | [Editor Google Flow](10-editor-google-flow.md) | E.3 | Fira | Editing | aktif harian (video) | Brief dan prompt adegan Google Flow, kesinambungan produk |
| 11 | [Penjaga Merek](11-penjaga-merek.md) | Q.1 | Tara | Mutu | aktif harian | Catatan suara, merek, fakta, klaim, sumber |
| 12 | [Pengumpul Bukti](12-pengumpul-bukti.md) | Q.2 | Nita | Mutu | aktif harian | Catatan format file, platform, privasi, izin |
| 13 | [Kurator Instagram](13-kurator-instagram.md) | M.1 | Maya | Marketing | setelah Disetujui | Paket posting per platform, leads, arsip, catatan performa |
| 14 | [Arsitek & Analis Kebutuhan](14-arsitek-analis-kebutuhan.md) | T.1 | Arga | Engineering | standby (aktif saat ada build) | Kunci ruang lingkup, pilih mesin, PRD, kredit dan akses |
| 15 | [Desainer UI/UX](15-desainer-ui-ux.md) | T.2 | Rani | Engineering | standby (aktif saat ada build) | Wireframe, gaya visual, cek animasi |
| 16 | [Pengembang Aplikasi](16-pengembang-aplikasi.md) | T.3 | Fajar | Engineering | standby (aktif saat ada build) | Bangun web app lengkap, akses acak + Reset Akses, AI fleksibel |
| 17 | [Penguji & Rilis](17-penguji-rilis.md) | T.4 | Tio | Engineering | standby (aktif saat ada build) | Uji dengan bukti, perbaiki bug, rilis, panduan serah terima |
| 18 | [Auditor Bug & Security](18-auditor-security.md) | T.5 | Damar | Engineering | standby (aktif saat ada build) | Audit statis bug dan keamanan, temuan dengan lokasi dan perbaikan |

Versi gabungan semua profil: `agents/semua-agen.md`.
