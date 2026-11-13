# Suara AI bahasa Indonesia untuk akun faceless (T5 mesin video)

Dicek 2026-11-12 untuk Zulnan ("coba pilihin, kalo oke bisa dipakai terus kan?").

**Syarat:**
- bahasa Indonesia;
- boleh dipakai untuk video yang dimonetisasi;
- gratis;
- jalan offline di laptop, jadi bisa dipakai terus tanpa langganan.

Semua lisensi di bawah dibaca langsung dari halaman model/dataset di Hugging Face dan README resminya, tanggal 2026-11-12. **Contoh suara belum dibuat:** pemasangan paket TTS di sesi cloud ini ditahan pengaman otomatis dan menunggu izin Zulnan.

## Pilihan

| | **Pocket TTS Indonesia** (pilihan utama) | **Supertonic 3** (cadangan) |
|---|---|---|
| Pembuat | anak10thn, di atas Kyutai Pocket TTS | Supertone |
| Bahasa Indonesia | Ya, khusus Indonesia (dilatih 502 jam data LEMAS) | Ya, salah satu dari 31 bahasa |
| Lisensi model | **CC BY 4.0**. Dataset LEMAS CC BY 4.0, model dasar Kyutai CC BY 4.0, contoh suara Common Voice CC0 | **OpenRAIL-M**: gratis, selamanya, boleh komersial, tapi ada daftar larangan pemakaian |
| Komersial / monetisasi | Boleh, **wajib kredit** di caption | Boleh, dengan syarat di bawah |
| Syarat penting | Kredit + tautan lisensi | (e) wajib menyebut konten dibuat mesin (sudah kita lakukan lewat label AI); (l) **dilarang untuk "nasihat medis"**, jadi jangan dipakai untuk episode penyakit; kalau ikut dijual di Nexaoffice, daftar larangan harus ikut di lisensi produk |
| Suara | Kloning dari rekaman contoh 10-15 detik: 4 suara Common Voice (CC0) disediakan, atau rekaman sendiri | 10 suara bawaan (F1-F5, M1-M5) |
| Jalan di laptop | CPU saja, sekitar 2,2x lebih cepat dari waktu nyata; model 438 MB; butuh PyTorch | ONNX, ringan, tanpa PyTorch |
| Mutu (dari pembuatnya) | Salah ucap kata sekitar 9% (WER median); skor mutu UTMOS 2,68 (sedang) | Tidak ada angka bahasa Indonesia |
| Status proyek | Proyek kecil perorangan; bobot dikunci ke commit `17257664…` | Diarsipkan pembuatnya (tidak ada pembaruan lagi) |
| Catatan teks | **Angka harus ditulis dengan kata** ("tiga koma tujuh", bukan "3,7") | - |

**Kredit wajib (Pocket TTS)**, ditaruh di caption:
> Suara: Pocket TTS Indonesian oleh anak10thn (CC BY 4.0), berbasis Kyutai Pocket TTS (CC BY 4.0).

## Yang tidak dipakai
- **Piper `id_ID-news_tts`:** dataset di kartu modelnya menunjuk ke halaman korpus bahasa Malayalam, jadi lisensi datanya tidak jelas.
- **Kokoro:** tidak punya bahasa Indonesia.
- **Chatterbox:** tidak punya bahasa Indonesia (Melayu ada), dan proyeknya sudah dihentikan.
- **Meta MMS-TTS:** non-komersial.
- **edge-tts:** memakai layanan Microsoft Edge tanpa izin resmi.
- **Google Cloud TTS, Azure:** berbayar dengan kuota gratis bulanan, butuh kartu + API key. Kuotanya belum terbaca (halaman harga tidak bisa dibuka dari sini). Opsi kalau suara offline kurang bagus.
- **ElevenLabs:** suara bagus, tapi paket gratisnya tidak untuk komersial. Berbayar = butuh izin Zulnan.

## "Bisa dipakai terus?"
Ya, untuk dua pilihan di atas:
- model diunduh sekali, disimpan di laptop, dan jalan tanpa internet dan tanpa biaya;
- lisensinya tidak punya batas waktu (CC BY 4.0 tidak bisa dicabut; OpenRAIL-M "perpetual").

Syaratnya:
- kredit (Pocket TTS);
- label konten AI di caption;
- Supertonic tidak dipakai untuk topik penyakit.

## Langkah berikutnya (butuh izin Zulnan)
1. Izinkan pemasangan paket `pocket-tts` (+ PyTorch CPU) dan `supertonic` di sesi ini, atau jalankan sendiri di laptop setelah `git pull`.
2. Gua bikin narasi power bank dengan dua mesin, beberapa suara per mesin. Lu dengar dan pilih.
3. Suara yang dipilih dimasukkan ke mesin video (`--suara`), lalu video dicek ulang (`check.py`, target -14 LUFS).
