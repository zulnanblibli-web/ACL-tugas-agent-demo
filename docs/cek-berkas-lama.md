# Cek berkas lama + rencana tampilan repo jasa

Dibuat 2026-11-12 untuk dicek Zulnan. **Belum ada yang dihapus.**

**Cara pilih:** sebut nomornya di chat, contoh: "hapus Z1, Z3, J2". Yang nggak disebut tetap disimpan.

## Keputusan tampilan jasa (Zulnan 2026-11-12)

Repo jasa pindah ke tampilan Zuno Studio (Nexaoffice), jalan di laptop maupun VPS. Tampilan HUD lama tidak dipakai lagi.

| # | Keputusan |
|---|---|
| K1 | Pembeli langsung masuk Workspace. Bagian jualan di halaman depan (harga, "Pesan kit", produk lain) **tidak ikut**, karena itu toko Zulnan. |
| K2 | Nama yang tampil: nama brand pembeli (diisi di `brand.js`), bawaannya "Nexaoffice". |
| K3 | Kredit "Creative @nexamind.ai" tetap ada, kecil di footer. |

## Arti status

- 🔴 **Tidak dipakai**: nggak ada kode, tes, atau dokumen aktif yang memakainya. Dihapus pun nggak ada yang rusak.
- 🟡 **Lama, masih disebut**: masih disebut di dokumen lain atau masih bisa dijalankan, tapi bukan bagian alur kerja sekarang. Kalau dihapus, sebutannya gua bersihin juga.
- 🟠 **Nanti tidak dipakai**: sekarang masih dipakai tampilan HUD jasa. Jadi nganggur setelah jasa pindah ke tampilan Nexaoffice.
- 🟢 **Lama tapi masih dipakai**: jangan dihapus, ada yang bakal rusak.

## Repo Zuno (`ACL-tugas-agent-demo`)

| No | Berkas | Status | Gunanya / kenapa | Kalau dihapus |
|---|---|---|---|---|
| Z1 | `prototypes/zuno-studio-v1.html` + `tests/zuno-studio-v1-stub-test.js` | 🔴 | Zuno Studio versi 1. Sudah diganti v2 sejak awal; cuma dites oleh tesnya sendiri. | Nggak ada yang rusak. |
| Z2 | `prototypes/zuno-skema-preview.html` | 🔴 | Halaman pratinjau skema lama. Nggak disebut di mana pun. | Nggak ada yang rusak. |
| Z3 | `docs/desain-zulnan-motion.md` | 🔴 | Brief video motion lama. Isinya sendiri bilang: kalau bertentangan, `referensi-video.md` dan `brief-gaya-konten.md` yang berlaku. | Nggak ada yang rusak. |
| Z4 | `docs/prompt-orkestrasi-zuno.docx` | 🔴 | Salinan Word dari `prompt-orkestrasi-zuno.md` (yang `.md` tetap). | Nggak ada yang rusak. |
| Z5 | `docs/serah-terima-chat-baru.md` | 🟡 | Serah terima ke chat baru, 2026-11-05. Isinya basi; sekarang pakai `progress.md` + `memori-zuno.md`. Masih disebut di `memori-zuno.md`. | Sebutan di memori gua hapus. |
| Z6 | `docs/rilis-antigravity.md` + folder `.agents/` | 🟡 | Rilis lewat Antigravity. Sudah diganti Claude Desktop + agent-desktop (2026-11-06); di `tangan-komputer.md` ditulis "tinggal cadangan". | Cadangan Antigravity hilang. Sebutan di memori dan `tangan-komputer.md` gua bersihin. |
| Z7 | `.hallmark/shots/` (5,3 MB) | 🔴 | Screenshot hasil cek hallmark waktu bikin situs Nexaoffice. Bisa dibuat ulang kapan saja. | Nggak ada yang rusak. |
| Z8 | `web/assets/site/kantor-studio.webp` | 🔴 | Gambar kartu tema lama. Nggak dipakai halaman mana pun. | Nggak ada yang rusak. |
| Z9 | `assets/maskot/` (2 PNG, 1,4 MB) | 🟡 | Maskot lama (kaos teal, kaos putih). Cuma disebut di `brief-gaya-konten.md`; karakter sekarang Zuno robot + avatar voxel. | Sebutan di brief gua bersihin. |
| Z10 | `skills/engineering/*.zip` (5 zip) | 🔴 | Salinan zip dari folder skill di sebelahnya. Folder skill-nya tetap. | Nggak ada yang rusak. |
| Z11 | `agents/arsip-23-agen/`, `agents/arsip-2026-11-09/` | 🟡 | Profil agen versi lama (23 agen dan sebelum 2026-11-09). Masih disebut di `CLAUDE.md` dan beberapa profil sebagai arsip. | Riwayat profil lama hilang (masih ada di riwayat git). Sebutannya gua bersihin. |
| Z12 | `antrian-posting/` + skill `antrian-posting` | 🟢 | Antrian Posting versi laptop. **Masih dipakai** sampai auto posting dari web (P1) jalan. | Antrian posting laptop berhenti. Saran: tunggu P1. |
| Z13 | `prototypes/arsip/zuno-carousel-opsi.html` | 🟡 | Contoh pilihan desain carousel. Masih disebut di `template-carousel.md` dan brief sebagai contoh. | Contoh visual carousel hilang. |
| Z14 | `tests/zuno-studio-v2-stub-test.js` | 🟢 | Tes langsung ke prototipe v2. Masih jalan dan lolos; agak tumpang tindih dengan tes build stub. | Satu lapis tes hilang. Saran: simpan. |
| Z15 | `web/hud.css`, `web/src/hud.css`, `web/motion.js`, `web/src/motion.js` | 🟠 | Gaya dan gerak HUD lama, cuma dipakai jasa. | Aman setelah jasa pindah tampilan. |
| Z16 | `web/src/hero.html`, `flow.html`, `tail.html`, `web/assets/zuno-hero.webp`, cabang `jasa` di `web/bangun.mjs` | 🟠 | Hero robot, diagram "Cara kerja", footer HUD, gambar robot. Cuma dipakai jasa. | Aman setelah jasa pindah tampilan. |

Lama tapi masih dipakai di repo Zuno (🟢, nggak usah dipilih):
- `web/hud.js`: namanya HUD, tapi masih dipakai Workspace Nexaoffice dan Pengaturan AI.
- `web/assets/karakter/`, `assets/karakter/`: gambar karakter untuk prompt video tipe A/B.
- `tools/video-nexaoffice/`: sumber video Remotion di situs. Folder `node_modules` 138 MB di dalamnya nggak ikut git.
- `pasang-tangan-komputer.bat`, `tools/laptop/`, `tools/rilis/`: tangan komputer Divisi Engineering.
- `tools/kantor/ambil-kantor.mjs`: menyalin Kantor 3D dari repo jasa ke web lu.

## Repo jasa (`zuno-studio-app`)

| No | Berkas | Status | Gunanya / kenapa | Kalau dihapus |
|---|---|---|---|---|
| J1 | `docs/HANDOFF_CLAUDE_GROTTO_VISUAL.md`, `docs/PROMPT_CLAUDE_GROTTO_VISUAL.md` | 🔴 | Catatan serah terima sesi lain waktu bikin The Grotto. Cuma saling menyebut. | Nggak ada yang rusak. |
| J2 | `progress.md` (repo jasa) | 🔴 | Catatan kerja sesi Kantor 3D 2026-11-08. Bukan untuk pembeli. | Nggak ada yang rusak. |
| J3 | `downloads/` (video + zip, 18 MB) + `tools/package-preview.py`, `tools/package-nexa-preview.py` | 🟡 | Paket preview lama untuk dibagikan, plus alat pembuatnya. Bikin repo berat. | Perintah `npm run package:*` gua hapus juga. |
| J4 | `preview/` (7,5 MB) + `tests/preview.test.cjs`, `tools/build-preview.mjs`, `tools/build-nexa-preview.mjs` | 🟡 | Hasil pratinjau Kantor 3D lama, tes, dan alat pembuatnya. | Perintah `npm run build:preview` dan `test:preview` gua hapus juga. Tes Kantor 3D lain tetap. |
| J5 | `artifacts/office/` (36 berkas, 18 MB) | 🟡 | Screenshot dan log hasil tes Kantor 3D. Ditulis ulang tiap tes jalan. | Saran: **bukan dihapus**, tapi dikeluarkan dari git (`.gitignore`). Tes tetap bisa menulisnya di laptop. |
| J6 | `hud.css`, `motion.js`, isi HUD di `index.html` | 🟠 | Tampilan HUD lama jasa. | Diganti otomatis waktu jasa pindah ke tampilan Nexaoffice. |
| J7 | `PANDUAN.md` | 🟠 | Panduan lama (pasang di Vercel, tampilan HUD). | Bukan dihapus: **ditulis ulang** untuk tampilan baru, disatukan dengan `PANDUAN-LOKAL.md`. |

Lama tapi masih dipakai di repo jasa (🟢, nggak usah dipilih):
- `office/`, `nexa/`, `kantor.html`, `nexa.html`, `assets/agents`, `assets/themes`, `assets/nexa`: **sumber Kantor 3D** (3 tema, 18 karakter). Web lu menyalin dari sini.
- `tools/capture-*.cjs`, `tools/export-agents.mjs`, `tools/character-gallery.mjs`, tes `*.test.*` lainnya: dipakai `npm run build:office` dan tes Kantor 3D.
- `.github/workflows/office.yml`: tes otomatis Kantor 3D di GitHub.
- `AGENTS-18.md`: data 18 agen untuk galeri karakter.

## Saran gua

- **Langsung aman:** Z1, Z2, Z3, Z4, Z7, Z8, Z10, J1, J2.
- **Aman, sebutannya ikut dibersihin:** Z5, Z6, Z9, J3, J4, J5 (keluar git).
- **Simpan dulu:** Z11 (arsip), Z12 (tunggu P1), Z13, Z14.
- **Otomatis setelah jasa pindah tampilan dan tes lolos:** Z15, Z16, J6, J7.
