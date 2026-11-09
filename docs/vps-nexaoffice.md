# Nexaoffice: Pengaturan AI dan server VPS

Berlaku untuk Nexaoffice (repo ini, folder `web/`) dan edisi jasa (`zuno-studio-app`, folder utama). Dibuat 2026-11-09.

## Tiga cara menyambungkan otak AI

Buka **User Interface** (`/studio.html`), klik **Pengaturan AI** di kanan atas.

| Pilihan | API key disimpan di | Cocok untuk |
|---|---|---|
| **Server ini** (bawaan) | env server yang membuka halaman (Vercel: Settings > Environment Variables; VPS: `.env.local`) | Satu key untuk semua perangkat |
| **API key lokal** | browser perangkat itu saja (localStorage), dikirim per permintaan lewat HTTPS ke server Nexaoffice, dipakai untuk permintaan itu saja, tidak disimpan dan tidak dicatat server | Mau ganti key/penyedia tanpa buka Vercel |
| **Server VPS** | `.env.local` di VPS-mu | Proses panjang tanpa batas waktu Vercel (300 detik per panggilan), server sendiri |

Semua pilihan tetap butuh **kunci akses** (`ZUNO_ACCESS_KEY`) server yang dipakai. Ini mencegah orang lain memakai servermu sebagai perantara AI gratis.

Catatan keamanan mode API key lokal:
- Key ada di browser. Siapa pun yang memakai browser/perangkat itu bisa memakainya. Klik **Hapus semua** di Pengaturan AI sebelum meminjamkan perangkat.
- Di HP dan laptop key diisi masing-masing (tidak tersinkron).
- Pemilik server bisa mematikan mode ini dengan env `NEXA_KUNCI_PENGGUNA=off`.
- Endpoint `openai-compatible` dari mode lokal harus `https://` dan bukan alamat jaringan lokal (kecuali server dijalankan sendiri lewat `dev-server.mjs`, di mana `NEXA_IZINKAN_LOKAL=1` bawaan, supaya Ollama/LM Studio di mesin itu bisa dipakai).

Tombol **Tes sambungan** mengecek `/api/status` lalu meminta jawaban satu kata ke AI (memakai sedikit token).

## Pasang di VPS

Kebutuhan: VPS Ubuntu 22.04/24.04 atau Debian 12 (1 vCPU, RAM 1 GB cukup untuk server ini), akses root, dan domain/subdomain yang **A record**-nya mengarah ke IP VPS (untuk HTTPS). Harga VPS dan domain tidak termasuk; bayar sendiri ke penyedia pilihanmu.

```bash
git clone https://github.com/<akun>/<repo>.git /opt/nexaoffice
```

```bash
cd /opt/nexaoffice && sudo bash tools/vps/pasang-vps.sh --domain ai.domainmu.com --situs https://zuno-studio-dusky.vercel.app
```

Skrip itu:
1. memasang Node.js 20 bila belum ada, lalu `npm ci`;
2. membuat pengguna sistem `nexaoffice`;
3. menyiapkan `.env.local` (izin 600): `NEXA_SERVER=vps`, `HOST=127.0.0.1`, `PORT`, `NEXA_CORS_ORIGIN` dari `--situs`, membuat `ZUNO_ACCESS_KEY` acak bila kosong, lalu menanyakan penyedia dan API key di terminal (tidak tampil saat diketik);
4. memasang layanan systemd `nexaoffice` (jalan otomatis setelah reboot);
5. memasang Caddy dengan HTTPS otomatis untuk `--domain`;
6. mengecek `http://127.0.0.1:3000/api/status`.

Repo Zuno menjalankan `web/dev-server.mjs`; repo jasa menjalankan `server.mjs` (isi sama, hasil ekspor).

Setelah selesai, dua cara memakai:
- **Buka langsung** `https://ai.domainmu.com`: halaman lengkap dari VPS, pilih **Server ini** di Pengaturan AI.
- **Dari situs Vercel**: Pengaturan AI > **Server VPS** > isi `https://ai.domainmu.com` dan kunci akses VPS. Alamat situs Vercel harus ada di `NEXA_CORS_ORIGIN` VPS.

Lihat kunci akses VPS (di terminal VPS, jangan tempel ke chat):

```bash
sudo grep ZUNO_ACCESS_KEY /opt/nexaoffice/web/.env.local
```

Perintah perawatan:

```bash
sudo systemctl restart nexaoffice
```

```bash
sudo journalctl -u nexaoffice -n 100
```

```bash
cd /opt/nexaoffice && sudo -u nexaoffice git pull && sudo systemctl restart nexaoffice
```

Mengubah key atau penyedia: edit `.env.local` di VPS (`sudo nano /opt/nexaoffice/web/.env.local`), lalu restart layanan.

## Variabel server baru

| Variabel | Gunanya |
|---|---|
| `HOST` | Alamat dengar `dev-server.mjs` (bawaan `127.0.0.1`) |
| `NEXA_SERVER` | Label di `/api/status` (`vps`) |
| `NEXA_CORS_ORIGIN` | Situs lain yang boleh memakai server ini (dipisah koma) |
| `NEXA_KUNCI_PENGGUNA` | `off` = tolak API key dari halaman |
| `NEXA_IZINKAN_LOKAL` | `1` = endpoint lokal/http boleh dipakai dari mode API key lokal (bawaan di `dev-server.mjs`) |

## Yang belum diuji

Skrip VPS diperiksa sintaksnya (`bash -n`) dan fungsi pengisi `.env.local` dicoba, tetapi belum dijalankan di VPS sungguhan (tidak ada VPS di sesi pembuatan). Uji pertama di VPS Zulnan; kirim hasil `journalctl -u nexaoffice -n 50` bila gagal.
