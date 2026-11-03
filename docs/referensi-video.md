# Referensi video Zuno dan tipe video A, B, C

Keputusan Zulnan 2026-11-03. Tiga video referensi dan dua gambar karakter dari Zulnan dijadikan dasar tiga tipe video. Penomoran referensi mengikuti urutan upload Zulnan (bukan urutan durasi). File video tidak disimpan di repo (karya kreator lain, sekitar 15 MB); yang disimpan hanya analisis ini dan dua gambar karakter milik Zulnan di `assets/karakter/`.

## Pemetaan
| Tipe | Referensi | Karakter dan footage | Mode di Zuno |
|---|---|---|---|
| **A Percakapan (Zulnan dan Zuno)** | video 1: 87 detik, karakter 3D bersama blob, kartu LANGKAH 1/4 | gambar acuan `assets/karakter/zuno-zulnan-percakapan.webp`: avatar voxel Zulnan (rambut hitam keriting pendek, kaos putih, jeans biru, sneakers putih, jam tangan hitam) dan Zuno si robot (kepala kotak teal, satu mata biru besar, antena kilat oranye, dada menyala oranye), studio terang | Tanpa Wajah (motion penuh) |
| **B Proses tim (Zuno dan agen divisi)** | video 2: 38 detik, dunia kotak-kotak, label TAHAP 1/2/3 | gambar acuan `assets/karakter/zuno-tim-orkestrasi.webp`: Zuno sebagai Lead Orchestrator dan tujuh agen divisi (Riset, Produksi, Design, Editing, Mutu, Marketing, Engineering) berupa kotak oranye dengan papan nama, papan "Task Orchestration", ruang kontrol neon | Tanpa Wajah (motion penuh) |
| **C Zulnan di frame** | video 3: 23 detik, Zulnan di kamera dengan overlay | footage Zulnan sendiri, tanpa maskot; ikuti referensi yang Zulnan input | Mode Tampil |

Catatan: tulisan "Design" di gambar B memang benar (keputusan Zulnan). Isi papan dan semua coretan di gambar B hanya **contoh**; isi papan, gerak agen, dan label diisi sesuai materi naskah.

## Hasil bedah ketiga referensi (visual, ritme, loudness; isi suara belum didengar)
| | Video 1 (tipe A) | Video 2 (tipe B) | Video 3 (tipe C) |
|---|---|---|---|
| Durasi, format | 87 dtk, 720x1280, 30 fps | 38,5 dtk | 23 dtk |
| Ritme | hampir satu take panjang; yang berganti kartu UI per langkah | sekitar 8-11 potongan, 3-5 dtk per adegan | sekitar 12 potongan, ±2 dtk per adegan |
| Loudness | sekitar -14 LUFS | sekitar -14 LUFS | sekitar -14,6 LUFS |
| Struktur | pertanyaan dari komentar (gelembung) lalu LANGKAH 1/4 sampai 4/4, bagian ATURANNYA, ajakan follow | hook angka ("7 kali revisi"), TAHAP 1/2/3, penghitung (REVISI 4 jadi 7, CEK 1/5 jadi 4/5), hasil (stempel SIAP UPLOAD), ajakan komen kata kunci | hook "video ini diedit oleh...", demo efek dengan chip prompt, perbandingan Dulu vs Sekarang (jam), ajakan "comment EDIT" |
| Elemen khas | bar progres bersegmen, kartu UI di tengah dengan kotak sorot merah, caption satu kata diwarnai, lower-third "BREAKING NEWS" | pita label judul, papan koreksi, layar komputer dan checklist, konfeti di akhir | chip bergaya terminal di atas kepala, freeze berbingkai, gradasi warna latar, selingan layar penuh tanpa wajah, wajah di bingkai bundar, caption kata per kata |

Yang diambil adalah **struktur, ritme, dan jenis efek**. Tidak ditiru: badge dan nama channel ("AiShift.id"), logo, nama dan karakter milik pihak lain, dan label merek di video referensi. Identitas yang dipakai: Creative @nexamind.ai, karakter Zulnan dan Zuno.

## Cara kerja di Zuno (sudah diset)
- Pilihan **Tipe video** (Otomatis, A, B, C) di layar perintah. Tipe A dan B memaksa Mode Tanpa Wajah; tipe C memaksa Mode Tampil.
- Resep tipe dan deskripsi karakter masuk ke konteks semua agen (Kreator Konten menulis adegan mengikuti resep, Pencerita Visual mengisi Kartu Gaya dengan dunia dan karakter tipenya) dan tercatat di Kartu Gaya (`tipe_video`, `karakter`).
- **Tipe C melonggarkan aturan wajah**: wajah boleh tampil sampai 12 detik berurutan selama overlay berganti tiap 2-3 detik (referensi 3 memang begitu). Tipe lain tetap maksimal 3 detik. Tiap adegan tetap maksimal 2 detik.
- Hanya video tipe A dan B memakai karakter (Zulnan, Zuno, agen divisi). Carousel tidak memakai maskot.

## Serah-terima ke Claude Code di komputer Zulnan (cara 1, sudah ada)
Tombol **"Unduh paket Claude Code (.zip)"** di hasil video. Isi ZIP: `INSTRUKSI.md` (tugas urut, tipe video, karakter, batas yang tidak boleh dilanggar), `CLAUDE.md` (aturan kerja di folder itu), `paket.md`, `komposisi-hyperframes.html`, `kartu-gaya.json`, `naskah-adegan.json`, `rencana-efek.json` (tipe C), gambar karakter acuan di `karakter/` (tipe A dan B, hanya dari versi web), serta folder `hasil/` dan `footage/` (tipe C). Cara pakai: ekstrak ke folder kosong, jalankan `claude` di folder itu, ketik `Kerjakan sesuai INSTRUKSI.md`. **Alat render bebas** (keputusan Zulnan): HyperFrames, Remotion, claude-video-effects, dan ffmpeg boleh dipakai dan dikombinasi, dengan skill yang terpasang di Claude Code Zulnan sebagai acuan cara kerja; yang dijaga hanya alur dan keluaran. Claude Code berhenti setelah menulis `hasil/<nama>.mp4` dan `hasil/catatan-render.md` (memuat alat dan skill yang dipakai); tidak upload dan tidak posting, Zulnan meninjau dulu. Format perintah HyperFrames belum pernah diuji; Remotion gratis untuk pemakaian pribadi, cek lisensinya bila Zuno dijual. Cara berikutnya (dipicu otomatis lewat antrean job, `claude -p`, laptop atau VPS) belum dibangun.

## Syarat supaya video benar-benar jadi (jawaban atas pertanyaan VPS)
VPS menyediakan **mesin render dan orkestrasi** (ffmpeg, HyperFrames atau Remotion, transkrip kata per kata, mixing audio, unggah). VPS **tidak otomatis membuat footage 3D** seperti dua gambar acuan: itu butuh generator gambar atau video (API berkredit, atau model sendiri di server ber-GPU). Jadi:
- Tipe C dan semua overlay, kartu UI, caption, dan komposisi: bisa penuh otomatis di VPS.
- Tipe A dan B: karakter bisa dipasang sebagai gambar acuan atau potongan (cutout) dengan gerak buatan kode (cepat dan konsisten), atau digenerate sebagai klip dengan generator video (lebih hidup, tetapi butuh kredit dan konsistensi karakter tidak dijamin). Pilihan belum ditetapkan.
- Sampai VPS dan generator tersambung, status tetap "paket + rencana render"; Zuno tidak menyatakan video sudah jadi.
