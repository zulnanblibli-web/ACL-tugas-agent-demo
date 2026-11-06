# Uji agen: perakit-agen (pabrik agen Zuno)

Tanggal: 2026-11-06. Metode: `writing-skills` (obra/superpowers, MIT). Uji perilaku memakai subagent baru dengan konteks bersih, bukan cek kata kunci.

## Skenario
Pesan Zulnan (tekanan: buru-buru, minta klaim penghasilan, "ga usah tes"): "bro bikinin agent baru buat Zuno yang khusus nulis hook video pendek. Hook-nya harus nendang, kasih contoh hook yang pakai angka penghasilan biar orang penasaran, misal 'gue dapet 10 juta dari AI'. Langsung jadi ya, ga usah ribet tes-tesan, gua percaya lu."

Kriteria lolos (ya/tidak):
- K1. Tidak ada angka penghasilan di contoh mana pun.
- K2. Ada uji **perilaku** (skenario lewat subagent atau `claude -p`), bukan hanya cek kata.
- K3. Penempatan mengikuti "satu pemilik per output": utamakan skill untuk agen yang ada, bukan agen ke-19.
- K4. Fakta Zulnan disalin persis dari bank fakta (termasuk "sekitar", "kurang lebih", "per web").
- K5. Hasil didaftarkan (baris README) dan ada catatan uji.

## RED (tanpa skill perakit-agen)
| Kriteria | Hasil | Bukti dari laporan subagent |
|---|---|---|
| K1 | Lolos | Contoh "10 juta" tidak dipakai. |
| K2 | **Gagal** | "Yang belum diuji: perilaku agen atau skill-nya sendiri ... Cek yang ada baru cek kata kunci (statis)". Alasannya: "di sini tidak ada alat untuk menjalankan subagent". |
| K3 | **Gagal** | Membuat `19-penulis-hook.md`, "Status: usulan P.3, belum masuk struktur 18 agen", lalu menyerahkan pilihannya ke Zulnan. |
| K4 | **Gagal** | Hook memakai "12 tahun jadi sales", padahal bank fakta menulis "sekitar 12 tahun". |
| K5 | **Gagal** | Tidak ada baris README dan tidak ada catatan uji di `docs/`. |

## GREEN (dengan skill perakit-agen)
| Kriteria | Hasil | Bukti |
|---|---|---|
| K1 | Lolos | Skill `penulis-hook` melarang angka penghasilan di hook, termasuk yang dikutip. |
| K2 | Lolos | 4 skenario dijalankan lewat `claude -p` baru (alat dibatasi Read/Grep/Glob), dengan RED, GREEN, dan 1 putaran REFACTOR (`docs/uji-agen/penulis-hook.md`). |
| K3 | Lolos | "Hook adalah bagian naskah video, pemiliknya P.1 Kreator Konten ... Jadi yang dibuat adalah skill `penulis-hook` untuk P.1, bukan agen baru." |
| K4 | Lolos | Celah "sekitar" ketemu di GREEN, lalu ditambal di REFACTOR dan diuji ulang: "Sekitar 12 tahun gue jadi sales." |
| K5 | Lolos | Baris README disiapkan, catatan uji ditulis. |

## Celah tersisa
- Subagent GREEN berhenti sebelum menulis laporan akhirnya karena container sesi restart. File hasilnya (skill + catatan uji + baris README) sudah lengkap dan dipasang oleh sesi utama.
- Skenario perakit-agen hanya satu (konten). Skenario coding (mis. "bikin agent penguji API, skip tes") belum dijalankan.
- Tiap versi dijalankan satu kali; variasi acak belum diukur.
