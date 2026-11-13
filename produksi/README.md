# Produksi video (semua akun)

Satu folder per video, rapi per akun, tanggal, dan judul. Dipakai untuk @faktadibedah, @teknikdibedah, dan nanti Pulau, Stickman, dan akun personal Zulnan.

```
produksi/
  KALENDER.md                    (rekap otomatis: semua video + status + jadwal posting)
  <akun>/
    <YYYY-MM-DD>_<judul>/
      episode.json               (status, tanggal, rencana posting, link setelah tayang)
      01-naskah.md               (alur + narasi + teks layar; DICEK ZULNAN DULU)
      02-fakta.md                (setiap klaim + sumber + kutipan)
      03-treatment.md            (shot list, desain suara)
      proyek/                    (kode adegan 3D, musik, build.sh)
      suara/                     (rekaman suara AI per baris narasi)
      final/                     (video .mp4, poster, subtitle .srt)
      posting.md                 (caption, hashtag, jadwal, link)
```

## Alur kerja (status di episode.json)
| Status | Artinya | Siapa |
|---|---|---|
| ide | Folder dibuat | Claude / Zulnan |
| naskah | Naskah + fakta bersumber ditulis | Claude |
| naskah-disetujui | Zulnan oke naskahnya | **Zulnan** |
| render | Suara + video dibuat | Claude / laptop |
| ditinjau | Video jadi, menunggu penilaian | Zulnan |
| disetujui | Zulnan oke video final | **Zulnan** |
| terjadwal | Masuk Antrian Posting dengan jadwal | Claude |
| tayang | Sudah tayang, link dicatat | Claude / Zulnan |

Aturan:
- "Disetujui" hanya dari Zulnan.
- Tidak ada yang tayang tanpa persetujuan.
- Fakta tanpa sumber tidak masuk naskah.

## Alur cerita wajib (dua akun bedah)
**ZOOM OUT -> ZOOM IN -> BEDAH -> JAWABAN -> PENUTUP**

1. **Zoom out:** hal umum yang semua orang pernah lihat (dapur, kota, jalan). Hook berupa pertanyaan.
2. **Zoom in:** kamera mendekat ke bendanya, masalahnya jadi jelas.
3. **Bedah:** masuk ke dalam. Satu pesan per adegan, berurutan sebab-akibat.
4. **Jawaban:** satu kalimat kesimpulan + fakta/tips bersumber.
5. **Penutup:** pertanyaan untuk komentar.

## Perintah
```bash
node tools/produksi/baru.mjs --akun faktadibedah --judul "Judul video"   # folder episode baru
node tools/produksi/status.mjs <folder-episode> naskah "catatan"          # ubah status
node tools/produksi/rekap.mjs                                             # perbarui KALENDER.md
sh tools/produksi/render.sh <folder-episode>                             # render di laptop
```

**Render di laptop:** klik dua kali `tools\produksi\render.bat`. Semua episode berstatus `naskah-disetujui` dirender, lalu hasilnya otomatis masuk ke `final/<tanggal>_<judul>.mp4` + `poster.jpg`, status jadi `ditinjau`, dan KALENDER diperbarui. Nanti disambungkan ke tombol di Nexaoffice lokal.

File besar (video, suara, hasil render) tidak ikut git; tetap tersimpan di laptop.
