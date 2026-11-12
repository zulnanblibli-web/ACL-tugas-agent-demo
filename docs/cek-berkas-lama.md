# Cek berkas lama + rencana tampilan repo jasa

Dibuat 2026-11-12 untuk dicek Zulnan. **Belum ada yang dihapus atau diubah.** Centang yang boleh dihapus, nanti gua kerjakan.

## Bagian 1. Repo jasa pakai tampilan Zuno Studio (Nexaoffice)

**Bisa.** Ruang kerja di web lu (`/studio.html`) dan ruang kerja jasa dibangun dari sumber yang sama (`prototypes/zuno-studio-v2.html`). Bedanya cuma "kulit":
- web lu pakai kulit Nexaoffice (The Grotto, kantor 3D tertanam);
- jasa masih pakai kulit HUD lama (robot biru, kartu kaca).

Jadi caranya: ekspor jasa diganti supaya memakai kulit Nexaoffice juga, lalu identitas lu diganti profil brand pembeli seperti sekarang. Server-nya tetap satu (`server.mjs`), jadi jalan sama di laptop (`pasang.bat` / `jalankan-lokal.bat`) maupun VPS (`tools/vps`).

Yang ikut ke jasa:
- Workspace: perintah, tab Konten dan Agent Builder, hasil kerja agen live.
- Kantor 3D tertanam + 3 tema (Menara Senja, Griya Langit, The Grotto) + galeri karakter.
- Menu Chat, Pengaturan AI, Tambah agen (HRD).

Yang perlu lu putuskan:

| # | Pertanyaan | Saran gua |
|---|---|---|
| K1 | Halaman depan situs lu isinya jualan kit (harga, "Pesan kit", produk lain). Di jasa mau gimana? | Pembeli langsung masuk Workspace. Bagian jualan nggak ikut, karena itu toko lu, bukan toko pembeli. |
| K2 | Nama yang tampil di jasa: "Nexaoffice" atau nama brand pembeli (diisi di `brand.js`)? | Nama brand pembeli, bawaannya "Nexaoffice". |
| K3 | Kredit "Creative @nexamind.ai" di footer jasa: tetap ada atau dihapus? | Tetap, kecil di footer. |

Setelah ini jalan, berkas HUD lama di Bagian 2C jadi nggak terpakai.

## Bagian 2. Daftar berkas lama

Cara cek: gua cari tiap berkas dirujuk dari mana (di luar catatan riwayat). "Tidak dirujuk" artinya nggak ada kode, tes, atau dokumen aktif yang memakainya.

### 2A. Repo Zuno (`ACL-tugas-agent-demo`): kemungkinan besar nggak dipakai lagi

| ☐ | Berkas | Ukuran | Kenapa gua anggap lama |
|---|---|---|---|
| ☐ | `prototypes/zuno-studio-v1.html` + `tests/zuno-studio-v1-stub-test.js` | 64K | Versi 1, sudah diganti v2. Cuma dirujuk tesnya sendiri. |
| ☐ | `prototypes/zuno-skema-preview.html` | 44K | Tidak dirujuk. |
| ☐ | `docs/desain-zulnan-motion.md` | kecil | Brief video lama. Catatannya sendiri bilang: kalau bertentangan, `docs/referensi-video.md` dan `brief-gaya-konten.md` yang berlaku. Tidak dirujuk. |
| ☐ | `docs/prompt-orkestrasi-zuno.docx` | 24K | Salinan Word dari `prompt-orkestrasi-zuno.md`. Tidak dirujuk. |
| ☐ | `docs/serah-terima-chat-baru.md` | kecil | Serah terima 2026-11-05. Isinya sudah basi; sekarang pakai `progress.md` + `memori-zuno.md`. |
| ☐ | `docs/rilis-antigravity.md` + folder `.agents/` | kecil | Rilis lewat Antigravity, sudah diganti Claude Desktop + agent-desktop (2026-11-06). Di `tangan-komputer.md` ditulis "tinggal cadangan". |
| ☐ | `.hallmark/shots/` | 5,3M | Screenshot hasil cek hallmark waktu bikin situs. Bisa dibuat ulang. |
| ☐ | `web/assets/site/kantor-studio.webp` | 64K | Gambar tema yang tidak dirujuk lagi. |
| ☐ | `assets/maskot/` (2 PNG) | 1,4M | Maskot lama. Cuma disebut di brief; sekarang karakter pakai Zuno robot + avatar voxel. |
| ☐ | `skills/engineering/*.zip` (5 zip) | 24K | Salinan zip dari folder skill yang sama di sebelahnya. Foldernya tetap. |

### 2B. Repo Zuno: perlu keputusan lu (masih dirujuk)

| ☐ | Berkas | Catatan |
|---|---|---|
| ☐ | `agents/arsip-23-agen/`, `agents/arsip-2026-11-09/` | Profil agen versi lama. Masih disebut di `CLAUDE.md` dan profil agen sebagai arsip. Kalau dihapus, rujukannya gua bersihin juga. |
| ☐ | `antrian-posting/` + skill `antrian-posting` versi laptop | Sesuai P1, dihapus setelah auto posting dari web jalan. Saran: tunggu P1. |
| ☐ | `prototypes/arsip/zuno-carousel-opsi.html` | Contoh opsi carousel; masih disebut di `template-carousel.md`. |
| ☐ | `tests/zuno-studio-v2-stub-test.js` | Tes prototipe v2 langsung. Masih jalan, tapi tumpang tindih dengan `zuno-studio-v2-build-stub-test.js`. |

### 2C. Jadi nggak terpakai SETELAH jasa pindah ke tampilan Nexaoffice (Bagian 1)

Di repo Zuno:

| ☐ | Berkas | Gunanya sekarang |
|---|---|---|
| ☐ | `web/hud.css`, `web/src/hud.css` | Gaya HUD lama, cuma untuk jasa |
| ☐ | `web/motion.js`, `web/src/motion.js` | Gerak HUD lama |
| ☐ | `web/src/hero.html`, `flow.html`, `tail.html` | Hero robot, diagram "Cara kerja", footer HUD |
| ☐ | `web/assets/zuno-hero.webp` | Gambar robot hero HUD |
| ☐ | Cabang `jasa` di `web/bangun.mjs` | Diganti jalur Nexaoffice |

Catatan: `web/hud.js` jangan dihapus dulu, karena masih dipakai ruang kerja Nexaoffice dan `pengaturan-ai.js`.

Di repo jasa (`zuno-studio-app`):

| ☐ | Berkas | Gunanya sekarang |
|---|---|---|
| ☐ | `hud.css`, `motion.js` | Gaya dan gerak HUD lama |
| ☐ | `index.html` (isi HUD) | Diganti Workspace Nexaoffice |
| ☐ | `kantor.html`, `nexa.html` sebagai halaman terpisah | Kantor 3D jadi tertanam di Workspace. **Berkasnya tetap dipakai** sebagai sumber Kantor 3D (lihat 2E); yang hilang cuma tautan halaman terpisahnya. |

### 2D. Repo jasa: kemungkinan besar nggak dipakai lagi

| ☐ | Berkas | Ukuran | Kenapa gua anggap lama |
|---|---|---|---|
| ☐ | `docs/HANDOFF_CLAUDE_GROTTO_VISUAL.md`, `docs/PROMPT_CLAUDE_GROTTO_VISUAL.md` | 20K | Catatan serah terima sesi lain waktu bikin The Grotto. Cuma saling merujuk. Pembeli nggak butuh. |
| ☐ | `downloads/` (`Nexa-Studio-Preview.mp4` + `.zip`) | 18M | Paket preview lama untuk dibagikan. Bikin repo berat. |
| ☐ | `preview/` (zip, png, log, html) | 7,5M | Hasil preview Kantor 3D lama. Masih dirujuk `tests/preview.test.cjs` dan `tools/build-preview.mjs`, jadi kalau dihapus, tes + alat itu ikut dihapus. |
| ☐ | `tools/build-preview.mjs`, `build-nexa-preview.mjs`, `package-preview.py`, `package-nexa-preview.py` | kecil | Alat untuk bikin `preview/` dan `downloads/` di atas. |
| ☐ | `artifacts/office/` (36 berkas: png, log) | 18M | Screenshot dan log hasil tes Kantor 3D. Tes menulis ulang berkas ini tiap jalan (makanya selama ini gua `git checkout artifacts/`). Saran: keluarkan dari git (masuk `.gitignore`), bukan dihapus dari laptop. |
| ☐ | `progress.md` (repo jasa) | kecil | Catatan kerja sesi Kantor 3D (2026-11-08), bukan untuk pembeli. |
| ☐ | `PANDUAN.md` | kecil | Panduan lama (Vercel). Bukan dihapus, tapi **ditulis ulang** untuk tampilan baru dan disatukan dengan `PANDUAN-LOKAL.md`. |

### 2E. Jangan dihapus (kelihatan lama, tapi masih dipakai)

- `office/`, `nexa/`, `kantor.html`, `nexa.html`, `assets/agents`, `assets/themes`, `assets/nexa` di repo jasa: **sumber Kantor 3D**. Web lu menyalin dari sini (`tools/kantor/ambil-kantor.mjs`).
- `tools/capture-*.cjs`, `tools/export-agents.mjs`, `tools/character-gallery.mjs`, `tests/*.test.*` di repo jasa: dipakai `npm run build:office` dan tes Kantor 3D.
- `.github/workflows/office.yml` di repo jasa: tes otomatis Kantor 3D di GitHub.
- `AGENTS-18.md` di repo jasa: dipakai galeri karakter dan data agen.
- `web/assets/karakter/` dan `assets/karakter/` di repo Zuno: masih dipakai prompt video (tipe A/B).
- `tools/video-nexaoffice/`: sumber video Remotion di situs (folder `node_modules` 138M di dalamnya nggak ikut git).
- `pasang-tangan-komputer.bat`, `tools/laptop/`, `tools/rilis/`: tangan komputer Divisi Engineering.

## Langkah setelah lu cek

1. Lu centang yang boleh dihapus di 2A, 2B, 2D, dan jawab K1 sampai K3.
2. Gua kerjakan Bagian 1 (tampilan jasa), lalu hapus 2C setelah tes jasa lolos.
3. Gua hapus yang lu centang, bersihin rujukannya, jalankan semua tes, commit. Push tetap nunggu kata lu.
