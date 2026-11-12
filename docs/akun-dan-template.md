# Akun dan template konten Zulnan

Dikoreksi Zulnan 2026-11-12. **Tujuan akhir:** tiap akun punya template yang berjalan dan terbukti berhasil, lalu template itu jadi produk di Nexaoffice.

## Empat akun

| # | Akun | Isi | Karakter / gaya | Yang mengerjakan karakter | Status |
|---|---|---|---|---|---|
| 1 | **Akun Zulnan (personal)** | 6 pilar konten Zulnan | Video tipe **A** (Zulnan + Zuno ngobrol), **B** (proses tim Zuno), **C** (Zulnan di frame); slogan; foto Zulnan; bank fakta | Sudah ada (`assets/karakter/`, `docs/referensi-video.md`) | Template ada di Workspace (pilih Akun tujuan: Personal). Video masih berupa paket render, belum .mp4 otomatis (L9) |
| 2 | **Akun Pulau** | Seri terdampar -> bertahan hidup -> kehidupan -> kota/negara; penonton ikut menentukan lewat komentar | Karakter dan dunia buatan Zulnan | **Zulnan (sedang dibuat)** | Sistem permintaan dan produksi: `docs/seri-pulau.md`. Menunggu bentuk karakter |
| 3 | **Akun Stickman** | Niche **[ISI, dipikirkan Zulnan]** | Stickman. Referensi: Backbench Animations, Rico Animations | Zulnan | Menunggu niche |
| 4 | **Akun Bedah** | **Bedah fakta** dan **bedah teknik umum** | Gaya visual diambil dari template **lemo-opuscar** (lihat pilihan di bawah) | Kode (opuscar), tanpa karakter Zulnan | Menunggu Zulnan memilih gaya |

Akun 2-4 adalah akun **niche**: di Workspace dibuat lewat **Tambah akun niche**, jadi identitas Zulnan otomatis tidak dipakai.

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

Saran awal gua [Asumsi]: **F2 + F4** untuk fakta dan **T1 + T3** untuk teknik. Dua gaya per sub-jenis supaya tetap konsisten tapi tidak monoton. Keputusan di lu.

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
