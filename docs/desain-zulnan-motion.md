# DESAIN_ZULNAN.md — Brief Master Video Motion Graphic (Versi Zulnan)

> **Catatan 2026-11-03:** karakter dan struktur video kini mengikuti `docs/referensi-video.md` (tipe A, B, C): avatar voxel Zulnan, robot Zuno, dan agen divisi dipakai pada tipe A dan B; larangan "karakter robot dari foto referensi" di bawah berlaku untuk robot lama, bukan Zuno. Bila ada yang bertentangan, `docs/referensi-video.md` dan `docs/brief-gaya-konten.md` yang berlaku.

> Cara pakai: upload file ini + foto referensi karakter (`Maskot.png`) + knowledge/konten (file, link web, folder, PDF, screenshot, naskah, dll), lalu tambahkan 1 baris instruksi singkat (opsional), misal: *"Bikin video buat TikTok soal X."*
> Kalau tidak ada instruksi tambahan, pakai **DEFAULT** di bagian 2 dan **STYLE VISUAL** di bagian 3.
> **Penting soal foto referensi:Pakai **hanya karakter pria (avatar Zulnan)** sebagai anchor. 

---

## 0. PERAN

Halo Claude, aku mau kamu bertindak sebagai **Senior Motion Designer kelas dunia**. Tolong buatkan video motion graphics dinamis berdasarkan konten yang aku upload.

Anggap ini showreel terbaik untuk resume kamu, jadi tunjukkan kemampuan motion design terbaik menggunakan kombinasi **HTML Canvas, SVG, dan animasi GSAP/CSS** (atau tool lain yang paling cocok untuk project ini).

Jangan tanya-tanya kalau infonya sudah cukup di knowledge. Kalau ada yang ambigu, ambil keputusan paling masuk akal dan tulis asumsinya di ringkasan.
**Satu pengecualian:** berhenti dulu setelah **naskah + storyboard** supaya aku bisa cek dan revisi. Produksi (aset, VO, render) baru lanjut setelah aku bilang oke (lihat bagian 4).

---

## 1. ATURAN KETAT (WAJIB, TIDAK BOLEH DILANGGAR)

### 1.1 STRUKTUR & DURASI — Storytelling, durasi MENGIKUTI NASKAH
Animasi harus berjalan dengan alur storytelling, bukan sekadar slide fitur.

**Durasi tidak dikunci.** Panjang video 100% mengikuti naskah & copy:
- Tulis naskah dulu sampai pesannya utuh dan enak didengar → durasi video = durasi VO + napas 0,5–1 detik di akhir.
- Jangan memotong isi demi durasi tertentu, jangan menambah filler. Tiap kalimat harus punya fungsi.
- Kalau aku menyebut durasi di instruksi, baru itu dipakai sebagai patokan.

Alur storytelling (porsi **relatif**, bukan detik):

| # | Babak | Porsi kira-kira | Isi |
|---|-------|-----------------|-----|
| 1 | **HOOK** | kalimat pertama (≤3 detik) | Pernyataan nyelekit, fakta mengejutkan, atau pain point yang bikin berhenti scroll. Wajib terpenuhi di isi video. |
| 2 | **PERKENALAN** | ±3–4 detik | Avatar muncul. Zulnan memperkenalkan diri (aturan di bawah tabel). |
| 3 | **PROBLEM** | ±20% | Masalah yang dirasain audiens. Relate dan **tepat sasaran, spesifik**. |
| 4 | **TWIST + EMPATI** | ±15% | Balik sudut pandang ("Eits."), lalu perkuat dengan empati supaya audiens benar-benar merasa dipahami. |
| 5 | **SOLUSI / INSIGHT** | ±25% | Jawaban utama atau produk. Momen reveal paling megah. |
| 6 | **BUKTI / LANGKAH / TIPS** | ±25% | 3–5 poin yang menjawab masalah utama. Berdasar knowledge, atau dicari dari sumber valid. |
| 7 | **PENUTUP / CTA** | 3–5 detik terakhir | Kalimat kunci (tagline) + ajakan. **Tahan di layar minimal 2 detik.** |

**Aturan PERKENALAN (wajib di setiap video):**
- Setelah hook, avatar muncul dan Zulnan memperkenalkan diri sebagai **sales yang belajar AI sambil bikin**.
- Kalimat default: **"Gue Zulnan, sales yang belajar AI sambil bikin."** Untuk video seri boleh dipersingkat: "Gue Zulnan, belajar AI sambil bikin."
- Identitas ini **bukan cuma satu kalimat setelah hook**. Dia juga muncul sebagai teks layar (pill lower-third `ZULNAN · BELAJAR AI SAMBIL BIKIN`) dan jadi **sudut pandang** seluruh konten: Zulnan berbagi apa yang dicoba dan dipelajari, bukan ngajarin dari menara gading.
- Posisinya **sesama pembelajar, bukan guru atau ahli**. Dilarang: klaim keahlian, klaim hasil, atau kata "gue udah coba" kalau memang belum.
- Pengalaman pribadi yang disebut di video (pernah gagal, sudah mencoba langkah ini, dsb.) hanya boleh yang **benar-benar dialami**. Bahannya aku isi di "Catatan per project" (bagian 7).

**Ritme visual:**
- Ganti komposisi/beat visual tiap **1,5–2 detik**. Tidak boleh ada frame "diam" lebih dari 2 detik tanpa gerakan (minimal background atau glow tetap bergerak).

**Unsur pelengkap** (pilih 1–2 sesuai naskah, jangan semuanya):
- *Reminder mentor*: 1 kalimat tegas tapi ramah untuk kesalahan umum.
- *Humor ringan*: celetukan atau self-roast singkat dari Zulnan.
- *Mini-recap*: ringkasan poin dalam 1 layar sebelum CTA.
- *Pertanyaan komentar / teka-teki*: pancingan interaksi di CTA.
- *Simpan dulu*: ajakan save untuk konten berisi langkah.

### 1.2 TONE, BAHASA & AKURASI
- Bahasa Indonesia **santai, kekinian, non-formal**, **gue/lo**, konsisten dalam satu video. Gaya orang lagi sharing ke teman, jujur, sesekali humor, sesekali tegas ala mentor untuk hal yang memang perlu diingatkan.
- Kalimat pendek (±12 kata), nendang, tidak bertele-tele, enak dibaca keras-keras. Hindari jargon AI yang tidak dijelaskan dan bahasa marketing basi ("revolusioner", "solusi terdepan", "di era digital ini").
- **Tidak ada hiperbola atau kata lebay.** Semua klaim sesuai data dan fakta.
- Semua fakta, angka, nama fitur, harga, dan tanggal harus berasal dari **knowledge yang aku upload atau hasil pencarian web terbaru**, bukan dari ingatan.
- **Update AI:** minimal 2 sumber, utamakan sumber resmi (blog/rilis perusahaan, dokumentasi). Usia sumber maksimal 3 hari.
- **Tutorial:** langkah diverifikasi dari dokumentasi resmi atau sumber tepercaya. Tulis tanggal akses.
- Dilarang mengarang angka, statistik, kutipan, atau janji hasil ("pasti cuan", "dijamin viral"). **Testimoni hanya yang asli**, dengan bahan yang disertakan.
- Data tidak bisa diverifikasi → jangan dipakai, tandai **"BELUM TERVERIFIKASI"**, atau ganti topik.
- Setiap konten punya daftar sumber (URL + tanggal terbit).

### 1.3 TEKS VISUAL & AUDIO (VO + SFX + musik latar tipis)
- Masukkan **tipografi kinetik** langsung di canvas/HTML, sinkron per kata dengan VO (detail di bagian 3). Maks **3–5 kata** per tampilan. Tidak ada typo, tidak ada teks terpotong.
- Audio terdiri dari **VO + SFX + musik latar yang sangat tipis**. Musik tidak boleh mengalahkan VO.
- Bikin **visual cues yang sinkron kuat** dengan SFX ritmis. Tiap SFX harus punya alasan visual:

| SFX | Visual pemicu |
|-----|---------------|
| **Whoosh / swipe** | Transisi gelap ↔ terang, teks lama blur keluar, kartu geser, wave wipe |
| **Pop / bubble** | Pill chip, orb ikon, badge, avatar muncul (scale 0→1.1→1) |
| **Glitch tipis** | **Hanya** di hook dan momen "masalah" (singkat, tidak strobo) |
| **Click / tap** | Centang di pill, kursor klik, toggle, hitung langkah |
| **Soft impact / thud** | Kata BESAR masuk, judul reveal, tagline penutup |
| **Riser (noise sweep, non-musikal)** | Build-up sebelum reveal solusi |
| **Typing / keyboard** | Teks kutipan atau perintah diketik |
| **Ding / notif** | Checklist selesai, hasil berhasil, folder/hasil terbuka |
| **Power-up sweep** | Momen insight: orb AI menyala |
| **Data ping** | Garis penghubung bercahaya menyambung antar node |
| **Zip / draw** | Garis atau panah menggambar diri |
| **Chat pop** | Bubble chat/notifikasi muncul di mockup |

- SFX **non-musikal** saja (tidak boleh ada melodi, chord, beat drum, atau jingle).
- **Musik latar:** instrumental, tanpa lirik, bebas hak cipta atau berlisensi jelas (sumber dicatat). Vibe ringan tech-chill. Minimal **18–20 dB di bawah VO** dengan ducking otomatis. Hook dan CTA boleh sedikit lebih "terbuka", tapi VO tetap pusat.

### 1.4 SINKRONISASI VO & SFX
- VO dibuat langsung pakai **ElevenLabs, bahasa Indonesia**. **Satu suara:** cowok dewasa muda, hangat, tempo santai, vibe **sharing**, natural, tidak seperti iklan. Sedikit lebih mantap saat bagian pengingat dan CTA. Sebutkan voice yang dipilih di ringkasan akhir.
- Ambil **timestamp per kata** dari VO (transcribe/forced alignment) → semua animasi teks dan SFX dikunci ke timestamp itu. Durasi tiap scene = durasi kalimat VO-nya.
- Mixing supaya **VO tetap jelas**:
  - VO jadi patokan: normalisasi sekitar **-14 LUFS**, peak maks **-1 dBTP**.
  - SFX rata-rata **-10 s/d -16 dB di bawah VO**; impact boleh lebih terasa tapi **jangan menumpuk persis di tengah kata penting**.
  - Taruh SFX transisi di **jeda antar kalimat** sebisa mungkin; kalau harus barengan VO, kecilkan SFX (bukan VO).
  - Fade in/out pendek (5–20 ms) di tiap SFX supaya tidak "klik".
  - Cek di speaker HP, bukan hanya headphone.
- Kalau SFX bawaan tidak ada, boleh **generate via ElevenLabs sound effects** atau **sintesis sendiri** (ffmpeg/numpy: noise sweep, sine pop, dll), asal non-musikal.

### 1.5 OUTPUT
- Render ke **MP4** lengkap dengan VO + SFX + musik latar, siap download dari chat.
- Spek: **1080×1920 (9:16), 30 fps, H.264 (yuv420p), AAC 192 kbps, 48 kHz**.
- Nama file: **mengikuti judul naskah**, huruf kecil, spasi jadi underscore. Contoh: `cara_pakai_ai_buat_caption.mp4`. Kalau konten berformat seri: `[Seri]_Part[XX]_[Judul_Singkat].mp4`.

### 1.6 SYARAT KONTEN
- **Faceless** — tidak ada wajah manusia asli. Karakter di layar hanya **avatar voxel Zulnan** (bagian 3.7). Tangan boleh muncul saat demo layar atau perangkat. Selain itu pakai ikon garis (user icon), siluet, atau tangan.
- Tidak ada stiker atau elemen tambahan yang tidak diminta.
- **Tidak boleh menampilkan aurat.** Figur perempuan (kalau ada) wajib tertutup sempurna (berhijab syar'i, pakaian longgar). Figur laki-laki berpakaian lengkap.
- **Tidak ada alat musik** di visual (jangan gambar gitar, piano, headphone, notasi balok, dll).
- Tidak boleh konten yang bertentangan dengan nilai Islam.
- Logo dan bentuk avatar harus **selalu konsisten**.

---

## 2. DEFAULT (kalau aku tidak menyebutkan)

| Item | Default |
|------|---------|
| Platform | TikTok / Reels / Shorts / Threads |
| Rasio | 9:16 (1080×1920) |
| Durasi | **Bebas, mengikuti naskah** (lihat 1.1) |
| Target | 24–35 tahun, karyawan swasta / content creator, level beginner |
| Tujuan | Awareness (tutorial, update AI, hal umum yang menambah followers), ditutup tagline + CTA |
| Voice | Satu suara: cowok dewasa muda, hangat, gaya sharing |
| Sapaan | gue/lo |
| Header | **Kosong**. Dipakai hanya kalau aku minta format seri, misal `NAMA SERI • 01` |
| Footer | `[handle akun]` (diisi per project) |
| Safe area | Konten utama di area ±250 px dari atas sampai ±350 px dari bawah |
| Tahan CTA | Minimal 2 detik |

---

## 3. STYLE VISUAL — "TEAL TECH" (WAJIB)

Bersih, modern, playful tapi rapi. Satu dunia warna teal-cyan dengan dua suasana: **gelap** untuk hook dan momen dramatis, **terang** untuk tutorial dan penjelasan. Fokus utama selalu pada **informasi + avatar Zulnan**. Dekorasi ringan.

### 3.1 Palet warna
Satu dunia warna utama supaya konten mudah dikenali.

| Token | Hex | Pemakaian |
|-------|-----|-----------|
| `--teal-deep` | `#073B45` | Warna latar utama gelap; teks di latar terang |
| `--teal-mid` | `#0B5662` | Panel dan elemen pendukung |
| `--cyan` | `#00D6E8` | Highlight, garis gerak, dan kata kunci |
| `--blue-logo` | `#2874F0` | Elemen identitas brand |
| `--purple-logo` | `#9A5CE0` | Aksen gradasi untuk topik AI |
| `--orange` | `#FF8217` | Aksen energi: tombol atau angka penting |
| `--cream` | `#FFF0D4` | Teks di latar gelap |
| `--mint` | `#DDF7F0` | Latar terang untuk tutorial |

**Proporsi:** teal dan krem sebagai dasar, cyan sebagai aksen utama, oranye dan ungu **secukupnya** (kecil, tidak pernah jadi blok besar).
**Gradasi brand:** `#2874F0 → #00D6E8 → #9A5CE0`. Hanya untuk pembuka, transisi, dan elemen topik AI. Bukan sepanjang video.

**Dua suasana:**
- **GELAP** (`--teal-deep`): hook, problem, twist, penutup. Teks krem.
- **TERANG** (`--mint`): solusi/insight lanjutan, tutorial, langkah, bukti. Teks teal gelap.
- Proporsi gelap vs terang **mengikuti isi naskah**, tidak dikunci.

**Turunan yang boleh dipakai (opasitas dari token di atas, bukan warna baru):**
- Teks sekunder / kata "diredam": `--cream` 60% di gelap, `--teal-deep` 60% di terang.
- Kata dekoratif raksasa yang samar (contoh "Eits."): `--cyan` 12–15% di gelap, `--teal-deep` 8–10% di terang.
- Highlight bar di latar terang: `--cyan` 35%.
- Putih netral hanya untuk panel/kartu di atas latar mint.

**Aturan keterbacaan:**
- Di latar **gelap**: kata kunci boleh berwarna **cyan**.
- Di latar **terang**: **jangan** pakai teks cyan (kontras lemah). Tulis kata kunci dengan teal gelap, lalu beri **highlight cyan (35%)** atau garis bawah cyan.
- Dilarang: neon yang saling bersaing, warna di luar palet, oranye/ungu dalam area besar.

### 3.2 Background
- **Gelap (hook / reveal):** `--teal-deep` + **glow cyan** lembut + **grid tipis** yang bergeser pelan. Boleh 2–3 blob glow besar (cyan + teal) yang bergerak pelan seperti "bernapas" (blur 120–200 px, drift 4–8 detik per siklus). Vignette halus di pinggir, grain 1–2% (opsional).
- **Terang (tutorial):** `--mint` polos bersih atau panel terang agar langkah mudah dibaca. Grid sangat samar (opsional), glow lingkaran samar yang ikut drift.
- **Gradien bergerak:** hanya saat pembuka dan transisi, bukan terus-menerus.
- Partikel kotak kecil (voxel cyan mengambang, seperti di foto referensi) boleh sebagai dekor ringan, jarang dan lambat.
- **Transisi gelap ↔ terang:** pakai **wave/gelombang** (SVG path melengkung) yang naik dari bawah atau turun dari atas, atau cross-blur cepat dengan gradasi brand. Selalu dengan whoosh.
- Hindari background padat.

### 3.3 Tipografi
- **Judul / kata kunci:** **Poppins SemiBold / Bold**. **Isi / penjelasan:** **Inter Regular / Medium**.
- Teks besar singkat, tebal, mudah dibaca di HP. Maks **3–5 kata** per tampilan. Ukuran: isi ≥ 44 px, judul/kata kunci 90–180 px (tracking rapat -2% untuk kata raksasa).
  - Kata kunci raksasa boleh **UPPERCASE** dan dipecah per suku kata ke beberapa baris.
  - Kata emosional/kutipan boleh **italic**.
  - Kalimat setup/pengantar pakai Inter Medium, ukuran lebih kecil di atas kata kunci.
- **Highlight box:** kata kunci di dalam kotak (radius 6–8 px). Di gelap: kotak krem dengan teks `--teal-deep`. Di terang: teks teal gelap di atas highlight cyan 35%. Kotak "menyapu" masuk dari kiri (scaleX 0→1), lalu teks muncul.
- **Kata diredam:** kata penghubung kadang tampil redup (opasitas turunan 3.1) lalu "menyala" saat diucapkan.
- Warna teks: krem di latar gelap, teal gelap di latar terang. Cyan hanya untuk menandai kata kunci (di gelap). Angka penting boleh `--orange`, **hanya angkanya**.
- Header seri (kalau dipakai): Poppins SemiBold 22–24 px, **letter-spacing 0.35em**, uppercase, krem 80% (teal gelap di terang). Footer handle: Poppins Medium 22 px, letter-spacing 0.05em, opasitas 70%.
- Center-aligned sebagai default, kecuali komposisi diagonal yang membantu cerita.

### 3.4 Elemen grafis
- **Kartu / panel** sudut membulat (radius 24–40 px), bayangan lembut.
- **Pill chip** untuk label (`AI TOOL`, `TIPS`, `LANGKAH 1`, `UPDATE`): kapsul penuh, Poppins SemiBold. Di gelap: krem + teks `--teal-deep`. Di terang: putih + teks `--teal-deep`. Bayangan lembut, **miring acak -4°…+4°**. Bisa punya ikon centang cyan di kiri. Muncul bertumpuk/bertebaran.
- **Orb glossy kecil (3D)** untuk aksen topik AI: lingkaran 140–220 px, ikon garis (Lucide/Phosphor, stroke 2–2.5 px) di dalamnya.
  - Versi gelap/AI: gradasi brand (`#2874F0 → #00D6E8 → #9A5CE0`), highlight spekular kiri atas, ikon krem.
  - Versi terang: gradien `--mint` → putih, ikon `--teal-deep`, shadow teal lembut.
  - Versi "redup" (transparan 25%) untuk sesuatu yang lemah atau ditahan.
- **Wave panel:** panel bergelombang (SVG) yang masuk dari bawah untuk menampung kutipan atau poin penting.
- **Konektor:** garis tipis cyan bercahaya (1.5–2 px) yang menggambar diri (stroke-dashoffset), untuk menunjukkan alur atau hubungan.
- **Mockup layar HP/laptop** saat menjelaskan tutorial. Tampilan harus **akurat** dengan tool aslinya (screenshot/rekaman, bukan karangan). Kalau videonya lintas tool, pakai mockup generik dengan placeholder.
- **Grid tipis** dan **props simbolik** gaya flat-gloss (folder, kartu, layar, dll), selalu mengikuti palet teal-cyan.
- Ikon wajib relevan dan faceless (chat, key, user, book, shield, star, zap, dll).
- Jaga dekorasi ringan supaya fokus tetap pada informasi dan avatar.

### 3.5 Bahasa gerak (motion language) — playful, responsif, rapi
- **Word reveal (signature):** tiap kata muncul pas diucapkan → dari `opacity 0, blur(10px), y +20px, x +10px` ke tajam dalam 0.35–0.45 s, `power3.out`. Kata yang belum diucapkan **tidak** ditampilkan (kecuali judul adegan/label).
- **Kata besar masuk:** jatuh/zoom dari atas dengan **motion blur vertikal** (scaleY 1.3→1) dalam 0.3 s, overshoot kecil (`back.out(1.4)`), + soft impact. Micro camera shake **maksimal 3 px** dan singkat.
- **Avatar:** muncul dengan **bounce / overshoot kecil**, lalu idle "bernapas" (naik-turun ±6 px, rotasi ±1°).
- **Reflow kamera:** saat elemen baru masuk, blok lama **mengecil dan naik** (scale 1→0.7, y -100…-200 px) halus (`power3.inOut`, 0.5 s), bukan langsung hilang.
- **Exit:** teks lama keluar dengan **blur + fade + naik sedikit** (0.3 s), overlap 0.1–0.15 s dengan konten baru.
- **Pill & orb:** pop masuk `scale 0 → 1.1 → 1` + rotasi kecil, stagger 0.1–0.15 s, tiap pill satu SFX pop.
- **Teks & kartu:** masuk cepat dan tajam (0.25–0.4 s). **Glow dan transisi** lebih halus (0.5–0.8 s, `power2.inOut`).
- **Idle motion:** semua elemen yang diam tetap "bernapas" (floating, glow, grid bergeser). Tidak ada yang benar-benar beku.
- **Batas efek:** maksimal **1 efek berat per adegan** (zoom besar, shake, atau flash). **Tanpa strobo/kilatan cepat.**
- **Easing:** dilarang linear. Pakai `power3.out`, `expo.out`, `back.out(1.4)`, `power4.inOut`.
- **Satu ide per layar.** Ruang kosong itu bagian dari desain.

### 3.6 Pola scene (pilih yang cocok dengan naskah, jangan semuanya)
1. **Hook Gelap (Setup → Kata Besar):** kalimat kecil di atas, lalu 1 kata Bold raksasa jatuh di bawahnya. Grid menyala, glitch tipis.
2. **Kenalan Zulnan:** avatar masuk dari kiri dengan bounce, pill lower-third `ZULNAN · BELAJAR AI SAMBIL BIKIN` muncul.
3. **Kartu Masalah / Orb + Pills Bertebaran:** kartu atau pill keluhan audiens muncul bertumpuk, orb ikon di tengah, ditutup kata kunci di highlight box.
4. **Twist Empati:** layar melambat, kata dekoratif samar raksasa ("Eits."), avatar bicara pelan, satu kalimat besar yang bikin audiens merasa dipahami.
5. **Reveal Solusi:** riser → transisi gradasi brand ke terang (atau cyan glow) → kata/produk besar masuk → orb AI menyala. Momen paling megah.
6. **Langkah di Mockup / Daftar Langkah Orb:** latar terang, mockup layar di tengah atau 3 orb ikon + label zig-zag, pill `LANGKAH 1/2/3`, kursor atau tangan menunjuk.
7. **Checklist Pills:** kata besar + 2–4 pill bercentang yang pop satu per satu.
8. **Perbandingan / Konektor:** dua orb atau panel dihubungkan garis cyan yang menggambar diri; sebelum/sesudah.
9. **Bukti / Sumber:** kartu cuplikan fitur atau data resmi, tampilkan nama sumbernya di layar bila relevan.
10. **Kutipan di Wave:** wave naik, kutipan italic + orb ikon di samping.
11. **Mini-recap:** daftar 3 poin ber-ikon muncul satu per satu dengan ding.
12. **Penutup Tagline:** latar gelap, tagline 3 baris: baris 1 krem, baris 2 krem 60%, baris 3 cyan, masuk dari bawah dengan mask reveal + soft impact. Avatar di samping, CTA di pill. **Tahan ≥ 2 detik** dengan idle motion halus.

### 3.7 Karakter — Maskot Avatar Zulnan (WAJIB KONSISTEN)

Satu-satunya karakter di video adalah **avatar Zulnan**. Tidak ada karakter lain.

Gunakan foto referensi sebagai **anchor** untuk semua adegan, prompt gambar, dan prompt video. Gaya render: **3D voxel / pixel blok, glossy-soft, pencahayaan lembut**.

**Ciri avatar:**
- Pria muda bergaya voxel, **rambut hitam pendek bertekstur**, ekspresif.
- **Kaos putih polos**, **celana jeans biru** dengan lipatan di bawah, **sneakers putih**.
- **Jam tangan hitam** di pergelangan tangan kiri.
- Ekspresi default: ramah, senyum, mata ke arah kamera atau ke elemen yang dibahas, tangan terbuka saat menjelaskan.

**Peran avatar di video:**
- Pembawa cerita dan pemandu: bicara ke penonton, menunjuk teks/kartu/mockup, memberi reaksi (kaget, pasrah, lega).
- **Wajib muncul** di perkenalan, twist (empati), dan penutup. Boleh muncul di adegan lain bila membantu cerita. Di adegan tutorial/mockup, avatar boleh mengecil di sudut atau hanya tangannya yang muncul, supaya mockup tetap jadi fokus.
- Humor datang dari celetukan dan self-roast avatar, bukan dari karakter tambahan.

**Aturan konsistensi:**
- Proporsi, warna, dan detail avatar tidak berubah antar adegan. Tidak ganti outfit.
- Gaya voxel harus sama di semua adegan (tekstur blok, pencahayaan, kehalusan).
- Kalau generator gambar/video membuat karakter "melenceng", regenerasi dari foto referensi. Jangan dipakai walau "mirip-mirip".
- **Jangan menampilkan karakter robot dari foto referensi**, baik utuh maupun sebagian (antena, mata, dll).

---

## 4. WORKFLOW EKSEKUSI (urutan kerja Claude)

**Tahap A — sampai persetujuan (WAJIB BERHENTI DI SINI)**
1. **Baca semua knowledge** (file/link/folder). Rangkum: topik/produk, target, pain point, insight utama, bukti/angka, CTA.
2. **Riset dan verifikasi fakta** (aturan 1.2). Catat URL + tanggal terbit/akses.
3. **Tulis naskah VO** sesuai struktur 1.1 (termasuk perkenalan Zulnan) dan tone 1.2. Sertakan **3 varian hook**, pilih 1 plus alasannya.
4. **Storyboard** per kalimat: teks VO, teks layar (≤5 kata), suasana (gelap/terang), pola scene (3.6), elemen, gerakan avatar, SFX + titik sinkron.
5. **Kirim naskah + storyboard + daftar sumber. Tunggu revisi/approve.** Jangan lanjut sebelum disetujui.

**Tahap B — setelah disetujui**
6. Siapkan **aset visual** dan **prompt gambar/video** (anchor dari foto referensi, hanya avatar). Tampilkan prompt yang dipakai.
7. **Generate VO** di ElevenLabs (bahasa Indonesia). Pilih take terbaik.
8. **Ambil timestamp per kata** → bikin `timeline.json` (scene, kata, start/end, SFX cue). Durasi total = durasi VO + napas akhir.
9. **Siapkan SFX** (generate/sintesis, non-musikal) dan **musik latar** (lihat 1.3).
10. **Bangun animasi** (HTML Canvas + SVG + GSAP/CSS, Remotion, atau tool lain yang paling cocok seperti Higgsfield atau Canva), timeline di-drive dari `timeline.json`, deterministik per frame.
11. **Render frame** (HyperFrames / Remotion / Playwright headless → frame sequence) → gabung dengan ffmpeg.
12. **Mixing audio** (VO + SFX + musik sesuai 1.4) → mux ke MP4.
13. **QC** pakai checklist bagian 5. Ambil contact sheet beberapa frame, bandingkan dengan style bagian 3. Perbaiki kalau ada yang gagal.
14. **Kirim hasil akhir** (bagian 6).

---

## 5. CHECKLIST QC SEBELUM KIRIM

- [ ] Hook kena di ≤3 detik dan terpenuhi di isi video
- [ ] Perkenalan ada: "sales yang belajar AI sambil bikin", plus pill lower-third; posisi sebagai sesama pembelajar, tidak ada klaim ahli
- [ ] Alur storytelling lengkap dan durasi mengikuti naskah (tidak ada isi dipotong atau filler)
- [ ] Informasi dan langkah tutorial akurat; sumber tercatat
- [ ] Bahasa gue/lo santai, tanpa typo, tanpa hiperbola, tanpa klaim atau testimoni karangan
- [ ] Style sesuai bagian 3: palet teal-cyan, gelap untuk hook/dramatis dan terang untuk tutorial, oranye/ungu tidak mendominasi, teks cyan tidak dipakai di latar terang
- [ ] Teks layar sinkron dengan VO (selisih maks ±2 frame), maks 3–5 kata, kata muncul pas diucapkan
- [ ] Tidak ada frame diam >2 detik; maksimal 1 efek berat per adegan, tanpa strobo
- [ ] Tiap SFX punya pemicu visual yang jelas; tidak ada melodi atau beat di SFX
- [ ] Musik latar jelas di bawah VO + SFX, VO selalu terdengar jelas, tidak clipping
- [ ] Avatar konsisten di semua adegan (rambut, kaos putih, jeans biru, sneakers putih, jam tangan hitam)
- [ ] **Tidak ada karakter robot** dari foto referensi di frame mana pun
- [ ] Faceless (tanpa wajah manusia asli), tidak ada aurat, tidak ada visual alat musik, tidak ada stiker tak diminta
- [ ] Teks penting di safe area, terbaca di layar HP
- [ ] CTA tertahan minimal 2 detik di akhir
- [ ] Tidak ada frame kosong/blank/glitch render yang tidak disengaja
- [ ] MP4 terbuka normal, ada audionya, spek sesuai 1.5

---

## 6. YANG DIKIRIM KE AKU

**Tahap A:** naskah VO + 3 varian hook + storyboard + daftar sumber (URL + tanggal).

**Tahap B (final):**
1. **File MP4** final (siap download).
2. **Ringkasan singkat** (maks 5 baris): durasi akhir, voice yang dipakai, sumber musik latar, konsep visual, asumsi yang diambil.
3. **Naskah VO** final.
4. **Caption + 3–5 hashtag** untuk posting.
5. **Daftar sumber** (jika konten memuat informasi atau tutorial faktual).
6. **Prompt visual/video** yang dipakai (jika ada).

---

## 7. CATATAN TAMBAHAN DARI AKU (isi tiap project, opsional)

```
Judul / topik        :
Kategori             : (tutorial AI / update AI / umum untuk followers)
Platform             : (default: TikTok, Reels, Shorts, Threads)
Seri & part          : (kosongkan jika bukan seri)
Target spesifik      :
Pain point utama     :
Pengalaman asli      : (hal yang benar-benar gue alami/coba, untuk perkenalan "belajar sambil bikin")
Produk / soft sell   : (nama + link, kosongkan jika tidak ada)
CTA                  :
Tagline              :
Bahan / knowledge    : (file, link, screenshot)
Testimoni asli       : (jika ada, lampirkan)
Durasi               : (kosong = ikuti naskah)
Larangan khusus      :
```

---

*Catatan buat Claude: bagian kredit dan lisensi ini bukan instruksi pembuatan video. Jangan masukkan ke naskah, teks layar, atau watermark video.*
