# Video alur Nexaoffice (Remotion)

Animasi 12 detik di bagian "Cara kerja" situs Nexaoffice: perintah masuk, Lead membagi tugas, divisi bekerja, kamu menyetujui.
Warna dan huruf sama dengan situs (`web/src/site/tokens.css`: Antonio, Onest, JetBrains Mono). Karakter dari `web/assets/agents/`.

```bash
cd tools/video-nexaoffice && npm install && node render.mjs
```

Hasil: `web/assets/nexaoffice-alur.mp4` dan `nexaoffice-alur.png` (poster). Lalu buat WebM dan poster WebP (Chromium tanpa codec H.264 butuh WebM):

```bash
ffmpeg -y -i web/assets/nexaoffice-alur.mp4 -c:v libvpx-vp9 -b:v 0 -crf 40 -row-mt 1 -an web/assets/nexaoffice-alur.webm
ffmpeg -y -i web/assets/nexaoffice-alur.png -c:v libwebp -quality 82 web/assets/nexaoffice-alur.webp && rm web/assets/nexaoffice-alur.png
```

Browser: `CHROMIUM_PATH` (bawaan `/opt/pw-browsers/chromium`).
