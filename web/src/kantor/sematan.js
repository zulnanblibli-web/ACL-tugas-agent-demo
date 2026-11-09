/* Nexaoffice: pengatur Kantor 3D sematan (di dalam iframe).
   ?awal=dalam masuk interior · ?demo=1 aktivitas demo · ?ringkas=1 sembunyikan kontrol kecil · ?kualitas=ringan tanpa bayangan, pixel ratio 1
   ?tema=langit tema awal bila pemakai belum pernah memilih · ?zoom=dekat kamera mendekat ke lantai studio (seperti hero) */
(function () {
  'use strict';
  var q = new URLSearchParams(location.search);
  // Jeda render saat kantor tidak terlihat di halaman induk (iframe asal sama berbagi thread dengan halaman):
  // loop render kantor memakai requestAnimationFrame; selama dijeda, panggilan berikutnya ditahan lalu dilepas saat terlihat lagi.
  var rafAsli = window.requestAnimationFrame.bind(window), dijeda = false, tertahan = [];
  window.requestAnimationFrame = function (cb) { if (dijeda) { tertahan.push(cb); return 0; } return rafAsli(cb); };
  window.nexaJeda = function (jeda) {
    dijeda = !!jeda;
    if (!dijeda && tertahan.length) { var a = tertahan; tertahan = []; a.forEach(function (cb) { rafAsli(cb); }); }
  };
  // Zoom kamera: OrbitControls kantor mendengar roda mouse di kanvas; n kali "scroll ke depan" = mendekat.
  window.nexaZoom = function (n) {
    var c = document.querySelector('#canvas-wrap canvas'); if (!c) return;
    var r = c.getBoundingClientRect();
    for (var i = 0; i < Math.abs(n); i++) c.dispatchEvent(new WheelEvent('wheel', { deltaY: n > 0 ? -100 : 100, deltaMode: 0, clientX: r.left + r.width / 2, clientY: r.top + r.height / 2, bubbles: true, cancelable: true }));
  };
  if (q.get('ringkas') === '1') document.documentElement.setAttribute('data-ringkas', '');
  var mulai = Date.now();
  (function tunggu() {
    var o = window.zunoOffice;
    if (!o) { if (Date.now() - mulai < 30000) setTimeout(tunggu, 150); return; }
    var temaAwal = q.get('tema'), simpan = null;
    try { simpan = localStorage.getItem('nexa-office-theme'); } catch (e) {}
    if (temaAwal && !simpan) o.themes.apply(temaAwal);
    if (q.get('awal') === 'dalam') o.interior();
    if (q.get('zoom') === 'dekat') setTimeout(function () { window.nexaZoom(16); }, 1000);
    var kual = document.getElementById('quality');
    if (q.get('kualitas') === 'ringan' && kual) { kual.value = 'low'; kual.dispatchEvent(new Event('change')); }
    if (q.get('demo') === '1') o.demo.start(false);
    try { parent.postMessage({ nexaKantor: 'siap' }, location.origin); } catch (e) {}
  })();
})();
