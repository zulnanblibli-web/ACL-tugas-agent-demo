/* Nexaoffice: menu, tab, video alur, dan konsol perintah.
   Konsol: tanpa kunci akses -> pratinjau pembagian tugas (tanpa AI, ditandai jelas).
   Dengan kunci akses -> Lead (lewat /api/ai) membagi tugas, lalu perintah diteruskan ke /studio.html
   dan langsung dijalankan di ruang kerja. Kunci akses disimpan di browser ini (sama dengan ruang kerja). */
(function () {
  'use strict';
  var KEY_STORE = 'zuno-akses';
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

  /* ---------- konsol perintah ---------- */
  var AGEN = {
    'L.0': ['ZUNO', 'Lead, membagi tugas'], 'L.1': ['Lia', 'Laporan ke kamu'],
    'R.1': ['Raka', 'Riset tren dan sumber'], 'R.2': ['Nara', 'Strategi dan sudut konten'],
    'P.1': ['Dika', 'Naskah'], 'P.2': ['Vino', 'Hook dan retensi video'],
    'D.1': ['Sari', 'Desain visual dan carousel'], 'E.1': ['Edo', 'Arahan editing'],
    'Q.1': ['Tara', 'Cek fakta dan suara brand'], 'Q.2': ['Nita', 'Cek format'],
    'M.1': ['Maya', 'Caption dan antrian posting'],
    'T.1': ['Arga', 'PRD dan arsitektur'], 'T.2': ['Rani', 'Desain UI/UX'],
    'T.3': ['Fajar', 'Menulis kode'], 'T.4': ['Tio', 'Uji dan paket rilis']
  };
  var DIVISI = {
    konten: { nama: 'Divisi Konten', tim: ['L.0', 'R.1', 'R.2', 'P.1', 'D.1', 'Q.1', 'M.1'] },
    build: { nama: 'Divisi Build App', tim: ['L.0', 'T.1', 'T.2', 'T.3', 'T.4'] }
  };
  var POLA_BUILD = /\b(aplikasi|app|web ?app|website|situs|dashboard|sistem|login|absensi|database|crud|landing ?page|toko online|kasir|form(ulir)?)\b/i;

  var form = $('konsol'), out = $('dispatch'), kirim = $('kirim');
  var kunciBox = $('kunciBox'), kunciInput = $('kunciInput');
  var getKey = function () { try { return localStorage.getItem(KEY_STORE) || ''; } catch (e) { return ''; } };
  var setKey = function (v) { try { localStorage.setItem(KEY_STORE, v); } catch (e) {} };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  function divisiDipilih(teks) {
    var v = (form.querySelector('input[name="divisi"]:checked') || {}).value || 'otomatis';
    if (v !== 'otomatis') return v;
    return POLA_BUILD.test(teks) ? 'build' : 'konten';
  }

  function tampilkan(rencana, catatan) {
    var d = DIVISI[rencana.divisi] || DIVISI.konten;
    var li = (rencana.tugas || []).filter(function (t) { return AGEN[t.id]; }).map(function (t, i) {
      return '<li style="--i:' + i + '"><img src="assets/agents/' + esc(t.id) + '.png" alt="" width="40" height="48"><div><b>' + esc(AGEN[t.id][0]) + '</b> <span>' + esc(t.tugas || AGEN[t.id][1]) + '</span></div></li>';
    }).join('');
    out.innerHTML = '<p class="ringkas">' + esc(d.nama) + ': ' + esc(rencana.ringkasan || '') + '</p><ul class="tugas">' + li + '</ul>' + (catatan ? '<p class="catatan">' + catatan + '</p>' : '');
  }

  function rencanaLokal(teks, divisi) {
    var d = DIVISI[divisi];
    return { divisi: divisi, ringkasan: teks.length > 90 ? teks.slice(0, 88) + '…' : teks, tugas: d.tim.map(function (id) { return { id: id }; }) };
  }

  async function tanyaLead(teks, divisi, key, signal) {
    var daftar = Object.keys(AGEN).map(function (id) { return id + ' ' + AGEN[id][0] + ' (' + AGEN[id][1] + ')'; }).join('; ');
    var prompt = 'Kamu ZUNO, Lead di kantor AI Nexaoffice. Bagi perintah pemilik ke agen yang tepat.\n' +
      'Agen: ' + daftar + '.\nDivisi Konten: ' + DIVISI.konten.tim.concat(['L.1', 'P.2', 'E.1', 'Q.2']).join(', ') + '. Divisi Build App: ' + DIVISI.build.tim.join(', ') + '.\n' +
      'Divisi yang disarankan: ' + divisi + ' (ganti hanya bila perintah jelas milik divisi lain).\n' +
      'PERINTAH: ' + teks + '\n' +
      'Balas HANYA JSON tanpa teks lain: {"divisi":"konten|build","ringkasan":"satu kalimat apa yang akan dikerjakan tim","tugas":[{"id":"R.1","tugas":"tugas singkat maks 8 kata"}]} dengan 3 sampai 7 tugas, urut sesuai alur. Jangan mengarang angka, hasil, atau janji.';
    var r = await fetch('/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-zuno-key': key }, body: JSON.stringify({ input: prompt, tier: 'quick', effort: 'low' }), signal: signal });
    if (r.status === 401 || r.status === 403) throw { code: 'kunci' };
    if (r.status === 503) throw { code: 'belum' };
    if (!r.ok || !r.body) throw { code: 'server', status: r.status };
    var reader = r.body.getReader(), dec = new TextDecoder(), buf = '', teksAI = '';
    for (;;) {
      var c = await reader.read(); if (c.done) break;
      buf += dec.decode(c.value, { stream: true });
      var baris = buf.split('\n'); buf = baris.pop();
      baris.forEach(function (b) {
        if (!b.trim()) return;
        var o; try { o = JSON.parse(b); } catch (e) { return; }
        if (o.t === 'delta') teksAI += o.text;
        else if (o.t === 'error') throw { code: o.code === 'not_granted' || o.code === 'forbidden' ? 'kunci' : 'ai', pesan: o.message };
      });
    }
    var m = teksAI.match(/\{[\s\S]*\}/);
    if (!m) throw { code: 'ai', pesan: 'Lead tidak membalas rencana.' };
    var j = JSON.parse(m[0]);
    if (j.divisi !== 'konten' && j.divisi !== 'build') j.divisi = divisi;
    return j;
  }

  function serahkan(teks, divisi) {
    var q = new URLSearchParams({ perintah: teks, divisi: divisi, jalan: '1' });
    location.href = '/studio.html?' + q.toString() + '#ruangKerja';
  }

  var sedang = null;
  async function jalankan() {
    var teks = $('perintahInput').value.trim();
    if (!teks) { $('perintahInput').focus(); return; }
    var divisi = divisiDipilih(teks), key = getKey();
    if (!key) {
      tampilkan(rencanaLokal(teks, divisi), 'Pratinjau pembagian tugas, belum memakai AI. Isi kunci akses untuk menjalankannya.');
      kunciBox.hidden = false; kunciInput.focus();
      return;
    }
    if (sedang) sedang.abort();
    sedang = new AbortController();
    kirim.disabled = true; kirim.setAttribute('aria-busy', 'true'); kirim.textContent = 'Lead membagi tugas…';
    out.innerHTML = '<p class="catatan">Perintah diterima. ZUNO sedang membagi tugas.</p>';
    try {
      var rencana = await tanyaLead(teks, divisi, key, sedang.signal);
      tampilkan(rencana, 'Membuka ruang kerja, tim mulai bekerja…');
      setTimeout(function () { serahkan(teks, rencana.divisi); }, 1600);
    } catch (e) {
      if (e && e.name === 'AbortError') return;
      if (e && e.code === 'kunci') {
        out.innerHTML = '<p class="galat">Kunci akses salah atau belum disetel di server. Periksa lalu simpan ulang.</p>';
        kunciBox.hidden = false; kunciInput.focus();
      } else if (e && e.code === 'belum') {
        out.innerHTML = '<p class="galat">Server Nexaoffice belum disetel: isi ZUNO_ACCESS_KEY dan API key AI di Vercel.</p>';
      } else {
        tampilkan(rencanaLokal(teks, divisi), 'Lead belum bisa dihubungi' + (e && e.pesan ? ' (' + esc(e.pesan) + ')' : '') + '. Perintah tetap diteruskan ke ruang kerja.');
        setTimeout(function () { serahkan(teks, divisi); }, 2200);
      }
    } finally {
      kirim.disabled = false; kirim.removeAttribute('aria-busy'); kirim.textContent = 'Kirim ke tim';
    }
  }

  if (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); jalankan(); });
    $('perintahInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); jalankan(); }
    });
    $('kunciSimpan').addEventListener('click', function () {
      var v = kunciInput.value.trim();
      if (!v) { kunciInput.focus(); return; }
      setKey(v); kunciInput.value = ''; kunciBox.hidden = true; jalankan();
    });
    kunciInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); $('kunciSimpan').click(); } });
  }
})();
