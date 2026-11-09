/* Nexaoffice: kendali Kantor 3D sematan dari halaman induk (situs dan User Interface).
   Kantor jalan di iframe /office/ruang.html (asal yang sama), dikendalikan lewat window.zunoOffice di dalamnya.
   Pakai: var k = NexaKantor(iframe); k.tema('langit'); k.dalam(); k.kerja(['R.1']); k.santai(['R.1']); k.fokus('R.1') */
(function () {
  'use strict';
  window.NexaKantor = function (iframe) {
    var antre = [], office = null;
    function cek() {
      try { office = iframe.contentWindow && iframe.contentWindow.zunoOffice; } catch (e) { office = null; }
      if (office && office.demo) { var a = antre; antre = []; a.forEach(function (fn) { try { fn(office); } catch (e) {} }); return true; }
      return false;
    }
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
    iframe.addEventListener('load', jeda);
    (function tunggu() { if (!cek()) setTimeout(tunggu, 250); })();
    function lakukan(fn) { if (office) { try { fn(office); } catch (e) {} } else antre.push(fn); }
    return {
      get siap() { return !!office; },
      tema: function (id) { lakukan(function (o) { o.themes.apply(id); }); },
      temaAktif: function () { try { return office ? office.state.theme : null; } catch (e) { return null; } },
      luar: function () { lakukan(function (o) { o.exterior(); }); },
      dalam: function () { lakukan(function (o) { o.interior(); }); },
      demo: function (jalan) { lakukan(function (o) { if (jalan) o.demo.start(false); else o.demo.pause(); }); },
      kerja: function (ids) { lakukan(function (o) { if (!o.demo.running) o.demo.start(false); ids.forEach(function (id) { o.demo.setWork(id, true); }); }); },
      santai: function (ids) { lakukan(function (o) { if (!o.demo.running) o.demo.start(false); ids.forEach(function (id) { o.demo.setWork(id, false); }); }); },
      fokus: function (id) { lakukan(function (o) { o.selectAgent(id); }); },
      lantai: function (n) { lakukan(function (o) { o.floor(String(n)); }); }
    };
  };

  /* Tombol tema [data-tema] dan tampilan [data-lihat] di halaman induk. */
  window.NexaKantor.pasangKontrol = function (kantor) {
    var tekan = function (sel, btn) { document.querySelectorAll(sel).forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); }); };
    document.querySelectorAll('[data-tema]').forEach(function (b) { b.addEventListener('click', function () { tekan('[data-tema]', b); kantor.tema(b.getAttribute('data-tema')); }); });
    document.querySelectorAll('[data-lihat]').forEach(function (b) { b.addEventListener('click', function () { tekan('[data-lihat]', b); if (b.getAttribute('data-lihat') === 'luar') kantor.luar(); else kantor.dalam(); }); });
    (function sinkronTema() {
      var id = kantor.temaAktif();
      if (!id) return setTimeout(sinkronTema, 400);
      var b = document.querySelector('[data-tema="' + id + '"]'); if (b) tekan('[data-tema]', b);
    })();
  };
})();
