# Daftar perbaikan: Nexaoffice jalan di laptop sampai Antrian Posting

Dibuat 2026-11-12 untuk Zulnan. Dikerjakan **satu per satu, urut dari atas**. Tandai ✅ kalau selesai.

**Tujuan (kata Zulnan):** otaknya ada di tools yang jalan di laptop. Bisa ngerjain beberapa tugas langsung di situ, hasilnya di-preview di situ sampai Zulnan setuju, terus masuk list posting.

## Kondisi sekarang (dicek dari kode dan situs live, 2026-11-12)

| Sudah ada | Belum ada |
|---|---|
| Workspace jalan di laptop; tampilan sama dengan website (dikonfirmasi Zulnan) | Agen belum pernah dites pakai API key asli. Semua bukti masih tes tiruan (stub) |
| Riset Google Trends/News/Hacker News dan gambar Wikimedia gratis, tanpa API key | Satu perintah jalan sekali. Belum ada antrean untuk beberapa tugas sekaligus (`busy`/`running` cuma satu) |
| Hasil bisa disimpan ke folder laptop per tugas (pilih folder di browser) | Status persetujuan dan antrian belum tersimpan permanen. Refresh = hilang (P7) |
| Carousel jadi PNG asli | Video baru berupa paket rencana + ZIP untuk Claude Code, **belum jadi file .mp4 otomatis** |
| Pemasang `pasang.bat`/`pasang.sh` | Pemasang belum terbukti di Windows lu (Fase 0) |
| Antrian Posting (konsep + folder) | Jembatan web ke Claude Code (`/api/kerja`) belum dibangun |
| | Belum ada pembeda akun **personal** vs **niche** |

## Daftar (urut)

| No | Perbaikan | Kenapa | Selesai kalau | Butuh API key? | Status |
|---|---|---|---|---|---|
| L1 | **Cek laptop (Fase 0):** `git pull`, jalankan `node tools/pasang/cek-kesiapan.mjs`, kirim hasilnya | Semua langkah lokal berikutnya bergantung ke Claude Code jalan di laptop lu | `claude --version`, `claude -p "halo"` jalan; cek kesiapan bilang Claude Code OK | Tidak (tapi butuh akun Claude, lihat catatan biaya) | ⬜ Zulnan |
| L2 | **Menu Akun: Personal / Niche** (aturan baru Zulnan, detail di bawah) | Karakter lu cuma buat akun pribadi. Akun niche (stick man, opuscar, dll.) punya identitas sendiri | Tiap perintah punya akun tujuan; kartu, preview, folder, dan antrian berlabel akun; tes: akun niche tidak pernah memuat karakter/slogan/foto Zulnan | Tidak | ⬜ |
| L3 | **Simpan permanen di laptop (P7):** tugas, hasil, status (Draf, Ditinjau, Disetujui), dan antrian disimpan di disk (`kerja/` + file JSON) lewat server lokal | Preview sampai disetujui bisa makan hari. Refresh atau tutup browser tidak boleh menghapus apa pun | Tutup browser, matikan server, nyalakan lagi: semua tugas dan status masih ada | Tidak | ⬜ |
| L4 | **Daftar tugas + antrean:** beberapa perintah bisa dimasukkan; dijalankan berurutan (1 jalan, sisanya menunggu), tiap tugas punya status dan bisa dibatalkan | "Bisa ngerjain beberapa task langsung." Berurutan dulu, paralel nanti (hemat kuota API dan RAM) | Masukkan 3 perintah, ketiganya selesai tanpa ditunggui; satu bisa dibatalkan | Ya, untuk isi hasilnya. Mekanisme antreannya bisa dites pakai stub | ⬜ |
| L5 | **Panel Preview + tombol keputusan:** tiap tugas punya halaman preview (carousel PNG, video, web `index.html`), lalu tombol **Setujui**, **Revisi (dengan catatan)**, **Tolak** | Status Disetujui hanya dari lu. Revisi harus bisa dari situ, tanpa ngetik ulang perintah | Tes Playwright: tanpa klik Setujui, tidak ada yang masuk antrian | Tidak (tes pakai stub) | ⬜ |
| L6 | **Disetujui -> Antrian Posting per akun** + jadwal rencana (tanggal/jam) | Antrian personal dan niche tidak boleh tercampur | Konten disetujui muncul di antrian akun yang benar, berikut berkas final dan caption | Tidak | ⬜ |
| L7 | **Uji nyata pertama dengan API key** (lu yang isi key di `.env.local`/Pengaturan AI): 1 carousel, 1 paket video, 1 landing page | Sampai sini belum ada bukti tools works | Tiga hasil jadi; dicatat waktu, biaya, dan berapa revisi | **Ya** | ⬜ Zulnan + gua |
| L8 | **Jembatan ke Claude Code (`/api/kerja`, Fase 2)** | Supaya skill lengkap (render video, desain web, Blender) jalan dari tombol di web | Tes keamanan di `rencana-lokal-claude-code.md` lolos; satu tugas stub menghasilkan folder kerja | Ya (akun Claude) | ⬜ |
| L9 | **Render video jadi .mp4 otomatis** (Remotion/HyperFrames lewat L8), hasil masuk Preview | Sekarang video baru rencana. Portofolio butuh file jadi | Satu perintah video menghasilkan .mp4 yang lolos `check.py` dan tampil di Preview | Ya | ⬜ |
| L10 | **Template niche pertama** (urutan saran: Bedah -> Stick man -> dunia-komentar (konsep K-A..K-D); lihat `strategi-portofolio.md`) | Bahan portofolio | Template + 3 contoh video lolos Preview | Ya | ⬜ |
| L11 | **Rapikan klaim di situs:** "18 agen" vs 19 profil (Hana belum punya meja); FAQ "Agen bisa posting sendiri? Bisa" padahal jalur kirim belum aktif; bagian "Contoh hasil" belum berisi hasil asli | Klaim harus sesuai bukti | Tiap klaim di halaman bisa ditunjukkan buktinya | Tidak | ⬜ |
| L12 | **Kirim posting (P1):** Metricool + Google Drive | Langkah terakhir, setelah antrian lokal terbukti | Satu konten yang disetujui terjadwal dan ada tautan postingnya | Akun Metricool (sisi lu) | ⬜ pending P1 |

Yang bisa langsung dikerjakan tanpa nunggu apa pun: **L2, L3, L4 (mekanisme), L5, L6, L11.**

## Aturan baru: Akun Personal vs Niche (Zulnan 2026-11-12)

Karakter Zulnan (avatar voxel Zulnan + Zuno, video tipe A/B) **cuma dipakai untuk produksi akun pribadi Zulnan**. Skill dan template lain (lemo-opuscar, stick man, gaya kota-komentar, bedah) buat niche sendiri. Workspace punya menu pilihan akun supaya agen tahu sedang produksi untuk akun mana.

| | Personal (akun Zulnan) | Niche (akun lain) |
|---|---|---|
| Karakter Zulnan + Zuno (tipe A/B) | Boleh | **Tidak boleh** |
| Slogan "Hai, kenalin Gue Zulnan..." | Wajib di video | **Tidak dipakai** |
| Foto Zulnan di cover carousel | Bawaan | **Tidak dipakai** |
| Bank fakta / cerita Zulnan, 6 pilar | Dipakai | Tidak dipakai; pakai brief niche akun itu |
| Tipe video C (Zulnan di frame) | Boleh | Tidak ada |
| Identitas | Creative @nexamind.ai, handle Zulnan | Nama, handle, palet, karakter niche sendiri (bukan tiruan akun referensi) |
| Aturan dasar (tanpa mengarang, sumber disebut, persetujuan Zulnan, tanda konten AI) | Berlaku | Berlaku |

Usulan cara kerja (diputuskan Zulnan saat L2 dikerjakan):
- Pilihan **Akun** di atas kotak perintah. Isinya: Personal, plus akun niche yang dibuat dari menu Pengaturan > Akun (nama, handle [ISI], niche, template bawaan, larangan).
- Bawaan: akun terakhir dipakai. Nama akun selalu tampil di kartu, Preview, nama folder (`tanggal Konten [akun] - judul`), dan Antrian Posting.
- Kode yang memaksa: akun niche menghapus karakter, slogan, dan foto Zulnan dari konteks agen sebelum dikirim ke AI, jadi aturannya tidak bergantung pada AI yang "ingat".
