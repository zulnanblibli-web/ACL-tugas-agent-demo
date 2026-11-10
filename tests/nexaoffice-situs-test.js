// Uji Nexaoffice: halaman utama (simulasi agen, kantor 3D sematan), Workspace (/studio.html: kantor 3D kiri ikut status asli,
// perintah + format kanan, hasil kerja agen live,
// menu Pengaturan AI: server / API key lokal / VPS), 18 agen sama di semua tempat termasuk agents/. /api tiruan.
//   node web/build.mjs && NODE_PATH=$(npm root -g) node tests/nexaoffice-situs-test.js
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..', 'web');
const MIME = { '.json': 'application/json', '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.glb': 'model/gltf-binary', '.jpg': 'image/jpeg' };
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
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const KUNCI = 'kunci-uji-nexaoffice-123';
  try {
    // ---------- 1. halaman utama ----------
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const p = await ctx.newPage();
    const errors = [], gagalMuat = [];
    p.on('pageerror', (e) => errors.push(e.message));
    p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    p.on('response', (r) => { if (r.status() >= 400 && !/\/api\/ai$|\/kantor\.html$/.test(r.url())) gagalMuat.push(r.status() + ' ' + r.url()); });
    const aiCalls = [];
    let modeAI = 'rencana-build';
    await ctx.route('**/api/ai', async (route) => {
      const req = route.request();
      const body = JSON.parse(req.postData() || '{}');
      const input = typeof body.input === 'string' ? body.input : (body.input || []).map((m) => m.content).join('\n');
      aiCalls.push({ key: req.headers()['x-zuno-key'], input, page: req.frame().url(), url: req.url(), h: req.headers() });
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
    const statusCalls = [];
    await ctx.route('**/api/status', (route) => { statusCalls.push(route.request().url()); return route.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify({ online: true, provider: 'claude', model: 'tiruan', ai_key_set: true, access_set: true, kunci_pengguna: true, server: 'vercel', riset: { aktif: false } }) }); });
    await ctx.route('**/api/riset**', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ hasil: [] }) }));

    await p.goto(U + '/');
    await p.waitForLoadState('load');
    ok('judul halaman Nexaoffice', /Nexaoffice/.test(await p.title()));
    ok('nama Nexaoffice di pojok kiri atas', await p.$eval('header .wordmark', (e) => { const r = e.getBoundingClientRect(); return e.textContent.trim() === 'Nexaoffice' && r.left < 200 && r.top < 40; }));
    const anchors = await p.$$eval('.nav-links a', (as) => as.map((a) => a.getAttribute('href')));
    const labels = await p.$$eval('.nav-links a', (as) => as.map((a) => a.textContent.trim()));
    ok('menu: 9 tautan berurutan (ala referensi + Chat), semua bagian ada (' + labels.join(' | ') + ')', labels.join('|') === 'Contoh hasil|Pilihan tema|Workspace|Chat|Isi kit|Panduan|Harga|Tanya jawab|Produk lain' && (await p.evaluate((a) => a.filter((h) => h[0] === '#').every((h) => !!document.querySelector(h)), anchors)));
    ok('menu: Workspace ke /studio.html, tombol Pesan kit ke Harga', (await p.getAttribute('.nav-links a:text-is("Workspace")', 'href')) === '/studio.html' && (await p.textContent('.nav-cta')).trim() === 'Pesan kit' && (await p.getAttribute('.nav-cta', 'href')) === '#biaya');
    // Bahasa visual The Grotto (2026-11-10): judul Georgia gading, isi Arial, latar hijau hutan, aksen emas.
    const gaya = await p.evaluate(() => { const cs = (q) => getComputedStyle(document.querySelector(q)); return { h1: cs('h1').fontFamily, h1warna: cs('h1').color, body: cs('body').fontFamily, latar: cs('body').backgroundColor, tombol: cs('.btn-primary').backgroundColor, tombolTeks: cs('.btn-primary').color }; });
    ok('palet The Grotto: judul serif gading, isi Arial, latar hijau, tombol emas (' + JSON.stringify(gaya) + ')', /Georgia/.test(gaya.h1) && gaya.h1warna === 'rgb(251, 240, 220)' && /^Arial/.test(gaya.body) && gaya.latar === 'rgb(20, 36, 31)' && gaya.tombol === 'rgb(214, 182, 123)' && gaya.tombolTeks === 'rgb(20, 36, 31)');
    ok('gambar karakter termuat', await p.evaluate(async () => { const im = [...document.images]; im.forEach((i) => { i.loading = 'eager'; }); await Promise.all(im.map((i) => i.decode().catch(() => null))); return im.length >= 20 && im.every((i) => i.naturalWidth > 0); }));
    for (const a of ['/office/ruang.html', '/office/kendali.js', '/office/sematan.js', '/office/sematan.css', '/office/office.bundle.js', '/office/karakter.html', '/assets/agents/T.5.glb', '/assets/themes/senja.png', '/assets/nexaoffice-alur.webm', '/studio.html', '/ui.js', '/pengaturan-ai.js', '/serah.js']) {
      const r = await p.request.get(U + a); ok('aset ' + a + ' 200', r.status() === 200);
    }
    ok('/kantor.html tidak dipakai lagi dan tidak ditautkan', (await p.request.get(U + '/kantor.html')).status() === 404 && !(await p.$('a[href="/kantor.html"]')) && !fs.readFileSync(path.join(root, 'office', 'karakter.html'), 'utf8').includes('/kantor.html'));
    { // agen harus sama di ruang kerja, kantor 3D, halaman utama, dan profil agents/: 18
      const studio = fs.readFileSync(path.join(root, 'studio.html'), 'utf8');
      const roles = [...new Set([...studio.matchAll(/\n '([LRPDEQMT]\.\d)':\['/g)].map((m) => m[1]))].sort();
      const kantor = [...new Set([...fs.readFileSync(path.join(root, 'office', 'karakter.html'), 'utf8').matchAll(/<span class="code">([A-Z]\.\d) /g)].map((m) => m[1]))].sort();
      const situs = await p.$$eval('#timGrid li', (li) => li.map((l) => [l.querySelector('img').getAttribute('src').match(/agents\/(.+)\.png/)[1], l.querySelector('b').textContent.trim()]));
      const dirAgen = path.join(__dirname, '..', 'agents');
      const profil = fs.readdirSync(dirAgen).filter((f) => /^\d\d-.*\.md$/.test(f)).map((f) => { const x = fs.readFileSync(path.join(dirAgen, f), 'utf8'); return [x.match(/^kode: "([A-Z]\.\d)"/m)[1], (x.match(/^panggilan: (.+)$/m) || [])[1]]; });
      const kodeSitus = situs.map((s) => s[0]).sort();
      ok('18 agen sama di ruang kerja (' + roles.length + '), kantor 3D (' + kantor.length + '), halaman utama (' + situs.length + ')', roles.length === 18 && roles.join() === kantor.join() && kantor.join() === kodeSitus.join());
      ok('profil agents/: 18 file, kode dan nama di kantor sama dengan web', profil.length === 18 && profil.map((x) => x[0]).sort().join() === kodeSitus.join() && profil.every((x) => situs.some((s) => s[0] === x[0] && s[1] === x[1])));
      ok('ruang kerja: Bima (E.2), Fira (E.3), Damar (T.5) benar-benar dipanggil', /ask\('E\.2'/.test(studio) && /ask\('E\.3'/.test(studio) && /ask\('T\.5'/.test(studio));
    }

    // ---------- 2. hero = kantor 3D asli (zoom ke lantai studio), agen bergerak ----------
    const siap = await p.waitForFunction(() => { const f = document.getElementById('kantorIframe'); try { return !!(f.contentWindow.zunoOffice && f.contentWindow.zunoOffice.state.ready); } catch (e) { return false; } }, null, { timeout: 60000 }).then(() => true).catch(() => false);
    const office = () => p.evaluate(() => { const o = document.getElementById('kantorIframe').contentWindow.zunoOffice; return { view: o.state.view, theme: o.state.theme, demo: o.demo.running, t: o.demo.snapshot ? JSON.stringify(o.demo.snapshot()).length : 0 }; });
    ok('hero: kantor 3D langsung tampil di layar pertama', siap && await p.$eval('#heroStage', (e) => e.getBoundingClientRect().top < 800));
    ok('hero: di dalam studio, demo gerak agen berjalan, tema awal Griya Langit', siap && (await office()).view === 'interior' && (await office()).demo && (await office()).theme === 'langit');
    const pos1 = siap ? await p.evaluate(() => JSON.stringify(document.getElementById('kantorIframe').contentWindow.zunoOffice.sceneAgents().map((a) => a.position.map((x) => x.toFixed(2))))) : '';
    await p.waitForTimeout(4000);
    const pos2 = siap ? await p.evaluate(() => JSON.stringify(document.getElementById('kantorIframe').contentWindow.zunoOffice.sceneAgents().map((a) => a.position.map((x) => x.toFixed(2))))) : '';
    ok('hero: agen benar-benar bergerak (posisi berubah)', siap && pos1 !== pos2);
    ok('FAQ posting ikut aturan unggah: hanya yang disetujui, sambungan dari sisi pemakai', /Agen bisa posting sendiri\?\s*Bisa, hanya konten di Antrian Posting yang sudah kamu setujui\. Yang belum disetujui tidak pernah diunggah\./.test(await p.textContent('#faq')));
    ok('hero: tanpa tulisan simulasi di bawah kantor (permintaan Zulnan 2026-11-10)', !/Simulasi gerak agen/.test(await p.textContent('#beranda')));
    ok('hero: kantor tidak menahan scroll sebelum Jelajahi diklik', (await p.$eval('#kantorIframe', (f) => getComputedStyle(f).pointerEvents)) === 'none');
    await p.click('#heroJelajah');
    ok('hero: Jelajahi kantor mengaktifkan putar/zoom', (await p.$eval('#kantorIframe', (f) => getComputedStyle(f).pointerEvents)) === 'auto' && (await p.getAttribute('#heroJelajah', 'aria-pressed')) === 'true');
    await p.click('#heroJelajah');

    // ---------- 3. pilihan tema mengganti kantor di hero ----------
    await p.click('.tema-kartu [data-tema="senja"]'); await p.waitForTimeout(800);
    ok('Pilihan tema: Menara Senja dipakai di kantor hero', siap && (await office()).theme === 'senja' && (await p.getAttribute('.tema-kartu [data-tema="senja"]', 'aria-pressed')) === 'true');
    await p.click('.tema-kartu [data-tema="langit"]'); await p.waitForTimeout(500);
    ok('Pilihan tema: kembali ke Griya Langit', siap && (await office()).theme === 'langit');
    // Tema ketiga The Grotto: scene sendiri (/nexa.html) di iframe yang sama, versi sematan, lalu bisa kembali.
    ok('Pilihan tema: tiga kartu (Menara Senja, Griya Langit, The Grotto)', (await p.$$eval('.tema-kartu [data-tema]', (b) => b.map((x) => x.dataset.tema).join(','))) === 'senja,langit,grotto');
    await p.click('.tema-kartu [data-tema="grotto"]');
    const grotto = await p.waitForFunction(() => { try { return !!document.getElementById('kantorIframe').contentWindow.nexaStudio; } catch (e) { return false; } }, null, { timeout: 120000 }).then(() => true).catch(() => false);
    ok('Pilihan tema: The Grotto tampil di kantor hero (tertanam, tanpa header halaman sendiri)', grotto && await p.evaluate(() => { const f = document.getElementById('kantorIframe'); const d = f.contentDocument; return f.contentWindow.location.pathname === '/nexa.html' && d.documentElement.hasAttribute('data-sematan') && getComputedStyle(d.querySelector('body > header')).display === 'none'; }));
    await p.click('.tema-kartu [data-tema="langit"]');
    const balik = await p.waitForFunction(() => { try { const o = document.getElementById('kantorIframe').contentWindow.zunoOffice; return o && o.state.theme === 'langit'; } catch (e) { return false; } }, null, { timeout: 120000 }).then(() => true).catch(() => false);
    ok('Pilihan tema: dari The Grotto kembali ke Griya Langit', balik);

    ok('tab Cara kerja: Build App bisa dibuka', await (async () => { await p.click('#tab-build'); return !(await p.$eval('#panel-build', (e) => e.hidden)) && (await p.$eval('#panel-konten', (e) => e.hidden)); })());
    await p.$eval('#alurVideo', (v) => v.scrollIntoView({ block: 'center' }));
    await p.waitForFunction(() => !document.getElementById('alurVideo').paused, null, { timeout: 8000 }).catch(() => {});
    ok('video alur (WebM) jalan sendiri saat terlihat', await p.$eval('#alurVideo', (v) => !v.paused && /\.webm$/.test(v.currentSrc)) && (await p.textContent('#videoBtn')) === 'Jeda animasi');
    await p.click('#videoBtn');
    ok('video alur bisa dijeda', await p.$eval('#alurVideo', (v) => v.paused) && (await p.textContent('#videoBtn')) === 'Putar animasi');

    // ---------- 4. Workspace tanpa kunci: pratinjau + Pengaturan AI terbuka ----------
    await p.click('.nav-links a[href="/studio.html"]');
    await p.waitForURL(/studio\.html/);
    ok('Workspace: judul dan menu aktif', (await p.title()) === 'Nexaoffice · Workspace' && (await p.textContent('h1')).trim() === 'Workspace' && (await p.getAttribute('.nav-links a[href="/studio.html"]', 'aria-current')) === 'page');
    ok('Workspace: tampilan Nexaoffice (tanpa HUD lama, judul serif The Grotto)', !(await p.$('.hud-title')) && !(await p.$('link[href="/hud.css"]')) && (await p.$eval('h1', (e) => getComputedStyle(e).fontFamily)).includes('Georgia'));
    await p.waitForFunction(() => document.getElementById('keyDlg').open, null, { timeout: 5000 }).catch(() => {});
    ok('tanpa kunci: Pengaturan AI terbuka sendiri, 3 pilihan sambungan', await p.$eval('#keyDlg', (d) => d.open) && (await p.$$eval('input[name="aiMode"]', (r) => r.map((x) => x.value).join())) === 'server,lokal,vps');
    await p.click('#keyDlg button[value="cancel"]');
    { // satu tempat kerja: kantor 3D di kiri, perintah + format di kanan, hasil live di bawah format; tanpa Cara kerja dan bar Proses
      const kiri = await p.$eval('#kantorIframe', (e) => e.getBoundingClientRect().right);
      const kanan = await p.$eval('#cmd', (e) => e.getBoundingClientRect().left);
      ok('Workspace: kantor 3D di kiri, perintah di kanan', kiri <= kanan);
      ok('Workspace: pilihan format (Paket, Mode, Tipe, Gaya video) di kolom perintah', (await Promise.all(['#count', '#mode', '#tv', '#pre'].map((s) => p.isVisible(s)))).every(Boolean) && (await p.textContent('#wsK')).trim() === 'Konten' && (await p.textContent('#wsB')).trim() === 'Build App');
      ok('Workspace: "Cara kerja tim", bar Proses, dan kotak perintah lama tidak ada', !(await p.$('#hFlowBox')) && !(await p.isVisible('#hBar')) && !(await p.$('#uiKonsol')) && !(await p.isVisible('#tracks')));
      const yForm = await p.$eval('#run', (e) => e.getBoundingClientRect().bottom), yLive = await p.$eval('#procp', (e) => e.getBoundingClientRect().top);
      ok('Workspace: "Hasil kerja agen" tampil di bawah format sebelum jalan', (await p.isVisible('#procp')) && yLive > yForm && /Belum ada pekerjaan/.test(await p.textContent('#liveKonten')));
      ok('kantor 3D Workspace: mode status asli, panel demo "Simulasi visual" disembunyikan', /asli=1/.test(await p.getAttribute('#kantorIframe', 'src')));
    }
    await p.fill('#cmd', 'bikin konten viral soal CEO Nvidia');
    await p.click('#run');
    await p.waitForFunction(() => !document.getElementById('errbox').classList.contains('hidden'), null, { timeout: 10000 }).catch(() => {});
    ok('tanpa kunci: Jalankan memberi pesan Pengaturan AI, tidak ada panggilan AI', /Pengaturan AI/.test(await p.textContent('#errbox')) && aiCalls.length === 0);
    await p.waitForFunction(() => document.getElementById('keyDlg').open, null, { timeout: 5000 }).catch(() => {});

    // ---------- 5. kunci salah lalu benar: Build App jalan live, agen bekerja di kantor, tulisan agen tampil ----------
    if (!(await p.$eval('#keyDlg', (d) => d.open))) await p.click('#hKey');
    await p.fill('#keyIn', 'salah'); await p.click('#keySave');
    await p.waitForFunction(() => !document.getElementById('run').disabled, null, { timeout: 10000 }).catch(() => {});
    await p.click('#run');
    await p.waitForFunction(() => document.getElementById('keyDlg').open, null, { timeout: 10000 }).catch(() => {});
    ok('kunci salah: pesan jelas', /Kunci akses Nexaoffice salah/.test(await p.textContent('#errbox')));
    ok('kunci salah: Pengaturan AI terbuka lagi untuk diperbaiki', await p.$eval('#keyDlg', (d) => d.open));
    if (!(await p.$eval('#keyDlg', (d) => d.open))) await p.click('#hKey');
    await p.fill('#keyIn', KUNCI); await p.click('#keySave');
    const kantorUI = await p.waitForFunction(() => { const f = document.getElementById('kantorIframe'); try { return !!(f.contentWindow.zunoOffice && f.contentWindow.zunoOffice.state.ready); } catch (e) { return false; } }, null, { timeout: 60000 }).then(() => true).catch(() => false);
    const siaga = await p.evaluate(() => JSON.stringify(window.NexaUI.keadaan) + ' ' + [...document.querySelectorAll('#tracks .track')].map((t) => t.getAttribute('data-s')).join(',') + ' stop=' + document.getElementById('stop').disabled);
    ok('kantor 3D siaga: semua agen santai sebelum ada perintah (' + siaga + ')', kantorUI && (await p.evaluate(() => Object.keys(window.NexaUI.keadaan).length === 18 && Object.values(window.NexaUI.keadaan).every((v) => v === false))));
    await p.click('#wsB');
    await p.fill('#breq', 'bikin aplikasi absensi siswa untuk guru');
    await p.waitForFunction(() => !document.getElementById('brun').disabled, null, { timeout: 10000 }).catch(() => {});
    const nB = aiCalls.length;
    await p.click('#brun');
    await p.waitForFunction(() => window.NexaUI && Object.keys(window.NexaUI.keadaan).some((k) => /^T\./.test(k) && window.NexaUI.keadaan[k]), null, { timeout: 15000 }).catch(() => {});
    ok('Build App jalan dari kotak perintah yang sama (agen Engineering memanggil AI dengan kunci)', aiCalls.slice(nB).some((c) => c.key === KUNCI && /PERAN ANDA: T\./.test(c.input)));
    const [kerjaT, teksAktif] = await p.evaluate(() => [Object.keys(window.NexaUI.keadaan).filter((k) => window.NexaUI.keadaan[k]), document.getElementById('uiAktif').textContent]);
    ok('kantor 3D ikut status asli: agen Engineering yang jalan pergi bekerja (' + kerjaT.join(',') + ')', kantorUI && kerjaT.some((k) => /^T\./.test(k)) && (await p.evaluate(() => document.getElementById('kantorIframe').contentWindow.zunoOffice.demo.running)));
    ok('kantor 3D: daftar "Sedang bekerja" tampil (' + teksAktif + ')', /Sedang bekerja|Tim bekerja/.test(teksAktif));
    await p.waitForSelector('#liveBuild .live-item', { timeout: 15000 }).catch(() => {});
    const live = await p.$$eval('#liveBuild .live-item', (li) => li.map((l) => l.querySelector('b').textContent + ':' + l.getAttribute('data-s')));
    ok('Hasil kerja agen live: tulisan agen Engineering tampil per agen (' + live.slice(0, 4).join(', ') + ')', live.length > 0 && live.some((x) => /^(Arga|Rani|Fajar|Tio|Damar):/.test(x)) && (await p.isVisible('#bprocp')));
    await p.click('[data-tema="senja"]'); await p.waitForTimeout(400);
    ok('Workspace: tema kantor bisa diganti', kantorUI && (await p.evaluate(() => document.getElementById('kantorIframe').contentWindow.zunoOffice.state.theme)) === 'senja');
    ok('Workspace: pilihan tema The Grotto ada', (await p.$$('.ws-kantor [data-tema="grotto"]')).length === 1);
    if (await p.$('#bstop:not([disabled])')) await p.click('#bstop');

    // ---------- 6. Pengaturan AI: API key lokal dikirim per permintaan ----------
    const p3 = await ctx.newPage();
    p3.on('pageerror', (e) => errors.push(e.message));
    modeAI = 'rencana-konten';
    await p3.goto(U + '/studio.html');
    await p3.click('#hKey');
    await p3.check('input[name="aiMode"][value="lokal"]');
    ok('Pengaturan AI: kolom API key muncul untuk mode lokal', await p3.isVisible('#aiKunci') && !(await p3.isVisible('#aiVps')));
    await p3.selectOption('#aiProv', 'claude'); await p3.fill('#aiKunci', 'sk-uji-lokal'); await p3.fill('#aiModel', 'model-uji');
    await p3.click('#keySave');
    await p3.waitForFunction(() => /key lokal/.test(document.getElementById('hModel').textContent), null, { timeout: 5000 }).catch(() => {});
    ok('Pengaturan AI: status menampilkan "API key lokal"', /API key lokal/.test(await p3.textContent('#hKoneksi')) && /claude · model-uji \(key lokal\)/.test(await p3.textContent('#hModel')));
    const n0 = aiCalls.length;
    await p3.fill('#cmd', 'carousel 5 slide soal AI untuk laporan kantor');
    await p3.waitForFunction(() => !document.getElementById('run').disabled, null, { timeout: 10000 }).catch(() => {});
    await p3.click('#run');
    await p3.waitForSelector('#liveKonten .live-item', { timeout: 15000 }).catch(() => {});
    const lok = aiCalls.slice(n0);
    ok('mode lokal: header x-llm-* ikut di setiap panggilan AI', lok.length > 0 && lok.every((c) => c.h['x-llm-provider'] === 'claude' && c.h['x-llm-key'] === 'sk-uji-lokal' && c.h['x-llm-model'] === 'model-uji'));
    ok('Konten: agen divisi kreatif tampil di Hasil kerja agen', (await p3.$$eval('#liveKonten .live-item b', (b) => b.map((x) => x.textContent))).some((n) => /^(ZUNO|Lia|Raka|Nara|Dika|Vino|Sari|Edo|Bima|Fira|Tara|Nita|Maya)$/.test(n)));
    ok('Pengaturan AI: key tidak ditampilkan ulang saat dibuka', await (async () => { await p3.click('#hKey'); const v = await p3.inputValue('#aiKunci'); const ph = await p3.getAttribute('#aiKunci', 'placeholder'); await p3.click('#keyDlg button[value="cancel"]'); return v === '' && /Tersimpan/.test(ph); })());
    if (await p3.$('#stop:not([disabled])')) await p3.click('#stop');

    // ---------- 7. Pengaturan AI: Server VPS (alamat lain) ----------
    const VPS = 'http://127.0.0.1:' + (srv.address().port) + '/vps-tiruan';
    await p3.click('#hKey');
    await p3.check('input[name="aiMode"][value="vps"]');
    await p3.fill('#aiVps', VPS);
    const s0 = statusCalls.length;
    await p3.click('#keySave');
    await p3.waitForTimeout(800);
    ok('mode VPS: status dibaca dari alamat VPS', statusCalls.slice(s0).some((u) => u.startsWith(VPS + '/api/status')) && /Server VPS/.test(await p3.textContent('#hKoneksi')));
    const n1 = aiCalls.length;
    await p3.evaluate(async () => { const s = await window.claude.use('sample'); await s('Balas satu kata saja: SIAP', { modelTier: 'quick' }).catch(() => null); });
    ok('mode VPS: panggilan AI dikirim ke alamat VPS tanpa header x-llm-key', aiCalls.slice(n1).some((c) => c.url.startsWith(VPS + '/api/ai') && !c.h['x-llm-key']));
    await p3.click('#hKey'); await p3.click('#keyClear');
    ok('Hapus semua: kembali ke mode Server ini', await p3.evaluate(() => window.NexaAI.get().mode === 'server' && !window.NexaAI.get().kunci));

    // ---------- 8. tautan lama ?perintah= tetap jalan ----------
    const p4 = await ctx.newPage();
    await p4.goto(U + '/studio.html?' + new URLSearchParams({ perintah: 'tes tautan lama', divisi: 'konten', jalan: '0' }));
    await p4.waitForFunction(() => document.getElementById('cmd').value === 'tes tautan lama', null, { timeout: 15000 }).catch(() => {});
    ok('tautan lama ?perintah= mengisi ruang kerja dan alamat dibersihkan', (await p4.inputValue('#cmd')) === 'tes tautan lama' && !/perintah=/.test(p4.url()));

    // ---------- 9. HP ----------
    // Tutup halaman sebelumnya: tiap halaman menjalankan kantor 3D (render perangkat lunak di cloud), yang masih terbuka berebut CPU.
    for (const lama of [p, p3, p4]) await lama.close().catch(() => {});
    const m = await browser.newPage({ viewport: { width: 375, height: 800 } });
    await m.goto(U + '/');
    ok('HP: tautan menu tersembunyi sebelum Menu diklik', !(await m.isVisible('.nav-links a[href="#biaya"]')));
    await m.click('#menuBtn');
    ok('HP: Menu membuka tautan', await m.isVisible('.nav-links a[href="#biaya"]') && (await m.getAttribute('#menuBtn', 'aria-expanded')) === 'true');
    ok('HP: halaman utama tanpa geser samping', await m.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));
    await m.goto(U + '/studio.html'); await m.waitForTimeout(800);
    ok('HP: Workspace tanpa geser samping', await m.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));

    ok('tanpa galat JS (' + errors.join(' | ').slice(0, 300) + ')', errors.filter((e) => !/401 \(Unauthorized\)|404 \(Not Found\)/.test(e)).length === 0);
    ok('tanpa aset gagal dimuat (' + gagalMuat.join(' | ').slice(0, 300) + ')', gagalMuat.length === 0);
  } finally {
    await browser.close(); srv.close();
  }
  console.log(gagal ? 'HASIL: ' + gagal + ' GAGAL' : 'HASIL: SEMUA LOLOS');
  process.exit(gagal ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
