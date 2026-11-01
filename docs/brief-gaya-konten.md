# Brief Gaya Konten Zuno

Dokumen ini adalah **brief dasar** (memori inti Zuno) untuk semua agen. Isinya satu kali ditulis, lalu dipakai tiap konten. Zulnan tidak perlu bikin brief per konten: cukup satu kalimat perintah dan bahan mentah bila ada.

- Bagian 1 sampai 5 dan 8 berasal dari prompt orkestrasi dan keputusan Zulnan.
- Bagian 6 dan 7 (gaya carousel dan video) berasal dari keputusan Zulnan tanggal 2026-11-01. Rincian preset dan alat ada di `docs/gaya-video.md`.
- Tanda **[ISI]** berarti Zulnan belum menentukan. Agen tidak boleh menebak isinya; tanyakan sekali, lalu isi di sini setelah Zulnan menjawab.
- Butir inti (suara, aturan, larangan, anggaran) hanya berubah setelah Zulnan setuju.

## 1. Posisi dan audiens

| Hal | Isi |
|---|---|
| Nama tim | Zuno |
| Nama di konten | Zulnan |
| Niche | Produk digital |
| Topik | Cuan dari AI, tutorial, storytelling proses membangun, peluang produk digital, tools AI, AI agent |
| Positioning | Membantu pekerjaan jadi lebih mudah dan produktif dengan AI |
| Audiens | Pemula 25-35 tahun, karyawan swasta, yang mau belajar AI atau mulai ngonten |
| Platform | Instagram, TikTok, Threads |
| Target harian | 2 carousel gambar + 1 video motion grafis (Mode Tampil atau Tanpa Wajah) |
| Rumus konten | Semua konten TOFU, MOFU, atau BOFU |
| Fase aktif | Fase 1 (ide sampai naskah dan edit). Tidak memposting, tidak menjalankan iklan. |

Topik global boleh, asal tidak teknis dan mudah dipahami pemula. Hati-hati dengan "cuan dari AI": hanya sebagai topik dan proses, tidak boleh menjanjikan atau mengklaim hasil.

## 2. Suara dan bahasa

- Santai dan lucu, lugas di momen tertentu, empatik, friendly, tidak bertele-tele.
- Bahasa sehari-hari, kalimat pendek, tanpa jargon teknis untuk pemula. Kata "Gue" dipakai di slogan.
- **Slogan setelah hook pada setiap video:** "Hai, kenalin Gue Zulnan. Gue sales yang belajar AI sambil bikin, bukan cuma ngomongin."
- Contoh tulisan atau ucapan Zulnan yang dianggap "ini gue banget": **[ISI]** (2 sampai 3 contoh; sampai terisi, agen menulis dengan suara di atas dan menandai draf sebagai "suara perlu dicek").
- Sapaan ke audiens dan kata khas yang ingin dipakai: **[ISI]**.

## 3. Fakta Zulnan yang boleh dipakai di konten

Hanya fakta di bawah yang boleh jadi cerita pribadi. Fakta lain wajib ditanyakan dulu. Agen dilarang mengarang pengalaman, testimoni, atau angka.

- Sales sekitar 12 tahun (FMCG), fokus develop area.
- Resign, lalu belajar AI dari nol dan berproses.
- Portofolio: 5 web Nexamind (detail tiap web: **[ISI]** oleh Zulnan sebelum dibahas di konten).
- Latar pendidikan SMK jurusan Broadcasting: **[konfirmasi Zulnan boleh dipakai di konten atau tidak]**.
- Hasil nyata (penjualan, jumlah pengguna, tangkapan layar): **[ISI]**. Sampai ada, tidak ada klaim hasil.

## 4. Larangan

- Klaim hasil atau penghasilan yang belum terbukti.
- Kata berlebihan, mengaku-ngaku, menipu, menjanjikan hasil, bertele-tele.
- Membalas pesan pribadi atas nama Zulnan; mengubah anggaran iklan.
- Menyatakan sudah memposting, iklan sudah jalan, atau gambar dan video sudah jadi bila belum. Bila hanya prompt, statusnya "Prompt siap generate".
- Mengusulkan ulang ide yang pernah ditolak Zulnan; mengusulkan ide yang tidak relevan dengan niche.
- Harga: belum ditentukan. Selalu tulis **[HARGA BELUM DITENTUKAN]**.
- Menyimpan kata sandi, token akses, data pembayaran, dokumen identitas, atau data kesehatan.

## 5. Rumus TOFU, MOFU, BOFU

| Tahap | Tujuan | Isi |
|---|---|---|
| TOFU | Menarik perhatian pemula | Topik luas, ringan, mudah dibagikan |
| MOFU | Membangun kepercayaan | Cerita proses, tutorial, bukti kerja nyata |
| BOFU | Mengajak bertindak | Produk digital atau portofolio, tanpa janji hasil |

Rencana harian menjaga tiga konten tidak kembar (topik atau tahap funnel berbeda). Setiap konten punya tujuan dan CTA yang jelas.

## 6. Gaya carousel

**Keputusan Zulnan (2026-11-01): campuran sesuai topik.** Tidak satu template tetap. Pencerita Visual memilih satu template per carousel dari empat pilihan di bawah, sesuai topik dan tahap funnel. Satu carousel memakai satu template dari slide pertama sampai terakhir. Zulnan boleh mengganti pilihan dengan menyebut hurufnya.

Contoh tampilan: artifact "Pilihan Template Carousel" (https://claude.ai/artifact/PHNp692VhrsaWiqzwhusP4), salinan di `prototypes/zuno-carousel-opsi.html`.

| Template | Font | Warna | Cocok untuk |
|---|---|---|---|
| **A Papan Tulis** | Archivo Black, Permanent Marker, Inter | Putih dingin, hitam, stabilo kuning | Tutorial dan cerita proses; terbaca cepat |
| **B Neon Gelap** | Anton, Space Mono, Inter | Hitam, magenta, cyan | TOFU yang perlu menahan scroll; paling mirip gaya video |
| **C Majalah** | Playfair Display, Inter | Krem abu, hitam, merah tua | MOFU dan BOFU: cerita proses, portofolio, studi kasus |
| **D Kartu Layar** | Montserrat, Inter | Gradasi lavender-biru, ungu, kaca | Tutorial langkah demi langkah dan topik tools AI |

Usulan pemilihan awal (boleh diganti Zulnan): TOFU memakai B atau A; MOFU memakai A atau D; BOFU memakai C. Warna akhir tiap template: **[ISI bila ingin diubah]**.

Aturan carousel:
- Ukuran akhir 1080 x 1350 piksel (rasio 4:5).
- Slide 1 adalah hook atau cover; slide terakhir CTA. **Jumlah slide mengikuti topik.**
- Satu poin per slide, kalimat pendek.
- Elemen tetap di semua template: handle akun (**[ISI handle]**) dan penomoran slide.
- Slogan tidak wajib di carousel (aturan slogan berlaku untuk video).
- Render: HTML atau canvas ke PNG per slide. Status "Prompt siap generate" sampai file PNG benar-benar ada.

## 7. Gaya video

Sumber lengkap, preset, dan alat render: `docs/gaya-video.md`.

**Aturan (keputusan Zulnan):**
- Gaya berubah per video dan dipilih lewat **Kartu Gaya** (pemilik: Pencerita Visual).
- **Tiap adegan maksimal 1,5 detik.**
- Megah dan penuh motion: gerak kamera, tipografi besar, transisi tegas.
- Dua mode: **Tanpa Wajah** (motion grafis penuh) atau **Mode Tampil** (Zulnan di kamera). Pada Mode Tampil wajah tidak boleh tertutup.
- Typography mengikuti referensi (font di claude-video-effects: Anton, Archivo Black, Montserrat, Inter, Playfair Display, Instrument Serif, Permanent Marker, Space Mono). Usulan: satu font display dan satu font isi per video.
- **Suara campur sesuai topik:** Mode Tampil memakai rekaman Zulnan; Tanpa Wajah boleh suara AI generik, dicatat bukan suara Zulnan. Dilarang meniru atau mengkloning suara Zulnan.
- **Panjang video mengikuti topik.**
- Slogan setelah hook di setiap video.
- Musik dan aset: asal-usul wajib ditandai; tidak memakai aset berhak cipta tanpa label.

**Preset awal (usulan, belum dirender):** Dentum, Orbit Megah, Glitch Digital, Kartu Layar, Editorial Cepat. Zulnan boleh menambah atau menghapus.

**Referensi dari Zulnan (Pinterest):** kirim sebagai gambar atau tangkapan layar, plus satu kalimat kesan ("neon, cepat, kayak ini"). Agen tidak membuka Pinterest sendiri. Referensi dipakai sebagai arah, bukan untuk meniru karya orang lain. Tanpa referensi, tim memakai gaya terakhir yang disetujui atau bertanya satu kali.

**Alat render video:** pertama dicoba claude-video-effects (Mode Tampil; jalan di komputer Zulnan, butuh ffmpeg dan Python 3.12). Alat Tanpa Wajah (HyperFrames atau Remotion) belum dipilih. Belum ada alat yang diuji.

## 8. Cara kerja tim

- Satu pemilik per output. Agen 2 (Penjaga Merek, Pemeriksa Realitas, Pengumpul Bukti, Pemeriksa Kepatuhan Hukum) punya veto.
- Maksimal 2 putaran revisi, lalu keputusan ke Zulnan.
- Juru Kabar memberi tahu Zulnan **sebelum** kartu ditandai Tidak Lolos.
- Status **Disetujui hanya dari Zulnan.**
- Rantai status: Ide, Draf, Teredit, Lolos QA, Disetujui, Terjadwal, Tayang, Terukur.
- Kartu Konten berisi: ID, tujuan, platform, format, referensi suara, bahan, status, versi, batasan; untuk video ditambah Kartu Gaya.
- Data performa: tidak ada angka karangan. Ukuran "konten menang": **[ISI]**. Tayangan minimal: **[ISI]**.

## 9. Cara memberi perintah

Cukup satu kalimat, contoh:
- "Bikin konten hari ini soal AI buat bantu kerjaan kantor, targetnya pemula."
- "Gue lagi buntu ide. Tim, carikan dari nol."
- Dengan bahan: lampirkan cerita proses, tangkapan layar, atau catatan. Untuk video: sebut mode (Tampil atau Tanpa Wajah) dan lampirkan referensi gaya bila ada.

Tim menyusun rencana tiga konten, Kartu Konten, dan Kartu Gaya, lalu menunggu persetujuan Zulnan sebelum maju.

## 10. Yang masih perlu diisi Zulnan

1. Contoh suara (2 sampai 3 tulisan atau ucapan khas).
2. Handle akun untuk footer carousel.
3. Detail tiap web Nexamind dan hasil nyata yang boleh dibahas.
4. Ukuran "konten menang" dan tayangan minimal.
5. Harga produk (selama kosong tetap placeholder).
6. Satu rekaman asli plus satu preset untuk uji pertama claude-video-effects.
7. Alat render video Tanpa Wajah.
8. Konfirmasi memakai latar SMK Broadcasting di konten.
