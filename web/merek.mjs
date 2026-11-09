// Merek Nexaoffice untuk ruang kerja (web/studio.html). Dipakai web/build.mjs (dipasang) dan
// tools/jasa/ekspor-jasa.mjs (dilepas lagi), supaya edisi jasa tetap white-label.
// Tiap pasangan: [teks asli hasil build, teks Nexaoffice]. Masing-masing harus ada tepat satu kali.
export const merekNexa = [
  ['<title>ZUNO · Tim Agent AI</title>', '<title>Nexaoffice · Ruang Kerja</title>'],
  ['<meta name="description" content="Zuno: tim agent AI pribadi untuk riset, naskah, desain, dan build web app.">', '<meta name="description" content="Ruang kerja Nexaoffice: tim agen AI untuk riset, naskah, desain, dan build web app.">'],
  ['<body>\n<div class="hud-bg"', '<body>\n<a class="nexa-home" href="/" aria-label="Nexaoffice, beranda">Nexaoffice</a>\n<style>.nexa-home{position:fixed;left:18px;top:14px;z-index:60;font:700 22px/1 Orbitron,sans-serif;letter-spacing:.04em;color:#e8f1ff;text-decoration:none;padding:6px 10px;border-radius:8px;background:rgba(3,6,11,.72)}.nexa-home:hover{color:#8fd0ff}.nexa-home:focus-visible{outline:2px solid #3fb6ff;outline-offset:2px}.hud-title.nexa-title{font-size:clamp(40px,9vw,112px);letter-spacing:.06em}@media(max-width:700px){.nexa-home{position:static;display:inline-block;margin:12px 0 0 12px}}</style>\n<div class="hud-bg"'],
  ['<h1 class="hud-title mv mv3">ZUNO</h1>', '<h1 class="hud-title mv mv3 nexa-title">NEXAOFFICE</h1>'],
  ['<script src="/motion.js" defer></script>', '<script src="/motion.js" defer></script>\n<script src="/serah.js" defer></script>']
];
export function pasang(teks, arah = 'maju') {
  for (const [asli, nexa] of merekNexa) {
    const [cari, ganti] = arah === 'maju' ? [asli, nexa] : [nexa, asli];
    const n = teks.split(cari).length - 1;
    if (n !== 1) throw new Error('Merek Nexaoffice: penanda harus ada tepat satu kali (' + n + '): ' + cari.slice(0, 70));
    teks = teks.replace(cari, () => ganti);
  }
  return teks;
}
