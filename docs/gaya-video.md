# Pustaka Gaya dan Kartu Gaya Zuno

Dibuat 2026-11-01 dari permintaan Zulnan: gaya motion video berubah-ubah sesuai kebutuhan, referensi dicari di Pinterest, dan empat pustaka dipakai sebagai sumber gaya editing. Dokumen ini adalah **usulan awal**. Belum ada satu pun gaya di sini yang sudah dirender dan dicek.

## 1. Aturan gaya dari Zulnan

**Video**
- Suara: **campur** (Mode Tampil rekaman sendiri; Tanpa Wajah boleh suara AI generik, dicatat bukan suara Zulnan).
- Panjang video dan jumlah slide: **mengikuti topik**, tidak dikunci.
- Gaya visual **berubah-ubah per video**, dipilih per Kartu Konten (bukan satu gaya tetap).
- **Tiap adegan maksimal 2 detik** (dikonfirmasi Zulnan 2026-11-01): ada potongan atau perubahan visual setidaknya tiap 2 detik.
- **Satu video, satu palet dan satu latar (footage visual yang sama dari awal sampai akhir).** Tidak ada campuran warna atau pergantian latar antar adegan; warna boleh berbeda hanya antar video (keputusan Zulnan 2026-11-01).
- **Megah dan penuh motion.** Gerak kamera, tipografi besar, transisi tegas.
- Dua mode: **Tanpa Wajah** (motion grafis penuh) atau **Mode Tampil** (Zulnan di kamera). Pada Mode Tampil wajah tidak boleh tertutup teks atau elemen.
- **Typography mengikuti referensi** (lihat bagian 4), bukan satu font tetap.
- Slogan setelah hook tetap berlaku untuk semua video: "Hai, kenalin Gue Zulnan. Gue sales yang belajar AI sambil bikin, bukan cuma ngomongin."

**Carousel**
- **Campuran sesuai topik** (keputusan Zulnan 2026-11-01): Pencerita Visual memilih satu dari empat template per carousel. Satu carousel memakai satu template penuh.
- Pilihan template: halaman "Pilihan Template Carousel" (A Papan Tulis, B Neon Gelap, C Majalah, D Kartu Layar). Detail dan usulan pemilihan: `docs/brief-gaya-konten.md` bagian 6.

## 2. Sumber referensi

| Sumber | Fungsi untuk Zuno | Lisensi | Catatan |
|---|---|---|---|
| [Motion Prompt](https://showheyohtaki.github.io/motion-prompt/) | Kosakata gaya: 192 elemen bernama dan bernomor (motion, kamera, UI, foto, dan lain-lain). Cukup menyebut nomor atau nama di prompt. | MIT | Katalog: `api/v1/catalog.json` di repo showheyohtaki/motion-prompt. Contoh dibuat dengan Canvas 2D. |
| [claude-video-effects](https://github.com/Vibha-Ramprakash/claude-video-effects) | 45 efek untuk video **Mode Tampil**. Efek melacak wajah dan bisa berada di belakang kepala. Rencana efek ditulis sebagai JSON lalu dirender ke MP4. | MIT | Jalan di komputer: butuh ffmpeg dan Python 3.12. Berisi font siap pakai. Efek 1,5 sampai 4 detik per jendela. |
| [Remotion](https://github.com/remotion-dev/remotion) | Membuat video dari kode React; ada paket captions (subtitle) dan effects. Cocok untuk video **Tanpa Wajah** dan subtitle berwaktu. | Lisensi Remotion (khusus) | **Gratis untuk individu dan perusahaan sampai 3 karyawan, termasuk komersial.** Dilarang menjual atau menyewakan turunan kode Remotion. Bila Zuno nanti dijual sebagai produk web app untuk orang lain, **cek lisensi di remotion.pro sebelum dipakai**. |
| [HyperFrames](https://github.com/heygen-com/hyperframes) | Menulis HTML lalu merender ke MP4 yang deterministik; punya skill untuk Claude Code dan app Studio. Cocok untuk video **Tanpa Wajah**. | Apache 2.0 | Butuh Node 22 ke atas. Gratis; media HeyGen (avatar, klip) memakai kredit hanya bila diminta. |

Catatan: Zulnan mengirim empat tautan; tautan 2 dan 3 awalnya sama, lalu tautan 3 diganti menjadi Remotion.

## 3. Preset gaya video (usulan awal)

Nama preset dibuat untuk Zuno agar mudah dipanggil ("pakai gaya Dentum"). Nomor `#` mengacu ke Motion Prompt; kolom Mode Tampil mengacu ke nama efek di claude-video-effects. Zulnan boleh menambah, mengganti, atau menghapus preset.

| Preset | Kesan | Motion Prompt (Tanpa Wajah) | claude-video-effects (Mode Tampil) |
|---|---|---|---|
| **Dentum** | Cepat, keras, penuh hentakan | #024 Impact shake, #046 Smash cut, #041 Jump cut, #038 Speed ramp, #008 Kinetic typography, #003 Burst | `lean-in`, `backdrop-word`, `reject-stamp` |
| **Orbit Megah** | Sinematik, kamera bergerak besar | #030 Orbit, #027 Dolly in, #028 Zoom in, #020 Zoom through, #016 Parallax, #022 Light sweep | `orbit`, `slow-push`, `spotlight` |
| **Glitch Digital** | Teknologi, glitch, mengetik | #023 Glitch, #111 Chromatic aberration, #129 Text scramble, #006 Typewriter, #014 Motion trail | `uninstall`, `dot-reveal`, `led-sign` |
| **Kartu Layar** | Tampilan aplikasi: notifikasi, toggle, hitung naik | #056 Toast notification, #059 Toggle switch, #068 Step indicator, #007 Count-up, #058 Carousel | `messages`, `apple-toggles`, `checklist`, `liquid-glass-graph` |
| **Editorial Cepat** | Majalah, potongan tegas, teks bermasker | #042 Match cut, #043 Whip pan, #137 Push transition, #133 Text mask, #130 Wave text, #005 Mask reveal | `match-cut`, `headline-box`, `split-headline`, `cover-star` |

Aturan pakai: satu preset per video (boleh campur dua bila Zulnan minta). Dengan batas 2 detik per adegan, pilih elemen yang bisa terjadi dalam satu hentakan; gerak panjang (misalnya orbit penuh) dipecah jadi beberapa potongan.

## 4. Typography

Typography mengikuti referensi: font yang dibundel di claude-video-effects (folder `fonts/` di repo itu; lisensi tiap font ada di sana).

| Font | Peran yang cocok |
|---|---|
| Anton | Judul besar rapat, huruf kapital |
| Archivo Black | Judul tebal |
| Montserrat | Judul dan isi tegas |
| Inter | Teks isi, subtitle |
| Playfair Display, Instrument Serif | Kesan editorial atau majalah |
| Permanent Marker | Aksen tulisan tangan |
| Space Mono | Label teknis, kode, mengetik |

Usulan aturan: satu font display dan satu font isi per video. Gerak teks dipilih dari Motion Prompt: #008 Kinetic typography, #129 Text scramble, #130 Wave text, #133 Text mask, #132 Variable font animation.

## 5. Alat render per bentuk video

| Bentuk | Alat yang dipertimbangkan | Siapa yang mengerjakan |
|---|---|---|
| Tanpa Wajah | HyperFrames (Apache 2.0) atau Remotion (cek lisensi bila jadi produk) | Perender, memakai arahan Pelatih Editing Video Pendek |
| Mode Tampil | claude-video-effects (lokal di komputer Zulnan, ffmpeg dan Python 3.12) | Zulnan merekam; Pelatih Editing menulis rencana efek (`<nama-video>_effects.json`); Perender menjalankan |
| Subtitle | Remotion captions, atau tulis manual di editor (CapCut) | Narator & Subtitle |
| Pratinjau di browser | Canvas di Zuno Studio v2 (sudah ada) | Zuno Studio |

Status jujur: belum ada alat di atas yang diuji dari sesi ini. Sampai satu file video benar-benar dirender, status tetap "Prompt siap generate", bukan "selesai".

## 6. Kartu Gaya (template)

Satu Kartu Gaya ditempel di setiap Kartu Konten video. Pemiliknya Pencerita Visual.

```
KARTU GAYA
Kartu Konten  : KK-___
Nama gaya     : (preset, mis. Dentum, atau nama sendiri)
Mode          : Tanpa Wajah | Mode Tampil
Referensi     : gambar Pinterest (dilampirkan) | nomor Motion Prompt | nama efek
Kesan         : 1 kalimat dari Zulnan
Palet         : warna utama, aksen, latar
Typography    : font display + font isi
Gerak         : kamera, transisi, gerak teks (tiap adegan maksimal 2 detik)
Elemen tetap  : slogan setelah hook; posisi nama atau handle
Larangan      : wajah tertutup, aset berhak cipta tanpa label, dan seterusnya
Asal aset     : buatan sendiri | AI | berlisensi (sebut sumber)
Alat render   : HyperFrames | Remotion | claude-video-effects | manual
Status        : Gaya siap | Prompt siap generate | File jadi
```

Carousel cukup mencatat huruf template (A, B, C, atau D) di Kartu Konten; Kartu Gaya lengkap hanya untuk video.

Bila Zulnan tidak memberi referensi, tim memakai gaya terakhir yang disetujui, atau bertanya satu kali. Tim tidak menebak gaya baru. Referensi dipakai sebagai arah, bukan untuk meniru persis karya orang lain.

## 7. Keputusan dan yang masih terbuka

Sudah diputuskan Zulnan (2026-11-01):
- Suara: campur. Mode Tampil rekaman sendiri; Tanpa Wajah boleh suara AI generik.
- Batas adegan: tiap adegan maksimal 2 detik (diubah Zulnan dari 1,5 detik pada 2026-11-01).
- Alat render video pertama yang dicoba: claude-video-effects (Mode Tampil, jalan di komputer Zulnan; butuh ffmpeg dan Python 3.12).
- Panjang video dan jumlah slide mengikuti topik.
- Carousel: campuran sesuai topik (template A sampai D dipilih per carousel).

Masih terbuka:
- Warna akhir template carousel bila ingin diubah.
- Video pertama untuk uji claude-video-effects: butuh rekaman asli Zulnan (video vertikal dari ponsel paling cocok) dan pilihan satu preset. Zulnan akan mengirimnya di Claude Code.
- Alat untuk video Tanpa Wajah (HyperFrames atau Remotion) belum dipilih.
