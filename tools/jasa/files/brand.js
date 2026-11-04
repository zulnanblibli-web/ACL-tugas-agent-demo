/* Zuno Studio (edisi jasa): profil brand pemilik web.
   Pengaturan disimpan di browser ini (localStorage) dan bisa diekspor/diimpor sebagai file .json.
   Semua prompt agen, teks halaman, dan file unduhan memakai profil ini, bukan identitas penjual.
   Dimuat sebelum live.js dan logika Zuno Studio. */
(function () {
  'use strict';
  var STORE = 'zuno-brand';
  var DEF = {
    nama: '',
    niche: '',
    positioning: '',
    audiens: '',
    platform: 'Instagram, TikTok, Threads',
    pilar: ['Tips', 'Tutorial', 'Cerita proses', 'Produk', 'Tools', 'Tren'],
    suara: 'santai tapi tetap informatif, empatik, friendly, tidak bertele-tele; kalimat pendek, mudah diucapkan, tanpa jargon (istilah teknis wajib diberi padanan sehari-hari)',
    fakta: '',
    slogan: '',
    kredit: ''
  };
  function load() {
    var b = {};
    try { b = JSON.parse(localStorage.getItem(STORE) || '{}') || {}; } catch (e) { b = {}; }
    var o = {};
    Object.keys(DEF).forEach(function (k) { o[k] = b[k] == null || b[k] === '' ? DEF[k] : b[k]; });
    if (!Array.isArray(o.pilar)) o.pilar = String(o.pilar).split(/\n|;/);
    o.pilar = o.pilar.map(function (x) { return String(x).trim(); }).filter(Boolean).slice(0, 8);
    if (!o.pilar.length) o.pilar = DEF.pilar.slice();
    o.siap = !!String(b.nama || '').trim();
    o.namaTampil = String(o.nama || '').trim() || 'Pemilik';
    o.kreditTampil = String(o.kredit || '').trim() || o.namaTampil;
    return o;
  }
  var B = load();

  /* Slogan setelah hook: dipecah jadi 1-3 potong untuk adegan video. Kosong = tanpa slogan. */
  function beats(s) {
    s = String(s || '').replace(/\s+/g, ' ').trim();
    if (!s) return [];
    var parts = s.split(/(?<=[.!?])\s+/).filter(Boolean);
    if (parts.length === 1 && s.split(' ').length > 8) parts = s.split(/(?<=,)\s+/).filter(Boolean);
    while (parts.length > 3) { parts[parts.length - 2] += ' ' + parts.pop(); }
    return parts.map(function (p) {
      var w = p.split(' ');
      return { teks: w.slice(0, 4).join(' '), vo: p };
    });
  }

  /* Pengganti identitas di teks apa pun (prompt, halaman, unduhan). */
  function rep(t) {
    if (typeof t !== 'string' || !t) return t;
    var nama = B.namaTampil, kredit = B.kreditTampil;
    return t
      .replace(/Creative @nexamind\.ai/gi, function () { return kredit; })
      .replace(/CREATIVE @NEXAMIND\.AI/g, function () { return kredit.toUpperCase(); })
      .replace(/ZULNAN/g, function () { return nama.toUpperCase(); })
      .replace(/Zulnan/g, function () { return nama; });
  }

  /* Khusus prompt: audiens contoh milik penjual diganti audiens pemilik. */
  function repPrompt(t) {
    t = rep(t);
    if (typeof t !== 'string') return t;
    var aud = String(B.audiens || '').trim();
    if (aud) t = t.replace(/pemula 25-35 tahun(,? karyawan swasta)?/g, function () { return aud; });
    return t;
  }

  window.ZB = {
    nama: B.namaTampil,
    siap: B.siap,
    slogan: String(B.slogan || '').trim(),
    sloganBeats: beats(B.slogan),
    pilar: B.pilar,
    brief: 'Niche ' + (B.niche || '(belum diisi pemilik: tanyakan dulu)') + '. Topik: ' + B.pilar.join(', ') + '. Positioning: ' + (B.positioning || '(belum diisi)') + '. Audiens: ' + (B.audiens || '(belum diisi)') + '. Platform: ' + (B.platform || DEF.platform) + '. Topik global boleh asal mudah dipahami audiens.',
    pilarTxt: B.pilar.map(function (p, i) { return (i + 1) + ') ' + p; }).join(', '),
    suara: B.suara || DEF.suara,
    fakta: String(B.fakta || '').trim(),
    kredit: B.kreditTampil,
    rep: rep,
    repPrompt: repPrompt,
    raw: B
  };

  /* Unduhan dan isi ZIP memakai profil ini juga. */
  try {
    var enc = TextEncoder.prototype.encode;
    TextEncoder.prototype.encode = function (s) { return enc.call(this, typeof s === 'string' ? rep(s) : s); };
  } catch (e) {}
  try {
    var NB = window.Blob;
    var TEXT = /^(text\/|application\/(json|javascript|xml))/i;
    var PB = function Blob(parts, opts) {
      if (Array.isArray(parts) && opts && TEXT.test(opts.type || '')) parts = parts.map(function (p) { return typeof p === 'string' ? rep(p) : p; });
      return new NB(parts, opts);
    };
    PB.prototype = NB.prototype;
    window.Blob = PB;
  } catch (e) {}

  /* Teks halaman. */
  function walk(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) { if (/Zulnan|ZULNAN|nexamind/i.test(n.nodeValue)) n.nodeValue = rep(n.nodeValue); }
    if (root.querySelectorAll) root.querySelectorAll('[placeholder],[title],[aria-label]').forEach(function (el) {
      ['placeholder', 'title', 'aria-label'].forEach(function (a) { var v = el.getAttribute(a); if (v && /Zulnan|nexamind/i.test(v)) el.setAttribute(a, rep(v)); });
    });
  }
  function startDom() {
    walk(document.body);
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        m.addedNodes.forEach(function (n) { if (n.nodeType === 1) walk(n); else if (n.nodeType === 3 && /Zulnan|ZULNAN|nexamind/i.test(n.nodeValue)) n.nodeValue = rep(n.nodeValue); });
        if (m.type === 'characterData' && /Zulnan|ZULNAN|nexamind/i.test(m.target.nodeValue)) m.target.nodeValue = rep(m.target.nodeValue);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
    ui();
  }

  /* Halaman Pengaturan Brand. */
  var FIELDS = [
    ['nama', 'Nama brand atau pemilik', 'Nama yang muncul di konten dan dipakai agen, mis. "Rina" atau "Toko Rina"', 'input'],
    ['niche', 'Niche', 'Mis. produk digital, kuliner rumahan, skincare', 'input'],
    ['positioning', 'Positioning', 'Satu kalimat: membantu siapa melakukan apa', 'input'],
    ['audiens', 'Audiens', 'Mis. ibu muda 25-35 tahun yang mau mulai jualan online', 'input'],
    ['platform', 'Platform', 'Mis. Instagram, TikTok, Threads', 'input'],
    ['pilar', 'Pilar konten (satu per baris, maks. 8)', 'Topik besar yang jadi fondasi konten', 'area'],
    ['suara', 'Gaya bahasa', 'Mis. santai pakai aku/kamu, hangat, tidak bertele-tele', 'area'],
    ['fakta', 'Fakta brand (hanya ini yang boleh dipakai agen sebagai bukti)', 'Fakta nyata tentang brand atau pemilik, satu per baris. Jangan isi angka yang tidak bisa dibuktikan', 'area'],
    ['slogan', 'Slogan setelah hook video (boleh kosong)', 'Mis. "Halo, aku Rina. Aku bantu kamu mulai jualan online."', 'input'],
    ['kredit', 'Kredit di aplikasi buatan tab Build App', 'Mis. "Dibuat oleh Studio Rina". Kosong = memakai nama brand', 'input']
  ];
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function ui() {
    var css = document.createElement('style');
    css.textContent = '#zbBtn{position:fixed;left:14px;bottom:14px;z-index:60;font:700 12px/1 var(--hud,system-ui);letter-spacing:.14em;padding:11px 14px;border-radius:6px;border:1px solid var(--glow,#3fb6ff);background:rgba(6,16,30,.92);color:var(--ink,#dcebff);cursor:pointer}' +
      '#zbDlg{max-width:640px;width:calc(100% - 32px);border:1px solid var(--line,#1c3a60);border-radius:12px;background:var(--surface-2,#0c1b31);color:var(--ink,#dcebff);padding:18px}' +
      '#zbDlg::backdrop{background:rgba(0,0,0,.6)}#zbDlg label{display:block;font-weight:600;margin:12px 0 4px}#zbDlg small{display:block;color:var(--muted,#8ea7c7);margin-bottom:4px}' +
      '#zbDlg input,#zbDlg textarea{width:100%;box-sizing:border-box;font:inherit;color:inherit;background:var(--bg,#050a12);border:1px solid var(--line,#1c3a60);border-radius:8px;padding:9px 11px}#zbDlg textarea{min-height:76px}' +
      '#zbDlg .row{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}#zbDlg button{font:600 14px system-ui;padding:9px 14px;border-radius:8px;border:1px solid var(--line,#1c3a60);background:var(--surface,#09141f);color:inherit;cursor:pointer}#zbDlg button.p{background:var(--accent,#2f9bff);border-color:var(--accent,#2f9bff);color:#fff}' +
      '@media(max-width:860px){#zbBtn{bottom:auto;top:12px;left:12px}}';
    document.head.appendChild(css);
    var btn = document.createElement('button');
    btn.id = 'zbBtn'; btn.type = 'button'; btn.textContent = 'PENGATURAN BRAND';
    var d = document.createElement('dialog');
    d.id = 'zbDlg';
    d.setAttribute('aria-labelledby', 'zbTitle');
    var raw = B, h = '<h2 id="zbTitle" style="margin:0 0 6px">Pengaturan brand</h2><p style="margin:0;color:var(--muted,#8ea7c7)">Isi sekali. Semua agen memakai data ini. Tersimpan di browser ini; pakai Ekspor/Impor untuk memindahkan ke perangkat lain.</p>';
    FIELDS.forEach(function (f) {
      var v = raw[f[0]];
      if (f[0] === 'pilar') v = (raw.pilar || []).join('\n');
      h += '<label for="zb_' + f[0] + '">' + esc(f[1]) + '</label><small>' + esc(f[2]) + '</small>' +
        (f[3] === 'area' ? '<textarea id="zb_' + f[0] + '">' + esc(v) + '</textarea>' : '<input id="zb_' + f[0] + '" type="text" value="' + esc(v) + '">');
    });
    h += '<div class="row"><button class="p" id="zbSave" type="button">Simpan dan muat ulang</button><button id="zbExp" type="button">Ekspor (.json)</button><button id="zbImp" type="button">Impor (.json)</button><button id="zbClose" type="button">Tutup</button></div><input type="file" id="zbFile" accept=".json,application/json" hidden>';
    d.innerHTML = h;
    document.body.appendChild(btn); document.body.appendChild(d);
    function collect() {
      var o = {};
      FIELDS.forEach(function (f) { var v = d.querySelector('#zb_' + f[0]).value; o[f[0]] = f[0] === 'pilar' ? v.split('\n').map(function (x) { return x.trim(); }).filter(Boolean) : v.trim(); });
      return o;
    }
    function save(o) { try { localStorage.setItem(STORE, JSON.stringify(o)); } catch (e) {} location.reload(); }
    btn.onclick = function () { d.showModal(); };
    d.querySelector('#zbClose').onclick = function () { d.close(); };
    d.querySelector('#zbSave').onclick = function () {
      var o = collect();
      if (!o.nama) { d.querySelector('#zb_nama').focus(); return; }
      save(o);
    };
    d.querySelector('#zbExp').onclick = function () {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(collect(), null, 2)], { type: 'application/octet-stream' }));
      a.download = 'zuno-brand.json'; document.body.appendChild(a); a.click(); a.remove();
    };
    var file = d.querySelector('#zbFile');
    d.querySelector('#zbImp').onclick = function () { file.click(); };
    file.onchange = function () {
      var f = (file.files || [])[0]; if (!f) return;
      f.text().then(function (t) { var o = JSON.parse(t); if (!o || typeof o !== 'object') throw 0; save(o); }).catch(function () { alert('File tidak bisa dibaca. Pilih file zuno-brand.json hasil Ekspor.'); });
    };
    if (!B.siap) setTimeout(function () { d.showModal(); }, 600);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startDom); else startDom();
})();
