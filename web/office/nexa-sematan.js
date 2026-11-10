/* Nexaoffice: pengatur The Grotto versi sematan (di dalam iframe).
   Parameter sama dengan office/sematan.js: ?ringkas=1 sembunyikan panel · ?asli=1 tanpa tombol simulasi (Workspace)
   · ?demo=1 agen bergerak · ?kualitas=ringan tanpa efek berat. Halaman induk mengendalikan lewat window.nexaStudio. */
(function () {
  'use strict';
  var q = new URLSearchParams(location.search), html = document.documentElement;
  var tertanam = q.get('sematan') === '1';
  try { tertanam = tertanam || window.top !== window; } catch (e) { tertanam = true; }
  if (!tertanam) return;
  html.setAttribute('data-sematan', '');
  if (q.get('ringkas') === '1') html.setAttribute('data-ringkas', '');
  if (q.get('asli') === '1') html.setAttribute('data-asli', '');
  // Jeda render saat iframe tidak terlihat (sama dengan office/sematan.js).
  var rafAsli = window.requestAnimationFrame.bind(window), dijeda = false, tertahan = [];
  window.requestAnimationFrame = function (cb) { if (dijeda) { tertahan.push(cb); return 0; } return rafAsli(cb); };
  window.nexaJeda = function (jeda) {
    dijeda = !!jeda;
    if (!dijeda && tertahan.length) { var a = tertahan; tertahan = []; a.forEach(function (cb) { rafAsli(cb); }); }
  };
  var mulai = Date.now();
  (function tunggu() {
    var s = window.nexaStudio;
    if (!s) { if (Date.now() - mulai < 30000) setTimeout(tunggu, 150); return; }
    var kual = document.getElementById('quality');
    // Pratinjau di situs selalu Ringan (tanpa efek pascaproses dan bayangan) supaya gerak agen lancar di laptop biasa.
    if (kual) { kual.value = 'low'; kual.dispatchEvent(new Event('change')); }
    var diam = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Pratinjau di situs: kamera lebih dekat dari depan (sisi kolam) supaya studio memenuhi bingkai.
    if (q.get('ringkas') === '1' && s.view) {
      var c = document.getElementById('canvas'), r = c ? c.clientWidth / Math.max(1, c.clientHeight) : 1.6;
      if (r >= 1.3) s.view([0, 44, 64], [0, 0, 8], true);
      else if (r >= 0.85) s.view([0, 46, 62], [0, 0, 6], true);
      else s.view([0, 78, 104], [0, 0, 8], true);
    }
    if (q.get('demo') === '1' && !diam && s.animation && !s.animation.running) { var play = document.getElementById('play'); if (play) play.click(); else s.animation.start(); }
    try { parent.postMessage({ nexaKantor: 'siap' }, location.origin); } catch (e) {}
  })();
})();
