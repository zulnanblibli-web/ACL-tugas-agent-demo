# Kantor 3D (sumber)

Sumber Kantor 3D Nexaoffice: dua gedung (Menara Senja, Griya Langit), studio The Grotto, 18 karakter agen, galeri karakter.
Sejak 2026-11-12 sumbernya di sini, di repo Zuno. Dulu ada di repo jasa dan disalin bolak-balik; sekarang kerjanya satu arah:

```
ubah di kantor-3d/  ->  node web/build.mjs  ->  node tools/jasa/ekspor-jasa.mjs <repo-jasa>  ->  tes jasa
```

- `web/build.mjs` otomatis menyalin hasil build Kantor 3D ke `web/` (lewat `tools/kantor/ambil-kantor.mjs`).
- Ekspor jasa menyalin folder ini utuh ke repo jasa (kode, hasil build, aset, alat, tes). Repo jasa tidak diedit langsung.

## Mengubah kode kantor

```
cd kantor-3d
npm install                # sekali
npm run build:themes       # setelah mengubah office/*.js atau nexa/*.js
```

`npm run build:office` juga membuat ulang 18 GLB agen dan galeri karakter (bila `office/data.js` atau `office/character.js` berubah).

## Tes

```
python3 -m http.server 4173 --bind 127.0.0.1   # untuk test:office, test:themes, test:activities, test:agent-lifecycle, test:layar
python3 -m http.server 3000 --bind 127.0.0.1   # untuk test:nexa, test:nexa-seating
CHROMIUM_PATH=<path chromium> npm run test:office
npm run test:simulation && npm run test:nexa-animation && npm run test:nexa-kendali   # tanpa browser
```

Screenshot dan log tes masuk `artifacts/` (tidak di-commit). Pratinjau zip (`npm run package:preview`) masuk `preview/` dan `downloads/` (tidak di-commit).
