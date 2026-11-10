/* Nexaoffice: gerak bersama semua halaman. Pasangannya site/gerak.css.
   Kelas nx-gerak dipasang skrip kecil di <head>, kecuali pemakai meminta gerak dikurangi. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- penanda muat kantor 3D (tetap jalan walau gerak dikurangi) ---------- */
  var muat = $('kantorMuat'), iframe = $('kantorIframe');
  if (muat && iframe) {
    var cek = 0, sudah = false;
    var selesai = function () {
      if (sudah) return;
      sudah = true; clearInterval(cek);
      muat.classList.add('selesai');
      setTimeout(function () { muat.hidden = true; }, 500);
    };
    window.addEventListener('message', function (e) { if (e.origin === location.origin && e.data && e.data.nexaKantor === 'siap') selesai(); });
    // Cadangan bila pesan 'siap' terkirim sebelum skrip ini jalan.
    cek = setInterval(function () { try { if (iframe.contentWindow.zunoOffice || iframe.contentWindow.nexaStudio) selesai(); } catch (e) {} }, 400);
    setTimeout(selesai, 30000);
  }

  if (!document.documentElement.classList.contains('nx-gerak')) return;

  /* ---------- teks: per huruf dan per kata ---------- */
  function perHuruf(el) {
    var huruf = Array.from(el.textContent.trim()), n = huruf.length;
    el.setAttribute('aria-label', huruf.join(''));
    el.textContent = '';
    huruf.forEach(function (c, i) {
      var s = document.createElement('span');
      s.className = 'nx-huruf'; s.setAttribute('aria-hidden', 'true'); s.textContent = c;
      s.style.setProperty('--i', i); s.style.setProperty('--n', n); s.style.setProperty('--akhir', (n * 100 / Math.max(n - 1, 1)) + '%');
      el.appendChild(s);
    });
    el.classList.add('nx-siap');
  }
  function perKata(el, kelas, jeda, mulai) {
    if (!el) return;
    var kata = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    kata.forEach(function (k, i) {
      var s = document.createElement('span');
      s.className = kelas; s.textContent = k;
      s.style.setProperty('--i', i); s.style.setProperty('--d', (mulai + i * jeda) + 'ms');
      el.appendChild(s);
      if (i < kata.length - 1) el.appendChild(document.createTextNode(' '));
    });
    el.classList.add('nx-siap');
  }
  var q = function (s) { return document.querySelector(s); };
  if ($('judulRuang')) perHuruf($('judulRuang'));
  // Jeda per kata kecil supaya seluruh teks masuk dalam sekitar 300 ms (bahasa gerak The Grotto).
  perKata($('judul'), 'nx-judul-kata', 50, 60);
  perKata(q('.studio-lead, .hero .lead'), 'nx-kata', 12, 160);
  perKata(q('body > header h1'), 'nx-kata', 45, 40);
  perKata(q('body > header p'), 'nx-kata', 12, 140);

  /* ---------- muncul saat discroll ---------- */
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    var n = 0;
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target, d = Math.min(n++ * Number(el.getAttribute('data-nx-jeda') || 0), 300);
      io.unobserve(el);
      el.style.setProperty('--d', d + 'ms');
      el.classList.add('nx-tampak');
      // Lepas transisi masuk supaya efek hover setelahnya tidak ikut tertunda.
      setTimeout(function () { el.classList.remove('nx-muncul'); el.style.removeProperty('--d'); }, d + 600);
    });
  }, { rootMargin: '0px 0px -6% 0px' });

  document.querySelectorAll('main > section h2').forEach(function (h) {
    perKata(h, 'nx-k', 40, 0);
    h.classList.add('nx-judul');
    io.observe(h);
  });
  [
    ['.wrap .panel', '', 0],
    ['.alur-copy', 'nx-kiri', 0],
    ['.alur-video', 'nx-kanan', 0],
    ['.tema-kartu', 'nx-zoom', 60],
    ['.tim-grid > li', '', 40],
    ['.isi > div', '', 50],
    ['.biaya tbody tr', '', 50],
    ['.biaya .note', '', 0],
    ['.faq-list > details', '', 50],
    ['.footer', '', 0],
    ['main > article', 'nx-zoom', 40]
  ].forEach(function (g) {
    document.querySelectorAll(g[0]).forEach(function (el) {
      el.classList.add('nx-muncul');
      if (g[1]) el.classList.add(g[1]);
      if (g[2]) el.setAttribute('data-nx-jeda', g[2]);
      io.observe(el);
    });
  });
})();
