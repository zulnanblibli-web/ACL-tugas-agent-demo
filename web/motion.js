/* Zuno motion: animasi masuk per bagian, parallax hero, sorotan kursor, progres scroll.
   Setiap gerak punya tujuan: memberi tahu bagian baru masuk layar, respons kursor/ketukan, atau status kerja.
   Mati otomatis bila pengguna memilih kurangi gerak (prefers-reduced-motion). */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;

  // 1. Bagian masuk layar: muncul naik bertahap (sekali saja).
  var SEL = '.hud-grid>*, .hud-feat>div, .ws-title, .ws .tab, .ws-layout>.wrap>div>.panel:first-child, .hud-flow, .hud-quote2, .hud-stack, .stack>div, .hud-strip>div, .hud-foot';
  var els = Array.prototype.slice.call(document.querySelectorAll(SEL));
  if (!reduce && 'IntersectionObserver' in window) {
    root.classList.add('mv-on');
    var groups = new Map();
    els.forEach(function (el) {
      var p = el.parentElement, i = groups.get(p) || 0; groups.set(p, i + 1);
      el.classList.add('rv'); el.style.setProperty('--d', Math.min(i, 8) * 70 + 'ms');
    });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
    // Jaga-jaga: bila observer tidak memicu, tampilkan semua setelah 4 detik.
    setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 4000);
  }

  // 2. Progres scroll (garis tipis di atas).
  var bar = document.getElementById('hScroll'), ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var h = root.scrollHeight - innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
      root.classList.toggle('scrolled', scrollY > 40);
      ticking = false;
    });
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  if (reduce) return;

  // 3. Hero: figur dan judul mengikuti kursor sedikit (kedalaman).
  var hero = document.getElementById('heroTop'), fig = document.getElementById('heroFig');
  if (hero && fig && fine) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--px', x.toFixed(3)); hero.style.setProperty('--py', y.toFixed(3));
    });
    hero.addEventListener('pointerleave', function () { hero.style.setProperty('--px', 0); hero.style.setProperty('--py', 0); });
  }

  // 4. Sorotan kursor di kartu dan panel.
  if (fine) {
    document.addEventListener('pointermove', function (e) {
      var c = e.target.closest && e.target.closest('.hud-card,.panel,.stack>div,.hud-flow,.hud-feat>div');
      if (!c) return;
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  // 5. Ketukan tombol: riak cahaya dari titik sentuh.
  document.addEventListener('pointerdown', function (e) {
    var b = e.target.closest && e.target.closest('.btn,.tab,.hud-btn,.hero-cta,.chip');
    if (!b || b.disabled) return;
    var r = b.getBoundingClientRect(), s = document.createElement('span');
    s.className = 'ripple'; s.style.left = (e.clientX - r.left) + 'px'; s.style.top = (e.clientY - r.top) + 'px';
    b.appendChild(s); setTimeout(function () { s.remove(); }, 600);
  });

  // 6. Ganti tab ruang kerja: konten baru masuk dengan transisi singkat.
  ['wsK', 'wsB'].forEach(function (id) {
    var t = document.getElementById(id); if (!t) return;
    t.addEventListener('click', function () {
      var el = document.getElementById(id === 'wsK' ? 'wsKonten' : 'wsBuild');
      if (!el) return; el.classList.remove('tab-in'); void el.offsetWidth; el.classList.add('tab-in');
    });
  });
})();
