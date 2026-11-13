# Akun dan template konten Zulnan

Dikoreksi Zulnan 2026-11-12. **Tujuan akhir:** tiap akun punya template yang berjalan dan terbukti berhasil, lalu template itu jadi produk di Nexaoffice.

## Empat akun

| # | Akun | Isi | Karakter / gaya | Yang mengerjakan karakter | Status |
|---|---|---|---|---|---|
| 1 | **Akun Zulnan (personal)** | 6 pilar konten Zulnan | Video tipe **A** (Zulnan + Zuno ngobrol), **B** (proses tim Zuno), **C** (Zulnan di frame); slogan; foto Zulnan; bank fakta | Sudah ada (`assets/karakter/`, `docs/referensi-video.md`) | Template ada di Workspace (pilih Akun tujuan: Personal). Video masih berupa paket render, belum .mp4 otomatis (L9) |
| 2 | **Akun Pulau** | Seri terdampar -> bertahan hidup -> kehidupan -> kota/negara; penonton ikut menentukan lewat komentar | Karakter dan dunia buatan Zulnan | **Zulnan (sedang dibuat)** | Sistem permintaan dan produksi: `docs/seri-pulau.md`. Menunggu bentuk karakter |
| 3 | **Akun Stickman** | Niche **[ISI, dipikirkan Zulnan]**; referensi alur cerita di bawah | Stickman. Referensi: Backbench Animations, Rico Animations | Zulnan | Menunggu niche |
| 4 | **Dua akun bedah** (aturan Zulnan 2026-11-13, menggantikan "Meja Bedah") | **@faktadibedah**: fakta harian + fakta umum; **@teknikdibedah**: mesin apa pun + pembangunan | 3D dari kode (skill lemo-opuscar), referensi pendekatan @kitabedah.idn | Kode, tanpa karakter Zulnan | Naskah v3 disetujui; lihat `docs/dua-akun-bedah.md` dan `produksi/` |

Akun 2-4 adalah akun **niche**: di Workspace dibuat lewat **Tambah akun niche**, jadi identitas Zulnan otomatis tidak dipakai.

## Akun Stickman: referensi alur cerita yang relate
Niche tetap **diputuskan Zulnan**. Di bawah ini cuma pola alur cerita.

**Pola dari judul Shorts 2 kanal referensi** [Fakta, dibaca dari halaman kanal 2026-11-12; videonya tidak ditonton]:

| Pola | Contoh judul asli | Rumusnya |
|---|---|---|
| "Pas lu..." / "When you..." | Rico: "When you have no light switch at the bedside!", "When you are bathing and music goes off!" | Satu situasi kecil sehari-hari yang semua orang pernah alami |
| Pernyataan vs kenyataan | Rico: "Three hours of sleep doesn't affect me at all!" | Tokoh bilang A, gambar menunjukkan kebalikannya |
| X vs Y | Rico: "Black cats in Western countries Vs in Africa!" | Satu hal, dua tempat/budaya/generasi |
| "...be like" (parodi) | Rico: "African documentaries be like!" | Meniru gaya sesuatu yang dikenal semua orang |
| Komedi pasangan / hubungan | Backbench: "Good or bad boyfriend?", "She tricked him" | Dialog dua orang + jebakan + punchline; judul berupa pertanyaan supaya orang berkomentar |
| Tokoh tetap + seri panjang | Rico: "Life of a dookie" | Satu tokoh, satu tujuan besar, episode bersambung |

**Struktur satu video (15-40 detik)** [Asumsi, pola umum komedi pendek]:
1. **Detik 0-2:** situasi langsung kelihatan + teks "Pas lu..." (tanpa pembukaan).
2. **Eskalasi:** 2-3 langkah, tiap langkah makin parah.
3. **Twist/punchline:** kebalikan dari yang diharapkan.
4. **Tag (opsional):** satu lelucon tambahan atau ending yang nyambung ke awal (loop), plus pertanyaan di caption ("lu tim mana?").

**Contoh terjemahan ke situasi Indonesia** [ide, bukan fakta; pilih/buang sesuka lu]:
- **"Pas lu..."**
  - anak kos tanggal tua buka kulkas;
  - ojol sudah sampai tapi lu belum mandi;
  - grup WA keluarga kirim hoaks jam 5 pagi;
  - sinyal hilang pas lagi bayar.
- **Pernyataan vs kenyataan:** "Besok gua mulai diet" / "Gua cuma scroll 5 menit".
- **X vs Y:**
  - kerja Senin vs Jumat;
  - belanja pakai uang sendiri vs uang orang tua;
  - mudik ekspektasi vs realita.
- **"...be like":** sinetron be like; rapat online be like; tukang parkir be like.
- **Hubungan:** emak vs anak; pacar "terserah"; teman yang pinjam uang.
- **Tokoh tetap:** satu stickman dengan satu ciri (topi, tas, warna) dan satu tujuan panjang. Contoh: "kerja kantor sampai bisa resign" atau "nabung buat motor". Tiap episode satu kejadian kecil.

Aturan untuk akun ini:
- Suara/audio **buatan sendiri**, jangan memakai audio kreator lain (contoh "sc: @..." di Backbench), supaya aman dari hak cipta dan aturan konten tidak orisinal.
- Humor tanpa merendahkan suku, agama, ras, atau fisik orang.
- Kalau niche sudah dipilih, pola di atas disaring ke niche itu dan dikunci jadi struktur episode template Stickman.

## Isi satu "template akun" (biar bisa jadi produk)
Tiap template baru dianggap jadi kalau punya semua ini:
1. **Profil akun:** niche, audiens, gaya bahasa, larangan (sudah ada kolomnya di Tambah akun niche).
2. **Struktur episode:** format tetap + urutan potongan (contoh: format E1-E6 di Akun Pulau).
3. **Kartu Gaya terkunci:** palet, font, UI, suara, aset.
4. **Alur agen:** siapa mengerjakan apa, dari perintah sampai Antrian Posting.
5. **Mesin render** yang jalan di laptop dan menghasilkan .mp4.
6. **Bukti:** minimal 10 posting + tabel metrik (G2 di `strategi-portofolio.md`).

Setelah bukti ada, template dimasukkan ke Nexaoffice sebagai pilihan bawaan (preset akun) yang bisa dipakai pembeli dengan karakter/brand mereka sendiri.

## Akun Bedah: pilihan gaya lemo-opuscar (Zulnan pilih)
Gambar contoh (poster demo resmi opuscar) dikirim di chat. [Fakta] Daftar dari library `lemomo-ai/lemo-opuscar` (101 gaya), dicek 2026-11-12.

**Bedah fakta:**
| Kode | Gaya | Cocok untuk |
|---|---|---|
| F1 | Visual Investigation | Membedah satu kejadian detik per detik dari arsip/foto |
| F2 | 3D Map Explainer | Fakta tempat: selat, jalur, wilayah |
| F3 | Satellite Briefing | Perubahan tempat dari citra satelit |
| F4 | Data Storytelling | Fakta angka dan tren dalam grafik |
| F5 | Halftone Dossier | "Berkas kasus" lucu: profil, angka, cap |
| F6 | Caption News | Berita dengan angka besar dan teks tebal |
| F7 | Archive Light Table | Sejarah dari foto/dokumen lama |
| F8 | Broadcast News Package | Rangkuman berita mingguan bergaya TV |

**Bedah teknik umum:**
| Kode | Gaya | Cocok untuk |
|---|---|---|
| T1 | Exploded Teardown | Membongkar produk jadi bagian-bagian |
| T2 | Line-Art Cutaway | Penampang benda, "di mana letak X?" |
| T3 | Color-Coded Mechanism | Cara kerja mesin dengan warna per sistem |
| T4 | Blueprint | Gambar teknik / paten |
| T5 | Instruction Manual Art | Langkah merakit/memakai |
| T6 | Assembly-Line Diagram | Proses dari bahan sampai jadi |
| T7 | Security X-ray | "Isi di dalam" benda (tembus pandang) |
| T8 | Isometric Infographic | Rantai proses/perjalanan barang dalam satu peta |

Saran awal gua [Asumsi]: **F2 + F4** untuk fakta dan **T1 + T3** untuk teknik.

**Keputusan Zulnan 2026-11-12** (sudah diganti 2026-11-13): F1 + T1 untuk "Meja Bedah". Sekarang dua akun terpisah, lihat `docs/dua-akun-bedah.md`.

### Lisensi opuscar (penting untuk "jadi produk")
[Fakta, dari LICENSE library 2026-11-12]
- **Video yang dibuat dengan library itu milik kita, termasuk untuk komersial, tanpa wajib kredit.** Jadi akun Bedah boleh dimonetisasi.
- Kode library: MIT.
- **Dokumen gaya (STYLE.md, panduan, prompt): CC BY-NC 4.0.**
  - Boleh dipakai dan diadaptasi untuk membuat film sendiri.
  - **Tidak boleh dimasukkan ke produk yang dijual** (utuh, sebagian, atau versi adaptasi) tanpa **lisensi komersial** dari Lemomo (kontak di LICENSE mereka).
- Akibatnya untuk Nexaoffice:
  - (a) Template Bedah di produk harus memakai panduan gaya **buatan kita sendiri**; atau
  - (b) Minta lisensi komersial; atau
  - (c) Pembeli memasang opuscar sendiri dari GitHub (seperti taste-skill).
- Catatan: paket jasa sekarang ikut membawa `.claude/skills/lemo-opuscar` (SKILL.md). Sebelum kit dijual, ini perlu diputuskan (a/b/c). [Cek sendiri] status lisensi SKILL.md-nya.
- Poster/still demo: CC BY 4.0 (boleh dipakai dengan kredit "Lemo-Opuscar by Lemomo (LemoLab)").

## Urutan kerja template (usulan)
1. **Akun Bedah:** paling siap, tidak menunggu karakter. Opuscar sudah terpasang, video jadi .mp4 dari kode. Begitu lu pilih gaya, gua bikin 1 video contoh.
2. **Akun Pulau:** bangun Papan Permintaan + data dunia + perencana mingguan sambil lu menyelesaikan karakter.
3. **Akun Zulnan:** render tipe A/B/C jadi .mp4 (L9).
4. **Akun Stickman:** setelah niche ditentukan.
