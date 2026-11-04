# Skill terpasang di project Zuno (Claude Code)

Folder ini dibaca otomatis oleh Claude Code saat bekerja di repo ini, baik di cloud maupun di laptop Zulnan. Semua skill di sini adalah salinan dari sumber terbuka (MIT), disaring dari katalog PINAX (`akhmadilham/pinax-registry`) pada 2026-11-04. Isi dan lisensi aslinya tidak diubah; folder `agents/` dan `evals/` bawaan sumber tidak ikut disalin.

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
| `vibe-security` | T.4 Penguji | Audit keamanan aplikasi buatan AI: API key bocor, aturan database, login, rate limit, integrasi LLM | raroque/vibe-security-skill (850938f) |

Alat tambahan untuk T.3 (dipasang di laptop lewat `pasang-tangan-komputer.bat` bersama CLI deploy Vercel/clasp/Firebase, opsional): **Context7**, dokumentasi library sesuai versi supaya agen tidak mengarang API (`npx ctx7 setup --claude`, login dilakukan Zulnan sendiri).

## Divisi Editing (Pelatih Editing, Perender)

| Skill | Gunanya | Sumber |
|---|---|---|
| `ffmpeg-skill` | 42 alat ffmpeg lokal tanpa cloud dan tanpa API key: potong, gabung, ubah rasio (Reels 9:16), caption, hapus jeda, ratakan volume (LUFS), ekspor per platform, dan **cek file sebelum diunggah** (`check.py --platform reels`). Butuh FFmpeg 6.1+ dan Python 3.10+ | kajisho5/ffmpeg-skill (1ce2c18) |

Remotion: skill resminya (`remotion-dev/skills`) tidak punya file lisensi di repo, jadi tidak disalin ke sini. Bila Remotion dipilih sebagai alat render, pasang di laptop dengan `npx skills add remotion-dev/skills` dan cek lisensi Remotion dulu (lihat `docs/gaya-video.md` bagian 5).

## Divisi Marketing (dari coreyhaines31/marketingskills, commit 88c79f6)

Konteks bisnis untuk semua skill ini ada di `.claude/product-marketing.md` (menunjuk ke brief Zuno). Skill ini ditulis untuk bisnis berbahasa Inggris; hasilnya tetap ditulis dalam Bahasa Indonesia santai sesuai brief.

| Skill | Agen | Gunanya |
|---|---|---|
| `social` | 04 Ahli Strategi Media Sosial, 12 Kurator Instagram | Konten dan jadwal per platform (Instagram, TikTok, Threads), hook, repurpose |
| `content-strategy` | 04 Ahli Strategi | Rencana konten, pilar, kalender |
| `copywriting` | 05 Kreator Konten | Copy halaman (landing page produk digital) |
| `copy-editing` | 05 Kreator, Divisi Mutu | Merapikan copy yang sudah ada |
| `marketing-psychology` | 04, 05 | Prinsip psikologi untuk hook dan CTA (tanpa manipulasi, tanpa klaim hasil) |
| `customer-research` | 03 Peneliti Tren | Mengolah komentar, DM, dan riset audiens jadi bahan |
| `ad-creative` | 14 Strategis Iklan | Variasi copy iklan |
| `ads` | 14 Strategis Iklan | Strategi kampanye berbayar. Meta Ads **belum aktif**: hanya rencana, tidak menyentuh akun iklan |
| `analytics` | 13 Pelapor Analitik | Rencana pelacakan dan UTM. Angka hanya dari data nyata |

## Skill buatan Zuno

| Skill | Gunanya |
|---|---|
| `rilis-engineering` | Di laptop Zulnan: paket rilis Build App, uji laptop + HP, deploy ke link live, cek pakai agent-desktop, gerbang 3 (Zulnan cek link live) |
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
