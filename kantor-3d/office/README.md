# Kantor ZUNO 3D

Halaman: `kantor.html`, ditautkan dari hero Studio. Divisi Konten dan Engineering tidak dijalankan oleh kantor ini. Seluruh indikator merupakan preview visual; tidak ada status job atau progress backend yang dibuat-buat.

## Keputusan desain (2026-11-09)

Permintaan terbaru pengguna mengubah arah grotto dalam CODEX_TASK.md menjadi kantor terbuka sesuai tiga gambar: lantai kantor isometrik, meja meeting U, karakter voxel. Karena itu gua, stalaktit dan karakter humanoid hitam dari dokumen lama tidak diterapkan. Nama dan fungsi mengikuti `AGENTS-18.md` pada repo ini, bukan registry 18 agen lama dari repo demo. Tidak tersedia ZIP prototipe atau poster individu yang disebut dokumen; scene dibangun dari sumber baru dan referensi yang benar-benar tersedia.

- Lantai 01: Studio Konten, Engineering, Meeting, Perpustakaan.
- Lantai 02: Rest Room, Game Room, Tempat Curhat, kantor ZUNO (Lead), dan kantor Zulnan (Owner). Mushola terpisah berada di lantai 01.
- Lantai 03: Kolam Renang, Balkon Kopi.
- Lantai diisolasi saat agen/ruangan dipilih untuk menghindari halangan slab atas. Tampilan Semua adalah cutaway bangunan bertingkat.
- Orbit, zoom, reset, putar otomatis, pencarian, klik karakter, daftar keyboard dan fallback WebGL tersedia.

## Sumber dan aset

`data.js` adalah registry visual 18 identitas; perannya mengikuti AGENTS-18.md. Penampilan adalah rancangan baru: pakaian, rambut, warna kulit, sepatu dan maksimal satu aksesori pembeda. Tidak mengaku mempertahankan detail poster yang tidak tersedia.

`character.js` membangun mesh voxel utuh depan/samping/belakang. `tools/export-agents.mjs` menghasilkan **18 GLB nyata**, masing-masing dengan mesh dan animasi quaternion Idle; runtime memuatnya secara progresif. PNG hanya thumbnail daftar, bukan pengganti model 3D. Geometri prosedural dipakai jika sebuah GLB gagal dimuat.

`scene.js`: arsitektur, furnitur dan vegetasi prosedural. Kayu, batu dan tile menggunakan tekstur prosedural lokal. MeshStandard/Physical materials, environment map RoomEnvironment, pencahayaan fisik dan shadow map dipakai. Tidak ada model berbayar, aset proprietari, gambar referensi yang disalin, atau CDN runtime. Three.js (MIT) dibundel lokal.

**Batas visual:** ini archviz bergaya miniatur dengan karakter voxel, bukan render fotoreal final. Tumbuhan, air, kain dan buku disederhanakan. Air tidak memakai simulasi fluida/refraction penuh. Tidak ada baked lightmap, scan PBR batu, atau klaim model karakter Blender hasil seniman.

## Menjalankan

Node >=20, Python3 untuk server statis.

```
npm ci --cache /workspace/.npm-cache
npm run build:office
npm run serve:office
```

Buka `/kantor.html` dari server. Endpoint AI Studio memerlukan runtime backend terpisah dan key yang sah; server Python khusus QA kantor statis, bukan server API.

Build menjalankan exporter GLB dan esbuild. Bundle dan aset disimpan agar host statis/Vercel bisa langsung menyajikannya. Tidak perlu build server produksi untuk perubahan Studio lain.

## QA

```
CHROMIUM_PATH=/usr/bin/chromium npm run test:office
node tools/capture-office.cjs
```

Tes membutuhkan server port 4173 berjalan. Playwright dipin sebagai dev dependency. Di mesin tanpa Chromium sistem: `npx playwright install --with-deps chromium`, lalu isi CHROMIUM_PATH dengan executable browser terpasang. Skrip capture memperbarui thumbnail 18 karakter dari mesh sebenarnya.

Tes memeriksa tiga lantai + Semua, dua belas ruangan, seluruh 18 pemilihan agen dari teras, posisi proyeksi kamera, pencarian, kontrol mouse, fallback WebGL, isi GLB dan animasi, tidak ada request AI, serta viewport mobile. Screenshot dan pengukuran di `artifacts/office/`; gambar ini baseline awal untuk review visual, bukan klaim perbandingan regresi pixel otomatis. Screenshot bukan bukti semua permukaan bebas clipping dari setiap sudut. Gesture pinch perlu uji perangkat sentuh nyata; OrbitControls menyediakan dukungannya.

Cloud Chromium memakai SwiftShader (software rendering), bukan GPU laptop. Lihat performance.json dan test.log untuk angka hasil run. Kualitas Ringan mematikan shadow map dan membatasi pixel ratio ke 1. Target 30 FPS pada laptop kelas menengah memerlukan validasi GPU fisik; belum dibuktikan di cloud ini.

Tidak ada deploy/push/PR remote yang dilakukan. Branch lokal `feat/kantor-3d-voxel` disiapkan untuk review.

## Preview HTML mandiri

`npm run build:preview` menghasilkan `preview/zuno-kantor-preview.html` (~2,9 MB). CSS, JavaScript, 18 GLB, thumbnail dan galeri karakter ditanam langsung. Tidak membutuhkan CDN, npm atau server API untuk preview. Tautan Studio diganti label preview mandiri supaya tidak mengarah ke backend yang tidak tersedia. `npm run test:preview` memeriksa 18 GLB, pemilihan lantai/agen, galeri dan nol request jaringan eksternal. Pengujian memakai HTML inline di Chromium karena kebijakan browser cloud menolak navigasi file://; pembukaan file:// pada komputer pengguna belum diuji secara langsung.


## Nexa Office / Nexa Studio — revisi fasad dan ruang eksekutif

- Tampilan awal adalah **Nexa Office**, bangunan tertutup dengan curtain wall kaca reflektif gelap. `MeshPhysicalMaterial` fasad memakai `transparent:false`, `opacity:1`, `transmission:0`. Atap dan slab juga opak. Interior disembunyikan pada tampilan eksterior sehingga tidak terlihat dari luar.
- Tombol **Masuk Nexa Studio** menanggalkan selubung untuk navigasi potongan interior. Memilih lantai, ruang atau agen juga membuka interior secara otomatis. Pemisahan ini adalah cara melihat model, bukan mekanisme kunci akses atau privasi data.
- Papan nama Nexa Office pada fasad dan samping bangunan; Nexa Studio pada dinding resepsionis. Portal pintu ganda, kanopi dengan cahaya hangat, rangka bronze, plinth travertine, taman dan bollard memperjelas bangunan utuh.
- Dua kantor eksekutif berada di mezzanine: ZUNO di kiri, Zulnan di kanan. Masing-masing memiliki pintu dari area bersama, meja travertine/walnut, monitor dan keyboard, lampu kerja, kursi eksekutif, dua kursi tamu, credenza, buku, tanaman dan lounge pribadi.
- ZUNO kini benar-benar berada di lantai 02; pemilihan agen mengikuti metadata lantai. Zulnan merupakan penghuni Owner tambahan, **bukan agen operasional ke-19**. Penampilan memakai brief yang tersedia (rambut gelap, atasan putih, celana biru, sepatu putih, jam gelap).
- Tambahan bump tekstur kayu/batu dan pola kain, furnitur dengan tepi membulat, serta penggabungan geometri per material. Pantulan langit pada kaca adalah tekstur prosedural dan environment lighting PBR; bukan foto/HDRI lokasi atau refleksi ray tracing.
- Akses `https://lembur.id/` dicoba tetapi proxy mengembalikan CONNECT 403. Tidak mengklaim telah memeriksa atau menyamai tampilannya. Referensi visual yang tersedia tetap tiga gambar pengguna. Hasil ini archviz bergaya miniatur yang lebih detail, belum render fotoreal final.
- Preview mandiri yang sama kini membuka fasad Nexa Office secara default. Semua aset dan pemilih interior/eksterior tetap tertanam dalam satu HTML.


## Aktivitas agen, fasilitas dan label — 2026-11-09

Preview kini memiliki tombol **Demo aktivitas**, **Jeda/Lanjut**, **Reset**, dan kecepatan 1×/2×/4×. Mode ini simulasi visual deterministik, tanpa memanggil `/api/ai`, tanpa mengubah workflow Konten/Engineering, dan tanpa mengaku membaca job backend. Saat dimulai, sebagian agen bekerja di stasiun sesuai divisinya; sebagian mendapat waktu luang. Setelah kunjungan santai, agen kembali berjalan ke tempat kerja. Siklus ini dapat diubah lewat profil agen: Bekerja, Waktu luang, atau Kunjungi area tertentu.

- Mesin espresso: body stainless, dua brew group, portafilter, drip tray, grinder dan hopper, milk jug, cangkir berisi kopi, gelas, tatakan serta cups di meja. Tinggi counter disesuaikan dengan skala karakter.
- Game Room: TV, soundbar, konsol bergaya PlayStation, controller, dua PC gaming beserta monitor, tower, fan rings, keyboard, mouse dan kursi gaming. Ini prop 3D; tidak mengemulasi game sebenarnya.
- Air kolam: basin lebih dalam dengan ubin, tangga stainless, mesh air bergelombang, normal dinamis, highlight environment dan shader caustic bergerak. Teknik ini pendekatan visual PBR, bukan simulasi fluida atau refleksi/refraction ray tracing.
- Mushola: ruang ke-12, terpisah dari game/lounge, berisi sajadah, rak Al-Quran, rak alas kaki, sudut wudu dan papan nama. Karakter yang berada di dalam area ini menyembunyikan mesh sepatu. Tidak ada klaim arah kiblat atau jadwal sholat aktual.
- Semua 18 agen memiliki label nama dan jabatan di atas model; Owner memiliki label terpisah. Label mengikuti posisi dan lantai aktual, dapat diklik untuk fokus, dan dapat disembunyikan lewat Nama & jabatan.
- `simulation.js`: rute lorong, pintu terbuka ruang eksekutif, waypoint tangga dengan perubahan elevasi bertahap, reservasi tangga dan tujuan santai. Tujuan yang terisi dipilih bergantian. Ini navigasi waypoint untuk layout ini, bukan navmesh atau crowd physics umum; tidak mengklaim bebas tabrakan pada layout/furnitur lain.
- `activity-view.js`: pose mengetik, langkah tangan/kaki, kopi di tangan, controller, istirahat, membaca dan gerak berenang. GLB sekarang mengekspor rig kaki dan klip Idle + Walk; runtime menggerakkan joint berdasar jarak dan kegiatan. Jumlah mesh per karakter bertambah untuk artikulasi dan sepatu yang dapat disembunyikan.
- Selecting agen yang sedang berjalan memakai lantai/posisinya saat ini. Ikuti agen dapat dimatikan; menyeret kamera mematikan follow agar kamera tidak melawan input.
- Preferensi reduced-motion menjaga preview diam sebelum pengguna secara eksplisit memulai demo. Tab tersembunyi tidak melanjutkan simulasi; tidak ada catch-up atau perpindahan instan ketika tab kembali.

Validasi tambahan: `npm run test:simulation` (rute tangga dua arah, gerak tanpa teleport, work assignment, pause, reset) dan `npm run test:activities` (model kaki benar-benar berputar, 18 label, coffee/game/mushola/pool, sepatu, update waktu shader, navigasi posisi berjalan dan nol request AI). Screenshot aktivitas berawalan `artifacts/office/demo-`. Test browser utama diperluas menjadi 12 ruangan; CI menjalankan ketiga pemeriksaan browser dan tes logika simulasi.


## Regresi karakter melayang

GLB menggantikan karakter sementara yang semula ditambahkan ke grup lantai, lalu dipindahkan ke scene dunia oleh activity renderer. Penggantian sekarang menghapus placeholder dari **parent aktualnya** (`removeFromParent`), sehingga tidak tertinggal salinan tanpa label/aturan visibilitas. Setiap agen hanya memiliki satu root karakter dalam scene; memilih lantai dasar tidak menampilkan ZUNO yang berada di mezzanine.

Dua bentang tangga juga dipisahkan dari batch lantai. Masing-masing tetap terlihat saat salah satu dari dua lantai yang dihubungkannya dipilih, sehingga agen yang menaiki tangga masih memiliki pijakan yang terlihat pada mode potongan.

`npm run test:agent-lifecycle` memeriksa jumlah root aktual (bukan sekadar ukuran registry), satu model per agen, visibilitas dan elevasi dunia, GLB tertunda saat demo sudah dimulai, fallback GLB gagal, dan visibilitas tangga. Tes sebelum perbaikan mendeteksi 36 root untuk 18 agen; hasil tersimpan di `floating-before.log`. Hasil setelah perbaikan dan screenshot ada di `floating-after.log` dan `ground-no-floating.png`.

## Pilihan tema workspace (revisi 2026-11-09)

Permintaan Zulnan: empat tema lama "sama aja beda warna doang". Diganti **dua tema dengan bangunan sendiri**, mengacu pada empat gambar yang dia unggah (gambar 1 + 2 untuk tema 1, gambar 4 + 3 untuk tema 2). Logo, nama merek dan watermark dari gambar referensi tidak dipakai; monogram "N" dan nama tema dibuat sendiri.

| Tema | Nexa Office (eksterior) | Nexa Studio (interior) |
|---|---|---|
| **Menara Senja** | Menara 5 lantai saat senja: bay tengah bersirip perunggu/walnut dengan monogram, sayap kaca dengan bingkai krem, balkon taman berselang-seling, pilar sudut dengan garis cahaya, kanopi lobi + tangga; atap dengan kolam infinity bertepi kaca menyala, kabana, paviliun kaca, bar + layar, palem; podium dengan air mancur, driveway + mobil, pagar berlampu, deret palem, jalan, sungai dan kota. | Hijau tua + kuningan + walnut: lantai parket herringbone, panel dinding dan cornice kuningan, cermin bulat, chandelier, lampu gantung di atas meja, karpet bermotif, sofa velvet blush berkancing, portal lengkung di resepsionis; mezzanine dan teras dengan chandelier, lentera dan lampu untai. |
| **Griya Langit** | Penthouse dua level di puncak menara malam: teras marmer putih melingkar dengan rumput, balustrade kaca, tepi LED, kolam celup di sudut, lounge dengan meja api, pohon dalam pot; Level B mundur dengan teras rumput, atap taman; balkon kantilever yang dicapai tangga spiral mengelilingi pohon; kota malam jauh di bawah. | Kantor terang: dinding putih, lantai marmer krem, kayu oak, bilah kayu vertikal, dinding tanaman hidup, partisi kaca berbingkai hitam di ruang meeting, rak grid hitam-oak di antara cluster meja, kursi hitam, sofa biru, pohon dalam pot putih. |

Implementasi:
- `theme-worlds.js`: semua mesh bangunan, lingkungan dan dekorasi interior per tema (prosedural, digabung per material). Bangunan kaca netral lama disembunyikan; kaca fasad kedua tema `MeshPhysicalMaterial` opak (`transparent:false`, `transmission:0`) dengan tekstur ruangan menyala, jadi interior tetap tertutup dari luar.
- `themes.js`: dua tema; warna/tekstur material peran (parket, marmer) dan pencahayaan + latar **berbeda untuk eksterior dan interior** (`setView`). Judul dan kamera eksterior mengikuti tema.
- Denah, 12 ruang, tangga, posisi kerja 18 agen dan rute simulasi tidak diubah; dekorasi diletakkan di dinding, plafon dan tepi, di luar lorong dan tangga.
- Preferensi tersimpan di `localStorage` key `nexa-office-theme`; nilai lama (`original`, `swarna`, `seruni`, `rimba`) atau tidak dikenal kembali ke Menara Senja.
- Thumbnail kartu (`assets/themes/senja.png`, `langit.png`) adalah render eksterior scene sendiri: jalankan server, `npm run capture:themes`, lalu `npm run build:preview`.

Batas: tetap archviz miniatur/stylized, bukan fotoreal. Kota, mobil, air dan tanaman disederhanakan. Render tes di cloud (SwiftShader, kualitas Ringan) sekitar 2 FPS dengan ~210 draw call dan ~144 ribu segitiga, naik dari ~189/78 ribu karena kota dan menara; performa GPU laptop belum diuji.

## Membuka preview dari aplikasi chat

Tautan HTML di aplikasi chat dapat membuka panel kode. Untuk penggunaan interaktif di komputer, gunakan `preview/Nexa-Office-Preview.zip`, ekstrak, lalu klik kanan `BUKA-PREVIEW.html` → Open with → Chrome/Edge. Arsip juga berisi petunjuk `BACA-DULU.txt`. Gambar `preview/HASIL-PREVIEW.png` adalah hasil render, bukan halaman interaktif.

Buat ulang arsip dengan `npm run package:preview`. Pengemas memverifikasi ZIP dan kesamaan hash HTML dengan sumber standalone yang diuji. Arsip tidak berisi launcher atau dependensi; semua aset tetap tertanam di HTML. Tidak ada URL hosting publik yang dibuat oleh pengemasan ini.

## Arah hadap agen, layar menyala, Sudut Zulnan (2026-11-10)

Permintaan Zulnan dari dua tangkapan layar: agen di sisi belakang meja (Maya, Fira) duduk membelakangi komputer; layar monitor harus seolah menyala dan agen tampak mengerjakan tugasnya; Zulnan sebagai Owner dapat satu tempat khusus di lantai 3 untuk bersantai.

- **Arah hadap**: kursi kerja 18 agen kini satu sumber, `workSeats()` di `data.js` (posisi + heading + punya meja atau tidak). Meja studio dua sisi: kursi di sisi z negatif menghadap +z (heading 0), sisi z positif menghadap -z. Sebelumnya semua agen meja diberi heading PI, jadi tiga kursi sisi belakang (Fira, Maya, dan satu kursi kosong) membelakangi monitor. `simulation.js` memakai heading per kursi saat agen tiba kembali di tempat kerja dan saat reset.
- **Monitor ruang eksekutif**: monitor ZUNO dan Zulnan sebelumnya menghadap kursi tamu. Monitor, lampu, keyboard, alas kulit, buku dan cangkir dicerminkan supaya layar menghadap kursi eksekutif.
- **Layar menyala** (`screens.js`): isi layar digambar prosedural per jenis kerja (naskah, riset, laporan/obrolan, desain carousel, timeline video, kode, terminal tes, wireframe, kalender antrian). Isi layar bergulir pelan (berhenti bila pemakai memilih reduced-motion). Satu bahan per agen: terang saat agen duduk bekerja di kursinya, redup saat kursinya kosong (agen santai atau berjalan). Kursi tanpa pemilik menampilkan layar siaga. Ini gambar ilustrasi, bukan tangkapan aplikasi atau pekerjaan AI asli.
- **Sudut Zulnan** di lantai 3 (`amenities.js`), di antara kolam dan bar kopi: karpet, kursi pantai kayu dengan bantalan bergaris, payung pantai, meja kecil dengan secangkir kopi, papan nama "SUDUT ZULNAN". Zulnan setengah berbaring menghadap kolam. Label Owner ikut lantainya; klik label membuka kamera dari sisi kolam (`focusOwner`). Ruang kerja Owner di lantai 2 tetap ada; daftar ruang tetap 12. Zulnan tetap bukan agen ke-19 dan tidak ikut simulasi.
- Biaya render: +13 draw call (16 bahan layar + benda Sudut Zulnan), segitiga hampir sama (~143 ribu).

Tes baru `npm run test:layar` (`tests/layar-owner.test.cjs`): 15 agen meja menghadap monitornya, 16 layar menyala saat preview, layar redup/menyala mengikuti agen saat demo, Sudut Zulnan dan label Owner di lantai 3.

## Pindah ke The Grotto membawa parameter (2026-11-10)

`themeHref(theme)` di `themes.js` (dipakai `apply` dan pemilih tema) membawa parameter halaman (mis. `ringkas`, `asli`, `demo`, `kualitas` saat kantor disematkan di situs Nexaoffice) ke alamat `/nexa.html?theme=grotto`, kecuali `theme`/`tema`. Dengan begitu pilihan tersimpan "grotto" membuka The Grotto versi tertanam yang benar di situs.
- Ikuti agen (2026-11-10): `zunoOffice.follow(on)` menyimpan pilihan "Ikuti agen". Menyeret kamera hanya menjeda ikuti; memilih agen berikutnya memulihkan pilihan itu (sebelumnya centang hilang permanen setelah kamera diseret, padahal kotaknya tersembunyi di Workspace).
