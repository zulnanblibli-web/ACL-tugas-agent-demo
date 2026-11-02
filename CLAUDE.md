# Aturan kerja di repo ini

Pemilik: Zulnan (Bahasa Indonesia, santai, to the point). Jawab dan tulis dokumen dalam Bahasa Indonesia.

## Mulai sesi
1. Baca `progress.md` lalu bagian paling bawah `docs/riwayat-tugas.md`.
2. Kerjakan "Tugas berikutnya" di `progress.md` kecuali Zulnan menyebut lain.

## Selesai sesi
1. Perbarui `progress.md` (status, keputusan baru, tugas berikutnya).
2. Tambah satu entri baru di bawah `docs/riwayat-tugas.md` (tanggal, permintaan, hasil, file yang berubah, yang tertunda). Jangan menghapus entri lama.

## Gaya konten
Baca `docs/brief-gaya-konten.md` (brief dasar, memori inti) dan `docs/gaya-video.md` (preset video, Kartu Gaya, alat render) sebelum mengerjakan konten atau profil agen. Tanda [ISI] di brief berarti belum ditentukan Zulnan: jangan menebak.

## Aturan produk Zuno (dari prompt orkestrasi)
- Satu pemilik per output; otoritas konten ada di Zulnan; Divisi Mutu hanya penasihat (Catatan Mutu, tanpa veto, tanpa putaran revisi otomatis); Lead (Orkestraror Agen dan Juru Kabar) memberi tahu Zulnan lebih dulu sebelum konten terbit; status Disetujui hanya dari Zulnan.
- Struktur tim: Lead (Orkestraror Agen, Juru Kabar) + divisi kreatif Riset, Produksi, Desain, Editing, Mutu, Marketing (14 agen) + Divisi Engineering (4 agen); total 18 (lihat `agents/README.md`). Profil lama ada di `agents/arsip-23-agen/`.
- Memori tentang Zulnan dipakai untuk suara dan gaya, bukan sebagai bahan konten. Bahan konten berasal dari sumber luar (berita, artikel, konten viral) yang diolah jadi karya kreatif sendiri dan disebut sumbernya.
- Jangan mengarang angka performa, testimoni, atau pengalaman Zulnan. Harga produk belum ditentukan: pakai placeholder.
- Slogan setelah hook pada video: "Hai, kenalin Gue Zulnan. Gue sales yang belajar AI sambil bikin, bukan cuma ngomongin."
- Dilarang: klaim hasil atau penghasilan, kata berlebihan, mengaku-ngaku, menipu, bertele-tele.
- Posting, Meta Ads, dan pembuatan gambar/video asli belum aktif. Jangan menyatakan sudah selesai bila hanya "Prompt siap generate".

## Divisi Engineering (build web app)
Status standby: langsung aktif saat ada permintaan build. Alurnya terpisah dari alur konten (di Zuno Studio v2: tab "Build App" vs tab "Konten"); jangan digabung. Baca `docs/aturan-engineering.md` sebelum mengerjakan build. Ringkasnya: empat prinsip kerja (pikir dulu, sesederhana mungkin, ubah seperlunya, berbasis tujuan); tiga gerbang persetujuan Zulnan (ruang lingkup, tampilan, hasil uji); "selesai" wajib ada bukti uji; proyek pribadi/portofolio mencantumkan "Creative @nexamind.ai", proyek klien sesuai klien; akun login acak per proyek + kotak Contoh akses + menu Reset Akses; password di-hash; penyedia LLM bisa diganti, API key hanya di server. Skill yang sudah disesuaikan: `skills/engineering/`. google/artemis di-hold.
