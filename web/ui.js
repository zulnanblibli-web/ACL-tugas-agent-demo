/* Nexaoffice Workspace (/studio.html): satu tempat kerja + Chat ZUNO (pelapor tim, simpan hasil ke folder lokal).
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
  var SEMUA = Object.keys(AGEN); // 18 agen kantor 3D
  // Di luar kantor 3D: Hana (Divisi HRD) dan agen tambahan dari menu Tambah agen (tim-agen.js). Namanya tetap tampil di hasil live dan laporan.
  AGEN['H.1'] = ['Hana', 'Melatih agen baru'];

  /* ---------- Kantor 3D ikut status kerja asli ---------- */
  var iframe = $('kantorIframe'), kantor = iframe && window.NexaKantor ? window.NexaKantor(iframe) : null;
  if (kantor) window.NexaKantor.pasangKontrol(kantor);
  // Centang "Kamera ikut agen": klik nama agen di kantor = kamera mengikuti agen itu (bukan pindah ke ruangnya).
  if (kantor && $('uiIkuti')) { kantor.ikuti($('uiIkuti').checked); $('uiIkuti').addEventListener('change', function () { kantor.ikuti($('uiIkuti').checked); }); }

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
  window.NexaUI = {
    keadaan: keadaan, agenUntuk: agenUntuk,
    daftarAgen: function (kode, nama, peran) { if (SEMUA.indexOf(kode) < 0 && kode !== 'H.1') AGEN[kode] = [String(nama), String(peran)]; },
    hapusAgen: function (kode) { if (SEMUA.indexOf(kode) < 0 && kode !== 'H.1') delete AGEN[kode]; },
    agen: function () { return Object.keys(AGEN).map(function (k) { return { kode: k, nama: AGEN[k][0], peran: AGEN[k][1], kantor: SEMUA.indexOf(k) > -1 }; }); }
  };
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
        // Kamera hanya ke agen yang punya meja di kantor 3D (Hana dan agen tambahan belum punya).
        var diKantor = aktif.filter(function (id) { return SEMUA.indexOf(id) > -1; });
        var baru = diKantor.filter(function (id) { return aktifLalu.split(',').indexOf(id) < 0; })[0] || diKantor[0];
        if (baru) kantor.fokus(baru);
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
    li.innerHTML = (d.agen && SEMUA.indexOf(d.agen) > -1 ? '<img src="/assets/agents/' + esc(d.agen) + '.png" alt="" width="40" height="46" loading="lazy" decoding="async">' : '<span class="live-ava" aria-hidden="true"></span>') +
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
    catatKinerja(d);
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

  /* ---------- Chat ZUNO: pelapor tim ----------
     ZUNO melapor dari kejadian asli: perintah diterima, tiap tahap mulai/selesai/tertahan, aktivitas agen,
     pemberitahuan Juru Kabar, galat, lalu ringkasan saat proses berhenti beserta tombol ke hasil dan laporan
     kinerja tiap agen (dihitung dari panggilan AI putaran itu). Pesan bebas dari Zulnan dijawab lewat AI
     (ikut Pengaturan AI) hanya dari data itu. Riwayat chat disimpan di browser (localStorage). */
  var CHAT_KEY = 'nexa-chat', pesan = [], belumDibaca = 0, tampilanChat = false;
  var tugas = null, jejakTahap = { konten: {}, build: {} }, noticeLalu = 0, galatLalu = { errbox: '', berr: '' };
  var kinerja = {}, mulaiPanggilan = {}, ringkasLalu = null, jalanLalu = false;
  var antriLalu = 0;

  function jam(t) { var d = new Date(t); return ('0' + d.getHours()).slice(-2) + '.' + ('0' + d.getMinutes()).slice(-2); }
  function simpanChat() { try { localStorage.setItem(CHAT_KEY, JSON.stringify(pesan.slice(-150))); } catch (e) {} }
  var LABEL_AKSI = { hasil: 'Lihat hasil', naskah: 'Buka naskah untuk dicek', simpan: 'Simpan ke folder lokal', pengaturan: 'Buka Pengaturan AI', folder: 'Pilih folder hasil' };
  function gambarPesan(m) {
    var log = $('chatLog'); if (!log) return null;
    var li = document.createElement('li');
    li.className = 'chat-msg'; li.setAttribute('data-dari', m.dari); if (m.jenis) li.setAttribute('data-jenis', m.jenis);
    var isi = '';
    if (m.dari === 'zuno') isi += '<img class="chat-ava" src="/assets/agents/L.0.png" alt="" width="32" height="37">';
    isi += '<div class="chat-buble"><p class="chat-siapa"><b>' + (m.dari === 'zuno' ? 'ZUNO' : 'Kamu') + '</b> <time>' + jam(m.waktu) + '</time></p>';
    isi += '<p class="chat-teks"></p>';
    if (m.tabel) isi += tabelKinerja(m.tabel);
    if (m.aksi && m.aksi.length) isi += '<p class="chat-aksi">' + m.aksi.map(function (a) { return '<button type="button" class="btn" data-aksi="' + esc(a.a) + '" data-ws="' + esc(a.ws || '') + '">' + esc(LABEL_AKSI[a.a] || a.a) + '</button>'; }).join('') + '</p>';
    isi += '</div>';
    li.innerHTML = isi;
    li.querySelector('.chat-teks').textContent = m.teks || '';
    log.appendChild(li);
    log.scrollTop = log.scrollHeight;
    return li;
  }
  function lapor(teks, opsi) {
    opsi = opsi || {};
    var akhir = pesan[pesan.length - 1];
    if (akhir && akhir.dari === 'zuno' && akhir.teks === teks && !opsi.tabel) return null; // jangan ulang kabar yang sama
    var m = { dari: opsi.dari || 'zuno', teks: teks, jenis: opsi.jenis || '', aksi: opsi.aksi || null, tabel: opsi.tabel || null, waktu: Date.now() };
    pesan.push(m); simpanChat();
    var li = gambarPesan(m);
    if (!tampilanChat && m.dari === 'zuno') { belumDibaca++; var b = $('chatBaru'); if (b) { b.hidden = false; b.textContent = String(belumDibaca); } }
    return li;
  }

  /* -- laporan kinerja per agen (dari event nexa:ai putaran ini) -- */
  function catatKinerja(d) {
    if (!d.agen || !AGEN[d.agen]) return;
    var k = kinerja[d.agen] || (kinerja[d.agen] = { tugas: 0, selesai: 0, gagal: 0, karakter: 0, ms: 0 });
    if (d.jenis === 'mulai') { k.tugas++; mulaiPanggilan[d.id] = Date.now(); }
    else if (d.jenis === 'selesai' || d.jenis === 'gagal') {
      if (d.jenis === 'selesai') k.selesai++; else if (!/cancel/i.test(d.pesan || '')) {
        k.gagal++;
        lapor('Tulisan ' + AGEN[d.agen][0] + ' (' + AGEN[d.agen][1].toLowerCase() + ') gagal: ' + (d.pesan || 'jawaban AI terputus') + '.', { jenis: 'warn' });
      }
      k.karakter += (d.teks || '').length;
      if (mulaiPanggilan[d.id]) { k.ms += Date.now() - mulaiPanggilan[d.id]; delete mulaiPanggilan[d.id]; }
    }
  }
  function dataKinerja() {
    return Object.keys(kinerja).sort(function (a, b) { var u = function (k) { var i = SEMUA.indexOf(k); return i < 0 ? 99 : i; }; return u(a) - u(b); }).map(function (id) {
      var k = kinerja[id]; return { id: id, nama: AGEN[id][0], peran: AGEN[id][1], tugas: k.tugas, selesai: k.selesai, gagal: k.gagal, karakter: k.karakter, detik: Math.round(k.ms / 1000) };
    });
  }
  function tabelKinerja(rows) {
    if (!rows || !rows.length) return '';
    return '<div class="chat-tabel"><table><caption>Laporan kinerja agen</caption><thead><tr><th scope="col">Agen</th><th scope="col">Tugas</th><th scope="col">Selesai</th><th scope="col">Gagal</th><th scope="col">Karakter</th><th scope="col">Waktu</th></tr></thead><tbody>' +
      rows.map(function (r) { return '<tr><th scope="row">' + esc(r.nama) + '<span>' + esc(r.peran) + '</span></th><td>' + r.tugas + '</td><td>' + r.selesai + '</td><td>' + r.gagal + '</td><td>' + r.karakter.toLocaleString('id-ID') + '</td><td>' + r.detik + ' dtk</td></tr>'; }).join('') +
      '</tbody></table></div>';
  }
  function laporKinerja() {
    var rows = dataKinerja();
    if (!rows.length) return lapor('Belum ada agen yang bekerja di putaran ini. Laporan kinerja muncul setelah perintah dijalankan.');
    var gagal = rows.reduce(function (n, r) { return n + r.gagal; }, 0);
    return lapor('Laporan kinerja ' + rows.length + ' agen di putaran ini' + (gagal ? ', ada ' + gagal + ' tulisan yang gagal dan dicoba ulang bila bisa' : ', semua tulisan selesai') + '. Angka dihitung dari panggilan AI asli.', { tabel: rows });
  }

  /* -- kabar tiap tahap -- */
  function namaAgen(divisi) {
    var n = agenUntuk(divisi).map(function (id) { return AGEN[id][0]; });
    return n.length > 2 ? n.slice(0, -1).join(', ') + ', dan ' + n[n.length - 1] : n.join(' dan ');
  }
  function catatTahap(langkah, jalan) {
    if (!tugas) { jalanLalu = jalan; return; }
    var ws = isBuild() ? 'build' : 'konten', lalu = jejakTahap[ws];
    langkah.forEach(function (t) {
      var l = lalu[t.nama] || { s: 'wait', aksi: '' }, aksi = t.aksi && t.aksi !== '—' ? t.aksi : '';
      var siapa = namaAgen(t.nama);
      if (t.s !== l.s) {
        if (t.s === 'run' && jalan) lapor(t.nama + (siapa ? ' (' + siapa + ')' : '') + ' mulai bekerja' + (aksi ? ': ' + aksi : '.'));
        else if (t.s === 'done') lapor(t.nama + ' selesai' + (aksi ? ': ' + aksi : '.'), { jenis: 'ok' });
        else if (t.s === 'bad') lapor(t.nama + ' perlu perhatianmu' + (aksi ? ': ' + aksi : '.'), { jenis: 'warn' });
      } else if (t.s === 'run' && jalan && aksi && aksi !== l.aksi) lapor(t.nama + ': ' + aksi);
      lalu[t.nama] = { s: t.s, aksi: aksi };
    });
    // pemberitahuan Juru Kabar
    var ns = $('notices') ? $('notices').querySelectorAll('.banner') : [];
    if (ns.length < noticeLalu) noticeLalu = 0;
    for (var i = noticeLalu; i < ns.length; i++) {
      var kls = ns[i].className;
      lapor('Kabar dari Lia (Juru Kabar): ' + ns[i].textContent.trim(), { jenis: /bad/.test(kls) ? 'bad' : /warn/.test(kls) ? 'warn' : '' });
    }
    noticeLalu = ns.length;
    // galat
    ['errbox', 'berr'].forEach(function (id) {
      var el = $(id); if (!el) return;
      var t = el.classList.contains('hidden') ? '' : el.textContent.trim();
      if (t && t !== galatLalu[id]) lapor('Ada kendala: ' + t, { jenis: 'bad', aksi: /Pengaturan AI|kunci|API key/i.test(t) ? [{ a: 'pengaturan' }] : null });
      galatLalu[id] = t;
    });
    // persetujuan (Setujui) berjalan tanpa tombol Berhenti: deteksi lewat Antrian Posting yang bertambah
    var na = document.querySelectorAll('#antrianl .res').length;
    if ((jalanLalu && !jalan) || (na > antriLalu && !jalan)) setTimeout(ringkasAkhir, 300);
    antriLalu = na; jalanLalu = jalan;
  }

  /* -- ringkasan saat proses berhenti: apa yang baru jadi, arahkan ke hasil -- */
  function ringkas() { try { return window.ZunoHasil ? window.ZunoHasil.ringkas() : { konten: null, build: null }; } catch (e) { return { konten: null, build: null }; } }
  function daftar(arr) { return arr.map(function (c) { return c.id + ' "' + (c.topik || '-') + '"'; }).join(', '); }
  async function ringkasAkhir() {
    if (berjalan()) return;
    var r = ringkas(), lama = ringkasLalu || { konten: null, build: null };
    ringkasLalu = r;
    var adaBaru = false;
    if (tugas && tugas.jenis === 'build' && r.build) {
      var b = r.build;
      if (b.selesai && !(lama.build && lama.build.selesai && lama.build.id === b.id)) {
        adaBaru = true;
        lapor('Aplikasi ' + (b.nama || b.id) + ' selesai dibangun dan diuji Divisi Engineering. Status: ' + b.tahap + '. Paket rilisnya siap kamu review.', { jenis: 'ok', aksi: [{ a: 'hasil', ws: 'build' }, { a: 'simpan', ws: 'build' }] });
      } else if (b.tertahan) lapor('Build ' + b.id + ' tertahan: ' + b.tahap + '. Cek detailnya di hasil per tahap.', { jenis: 'warn', aksi: [{ a: 'hasil', ws: 'build' }] });
      else if (!b.selesai) lapor('Build berhenti di tahap: ' + b.tahap + '.', { aksi: [{ a: 'hasil', ws: 'build' }] });
    } else if (r.konten) {
      var k = r.konten, sebelum = {};
      ((lama.konten && lama.konten.kartu) || []).forEach(function (c) { sebelum[c.id] = c; });
      var naskah = k.kartu.filter(function (c) { return c.naskah && !(sebelum[c.id] && sebelum[c.id].naskah); });
      var jadi = k.kartu.filter(function (c) { return c.hasil && !(sebelum[c.id] && sebelum[c.id].hasil); });
      var setuju = k.kartu.filter(function (c) { return c.antrian && !(sebelum[c.id] && sebelum[c.id].antrian); });
      if (naskah.length) { adaBaru = true; lapor('Naskah siap kamu cek: ' + daftar(naskah) + '. Unduh .docx-nya, lalu klik "Lanjut ke desain & editing" atau "Revisi naskah". Desain dan editing menunggu keputusanmu.', { jenis: 'ok', aksi: [{ a: 'naskah', ws: 'konten' }, { a: 'simpan', ws: 'konten' }] }); }
      if (jadi.length) {
        adaBaru = true;
        var vid = jadi.filter(function (c) { return c.format === 'video'; }).length, car = jadi.length - vid;
        lapor('Selesai. ' + [car ? car + ' carousel' : '', vid ? vid + ' video' : ''].filter(Boolean).join(' dan ') + ' siap kamu review: ' + daftar(jadi) + '.' + (vid ? ' Video berupa paket (naskah, storyboard, komposisi, paket render), belum file MP4.' : '') + ' Tidak ada yang terbit sebelum kamu setujui.', { jenis: 'ok', aksi: [{ a: 'hasil', ws: 'konten' }, { a: 'simpan', ws: 'konten' }] });
      }
      if (setuju.length) { adaBaru = true; lapor(daftar(setuju) + ' sudah kamu setujui dan masuk Antrian Posting (' + setuju.map(function (c) { return c.antrian; }).join(', ') + '). Agen akan mengunggahnya sendiri begitu sambungan posting dari sisimu selesai; sekarang belum ada yang terkirim.', { jenis: 'ok', aksi: [{ a: 'hasil', ws: 'konten' }, { a: 'simpan', ws: 'konten' }] }); }
      if (!naskah.length && !jadi.length && !setuju.length) lapor('Proses berhenti. ' + (k.kartu.some(function (c) { return c.hasil || c.naskah; }) ? 'Belum ada hasil baru sejak laporan terakhir.' : 'Belum ada hasil yang jadi.'), { aksi: [{ a: 'hasil', ws: 'konten' }] });
    }
    if (dataKinerja().length) laporKinerja();
    if (adaBaru) simpanTugas(tugas && tugas.jenis === 'build' ? 'build' : 'konten', false);
  }

  /* -- ke hasil -- */
  function setTampilan(chat) {
    tampilanChat = !!chat;
    var w = document.querySelector('.ws-kanan > .wrap'), c = $('chat');
    if (w) w.hidden = tampilanChat; if (c) c.hidden = !tampilanChat;
    if ($('lihatKerja')) $('lihatKerja').setAttribute('aria-pressed', String(!tampilanChat));
    if ($('lihatChat')) $('lihatChat').setAttribute('aria-pressed', String(tampilanChat));
    if (tampilanChat) { belumDibaca = 0; var b = $('chatBaru'); if (b) b.hidden = true; var log = $('chatLog'); if (log) log.scrollTop = log.scrollHeight; }
  }
  function lihatHasil(ws) {
    setTampilan(false);
    if (ws === 'build' && !isBuild() && $('wsB')) $('wsB').click();
    if (ws !== 'build' && isBuild() && $('wsK')) $('wsK').click();
    var el = ws === 'build' ? $('bresp') : ($('resp') && !$('resp').classList.contains('hidden') ? $('resp') : $('procp'));
    if (!el || el.classList.contains('hidden')) { lapor('Hasilnya belum ada di halaman ini. Bila halaman sempat dimuat ulang, hasil lama hilang dari layar; cek folder lokal bila sudah disimpan.'); setTampilan(true); return; }
    var h = el.querySelector('.res h3') || el.querySelector('h2') || el;
    if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1');
    el.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    h.focus({ preventScroll: true });
    el.classList.add('sorot'); setTimeout(function () { el.classList.remove('sorot'); }, 2400);
  }
  function laporStatus() {
    var langkah = tahap(), jalan = berjalan();
    var run = langkah.filter(function (t) { return t.s === 'run' && jalan; }), selesai = langkah.filter(function (t) { return t.s === 'done'; }).length;
    if (!tugas && !langkah.length) return lapor('Tim siaga. Belum ada perintah yang jalan. Tulis perintah di tab Kerja lalu jalankan.');
    if (jalan) return lapor('Tim sedang bekerja. ' + selesai + ' dari ' + langkah.length + ' tahap selesai.' + (run.length ? ' Sekarang: ' + run.map(function (t) { return t.nama + ' (' + (namaAgen(t.nama) || 'tim') + ')' + (t.aksi && t.aksi !== '—' ? ', ' + t.aksi : ''); }).join('; ') + '.' : ''));
    var bad = langkah.filter(function (t) { return t.s === 'bad'; });
    lapor('Tim tidak sedang berjalan. ' + selesai + ' dari ' + langkah.length + ' tahap selesai.' + (bad.length ? ' Perlu perhatianmu: ' + bad.map(function (t) { return t.nama; }).join(', ') + '.' : ''), { aksi: [{ a: 'hasil', ws: isBuild() ? 'build' : 'konten' }] });
  }

  /* -- simpan ke folder lokal: folder per tugas, subfolder per hasil sesuai judulnya -- */
  var DB = 'nexa-folder';
  function idb(mode, fn) {
    return new Promise(function (ok, gagal) {
      if (!window.indexedDB) return ok(null);
      var rq = indexedDB.open(DB, 1);
      rq.onupgradeneeded = function () { rq.result.createObjectStore('h'); };
      rq.onerror = function () { ok(null); };
      rq.onsuccess = function () { try { var tx = rq.result.transaction('h', mode), st = tx.objectStore('h'), r = fn(st); tx.oncomplete = function () { ok(r && 'result' in r ? r.result : null); }; tx.onerror = function () { ok(null); }; } catch (e) { ok(null); } };
    });
  }
  // Folder disimpan di IndexedDB supaya tetap diingat setelah halaman dibuka lagi; juga di memori untuk sesi ini.
  var folderIni = null;
  function ambilFolder() { return folderIni ? Promise.resolve(folderIni) : idb('readonly', function (st) { return st.get('hasil'); }).then(function (h) { folderIni = h || null; return folderIni; }); }
  function taruhFolder(h) { folderIni = h; return idb('readwrite', function (st) { return st.put(h, 'hasil'); }); }
  async function izin(h, minta) {
    var o = { mode: 'readwrite' };
    try { if ((await h.queryPermission(o)) === 'granted') return true; if (!minta) return false; return (await h.requestPermission(o)) === 'granted'; } catch (e) { return false; }
  }
  async function pilihFolder() {
    if (!window.showDirectoryPicker) { lapor('Browser ini belum bisa menyimpan langsung ke folder. Hasil akan diunduh sebagai .zip (Chrome atau Edge di laptop bisa langsung ke folder).', { jenis: 'warn' }); return null; }
    try { var h = await window.showDirectoryPicker({ id: 'nexa-hasil', mode: 'readwrite' }); await taruhFolder(h); tulisFolder(h); lapor('Folder hasil dipilih: ' + h.name + '. Tiap tugas disimpan di sini dalam satu folder, isinya diberi nama sesuai judul hasilnya.', { jenis: 'ok' }); return h; }
    catch (e) { return null; }
  }
  function tulisFolder(h) { var el = $('chatFolder'); if (el) el.textContent = h ? 'Folder hasil: ' + h.name + '.' : (window.showDirectoryPicker ? 'Folder hasil: belum dipilih.' : 'Browser ini menyimpan hasil sebagai .zip.'); }
  function tanggal(t) { var d = t ? new Date(t) : new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function namaTugas(jenis, info) {
    var aman = window.ZunoHasil.aman;
    var judul = String((info && info.perintah) || '').split('\n')[0].trim();
    if (!judul) judul = jenis === 'build' ? (info && info.nama) || 'Aplikasi' : 'Konten dari tren';
    if (judul.length > 60) judul = judul.slice(0, 60).replace(/\s+\S*$/, '');
    return aman(tanggal(info && info.mulai) + ' ' + (jenis === 'build' ? 'Build App' : 'Konten') + ' - ' + judul);
  }
  function daftarIsi(jenis, info, files) {
    var per = {}; files.forEach(function (f) { (per[f.folder] = per[f.folder] || []).push(f.nama); });
    var L = ['# ' + namaTugas(jenis, info), '', 'Perintah: ' + ((info && info.perintah) || '(kosong, tim mencari ide sendiri)'), 'Disimpan: ' + new Date().toLocaleString('id-ID'), ''];
    if (jenis === 'konten') (info.kartu || []).forEach(function (c) { L.push('- ' + c.id + ' ' + (c.format === 'video' ? 'Video' : 'Carousel') + ': ' + (c.topik || '-') + ' | ' + (c.tahap || '-') + (c.disetujui ? ' | Disetujui' : ' | belum disetujui') + (c.antrian ? ' | Antrian Posting: ' + c.antrian : '')); });
    else L.push('- ' + info.id + ': ' + (info.nama || '-') + ' | ' + (info.tahap || '-'));
    L.push('');
    Object.keys(per).forEach(function (f) { L.push('## ' + f, ''); per[f].forEach(function (n) { L.push('- ' + n); }); L.push(''); });
    if (jenis === 'konten') L.push('Catatan: video berupa paket (naskah, storyboard, komposisi HyperFrames, paket render Claude Code), belum file MP4. Render di laptop, lalu taruh MP4-nya di folder video yang sama.', '');
    return L.join('\n');
  }
  var simpanTerakhir = {};
  async function simpanTugas(jenis, minta) {
    if (!window.ZunoHasil) return;
    var r = ringkas(), info = jenis === 'build' ? r.build : r.konten;
    if (!info) { if (minta) lapor('Belum ada tugas ' + (jenis === 'build' ? 'Build App' : 'konten') + ' di halaman ini untuk disimpan.'); return; }
    var files = await window.ZunoHasil.berkas(jenis);
    if (!files.length) { if (minta) lapor('Belum ada hasil yang jadi untuk disimpan. Aku simpan begitu ada naskah atau hasil.'); return; }
    var nama = namaTugas(jenis, info), indeks = daftarIsi(jenis, info, files);
    var sig = nama + '|' + files.map(function (f) { return f.folder + '/' + f.nama + ':' + f.data.size; }).join(',');
    if (!minta && simpanTerakhir[jenis] === sig) return;
    if (!window.showDirectoryPicker && !minta) { lapor('Hasil siap disimpan. Klik tombolnya untuk mengunduh .zip berisi folder tugas ini.', { aksi: [{ a: 'simpan', ws: jenis }] }); return; }
    if (await tulisTugas(nama, indeks, files, minta, [{ a: 'simpan', ws: jenis }])) simpanTerakhir[jenis] = sig;
  }
  // Tulis satu folder tugas (daftar-hasil.md + subfolder per hasil) ke folder hasil di laptop, atau unduh .zip bila browser tidak bisa.
  // Dipakai juga agen tambahan (tim-agen.js) lewat NexaChat.simpanBerkas.
  async function tulisTugas(nama, indeks, files, minta, aksi) {
    if (!window.showDirectoryPicker) {
      var isi = [{ name: nama + '/daftar-hasil.md', data: new TextEncoder().encode(indeks) }];
      for (var i = 0; i < files.length; i++) isi.push({ name: nama + '/' + files[i].folder + '/' + files[i].nama, data: new Uint8Array(await files[i].data.arrayBuffer()) });
      var a = document.createElement('a'); a.href = URL.createObjectURL(window.ZunoHasil.zip(isi)); a.download = nama + '.zip'; document.body.appendChild(a); a.click(); a.remove();
      lapor('Folder tugas diunduh sebagai ' + nama + '.zip (' + files.length + ' file). Ekstrak ke folder hasilmu.', { jenis: 'ok' });
      return true;
    }
    var h = await ambilFolder();
    if (!h && minta) h = await pilihFolder();
    if (!h) { if (!minta) lapor('Hasil siap disimpan ke laptopmu. Pilih folder hasil sekali, setelah itu aku simpan otomatis tiap tugas selesai.', { aksi: aksi }); return false; }
    if (!(await izin(h, minta))) { lapor('Aku perlu izinmu untuk menulis ke folder ' + h.name + '. Klik tombolnya, lalu pilih Izinkan.', { aksi: aksi }); return false; }
    try {
      var dir = await h.getDirectoryHandle(nama, { create: true });
      async function tulis(d, n, data) { var fh = await d.getFileHandle(n, { create: true }), w = await fh.createWritable(); await w.write(data); await w.close(); }
      await tulis(dir, 'daftar-hasil.md', new Blob([indeks], { type: 'text/markdown' }));
      for (var j = 0; j < files.length; j++) { var sub = await dir.getDirectoryHandle(files[j].folder, { create: true }); await tulis(sub, files[j].nama, files[j].data); }
      lapor('Tersimpan di laptopmu: ' + h.name + '/' + nama + ' (' + files.length + ' file, tiap hasil di foldernya sendiri sesuai judul).', { jenis: 'ok' });
      return true;
    } catch (e) { lapor('Gagal menyimpan ke folder ' + h.name + ': ' + ((e && e.message) || 'galat') + '. Coba pilih folder lain.', { jenis: 'bad', aksi: [{ a: 'folder' }] }); return false; }
  }

  /* -- tanya ZUNO (AI, ikut Pengaturan AI) -- */
  function konteks() {
    var langkah = tahap(), r = ringkas();
    var st = (berjalan() ? 'BERJALAN' : 'TIDAK BERJALAN') + '. Tahap: ' + (langkah.map(function (t) { return t.nama + '=' + t.s + (t.aksi && t.aksi !== '—' ? ' (' + t.aksi + ')' : ''); }).join('; ') || 'belum ada');
    var hasil = r.konten ? 'Konten, perintah "' + (r.konten.perintah || '(kosong)') + '": ' + r.konten.kartu.map(function (c) { return c.id + ' ' + c.format + ' "' + c.topik + '" tahap "' + c.tahap + '"' + (c.disetujui ? ' disetujui' : '') + (c.antrian ? ' antrian ' + c.antrian : ''); }).join('; ') : 'Konten: belum ada';
    if (r.build) hasil += '\nBuild: ' + r.build.id + ' "' + r.build.nama + '" tahap "' + r.build.tahap + '"' + (r.build.selesai ? ' selesai' : '') + (r.build.tertahan ? ' tertahan' : '');
    var kin = dataKinerja().map(function (k) { return k.nama + ' (' + k.peran + '): ' + k.tugas + ' tugas, ' + k.selesai + ' selesai, ' + k.gagal + ' gagal, ' + k.karakter + ' karakter, ' + k.detik + ' dtk'; }).join('; ') || 'belum ada';
    var obrolan = pesan.slice(-8).map(function (m) { return (m.dari === 'zuno' ? 'ZUNO' : 'ZULNAN') + ': ' + m.teks; }).join('\n');
    return { st: st, hasil: hasil, kin: kin, obrolan: obrolan };
  }
  var sedangJawab = false;
  async function tanyaZuno(teks) {
    lapor(teks, { dari: 'kamu' });
    if (/^(status|progres|progress)\b/i.test(teks)) return laporStatus();
    if (/^laporan\b/i.test(teks)) return laporKinerja();
    if (!window.ZunoKey || !window.ZunoKey.get()) return lapor('Aku belum bisa menjawab pesan bebas sebelum kunci akses diisi. Tombol cepat di bawah tetap jalan.', { aksi: [{ a: 'pengaturan' }] });
    if (sedangJawab) return;
    sedangJawab = true;
    var li = lapor('Sebentar, aku cek dulu…'), teksEl = li && li.querySelector('.chat-teks'), m = pesan[pesan.length - 1];
    var k = konteks();
    var prompt = 'Kamu ZUNO, Lead dan pelapor tim AI Nexaoffice milik Zulnan. Jawab pesan Zulnan dalam Bahasa Indonesia santai dan sopan (pakai "kamu"), singkat (maksimal 5 kalimat), hanya berdasarkan DATA. ' +
      'Jangan mengarang angka, hasil, status, atau kemajuan. Jangan bilang konten sudah terposting. Bila datanya tidak ada, bilang belum ada. ' +
      'Bila Zulnan minta tindakan (revisi, lanjut, setujui, simpan), arahkan ke tombolnya di tab Kerja: Revisi naskah, Lanjut ke desain & editing, Setujui, atau Simpan ke folder lokal di chat ini.\n\n' +
      'DATA STATUS: ' + k.st + '\nDATA HASIL: ' + k.hasil + '\nDATA KINERJA AGEN: ' + k.kin + '\nOBROLAN TERAKHIR:\n' + k.obrolan + '\n\nPESAN ZULNAN: ' + teks;
    try {
      var sample = await window.claude.use('sample');
      var h = await sample(prompt, { modelTier: 'quick', effort: 'low', diam: true, onText: function (u) { if (teksEl) teksEl.textContent = u.text; } });
      var jawab = String(h.text || '').trim() || 'Maaf, aku belum dapat jawaban. Coba tanya lagi.';
      if (teksEl) teksEl.textContent = jawab; if (m) { m.teks = jawab; simpanChat(); }
    } catch (e) {
      var g = e && e.code === 'not_granted' ? 'Kunci akses ditolak. Periksa di Pengaturan AI.' : 'Aku gagal menjawab: ' + ((e && e.message) || 'galat') + '.';
      if (teksEl) teksEl.textContent = g; if (m) { m.teks = g; m.jenis = 'bad'; simpanChat(); }
    }
    sedangJawab = false;
  }

  function jalankanAksi(a, ws) {
    if (a === 'hasil' || a === 'naskah') return lihatHasil(ws || 'konten');
    if (a === 'simpan') return simpanTugas(ws || (isBuild() ? 'build' : 'konten'), true);
    if (a === 'pengaturan') { if (window.ZunoHUD) window.ZunoHUD.askKey(); return; }
    if (a === 'folder') return pilihFolder();
  }
  function pasangChat() {
    if (!$('chat')) return;
    try { pesan = JSON.parse(localStorage.getItem(CHAT_KEY) || '[]') || []; } catch (e) { pesan = []; }
    pesan.forEach(function (m) { var li = gambarPesan(m); if (li) li.querySelectorAll('[data-aksi]').forEach(function (b) { if (b.getAttribute('data-aksi') === 'hasil' || b.getAttribute('data-aksi') === 'naskah') b.setAttribute('data-lama', '1'); }); });
    if (!pesan.length) lapor('Halo Zulnan, aku ZUNO, pelapor tim. Tulis perintah di tab Kerja dan jalankan. Aku kabari di sini tiap langkah agen sampai selesai, lalu tunjukkan hasil yang siap kamu review.');
    $('lihatKerja').addEventListener('click', function () { setTampilan(false); });
    $('lihatChat').addEventListener('click', function () { setTampilan(true); });
    document.querySelectorAll('[data-buka="chat"]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); setTampilan(true); try { history.replaceState(null, '', '#chat'); } catch (er) {} $('chat').scrollIntoView({ block: 'start' }); }); });
    if (location.hash === '#chat') setTampilan(true);
    $('chatLog').addEventListener('click', function (e) { var b = e.target.closest('[data-aksi]'); if (b) jalankanAksi(b.getAttribute('data-aksi'), b.getAttribute('data-ws')); });
    document.querySelectorAll('[data-cepat]').forEach(function (b) {
      b.addEventListener('click', function () {
        var c = b.getAttribute('data-cepat');
        if (c === 'status') laporStatus(); else if (c === 'laporan') laporKinerja();
        else if (c === 'hasil') { var r = ringkas(); lihatHasil(r.build && (!r.konten || isBuild()) ? 'build' : 'konten'); }
        else if (c === 'simpan') simpanTugas(isBuild() ? 'build' : 'konten', true);
      });
    });
    $('chatForm').addEventListener('submit', function (e) { e.preventDefault(); var t = $('chatIn').value.trim(); if (!t) return; $('chatIn').value = ''; tanyaZuno(t); });
    $('chatIn').addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); $('chatForm').requestSubmit(); } });
    $('chatPilihFolder').addEventListener('click', pilihFolder);
    if (!window.showDirectoryPicker) $('chatPilihFolder').hidden = true;
    ambilFolder().then(tulisFolder);
    window.addEventListener('zuno:tugas', function (e) {
      var d = e.detail || {};
      tugas = { jenis: d.jenis, perintah: d.perintah || '' };
      kinerja = {}; mulaiPanggilan = {}; jejakTahap[d.jenis === 'build' ? 'build' : 'konten'] = {}; noticeLalu = 0; ringkasLalu = null;
      var opsi = '';
      if (d.jenis === 'konten') {
        var tx = function (id) { var el = $(id); return el && el.selectedOptions && el.selectedOptions[0] ? el.selectedOptions[0].textContent.trim() : ''; };
        opsi = ' Format: ' + tx('count') + (d.paket !== '1' ? ', ' + tx('mode') + ', tipe ' + tx('tv') + ', gaya ' + tx('pre') : '') + '.';
      }
      lapor('Perintah diterima' + (d.perintah ? ': "' + (d.perintah.length > 140 ? d.perintah.slice(0, 138) + '…' : d.perintah) + '".' : ' tanpa bahan, tim cari ide sendiri dari tren.') + opsi + ' Aku bagi tugasnya ke ' + (d.jenis === 'build' ? 'Divisi Engineering' : 'divisi kreatif') + ' sekarang dan kabari tiap langkahnya di sini.');
    });
    window.NexaChat = {
      lapor: lapor, pesan: function () { return pesan; }, tampilan: setTampilan, simpan: simpanTugas, kinerja: dataKinerja,
      // files: [{folder, nama, data(Blob|string)}]; nama = nama folder tugas (tanggal + jenis + judul).
      simpanBerkas: function (nama, indeks, files) { return tulisTugas(window.ZunoHasil.aman(nama), indeks, files.map(function (f) { return { folder: f.folder, nama: f.nama, data: f.data instanceof Blob ? f.data : new Blob([String(f.data)], { type: 'text/markdown' }) }; }), true, null); },
      namaTugas: function (jenis, judul) { return window.ZunoHasil.aman(tanggal() + ' ' + jenis + ' - ' + String(judul || '').slice(0, 60)); }
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    siapkanPanel($('liveKonten')); siapkanPanel($('liveBuild'));
    // Siaga: semua agen santai. Begitu perintah jalan, agen yang mendapat tugas pergi ke mejanya.
    if (kantor) SEMUA.forEach(function (id) { setAgen(id, false); });
    var mo = new MutationObserver(jadwal);
    ['tracks', 'btracks', 'wsBuild', 'stop', 'bstop'].forEach(function (id) { var el = $(id); if (el) mo.observe(el, { childList: true, subtree: true, attributes: true, characterData: true }); });
    pasangChat();
    // Kabar ZUNO dicatat di setiap perubahan (tanpa jeda), supaya tahap yang cepat selesai tetap terlapor.
    var moChat = new MutationObserver(function () { catatTahap(tahap(), berjalan()); });
    ['tracks', 'btracks', 'stop', 'bstop', 'notices', 'errbox', 'berr', 'antrianl'].forEach(function (id) { var el = $(id); if (el) moChat.observe(el, { childList: true, subtree: true, attributes: true, characterData: true }); });
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
