/* Nexaoffice: kendali Kantor 3D sematan dari halaman induk (situs dan Workspace).
   Kantor jalan di iframe (asal yang sama): /office/ruang.html (Menara Senja, Griya Langit; window.zunoOffice)
   atau /nexa.html (tema ketiga The Grotto, scene sendiri; window.nexaStudio). Ganti ke/dari The Grotto = ganti src iframe.
   Pakai: var k = NexaKantor(iframe); k.tema('grotto'); k.dalam(); k.kerja(['R.1']); k.santai(['R.1']); k.fokus('R.1') */
(function () {
  'use strict';
  var KUNCI = 'nexa-office-theme';
  function simpanTema(id) { try { localStorage.setItem(KUNCI, id); } catch (e) {} }
  function temaTersimpan() { try { return localStorage.getItem(KUNCI); } catch (e) { return null; } }

  window.NexaKantor = function (iframe) {
    var antre = [], office = null, nexa = null, sibuk = {};
    // Alamat kantor bawaan halaman ini (dengan parameter sematannya), dipakai untuk kembali dari The Grotto.
    var asal = iframe.getAttribute('src') || iframe.getAttribute('data-src') || '/office/ruang.html';
    var asli = /[?&]asli=1(&|$)/.test(asal); // Workspace: agen mengikuti status kerja asli
    function alamatGrotto() {
      var u = new URL(asal, location.href), q = new URLSearchParams(u.search);
      q.set('sematan', '1'); q.set('theme', 'grotto');
      return '/nexa.html?' + q.toString();
    }
    function alamatKantor(id) {
      var u = new URL(asal, location.href);
      if (id) u.searchParams.set('theme', id);
      return u.pathname + u.search;
    }
    function cek() {
      var w = null;
      try { w = iframe.contentWindow; } catch (e) {}
      try { office = w && w.zunoOffice && w.zunoOffice.demo ? w.zunoOffice : null; } catch (e) { office = null; }
      try { nexa = w && w.nexaStudio && w.nexaStudio.animation ? w.nexaStudio : null; } catch (e) { nexa = null; }
      if (office || nexa) {
        // The Grotto baru dimuat: samakan gerak agen dengan status kerja yang sudah tercatat (siaga = diam).
        if (nexa && asli) { try { gerakGrotto(nexa); } catch (e) {} }
        var a = antre; antre = []; a.forEach(function (fn) { try { fn(); } catch (e) {} }); return true;
      }
      return false;
    }
    var menunggu = false;
    function tunggu() { if (menunggu) return; menunggu = true; (function ulang() { if (cek()) { menunggu = false; return; } setTimeout(ulang, 250); })(); }
    // Muat kantor saat minimal 20% terlihat (data-src), dan jeda render saat tidak terlihat:
    // iframe asal sama berbagi thread dengan halaman, jadi kantor yang tidak dilihat tidak boleh memakan waktu.
    var terlihat = true;
    function jeda() { try { if (iframe.contentWindow && iframe.contentWindow.nexaJeda) iframe.contentWindow.nexaJeda(!terlihat || document.hidden); } catch (e) {} }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          terlihat = e.isIntersecting && e.intersectionRatio >= 0.2;
          if (terlihat && !iframe.getAttribute('src') && iframe.getAttribute('data-src')) iframe.setAttribute('src', iframe.getAttribute('data-src'));
          jeda();
        });
      }, { threshold: [0, 0.2, 0.5] }).observe(iframe);
    } else if (iframe.getAttribute('data-src') && !iframe.getAttribute('src')) iframe.setAttribute('src', iframe.getAttribute('data-src'));
    document.addEventListener('visibilitychange', jeda);
    // Tiap halaman baru di iframe (ganti tema ke/dari The Grotto) dicek ulang.
    iframe.addEventListener('load', function () { office = null; nexa = null; jeda(); tunggu(); });
    tunggu();
    // fnKantor untuk /office/ruang.html, fnGrotto (opsional) untuk The Grotto.
    function lakukan(fnKantor, fnGrotto) {
      var jalan = function () { if (office) fnKantor(office); else if (nexa && fnGrotto) fnGrotto(nexa); };
      if (office || nexa) { try { jalan(); } catch (e) {} } else antre.push(jalan);
    }
    function pindah(src) { office = null; nexa = null; iframe.setAttribute('src', src); tunggu(); }
    // The Grotto belum punya kendali per agen: agen bergerak selama ada agen yang bekerja, diam saat semua siaga.
    function gerakGrotto(n) { var ada = Object.keys(sibuk).some(function (k) { return sibuk[k]; }); if (ada && !n.animation.running) n.animation.start(); else if (!ada && n.animation.running) n.animation.pause(); }
    return {
      get siap() { return !!(office || nexa); },
      get grotto() { return !!nexa; },
      tema: function (id) {
        if (id === 'grotto') { if (nexa) return; simpanTema('grotto'); pindah(alamatGrotto()); return; }
        if (nexa || (!office && temaTersimpan() === 'grotto')) { simpanTema(id); pindah(alamatKantor(id)); return; }
        lakukan(function (o) { o.themes.apply(id); });
      },
      temaAktif: function () { try { return nexa ? 'grotto' : office ? office.state.theme : null; } catch (e) { return null; } },
      luar: function () { lakukan(function (o) { o.exterior(); }, function (n) { n.roof(true); }); },
      dalam: function () { lakukan(function (o) { o.interior(); }, function (n) { n.roof(false); }); },
      demo: function (jalan) { lakukan(function (o) { if (jalan) o.demo.start(false); else o.demo.pause(); }, function (n) { if (jalan) n.animation.start(); else n.animation.pause(); }); },
      kerja: function (ids) { ids.forEach(function (id) { sibuk[id] = true; }); lakukan(function (o) { if (!o.demo.running) o.demo.start(false); ids.forEach(function (id) { o.demo.setWork(id, true); }); }, gerakGrotto); },
      santai: function (ids) { ids.forEach(function (id) { sibuk[id] = false; }); lakukan(function (o) { if (!o.demo.running) o.demo.start(false); ids.forEach(function (id) { o.demo.setWork(id, false); }); }, gerakGrotto); },
      fokus: function (id) { lakukan(function (o) { o.selectAgent(id); }); },
      lantai: function (n) { lakukan(function (o) { o.floor(String(n)); }); }
    };
  };

  /* Tombol tema [data-tema] dan tampilan [data-lihat] di halaman induk. */
  window.NexaKantor.pasangKontrol = function (kantor) {
    var tekan = function (sel, btn) { document.querySelectorAll(sel).forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); }); };
    var tandaiTema = function (id) { document.querySelectorAll('[data-tema]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-tema') === id)); }); document.documentElement.setAttribute('data-kantor-tema', id); };
    document.querySelectorAll('[data-tema]').forEach(function (b) { b.addEventListener('click', function () { var id = b.getAttribute('data-tema'); tandaiTema(id); kantor.tema(id); }); });
    document.querySelectorAll('[data-lihat]').forEach(function (b) { b.addEventListener('click', function () { tekan('[data-lihat]', b); if (b.getAttribute('data-lihat') === 'luar') kantor.luar(); else kantor.dalam(); }); });
    (function sinkronTema() {
      var id = kantor.temaAktif();
      if (!id) return setTimeout(sinkronTema, 400);
      tandaiTema(id);
    })();
  };
})();
