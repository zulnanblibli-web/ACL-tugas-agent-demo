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
    if ((q.get('kualitas') === 'ringan' || window.innerWidth < 760) && kual) { kual.value = 'low'; kual.dispatchEvent(new Event('change')); }
    var diam = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Workspace (?asli=1): agen diam sampai halaman induk bilang ada tahap yang jalan.
    if (q.get('asli') === '1' && s.animation && s.animation.running) s.animation.pause();
    if (q.get('demo') === '1' && !diam && s.animation && !s.animation.running) { var play = document.getElementById('play'); if (play) play.click(); else s.animation.start(); }
    try { parent.postMessage({ nexaKantor: 'siap' }, location.origin); } catch (e) {}
  })();
})();
