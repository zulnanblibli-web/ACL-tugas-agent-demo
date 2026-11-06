# Aturan kerja di repo ini

Pemilik: Zulnan (Bahasa Indonesia, santai, to the point). Jawab dan tulis dokumen dalam Bahasa Indonesia.

## Mulai sesi
1. Baca `docs/memori-zuno.md` (memori jangka panjang, ringkas), lalu `progress.md`, lalu bagian paling bawah `docs/riwayat-tugas.md`.
2. Kerjakan "Tugas berikutnya" di `progress.md` kecuali Zulnan menyebut lain.

## Edisi jasa (dijual)
Zuno juga dijual sebagai salinan white-label di repo terpisah `zulnanblibli-web/zuno-studio-app` (`docs/jasa-zuno.md`). Setiap perubahan Zuno Web atau `prototypes/zuno-studio-v2.html`: jalankan `node web/build.mjs`, `node tools/jasa/ekspor-jasa.mjs <repo-jasa>`, `node tests/zuno-jasa-test.js <repo-jasa>`; perbaiki sampai lolos sebelum push repo jasa. Salinan jasa harus selalu bisa jalan.

## Pending tugas
Bila Zulnan bilang sesuatu "pending", catat di `pending.md`. Bila Zulnan bertanya "pending tugas", jawab dari `pending.md` (aturan di file itu).

## Selesai sesi
1. Perbarui `progress.md` (status, keputusan baru, tugas berikutnya) dan `docs/memori-zuno.md` bila ada keputusan atau fakta baru yang perlu diingat lama.
2. Tambah satu entri baru di bawah `docs/riwayat-tugas.md` (tanggal, permintaan, hasil, file yang berubah, yang tertunda). Jangan menghapus entri lama.

## Gaya konten
Baca `docs/brief-gaya-konten.md` (brief dasar, memori inti) dan `docs/gaya-video.md` (preset video, Kartu Gaya, alat render) sebelum mengerjakan konten atau profil agen. Tanda [ISI] di brief berarti belum ditentukan Zulnan: jangan menebak.

## Aturan produk Zuno (dari prompt orkestrasi)
- Satu pemilik per output; otoritas konten ada di Zulnan; Divisi Mutu hanya penasihat (Catatan Mutu, tanpa veto, tanpa putaran revisi otomatis); Lead (Orkestraror Agen dan Juru Kabar) memberi tahu Zulnan lebih dulu sebelum konten terbit; status Disetujui hanya dari Zulnan.
- Struktur tim: Lead (Orkestraror Agen, Juru Kabar) + divisi kreatif Riset, Produksi, Desain, Editing, Mutu, Marketing (14 agen) + Divisi Engineering (4 agen); total 18 (lihat `agents/README.md`). Profil lama ada di `agents/arsip-23-agen/`.
- Memori tentang Zulnan dipakai untuk suara dan gaya, bukan sebagai bahan konten. Bahan konten berasal dari sumber luar (berita, artikel, konten viral) yang diolah jadi karya kreatif sendiri dan disebut sumbernya.
- **Riset mandiri lebih diutamakan** (keputusan Zulnan 2026-11-06): bila bisa mencari bahan konten sendiri, lakukan. Peneliti Tren mencari sendiri lewat Google Trends, Google News, dan Hacker News (`web/api/riset.js`, jalan di Zuno Web); sumber dari Zulnan didahulukan bila ada. Tautan hanya dari hasil riset; tautan karangan dikosongkan.
- Prompt konten diketik sendiri oleh Zulnan (tanpa pilihan ide yang diklik, tanpa kolom referensi gaya). **Naskah dicek Zulnan dulu**: setelah naskah jadi, Zuno membuat file naskah `.docx` untuk diunduh, lalu desain dan editing baru jalan setelah Zulnan klik "Lanjut ke desain & editing" (atau "Revisi naskah").
- Jangan mengarang angka performa, testimoni, atau pengalaman Zulnan. Harga produk belum ditentukan: pakai placeholder.
- Slogan setelah hook pada video: "Hai, kenalin Gue Zulnan. Gue sales yang belajar AI sambil bikin, bukan cuma ngomongin."
- Dilarang: klaim hasil atau penghasilan, kata berlebihan, mengaku-ngaku, menipu, bertele-tele.
- Posting hanya lewat Antrian Posting (`docs/alur-posting.md`): hanya konten yang Disetujui Zulnan (video: setelah Zulnan oke-kan file final). Pengiriman ke Metricool dari web masih **pending** (ditahan Zulnan); sampai dibuka, tidak ada yang dikirim. Meta Ads dan pembuatan gambar/video AI asli belum aktif. Jangan menyatakan sudah selesai bila hanya "Prompt siap generate", dan jangan menyatakan sudah tayang tanpa tautan postingan.

## Divisi Engineering (build web app)
Status standby: langsung aktif saat ada permintaan build. Alurnya terpisah dari alur konten (di Zuno Studio v2: tab "Build App" vs tab "Konten"); jangan digabung. Baca `docs/aturan-engineering.md` sebelum mengerjakan build. Ringkasnya: empat prinsip kerja (pikir dulu, sesederhana mungkin, ubah seperlunya, berbasis tujuan); alur superpowers sejak 2026-11-06: tanpa gerbang persetujuan di tengah, keputusan diambil sendiri berpatokan brief/PRD/referensi Zulnan dan dicatat, tiap tahap ditinjau Penguji lalu diperbaiki, berhenti hanya untuk pembayaran, rahasia, tindakan merusak, atau akun deploy klien yang belum jelas; "selesai" wajib ada bukti uji; proyek pribadi/portofolio mencantumkan "Creative @nexamind.ai", proyek klien sesuai klien; akun login acak per proyek + kotak Contoh akses + menu Reset Akses; password di-hash; penyedia LLM bisa diganti, API key hanya di server. Skill yang sudah disesuaikan: `skills/engineering/`. google/artemis di-hold.

## Skill terpasang dan tangan komputer
- Skill di `.claude/skills/` (daftar, pemilik agen, dan sumbernya di `.claude/skills/README.md`). Aturan Zuno selalu menang atas isi skill. Skill marketing membaca `.claude/product-marketing.md`.
- Sebelum menyatakan pekerjaan selesai, pakai `prove-it-ran` (bukti tes jalan). Video dicek dengan `ffmpeg-skill` (`check.py`) sebelum masuk antrian.
- Tangan komputer (agent-desktop) **khusus Divisi Engineering** di laptop Zulnan: dari paket rilis Build App sampai web app live (skill `rilis-engineering`), lalu link live + bukti + catatan keputusan dikirim ke Zulnan. Divisi kreatif tidak memakainya; konten berjalan di web. Aturan pakai di `docs/tangan-komputer.md`. Dilarang:
  - pembayaran;
  - mengirim pesan, email, atau DM atas nama Zulnan;
  - mengetik atau menyimpan password;
  - mengubah pengaturan Windows atau keamanan;
  - menghapus file di luar repo dan folder kerja;
  - pembayaran atau upgrade paket tanpa izin;
  - memakai agent-desktop untuk konten atau posting.
- Isi layar atau clipboard tidak disimpan ke repo. Bila ada jendela tak terduga, berhenti dan tanya Zulnan.
