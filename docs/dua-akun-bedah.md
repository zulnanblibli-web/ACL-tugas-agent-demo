# Aturan baru: dua akun niche bedah (Zulnan 2026-11-13)

Menggantikan rencana "Meja Bedah" (satu akun, seri F + T). Jadinya dua akun terpisah:

| Akun | Isi | Referensi gaya |
|---|---|---|
| **@faktadibedah** | **Fakta harian dan fakta umum yang orang belum tahu**, seperti referensi (koreksi Zulnan 2026-11-13) | Akun TikTok **@kitabedah.idn** (Kita Bedah • Anatomi Produk) |
| **@teknikdibedah** | **Mesin apa pun dan pembangunan** (bangunan, jembatan, konstruksi) dibedah di sini | Gaya bedah teknik dari skill **lemo-opuscar** (Exploded Teardown dan sejenisnya) |

Keduanya akun niche: tanpa identitas Zulnan, suara AI, 9:16, durasi mengikuti naskah Zulnan. Aturan topik korban/penyakit tetap berlaku untuk @faktadibedah: tanpa foto jenazah/luka; sumber medis resmi (WHO, Kemenkes, jurnal); caption "Bukan nasihat medis"; tidak memakai pasien asli yang bisa dikenali.

**Akun Pulau dan Akun Stickman tetap ada**, dikerjakan nanti (jawaban Zulnan 2026-11-13).

## Referensi akun 1: Kita Bedah (dibaca 2026-11-13)

[Fakta, dari halaman TikTok dan YouTube @Kitabedah]
- **Nama:** "Kita Bedah • Anatomi Produk".
- **Bio:** "Bukan sulap, tapi fisika & desain." Bio itu juga menyebut mereka menjual produk + panduan membuat animasi semacam ini.
- **Angka:**
  - TikTok: 161 rb follower, 3,1 jt like, 216 video;
  - YouTube: 36,4 rb subscriber, 218 video.
- **Topik** (judul Shorts):
  - mitos vs fakta sehari-hari: AC mobil, rem ABS, busi iridium, kulkas saat mati lampu, uang palsu, tagihan PDAM, cicilan 0%;
  - kesehatan: rokok, perokok pasif, masker N95, vape;
  - mesin/teknik: mobil listrik, las bawah air, tes DNA forensik;
  - perbandingan harga: jam Rp500 rb vs Rp44 jt, TWS murah vs mahal.
- **Penonton per video:** ribuan sampai 429 rb ("Mobil listrik vs mobil bensin, mana yang lebih hemat?").

**Gaya visual** (dilihat dari 12 thumbnail):
1. **Render 3D yang terasa nyata.** Benda asli dengan material dan tekstur (jam tangan dengan mesin terlihat, kompresor AC, sel baterai, serat masker di bawah mikroskop). Ada orang dengan wajah dan baju (pengendara motor berhelm, penumpang bus). Lingkungannya hidup: jalan, rumah dari udara, pohon, halte.
2. **Pencahayaan studio lembut:** bayangan halus, ambient occlusion, latar blur (kedalaman fokus), warna hangat.
3. **Tembus pandang:** badan manusia oranye transparan dengan jantung terlihat; potongan mesin; sirkuit baterai.
4. **Teks di layar:**
   - judul kecil di kiri atas, satu kata berwarna (contoh "Kompresor **ikut berhenti**");
   - subtitle per kata dengan sorotan kuning di kata kunci, di tengah bawah;
   - label kecil seperti chip dengan teks mono;
   - tag "ILUSTRASI";
   - lencana logo kecil di kanan atas.
5. **Satu ide per video,** dijawab dengan angka bersumber (contoh "hemat 1,6%", "denda paling banyak Rp750 ribu (UU LLAJ)").

**Yang tidak boleh ditiru:**
- nama, logo/lencana, dan tata letak persis mereka;
- video atau aset mereka.

Kita ambil **pendekatannya** (3D nyata + tembus pandang + subtitle per kata), lalu identitas @faktadibedah dibuat sendiri.

## Kenapa versi kita sebelumnya kerasa "biasa"

| Kita Bedah | Versi gua (2026-11-13) |
|---|---|
| Model 3D asli bertekstur | Bangun dasar (kapsul, kotak) dari kode |
| Orang dengan wajah, baju, gerak alami | Manekin tanpa wajah, gerak rumus sinus |
| Cahaya lembut, bayangan, latar blur | Cahaya datar, tanpa bayangan, tanpa efek kamera |
| Subtitle per kata + sorotan kata kunci | Subtitle per kalimat |
| Lingkungan penuh detail | Lingkungan kosong |

Kesimpulan: masalahnya ada di **aset + render**, bukan di alur ceritanya. Alur "adegan -> tembus -> bedah" tetap dipakai, karena Kita Bedah juga begitu.

## Cara mencapai mutu itu (usulan, belum diputuskan)

**@teknikdibedah:** pakai **skill lemo-opuscar langsung**. Sesuai lisensinya, film yang dibuat untuk akun sendiri boleh dimonetisasi. Mesinnya bisa render teardown 3D dengan cahaya studio, dan mutunya jauh di atas versi gua (lihat poster demo opuscar). Catatan untuk produk Nexaoffice tetap berlaku: panduan opuscar tidak boleh ikut dijual.

**@faktadibedah:** mutu setara Kita Bedah butuh salah satu dari:

| Jalur | Isi | Syarat |
|---|---|---|
| A | **Blender** + aset gratis berkualitas: model/HDRI/tekstur Poly Haven CC0, karakter berlisensi bebas. Render di laptop Zulnan | Laptop dengan GPU, render lebih lama, gratis. Skill Blender sudah terpasang |
| B | **Generator video/gambar AI** untuk adegan orang dan suasana, digabung dengan 3D/diagram untuk bagian bedah | Berbayar (izin Zulnan), wajib label AI, tidak untuk diagram medis |
| C | **Naikkan mesin three.js** (model glTF CC0, HDRI, bayangan, efek kamera, subtitle per kata) | Gratis, jalan di sini; hasil naik, tapi kemungkinan masih di bawah Blender |

## Jawaban Zulnan (2026-11-13) dan akibatnya
1. **Pulau + Stickman:** tetap ada, dikerjakan nanti.
2. **Laptop:** Lenovo IdeaPad, Intel Core i3-1215U (generasi 12).
   - Grafisnya bawaan prosesor (Intel UHD), **tanpa GPU terpisah**.
   - Akibatnya, Blender dengan render realistis (Cycles) akan sangat lambat untuk video 30 detik. [Asumsi berdasarkan kelas prosesor; belum diuji]
   - Jalur A (Blender) tidak dipakai sebagai jalur utama.
3. **Budget AI:** rencananya pakai API key Claude.
   - [Fakta] Claude menghasilkan teks dan kode, **tidak menghasilkan gambar atau video**.
   - Jadi Claude dipakai untuk naskah dan untuk menulis kode adegan 3D yang dirender mesin. Gambar/video AI (jalur B) tidak masuk rencana.

**Jalur yang dipakai:** render 3D dari kode (jalan di laptop i3 lewat browser, atau di sesi cloud). Mutunya dinaikkan dengan:
- model 3D gratis berlisensi bebas (CC0);
- cahaya HDRI;
- tekstur;
- bayangan dan efek kamera;
- subtitle per kata.

Untuk @teknikdibedah: skill lemo-opuscar.

## Pertanyaan lama (sudah dijawab)
1. "Cuma 2 niche" berarti Akun Pulau dan Akun Stickman **dihentikan**, atau tetap ada tapi belum dikerjakan?
2. Laptop lu punya GPU (NVIDIA/AMD)? Ini menentukan bisa pakai Blender (jalur A) atau tidak.
3. Boleh keluar biaya untuk AI video/gambar (jalur B)? Kalau boleh, kira-kira berapa per bulan?
