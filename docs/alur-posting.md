# Alur Posting Zuno (Antrian Posting)

Keputusan Zulnan 2026-11-04: posting otomatis boleh, **asal semua hasil sudah dicek dan disetujui Zulnan lebih dulu**. Yang disetujui masuk antrian; hanya isi antrian yang dikirim. Tidak ada jalur lain.

## Urutan

```
Zuno Studio membuat konten
  -> Ringkasan Sebelum Terbit (Lead + Juru Kabar)
  -> Zulnan cek, lalu Setujui / Revisi            <- gerbang 1 (isi)
  -> Kurator Instagram menyusun paket posting
  -> kartu masuk Antrian Posting
       carousel: "Siap dikirim"
       video:    "Menunggu file video final"
                 -> video dirender (paket Claude Code)
                 -> Zulnan cek video final, bilang oke   <- gerbang 2 (hasil edit video)
                 -> "Siap dikirim"
  -> Juru Kabar menjadwalkan lewat Metricool dan melapor daftar jadwalnya ke Zulnan
  -> terbit sesuai jadwal; bukti tayang dicatat
```

## Status antrian

| Status | Artinya | Yang mengubah |
|---|---|---|
| Menunggu file video final | Naskah disetujui, video belum dirender atau belum dicek | Otomatis saat Setujui (video) |
| Siap dikirim | Semua bahan final ada dan sudah dicek Zulnan | Otomatis saat Setujui (carousel); untuk video hanya setelah Zulnan bilang video final oke |
| Terjadwal | Sudah masuk jadwal Metricool (`plannerUrl` dicatat) | Skill `antrian-posting` |
| Tayang | Sudah terbit, ada bukti (tautan postingan) | Skill `antrian-posting` setelah dicek di Metricool, atau Zulnan melapor |
| Ditahan | Ada masalah (file kurang, cek gagal, jadwal lewat). Tidak dikirim | Skill `antrian-posting`, dengan alasan |
| Dibatalkan | Zulnan membatalkan | Zulnan |

Revisi setelah Setujui membuat kartu keluar dari antrian sampai disetujui lagi.

## Di Zuno Studio (web)
- Panel **Antrian Posting** di bawah Hasil menampilkan kartu yang sudah disetujui beserta statusnya.
- Tombol **Unduh antrian posting (.zip)** berisi folder `antrian-posting/<id>_<topik>/` dengan `item.json` (platform, caption final, hashtag, cover, saran jadwal, status), `caption.txt`, dan PNG slide untuk carousel. Untuk video, `video-final.mp4` ditaruh di folder yang sama setelah dirender.
- Halaman web tidak mengirim apa pun ke platform.

## Pengiriman (Claude Code di laptop Zulnan)
Perintah ke Claude Code: **"jalankan antrian posting"**. Skill `.claude/skills/antrian-posting` yang bekerja:
1. Mengambil zip antrian terbaru dari folder Downloads bila ada, mengekstraknya ke `antrian-posting/` di repo.
2. Untuk tiap item "Siap dikirim": cek status Disetujui, cek file media lengkap, cek video dengan `ffmpeg-skill` (`check.py --platform reels`).
3. Menjadwalkan lewat Metricool (`createScheduledPost`). Caption dan hashtag dikirim **persis** seperti di paket, tanpa diubah.
4. Menulis hasil ke `item.json` (status, waktu, `plannerUrl`) dan melapor ke Zulnan: apa yang terjadwal, jam berapa, dan apa yang ditahan beserta alasannya. Karena terjadwal (bukan langsung tayang), Zulnan masih bisa membatalkan di Metricool sebelum jam terbit.

## Yang harus disiapkan Zulnan sekali saja
1. Sambungkan akun Instagram, TikTok, dan Threads di Metricool: https://app.metricool.com/brands/connections?blogId=7638930 (dicek 2026-11-04: akun Metricool ada, belum ada akun sosmed tersambung).
2. Sambungkan Google Drive di Metricool. Metricool hanya menerima media lewat tautan publik; file slide dan video diunggah ke Google Drive lalu tautannya dipakai.
3. Pastikan konektor Metricool dan Google Drive aktif untuk Claude Code di laptop.
4. Instagram meminta tanda konten AI bila isinya dibuat atau diubah banyak dengan AI. Kebijakannya: **[ISI: tandai semua konten sebagai AI atau hanya yang visualnya buatan AI]**. Sampai diisi, skill bertanya sekali sebelum mengirim.

## Batasan
- Konten yang belum Disetujui Zulnan tidak pernah masuk antrian dan tidak pernah dikirim.
- Iklan berbayar tetap belum aktif.
- Jadwal "(asumsi)" dari Kurator dipakai apa adanya bila masih di masa depan; bila sudah lewat, item ditahan dan Zulnan ditanya.
- Tidak boleh menyatakan "sudah tayang" tanpa bukti tautan postingan.
