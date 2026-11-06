# Template carousel Zuno (satu-satunya)

Keputusan Zulnan 2026-11-03: carousel Zuno memakai **satu template saja**, dari referensi navy-biru yang Zulnan kirim. Template lama A Papan Tulis, B Neon Gelap, C Majalah, dan D Kartu Layar dihentikan (arsip: `prototypes/arsip/zuno-carousel-opsi.html`). Hasil keluaran selalu satu bentuk ini; yang menyesuaikan topik hanya isinya.

## Token tampilan
- Warna: latar `#0B0F1A` ke `#0A1226`, panel `#111827`, biru `#1677FF`, aksen teks `#3EA6FF`, teks `#F5F7FA`, teks redup `#B9C2D3`.
- Font: **Poppins** ExtraBold untuk judul dan label, **Inter** untuk isi (opsi di referensi: Poppins atau Manrope untuk judul; Inter atau DM Sans untuk isi).
- Ukuran 1080 x 1350. Judul huruf kapital dua baris (putih lalu biru), garis pendek di bawah judul. Label kecil beraksen di atas judul. Kartu kaca bersudut membulat. Dua lengkung biru bercahaya di pojok kanan atas dan kiri bawah. Footer: garis tipis dan nomor slide dalam pill.

## Lima tipe slide
| Tipe | Isi | Kapan dipakai |
|---|---|---|
| cover | judul, subjudul, tombol "Swipe untuk lanjut", foto Zulnan | slide 1 (hook), selalu |
| poin | 2-3 kartu bernomor (judul + 1 kalimat) | langkah, daftar, tips |
| fakta | angka besar + keterangan, 0-2 baris, **baris Sumber wajib** | hanya bila ada angka nyata (bank fakta Zulnan atau sumber riset) |
| alasan | kutipan/kalimat kunci + 2-3 butir | penjelasan, twist, kenapa penting |
| cta | 3 centang + tombol | slide terakhir, selalu |

Kreator Konten (P.1) memilih tipe tiap slide sesuai isi dan mengisi hanya kolom tipenya. Pencerita Visual (D.1) hanya menulis label kecil di atas judul. Jumlah slide mengikuti topik (6-9).

## Batas kata (dipaksa kode, `CAR_LIM` di `prototypes/zuno-studio-v2.html`)
Judul 5 kata (cover 8), subjudul 14, label 3, judul poin 6, isi poin 12, keterangan angka 8, label baris 3, isi baris 7, kutipan 14, butir 6, centang 6, tombol 5. Teks lebih panjang dipotong otomatis dan dicatat di bagian "Catatan tata letak" paket .md, supaya slide tidak ramai.

## Aturan isi
- Satu ide per slide. Tidak ada angka, statistik, atau testimoni karangan: contoh "78%" di gambar referensi hanya pengisi dan tidak dipakai.
- Handle akun belum ditentukan ([ISI]); tidak ditampilkan sampai diisi.
- Maskot tidak dipakai di carousel.

## Gambar cover per topik (input)
Di layar perintah ada kolom **"Gambar cover carousel (slide 1)"**: unggah foto Zulnan atau gambar yang sesuai topik (JPG, PNG, WebP; maks. 25 MB; otomatis diperkecil ke sisi terpanjang 1600 px). Setelah hasil keluar, tombol **"Ganti gambar cover (slide 1)"** merender ulang hanya slide 1 dengan gambar lain. Kosong berarti memakai foto Zulnan bawaan (versi web) atau cover teks saja. Tata letak otomatis: gambar potret (tinggi minimal 1,1 kali lebar) ditaruh di kanan bawah dengan tepi kiri dan atas memudar; gambar lanskap atau persegi tampil sebagai kartu bersudut membulat di bawah judul. Gambar dengan latar polos atau sudah dipotong paling rapi.

## Gambar cover dari sumber pembahasan (Zuno Web, 2026-11-06)
Bila Zulnan tidak mengunggah gambar cover, Perender mengambil gambar dari sumber yang jadi bahan naskah kartu itu (`sumber_utama` dari Ahli Strategi). Urutannya:
1. gambar utama artikel (og:image; tautan Google News dibuka dulu ke artikel asli);
2. thumbnail berita dari Google Trends;
3. foto berlisensi bebas Wikimedia Commons untuk tokoh, produk, perusahaan, atau tempat (`gambar_cari`). Hanya dicari bila nama itu benar-benar tertulis di naskah atau sumber;
4. foto Zulnan bawaan.

Aturannya:
- Tidak ada gambar buatan AI.
- Gambar lebih kecil dari 200 px dilewati.
- **Tata letak:** gambar memenuhi seluruh slide, lalu label, judul, dan subjudul ditimpa di atasnya.
  - Posisi tulisan (atas, tengah, atau bawah) dipilih otomatis di bagian gambar yang paling sedikit detailnya, supaya objek utama tidak tertutup.
  - Bagian itu diberi gradasi gelap supaya tulisan terbaca.
  - Tombol "Swipe untuk lanjut" di kiri bawah.
  - Kredit "Gambar: <situs atau Wikimedia Commons, pembuat (lisensi)>" kecil di kanan bawah.
- Paket .md mencatat asal gambar dan "cek hak pakai sebelum posting".
- Endpoint: `web/api/gambar.js`. `RISET_GAMBAR=off` mematikan fitur ini.
- Di preview claude.ai fitur ini tidak jalan, karena tidak ada akses web.

## Foto cover bawaan
`web/assets/foto-zulnan.webp` (RGBA, tepi kiri dan atas memudar ke latar). Dimuat otomatis oleh versi web dari `/assets/foto-zulnan.webp`; di preview claude.ai (tanpa folder assets) cover tampil tanpa foto. **Resolusi masih rendah** karena diambil dari gambar referensi (sekitar 283x348 px, diperbesar 2,4 kali). Ganti dengan foto asli resolusi tinggi (latar polos atau sudah dipotong), lalu simpan sebagai file yang sama.

## Kode
- Renderer di app: `drawSlide` dan `normSlide` di `prototypes/zuno-studio-v2.html` (canvas, tanpa dependensi). Setelah berubah jalankan `node web/build.mjs`.
- Prototipe renderer sisi server (HTML ke PNG lewat Playwright, untuk worker render nanti): `prototypes/carousel-template/` (`render.cjs`, `spec.json`). Butuh font Poppins dan Inter terpasang.
