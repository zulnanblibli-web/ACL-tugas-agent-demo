/* Zuno live: jembatan halaman ke /api/ai (pengganti window.claude di artifact).
   Halaman Zuno Studio memanggil window.claude.use('sample') persis seperti di artifact,
   jadi logika agen tidak perlu diubah. API key tetap di server; halaman hanya memegang
   kunci akses Zuno (disimpan di browser ini). */
(function () {
  'use strict';
  var KEY_STORE = 'zuno-akses';
  function getKey() { try { return localStorage.getItem(KEY_STORE) || ''; } catch (e) { return ''; } }
  function setKey(v) { try { if (v) localStorage.setItem(KEY_STORE, v); else localStorage.removeItem(KEY_STORE); } catch (e) {} }
  window.ZunoKey = { get: getKey, set: setKey };

  function blobToB64(b) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () { var s = String(r.result || ''); res({ media_type: b.type || 'image/jpeg', data: s.slice(s.indexOf(',') + 1) }); };
      r.onerror = function () { rej(r.error); };
      r.readAsDataURL(b);
    });
  }

  async function sample(input, opts) {
    opts = opts || {};
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
      r = await fetch('/api/ai', { method: 'POST', headers: { 'content-type': 'application/json', 'x-zuno-key': key }, body: body, signal: opts.signal });
    } catch (e) {
      if (opts.signal && opts.signal.aborted) throw { code: 'cancelled' };
      throw { code: 'upstream_error', message: 'Koneksi ke server Zuno gagal.' };
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
    if (err) throw { code: err.code === 'server_key' ? 'upstream_error' : err.code, message: err.message, text: text };
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
    var r = await fetch('/api/riset?q=' + encodeURIComponent(q), { headers: { 'x-zuno-key': key } });
    if (!r.ok) { var j = {}; try { j = await r.json(); } catch (e) {} throw { code: j.code || (r.status === 401 ? 'not_granted' : 'upstream_error'), message: j.message || ('Riset web gagal (HTTP ' + r.status + ').') }; }
    return r.json();
  };

  /* Gambar cover dari sumber (og:image artikel / thumbnail tren) atau foto berlisensi bebas Wikimedia lewat /api/gambar. */
  window.ZunoGambar = async function (q) {
    var key = getKey();
    if (!key) throw { code: 'not_granted', message: 'Kunci akses belum diisi.' };
    var qs = q && q.cari ? 'cari=' + encodeURIComponent(q.cari) : 'u=' + encodeURIComponent((q && q.u) || '');
    var r = await fetch('/api/gambar?' + qs, { headers: { 'x-zuno-key': key } });
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
