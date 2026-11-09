/* Nexaoffice: menu, simulasi kerja agen di hero (demo, bukan AI), kantor 3D sematan, tab, video alur.
   Perintah asli ke agen ada di menu User Interface (/studio.html), bukan di halaman ini. */
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

  /* ---------- hero: simulasi kerja agen (demo, bukan AI asli) ---------- */
  var SKENARIO = [
    { cmd: 'bikin carousel 5 slide soal AI untuk laporan kantor', lead: 'membagi tugas ke divisi Konten', hasil: 'Carousel menunggu persetujuanmu', tombol: 'Setujui',
      agen: [['R.1', 'Raka', 'Riset sumber'], ['R.2', 'Nara', 'Sudut dan hook'], ['P.1', 'Dika', 'Naskah'], ['D.1', 'Sari', 'Desain carousel'], ['Q.1', 'Tara', 'Catatan mutu']] },
    { cmd: 'buatkan web absensi karyawan dengan login', lead: 'membagi tugas ke divisi Build App', hasil: 'Paket rilis menunggu izinmu', tombol: 'Izinkan rilis',
      agen: [['T.1', 'Arga', 'PRD dan arsitektur'], ['T.2', 'Rani', 'Desain UI'], ['T.3', 'Fajar', 'Menulis kode'], ['T.4', 'Tio', 'Uji di HP dan laptop'], ['T.5', 'Damar', 'Audit keamanan']] },
    { cmd: 'video 30 detik: cara pakai AI untuk rangkum rapat', lead: 'membagi tugas ke divisi Konten (video)', hasil: 'Rencana video menunggu persetujuanmu', tombol: 'Setujui',
      agen: [['P.1', 'Dika', 'Naskah video'], ['P.2', 'Vino', 'Uji hook'], ['E.1', 'Edo', 'Arahan edit'], ['E.2', 'Bima', 'Rencana Remotion'], ['E.3', 'Fira', 'Prompt Google Flow']] }
  ];
  var LBL = { wait: 'Menunggu', run: 'Bekerja', done: 'Selesai' };
  var sim = $('sim'), simCmd = $('simCmd'), simCmdBox = simCmd && simCmd.parentNode, simLeadTxt = $('simLeadTxt'), simAgen = $('simAgen'), simHasil = $('simHasil'), simHasilTxt = $('simHasilTxt');
  var gerakDiam = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (sim && !gerakDiam) {
    var jeda = false, terlihat = true, langkah = [], idx = 0, timer = null;
    var simBtn = document.createElement('button');
    simBtn.type = 'button'; simBtn.className = 'sim-jeda'; simBtn.id = 'simJeda'; simBtn.setAttribute('aria-pressed', 'false'); simBtn.textContent = 'Jeda simulasi';
    sim.querySelector('.sim-bar').appendChild(simBtn);
    simBtn.addEventListener('click', function () { jeda = !jeda; simBtn.setAttribute('aria-pressed', String(jeda)); simBtn.textContent = jeda ? 'Lanjut simulasi' : 'Jeda simulasi'; if (!jeda) jalan(); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { terlihat = es[0].isIntersecting; if (terlihat) jalan(); }, { threshold: 0.2 }).observe(sim);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) jalan(); });

    function baris(a) {
      return '<li data-s="wait" data-id="' + a[0] + '"><img src="assets/agents/' + a[0] + '.png" alt="" width="180" height="220"><b>' + a[1] + '</b><span class="sim-job">' + a[2] + '</span><span class="sim-bar-p"><i></i></span><em>' + LBL.wait + '</em></li>';
    }
    function setAgen(li, s, p) {
      li.setAttribute('data-s', s); li.querySelector('em').textContent = LBL[s];
      li.querySelector('i').style.setProperty('--p', String(p));
    }
    function susun(sk) {
      var L = [];
      L.push([0, function () { simCmd.textContent = ''; simCmdBox.setAttribute('data-ketik', ''); simLeadTxt.textContent = 'menunggu perintah'; simAgen.innerHTML = sk.agen.map(baris).join(''); simHasil.setAttribute('data-on', '0'); simHasilTxt.textContent = 'Belum ada hasil'; simHasil.querySelector('.sim-setujui').textContent = sk.tombol; }]);
      for (var c = 1; c <= sk.cmd.length; c++) (function (n) { L.push([45, function () { simCmd.textContent = sk.cmd.slice(0, n); }]); })(c);
      L.push([500, function () { simCmdBox.removeAttribute('data-ketik'); simLeadTxt.textContent = 'membaca perintah'; }]);
      L.push([900, function () { simLeadTxt.textContent = sk.lead; }]);
      sk.agen.forEach(function (a, k) {
        L.push([k ? 350 : 700, function () { setAgen(simAgen.children[k], 'run', 0.15); }]);
        L.push([450, function () { setAgen(simAgen.children[k], 'run', 0.5); }]);
        L.push([450, function () { setAgen(simAgen.children[k], 'run', 0.85); }]);
        L.push([350, function () { setAgen(simAgen.children[k], 'done', 1); }]);
      });
      L.push([500, function () { simHasil.setAttribute('data-on', '1'); simHasilTxt.textContent = sk.hasil; simLeadTxt.textContent = 'melapor ke kamu'; }]);
      L.push([3200, function () { idx = (idx + 1) % SKENARIO.length; langkah = susun(SKENARIO[idx]); }]);
      return L;
    }
    function jalan() {
      if (timer || jeda || !terlihat || document.hidden) return;
      if (!langkah.length) langkah = susun(SKENARIO[idx]);
      var l = langkah.shift();
      timer = setTimeout(function () { timer = null; l[1](); jalan(); }, l[0]);
    }
    langkah = susun(SKENARIO[0]);
    jalan();
  }

  /* ---------- kantor 3D sematan ---------- */
  var kIframe = $('kantorIframe');
  if (kIframe && window.NexaKantor) {
    var kantor = window.NexaKantor(kIframe);
    window.NexaKantor.pasangKontrol(kantor);
    var penuh = $('kantorPenuh'), frame = $('kantorFrame');
    if (penuh && frame && frame.requestFullscreen) penuh.addEventListener('click', function () { if (document.fullscreenElement) document.exitFullscreen(); else frame.requestFullscreen().catch(function () {}); });
    else if (penuh) penuh.hidden = true;
  }
})();
