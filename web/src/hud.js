/* Zuno HUD: panel status, inti, dan diagram "Cara kerja" yang ikut alur proses asli.
   Membaca keadaan dari panel Proses (#tracks / #btracks), tidak mengubah logika agen. */
(function () {
  'use strict';
  function $(id) { return document.getElementById(id); }
  var IC = {
    lead: '<path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7 4 8.8l5.5-.8z"/>',
    riset: '<circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/>',
    prod: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    desain: '<circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1.3"/><circle cx="14" cy="9" r="1.3"/><circle cx="15" cy="14" r="1.3"/>',
    edit: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.5l5 2.5-5 2.5z"/>',
    mutu: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    mkt: '<path d="M4 10v4h3l6 4V6L7 10z"/><path d="M17 9a4 4 0 010 6"/>',
    t1: '<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-6h4v6"/>',
    t2: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 9v11"/>',
    t3: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>',
    t4: '<path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/>',
    gate: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>'
  };
  var DEF = {
    k: [['lead', 'Lead', 'Orkestraror · Juru Kabar'], ['riset', 'Riset', 'Bahan & brief'], ['prod', 'Produksi', 'Naskah & uji retensi'], ['desain', 'Desain', 'Visual & Kartu Gaya'], ['edit', 'Editing', 'Render & paket'], ['mutu', 'Mutu', 'Catatan, tanpa veto'], ['mkt', 'Marketing', 'Setelah lu setuju']],
    b: [['lead', 'Lead', 'Terima permintaan'], ['t1', 'T.1 Arsitek', 'Ruang lingkup'], ['gate', 'Gerbang 1', 'Persetujuan lu'], ['t2', 'T.2 Desainer', 'UI/UX'], ['gate', 'Gerbang 2', 'Persetujuan lu'], ['t3', 'T.3 Pengembang', 'Kode'], ['t4', 'T.4 Penguji', 'Uji & panduan'], ['gate', 'Gerbang 3', 'Persetujuan lu']]
  };
  var LBL = { wait: 'MENUNGGU', run: 'JALAN', done: 'SELESAI', bad: 'TERTAHAN' };

  function iconFor(key, name) {
    if (/gerbang/i.test(name)) return IC.gate;
    var m = /^T\.(\d)/.exec(name); if (m) return IC['t' + m[1]] || IC.t3;
    var map = { lead: 'lead', riset: 'riset', produksi: 'prod', desain: 'desain', editing: 'edit', mutu: 'mutu', marketing: 'mkt' };
    var k = map[String(name).toLowerCase().split(' ')[0]];
    return IC[k || key] || IC.lead;
  }

  function isBuild() { var b = $('wsBuild'); return b && !b.classList.contains('hidden'); }

  function readSteps() {
    var box = $(isBuild() ? 'btracks' : 'tracks');
    var rows = box ? box.querySelectorAll('.track') : [];
    if (rows.length) {
      return Array.prototype.map.call(rows, function (r) {
        var n = (r.querySelector('.tname') || {}).textContent || '';
        var sub = (r.querySelector('.tact') || {}).textContent || '';
        return { name: n, sub: sub === '—' ? ((r.querySelector('.muted') || {}).textContent || '') : sub, s: r.getAttribute('data-s') || 'wait' };
      });
    }
    return DEF[isBuild() ? 'b' : 'k'].map(function (d) { return { key: d[0], name: d[1], sub: d[2], s: 'wait' }; });
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var lastSig = '';
  function render() {
    var steps = readSteps();
    var sig = (isBuild() ? 'b' : 'k') + steps.map(function (s) { return s.name + s.s + s.sub; }).join('|');
    var running = ['stop', 'bstop'].some(function (id) { var b = $(id); return b && !b.disabled; });
    var core = $('hCore'); if (core) core.setAttribute('data-run', running ? '1' : '0');
    if ($('hCoreTxt')) $('hCoreTxt').textContent = running ? 'BEKERJA' : 'STANDBY';
    if ($('hMode')) $('hMode').textContent = running ? 'BEKERJA' : 'SIAGA';
    if (sig === lastSig) return;
    lastSig = sig;
    var done = steps.filter(function (s) { return s.s === 'done'; }).length;
    var run = steps.filter(function (s) { return s.s === 'run'; }).length;
    var pct = steps.length ? Math.round((done + run * 0.5) / steps.length * 100) : 0;
    if ($('hBar')) $('hBar').style.width = pct + '%';
    if ($('hPct')) $('hPct').textContent = pct + '%';
    if ($('hAktif')) $('hAktif').textContent = String(run);
    var f = $('hFlow');
    if (f) {
      f.innerHTML = steps.map(function (s, i) {
        return (i ? '<span class="arr" aria-hidden="true">›</span>' : '') +
          '<div class="node" data-s="' + s.s + '"><div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">' + iconFor(s.key, s.name) + '</svg></div>' +
          '<b>' + esc(s.name) + '</b><span>' + esc(s.sub).slice(0, 70) + '</span><em>' + LBL[s.s] + '</em></div>';
      }).join('');
    }
    var note = $('hFlowNote');
    if (note) note.textContent = isBuild()
      ? 'Alur Build App (Divisi Engineering): terpisah dari alur konten. Tiap gerbang nunggu persetujuan lu.'
      : 'Alur Konten (divisi kreatif): Lead bagi tugas, divisi kerja berurutan, Mutu cuma kasih catatan, lu yang approve.';
  }

  function askKey() {
    var d = $('keyDlg'); if (!d) return;
    $('keyIn').value = '';
    if (typeof d.showModal === 'function') { if (!d.open) d.showModal(); } else d.setAttribute('open', '');
  }
  window.ZunoHUD = {
    askKey: askKey,
    model: function (m) { if (m && $('hModel')) $('hModel').textContent = m; }
  };

  function status() {
    fetch('/api/status', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) {
      var ok = j.ai_key_set && j.access_set;
      $('hStat').textContent = ok ? 'ONLINE' : 'BELUM DISETEL';
      $('hStat').className = 'val ' + (ok ? 'ok' : 'warn');
      $('hModel').textContent = j.provider + ' · ' + j.model;
      var NM = { claude: 'Claude', gemini: 'Gemini', openai: 'OpenAI', openrouter: 'OpenRouter' };
      if ($('hBrain')) $('hBrain').textContent = NM[j.provider] || j.provider;
      var info = $('capinfo');
      if (info && !ok) { info.className = 'banner warn'; info.classList.remove('hidden'); info.textContent = 'Server belum lengkap: ' + (!j.ai_key_set ? 'API key penyedia AI belum diisi di Vercel. ' : '') + (!j.access_set ? 'ZUNO_ACCESS_KEY belum diisi di Vercel.' : ''); }
    }).catch(function () { $('hStat').textContent = 'OFFLINE'; $('hStat').className = 'val bad'; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var form = $('keyForm');
    if (form) form.addEventListener('submit', function () {
      var v = $('keyIn').value.trim();
      if (document.activeElement && document.activeElement.value === 'cancel') return;
      if (v) window.ZunoKey.set(v);
    });
    if ($('keyClear')) $('keyClear').addEventListener('click', function () { window.ZunoKey.set(''); $('keyDlg').close(); });
    if ($('hKey')) $('hKey').addEventListener('click', askKey);
    var mo = new MutationObserver(render);
    ['tracks', 'btracks', 'wsBuild', 'stop', 'bstop'].forEach(function (id) { var el = $(id); if (el) mo.observe(el, { childList: true, subtree: true, attributes: true, characterData: true }); });
    render();
    status();
    if (!window.ZunoKey.get()) setTimeout(askKey, 400);
  });
})();
