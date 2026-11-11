# Aturan Kerja Divisi Engineering

Dibuat 2026-11-02 atas permintaan Zulnan. Divisi Engineering membangun apa yang Zulnan minta: web app untuk pemakaian pribadi, portofolio, atau klien jasa pembuatan web app. Sejak 2026-11-11 (Zulnan) cakupannya **semua bentuk development yang jalan di browser**: web app, website/landing page, game, 3D & interaktif, dan lainnya (lihat bagian "Jenis build"). Divisi ini terpisah dari divisi kreatif (konten), tetapi tetap di bawah Lead (Orkestraror Agen dan Juru Kabar).

**Status: standby.** Divisi ini tidak ikut alur konten harian; langsung aktif saat Zulnan mengirim permintaan build. Di Zuno Studio v2 ada ruang kerja sendiri (tab "Agent Builder") dengan state, proses, dan hasil yang terpisah dari tab "Konten". Satu proses berjalan dalam satu waktu.

Agen: T.1 Arsitek & Analis Kebutuhan, T.2 Desainer UI/UX, T.3 Pengembang Aplikasi, T.4 Penguji & Rilis (profil di `agents/15-18`). Skill kerja yang sudah disesuaikan ada di `skills/engineering/`.

## 1. Empat prinsip kerja (wajib untuk semua agen Engineering)

Diadaptasi dari [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) (lisensi MIT), berdasarkan pengamatan Andrej Karpathy soal kesalahan umum AI saat menulis kode.

1. **Pikir dulu sebelum ngoding.** Sebutkan asumsi. Kalau ada lebih dari satu tafsiran, tampilkan pilihannya, lalu **putuskan sendiri** dengan patokan brief (permintaan, PRD, referensi Zulnan) dan catat keputusannya (apa, alasan, risiko bila salah). Kalau ada cara yang lebih sederhana, katakan. Berhenti dan tanya hanya untuk hal di bagian 2 "Kapan berhenti".
2. **Sesederhana mungkin.** Hanya fitur yang diminta. Tanpa lapisan atau "fleksibilitas" yang tidak diminta. Kalau 200 baris bisa jadi 50, tulis ulang.
3. **Ubah seperlunya.** Jangan "merapikan" kode, komentar, atau format di luar permintaan. Ikuti gaya kode yang sudah ada. Kode mati yang ditemukan dilaporkan, tidak dihapus. Setiap baris yang berubah harus bisa ditelusuri ke permintaan.
4. **Kerja berbasis tujuan.** Setiap tugas diubah jadi tujuan yang bisa dicek ("tombol unduh menghasilkan file .xlsx berisi semua data"). Rencana bertahap ditulis dengan cara ceknya. Kerja diulang sampai cek terpenuhi.

## 2. Alur: diputuskan sendiri, ditinjau tiap tahap (alur superpowers)

Keputusan Zulnan 2026-11-06: tiga gerbang persetujuan diganti alur [superpowers](https://github.com/obra/superpowers) (MIT). Divisi Engineering **memutuskan sendiri** di tengah build, tetapi selalu berpatokan pada brief Zulnan: permintaan, PRD (.md), dan referensi desain yang diunggah. Setiap tahap dikerjakan, ditinjau Penguji (sesuai spesifikasi + mutu), diperbaiki sampai lolos, lalu lanjut tanpa menunggu Zulnan.

```
Permintaan Zulnan / klien (+ PRD .md, + referensi desain)
  -> T.1 Kunci ruang lingkup (semua fitur tanpa batas jumlah, out of scope, definisi selesai) + pilih mesin
  -> Tinjauan 1 (T.4): fitur tidak hilang, tidak ada fitur tambahan, pertanyaan terbuka diputuskan -> perbaiki (maks. 2 putaran)
  -> T.2 Wireframe + UI/UX + cek animasi (acuan: referensi desain)
  -> Tinjauan 2 (T.4): halaman lengkap, login/Reset Akses/kredit, responsif, mengikuti referensi -> perbaiki (maks. 2 putaran)
  -> T.3 Bangun aplikasi (mode preview dulu)
  -> T.4 Cek otomatis + tinjauan kode -> T.3 memperbaiki temuan (maks. 2 putaran; sisa dicatat sebagai risiko)
  -> Paket rilis (.zip, berisi rilis.mjs + rilis.json) -> laptop Zulnan: Claude Desktop (Remote Control) + agent-desktop (skill rilis-engineering) menjalankan rilis.mjs sesuai mesin, langkah layar lewat agent-desktop, uji link live; tanpa disentuh Zulnan selain login/izin sekali
  -> Link live + bukti uji + catatan keputusan dikirim ke Zulnan
```

- **Catatan keputusan** wajib: setiap hal yang diputuskan sendiri dicatat (tahap, keputusan, alasan dari brief, risiko bila salah). Tampil di Agent Builder, ikut di `PANDUAN.md` paket rilis, dan di laporan rilis.
- **Kapan berhenti dan tanya Zulnan** (hanya ini): pembayaran atau upgrade paket; API key, password, login, OTP, atau rahasia lain; tindakan yang merusak atau menghapus data; akun deploy proyek klien yang belum jelas.
- Zulnan tetap bisa memberi catatan tambahan kapan saja (tombol "Ubah dengan catatan" di Agent Builder, atau bilang ke Claude Code); hanya bagian itu yang diubah.
- Skill superpowers yang dipakai di Claude Code: `writing-plans` (rencana bertahap dengan cara cek), `test-driven-development` (tes dulu), `subagent-driven-development` (satu pengerja per tugas + peninjau spesifikasi dan mutu), `executing-plans`, `requesting-code-review`, `using-git-worktrees`, `finishing-a-development-branch`. Aturan Zuno tetap menang: push hanya bila Zulnan bilang sendiri. Jalur laptop: `docs/tangan-komputer.md`.
- Laporan "selesai" wajib membawa bukti uji dari T.4 (screenshot, daftar cek lolos). Bila belum diuji, tulis "belum diuji".
- Skill pendukung (Claude Code, `.claude/skills/`):
  - T.1: `grilling` untuk menguji PRD dan ruang lingkup tanpa memangkas fitur.
  - T.2: `hallmark` hanya untuk proyek baru atau bila Zulnan menyebutnya, plus `mobile-native`.
  - T.3: `systematic-debugging`, `review-my-diff`, dan Context7 bila terpasang.
  - T.4: `prove-it-ran` (bukti uji), `break-ui` (data terburuk), `vibe-security` (audit keamanan), `mobile-native`.
- Revisi: hanya bagian yang diminta yang berubah; fitur lain tetap.
- Status proyek: Ide, Ruang Lingkup Terkunci, Desain Terkunci, Dibangun, Diuji, Siap Dirilis, Rilis (live).
- Error dan kendala disampaikan ke Zulnan lewat Juru Kabar dengan bahasa sederhana plus langkah yang bisa diambil.

### Di Zuno Studio v2 (tab Agent Builder)
- Isian: permintaan, jenis proyek (portofolio/pribadi/klien + nama dan kredit klien), mesin (otomatis atau dipilih), fitur AI, kotak Contoh akses.
- Akun awal dibuat acak oleh halaman (bukan oleh AI) dan dicantumkan di panduan.
- T.3 menulis `index.html` (mode preview) dan file backend (`Code.gs`, `firestore.rules`, atau `schema.sql`).
- T.4 = cek otomatis (file lengkap, IS_PREVIEW, TAMPILKAN_CONTOH_LOGIN, Reset Akses, hash, tanpa password lama, kredit, tanpa TODO, tanpa API key, viewport, AI_PROVIDER bila AI, halaman jalan di browser tanpa error) + tinjauan AI per butir definisi selesai. Tinjauan AI bukan uji jalan; butir "perlu uji manual" dicoba di backend asli dan HP.
- Unduhan: `index.html`, file backend, `PANDUAN.md` (ruang lingkup, akun awal, setup, laporan uji). Rilis tidak dilakukan di halaman ini: paket rilis membawa `rilis.mjs` (deploy pasti per mesin), `rilis.json` (mesin, nama, opsi izin Google), `akun-awal.json` (hanya di laptop), `CLAUDE.md` (aturan operator), `jalankan-rilis.bat` (cadangan). Lihat `docs/tangan-komputer.md`.
- Agar rilis otomatis mulus, T.3 menulis: Apps Script `doGet` yang menyajikan `Index` dan memanggil `setupDatabase()` yang aman diulang; Firebase `const firebaseConfig = {apiKey:"ISI"};`; Supabase `const SUPABASE_URL = "";` dan `const SUPABASE_ANON_KEY = "";`; Blogger `const GAS_URL = "";`. rilis.mjs mengisinya.

## 3. Pilihan mesin aplikasi (dipilih T.1 per proyek)

| Mesin | Cocok untuk | Catatan |
|---|---|---|
| Google Apps Script + Google Sheets (PWA) | Aplikasi kecil-menengah: absensi, stok, pendaftaran, sekolah | Gratis, data bisa dilihat di Sheets; lebih lambat dan ada kuota harian |
| Apps Script (backend) + Blogger/Sites (frontend) | Sama seperti di atas, tampilan di Blogger | Hosting gratis, bisa domain sendiri |
| Firebase (Firestore + Auth), satu file HTML (PWA) | Pengguna banyak, data realtime | Gratis sampai batas tertentu, lalu berbayar; setup lebih banyak |
| Vercel + Supabase | Proyek besar atau butuh fungsi server | Pakai skill `gas-vercel-publisher` dan sejenisnya |

Mesin **Statis (Vercel)** (2026-11-11): untuk website, game, 3D, dan build lain tanpa server. `index.html` dideploy apa adanya ke Vercel oleh `rilis.mjs`, tanpa database.

### Jenis build (Zulnan 2026-11-11)
| Jenis | Standar khusus | Cek otomatis tambahan |
|---|---|---|
| Web app (login + data) | akun acak, kotak Contoh akses, Reset Akses, hash SHA-256 + salt, data di backend | IS_PREVIEW, Contoh akses, Reset Akses, hash |
| Website / landing page | semantik (`<main>`, satu `<h1>`), meta description, formulir tervalidasi, kredit di footer | `<main>` + `<h1>`, prefers-reduced-motion |
| Game (browser) | loop requestAnimationFrame + delta waktu, keyboard dan sentuh, layar mulai, jeda, game over + main lagi, skor | requestAnimationFrame, keyboard + sentuh, jeda, prefers-reduced-motion |
| 3D & interaktif | Three.js lewat importmap (versi tertulis) atau WebGL, resize, kontrol mouse + sentuh, pesan bila WebGL tidak ada | Three.js/WebGL, resize, pesan WebGL, prefers-reduced-motion |
| Lainnya | tetap satu `index.html` yang jalan di browser; aplikasi native (APK, iOS, desktop) belum bisa dibuat, dibuat versi browser-nya | standar umum |

Standar umum semua jenis: kredit, responsif, tanpa `// TODO`, tanpa API key di frontend, jalan di pratinjau tanpa galat. Login hanya untuk web app atau bila diminta.

### T.5 Damar: audit lalu perbaiki (Zulnan 2026-11-11)
Damar tidak hanya melapor. Untuk temuan kritis, tinggi, dan sedang yang bisa ditutup di kode, Damar memberi edit cari-ganti kecil; edit diterapkan hanya bila potongannya persis dan unik. Penjaga: file harus tetap utuh dan pratinjau yang tadinya jalan tidak boleh jadi galat; bila rusak, semua edit putaran itu dibatalkan. Setelah memperbaiki, Damar memeriksa ulang kode baru (maks. 2 putaran), lalu cek otomatis diulang. Celah yang masih ada masuk laporan uji dan diperbaiki Pengembang di putaran perbaikan; hasilnya tercatat di `PANDUAN.md` bagian "Audit keamanan". Audit tetap statis, bukan uji penetrasi.

Pilihan mesin di Agent Builder (Zulnan 2026-11-11):
- **Dipilih Zulnan**: mesin itu yang dipakai, apa pun isi referensinya.
- **Otomatis**: T.1 mengikuti mesin atau teknologi yang disebut di permintaan, PRD, atau catatan referensi desain (mesin yang sama dari daftar, atau yang paling dekat bila tidak ada di daftar), dan menyebut petunjuknya di alasan mesin. Gambar referensi desain hanya untuk tampilan, bukan mesin. Tanpa petunjuk: mesin paling sederhana yang cukup untuk semua fitur.

Biaya apa pun (langganan, kredit, domain, kunci API berbayar) wajib izin Zulnan dulu.

## 4. Standar setiap proyek

### 4-0. Standar anti-slop dan skill desain (Zulnan 2026-11-11)
- Hasil tidak boleh terlihat "buatan AI". Ringkasan dari skill hallmark, frontend-design, dan impeccable (juga ada di prompt Agent Builder web, `STANDAR ANTI-SLOP`):
  - Dilarang: gradasi ungu-ke-biru, kartu di dalam kartu, emoji sebagai ikon, eyebrow (label kecil huruf kapital berjarak), satu kata miring di judul tegak, deretan "A · B · C", panah menempel di teks tautan, angka/testimoni/logo/studi kasus karangan, hero angka besar + statistik sebagai bawaan.
  - Wajib: warna dan font lewat token `:root` dengan satu arah visual yang jelas sesuai brief/referensi; `transition` per properti (bukan `all`), animasi hanya transform/opacity + fallback `prefers-reduced-motion`; `:focus-visible` di semua kontrol; kontras teks minimal 4.5:1; panjang baris 65-75ch; satu gaya tombol utama per layar; bagian yang belum ada isinya ditandai [ISI].
  - Cek otomatis Agent Builder: "Anti-slop: tanpa transition: all" dan "Anti-slop: :focus-visible di kontrol" (bila ada kontrol); gagal = masuk putaran perbaikan T.3. T.4 selalu memberi butir tinjauan "Standar anti-slop".
- Di Claude Code (cloud/laptop), skill GitHub pilihan Zulnan dipakai per tahap: T.2 `hallmark` (bawaan halaman baru), `frontend-design`, `impeccable`, `hue`, `awwwards`, `design-taste-frontend` (bila disebut); T.3 `ui-ux-pro-max`, `ui-styling`, skill Blender (aset 3D/game, ekspor GLTF); T.4 `impeccable` critique/audit/polish, `jury`. **Sebelum mendesain, pilihan referensi/arah/skill ditampilkan ke Zulnan dan Zulnan yang memilih.** Deploy: preview `index.html` dulu, lalu deploy setelah Zulnan setuju. Daftar lengkap: `.claude/skills/README.md`.

### 4a. Kredit Nexamind
- Proyek **pribadi dan portofolio**: wajib mencantumkan **"Creative @nexamind.ai"** di footer aplikasi, di halaman login, di `<meta name="author">`, dan di panduan penggunaan.
- Proyek **klien**: kredit mengikuti permintaan klien (T.1 menanyakannya saat mengunci ruang lingkup). Bila klien tidak menyebut, tanyakan; jangan pasang atau hapus sepihak.

### 4b. Akses login
- **Tidak ada password bawaan yang sama di semua proyek.** Setiap proyek dibuatkan username dan password acak (minimal 10 karakter, huruf + angka) untuk Admin dan akun contoh, dicatat di panduan proyek.
- **Contoh akses tetap ditampilkan di halaman login** (kotak "Contoh akses") supaya gampang dicoba. Kotak ini diatur oleh satu setelan `TAMPILKAN_CONTOH_LOGIN` (bawaan `true` untuk pribadi/portofolio; proyek klien sesuai permintaan klien).
- **Menu Reset Akses (wajib, khusus Admin):** mengganti username dan password Admin, mengganti atau mematikan akun contoh, dan menyalakan/mematikan kotak "Contoh akses", tanpa menyentuh kode.
- **Password disimpan dalam bentuk hash** (SHA-256 + salt; di Apps Script `Utilities.computeDigest`, di browser `crypto.subtle`). Password asli tidak disimpan di Sheets atau Firestore. Pada Firebase, Admin tetap memakai Firebase Authentication.
- Kunci rahasia (API key LLM, token) tidak pernah ditulis di kode frontend.

### 4c. Fleksibel ke semua LLM
- **Saat membangun:** instruksi skill tidak terikat satu platform. Kata "Canvas" berarti tempat pratinjau di platform yang dipakai: Canvas (Gemini/ChatGPT), Artifact (Claude), atau file biasa.
- **Saat aplikasi live dan memakai AI:** penyedia LLM bisa diganti lewat satu blok konfigurasi, bukan ditulis mati di kode:
  ```javascript
  // KONFIGURASI AI (ganti penyedia tanpa ubah kode lain)
  const AI_PROVIDER = "claude";        // "claude" | "gemini" | "openai" | "openrouter"
  const AI_MODEL    = "ISI_NAMA_MODEL"; // nama model dari penyedia yang dipilih
  ```
  - Satu fungsi `tanyaAI(prompt)` dengan adaptor per penyedia (format permintaan dan jawaban beda-beda per penyedia).
  - API key disimpan di sisi server: Script Properties (Apps Script), environment variable (Vercel/Supabase), atau Cloud Function (Firebase). Untuk Firebase satu file tanpa server, fitur AI wajib lewat fungsi perantara; jangan taruh key di HTML.
  - Admin bisa melihat penyedia dan model yang aktif di menu Pengaturan; penggantian key dilakukan di sisi server.

### 4d. Isi wajib serah terima
- Kode lengkap tanpa `// TODO` atau fungsi kosong.
- Panduan penggunaan langkah demi langkah (setup, deploy, ganti akses lewat menu Reset Akses, ganti penyedia AI bila ada).
- Daftar akun awal (acak) dan cara menggantinya.
- Laporan uji dari T.4.

### 4e. Data dan proyek klien
- Satu proyek, satu folder atau repo. Data klien tidak dicampur dengan memori Zuno atau proyek lain.
- Tidak menyimpan password asli, data pembayaran, atau data pribadi pengguna di luar database proyek itu sendiri.
- Harga jasa: [HARGA BELUM DITENTUKAN].

## 5. Ditunda
- **google/artemis** (Apache 2.0, agen AI yang memakai HP Android sungguhan untuk uji): **di-hold** atas keputusan Zulnan. Butuh HP Android tercolok atau emulator dan kunci API; tidak berjalan di sesi cloud. Uji layar HP saat ini memakai emulasi browser (Playwright).
