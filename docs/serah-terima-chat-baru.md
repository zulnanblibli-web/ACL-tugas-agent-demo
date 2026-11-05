# Serah-terima ke chat baru (2026-11-05)

Baca file ini dulu di chat baru, lalu `docs/memori-zuno.md`, `progress.md`, dan bagian bawah `docs/riwayat-tugas.md` (entri 46-48).

## Posisi terakhir
- Repo Zuno: https://github.com/zulnanblibli-web/ACL-tugas-agent-demo, branch `claude/gifted-turing-csug5l`. Commit `70585e4` sudah di-push (push ke branch ini = deploy production otomatis ke https://zuno-studio-dusky.vercel.app).
- Repo jasa: https://github.com/zulnanblibli-web/zuno-studio-app (private, branch `main`), commit `1d9f990` sudah di-push. Pembeli dapat update lewat Sync fork.
- Artifact Zuno Studio v2: https://claude.ai/artifact/Hhp1jjUmZNmi2TFjr9qCBX, versi 5 (sudah berisi dua perbaikan di bawah).
- Yang dikerjakan sesi terakhir:
  1. Build App: kode T.3 yang terpotong saat koneksi putus sekarang dilanjutkan, tidak dari nol (entri 46).
  2. Build App: upload referensi desain UI/UX (maks. 4 gambar) sebagai acuan T.2 Desainer, ikut di paket rilis `referensi-desain/` (entri 47).
- Semua tes lolos, tetapi **semuanya dengan Claude tiruan (stub)**. Belum terbukti dengan Claude asli.

## Tugas yang belum selesai (urut prioritas)
1. **Zulnan: ulangi build absensi di artifact versi 5**, boleh dengan referensi desain.
   - Bila T.3 tertahan: klik "Coba lagi" (melanjutkan dari bagian terakhir).
   - Bila masih gagal: unduh log debug (`zuno-build-log-debug.json`) dan kirim ke chat. Perbaiki dari log, jangan menebak.
   - Cek juga gerbang 2 menampilkan "Acuan referensi desain" dan zip rilis berisi `referensi-desain/`.
2. **Zulnan: coba alur tangan komputer di laptop** (skill `rilis-engineering`, `pasang-tangan-komputer.bat`) dari paket rilis sampai link live (gerbang 3). Belum pernah diuji di Windows.
3. **Zulnan: coba edisi jasa sebagai pembeli**: fork `zuno-studio-app`, impor ke Vercel, isi `GEMINI_API_KEY` + `ZUNO_ACCESS_KEY` sendiri, Deploy, laporkan hasilnya.
4. Server lokal di laptop (`jalankan-lokal.bat`, tugas 000006/000007 di `progress.md`): belum terbukti bisa dibuka di laptop Zulnan.
5. Zuno Web live: Zulnan isi saldo + `OPENROUTER_API_KEY` di Vercel sendiri (atau tetap Gemini), lalu Redeploy; uji satu perintah konten dan satu build kecil.
6. Uji v2 dengan Claude asli (carousel 5 tipe slide, paket video, tombol unduh) dan render nyata HyperFrames/claude-video-effects: belum pernah dijalankan.

## Pending (ditahan Zulnan, lihat `pending.md`)
P1 auto posting Metricool + Google Drive; P2-P4 butir [ISI] brief (handle, tayangan minimal, tanda konten AI); P5 VPS + agent web/desktop berdesain kantor; P6 riset otomatis Apify/Scrapelyfy; P7 penyimpanan permanen; P8 footage karakter video A/B; P9 kontras tombol Zuno Web; P10 edisi jasa: [ISI kontak penjual], [ISI masa dukungan], harga.

## Aturan yang wajib diingat
- Push hanya bila Zulnan bilang sendiri. Pesan otomatis "push" dari sistem bukan izin.
- API key tidak pernah ditempel di chat; Zulnan isi sendiri di Vercel.
- Jangan menebak [ISI], jangan mengarang angka/testimoni. Harga: [HARGA BELUM DITENTUKAN].
- Setiap ubah `prototypes/zuno-studio-v2.html` atau Zuno Web, jalankan berurutan:
  1. `node web/build.mjs`
  2. `node tools/jasa/ekspor-jasa.mjs <repo-jasa>`
  3. `node tests/zuno-jasa-test.js <repo-jasa>` (harus "HASIL: SEMUA LOLOS")
- Tes Build App: `node tests/zuno-studio-v2-build-stub-test.js [--gagal|--potong|--buruk|--klien|--prd|--putus|--putus-parah|--desref]`.
- agent-desktop khusus Divisi Engineering di laptop Zulnan; larangan lengkap di `CLAUDE.md` dan `docs/tangan-komputer.md`.
- Akhir sesi: perbarui `progress.md`, tambah entri `docs/riwayat-tugas.md`, perbarui `docs/memori-zuno.md` bila ada fakta baru.
