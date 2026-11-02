---
name: "08-motion-purpose-check"
description: "Gunakan saat user menambahkan animasi/motion ke webapp, untuk memastikan setiap motion punya tujuan jelas (feedback/transisi state) dan tidak memberatkan performa, bukan sekadar ditambah karena tools AI mempermudah."
---

# 08 — Motion Purpose Check

Tugas tunggal: menyaring animasi/motion supaya hanya dipakai saat benar-benar membantu, bukan ditambah di semua tempat hanya karena tools AI motion generator membuatnya mudah. Jalankan saat halaman sudah fungsional (setelah skill 05/07), sebelum fidelity check (skill 09).

## Langkah

1. **Untuk setiap motion yang direncanakan/sudah ada, tanya 1 pertanyaan wajib:** "Motion ini menandai apa?" Jawaban yang valid hanya 3 jenis: (a) perubahan state (loading → selesai, terbuka → tertutup), (b) feedback aksi user (klik tombol, submit form berhasil/gagal), (c) mengarahkan perhatian ke 1 elemen penting (notifikasi baru, error muncul). Kalau tidak masuk salah satu, motion itu dicoret.

2. **Batasi durasi motion**: transisi state/feedback aksi maksimal 200-300ms, jangan lebih lama hanya demi "terlihat halus". Motion yang lambat terasa mengganggu, bukan elegan.

3. **Cek tidak ada motion yang tumpang tindih/berbarengan** di satu layar yang bisa membuat user bingung mana yang harus diperhatikan dulu.

4. **Uji di perangkat/koneksi low-end** (atau mode throttle di browser dev tools) sebelum dianggap selesai — motion yang mulus di laptop kerja bisa patah-patah atau memperlambat loading di device user sebenarnya.

5. **Beri opsi matikan motion untuk aksesibilitas** jika frameworknya mendukung (hormati `prefers-reduced-motion`), terutama untuk motion yang berdurasi lebih dari sekadar transisi singkat.

## Yang harus dihindari

- Jangan menambahkan motion ke elemen yang statis/tidak berubah state hanya karena "terlihat lebih hidup".
- Jangan biarkan lebih dari 1 motion besar berjalan bersamaan di layar yang sama.
- Jangan anggap selesai sebelum dicek di kondisi device/koneksi lemah.

## Catatan Nexamind
- Bisa dipakai di LLM mana pun (Claude, Gemini, ChatGPT).
- Ikuti juga prinsip kerja Engineering: sebut asumsi, sesederhana mungkin, ubah seperlunya, setiap langkah punya cara cek.
