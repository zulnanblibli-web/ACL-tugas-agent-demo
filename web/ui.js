/* Nexaoffice Workspace (/studio.html): kotak perintah di atas + Kantor 3D yang ikut status kerja asli.
   1. Perintah -> Lead (ZUNO) membagi tugas lewat window.claude (live.js), jadi ikut menu Pengaturan AI
      (server, API key lokal, atau VPS).
   2. Perintah langsung dijalankan di ruang kerja di bawah (#cmd + #run untuk Konten, #breq + #brun untuk Build App).
   3. Panel Proses (#tracks / #btracks) dibaca terus: agen pada tahap yang JALAN pergi ke meja dan bekerja di kantor 3D,
      agen lain istirahat. Ini status pekerjaan asli, bukan demo. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var AGEN = {
    'L.0': ['ZUNO', 'Lead, membagi tugas'], 'L.1': ['Lia', 'Laporan ke kamu'],
    'R.1': ['Raka', 'Riset tren dan sumber'], 'R.2': ['Nara', 'Strategi dan sudut konten'],
    'P.1': ['Dika', 'Naskah'], 'P.2': ['Vino', 'Hook dan retensi video'],
    'D.1': ['Sari', 'Desain visual dan carousel'], 'E.1': ['Edo', 'Arahan editing'],
    'E.2': ['Bima', 'Rencana Remotion'], 'E.3': ['Fira', 'Prompt Google Flow'],
    'Q.1': ['Tara', 'Cek fakta dan suara brand'], 'Q.2': ['Nita', 'Cek format'],
    'M.1': ['Maya', 'Caption dan antrian posting'],
    'T.1': ['Arga', 'PRD dan arsitektur'], 'T.2': ['Rani', 'Desain UI/UX'],
    'T.3': ['Fajar', 'Menulis kode'], 'T.4': ['Tio', 'Uji dan paket rilis'], 'T.5': ['Damar', 'Audit bug dan keamanan']
  };
  var SEMUA = Object.keys(AGEN);
  var DIVISI = {
    konten: { nama: 'Divisi Konten', tim: ['L.0', 'R.1', 'R.2', 'P.1', 'D.1', 'Q.1', 'M.1'] },
    build: { nama: 'Divisi Build App', tim: ['L.0', 'T.1', 'T.2', 'T.3', 'T.4', 'T.5'] }
  };
  var POLA_BUILD = /\b(aplikasi|app|web ?app|website|situs|dashboard|sistem|login|absensi|database|crud|landing ?page|toko online|kasir|form(ulir)?)\b/i;

  /* ---------- Kantor 3D ---------- */
  var iframe = $('kantorIframe'), kantor = iframe && window.NexaKantor ? window.NexaKantor(iframe) : null;
  if (kantor) window.NexaKantor.pasangKontrol(kantor);

  function agenUntuk(nama) {
    nama = String(nama || '').trim();
    if (/^Lead/i.test(nama)) return ['L.0', 'L.1'];
    if (/^Riset/i.test(nama)) return ['R.1', 'R.2'];
    if (/^Produksi/i.test(nama)) return ['P.1', 'P.2'];
    if (/^Desain/i.test(nama)) return ['D.1'];
    if (/^Editing/i.test(nama)) return ['E.1', 'E.2', 'E.3'];
    if (/^Mutu/i.test(nama)) return ['Q.1', 'Q.2'];
    if (/^Marketing/i.test(nama)) return ['M.1'];
    var m = /^T\.(\d)/.exec(nama); if (m) return ['T.' + m[1]];
    if (/^Tinjauan/i.test(nama)) return ['T.4'];
    return [];
  }
  function isBuild() { var b = $('wsBuild'); return b && !b.classList.contains('hidden'); }
  function berjalan() { return ['stop', 'bstop'].some(function (id) { var b = $(id); return b && !b.disabled; }); }
  function tahap() {
    var box = $(isBuild() ? 'btracks' : 'tracks');
    return box ? Array.prototype.map.call(box.querySelectorAll('.track'), function (r) {
      return { nama: ((r.querySelector('.tname') || {}).textContent || '').trim(), s: r.getAttribute('data-s') || 'wait' };
    }) : [];
  }

  var keadaan = {}, tadiJalan = false, aktifLalu = '';
  window.NexaUI = { keadaan: keadaan, agenUntuk: agenUntuk };
  function setAgen(id, kerja) {
    if (keadaan[id] === kerja || !kantor) return;
    keadaan[id] = kerja;
    if (kerja) kantor.kerja([id]); else kantor.santai([id]);
  }
  function sinkron() {
    var jalan = berjalan(), langkah = tahap();
    var aktif = [], namaAktif = [];
    langkah.forEach(function (t) { if (t.s === 'run') { namaAktif.push(t.nama); agenUntuk(t.nama).forEach(function (id) { if (aktif.indexOf(id) < 0) aktif.push(id); }); } });
    var out = $('uiAktif');
    if (jalan || aktif.length) {
      SEMUA.forEach(function (id) { setAgen(id, aktif.indexOf(id) > -1); });
      var sig = aktif.join(',');
      if (sig && sig !== aktifLalu && kantor && $('uiIkuti') && $('uiIkuti').checked) {
        var baru = aktif.filter(function (id) { return aktifLalu.split(',').indexOf(id) < 0; })[0] || aktif[0];
        kantor.fokus(baru);
      }
      aktifLalu = sig;
      if (out) out.innerHTML = aktif.length
        ? 'Sedang bekerja: ' + aktif.map(function (id) { return '<b>' + esc(AGEN[id][0]) + '</b>'; }).join(', ') + ' (' + esc(namaAktif.join(', ')) + ')'
        : 'Tim bekerja. Menunggu tahap berikutnya.';
    } else if (tadiJalan) {
      SEMUA.forEach(function (id) { setAgen(id, false); });
      aktifLalu = '';
      if (out) out.textContent = 'Tahap selesai atau menunggu persetujuanmu. Agen istirahat sebentar.';
    }
    tadiJalan = jalan || aktif.length > 0;
  }
  var tunda = null;
  function jadwal() { clearTimeout(tunda); tunda = setTimeout(sinkron, 250); }
  document.addEventListener('DOMContentLoaded', function () {
    var mo = new MutationObserver(jadwal);
    ['tracks', 'btracks', 'wsBuild', 'stop', 'bstop'].forEach(function (id) { var el = $(id); if (el) mo.observe(el, { childList: true, subtree: true, attributes: true, characterData: true }); });
    sinkron();
  });

  /* ---------- Kotak perintah ---------- */
  var form = $('uiKonsol'), out = $('uiDispatch'), kirim = $('uiKirim');
  function divisiDipilih(teks) {
    var v = (form.querySelector('input[name="uiDivisi"]:checked') || {}).value || 'otomatis';
    if (v !== 'otomatis') return v;
    return POLA_BUILD.test(teks) ? 'build' : 'konten';
  }
  function tampilkan(rencana, catatan) {
    var d = DIVISI[rencana.divisi] || DIVISI.konten;
    var li = (rencana.tugas || []).filter(function (t) { return AGEN[t.id]; }).map(function (t) {
      return '<li><img src="/assets/agents/' + esc(t.id) + '.png" alt="" width="36" height="42"><div><b>' + esc(AGEN[t.id][0]) + '</b> <span>' + esc(t.tugas || AGEN[t.id][1]) + '</span></div></li>';
    }).join('');
    out.innerHTML = '<p class="ringkas">' + esc(d.nama) + ': ' + esc(rencana.ringkasan || '') + '</p><ul class="tugas">' + li + '</ul>' + (catatan ? '<p class="catatan">' + catatan + '</p>' : '');
  }
  function rencanaLokal(teks, divisi) {
    return { divisi: divisi, ringkasan: teks.length > 90 ? teks.slice(0, 88) + '…' : teks, tugas: DIVISI[divisi].tim.map(function (id) { return { id: id }; }) };
  }
  async function tanyaLead(teks, divisi) {
    var daftar = SEMUA.map(function (id) { return id + ' ' + AGEN[id][0] + ' (' + AGEN[id][1] + ')'; }).join('; ');
    var prompt = 'Kamu ZUNO, Lead di kantor AI Nexaoffice. Bagi perintah pemilik ke agen yang tepat.\n' +
      'Agen: ' + daftar + '.\nDivisi Konten: ' + DIVISI.konten.tim.concat(['L.1', 'P.2', 'E.1', 'E.2', 'E.3', 'Q.2']).join(', ') + '. Divisi Build App: ' + DIVISI.build.tim.join(', ') + '.\n' +
      'Divisi yang disarankan: ' + divisi + ' (ganti hanya bila perintah jelas milik divisi lain).\n' +
      'PERINTAH: ' + teks + '\n' +
      'Balas HANYA JSON tanpa teks lain: {"divisi":"konten|build","ringkasan":"satu kalimat apa yang akan dikerjakan tim","tugas":[{"id":"R.1","tugas":"tugas singkat maks 8 kata"}]} dengan 3 sampai 8 tugas, urut sesuai alur. Untuk video, Bima (E.2) dan Fira (E.3) ikut bekerja. Jangan mengarang angka, hasil, atau janji.';
    var sample = await window.claude.use('sample');
    var h = await sample(prompt, { modelTier: 'quick', effort: 'low' });
    var m = String(h.text || '').match(/\{[\s\S]*\}/);
    if (!m) throw { code: 'ai', message: 'Lead tidak membalas rencana.' };
    var j = JSON.parse(m[0]);
    if (j.divisi !== 'konten' && j.divisi !== 'build') j.divisi = divisi;
    return j;
  }
  function serahkan(teks, divisi) {
    var mulai = Date.now();
    (function tunggu() {
      var tombol = divisi === 'build' ? $('brun') : $('run');
      var isian = divisi === 'build' ? $('breq') : $('cmd');
      if (divisi === 'build' && $('wsB') && !isBuild()) $('wsB').click();
      if (divisi !== 'build' && $('wsK') && isBuild()) $('wsK').click();
      if (isian && isian.value !== teks) { isian.value = teks; isian.dispatchEvent(new Event('input', { bubbles: true })); }
      if (!tombol || !isian || tombol.disabled) {
        if (Date.now() - mulai < 15000) return setTimeout(tunggu, 200);
        out.insertAdjacentHTML('beforeend', '<p class="galat">Ruang kerja masih sibuk. Perintah sudah diisi di bawah; jalankan setelah proses sekarang selesai.</p>');
        return;
      }
      tombol.click();
    })();
  }
  var sedang = false;
  async function jalankan() {
    var teks = $('uiPerintah').value.trim();
    if (!teks) { $('uiPerintah').focus(); return; }
    if (sedang) return;
    var divisi = divisiDipilih(teks);
    if (!window.ZunoKey || !window.ZunoKey.get()) {
      tampilkan(rencanaLokal(teks, divisi), 'Pratinjau pembagian tugas, belum memakai AI. Isi kunci akses di Pengaturan AI untuk menjalankannya.');
      if (window.ZunoHUD) window.ZunoHUD.askKey();
      return;
    }
    sedang = true;
    kirim.disabled = true; kirim.setAttribute('aria-busy', 'true'); kirim.textContent = 'Lead membagi tugas…';
    out.innerHTML = '<p class="catatan">Perintah diterima. ZUNO sedang membagi tugas.</p>';
    if (kantor) { setAgen('L.0', true); if ($('uiIkuti') && $('uiIkuti').checked) kantor.fokus('L.0'); }
    var rencana, catatan;
    try {
      rencana = await tanyaLead(teks, divisi);
      catatan = 'Tim mulai bekerja. Lihat agennya di kantor, detail dan persetujuan ada di ruang kerja di bawah.';
    } catch (e) {
      if (e && e.code === 'not_granted') {
        out.innerHTML = '<p class="galat">Kunci akses salah atau belum disetel di server. Periksa di Pengaturan AI.</p>';
        sedang = false; kirim.disabled = false; kirim.removeAttribute('aria-busy'); kirim.textContent = 'Kirim ke tim';
        return;
      }
      rencana = rencanaLokal(teks, divisi);
      catatan = 'Lead belum bisa dihubungi' + (e && e.message ? ' (' + esc(e.message) + ')' : '') + '. Perintah tetap dijalankan di ruang kerja.';
    }
    tampilkan(rencana, catatan);
    serahkan(teks, rencana.divisi);
    sedang = false; kirim.disabled = false; kirim.removeAttribute('aria-busy'); kirim.textContent = 'Kirim ke tim';
  }
  if (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); jalankan(); });
    $('uiPerintah').addEventListener('keydown', function (e) { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); jalankan(); } });
  }
})();
