# Strategi portofolio Nexaoffice (bagian 1-3)

Dibuat 2026-11-12. Bagian 4-6 dan Weak points menyusul setelah Zulnan bilang "lanjut".

Tanda yang dipakai:
- **[Fakta]** sudah gua cek sendiri (sumber disebut).
- **[Asumsi]** dugaan gua, belum terbukti.
- **[Cek sendiri]** lu yang harus verifikasi.

Asumsi dasar:
- Waktu kerja: 5-8 jam/hari, gua hitung **6 jam/hari, 5 hari/minggu**.
- Budget: Rp150-200rb/bulan, sekitar US$9-12 (kurs ±Rp16.300/US$) [Asumsi, cek kurs].

---

## 1. Audit Nexaoffice

### Yang terlihat di situs live
[Fakta] Dibuka 2026-11-12 lewat Vercel, status 200 (https://zuno-studio-dusky.vercel.app/).
- **Judul:** "Nexaoffice · Kantor AI dengan 18 agen"; hero "Kantor AI yang langsung kerja."
- **Menu:** Contoh hasil, Pilihan tema, Workspace, Chat, Isi kit, Panduan, Harga, Tanya jawab, Produk lain, Pesan kit.
- **Fitur yang disebut:**
  - Kantor 3D (3 tema: Menara Senja, Griya Langit, The Grotto; 18 karakter).
  - Dua divisi: Konten dan Agent Builder.
  - Penyedia AI bebas (Claude, Gemini, OpenAI, OpenRouter, 9router) dan menu Pengaturan AI.
  - Panduan pasang di Vercel dan VPS.
- **Kosong di halaman:**
  - Harga ("belum ditentukan"), kontak penjual, produk lain.
  - Bagian "Contoh hasil" isinya **langkah alur + animasi, bukan hasil kerja asli**.
- **Nama agen yang disebut di halaman:** Raka, Bima, Fira, Arga, Rani, Fajar, Tio, Damar.

### 18 agen + 1
[Fakta] Dari `agents/README.md` di repo. Halaman tidak menampilkan daftar lengkap.

| Sayap | Divisi | Agen |
|---|---|---|
| Lead | Lead | L.0 ZUNO (Orkestraror), L.1 Lia (Juru Kabar) |
| Konten (13 termasuk Lead) | Riset | R.1 Raka (Peneliti Tren), R.2 Nara (Strategi Medsos) |
| | Produksi | P.1 Dika (Kreator Konten), P.2 Vino (Optimasi Video) |
| | Desain | D.1 Sari (Pencerita Visual) |
| | Editing | E.1 Edo (Pelatih Editing), E.2 Bima (Remotion), E.3 Fira (Google Flow) |
| | Mutu (penasihat, tanpa veto) | Q.1 Tara (Penjaga Merek), Q.2 Nita (Pengumpul Bukti) |
| | Marketing | M.1 Maya (Kurator Instagram) |
| Agent Builder (5) | Engineering | T.1 Arga (Arsitek), T.2 Rani (UI/UX), T.3 Fajar (Pengembang), T.4 Tio (Penguji & Rilis), T.5 Damar (Audit keamanan) |
| (di luar 18) | HRD | H.1 Hana (Perekrut & Pelatih Agen), belum punya meja di kantor 3D |

Catatan kritis:
- Lu bilang "2 divisi". Di kode ada 8 divisi + HRD dalam 2 sayap. Yang dijual sebaiknya "2 sayap", supaya tidak bentrok dengan isi kit.
- [Fakta] Agen-agen ini adalah peran berurutan yang memanggil satu model AI dengan prompt peran masing-masing (alur di Workspace). Itu sah, tapi bukan 18 program yang jalan mandiri.
  - [Asumsi] Pembeli yang ngerti teknis akan nanya ini. Klaim "kantor AI" harus didukung hasil, bukan jumlah agen.

### Bisa dibuktikan sekarang vs menunggu API key

| Bisa dibuktikan sekarang (tanpa API key) | Menunggu API key | Belum dibangun (key pun belum cukup) |
|---|---|---|
| Kantor 3D, 3 tema, karakter | Semua tulisan agen: naskah, caption, PRD, kode, Catatan Mutu | File video .mp4 otomatis (sekarang paket rencana + ZIP untuk Claude Code) |
| Workspace, Chat ZUNO, Pengaturan AI, Tambah agen (form) | Carousel berisi naskah asli (mesin render PNG-nya sudah jalan) | Antrean beberapa tugas, simpan permanen (P7) |
| Riset Google Trends/News/HN, cover gambar dari sumber/Wikimedia (`web/api/riset.js`, `gambar.js`, tanpa key) | Web/web app/game dari Agent Builder | Kirim posting (P1: Metricool + Drive) |
| Alur lengkap dengan AI tiruan (tes stub lolos) | Audit dan perbaikan Damar | Jembatan ke Claude Code (`/api/kerja`) |
| Pemasang lokal, ekspor jasa (tes lolos) | | Akun Personal/Niche (aturan baru) |

**Kesimpulan:** yang terbukti sekarang adalah *cangkangnya*. Isinya, yaitu apakah hasil agen layak posting atau layak dijual, **belum ada buktinya sama sekali**.

---

## 2. Riset referensi (item 2, 3, 4)

### 2a. Gaya Netizen City (item 3)

**Akses:**
- [Fakta] Instagram @netizencity.id tidak bisa gua buka dari sini (proxy menolak), dan pencarian web tidak menemukan halaman akunnya.
- Jadi yang gua analisis **cuma satu video yang lu kirim**. Jumlah follower, isi post lain, dan monetisasinya tidak gua ketahui.
- **Minta:** kirim screenshot atau deskripsi **5 post lain** (judul/caption, durasi, jumlah view/komen kalau kelihatan, tanggal) supaya polanya bukan dari satu sampel.

[Fakta] Analisis video "Day 1": 58,6 detik, 720x1280, 30 fps, ada audio. Gua ambil 1 frame per 2 detik; teks di bawah dibaca dari subtitle di layar, audio tidak gua transkrip.

| Aspek | Yang terlihat |
|---|---|
| Format | Seri "DAY N" (badge kiri atas): membangun kota dari nol. Satu maskot 3D (kapsul biru, topi tinggi, kacamata, "Mayor"), dunia low-poly pastel, efek tilt-shift (latar blur) |
| Hook (0-4 dtk) | Premis langsung di detik pertama: "Day 1, bangun kota yang isinya diatur sama netizen." Lalu taksi datang dan maskot memperkenalkan diri |
| Struktur | Premis -> perkenalan karakter -> masalah lucu (populasi 1, followers nol, "itu juga saya yang ngitung") -> aturan main -> aksi hari ini (bangun Kantor Mayor, jam time-lapse x24) -> CTA bertumpuk -> lebar kamera "tanahnya masih luas... luas banget" |
| Mekanik inti | **Penonton ikut menentukan isi**: "1 FOLLOW = 1 WARGA", "TOP KOMEN = DIBANGUN BESOK", "KOMEN = REQUEST BANGUNAN", "AJAK TEMANMU PINDAH KE SINI". Papan "POPULASI: 1" jadi penghitung kemajuan |
| Gaya visual | Pastel hijau/krem, aksen oranye. Subtitle bulat tebal putih bergaris gelap di tengah bawah. Label kapsul berwarna. Kartu profil IG palsu dan animasi jari menekan "Mengikuti". Satu selingan font serif sinematik ("Kita tidak pernah meragukan warga...") untuk ganti nada |
| Tempo | Subtitle ganti kira-kira tiap 2 detik; potongan atau gerak kamera kira-kira tiap 2-4 detik (kasar, dari sampel 2 detik). Humor deadpan, kalimat pendek |
| CTA | 3 CTA ditumpuk makin lama makin banyak, diakhiri tombol follow ditekan dan "1 -> ?" |
| Monetisasi | **Tidak terlihat di video ini** |

- [Asumsi] Pola monetisasinya kemungkinan nanti: bangunan sponsor (brand "minta dibangun"), merchandise karakter, atau dana kreator. Tidak ada bukti dari sampel ini.

Penilaian gua:
- Kekuatan format ini ada di **loop komentar -> konten besok**. Itu cocok sama ukuran "konten menang" lu, yaitu komentar.
- Kelemahannya **cold start**. Dengan 0 follower, "top komen" bisa kosong dan seri macet. Netizen City bisa menutupinya dengan humor ("itu juga saya yang ngitung"); seri lu belum tentu.
- Biaya produksi tinggi: tiap episode butuh adegan 3D baru.
  - [Fakta] Lu sudah punya kantor 3D three.js + 18 karakter voxel. Itu bisa dipakai ulang untuk rekam adegan tanpa API key.
- **Yang boleh diambil:** pola "dunia yang dibangun penonton per hari", penghitung kemajuan, CTA bertumpuk, time-lapse.
- **Yang tidak boleh ditiru:** kota + wali kota + maskot kapsul bertopi, nama "Netizen City", kartu profil dan teks tagline mereka.
- [Asumsi] Ide yang dekat dengan aset lu: "Day N: kantor AI yang agennya dipilih netizen". Komentar meminta agen atau fitur, Hana merekrut, Agent Builder membangun. Ini sekaligus bukti tools bekerja. Tapi mekaniknya mirip; **putuskan sendiri** apakah terlalu dekat.

### 2b. Faceless / stick man (item 2)
- [Fakta, sumber sekunder] Kanal stick figure yang mapan memang ada, contohnya **OverSimplified** (sejarah, voice-over lucu, karakter stick figure berulang) dan **Casually Explained** (komedi penjelasan, humor datar) ([Podcastle](https://podcastle.ai/blog/who-is-oversimplified)).
- [Fakta, klaim vendor, metodenya tidak jelas] Angka retensi yang beredar tidak bisa dipercaya penuh: "animated explainer 70-85%" ([AIR](https://air.io/en/audience-growth/why-investing-in-motion-graphics-can-double-your-viewer-retention)), "ganti adegan tiap 2-3 detik = 82% retensi" ([FluxNote](https://fluxnote.io/guides/faceless-shorts-retention-tips-2026)).
- Pola yang konsisten di berbagai sumber: **naskah lebih penting dari gambar**; visual harus memajukan ide, bukan hiasan; detik pertama menentukan ([Satura](https://saturaai.com/blog/why-stick-figure-youtube-videos-keep-breaking-out-in-2026-jpkuyd)).

| Aspek | Pola |
|---|---|
| Format | Voice-over memimpin; stick figure + properti sederhana; satu ide per adegan |
| Hook | Pertanyaan atau klaim aneh, lalu "ternyata..." |
| Visual | Garis hitam di latar polos, satu warna aksen, ekspresi lewat pose. Bisa digambar kode (SVG di Remotion), **tanpa generator gambar berbayar** |
| Tempo | Ganti pose/adegan cepat; humor dari jeda dan kontras |
| Monetisasi | Iklan YouTube long-form, sponsor. [Asumsi] Pendapatan Shorts per view rendah; jangan diandalkan |

- [Cek sendiri] Kirim 2-3 link kanal stick man yang lu maksud. Gua belum menganalisis video spesifik, cuma sumber tentang formatnya.

### 2c. "Bedah sesuatu" visual-motion (item 4)
- [Asumsi, dari pengetahuan gua, belum gua cek ulang sesi ini] Contoh genre: Kurzgesagt, Vox explainers, Johnny Harris (peta + arsip + data).

| Aspek | Pola |
|---|---|
| Hook | Pertanyaan yang orang kira tahu jawabannya ("Kenapa X begini?") + satu fakta mengejutkan bersumber |
| Struktur | Pertanyaan -> konteks singkat -> 2-3 lapis "ternyata" -> jawaban -> sumber |
| Visual | Diagram, peta, angka animasi, potongan dokumen/berita dengan kredit; tipografi kinetik |
| Tempo | Shorts 30-60 detik, satu fakta per 3-5 detik |
| Monetisasi | Iklan, sponsor edukasi. Yang paling penting di sini: kepercayaan, jadi sumber wajib tampil |

- **Paling cocok dengan yang sudah lu punya:**
  - riset mandiri gratis (Trends/News/HN);
  - aturan "tautan hanya dari hasil riset";
  - cover dari gambar sumber/Wikimedia;
  - Penjaga Merek untuk cek fakta;
  - Remotion (gerak dari kode, tanpa kredit generator).

### Risiko platform dan hukum (berlaku untuk ketiganya)
- **YouTube:**
  - [Fakta] Sejak 15 Juli 2025, YouTube memperjelas aturan YPP soal konten "mass-produced and repetitious" (sekarang disebut *inauthentic*). Konten berbantuan AI tetap bisa dimonetisasi kalau unik dan ada nilai tambah manusia ([Plagiarism Today](https://www.plagiarismtoday.com/2025/07/08/youtube-targets-inauthentic-content/), [CineD](https://cined.com/youtube-set-to-crack-down-on-ai-slop-with-monetization-policy-update)).
  - Template yang hanya diganti topiknya, dengan suara TTS yang sama dan struktur identik, adalah **profil berisiko**.
- **Meta:**
  - [Fakta] Juli 2025 Meta menghukum akun Facebook yang berulang kali repost konten orang (monetisasi dicabut sementara, jangkauan turun). Reaksi atau komentar dengan tambahan sendiri tidak kena ([TechCrunch](https://techcrunch.com/2025/07/14/following-youtube-meta-announces-crackdown-on-unoriginal-facebook-content)).
- **Label AI:**
  - [Fakta, sumber sekunder] YouTube mewajibkan label untuk konten **realistis** yang bisa dikira nyata; animasi yang jelas tidak realistis dikecualikan ([Engadget](https://www.engadget.com/youtube-lays-out-new-rules-for-realistic-ai-generated-videos-154248008.html)).
  - Meta memberi label "AI info" dari deteksi atau pengakuan kreator ([GovInfoSecurity](https://www.govinfosecurity.com/meta-youtube-update-ai-content-policies-a-25681)).
  - [Cek sendiri] Baca halaman bantuan resmi YouTube dan Meta. Keputusan [ISI] P4 (tanda AI semua konten atau hanya visual AI) masih di lu.
- **Hak cipta:** potongan berita/foto penerbit di "bedah" harus pendek, diberi kredit, dan dicek hak pakainya (aturan Zuno sudah ada). Format tidak dilindungi hak cipta, tapi karakter, nama, dan aset visual akun referensi dilindungi.

---

## 3. Portofolio per item

Urutan saran gua beda dari urutan lu:
- **1a (stabil di laptop lu) -> 4 Bedah -> 5 Web (3 demo) -> 2 Stick man -> 3 Kota-komentar -> 1b (dijual) -> 6 jalan terus di belakang.**
- Alasannya:
  - **Menjual kit (item 1) duluan itu urutan salah.** Belum ada satu pun hasil asli, dan dukungan pembeli akan makan jam kerja lu yang terbatas.
  - **Bedah duluan** karena bahan, riset, dan rendernya paling murah dan paling sesuai pipeline yang sudah jadi.
  - **Kota-komentar paling akhir** karena butuh penonton dulu supaya mekaniknya jalan.

| Item | Deliverable dan definisi "selesai" | Agen | Bukti untuk portofolio | API key | Usaha |
|---|---|---|---|---|---|
| **1a. Nexaoffice stabil di laptop lu** | L1-L9 di `daftar-perbaikan-lokal.md`. Selesai bila **10 tugas nyata** (campur konten dan build) berjalan dari perintah sampai Antrian Posting, minimal 8 tanpa lu buka kode | Semua; Lia + Maya untuk laporan dan antrian | Log per tugas: waktu, biaya API, jumlah revisi, berhasil/gagal. Rekaman layar satu tugas utuh | Wajib (punya lu) | Besar |
| **1b. Kit dijual, jalan di laptop pembeli** | Paket rilis bertag versi + pemasang + panduan + lisensi. Selesai bila **3 orang luar** (bukan lu) berhasil pasang dan menjalankan 1 tugas di laptop mereka **hanya dari panduan**, dan semua masalah mereka dicatat lalu diperbaiki | T.4 Tio (uji pasang), H.1 Hana, Lia | Video "pasang dari nol", catatan masalah penguji, testimoni asli (dengan izin, tanpa dikarang) | Pembeli pakai key sendiri | Besar |
| **4. Template Bedah** | Template Remotion (judul pertanyaan, diagram/peta, angka bersumber, kredit sumber di layar) + versi carousel. Selesai bila **10 video 30-60 dtk terbit** di satu akun niche, tiap fakta punya tautan sumber di caption | Raka, Nara, Dika, Vino, Sari, Bima, Tara (fakta), Nita (izin gambar), Maya | Template, 10 video, tabel metrik (retensi rata-rata, % tonton habis, komentar per 1.000 view) | Naskah: ya. Riset, gambar, render: tidak | Sedang |
| **5. Web / web app / game / 3D** | 3 demo: 1 web app dengan login, 1 landing page, 1 game/3D interaktif kecil. Live di Vercel gratis. Selesai bila tiap demo punya link live, tes lolos, laporan audit Damar, dan studi kasus 1 halaman (brief -> PRD -> hasil -> uji). Lalu **1 klien asli** (boleh murah atau barter) untuk studi kasus sungguhan | Arga, Rani, Fajar, Tio, Damar | Link live, repo, laporan uji + audit, waktu dan biaya per build | Ya | Sedang per demo |
| **2. Template Stick man** | Rig stick figure SVG (10-15 pose, ekspresi, properti) di Remotion + resep naskah. Selesai bila **10 video terbit** di akun niche lain dan kurva retensi tercatat | Raka, Nara, Dika, Vino, Sari, Bima, Edo (VO/subtitle), Tara, Maya | Template, 10 video, metrik | Naskah: ya. Render: tidak. VO: TTS gratis atau rekaman sendiri [Cek sendiri: TTS gratis yang lisensinya boleh komersial] | Sedang |
| **3. Template Kota-komentar** (konsep sendiri, bukan kota+maskot mereka) | Dunia dan karakter sendiri + kit adegan 3D (pakai ulang kantor 3D/voxel) + alur Day-N: ambil komentar -> pilih -> bangun -> render. Selesai bila **7 episode** terbit berturut-turut dan tiap episode memakai komentar asli dari episode sebelumnya | Raka (baca komentar), Nara, Dika, Sari, Bima, Fajar (adegan 3D), Maya | Seri 7 hari + bukti komentar dipakai (screenshot) | Naskah: ya. Ambil komentar otomatis butuh API Meta/Metricool (P1), atau manual dulu | Besar |
| **6. Daftar agen perusahaan kreatif** | Dokumen struktur + pemicu penambahan (bagian 6 nanti). Selesai bila tiap agen punya pemicu dan ukuran kerja | L.0 ZUNO, H.1 Hana | Bukan bukti untuk publik; ini peta internal | Tidak | Kecil |

### Khusus item 1b: supaya jalan di laptop pembeli

| Bagian | Yang sudah ada [Fakta, repo] | Yang kurang |
|---|---|---|
| Packaging | Repo jasa `zuno-studio-app`, ekspor satu arah, tes `zuno-jasa-test` | Rilis bertag versi + changelog. Pembeli dapat apa: akses repo privat atau zip? Cara update tanpa merusak data mereka (setelah L3, data di `kerja/` tidak boleh tertimpa) |
| Instalasi | `pasang.bat`/`pasang.sh`, `cek-kesiapan.mjs`, `jalankan-lokal.bat` | **Belum terbukti di Windows lu (L1).** Perlu diuji di 3 laptop berbeda (Windows 10/11, minimal 1 laptop RAM 8 GB) |
| Panduan API key | Pengaturan AI (server / browser / VPS), `PANDUAN.md` bagian penyedia AI | Langkah bergambar per penyedia; **perkiraan biaya per tugas dari log 1a** (bukan tebakan); batas kuota gratis Gemini (lu pernah kena limit) |
| Dokumentasi | `README.md`, `PANDUAN.md`, `PANDUAN-LOKAL.md` | Bagian "masalah umum" diisi dari masalah nyata penguji; video pasang |
| Lisensi | `LISENSI.md` (JetBrains Mono OFL, three.js MIT, SOURCES.md) | [ISI kontak], masa dukungan, harga (P10). [Cek sendiri] lisensi Remotion untuk dijual ke perusahaan (setahu gua gratis untuk individu/tim kecil, perusahaan lebih besar wajib beli lisensi). Ketentuan Anthropic: pembeli pakai akun/key Claude sendiri, lu tidak boleh menjual ulang pemakaian Claude ([Fakta], sudah dicatat di `rencana-lokal-claude-code.md`) |
| Dukungan | Belum ada | [Asumsi] Untuk satu orang dengan 6 jam/hari: masa dukungan 30 hari, balasan maksimal 2x24 jam, satu kanal saja, FAQ dari pertanyaan nyata. Jangan janji kustomisasi gratis |

**Catatan biaya yang bisa jadi batu sandungan:**
- [Asumsi, cek harga resmi] Jalur Claude Code + skill (L8, L9) butuh langganan Claude atau API key. Langganan Claude Pro setahu gua sekitar US$20/bulan, **di atas budget Rp150-200rb lu**.
- Pilihannya:
  - (a) tambah budget khusus Claude;
  - (b) pakai jalur web yang sekarang dengan Gemini gratis/OpenRouter murah, dan render lewat Remotion lokal tanpa Claude Code;
  - (c) campur keduanya: Claude hanya untuk build web.
- **Ini keputusan lu sebelum L8.**
