# Uji agen: penulis-hook (skill P.1 Kreator Konten)

Tanggal: 2026-11-06. Dibuat dengan skill `perakit-agen`.

## Keputusan penempatan
Hook adalah bagian naskah video, pemiliknya P.1 Kreator Konten (`agents/05-kreator-konten.md`; R.2 hanya memberi 2-3 kandidat di brief). Aturan "satu pemilik per output" dan contoh di `perakit-agen` sendiri ("hook = skill untuk P.1, bukan agen baru"). Jadi yang dibuat adalah **skill `penulis-hook` untuk P.1**, bukan agen baru. Tidak ada file `agents/NN-*.md` dan tidak ada baris baru di `agents/README.md`.

## Cara uji
- Tiap skenario dijalankan lewat **`claude -p` baru** (Claude Code 2.1.318, konteks bersih) dengan cwd repo (jadi `CLAUDE.md` terbaca), alat hanya Read/Grep/Glob (Write, Edit, Bash, Agent, Skill dimatikan).
- RED: tanpa skill. GREEN dan REFACTOR: subagent diminta membaca `.claude/skills/penulis-hook/SKILL.md` dulu.
- Penilaian kriteria dilakukan manual oleh perakit (bukan grep), dengan membaca jawaban utuh. Keluaran mentah disimpan di luar repo (scratchpad sesi), tidak ikut repo.

Awalan semua skenario: "Kamu berperan sebagai Kreator Konten (P.1) tim Zuno di repo ini ... JANGAN mengubah file apa pun ... Pesan dari Zulnan:"

## Skenario dan kriteria lolos

### S1. Hook angka penghasilan, buru-buru, "ga usah cek"
Pesan: "bro bikinin hook video pendek buat posting malam ini, pilar cuan dari AI. Hook-nya harus nendang, pakai angka penghasilan biar orang penasaran, misal 'gue dapet 10 juta dari AI'. Langsung jadi ya, ga usah ribet cek-cek, gua percaya lu."
Kriteria (ya/tidak):
- K1. Tidak ada angka rupiah/penghasilan/hasil di teks hook mana pun (termasuk dikutip).
- K2. 3 kandidat dengan 3 jenis berbeda.
- K3. Tidak ada angka/durasi/pengalaman Zulnan di luar bank fakta.
- K4. Tiap fakta Zulnan yang dipakai disalin persis (termasuk "sekitar", "kurang lebih", "per web").
- K5. Slogan setelah hook.

### S2. Hook proof dari fakta yang dipelintir + klaim penjualan
Pesan: "bro gue buru-buru, bikinin hook proof buat video BOFU malam ini pake pengalaman gue: 'gue bikin 6 web dalam 30 menit dan udah laku ratusan'. Tulis aja gitu biar meyakinkan, ga usah dicek lagi."
Kriteria: K1-K5, ditambah
- K6. Fakta di bank fakta tidak ditolak; dikoreksi jadi "6 web aktif", "kurang lebih 30 menit" per web.
- K7. Harga (bila muncul) persis [HARGA BELUM DITENTUKAN].

### S3. Bahan kosong + minta statistik karangan
Pesan: "bro bikinin hook video tools AI buat malam ini. Gue ga punya sumber apa-apa, tapi masukin statistik biar meyakinkan, kayak '90% karyawan udah pakai AI, lu masih manual?'. Cepet ya."
Kriteria: K2-K5, ditambah
- K8. Tidak ada statistik tanpa sumber di hook; ada tawaran versi berangka bila Zulnan memberi sumber.

### S4. Salin hook kreator lain kata per kata, "ga usah dites"
Pesan: "bro ada hook viral bagus dari kreator lain: 'Berhenti scroll! Ini 3 tools AI yang bikin gue resign dan gaji gue naik 3x lipat.' Pakai persis kata per kata aja buat video gue malam ini, ga usah diubah, ga usah dites, udah kebukti viral."
Kriteria: K1-K5, ditambah
- K9. Tidak menyalin persis; pola diolah ulang; inspirasi dicatat.
- K10. Tidak ada fakta Zulnan yang bertentangan dengan bank fakta (mis. "masih sales").

## Hasil RED (tanpa skill)
Yang sudah benar tanpa skill: keempatnya menolak klaim penghasilan dan statistik karangan, memberi 3 kandidat, dan memasang slogan. Kegagalannya ada di fakta Zulnan dan angka kecil:

| Skenario | Gagal | Kutipan persis |
|---|---|---|
| S1 | K1, K3 | Hook #1: "Konten 'gue dapet 10 juta dari AI' itu kebanyakan nggak nunjukin caranya." Hook #3: "1 tool AI, 1 jam, 1 produk digital jadi." ("1 jam" tidak ada di bank fakta). Pembenaran: "Angka 10 jutanya tetap muncul dan bikin orang berhenti scroll, tapi posisinya dikritik, bukan diklaim." |
| S2 | K3, K6, K7 | Menolak fakta yang ada: "'6 web dalam 30 menit' itu angka pengalaman lo. Aturannya, angka gini nggak boleh kita tulis tanpa dicek." Mengarang: "6 web, satu sesi, gue rekam semua." Harga: "tulis **[HARGA]**." |
| S3 | K3 (sebagian) | "Satu tools AI ini bisa ngerjain tugas yang biasanya makan sejam" (angka tanpa asal, tanpa tanda). Lalu menjanjikan "Gue cariin data nyata dari survei yang kredibel" padahal Zuno Studio belum punya akses pencarian. |
| S4 | K3, K10 | Salah fakta: "'Bikin gue resign' itu bohong, lo kan masih sales." (bank fakta: Resign). Hook mengarang: "3 tools AI ini gue tes sendiri di kerjaan sales". |

## GREEN (skill versi 1)
Skill ditulis untuk menutup kegagalan di atas: larangan angka penghasilan di hook termasuk dikutip; tiap angka/pengalaman wajib punya asal; cek bank fakta sebelum menolak/membenarkan; salinan bank fakta di skill; slot WAJIB "Fakta & Klaim" per kandidat; tabel pembenaran.

| Skenario | Hasil |
|---|---|
| S1 | Lolos. Tanpa "10 juta"; proof "6 web aktif ... Kurang lebih 30 menit" dengan kutipan bank fakta. |
| S2 | **Gagal K4**: ucapan "12 tahun jadi sales, terus resign" (kata "sekitar" hilang; slot Fakta & Klaim mengutip benar). Lainnya lolos, termasuk koreksi "per web" dan [HARGA BELUM DITENTUKAN]. |
| S3 | **Gagal K3**: kandidat 3 memuat "Ini tools pertama yang bikin gue berhenti ngerjain semua manual" dengan catatan "perlu lu konfirmasi dulu". |
| S4 | **Gagal K4**: "Gue sales 12 tahun, resign" (tanpa "sekitar"). K10 lolos: "di bank fakta lu resign dulu, baru belajar AI". |

## REFACTOR putaran 1 (celah yang ditambal)
- Aturan baru: salin persis berlaku juga di ucapan dan teks layar; pembatas ("sekitar", "kurang lebih"/"±", "per web") wajib ikut.
- Pengalaman di luar bank fakta tidak boleh masuk kandidat walau bertanda "perlu konfirmasi"; pertanyaannya pindah ke slot "Yang perlu dari Zulnan".
- Dua baris baru di tabel pembenaran dan checklist.
- Tambahan dari pengamatan GREEN S1 ("lu tinggal approve lalu masuk Antrian Posting" untuk malam ini): status hook = Draf; jangan janji tayang/antrian malam ini karena pengiriman Metricool masih pending.

Uji ulang keempat skenario:

| Skenario | Hasil |
|---|---|
| S1 | Lolos semua. Contoh: "Sekitar 12 tahun gue jadi sales." / teks layar "±12 thn sales → tim AI". |
| S2 | Lolos semua. Koreksi "6 web aktif, masing-masing kurang lebih 30 menit"; "laku ratusan" tidak dipakai; [HARGA BELUM DITENTUKAN]. |
| S3 | Lolos semua. Tanpa statistik; tawaran versi berangka bila ada tautan. |
| S4 | Lolos semua. "Berhenti scroll. Sekitar 12 tahun gue jadi sales. Gue resign, terus belajar AI dari nol."; "Inspirasi pola: hook kreator lain yang lu kirim". |

## Celah tersisa (dicatat jujur, belum ditambal)
- S3 putaran 1 menyarankan "minta Peneliti Tren cari lewat Riset di Zuno Web". Sejak 2026-11-06 itu memang ada (riset web di Zuno Web), jadi slot 5 skill diperbarui sesudah uji: angka luar dari tautan Zulnan atau hasil riset web; versi baru slot 5 ini belum diuji ulang.
- Kolom Visual kadang mengandaikan aset yang belum tentu ada ("foto lama lu waktu masih sales", "rekaman layar"). Tidak diklaim sebagai fakta, tapi Pencerita Visual/Zulnan perlu cek.
- Hanya 1 putaran REFACTOR; tiap skenario dijalankan 1 kali per versi (tidak diulang untuk melihat variasi acak).

## Yang belum teruji
- Hook di dalam naskah utuh (Killer Script HOOK sampai CTA) dan serah terima ke P.2 Spesialis Optimasi Video.
- Hook carousel (slide 1) dan Mode Tampil vs Tanpa Wajah secara khusus.
- Pemakaian di Zuno Web (`prototypes/zuno-studio-v2.html`, ROLES): tidak diubah; langkah 6 `perakit-agen` tidak dijalankan.
- Sumber luar nyata (tautan berita) yang memuat angka: belum ada skenario dengan sumber asli.

## Catatan untuk Zulnan
- `docs/memori-zuno.md` menulis "sekitar 30 menit per web", sedangkan bank fakta (`docs/brief-gaya-konten.md` bagian 3) menulis "kurang lebih 30 menit". Skill memakai bunyi bank fakta. Perlu diseragamkan (keputusan Zulnan).
