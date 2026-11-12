# ZUNO Studio — 18 Identitas Agent

Status: 2026-11-08. Total **18 termasuk ZUNO dan tambahan**, bukan 18 ditambah agent baru. Dua divisi tetap terpisah: Konten dan Engineering. Satu agent satu tugas. Identitas karakter tidak berarti model independen; role pada implementasi adalah prompt/task khusus yang memakai penyedia AI yang terkonfigurasi.

| # | ID | Nama | Divisi | Fungsi eksklusif | Status |
|---|---|---|---|---|---|
| 01 | L.0 | ZUNO | Lead | Orkestrasi tugas, rute divisi dan keputusan akhir | existing |
| 02 | L.1 | Lia | Konten | Laporan hasil dan komunikasi ke pengguna | existing |
| 03 | R.1 | Raka | Konten | Riset tren dan verifikasi bahan | existing |
| 04 | R.2 | Nara | Konten | Strategi sosial media dan angle | existing |
| 05 | P.1 | Dika | Konten | Penulisan naskah dan storyboard | existing |
| 06 | P.2 | Vino | Konten | Optimasi retensi video dan hook | existing |
| 07 | D.1 | Sari | Konten | Visual, carousel, preset kreatif | existing |
| 08 | E.1 | Edo | Konten | Arahan efek dan editing video pendek | existing |
| 09 | E.2 | Bima | Konten | Remotion: personal branding, faceless, motion typography | role prompt added; render integration pending |
| 10 | E.3 | Fira | Konten | Google Flow: affiliate, iklan produk, UGC bisnis | role prompt added; Flow integration pending |
| 11 | Q.1 | Tara | Konten | Pemeriksaan fakta dan brand voice | existing |
| 12 | Q.2 | Nita | Konten | Bukti dan kepatuhan format | existing |
| 13 | M.1 | Maya | Konten | Caption dan antrian posting yang disetujui | existing |
| 14 | T.1 | Arga | Engineering | Scope, PRD, arsitektur, pemilihan mesin | existing |
| 15 | T.2 | Rani | Engineering | UI/UX dan wireframe | existing |
| 16 | T.3 | Fajar | Engineering | Implementasi kode aplikasi | existing |
| 17 | T.4 | Tio | Engineering | Review fungsi, testing dan paket rilis | existing |
| 18 | T.5 | Damar | Engineering | Audit statis bug & security, temuan dan saran perbaikan | added to build review |

## Batas kerja
- Tugas Konten tidak otomatis menjalankan Engineering. Tugas Engineering tidak otomatis memproses Konten.
- Bima bukan pengganti Edo: Edo merencanakan efek, Bima menyusun paket untuk Remotion.
- Fira khusus merencanakan scene/prompt Flow dan konsistensi produk; tidak boleh mengklaim render Flow sudah tersedia tanpa API dan otorisasi.
- Damar melakukan audit statis kode proyek yang sudah diberikan. Temuan severity tinggi dan sedang dimasukkan ke perbaikan Pengembang melalui review; pengujian penetrasi aktif atau uji runtime tidak diakui tanpa bukti.
- User tetap menyetujui final konten; tidak ada posting otomatis.
- Setiap karakter visual: Blender-like stylized humanoid full-body, pakaian sederhana beda warna, tanpa logo huruf di baju, maksimal satu properti kecil, tanpa efek hologram.

## Integrasi selanjutnya
1. Tambahkan pemilihan pipeline Remotion/Flow oleh pengguna sebelum produksi.
2. Bangun adapter render Remotion dan adapter resmi Flow hanya bila endpoint/akses tersedia; anggarkan biayanya dan minta persetujuan.
3. Simpan hasil audit Damar pada laporan proyek; tambahkan pengujian otomatis dan release gate jika temuan kritis/tinggi belum diselesaikan.
4. Ganti visual tim lama berdasarkan asset PNG individual setelah user menyetujui konsistensi desain.
