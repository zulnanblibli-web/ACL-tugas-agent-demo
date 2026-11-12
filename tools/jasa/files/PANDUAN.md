# Panduan Nexaoffice

Panduan ini untuk pemilik web Nexaoffice. Tidak perlu bisa coding. "Nexaoffice" adalah nama bawaan; setelah kamu mengisi **Pengaturan brand**, nama brand-mu yang tampil di menu, footer, dan judul tab.

## 1. Pilih tempat menjalankan

| Tempat | Cocok untuk | Cara |
|---|---|---|
| **Laptop sendiri** | Mulai cepat, plus Claude Code dengan semua skill | Windows: klik dua kali `pasang.bat`. macOS/Linux: `bash pasang.sh`. Lengkapnya di [PANDUAN-LOKAL.md](PANDUAN-LOKAL.md) |
| **Vercel** (gratis untuk mulai) | Dibuka dari mana saja lewat link `...vercel.app` | Langkah di bawah |
| **VPS sendiri** | Selalu menyala, satu alamat https milikmu | `docs/vps-nexaoffice.md` (skrip `tools/vps/pasang-vps.sh`) |

Tampilan dan cara pakainya sama di ketiganya. Bedanya hanya tempat menyimpan pengaturan server:
- **Vercel**: Settings → Environment Variables (setelah diubah, Redeploy).
- **Laptop dan VPS**: file `.env.local` di folder repo (salin dari `.env.local.example`), lalu jalankan ulang server.

### Pasang di Vercel (sekali saja, sekitar 10 menit)

1. **Akun Vercel.** Buka [vercel.com/signup](https://vercel.com/signup), pilih **Continue with GitHub**. Belum punya GitHub? Buat dulu di [github.com/signup](https://github.com/signup), gratis.
2. **Key AI gratis (Gemini).**
   - Buka [aistudio.google.com/apikey](https://aistudio.google.com/apikey), masuk pakai akun Google.
   - Klik **Create API key**, lalu salin key-nya.
   - Simpan baik-baik. Jangan dibagikan ke siapa pun, termasuk penjual.
3. **Kata sandi web (`ZUNO_ACCESS_KEY`).** Buat sendiri, minimal 16 karakter campuran huruf dan angka, misalnya `kuerina-2026-dapur-77`. Siapa pun yang tahu kata sandi ini bisa memakai web dan kuota AI-mu.
4. **Salin repo (fork).** Buka repo dari penjual di GitHub, klik **Fork** di kanan atas, lalu **Create fork**.
5. **Deploy.**
   - Di [vercel.com/new](https://vercel.com/new), pilih repo hasil fork, lalu klik **Import**.
   - Buka **Environment Variables**. Tambahkan `GEMINI_API_KEY` (key dari langkah 2) dan `ZUNO_ACCESS_KEY` (kata sandi dari langkah 3).
   - Klik **Deploy**. Tunggu sampai muncul "Congratulations".
   - Klik **Continue to Dashboard**, lalu buka link web-mu (`...vercel.app`).

## 2. Pemakaian pertama

1. Buka web-mu (link Vercel, alamat VPS, atau `http://localhost:3000` di laptop). Jendela **Pengaturan brand** terbuka sendiri. Isi:
   - **Nama brand atau pemilik**: wajib. Nama ini dipakai agen di konten dan tampil di menu.
   - **Niche, positioning, audiens, platform**: satu kalimat masing-masing.
   - **Pilar konten**: topik besar, satu per baris.
   - **Gaya bahasa**: misalnya "santai pakai aku/kamu".
   - **Fakta brand**: hanya fakta nyata. Agen dilarang mengarang di luar ini.
   - **Slogan setelah hook video**: boleh kosong.
   - **Kredit aplikasi**: dipakai di hasil build tab Agent Builder (web app, website, game, 3D).
2. Klik **Simpan dan muat ulang**.
3. Klik **Pengaturan** di kanan atas. Di bagian **Sambungan AI**, biarkan pilihan **Server ini**, isi **Kunci akses server** dengan `ZUNO_ACCESS_KEY`, lalu klik **Simpan**. Status **Server** di bawah kantor 3D berubah jadi ONLINE.

Pengaturan brand bisa dibuka lagi kapan saja dari menu atas (**Pengaturan brand**). Di HP, menunya ada di tombol **Menu**.

## 3. Mengenal Workspace

- **Kiri: kantor 3D.** 18 agen bekerja di kantor. Begitu perintahmu jalan, agen yang sedang bertugas pergi ke mejanya.
  - Tema kantor: **Menara Senja**, **Griya Langit**, atau **The Grotto**. Pilihanmu diingat browser.
  - **Gedung** menampilkan bangunan dari luar, **Dalam studio** menampilkan ruang kerja.
  - **Kamera ikut agen**: kamera mengikuti agen yang sedang bekerja.
  - Di bawahnya ada status **Server**, **Sambungan**, **Otak AI**, dan **Status** kerja.
- **Kanan: Kerja dan Chat ZUNO.**
  - **Kerja**: tulis perintah, pilih format (tab **Konten** atau **Agent Builder**), lalu jalankan. **Hasil kerja agen** tampil di bawahnya saat itu juga.
  - **Chat ZUNO**: ZUNO melapor kerja tiap agen dari awal sampai selesai, menjawab pertanyaanmu tentang pekerjaan yang sedang jalan, memberi **Laporan kinerja agen**, dan menunjukkan hasil yang siap kamu review.
- **Karakter agen** (menu atas): galeri 18 karakter agen.

## 4. Cara pakai

**Tab Konten**
0. Pilih **Akun tujuan**. **Personal** = akunmu sendiri (karakter, slogan, foto, dan fakta tentangmu dipakai). Akun lain (niche, misalnya seri animasi) dibuat lewat **Tambah akun niche**: isi nama, niche, dan gayanya. Untuk akun niche, identitas pribadimu otomatis tidak dipakai, dan tipe video dengan karakter/wajahmu dimatikan. Nama akun tercatat di kartu, paket, folder hasil, dan Antrian Posting.
1. Ketik perintahmu sendiri, misalnya "bikin konten tentang cara mulai jualan kue dari rumah". Kosong = tim mencari ide sendiri dari tren terbaru.
2. Boleh tempel sumber bahan (link atau isi berita). Tanpa itu, Peneliti Tren **mencari bahan sendiri** di Google Trends, Google News, dan Hacker News (bisa disetel, lihat bagian 8).
3. Pilih paket (carousel, video, atau dua-duanya), lalu klik **Jalankan**.
4. Setelah naskah jadi, tim berhenti dulu. Klik **Unduh naskah (.docx)** dan cek isinya. Lalu klik **Lanjut ke desain & editing**, atau tulis catatan lalu **Revisi naskah**.
5. Tim melanjutkan desain dan editing:
   - carousel berupa gambar PNG siap unduh;
   - video berupa naskah, storyboard, dan paket render.
6. Baca **Ringkasan Sebelum Terbit**. Lalu klik **Setujui**, atau tulis catatan revisi.
7. Konten yang disetujui masuk **Antrian Posting** beserta caption dan hashtag. Posting otomatis belum aktif di versi ini: unggah sendiri ke platform.

**Tab Agent Builder**
1. Tulis permintaan build (web app, website, game, 3D, atau lainnya), atau unggah PRD (.md). Pilih **Jenis build** dan **Mesin**, atau biarkan Otomatis.
2. Klik **Kirim ke Divisi Engineering**. Tim jalan sendiri: ruang lingkup, desain, kode, dan uji. Tiap tahap diperiksa Penguji lalu diperbaiki otomatis. Damar mengaudit keamanan dan menambal celahnya sendiri. Keputusan tim tercatat di tabel **Catatan keputusan**.
3. Unduh **paket rilis (.zip)**, atau `index.html`, file backend, dan `PANDUAN.md` proyek. Ikuti panduan proyek itu untuk memasangnya. Mau ada yang diubah? Tulis catatan lalu klik **Ubah dengan catatan**.

**Simpan hasil ke laptop**: di Chat ZUNO klik **Pilih folder** (Chrome atau Edge di laptop). Tiap tugas jadi satu folder bertanggal, dan hasil baru tersimpan otomatis. Browser lain mengunduh file .zip.

## 5. Tambah agen

Klik **Pengaturan** → **Tambah agen** → **Tambah agen baru**. Isiannya mengikuti struktur 18 agen tim (peran, tugas, masukan, keluaran, larangan, sampai memori); boleh mulai dari profil agen yang sudah ada. Hana (Divisi HRD) memberi kode dan melatih agen baru dengan aturan tim. Agen tambahan tersimpan di browser itu.

## 6. Pindah perangkat

Pengaturan brand tersimpan di browser. (Agen tambahan juga tersimpan di browser dan belum ikut dipindah lewat Ekspor; buat ulang di perangkat baru bila perlu.)
1. Di perangkat lama: **Pengaturan brand** → **Ekspor (.json)**.
2. Di perangkat baru: **Pengaturan brand** → **Impor (.json)**.
3. Isi kunci akses di **Pengaturan** → **Sambungan AI** sekali di tiap perangkat (API key lokal juga diisi per perangkat).

## 7. Ganti penyedia AI (opsional)

Gemini gratis punya batas harian. Kalau sering muncul "batas pemakaian tercapai", pakai penyedia lain.

### 7a. Di server (Vercel atau `.env.local`)
1. Tambahkan salah satu:

   | Penyedia | Isi variabel | Tempat ambil key |
   |---|---|---|
   | OpenRouter (banyak model, isi saldo) | `OPENROUTER_API_KEY` | [openrouter.ai/keys](https://openrouter.ai/keys) |
   | Claude (Anthropic) | `ANTHROPIC_API_KEY` + `AI_PROVIDER` = `claude` | [console.anthropic.com](https://console.anthropic.com) |
   | OpenAI | `OPENAI_API_KEY` + `AI_PROVIDER` = `openai` | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |

2. Bila lebih dari satu key terisi, tulis penyedia yang dipakai di `AI_PROVIDER`: `gemini`, `openrouter`, `claude`, atau `openai`.
3. Vercel: tab **Deployments** → titik tiga di deploy teratas → **Redeploy**. Laptop/VPS: jalankan ulang server.

### 7b. Tanpa mengubah server: menu Pengaturan
Klik **Pengaturan** → **Sambungan AI**. Ada tiga pilihan:
- **Server ini**: memakai key di server (cara 7a).
- **API key lokal**: pilih penyedia, tempel API key, isi model bila perlu, klik **Tes sambungan** lalu **Simpan**. Key disimpan di browser perangkat itu saja dan dikirim per permintaan; server tidak menyimpannya. Klik **Hapus semua** sebelum meminjamkan perangkat.
- **Server VPS**: bila kamu memasang di VPS sendiri, isi alamat https VPS dan kunci akses VPS.

Kunci akses tetap wajib di semua pilihan.

## 8. Setel riset otomatis (opsional)

Peneliti Tren mencari bahan sendiri dari Google Trends (pencarian yang sedang naik), Google News (berita terbaru), dan Hacker News (diskusi teknologi). Semuanya gratis, tanpa API key. Bawaannya untuk Indonesia. Setel di server (Vercel atau `.env.local`), isi yang perlu saja:

| Variabel | Isi | Contoh |
|---|---|---|
| `RISET_KATA_KUNCI` | Kata kunci niche-mu yang selalu ikut dicari, pisahkan dengan `\|` (maks. 3) | `kue rumahan\|resep viral` |
| `RISET_NEGARA` | Kode negara 2 huruf | `ID`, `MY`, `SG` |
| `RISET_BAHASA` | Bahasa berita | `id`, `ms`, `en` |
| `RISET_SUMBER` | Sumber yang dipakai, pisahkan koma | `trends,news` (tanpa Hacker News) |
| `RISET_HARI_BERITA` | Umur berita maksimal, dalam hari (1-30) | `7` |
| `RISET_HARI_DISKUSI` | Umur diskusi Hacker News, dalam hari (1-60) | `14` |
| `RISET_AKTIF` | `off` untuk mematikan riset web | `off` |
| `RISET_GAMBAR` | `off` bila cover slide 1 tidak boleh memakai gambar dari sumber | `off` |

Lalu Redeploy (Vercel) atau jalankan ulang server (laptop/VPS).

Catatan:
- Tautan sumber selalu dari hasil riset. Tautan yang dikarang AI dikosongkan otomatis. Buka tautannya sebelum memakai isinya sebagai fakta.
- **Cover slide 1 carousel** otomatis diambil dari gambar utama artikel yang jadi bahan naskah. Bila artikel tidak punya gambar, dicari foto asli berlisensi bebas di Wikimedia Commons untuk tokoh, produk, atau tempat yang benar-benar tertulis di naskah atau sumber. Tidak ada gambar buatan AI. Kreditnya ("Gambar: <situs>") tertulis di slide 1. Gambar berita tetap milik penerbitnya: cek hak pakai sebelum posting, atau ganti lewat tombol **Ganti gambar cover**. Gambar cover yang kamu unggah sendiri selalu didahulukan.
- Feed Google News hanya boleh untuk pemakaian pribadi, menurut ketentuan di feed-nya. Pakai untuk riset bahan kontenmu sendiri, jangan dijual ulang sebagai layanan berita.

## 9. Masalah umum

| Tanda | Penyebab | Cara beres |
|---|---|---|
| "Kunci akses ... salah atau belum diisi" | Kata sandi web salah | **Pengaturan** → **Sambungan AI**, isi kunci akses persis seperti `ZUNO_ACCESS_KEY` di server |
| "API key di Pengaturan AI ditolak penyedia" | Key lokal salah, habis, atau model tidak tersedia | **Pengaturan** → periksa key dan nama model → **Tes sambungan** |
| "Server ... belum disetel" | `ZUNO_ACCESS_KEY` belum diisi di server | Isi di Vercel (lalu Redeploy) atau di `.env.local` (lalu jalankan ulang server) |
| "Batas pemakaian tercapai" | Kuota gratis penyedia AI habis | Tunggu besok, atau ganti penyedia (bagian 7) |
| "Saldo penyedia AI habis" | Saldo OpenRouter atau penyedia lain habis | Isi saldo di akun penyedia |
| Status **Otak AI** kosong | Key AI belum diisi atau salah | Cek nama dan isi variabel, lalu Redeploy atau jalankan ulang server |
| Kantor 3D tidak muncul atau patah-patah | Browser tanpa WebGL atau perangkat berat | Pakai Chrome/Edge terbaru; kerja agen tetap jalan walau kantor 3D tidak tampil |
| Agen memakai nama atau fakta yang keliru | Pengaturan brand belum lengkap | Lengkapi **Pengaturan brand**, lalu simpan |
| "Riset web tidak menemukan bahan" | Kata kunci terlalu sempit atau sumber sedang lambat | Isi `RISET_KATA_KUNCI` yang lebih umum, atau jalankan lagi |

## 10. Pembaruan dari penjual
1. Buka repo fork-mu di GitHub.
2. Bila ada tulisan "This branch is X commits behind", klik **Sync fork → Update branch**.
3. Vercel memasang versi baru otomatis dalam 1-2 menit. Di laptop/VPS: `git pull`, lalu jalankan ulang server.

Pengaturan brand dan key-mu tidak hilang saat pembaruan. Versi yang terpasang tertulis di `VERSI.txt`.
