# Aturan kerja di repo ini

Pemilik: Zulnan (Bahasa Indonesia, santai, to the point). Jawab dan tulis dokumen dalam Bahasa Indonesia.

## Mulai sesi
1. Baca `docs/memori-zuno.md` (memori jangka panjang, ringkas), lalu `progress.md`, lalu bagian paling bawah `docs/riwayat-tugas.md`.
2. Kerjakan "Tugas berikutnya" di `progress.md` kecuali Zulnan menyebut lain.

## Edisi jasa (dijual)
Zuno juga dijual sebagai salinan white-label di repo terpisah `zulnanblibli-web/zuno-studio-app` (`docs/jasa-zuno.md`). Setiap perubahan Zuno Web atau `prototypes/zuno-studio-v2.html`: jalankan `node web/build.mjs`, `node tools/jasa/ekspor-jasa.mjs <repo-jasa>`, `node tests/zuno-jasa-test.js <repo-jasa>`; perbaiki sampai lolos sebelum push repo jasa. Salinan jasa harus selalu bisa jalan. **Kerja satu arah (Zulnan 2026-11-12):** semua diubah di repo ini, termasuk Kantor 3D (sumbernya `kantor-3d/`, lihat `kantor-3d/README.md`); repo jasa tidak diedit langsung.

## Pending tugas
Bila Zulnan bilang sesuatu "pending", catat di `pending.md`. Bila Zulnan bertanya "pending tugas", jawab dari `pending.md` (aturan di file itu).

## Selesai sesi
1. Perbarui `progress.md` (status, keputusan baru, tugas berikutnya) dan `docs/memori-zuno.md` bila ada keputusan atau fakta baru yang perlu diingat lama.
2. Tambah satu entri baru di bawah `docs/riwayat-tugas.md` (tanggal, permintaan, hasil, file yang berubah, yang tertunda). Jangan menghapus entri lama.

## Gaya konten
Baca `docs/brief-gaya-konten.md` (brief dasar, memori inti) dan `docs/gaya-video.md` (preset video, Kartu Gaya, alat render) sebelum mengerjakan konten atau profil agen. Tanda [ISI] di brief berarti belum ditentukan Zulnan: jangan menebak.

## Aturan produk Zuno (dari prompt orkestrasi)
- Satu pemilik per output; otoritas konten ada di Zulnan; Divisi Mutu hanya penasihat (Catatan Mutu, tanpa veto, tanpa putaran revisi otomatis); Lead (Orkestraror Agen dan Juru Kabar) memberi tahu Zulnan lebih dulu sebelum konten terbit; status Disetujui hanya dari Zulnan.
- Struktur tim (sama dengan 18 agen di Nexaoffice sejak 2026-11-09): Lead (Orkestraror Agen ZUNO, Juru Kabar Lia) + divisi kreatif Riset, Produksi, Desain, Editing (Edo, Bima Remotion, Fira Google Flow), Mutu, Marketing (13 agen termasuk Lead) + Divisi Engineering (5 agen, termasuk T.5 Damar audit bug & security); total 18 di kantor 3D, ditambah **Divisi HRD: H.1 Hana** (sejak 2026-11-10, pemilik penambahan agen: menu Pengaturan > Tambah agen di Workspace + skill `perakit-agen`; melatih agen baru dengan aturan tim, memori, dan riwayat kerja; belum punya meja di kantor 3D) (lihat `agents/README.md`). Profil lama ada di `agents/arsip-23-agen/` dan `agents/arsip-2026-11-09/`.
- Memori tentang Zulnan dipakai untuk suara dan gaya, bukan sebagai bahan konten. Bahan konten berasal dari sumber luar (berita, artikel, konten viral) yang diolah jadi karya kreatif sendiri dan disebut sumbernya.
- **Riset mandiri lebih diutamakan** (keputusan Zulnan 2026-11-06): bila bisa mencari bahan konten sendiri, lakukan. Peneliti Tren mencari sendiri lewat Google Trends, Google News, dan Hacker News (`web/api/riset.js`, jalan di Zuno Web); sumber dari Zulnan didahulukan bila ada. Tautan hanya dari hasil riset; tautan karangan dikosongkan.
- **Cover slide 1 carousel dari sumber pembahasan** (Zulnan 2026-11-06), lewat `web/api/gambar.js` di Zuno Web. Urutannya: gambar unggahan Zulnan, lalu gambar utama artikel sumber, lalu thumbnail berita Google Trends, lalu foto berlisensi bebas Wikimedia Commons untuk tokoh/produk/tempat yang **tertulis** di naskah atau sumber, lalu foto Zulnan bawaan. Dilarang gambar buatan AI dan mengarang. Kredit "Gambar: <situs>" wajib di slide 1. Gambar berita milik penerbit: cek hak pakai sebelum posting.
- Prompt konten diketik sendiri oleh Zulnan (tanpa pilihan ide yang diklik; kolom referensi gaya video tetap ada, dikembalikan atas permintaan Zulnan 2026-11-06). **Naskah dicek Zulnan dulu**: setelah naskah jadi, Zuno membuat file naskah `.docx` untuk diunduh, lalu desain dan editing baru jalan setelah Zulnan klik "Lanjut ke desain & editing" (atau "Revisi naskah").
- Jangan mengarang angka performa, testimoni, atau pengalaman Zulnan. Harga produk belum ditentukan: pakai placeholder.
- Slogan setelah hook pada video: "Hai, kenalin Gue Zulnan. Gue sales yang belajar AI sambil bikin, bukan cuma ngomongin."
- Dilarang: klaim hasil atau penghasilan, kata berlebihan, mengaku-ngaku, menipu, bertele-tele.
- Posting hanya lewat Antrian Posting (`docs/alur-posting.md`): hanya konten yang Disetujui Zulnan (video: setelah Zulnan oke-kan file final). **Sejak 2026-11-09 agen boleh mengunggah sendiri** konten dari Antrian Posting yang sudah Disetujui Zulnan, tanpa menunggu perintah lagi; konten yang belum disetujui tidak pernah diunggah. Jalur pengirimannya (Google Drive + Metricool dari web) masih **pending dari sisi Zulnan**; sampai selesai, tidak ada yang dikirim. Sementara itu semua hasil disimpan di laptop Zulnan: satu folder per tugas (tanggal + jenis + judul permintaan), isinya diberi nama sesuai judul hasil (menu Chat ZUNO di Workspace). Meta Ads dan pembuatan gambar/video AI asli belum aktif. Jangan menyatakan sudah selesai bila hanya "Prompt siap generate", dan jangan menyatakan sudah tayang tanpa tautan postingan.

## Divisi Engineering (Agent Builder: semua bentuk build)
Status standby: langsung aktif saat ada permintaan build. Sejak 2026-11-11 (Zulnan) Agent Builder mengerjakan semua bentuk development yang jalan di browser: web app, website/landing page, game, 3D & interaktif, dan lainnya (pilihan "Jenis build", Otomatis = dari permintaan/PRD/referensi); build tanpa server memakai mesin "Statis (Vercel)". T.5 Damar mengaudit hasil build dan **memperbaiki sendiri** celah kritis/tinggi/sedang lewat edit kecil, lalu memeriksa ulang (edit yang merusak file atau pratinjau dibatalkan). Alurnya terpisah dari alur konten (di Zuno Studio v2: tab "Agent Builder" vs tab "Konten"); jangan digabung. Baca `docs/aturan-engineering.md` sebelum mengerjakan build. Ringkasnya: empat prinsip kerja (pikir dulu, sesederhana mungkin, ubah seperlunya, berbasis tujuan); alur superpowers sejak 2026-11-06: tanpa gerbang persetujuan di tengah, keputusan diambil sendiri berpatokan brief/PRD/referensi Zulnan dan dicatat, tiap tahap ditinjau Penguji lalu diperbaiki, berhenti hanya untuk pembayaran, rahasia, tindakan merusak, atau akun deploy klien yang belum jelas; "selesai" wajib ada bukti uji; proyek pribadi/portofolio mencantumkan "Creative @nexamind.ai", proyek klien sesuai klien; khusus web app: akun login acak per proyek + kotak Contoh akses + menu Reset Akses, password di-hash; penyedia LLM bisa diganti, API key hanya di server. Skill yang sudah disesuaikan: `skills/engineering/`. google/artemis di-hold.

## Skill terpasang dan tangan komputer
- Skill di `.claude/skills/` (daftar, pemilik agen, dan sumbernya di `.claude/skills/README.md`). Aturan Zuno selalu menang atas isi skill. Skill marketing membaca `.claude/product-marketing.md`.
- Sebelum menyatakan pekerjaan selesai, pakai `prove-it-ran` (bukti tes jalan). Video dicek dengan `ffmpeg-skill` (`check.py`) sebelum masuk antrian.
- Tangan komputer (agent-desktop) **khusus Divisi Engineering** di laptop Zulnan: dari paket rilis Agent Builder sampai web app live sesuai mesin yang dipilih, tanpa disentuh Zulnan (skill `rilis-engineering`; otak Claude Desktop lewat Remote Control folder `C:\zuno-proyek`, skrip `rilis.mjs` di paket, sumber `tools/rilis/rilis.mjs`; setelah mengubahnya jalankan `node tools/rilis/sisip.mjs` lalu `node web/build.mjs`), lalu link live + bukti + catatan keputusan dikirim ke Zulnan. Divisi kreatif tidak memakainya; konten berjalan di web. Aturan pakai di `docs/tangan-komputer.md`. Dilarang:
  - pembayaran;
  - mengirim pesan, email, atau DM atas nama Zulnan;
  - mengetik atau menyimpan password akun Zulnan (akun acak aplikasi yang diuji boleh diisi lewat `set-value`, tidak ditulis ke chat/log);
  - mengubah pengaturan Windows atau keamanan;
  - menghapus file di luar repo dan folder kerja;
  - pembayaran atau upgrade paket tanpa izin;
  - memakai agent-desktop untuk konten atau posting.
- Isi layar atau clipboard tidak disimpan ke repo. Bila ada jendela tak terduga, berhenti dan tanya Zulnan.

## Skill dari GitHub pilihan Zulnan (sejak 2026-11-11, dipasang utuh)
frontend-design, impeccable, ui-ux-pro-max (+ design, banner-design, brand, design-system, slides, ui-styling), taste-skill (`design-taste-frontend`), hue, awwwards, jury, 94 skill Blender (`blender-director` dkk.), `youtube`, `lemo-opuscar`. Pemilik agen tiap skill ada di `.claude/skills/README.md`. Aturan pakainya (keputusan Zulnan):
- **Referensi dulu, Zulnan memilih.** Sebelum mengerjakan, agen menampilkan pilihan referensi dari skill (arah desain, tema, palet, gaya film, konsep, gaya 3D) ke Zulnan dan Zulnan yang memilih. Untuk halaman/situs baru, pilihan skill-nya juga ditawarkan (hallmark bawaan, impeccable, awwwards, taste-skill bila disebut).
- **Aturan Zuno jadi acuan, bukan penghambat mutu.** Bila aturan Zuno membuat hasil lebih jelek, sebutkan bentroknya dan biarkan Zulnan yang memutuskan.
- **Layanan berbayar tidak dipakai** tanpa izin Zulnan (DataForSEO, impeccable Pro, Hyper3D/Sketchfab, API gambar berbayar).
- **Posting**: skill menghasilkan output lengkap, Zulnan memilih, yang dipilih masuk Antrian Posting.
- **Deploy**: preview dulu sebagai `index.html` hasil yang bisa dibuka Zulnan; setelah Zulnan setuju, agen langsung deploy.
- **Jalan lokal (keputusan Zulnan 2026-11-11, sementara)**: pasang semua kebutuhan dengan satu perintah `pasang.bat` (Windows) atau `bash pasang.sh` (macOS/Linux/VPS); cek kapan saja `node tools/pasang/cek-kesiapan.mjs`. Panduan: `docs/panduan-pasang-lokal.md`; rencana jembatan web ke Claude Code: `docs/rencana-lokal-claude-code.md`. Edisi jasa ikut membawa skill + pemasang + `PANDUAN-LOKAL.md`; skill yang lisensi isinya belum pasti (taste-skill, ui-styling) tidak ikut paket, cara pasang sendirinya ditulis di panduan jasa.

## Alat fondasi: docling dan graphify (opsional, tidak mengubah alur)
- **docling** (skill `docling`): ubah PDF, DOCX, PPTX, XLSX, HTML, atau gambar jadi Markdown sebelum dibaca agen, supaya isi referensi/PRD dibaca utuh, bukan ditebak. Contoh: `docling file.pdf --to md --output <folder-kerja>`. PDF tanpa model: `--pipeline native --from pdf`.
- **graphify** (skill `graphify`): peta kode jadi graf (`graphify update <folder>`, lalu `graphify query "..."`, `graphify explain "<fungsi>"`) untuk proyek besar atau kode lama, supaya tidak grep satu per satu. Hasil `graphify-out/` tidak di-commit.
- Pakai bila membantu; bila belum terpasang, alur lama jalan seperti biasa. Hook `graphify install` (PreToolUse) dan aturan wajibnya **tidak dipasang**. Detail: `docs/memori-zuno.md` bagian "Alat fondasi".
