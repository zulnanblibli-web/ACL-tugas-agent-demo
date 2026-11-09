// Uji situs utama Nexaoffice (web/index.html) + serah terima ke ruang kerja (web/studio.html), /api/ai tiruan.
//   node web/build.mjs && NODE_PATH=$(npm root -g) node tests/nexaoffice-situs-test.js
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..', 'web');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.glb': 'model/gltf-binary' };
let gagal = 0;
const ok = (nama, syarat) => { console.log((syarat ? 'OK    ' : 'GAGAL ') + nama); if (!syarat) gagal++; };

(async () => {
  const srv = http.createServer((q, r) => {
    let f = path.join(root, decodeURIComponent(q.url.split('?')[0]));
    if (f.endsWith(path.sep) || f.endsWith('/')) f += 'index.html';
    fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); r.end(d); });
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  const U = 'http://127.0.0.1:' + srv.address().port;
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium' });
  const KUNCI = 'kunci-uji-nexaoffice-123';
  try {
    // ---------- 1. halaman utama ----------
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const p = await ctx.newPage();
    const errors = [], gagalMuat = [];
    p.on('pageerror', (e) => errors.push(e.message));
    p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    p.on('response', (r) => { if (r.status() >= 400 && !/\/api\/ai$/.test(r.url())) gagalMuat.push(r.status() + ' ' + r.url()); });
    const aiCalls = [];
    let modeAI = 'rencana-build';
    await ctx.route('**/api/ai', async (route) => {
      const req = route.request();
      const body = JSON.parse(req.postData() || '{}');
      const input = typeof body.input === 'string' ? body.input : (body.input || []).map((m) => m.content).join('\n');
      aiCalls.push({ key: req.headers()['x-zuno-key'], input, page: req.frame().url() });
      if (req.headers()['x-zuno-key'] !== KUNCI) return route.fulfill({ status: 401, contentType: 'application/json', body: JSON.stringify({ code: 'not_granted', message: 'Kunci akses Zuno salah atau kosong.' }) });
      let teks = '{}';
      if (/Kamu ZUNO, Lead di kantor AI Nexaoffice/.test(input)) {
        teks = modeAI === 'rencana-build'
          ? JSON.stringify({ divisi: 'build', ringkasan: 'Membangun aplikasi absensi siswa.', tugas: [{ id: 'T.1', tugas: 'Susun PRD' }, { id: 'T.2', tugas: 'Desain layar' }, { id: 'T.3', tugas: 'Tulis kode' }, { id: 'T.4', tugas: 'Uji' }] })
          : JSON.stringify({ divisi: 'konten', ringkasan: 'Carousel 5 slide soal AI.', tugas: [{ id: 'R.1', tugas: 'Riset bahan' }, { id: 'P.1', tugas: 'Naskah' }, { id: 'D.1', tugas: 'Desain' }] });
      }
      const lines = [{ t: 'delta', text: teks.slice(0, 10) }, { t: 'delta', text: teks.slice(10) }, { t: 'done', stop: 'end_turn', model: 'tiruan' }];
      return route.fulfill({ status: 200, contentType: 'application/x-ndjson', body: lines.map((l) => JSON.stringify(l)).join('\n') + '\n' });
    });
    await ctx.route('**/api/status', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ online: true, provider: 'claude', model: 'tiruan', ai_key_set: true, access_set: true, riset: { aktif: false } }) }));
    await ctx.route('**/api/riset**', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ hasil: [] }) }));

    await p.goto(U + '/');
    await p.waitForLoadState('networkidle');
    ok('judul halaman Nexaoffice', /Nexaoffice/.test(await p.title()));
    ok('nama Nexaoffice di pojok kiri atas', await p.$eval('header .wordmark', (e) => { const r = e.getBoundingClientRect(); return e.textContent.trim() === 'Nexaoffice' && r.left < 200 && r.top < 40; }));
    const anchors = await p.$$eval('.nav-links a', (as) => as.map((a) => a.getAttribute('href')));
    ok('menu: 7 tautan dan semua bagian ada (' + anchors.join(' ') + ')', anchors.length === 7 && (await p.evaluate((a) => a.every((h) => !!document.querySelector(h)), anchors)));
    ok('font Antonio dan Onest termuat', await p.evaluate(async () => { await document.fonts.ready; return document.fonts.check('700 20px Antonio') && document.fonts.check('400 16px Onest'); }));
    ok('gambar kantor 3D dan karakter termuat', await p.evaluate(async () => { const im = [...document.images]; im.forEach((i) => { i.loading = 'eager'; }); await Promise.all(im.map((i) => i.decode().catch(() => null))); return im.length >= 21 && im.every((i) => i.naturalWidth > 0); }));
    for (const a of ['/kantor.html', '/office/office.bundle.js', '/office/office.css', '/assets/agents/T.5.glb', '/assets/themes/senja.png', '/assets/nexaoffice-alur.mp4', '/assets/nexaoffice-alur.webm', '/studio.html', '/serah.js']) {
      const r = await p.request.get(U + a); ok('aset ' + a + ' 200', r.status() === 200);
    }
    { // agen harus sama di ruang kerja, kantor 3D, dan halaman utama: 18
      const studio = fs.readFileSync(path.join(root, 'studio.html'), 'utf8');
      const roles = [...new Set([...studio.matchAll(/\n '([LRPDEQMT]\.\d)':\['/g)].map((m) => m[1]))].sort();
      const kantor = [...new Set([...fs.readFileSync(path.join(root, 'office', 'karakter.html'), 'utf8').matchAll(/<span class="code">([A-Z]\.\d) /g)].map((m) => m[1]))].sort();
      const situs = (await p.$$eval('#timGrid img', (im) => im.map((i) => i.getAttribute('src').match(/agents\/(.+)\.png/)[1]))).sort();
      ok('18 agen sama di ruang kerja (' + roles.length + '), kantor 3D (' + kantor.length + '), halaman utama (' + situs.length + ')', roles.length === 18 && roles.join() === kantor.join() && kantor.join() === situs.join());
      ok('ruang kerja: Bima (E.2), Fira (E.3), Damar (T.5) benar-benar dipanggil', /ask\('E\.2'/.test(studio) && /ask\('E\.3'/.test(studio) && /ask\('T\.5'/.test(studio));
    }
    ok('tab Cara kerja: Build App bisa dibuka', await (async () => { await p.click('#tab-build'); return !(await p.$eval('#panel-build', (e) => e.hidden)) && (await p.$eval('#panel-konten', (e) => e.hidden)); })());
    await p.$eval('#alurVideo', (v) => v.scrollIntoView({ block: 'center' }));
    await p.waitForFunction(() => !document.getElementById('alurVideo').paused, null, { timeout: 8000 }).catch(() => {});
    ok('video alur (WebM) jalan sendiri saat terlihat', await p.$eval('#alurVideo', (v) => !v.paused && /\.webm$/.test(v.currentSrc)) && (await p.textContent('#videoBtn')) === 'Jeda animasi');
    await p.click('#videoBtn');
    ok('video alur bisa dijeda', await p.$eval('#alurVideo', (v) => v.paused) && (await p.textContent('#videoBtn')) === 'Putar animasi');
    await p.click('#videoBtn');
    await p.waitForFunction(() => !document.getElementById('alurVideo').paused, null, { timeout: 8000 }).catch(() => {});
    ok('video alur bisa diputar lagi', await p.$eval('#alurVideo', (v) => !v.paused) && (await p.getAttribute('#videoBtn', 'aria-pressed')) === 'true');
    await p.evaluate(() => window.scrollTo(0, 0));

    // ---------- 2. tanpa kunci: pratinjau, tanpa AI ----------
    await p.fill('#perintahInput', 'bikin aplikasi absensi siswa untuk guru');
    await p.click('#kirim');
    await p.waitForSelector('#dispatch .tugas li');
    ok('tanpa kunci: pratinjau Divisi Build App (otomatis dari kata "aplikasi")', /Divisi Build App/.test(await p.textContent('#dispatch')) && /belum memakai AI/.test(await p.textContent('#dispatch')));
    ok('tanpa kunci: tidak ada panggilan /api/ai', aiCalls.length === 0);
    ok('tanpa kunci: kotak kunci akses muncul', await p.isVisible('#kunciBox'));

    // ---------- 3. kunci salah: pesan jelas ----------
    await p.fill('#kunciInput', 'salah');
    await p.click('#kunciSimpan');
    await p.waitForSelector('#dispatch .galat');
    ok('kunci salah: pesan "Kunci akses salah"', /Kunci akses salah/.test(await p.textContent('#dispatch')));

    // ---------- 4. kunci benar: Lead membagi tugas lalu ruang kerja langsung jalan (Build App) ----------
    await p.fill('#kunciInput', KUNCI);
    await Promise.all([p.waitForURL(/studio\.html/, { timeout: 15000 }), p.click('#kunciSimpan')]);
    ok('Lead dipanggil dengan kunci akses', aiCalls.some((c) => c.key === KUNCI && /Kamu ZUNO, Lead/.test(c.input)));
    await p.waitForFunction(() => document.getElementById('breq') && document.getElementById('breq').value.length > 0, null, { timeout: 15000 });
    ok('ruang kerja: permintaan build terisi', (await p.inputValue('#breq')) === 'bikin aplikasi absensi siswa untuk guru');
    ok('ruang kerja: tab Build App aktif', (await p.getAttribute('#wsB', 'aria-selected')) === 'true');
    await p.waitForFunction((n) => window.__nx === undefined, null).catch(() => {});
    await p.waitForTimeout(1500);
    ok('ruang kerja: Build App langsung berjalan (Arsitek T.1 memanggil AI)', aiCalls.some((c) => /studio\.html/.test(c.page) && !/Kamu ZUNO, Lead/.test(c.input)));
    ok('alamat dibersihkan (muat ulang tidak menjalankan dua kali)', !/perintah=/.test(p.url()));
    ok('ruang kerja: Nexaoffice di kiri atas mengarah ke /', (await p.getAttribute('header .wordmark', 'href')) === '/' && (await p.title()) === 'Nexaoffice · Ruang Kerja');
    ok('ruang kerja: tampilan Nexaoffice (tanpa HUD lama, huruf Antonio)', !(await p.$('.hud-title')) && !(await p.$('link[href="/hud.css"]')) && (await p.$eval('h1', (e) => getComputedStyle(e).fontFamily)).includes('Antonio'));

    // ---------- 5. divisi Konten ----------
    modeAI = 'rencana-konten';
    const p2 = await ctx.newPage();
    p2.on('pageerror', (e) => errors.push(e.message));
    await p2.goto(U + '/');
    await p2.fill('#perintahInput', 'carousel 5 slide soal AI untuk laporan kantor');
    await p2.check('input[name="divisi"][value="konten"]');
    const sebelum = aiCalls.length;
    await Promise.all([p2.waitForURL(/studio\.html/, { timeout: 15000 }), p2.click('#kirim')]);
    await p2.waitForFunction(() => document.getElementById('cmd') && document.getElementById('cmd').value.length > 0, null, { timeout: 15000 });
    ok('konten: perintah masuk ke ruang kerja Konten', (await p2.inputValue('#cmd')) === 'carousel 5 slide soal AI untuk laporan kantor');
    await p2.waitForTimeout(1500);
    ok('konten: tim Konten langsung berjalan', aiCalls.slice(sebelum).some((c) => /studio\.html/.test(c.page)));

    // ---------- 6. HP: menu ----------
    const m = await browser.newPage({ viewport: { width: 375, height: 800 } });
    await m.goto(U + '/');
    ok('HP: tautan menu tersembunyi sebelum Menu diklik', !(await m.isVisible('.nav-links a[href="#biaya"]')));
    await m.click('#menuBtn');
    ok('HP: Menu membuka tautan', await m.isVisible('.nav-links a[href="#biaya"]') && (await m.getAttribute('#menuBtn', 'aria-expanded')) === 'true');
    ok('HP: tidak ada geser samping', await m.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));

    ok('tanpa galat JS (' + errors.join(' | ').slice(0, 300) + ')', errors.filter((e) => !/401 \(Unauthorized\)/.test(e)).length === 0);
    ok('tanpa aset gagal dimuat (' + gagalMuat.join(' | ').slice(0, 300) + ')', gagalMuat.length === 0);
  } finally {
    await browser.close(); srv.close();
  }
  console.log(gagal ? 'HASIL: ' + gagal + ' GAGAL' : 'HASIL: SEMUA LOLOS');
  process.exit(gagal ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
