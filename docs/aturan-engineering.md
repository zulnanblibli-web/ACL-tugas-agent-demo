# Aturan Kerja Divisi Engineering

Dibuat 2026-11-02 atas permintaan Zulnan. Divisi Engineering membangun apa yang Zulnan minta: web app untuk pemakaian pribadi, portofolio, atau klien jasa pembuatan web app. Divisi ini terpisah dari divisi kreatif (konten), tetapi tetap di bawah Lead (Orkestraror Agen dan Juru Kabar).

**Status: standby.** Divisi ini tidak ikut alur konten harian; langsung aktif saat Zulnan mengirim permintaan build. Di Zuno Studio v2 ada ruang kerja sendiri (tab "Build App") dengan state, proses, dan hasil yang terpisah dari tab "Konten". Satu proses berjalan dalam satu waktu.

Agen: T.1 Arsitek & Analis Kebutuhan, T.2 Desainer UI/UX, T.3 Pengembang Aplikasi, T.4 Penguji & Rilis (profil di `agents/15-18`). Skill kerja yang sudah disesuaikan ada di `skills/engineering/`.

## 1. Empat prinsip kerja (wajib untuk semua agen Engineering)

Diadaptasi dari [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) (lisensi MIT), berdasarkan pengamatan Andrej Karpathy soal kesalahan umum AI saat menulis kode.

1. **Pikir dulu sebelum ngoding.** Sebutkan asumsi. Kalau ada lebih dari satu tafsiran, tampilkan pilihannya, jangan pilih diam-diam. Kalau ada cara yang lebih sederhana, katakan. Kalau bingung, berhenti dan tanya.
2. **Sesederhana mungkin.** Hanya fitur yang diminta. Tanpa lapisan atau "fleksibilitas" yang tidak diminta. Kalau 200 baris bisa jadi 50, tulis ulang.
3. **Ubah seperlunya.** Jangan "merapikan" kode, komentar, atau format di luar permintaan. Ikuti gaya kode yang sudah ada. Kode mati yang ditemukan dilaporkan, tidak dihapus. Setiap baris yang berubah harus bisa ditelusuri ke permintaan.
4. **Kerja berbasis tujuan.** Setiap tugas diubah jadi tujuan yang bisa dicek ("tombol unduh menghasilkan file .xlsx berisi semua data"). Rencana bertahap ditulis dengan cara ceknya. Kerja diulang sampai cek terpenuhi.

## 2. Alur dan gerbang persetujuan

```
Permintaan Zulnan / klien
  -> T.1 Kunci ruang lingkup (masalah, maks. 5 fitur MVP, out of scope, definisi selesai) + pilih mesin
  -> GERBANG 1: Zulnan setujui ruang lingkup
  -> T.2 Wireframe + UI/UX + cek animasi
  -> GERBANG 2: Zulnan setujui tampilan
  -> T.3 Bangun aplikasi (mode preview dulu)
  -> T.4 Uji (laptop + layar HP), perbaiki bug, siapkan rilis dan panduan
  -> GERBANG 3: Zulnan setujui hasil uji -> rilis (deploy)
```

- Tidak ada coding sebelum Gerbang 1. Tidak ada rilis sebelum Gerbang 3.
- Laporan "selesai" wajib membawa bukti uji dari T.4 (screenshot, daftar cek lolos). Bila belum diuji, tulis "belum diuji".
- Revisi: hanya bagian yang diminta yang berubah; fitur lain tetap.
- Status proyek: Ide, Ruang Lingkup Disetujui, Desain Disetujui, Dibangun, Diuji, Rilis.
- Error dan kendala disampaikan ke Zulnan lewat Juru Kabar dengan bahasa sederhana plus langkah yang bisa diambil.

### Di Zuno Studio v2 (tab Build App)
- Isian: permintaan, jenis proyek (portofolio/pribadi/klien + nama dan kredit klien), mesin (otomatis atau dipilih), fitur AI, kotak Contoh akses.
- Akun awal dibuat acak oleh halaman (bukan oleh AI) dan dicantumkan di panduan.
- T.3 menulis `index.html` (mode preview) dan file backend (`Code.gs`, `firestore.rules`, atau `schema.sql`).
- T.4 = cek otomatis (file lengkap, IS_PREVIEW, TAMPILKAN_CONTOH_LOGIN, Reset Akses, hash, tanpa password lama, kredit, tanpa TODO, tanpa API key, viewport, AI_PROVIDER bila AI, halaman jalan di browser tanpa error) + tinjauan AI per butir definisi selesai. Tinjauan AI bukan uji jalan; butir "perlu uji manual" dicoba di backend asli dan HP.
- Unduhan: `index.html`, file backend, `PANDUAN.md` (ruang lingkup, akun awal, setup, laporan uji). Rilis tidak dilakukan di halaman ini.

## 3. Pilihan mesin aplikasi (dipilih T.1 per proyek)

| Mesin | Cocok untuk | Catatan |
|---|---|---|
| Google Apps Script + Google Sheets (PWA) | Aplikasi kecil-menengah: absensi, stok, pendaftaran, sekolah | Gratis, data bisa dilihat di Sheets; lebih lambat dan ada kuota harian |
| Apps Script (backend) + Blogger/Sites (frontend) | Sama seperti di atas, tampilan di Blogger | Hosting gratis, bisa domain sendiri |
| Firebase (Firestore + Auth), satu file HTML (PWA) | Pengguna banyak, data realtime | Gratis sampai batas tertentu, lalu berbayar; setup lebih banyak |
| Vercel + Supabase | Proyek besar atau butuh fungsi server | Pakai skill `gas-vercel-publisher` dan sejenisnya |

Biaya apa pun (langganan, kredit, domain, kunci API berbayar) wajib izin Zulnan dulu.

## 4. Standar setiap proyek

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
