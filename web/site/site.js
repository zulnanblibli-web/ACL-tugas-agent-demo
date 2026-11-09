/* Nexaoffice: menu, hero kantor 3D (simulasi gerak agen), pilihan tema, tab, video alur.
   Perintah asli ke agen ada di menu Workspace (/studio.html), bukan di halaman ini. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- menu HP ---------- */
  var menuBtn = $('menuBtn'), links = $('navLinks');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var buka = links.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(buka));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---------- tab cara kerja ---------- */
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  function pilihTab(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      $(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { pilihTab(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      pilihTab(n); n.focus();
    });
  });

  /* ---------- video alur (berhenti di luar layar, ada tombol jeda) ---------- */
  var vid = $('alurVideo'), vbtn = $('videoBtn');
  var diam = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dijeda = diam;
  function setTombol() { var main = !vid.paused; vbtn.textContent = main ? 'Jeda animasi' : 'Putar animasi'; vbtn.setAttribute('aria-pressed', String(main)); }
  if (vid && vbtn) {
    vbtn.addEventListener('click', function () {
      if (vid.paused) { dijeda = false; vid.preload = 'auto'; vid.play().then(setTombol, setTombol); setTombol(); } else { dijeda = true; vid.pause(); setTombol(); }
    });
    ['play', 'playing', 'pause'].forEach(function (ev) { vid.addEventListener(ev, setTombol); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting && !dijeda) { vid.preload = 'auto'; vid.play().catch(function () {}); }
          else if (!e.isIntersecting && !vid.paused) vid.pause();
        });
      }, { threshold: 0.4 }).observe(vid);
    }
  }

  /* ---------- hero: kantor 3D asli (iframe /office/ruang.html), zoom ke lantai studio, agen bergerak (demo) ---------- */
  var kIframe = $('kantorIframe');
  if (kIframe && window.NexaKantor) {
    var kantor = window.NexaKantor(kIframe);
    window.NexaKantor.pasangKontrol(kantor);
    var stage = $('heroStage'), jelajah = $('heroJelajah');
    // Kantor di hero hanya tontonan sampai pemakai memilih menjelajah, supaya scroll halaman (terutama di HP) tidak tertahan.
    if (jelajah && stage) jelajah.addEventListener('click', function () {
      var on = stage.getAttribute('data-jelajah') !== '1';
      stage.setAttribute('data-jelajah', on ? '1' : '0');
      kIframe.tabIndex = on ? 0 : -1;
      jelajah.setAttribute('aria-pressed', String(on));
      jelajah.textContent = on ? 'Selesai menjelajah' : 'Jelajahi kantor';
      if (on) kIframe.focus();
    });
    // Pilihan tema: pakai di kantor hero lalu tunjukkan hasilnya.
    document.querySelectorAll('.tema-kartu [data-tema]').forEach(function (b) {
      b.addEventListener('click', function () {
        var diam = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        stage.scrollIntoView({ behavior: diam ? 'auto' : 'smooth', block: 'center' });
      });
    });
    var penuh = $('kantorPenuh');
    if (penuh && stage && stage.requestFullscreen) penuh.addEventListener('click', function () { if (document.fullscreenElement) document.exitFullscreen(); else stage.requestFullscreen().catch(function () {}); });
    else if (penuh) penuh.hidden = true;
  }
})();
