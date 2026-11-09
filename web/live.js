/* Zuno live: jembatan halaman ke /api/ai (pengganti window.claude di artifact).
   Halaman Zuno Studio memanggil window.claude.use('sample') persis seperti di artifact,
   jadi logika agen tidak perlu diubah. Halaman memegang kunci akses (disimpan di browser ini).
   Menu Pengaturan AI (window.NexaAI) memilih sambungan:
     server : API key di env server ini (Vercel atau dev-server)          -> /api/*
     lokal  : API key milik pemakai, disimpan di browser perangkat ini,
              dikirim per permintaan ke server ini lewat header x-llm-*   -> /api/*
     vps    : server Nexaoffice di VPS sendiri (key di env VPS)            -> https://alamat-vps/api/* */
(function () {
  'use strict';
  var KEY_STORE = 'zuno-akses';
  function getKey() { try { return localStorage.getItem(KEY_STORE) || ''; } catch (e) { return ''; } }
  function setKey(v) { try { if (v) localStorage.setItem(KEY_STORE, v); else localStorage.removeItem(KEY_STORE); } catch (e) {} }
  window.ZunoKey = { get: getKey, set: setKey };

  var AI_STORE = 'nexa-ai';
  var PENYEDIA = ['gemini', 'claude', 'openai', 'openrouter', 'openai-compatible'];
  function aiGet() {
    var s = {}; try { s = JSON.parse(localStorage.getItem(AI_STORE) || '{}') || {}; } catch (e) { s = {}; }
    if (['server', 'lokal', 'vps'].indexOf(s.mode) < 0) s.mode = 'server';
    if (PENYEDIA.indexOf(s.provider) < 0) s.provider = 'gemini';
    return { mode: s.mode, provider: s.provider, kunci: String(s.kunci || ''), model: String(s.model || ''), base: String(s.base || ''), vps: String(s.vps || '') };
  }
  function aiSet(s) { try { if (s) localStorage.setItem(AI_STORE, JSON.stringify(s)); else localStorage.removeItem(AI_STORE); } catch (e) {} }
  function apiBase() { var s = aiGet(); return s.mode === 'vps' && /^https?:\/\//.test(s.vps) ? s.vps.replace(/\/+$/, '') : ''; }
  function llmHeaders() {
    var s = aiGet(), h = {};
    if (s.mode === 'lokal' && s.kunci) {
      h['x-llm-provider'] = s.provider; h['x-llm-key'] = s.kunci;
      if (s.model) h['x-llm-model'] = s.model;
      if (s.provider === 'openai-compatible' && s.base) h['x-llm-base'] = s.base;
    }
    return h;
  }
  window.NexaAI = { get: aiGet, set: aiSet, base: apiBase, headers: llmHeaders, penyedia: PENYEDIA };

  function blobToB64(b) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () { var s = String(r.result || ''); res({ media_type: b.type || 'image/jpeg', data: s.slice(s.indexOf(',') + 1) }); };
      r.onerror = function () { rej(r.error); };
      r.readAsDataURL(b);
    });
  }

  /* Kabar aliran jawaban untuk pratinjau live di Workspace (event 'nexa:ai' di window):
     {id, jenis: mulai|teks|selesai|gagal, agen: 'R.1' dari "PERAN ANDA" di prompt (atau null), teks}. */
  var nomorPanggilan = 0;
  function kabar(d) { try { window.dispatchEvent(new CustomEvent('nexa:ai', { detail: d })); } catch (e) {} }
  function agenDari(input) {
    var t = typeof input === 'string' ? input : (Array.isArray(input) && input[0] && typeof input[0].content === 'string' ? input[0].content : '');
    var m = /PERAN ANDA: ([A-Z]\.\d)/.exec(t);
    return m ? m[1] : null;
  }
  async function sample(input, opts) {
    opts = opts || {};
    // opts.diam: panggilan yang bukan kerja agen (mis. obrolan chat ZUNO) tidak dikabarkan ke pratinjau.
    if (opts.diam) return sampleInti(input, opts);
    var id = ++nomorPanggilan, agen = agenDari(input), asli = opts.onText;
    kabar({ id: id, jenis: 'mulai', agen: agen, teks: '' });
    var o = Object.assign({}, opts, { onText: function (u) { kabar({ id: id, jenis: 'teks', agen: agen, teks: u.text }); if (asli) asli(u); } });
    try {
      var h = await sampleInti(input, o);
      kabar({ id: id, jenis: 'selesai', agen: agen, teks: h.text });
      return h;
    } catch (e) {
      kabar({ id: id, jenis: 'gagal', agen: agen, teks: (e && e.text) || '', pesan: (e && (e.message || e.code)) || '' });
      throw e;
    }
  }
  async function sampleInti(input, opts) {
    var key = getKey();
    if (!key) { if (window.ZunoHUD) window.ZunoHUD.askKey(); throw { code: 'not_granted', message: 'Kunci akses belum diisi.' }; }
    var images = [];
    if (opts.images && opts.images.length) {
      for (var i = 0; i < opts.images.length; i++) {
        var im = opts.images[i];
        if (im instanceof Blob) images.push(await blobToB64(im));
        else if (im && im.data) images.push(im);
      }
    }
    var body = JSON.stringify({ input: input, images: images, tier: opts.modelTier === 'default' ? 'default' : 'quick', effort: opts.effort || null });
    var r;
    try {
      r = await fetch(apiBase() + '/api/ai', { method: 'POST', headers: Object.assign({ 'content-type': 'application/json', 'x-zuno-key': key }, llmHeaders()), body: body, signal: opts.signal });
    } catch (e) {
      if (opts.signal && opts.signal.aborted) throw { code: 'cancelled' };
      throw { code: 'upstream_error', message: apiBase() ? 'Server VPS tidak bisa dihubungi. Cek alamatnya di Pengaturan AI.' : 'Koneksi ke server Zuno gagal.' };
    }
    if (!r.ok) {
      var j = {}; try { j = await r.json(); } catch (e) {}
      if (r.status === 401) { setKey(''); if (window.ZunoHUD) window.ZunoHUD.askKey(); }
      throw { code: j.code || (r.status === 429 ? 'rate_limited' : 'upstream_error'), message: j.message || ('HTTP ' + r.status) };
    }
    var reader = r.body.getReader(), dec = new TextDecoder(), buf = '', text = '', done = null, err = null;
    try {
      for (;;) {
        var c = await reader.read();
        if (c.done) break;
        buf += dec.decode(c.value, { stream: true });
        var nl;
        while ((nl = buf.indexOf('\n')) > -1) {
          var line = buf.slice(0, nl); buf = buf.slice(nl + 1);
          if (!line.trim()) continue;
          var ev; try { ev = JSON.parse(line); } catch (e) { continue; }
          if (ev.t === 'delta') { text += ev.text; if (opts.onText) { try { opts.onText({ text: text, delta: ev.text }); } catch (e) {} } }
          else if (ev.t === 'done') done = ev;
          else if (ev.t === 'error') err = ev;
        }
      }
    } catch (e) {
      if (opts.signal && opts.signal.aborted) throw { code: 'cancelled' };
      throw { code: 'upstream_error', message: 'Aliran jawaban terputus.', text: text };
    }
    if (err) throw { code: err.code === 'server_key' ? 'upstream_error' : err.code, message: err.code === 'user_key' ? 'API key di Pengaturan AI ditolak penyedia: ' + err.message : err.message, text: text };
    if (!done) throw { code: 'upstream_error', message: 'Server berhenti sebelum jawaban selesai (batas waktu).', text: text };
    if (done.stop === 'refusal') throw { code: 'refused', message: 'Model menolak bagian ini.', text: text };
    if (window.ZunoHUD) window.ZunoHUD.model(done.model);
    return { text: text, truncated: done.stop === 'max_tokens', modelTierApplied: opts.modelTier || 'quick' };
  }
  sample.limits = function () { return Promise.resolve({ images: true }); };

  /* Riset web untuk Peneliti Tren: Google Trends, Google News, Hacker News lewat /api/riset. */
  window.ZunoRiset = async function (queries) {
    var key = getKey();
    if (!key) throw { code: 'not_granted', message: 'Kunci akses belum diisi.' };
    var q = (queries || []).map(function (x) { return String(x).replace(/\|/g, ' ').trim(); }).filter(Boolean).slice(0, 4).join('|');
    var r = await fetch(apiBase() + '/api/riset?q=' + encodeURIComponent(q), { headers: { 'x-zuno-key': key } });
    if (!r.ok) { var j = {}; try { j = await r.json(); } catch (e) {} throw { code: j.code || (r.status === 401 ? 'not_granted' : 'upstream_error'), message: j.message || ('Riset web gagal (HTTP ' + r.status + ').') }; }
    return r.json();
  };

  /* Gambar cover dari sumber (og:image artikel / thumbnail tren) atau foto berlisensi bebas Wikimedia lewat /api/gambar. */
  window.ZunoGambar = async function (q) {
    var key = getKey();
    if (!key) throw { code: 'not_granted', message: 'Kunci akses belum diisi.' };
    var qs = q && q.cari ? 'cari=' + encodeURIComponent(q.cari) : 'u=' + encodeURIComponent((q && q.u) || '');
    var r = await fetch(apiBase() + '/api/gambar?' + qs, { headers: { 'x-zuno-key': key } });
    if (!r.ok) { var j = {}; try { j = await r.json(); } catch (e) {} throw { code: j.code || 'no_image', message: j.message || ('HTTP ' + r.status) }; }
    var dec = function (v) { try { return decodeURIComponent(v || ''); } catch (e) { return v || ''; } };
    return { blob: await r.blob(), sumber: dec(r.headers.get('x-zuno-sumber')), asal: dec(r.headers.get('x-zuno-asal')) };
  };

  window.claude = {
    use: function (name) {
      if (name === 'sample') return Promise.resolve(sample);
      return Promise.reject({ code: 'not_declared' }); // downloads: halaman memakai unduhan biasa
    }
  };
})();
