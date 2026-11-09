# Skill terpasang di project Zuno (Claude Code)

Folder ini dibaca otomatis oleh Claude Code saat bekerja di repo ini, baik di cloud maupun di laptop Zulnan. Semua skill di sini adalah salinan dari sumber terbuka (MIT, sebagian Apache-2.0), disaring dari katalog PINAX (`akhmadilham/pinax-registry`) pada 2026-11-04. Isi dan lisensi aslinya tidak diubah; folder `agents/` dan `evals/` bawaan sumber tidak ikut disalin.

**Aturan Zuno selalu menang.** Bila skill bertentangan dengan `CLAUDE.md`, `docs/brief-gaya-konten.md`, `docs/aturan-engineering.md`, atau `docs/alur-posting.md`, ikuti aturan Zuno: tulis dalam Bahasa Indonesia, jangan mengarang angka/testimoni/pengalaman, butir [ISI] tidak ditebak, harga [HARGA BELUM DITENTUKAN], status Disetujui hanya dari Zulnan.

## Divisi Engineering

| Skill | Agen | Gunanya | Sumber (commit) |
|---|---|---|---|
| `01-idea-to-scope-lock` | T.1 Arsitek | Kunci ruang lingkup dari ide atau PRD .md, **tanpa batas jumlah fitur** (salinan `skills/engineering/01-idea-to-scope-lock`, versi Zuno) | milik Zulnan (disesuaikan 2026-11-03) |
| `grilling` | T.1 Arsitek | Menguji PRD .md dan ruang lingkup dengan pertanyaan bertahap (tiap pertanyaan disertai saran jawaban) sebelum gerbang 1. Pelengkap `01-idea-to-scope-lock`, bukan pengganti; tidak memangkas fitur | mattpocock/skills (4ae2317) |
| `hallmark` | T.2 Desainer | Desain halaman baru yang tidak terlihat "buatan AI", plus alat cek `scripts/sloplint.mjs`. Hanya untuk proyek baru atau bila Zulnan menyebut "hallmark"; jangan dipakai mengubah Zuno Web. Pembuatan gambar AI di dalamnya (`imagegen.mjs`, butuh `TOGETHER_API_KEY`) **tidak dipakai** | nutlope/hallmark (52328cb) |
| `mobile-native` | T.2, T.4 | Perbaikan kecil supaya web terasa native di HP: 100vh, input nge-zoom, notch, tap highlight | emilkowalski/skills (f1090be) |
| `break-ui` | T.4 Penguji | Menguji tampilan dengan data terburuk yang masuk akal (nama panjang, kosong, emoji, angka besar); laporan dulu, perbaikan setelah diminta | emilkowalski/skills (f1090be) |
| `prove-it-ran` | T.4 Penguji (semua agen sebelum bilang "selesai") | Bukti tes benar-benar jalan: jumlah tes, exit code, tes gagal tanpa perbaikan. Ini wujud aturan "selesai wajib ada bukti uji" | agentkitco/agentkit-dev-skills (a042296) |
| `review-my-diff` | T.3, T.4 | Tinjau perubahan sebelum commit, temuan diurutkan per tingkat bahaya dengan file dan baris | agentkitco/agentkit-dev-skills (a042296) |
| `systematic-debugging` | T.3 Pengembang | Cari akar masalah dulu sebelum memperbaiki bug | obra/superpowers (22f0b46) |
| `writing-skills` | Perakit Agen (dasar metodenya) | Membuat dan menguji skill seperti TDD: skenario tekanan lewat subagent | obra/superpowers (22f0b46) |
| `writing-plans` | T.1, T.3 | Rencana bertahap yang tiap langkahnya punya cara cek, sebelum menyentuh kode | obra/superpowers (22f0b46) |
| `test-driven-development` | T.3, T.4 | Tes ditulis dan dilihat gagal dulu, baru kode (RED-GREEN-REFACTOR) | obra/superpowers (22f0b46) |
| `subagent-driven-development` | T.3, T.4 (Claude Code) | Satu subagent pengerja per tugas + peninjau spesifikasi dan mutu + tinjauan akhir; dasar alur Build App sejak 2026-11-06 | obra/superpowers (22f0b46) |
| `executing-plans` | T.3 | Menjalankan rencana sendiri bila tidak ada subagent | obra/superpowers (22f0b46) |
| `requesting-code-review` | T.3, T.4 | Minta tinjauan kode sebelum lanjut | obra/superpowers (22f0b46) |
| `using-git-worktrees` | T.3 | Ruang kerja terpisah untuk satu fitur | obra/superpowers (22f0b46) |
| `finishing-a-development-branch` | T.3 | Menutup pekerjaan setelah tes lolos. **Aturan Zuno menang**: push/merge hanya bila Zulnan bilang sendiri; pilih opsi "simpan branch / commit saja" | obra/superpowers (22f0b46) |
| `vibe-security` | T.4 Penguji | Audit keamanan aplikasi buatan AI: API key bocor, aturan database, login, rate limit, integrasi LLM | raroque/vibe-security-skill (850938f) |

Alat tambahan untuk T.3 (dipasang di laptop lewat `pasang-tangan-komputer.bat` bersama CLI deploy Vercel/clasp/Firebase, opsional): **Context7**, dokumentasi library sesuai versi supaya agen tidak mengarang API (`npx ctx7 setup --claude`, login dilakukan Zulnan sendiri).

Catatan skill superpowers (disalin utuh dengan LICENSE, 2026-11-06): rujukan `superpowers:<nama>` di dalamnya berarti skill `<nama>` di folder ini. Pesan "jangan berhenti bertanya, putuskan sendiri" sejalan dengan keputusan Zulnan 2026-11-06 untuk Engineering. Titik berhenti versi Zuno tetap berlaku: pembayaran, rahasia/API key, tindakan merusak, push/merge tanpa kata Zulnan. Yang sengaja tidak disalin: `using-superpowers` dan hook awal sesinya (memaksa skill di tiap jawaban), `brainstorming` (sudah ada `grilling` + `01-idea-to-scope-lock`), `verification-before-completion` (sudah ada `prove-it-ran`), `diagnosing-superpowers`, `dispatching-parallel-agents`, `receiving-code-review`.

## Divisi Editing (Pelatih Editing, Editor Remotion, Editor Google Flow)

| Skill | Gunanya | Sumber |
|---|---|---|
| `ffmpeg-skill` | 42 alat ffmpeg lokal tanpa cloud dan tanpa API key: potong, gabung, ubah rasio (Reels 9:16), caption, hapus jeda, ratakan volume (LUFS), ekspor per platform, dan **cek file sebelum diunggah** (`check.py --platform reels`). Butuh FFmpeg 6.1+ dan Python 3.10+ | kajisho5/ffmpeg-skill (1ce2c18) |

Remotion: skill resminya (`remotion-dev/skills`) tidak punya file lisensi di repo, jadi tidak disalin ke sini. Bila Remotion dipilih sebagai alat render, pasang di laptop dengan `npx skills add remotion-dev/skills` dan cek lisensi Remotion dulu (lihat `docs/gaya-video.md` bagian 5).

## Divisi Marketing (dari coreyhaines31/marketingskills, commit 88c79f6)

Konteks bisnis untuk semua skill ini ada di `.claude/product-marketing.md` (menunjuk ke brief Zuno). Skill ini ditulis untuk bisnis berbahasa Inggris; hasilnya tetap ditulis dalam Bahasa Indonesia santai sesuai brief.

| Skill | Agen | Gunanya |
|---|---|---|
| `social` | 04 Ahli Strategi Media Sosial, 13 Kurator Instagram | Konten dan jadwal per platform (Instagram, TikTok, Threads), hook, repurpose |
| `content-strategy` | 04 Ahli Strategi | Rencana konten, pilar, kalender |
| `copywriting` | 05 Kreator Konten | Copy halaman (landing page produk digital) |
| `copy-editing` | 05 Kreator, Divisi Mutu | Merapikan copy yang sudah ada |
| `marketing-psychology` | 04, 05 | Prinsip psikologi untuk hook dan CTA (tanpa manipulasi, tanpa klaim hasil) |
| `customer-research` | 03 Peneliti Tren | Mengolah komentar, DM, dan riset audiens jadi bahan |
| `ad-creative` | belum ada pemilik (Strategis Iklan diarsipkan 2026-11-09, Fase 4) | Variasi copy iklan |
| `ads` | belum ada pemilik (Fase 4) | Strategi kampanye berbayar. Meta Ads **belum aktif**: hanya rencana, tidak menyentuh akun iklan |
| `analytics` | 13 Kurator Instagram (catatan performa) | Rencana pelacakan dan UTM. Angka hanya dari data nyata |

## Alat fondasi semua divisi (2026-11-06)

Opsional dan tidak mengubah alur: bila CLI-nya belum terpasang, kerja jalan seperti biasa.

| Skill | Agen | Gunanya | Sumber (commit) |
|---|---|---|---|
| `docling` | R.1 Peneliti Tren, T.1 Arsitek (semua agen yang menerima file) | Ubah PDF/DOCX/PPTX/XLSX/HTML/gambar jadi Markdown supaya referensi dan PRD dibaca utuh. CLI `docling` (`uv tool install docling`). Disalin utuh | docling-project/docling (1282e3d, MIT) |
| `graphify` | T.1 Arsitek, T.3 Pengembang | Peta kode jadi graf pengetahuan: `graphify update`, `query`, `explain`, `path`. CLI dari paket `graphifyy`. Hanya `description` dipersempit; hook dan aturan wajib CLAUDE.md bawaan installer sengaja tidak dipasang | Graphify-Labs/graphify (16218bf, Apache-2.0) |

## Skill buatan Zuno

| Skill | Gunanya |
|---|---|
| `penulis-hook` | **P.1 Kreator Konten.** Hook video pendek: 3 kandidat beda jenis, slot Fakta & Klaim wajib, angka Zulnan disalin persis dari bank fakta, tanpa angka penghasilan. Agen pertama hasil `perakit-agen`, diuji 2026-11-06 (RED/GREEN/REFACTOR, 4 skenario lewat `claude -p`; `docs/uji-agen/penulis-hook.md`) |
| `perakit-agen` | Pabrik agen: membuat agen atau skill baru (coding atau konten) dengan uji RED-GREEN-REFACTOR lewat subagent, berpatokan brief Zuno. Diadaptasi dari `writing-skills` (obra/superpowers, MIT). Bukti uji: `docs/uji-agen/perakit-agen.md` |
| `rilis-engineering` | Di laptop Zulnan tanpa disentuh: Claude Desktop (Remote Control) mengekstrak paket rilis, menjalankan `rilis.mjs` sesuai mesin (Apps Script/Blogger/Firebase/Vercel + Supabase), agent-desktop mengerjakan langkah layar dan menguji link live, lalu link + bukti + catatan keputusan dikirim ke Zulnan |
| `antrian-posting` | **Pending, jangan dipakai.** Versi laptop lama. Akan diganti pengiriman dari web (Google Drive + API Metricool) setelah Zulnan membuka lagi bagian Metricool |

## Yang sengaja tidak dipasang
- `video-spec-builder` (ditulis dalam bahasa Mandarin dan tumpang tindih dengan Kartu Gaya dan tipe video A/B/C Zuno).
- `video-captions` (sudah dicakup `ffmpeg-skill`).
- `remotion-superpowers` (butuh API key berbayar ElevenLabs dan Replicate).
- Skill auto posting dari katalog (khusus Xiaohongshu). Zuno memakai alurnya sendiri: `antrian-posting`.
- `ui-ux-pro-max` (bentrok dengan `hallmark` dan `frontend-design` menurut katalog).

## Bukti uji pemasangan (2026-11-04)
- `ffmpeg-skill`: video uji 1920x1080 8 detik diubah ke template Reels (`render.py --template reels --fit blur`) menjadi 1080x1920; `check.py --platform reels` lolos (0 gagal, 1 peringatan). `probe.py` jalan.
- `hallmark`: `node scripts/sloplint.mjs web/index.html` jalan dan memberi laporan (26 FAIL, 35 REFLEX, 13 WARN; antara lain kontras tombol 2.14:1, di bawah 4.5:1). Zuno Web sengaja tidak diubah: gayanya keputusan Zulnan.
- Skill lain berupa instruksi (Markdown), tanpa skrip yang jalan otomatis; dicek isinya, tidak ada pemanggilan jaringan atau telemetri.

## Memperbarui
Salin ulang dari repo sumbernya, catat commit baru di tabel di atas, lalu jalankan lagi uji di bagian "Bukti uji".
