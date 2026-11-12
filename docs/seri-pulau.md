# Akun Pulau: mesin supaya seri jalan terus walau permintaan banyak

Ditulis ulang 2026-11-12 setelah koreksi Zulnan.

**Yang benar:**
- Karakter dan dunia pulau **dibuat Zulnan sendiri** (sedang dibuat).
- Tugas gua: **sistem** supaya akun ini jalan terus saat komentar/permintaan banyak, tanpa Zulnan pusing memilih permintaan. Dari sisi alur cerita, pemilihan permintaan, sampai edit footage.
- Alur besar dari Zulnan: terdampar -> bertahan hidup -> kehidupan di pulau -> kota/negara (ending).
- Akun niche: tanpa identitas Zulnan (menu **Akun tujuan** di Workspace).

Daftar semua akun dan template: `docs/akun-dan-template.md`.

## Prinsip: komentar mengisi cerita, bukan menyetir cerita
Kalau tiap episode harus menunggu Zulnan membaca ratusan komentar lalu memutuskan, seri pasti macet. Jadi ada tiga lapis:

1. **Tulang punggung cerita (tetap, ditulis sekali per musim):** daftar tonggak per musim. Contoh Musim 1: air -> api -> tempat berteduh -> alat -> makanan -> badai pertama -> sinyal minta tolong. Tonggak jalan **dengan atau tanpa komentar**.
2. **Permintaan penonton (mengisi slot di antara tonggak):** dipilih otomatis oleh aturan di bawah.
3. **Zulnan (cuma 2 keputusan):** setujui **rencana mingguan** (sekali klik), lalu setujui **tiap video final** (aturan: Disetujui hanya dari Zulnan).

## Data dunia (satu file, jadi ingatan seri)
`state-pulau.json`, dijaga agen **Penjaga Kontinuitas**:
- hari ke-N, musim, penduduk, bangunan, sumber daya, cuaca/kondisi pulau;
- karakter (punya Zulnan) dan hubungan antarkarakter;
- **pohon kemajuan:** apa yang sudah bisa dibangun dan syaratnya. Contoh: "kapal" butuh alat logam + kayu kering + Musim 3;
- janji cerita yang belum dibayar (misteri, benda yang belum dipakai);
- daftar permintaan yang sudah dipakai, berikut kredit peminta (disamarkan).

Pohon kemajuan ini kuncinya. Permintaan yang belum mungkin **tidak ditolak, tapi dikunci**: "dicatat, terbuka di Musim Kota". Permintaan mustahil berubah jadi janji konten masa depan.

## Alur permintaan (otomatis, tiap minggu)

| Langkah | Apa yang terjadi | Siapa |
|---|---|---|
| 1. Tarik | Komentar video minggu ini dikumpulkan. Sementara ditempel/ekspor manual; otomatis setelah P1 (Metricool/API platform) | Zulnan tempel, nanti otomatis |
| 2. Saring | Buang spam, promosi, SARA, politik praktis, kekerasan berlebihan, cabul, data pribadi. Tiap yang dibuang dicatat alasannya | Analis Komentar |
| 3. Kelompokkan | Permintaan yang mirip digabung ("rumah pohon" = "rumah di atas pohon"). **Dukungan** = jumlah komentar sejenis + like | Analis Komentar |
| 4. Golongkan | Bangunan / makanan & sumber daya / kejadian & bencana / karakter & hewan / aturan & sosial / absurd-lucu / isu aktual | Analis Komentar |
| 5. Cek dunia | Pakai pohon kemajuan + aturan dunia: **Bisa sekarang** / **Terkunci (musim X)** / **Tidak cocok** (alasan) | Penjaga Kontinuitas |
| 6. Beri skor | Dukungan 40% + dampak ke tonggak cerita 25% + variasi golongan (jangan sama 2x berturut) 15% + biaya produksi rendah 10% + kesegaran 10%. **Bobot ini usulan awal [Asumsi]**, disetel dari data | Otomatis |
| 7. Susun minggu | Isi 7 slot (lihat format di bawah) dari skor tertinggi + tonggak cerita | Nara (Strategi) |
| 8. Setujui | Zulnan lihat 1 halaman rencana mingguan: setuju / tukar / coret | Zulnan |

Volume tidak mengubah cara kerja:
- 10 komentar atau 10.000 komentar lewat jalur yang sama.
- Kalau sangat banyak, yang diambil hanya N komentar teratas (urutan "teratas" dari platform) plus pengelompokan. Duplikat justru menambah dukungan, bukan menambah kerja.

## Format episode tetap (supaya banyak permintaan tertangani tanpa produksi berat)

| Kode | Format | Isi | Butuh komentar? | Berat produksi |
|---|---|---|---|---|
| E1 | **Bangun** | 1 permintaan besar dikerjakan, time-lapse | Ya | Sedang |
| E2 | **Kotak Saran** | Montase 4-6 permintaan kecil, masing-masing 3-5 detik | Ya | Ringan (aset kecil) |
| E3 | **Musyawarah** | 2-3 permintaan populer yang bentrok -> penonton pilih, hasilnya episode berikut | Ya | Ringan |
| E4 | **Kejadian** | Tonggak cerita / bencana / kejutan | **Tidak** (penyelamat saat sepi) | Sedang |
| E5 | **Surat untuk Pulau** | Karakter menjawab permintaan absurd/terkunci dengan lucu ("kapal pesiar? paku aja belum punya") + teaser kapan terbuka | Ya, tapi yang ditolak | Ringan |
| E6 | **Rekap** | Keadaan pulau minggu ini: penduduk, bangunan, peta | Tidak | Sangat ringan (pakai ulang shot) |

**Contoh minggu** [Asumsi, disetel dari data]: 2x E1, 1x E2, 1x E3, 1x E4, 1x E5, 1x E6. Tujuh video, kira-kira 10-20 permintaan terjawab, dan hanya 2 video yang berat.

**Saat masih sepi (cold start):**
- E4 dan E6 jalan tanpa komentar.
- E3 bisa memberi pilihan dari tim sendiri.
- **Tidak pernah memakai komentar karangan.**

## Produksi dan edit footage: dirakit, bukan diedit dari nol

**Pustaka aset (sekali buat, dipakai ulang):**
- karakter Zulnan dengan set pose/ekspresi standar (jalan, angkat, kaget, senang, capek, berpikir, menunjuk);
- bangunan modular per era;
- properti;
- latar pulau dalam beberapa keadaan (siang, malam, hujan, badai, musim);
- elemen UI tetap: penghitung hari, penghitung penduduk, kartu komentar.

**Shot template:** tiap episode disusun dari 5-8 potongan baku.
1. Pembuka "Hari ke-N" + gambaran pulau sesuai `state-pulau.json`.
2. Kartu komentar (nama peminta disamarkan).
3. Reaksi karakter.
4. Aksi / time-lapse membangun.
5. Catatan singkat (opsional).
6. Penghitung berubah.
7. Penutup: pertanyaan untuk penonton.

Dengan begitu kerja Bima (E.2) dan Edo (E.1) jadi **menyusun dan mengisi**, bukan mengedit dari nol. Kartu Gaya seri dikunci (palet, font, posisi UI, suara), jadi tiap episode konsisten.

**Produksi per minggu (batch):**
- Satu sesi menghasilkan 7 episode dari rencana yang disetujui.
- Semuanya masuk Preview.
- Zulnan setujui satu per satu, lalu masuk Antrian Posting akun Pulau.

**Mesin render tergantung bentuk karakter buatan Zulnan.** Gua tidak menebak, ini yang perlu lu jawab:

| Bentuk karakter | Mesin | Catatan |
|---|---|---|
| Gambar 2D berlapis (PNG/SVG per bagian tubuh) | Remotion (kode, lokal) | Paling murah dan konsisten |
| Model 3D (GLB/Blender) | three.js atau Blender (skill Blender ada) | Konsisten, render lebih berat |
| Dibuat generator video AI | Google Flow / lainnya (Fira E.3) | Paling hidup, tapi berbayar dan wajah/bentuk bisa berubah-ubah antar episode |

## Agen yang dipakai
- **Baru:** Analis Komentar & Komunitas (langkah 1-4), Penjaga Kontinuitas (langkah 5 + `state-pulau.json`).
- **Sudah ada:**
  - Nara (rencana mingguan);
  - Dika + Vino (naskah dan retensi);
  - Sari (Kartu Gaya seri);
  - Bima + Edo (rakit shot dan render);
  - Tara (cek aturan dunia dan keamanan konten);
  - Maya (paket posting).
- Penambahan agen lewat Hana (menu Tambah agen).

## Yang dibangun di Nexaoffice untuk ini (jadi produk "template seri komunitas")
1. **Papan Permintaan:** tempel komentar, lalu keluar tabel kelompok + dukungan + status (bisa / terkunci / tidak cocok) + skor.
2. **Data dunia:** editor `state-pulau.json` + pohon kemajuan.
3. **Perencana mingguan:** 7 slot + tombol Setujui.
4. **Shot template** di Remotion (atau mesin lain sesuai karakter).
5. **Kredit peminta otomatis** (disamarkan).

Semua tidak terikat "pulau". Bila diganti dunianya (kos, warung, kapal), template yang sama jalan. Itu yang membuatnya bisa dijual.

## Pertanyaan untuk Zulnan
1. Karakter lu nanti bentuknya apa: 2D berlapis, 3D, atau dari generator video AI?
2. Platform pertama: TikTok, Instagram, atau YouTube Shorts? (Menentukan cara tarik komentar.)
3. Nama akun dan nama pulau: [ISI].
