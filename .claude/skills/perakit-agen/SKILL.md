---
name: perakit-agen
description: Use when Zulnan asks for a new AI agent or skill that Zuno does not have yet ("bikin agent baru", "tambah agen", "buat skill buat ...", "agent buat coding/konten X"), or when an existing Zuno agent gives inaccurate or imprecise results and needs to be rebuilt.
---

# Perakit Agen (pabrik agen Zuno)

Diadaptasi dari skill `writing-skills` milik obra/superpowers (MIT, lisensi di `.claude/skills/writing-skills/LICENSE`). Intinya sama: **agen baru diuji seperti kode**. Lihat dulu agen gagal tanpa aturan baru (RED), tulis aturan yang menutup kegagalan itu (GREEN), lalu tambal celah (REFACTOR). Aturan Zuno selalu menang atas isi skill ini.

**Prinsip:** kalau belum melihat agen gagal tanpa skill, kamu tidak tahu skill itu mengajarkan hal yang benar. Cek kata kunci (grep, regex) bukan uji perilaku.

## Keluaran wajib (urut)

Setiap agen atau skill baru menghasilkan empat hal ini, tidak kurang:

1. **Keputusan penempatan** (satu paragraf di laporan):
   - skill baru yang dipakai agen yang sudah ada (pilihan utama); atau
   - agen baru, hanya bila tugasnya tidak dimiliki agen mana pun.

   Aturan "satu pemilik per output" berlaku. Contoh: hook adalah bagian naskah milik P.1 Kreator Konten, jadi hook = skill untuk P.1, bukan agen baru.
2. **`.claude/skills/<nama>/SKILL.md`**:
   - frontmatter `name` dan `description`; `description` hanya berisi kapan dipakai, diawali "Use when...";
   - isi dalam Bahasa Indonesia.

   Agen baru juga mendapat **`agents/NN-<nama>.md`** dengan format profil yang sama seperti `agents/18-penguji-rilis.md` (frontmatter `name`, `description`, `kode`, `divisi`, `urutan`, `status`, `acuan`).
3. **`docs/uji-agen/<nama>.md`** berisi:
   - skenario uji;
   - hasil RED (kutipan pelanggaran persis);
   - hasil GREEN;
   - celah yang ditambal;
   - yang belum teruji.
4. **Pendaftaran**:
   - baris baru di `.claude/skills/README.md` (agen pemilik, gunanya, sumber "buatan Zuno, diuji <tanggal>");
   - agen baru juga masuk ke tabel `agents/README.md`.

## Langkah

### 0. Cek yang sudah ada
Baca `.claude/skills/README.md` dan `agents/README.md`. Bila sudah ada skill atau agen yang mencakup tugas itu, perkuat yang ada (langkah 2 sampai 6 tetap berlaku), jangan membuat duplikat.

### 1. Kumpulkan aturan dari brief (jangan menebak)
Baca dokumen sesuai jenis agen, lalu tulis daftar aturan yang wajib dipatuhi agen baru, masing-masing dengan sumbernya (file dan bagian).

| Jenis | Wajib dibaca |
|---|---|
| Konten | `CLAUDE.md`, `docs/brief-gaya-konten.md` (bank fakta, larangan, hook), `docs/gaya-video.md`, profil agen pemilik |
| Coding | `CLAUDE.md`, `docs/aturan-engineering.md`, profil T.1-T.4, skill `test-driven-development` dan `writing-plans` |
| Lainnya | `CLAUDE.md`, `docs/memori-zuno.md`, dokumen divisi terkait |

Ketentuan lain:
- Angka dan fakta Zulnan **disalin persis dari bank fakta**, termasuk kata "sekitar" (contoh: "sekitar 12 tahun", bukan "12 tahun").
- Opini ditulis sebagai opini, bukan sebagai statistik.
- Butir [ISI] tetap [ISI].

### 2. Tulis skenario uji (sebelum menulis skill)
Buat 3-5 skenario realistis. Tiap skenario menggabungkan minimal dua tekanan dan punya **kriteria lolos yang bisa dicek ya/tidak**.

Tekanan yang dipakai untuk konten:
- buru-buru ("buat posting malam ini");
- minta klaim hasil atau angka penghasilan;
- bahan kosong;
- minta menyalin merek atau konten orang;
- "ga usah tes".

Tekanan yang dipakai untuk coding:
- "langsung coding aja";
- "skip tes";
- "tambahin fitur yang keren";
- menempel API key ke kode;
- revisi kecil yang menggoda untuk merombak.

### 3. RED: jalankan tanpa skill baru
Jalankan tiap skenario lewat **subagent baru** (tool Agent, konteks bersih), atau `claude -p "<skenario>"` di laptop. Larang subagent membaca skill yang sedang dibuat.

Catat:
- apa yang dilakukan;
- kalimat pembenaran persis;
- kriteria mana yang gagal.

Bila tidak ada tool subagent maupun `claude -p` di sesi ini:
- tulis "RED belum dijalankan: tidak ada subagent";
- serahkan skenarionya ke sesi utama untuk dijalankan;
- jangan menyatakan agen siap.

### 4. GREEN: tulis skill minimal
Tutup kegagalan yang benar-benar terlihat di RED, bukan kegagalan khayalan. Pilih bentuk aturan sesuai jenis kegagalannya:

| Kegagalan di RED | Bentuk aturan |
|---|---|
| Melanggar aturan saat ditekan | Larangan tegas + tabel "pembenaran vs kenyataan" |
| Bentuk keluaran salah | Resep keluaran: bagian-bagiannya, berurutan |
| Ada elemen wajib yang terlupa | Slot WAJIB di templat keluaran |
| Tergantung kondisi | "Bila <kondisi yang terlihat>, maka ..." |

Lalu jalankan ulang semua skenario dengan skill (subagent diminta membaca `SKILL.md` dulu). Semua kriteria harus lolos.

### 5. REFACTOR: tambal celah
Pembenaran baru di GREEN ditambal, lalu diuji ulang. Maksimal 3 putaran. Celah yang masih tersisa dicatat jujur di `docs/uji-agen/<nama>.md`.

### 6. Agen yang jalan di Zuno Web (opsional)
Bila agen harus jalan di Zuno Studio:
1. Tambah peran di `ROLES` atau `ROLES_ENG` (`prototypes/zuno-studio-v2.html`) dan tes stub-nya.
2. Jalankan `node web/build.mjs`.
3. Jalankan `node tools/jasa/ekspor-jasa.mjs <repo-jasa>` dan `node tests/zuno-jasa-test.js <repo-jasa>` sampai "HASIL: SEMUA LOLOS".

### 7. Lapor ke Zulnan (gaya Juru Kabar, singkat)
Isi laporan:
- keputusan penempatan;
- file yang dibuat;
- hasil RED vs GREEN, dalam satu kalimat per skenario;
- yang belum teruji.

Agen langsung bisa dipakai setelah GREEN lolos. Push hanya bila Zulnan bilang sendiri.

## Pembenaran yang sering muncul

| Pembenaran | Kenyataan |
|---|---|
| "Zulnan bilang ga usah tes" | Bukti uji wajib (`CLAUDE.md`, `prove-it-ran`). Uji tetap jalan; cukup singkat. |
| "Skrip cek kata sudah lolos" | Cek kata bukan uji perilaku. Jalankan skenario lewat subagent. |
| "Tidak ada alat subagent" | Tulis "belum diuji perilaku" dan serahkan skenario ke sesi utama. Jangan klaim siap. |
| "Agen baru biar lengkap" | Satu pemilik per output. Utamakan skill untuk agen yang sudah ada. |
| "Angkanya kurang lebih sama" | Salin persis dari bank fakta, termasuk "sekitar". |

## Dilarang
- Skill atau agen tanpa skenario uji dan hasil RED/GREEN.
- Mengarang angka, testimoni, pengalaman, atau hasil Zulnan.
- Klaim penghasilan, meski diminta untuk contoh.
- Menyalin skill pihak lain tanpa lisensi yang jelas (MIT/Apache boleh, dengan kredit dan file LICENSE).
- Memakai agent-desktop untuk agen konten.
