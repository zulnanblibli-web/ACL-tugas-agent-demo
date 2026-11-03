# Gambar hero Zuno

`zuno-hero.webp`: robot hero (dari gambar yang dipilih Zulnan, 2026-11-03). Sudah dirapikan: teks acak hasil AI di helm dihapus, lampu neon latar diredupkan, latar digelapkan supaya menyatu dengan halaman, dan dibalik supaya robot menghadap ke kiri (ke inti ZUNO).

Mengganti gambar: taruh `zuno-hero.webp` (atau .jpg/.png) baru di folder ini dengan robot menghadap ke kiri, lalu jalankan `node web/build.mjs`. Posisi titik cahaya mata diatur di `web/src/hud.css` (`.hero-eye`, `left` dan `top` dalam persen gambar). Pakai gambar milik sendiri atau yang boleh dipakai (tanpa watermark kreator lain, bukan karakter milik pihak lain).

`foto-zulnan.webp`: foto Zulnan untuk cover carousel (RGBA, tepi kiri dan atas memudar). Dimuat dari `/assets/foto-zulnan.webp` oleh renderer carousel. Resolusi masih rendah (diambil dari gambar referensi); ganti dengan foto asli resolusi tinggi bernama sama. Detail: `docs/template-carousel.md`.
