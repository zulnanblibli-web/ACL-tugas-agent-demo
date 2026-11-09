/* Nexaoffice Workspace (/studio.html): satu tempat kerja.
   Kiri: Kantor 3D. Agen yang tahapnya sedang JALAN pergi ke meja dan bekerja, agen lain santai. Ini status asli
   dari panel tahap (#tracks / #btracks, tersembunyi), bukan demo.
   Kanan: perintah + pilihan format (form ruang kerja asli: #cmd/#run untuk Konten, #breq/#brun untuk Build App),
   lalu "Hasil kerja agen": tulisan tiap agen tampil saat itu juga dari aliran jawaban AI (event 'nexa:ai' dari live.js),
   ikut menu Pengaturan AI (server, API key lokal, atau VPS). */
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

  /* ---------- Kantor 3D ikut status kerja asli ---------- */
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
      return {
        nama: ((r.querySelector('.tname') || {}).textContent || '').trim(),
        aksi: ((r.querySelector('.tact') || {}).textContent || '').trim(),
        s: r.getAttribute('data-s') || 'wait'
      };
    }) : [];
  }

  // Agen yang sedang menulis jawaban AI (dari aliran live.js) ikut dihitung bekerja.
  var menulis = {};
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
    // Tahap berstatus JALAN hanya dihitung selama tim benar-benar berjalan (tombol Berhenti aktif):
    // setelah galat fatal panel tahap bisa tertinggal "Bekerja" padahal proses sudah berhenti.
    langkah.forEach(function (t) {
      if (t.s !== 'run' || !jalan) return;
      namaAktif.push(t.nama);
      agenUntuk(t.nama).forEach(function (id) { if (aktif.indexOf(id) < 0) aktif.push(id); });
    });
    Object.keys(menulis).forEach(function (id) { if (menulis[id] > 0 && aktif.indexOf(id) < 0) aktif.push(id); });
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
        ? 'Sedang bekerja: ' + aktif.map(function (id) { return '<b>' + esc(AGEN[id][0]) + '</b>'; }).join(', ') + (namaAktif.length ? ' (' + esc(namaAktif.join(', ')) + ')' : '')
        : 'Tim bekerja. Menunggu tahap berikutnya.';
    } else if (tadiJalan) {
      SEMUA.forEach(function (id) { setAgen(id, false); });
      aktifLalu = '';
      if (out) out.textContent = 'Tahap selesai atau menunggu persetujuanmu. Agen istirahat sebentar.';
    }
    tadiJalan = jalan || aktif.length > 0;
    gambarTahap(langkah, jalan);
  }
  // Dibatasi paling sering tiap 200 ms, tapi selalu jalan: panel tahap bisa berubah terus selama proses
  // (debounce murni bisa tidak pernah sempat menyinkronkan kantor).
  var tunda = null;
  function jadwal() { if (!tunda) tunda = setTimeout(function () { tunda = null; sinkron(); }, 200); }

  /* ---------- Hasil kerja agen (live) ---------- */
  var MAKS_ITEM = 16, item = {}, urutan = [];
  function panelAktif() { return $(isBuild() ? 'liveBuild' : 'liveKonten'); }
  function siapkanPanel(box) {
    if (!box || box.firstChild) return;
    box.innerHTML = '<div class="live-tahap" data-kosong="1"></div>' +
      '<p class="live-kosong">Belum ada pekerjaan. Tulis perintah, pilih format, lalu jalankan. Tulisan tiap agen muncul di sini saat itu juga.</p>' +
      '<ol class="live-list" reversed></ol>';
  }
  function gambarTahap(langkah, jalan) {
    var box = panelAktif(); if (!box) return;
    siapkanPanel(box);
    var el = box.querySelector('.live-tahap');
    var run = langkah.filter(function (t) { return (t.s === 'run' && jalan) || t.s === 'bad'; });
    var selesai = langkah.filter(function (t) { return t.s === 'done'; }).length;
    if (!run.length && !jalan) { el.setAttribute('data-kosong', '1'); el.innerHTML = ''; return; }
    el.removeAttribute('data-kosong');
    el.innerHTML = '<p class="live-ringkas">' + (jalan ? 'Tim bekerja' : 'Menunggu keputusanmu') + '<span>' + selesai + ' dari ' + langkah.length + ' tahap selesai</span></p>' +
      (run.length ? '<ul>' + run.map(function (t) { return '<li data-s="' + t.s + '"><b>' + esc(t.nama) + '</b><span>' + esc(t.aksi && t.aksi !== '—' ? t.aksi : 'Bekerja') + '</span></li>'; }).join('') + '</ul>' : '');
  }
  function nama(id) { return id && AGEN[id] ? AGEN[id] : ['Tim', 'Agen yang sedang bertugas']; }
  function buatItem(d) {
    var box = panelAktif(); if (!box) return null;
    siapkanPanel(box);
    box.querySelector('.live-kosong').hidden = true;
    var n = nama(d.agen);
    var li = document.createElement('li');
    li.className = 'live-item'; li.setAttribute('data-s', 'jalan');
    li.innerHTML = (d.agen && AGEN[d.agen] ? '<img src="/assets/agents/' + esc(d.agen) + '.png" alt="" width="40" height="46" loading="lazy" decoding="async">' : '<span class="live-ava" aria-hidden="true"></span>') +
      '<div class="live-isi"><p class="live-kepala"><b>' + esc(n[0]) + '</b> <span class="live-peran">' + esc(n[1]) + '</span></p>' +
      '<p class="live-st">Sedang menulis</p><pre class="live-teks"></pre></div>';
    var list = box.querySelector('.live-list');
    list.insertBefore(li, list.firstChild);
    var it = { el: li, st: li.querySelector('.live-st'), teks: li.querySelector('.live-teks'), isi: '', baru: false, agen: d.agen };
    item[d.id] = it; urutan.push(d.id);
    while (urutan.length > MAKS_ITEM) { var lama = item[urutan.shift()]; if (lama && lama.el.parentNode) lama.el.parentNode.removeChild(lama.el); }
    return it;
  }
  var antri = {}, bingkai = 0;
  function gambarTeks() {
    bingkai = 0;
    Object.keys(antri).forEach(function (id) {
      var it = item[id]; if (!it) return;
      var t = it.isi;
      it.teks.textContent = t.length > 1600 ? '…' + t.slice(-1600) : t;
      it.teks.scrollTop = it.teks.scrollHeight;
    });
    antri = {};
  }
  function selesaiItem(it, d) {
    var gagal = d.jenis === 'gagal', batal = gagal && /cancel/i.test(d.pesan || '');
    it.el.setAttribute('data-s', gagal ? (batal ? 'batal' : 'gagal') : 'selesai');
    var panjang = (it.isi || '').length;
    it.st.textContent = batal ? 'Dihentikan' : gagal ? 'Gagal: ' + (d.pesan || 'jawaban AI terputus') : 'Selesai, ' + panjang.toLocaleString('id-ID') + ' karakter';
    if (panjang) {
      var det = document.createElement('details');
      det.innerHTML = '<summary>Lihat tulisan lengkap</summary>';
      var pre = document.createElement('pre'); pre.className = 'live-teks penuh';
      pre.textContent = it.isi.length > 40000 ? it.isi.slice(0, 40000) + '\n…(dipotong di pratinjau, lengkapnya ada di hasil dan paket unduhan)' : it.isi;
      det.appendChild(pre);
      it.teks.replaceWith(det);
    } else it.teks.remove();
  }
  window.addEventListener('nexa:ai', function (e) {
    var d = e.detail || {};
    var it = item[d.id];
    if (d.jenis === 'mulai') {
      if (d.agen) { menulis[d.agen] = (menulis[d.agen] || 0) + 1; jadwal(); }
      buatItem(d);
      return;
    }
    if (!it) it = buatItem(d);
    if (!it) return;
    if (d.jenis === 'teks') {
      it.isi = d.teks || '';
      antri[d.id] = 1;
      if (!bingkai) bingkai = window.requestAnimationFrame ? window.requestAnimationFrame(gambarTeks) : setTimeout(gambarTeks, 50);
      return;
    }
    if (d.teks) it.isi = d.teks;
    if (d.agen && menulis[d.agen]) { menulis[d.agen]--; jadwal(); }
    delete antri[d.id];
    selesaiItem(it, d);
  });
  function kosongkan(ws) {
    var box = $(ws === 'build' ? 'liveBuild' : 'liveKonten'); if (!box) return;
    urutan = urutan.filter(function (id) { var it = item[id]; if (it && box.contains(it.el)) { delete item[id]; return false; } return true; });
    box.innerHTML = ''; siapkanPanel(box);
  }

  document.addEventListener('DOMContentLoaded', function () {
    siapkanPanel($('liveKonten')); siapkanPanel($('liveBuild'));
    // Siaga: semua agen santai. Begitu perintah jalan, agen yang mendapat tugas pergi ke mejanya.
    if (kantor) SEMUA.forEach(function (id) { setAgen(id, false); });
    var mo = new MutationObserver(jadwal);
    ['tracks', 'btracks', 'wsBuild', 'stop', 'bstop'].forEach(function (id) { var el = $(id); if (el) mo.observe(el, { childList: true, subtree: true, attributes: true, characterData: true }); });
    if ($('reset')) $('reset').addEventListener('click', function () { kosongkan('konten'); });
    if ($('breset')) $('breset').addEventListener('click', function () { kosongkan('build'); });
    // Ctrl/Cmd + Enter di kotak perintah = Jalankan.
    [['cmd', 'run'], ['breq', 'brun']].forEach(function (p) {
      var t = $(p[0]); if (!t) return;
      t.addEventListener('keydown', function (e) { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); var b = $(p[1]); if (b && !b.disabled) b.click(); } });
    });
    sinkron();
  });
})();
