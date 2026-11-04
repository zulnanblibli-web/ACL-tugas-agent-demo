---
name: antrian-posting
description: Jalankan Antrian Posting Zuno - jadwalkan lewat Metricool hanya konten yang sudah Disetujui Zulnan dan berstatus "Siap dikirim", lalu laporkan hasilnya. Pakai saat Zulnan bilang "jalankan antrian posting", "kirim antrian", "posting yang sudah gua approve", "cek antrian posting", atau saat mengubah status video final jadi siap dikirim.
---

# Antrian Posting Zuno

Aturan lengkap: `docs/alur-posting.md`. Skill ini hanya menjalankan alur itu. Konten yang belum Disetujui Zulnan tidak pernah dikirim, apa pun alasannya.

## 0. Ambil antrian
1. Bila ada `antrian-posting_*.zip` di folder Downloads Zulnan (`%USERPROFILE%\Downloads` di Windows) yang lebih baru dari isi `antrian-posting/`, ekstrak ke root repo. Item yang sudah ada dan berstatus Terjadwal atau Tayang **tidak ditimpa**: gabungkan per `id`.
2. Baca semua `antrian-posting/*/item.json`.

## 1. Saring
Kirim hanya item yang memenuhi **semua** syarat ini. Item yang tidak memenuhi syarat jangan dikirim, dan catat alasannya.
- `status_konten` = `Disetujui Zulnan`.
- `status_antrian` = `Siap dikirim`.
- File media ada di folder item:
  - carousel: `slide-1.png` dan seterusnya, sesuai daftar `media`;
  - video: `video-final.mp4`.
- Video lolos `python3 .claude/skills/ffmpeg-skill/scripts/check.py <folder>/video-final.mp4 --platform reels` (0 FAIL). Bila gagal, status jadi `Ditahan`. Jangan mengedit videonya tanpa izin Zulnan.
- `caption` tidak kosong dan tidak berisi [ISI] atau [HARGA BELUM DITENTUKAN] yang belum diganti. Bila berisi, status jadi `Ditahan` dengan alasan "butir belum diisi Zulnan".

Status video hanya boleh diubah dari `Menunggu file video final` ke `Siap dikirim` bila Zulnan sendiri bilang video final itu oke di percakapan. Catat kalimat Zulnan di `catatan`.

## 2. Siapkan media
Metricool hanya menerima tautan publik.
1. Unggah file media ke Google Drive (folder `Zuno/antrian-posting/<id>`) lewat konektor Google Drive.
2. Pakai tautan Drive itu di `media`. Metricool bisa membaca Drive bila Zulnan sudah menyambungkan Google Drive di Metricool.
3. Bila konektor Drive tidak ada, berhenti. Laporkan ke Zulnan apa yang perlu disambungkan. Jangan mengunggah ke layanan lain.

## 3. Jadwalkan
1. `getBrandSettings`: ambil `blogId`, zona waktu, dan jaringan yang tersambung. Bila platform item belum tersambung, status jadi `Ditahan` ("akun <platform> belum disambung di Metricool").
2. Waktu: pakai `saran_jadwal` bila jelas dan masih di masa depan. Bila samar atau kosong, pakai `getBestTimeToPostByNetwork` untuk platform itu dan sebutkan bahwa jamnya dari data Metricool. Bila sudah lewat, status jadi `Ditahan` dan tanya Zulnan.
3. `createScheduledPost` dengan `autoPublish: true`:
   - `text` = caption + baris kosong + hashtag, **persis** dari `item.json`. Jangan diubah, diterjemahkan, atau ditambah.
   - Instagram carousel `type: POST`, video `type: REEL`. Isi `networkData` untuk tiap jaringan.
   - Tanda konten AI (`isAiGenerated` / `isAigc`) mengikuti keputusan Zulnan di `docs/alur-posting.md`. Bila masih [ISI], tanya sekali sebelum mengirim.
4. Satu item satu kali panggil. Bila panggilan gagal, catat error-nya apa adanya. Jangan mengulang dengan isi yang diubah.

## 4. Catat dan laporkan
1. Tulis ke `item.json`:
   - `status_antrian` = `Terjadwal`;
   - `terkirim` = `{waktu_jadwal, platform, plannerUrl, dijadwalkan_pada}`.
   - Item yang ditahan: `status_antrian` = `Ditahan` dan `alasan`.
2. Lapor ke Zulnan (gaya Juru Kabar, singkat): tabel `id | topik | platform | jam terbit | status | plannerUrl atau alasan`. Tambahkan bahwa jadwal bisa dibatalkan di Metricool sebelum jam terbit.
3. `Tayang` dan `bukti_tayang` hanya diisi setelah ada tautan postingan nyata (dari `getScheduledPosts` atau dari Zulnan). Jangan pernah bilang "sudah tayang" tanpa itu.

## Dilarang
- Mengirim konten yang tidak ada di antrian, belum Disetujui, atau statusnya bukan `Siap dikirim`.
- Mengubah caption, hashtag, slide, atau video.
- Menyentuh iklan, boost, atau pembayaran (`boost` dan kolom sejenis tidak diisi).
- Menghapus atau mengubah postingan yang sudah tayang.
- Memakai agent-desktop untuk posting lewat aplikasi atau browser bila Metricool gagal. Laporkan saja ke Zulnan.
