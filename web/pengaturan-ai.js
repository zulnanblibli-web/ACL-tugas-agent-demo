/* Nexaoffice / Zuno: menu Pengaturan AI (dialog #keyDlg).
   Tiga sambungan: server ini (key di env), API key lokal (disimpan di browser ini), atau server VPS sendiri.
   Isian key tidak pernah ditampilkan ulang: kolom kosong saat dibuka, "tersimpan" ditandai di placeholder. */
(function () {
  'use strict';
  function $(id) { return document.getElementById(id); }
  function mode() { var r = document.querySelector('input[name="aiMode"]:checked'); return r ? r.value : 'server'; }
  function tampil() {
    var m = mode();
    document.querySelectorAll('.ai-blok').forEach(function (b) { b.hidden = b.getAttribute('data-blok') !== m; });
    var p = $('aiProv'), d = document.querySelector('[data-prov="openai-compatible"]');
    if (p && d) d.hidden = p.value !== 'openai-compatible';
  }
  function isi() {
    if (!window.NexaAI) return;
    var s = window.NexaAI.get();
    document.querySelectorAll('input[name="aiMode"]').forEach(function (r) { r.checked = r.value === s.mode; });
    $('aiProv').value = s.provider; $('aiModel').value = s.model; $('aiBase').value = s.base; $('aiVps').value = s.vps;
    $('aiKunci').value = '';
    $('aiKunci').placeholder = s.kunci ? 'Tersimpan di browser ini (isi untuk mengganti)' : 'Tempel API key di sini';
    $('keyIn').placeholder = window.ZunoKey && window.ZunoKey.get() ? 'Tersimpan (isi untuk mengganti)' : 'Kunci akses';
    $('aiCek').textContent = '';
    tampil();
  }
  function kumpul() {
    var lama = window.NexaAI.get();
    var vps = $('aiVps').value.trim().replace(/\/+$/, '');
    return {
      mode: mode(), provider: $('aiProv').value, model: $('aiModel').value.trim(), base: $('aiBase').value.trim(),
      kunci: $('aiKunci').value.trim() || lama.kunci, vps: vps
    };
  }
  function salah(s) {
    if (s.mode === 'lokal' && !s.kunci) return 'Isi API key penyedia dulu.';
    if (s.mode === 'lokal' && s.provider === 'openai-compatible' && !/^https?:\/\//.test(s.base)) return 'Isi alamat endpoint (https://...).';
    if (s.mode === 'vps' && !/^https?:\/\//.test(s.vps)) return 'Isi alamat server VPS (https://...).';
    if (s.mode === 'vps' && /^http:\/\//.test(s.vps) && location.protocol === 'https:') return 'Halaman ini https: alamat VPS juga harus https:// (pasang domain + Caddy, lihat panduan).';
    return '';
  }
  function simpan(s) {
    window.NexaAI.set(s);
    var k = $('keyIn').value.trim(); if (k && window.ZunoKey) window.ZunoKey.set(k);
    if (window.ZunoHUD && window.ZunoHUD.status) window.ZunoHUD.status();
    document.dispatchEvent(new CustomEvent('nexa-ai-berubah'));
  }
  async function tes() {
    var out = $('aiCek'), s = kumpul(), e = salah(s);
    if (e) { out.textContent = e; return; }
    var kunciLama = window.ZunoKey ? window.ZunoKey.get() : '';
    simpan(s);
    out.textContent = 'Mengetes sambungan…';
    try {
      var kunci = window.ZunoKey ? window.ZunoKey.get() : '';
      if (!kunci) throw { message: 'Isi kunci akses server.' };
      // Status server hanya terbuka untuk pemegang kunci akses.
      var r = await fetch(window.NexaAI.base() + '/api/status', { cache: 'no-store', headers: { 'x-zuno-key': kunci } });
      if (!r.ok) throw { message: 'Server membalas HTTP ' + r.status };
      var j = await r.json();
      if (j.terkunci) throw { message: 'Kunci akses salah, atau server belum punya ZUNO_ACCESS_KEY.', code: 'not_granted' };
      if (!j.access_set) throw { message: 'Server belum punya ZUNO_ACCESS_KEY.' };
      if (s.mode === 'lokal' && j.kunci_pengguna === false) throw { message: 'Server ini menolak API key dari halaman (NEXA_KUNCI_PENGGUNA=off).' };
      if (s.mode !== 'lokal' && !j.ai_key_set) throw { message: 'Server belum punya API key AI. Isi di env server atau pakai mode API key lokal.' };
      var sample = await window.claude.use('sample');
      var h = await sample('Balas satu kata saja: SIAP', { modelTier: 'quick', effort: 'low' });
      out.textContent = 'Tersambung. Jawaban AI: ' + String(h.text || '').trim().slice(0, 40);
    } catch (err) {
      out.textContent = 'Belum tersambung: ' + ((err && err.message) || 'galat tak dikenal');
      if (err && err.code === 'not_granted' && kunciLama && window.ZunoKey) window.ZunoKey.set(kunciLama);
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    var d = $('keyDlg'); if (!d || !$('aiProv')) return;
    document.querySelectorAll('input[name="aiMode"]').forEach(function (r) { r.addEventListener('change', tampil); });
    $('aiProv').addEventListener('change', tampil);
    // Dialog dibuka oleh hud.js (askKey). Isi ulang setiap kali terbuka.
    new MutationObserver(function () { if (d.open) isi(); }).observe(d, { attributes: true, attributeFilter: ['open'] });
    $('keyForm').addEventListener('submit', function (ev) {
      var tombol = ev.submitter || document.activeElement;
      if (tombol && tombol.value === 'cancel') return;
      var s = kumpul(), e = salah(s);
      if (e) { ev.preventDefault(); $('aiCek').textContent = e; return; }
      simpan(s);
    });
    $('aiTes').addEventListener('click', tes);
    $('keyClear').addEventListener('click', function () { window.NexaAI.set(null); if (window.ZunoHUD && window.ZunoHUD.status) window.ZunoHUD.status(); });
  });
})();
