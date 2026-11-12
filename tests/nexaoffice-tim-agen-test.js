// Uji menu Pengaturan > Tambah agen (Workspace Nexaoffice, web/src/tim-agen.js):
// formulir berstruktur agents/, kode divisi otomatis, pelatihan oleh Hana (H.1, Divisi HRD) dari aturan tim + riwayat,
// tugas langsung ke agen baru (live + riwayat), unduh profil .md, ubah, latih ulang tanpa AI, hapus, tersimpan setelah muat ulang.
//   node web/build.mjs && NODE_PATH=$(npm root -g) node tests/nexaoffice-tim-agen-test.js
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..', 'web');
const MIME = { '.json': 'application/json', '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2', '.jpg': 'image/jpeg' };
let gagal = 0;
const ok = (nama, syarat) => { console.log((syarat ? 'OK    ' : 'GAGAL ') + nama); if (!syarat) gagal++; };
const KUNCI = 'kunci-uji-tim-agen-123';
const PELATIHAN = { orientasi: 'Bayu bekerja di Divisi Riset bersama Raka dan Nara; bahan dari Raka, hasil ke Nara.', aturan_penting: ['Tidak mengarang angka atau sumber.', 'Status Disetujui hanya dari Zulnan.'], pelajaran: ['Perintah carousel AI untuk pemula selesai dua kartu (riwayat 9 Nov).'], cara_kerja: ['Baca bahan Raka', 'Susun thread', 'Serahkan ke Nara'], serah_terima: 'Menerima dari Raka, menyerahkan ke Nara.', tumpang_tindih: 'R.2 Nara (hook)', siap: true, catatan_untuk_zulnan: '' };

(async () => {
  const srv = http.createServer((q, r) => {
    let f = path.join(root, decodeURIComponent(q.url.split('?')[0]));
    if (f.endsWith('/')) f += 'index.html';
    fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); r.end(d); });
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  const U = 'http://127.0.0.1:' + srv.address().port;
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium' });
  try {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, acceptDownloads: true });
    const calls = [];
    await ctx.route('**/api/ai', async (route) => {
      const req = route.request(), body = JSON.parse(req.postData() || '{}');
      const input = typeof body.input === 'string' ? body.input : '';
      calls.push({ key: req.headers()['x-zuno-key'], input, tier: body.tier });
      if (req.headers()['x-zuno-key'] !== KUNCI) return route.fulfill({ status: 401, contentType: 'application/json', body: JSON.stringify({ code: 'not_granted', message: 'Kunci salah.' }) });
      let teks = '{}';
      if (/PERAN ANDA: H\.1 /.test(input)) teks = '```json\n' + JSON.stringify(PELATIHAN) + '\n```';
      else if (/PERAN ANDA: R\.3 /.test(input)) teks = '## Thread: 5 cara pakai AI di kantor\n\n1. Ringkas email panjang (perlu dicek)\n2. Susun agenda rapat';
      const lines = [{ t: 'delta', text: teks.slice(0, 12) }, { t: 'delta', text: teks.slice(12) }, { t: 'done', stop: 'end_turn', model: 'tiruan' }];
      return route.fulfill({ status: 200, contentType: 'application/x-ndjson', body: lines.map((l) => JSON.stringify(l)).join('\n') + '\n' });
    });
    await ctx.route('**/api/status', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ online: true, provider: 'claude', model: 'tiruan', ai_key_set: true, access_set: true, kunci_pengguna: true, server: 'vercel', riset: { aktif: false } }) }));
    // Kantor 3D tidak diuji di sini (tes situs): halaman kosong supaya cepat.
    await ctx.route('**/office/ruang.html*', (route) => route.fulfill({ status: 200, contentType: 'text/html', body: '<!doctype html><title>kantor</title>' }));
    const riwayat = [
      { dari: 'kamu', teks: 'Bikin carousel AI buat pemula', waktu: Date.parse('2026-11-09T09:00:00Z') },
      { dari: 'zuno', teks: 'Perintah diterima: "Bikin carousel AI buat pemula". Format: 2 konten.', waktu: Date.parse('2026-11-09T09:00:05Z') },
      { dari: 'zuno', teks: 'Selesai. 2 carousel siap kamu review: K1 "AI untuk email", K2 "AI untuk rapat".', waktu: Date.parse('2026-11-09T09:20:00Z') },
      { dari: 'zuno', teks: 'Sebentar, aku cek dulu…', waktu: Date.parse('2026-11-09T09:21:00Z') }
    ];
    await ctx.addInitScript(([k, r]) => { if (!sessionStorage.getItem('uji-awal')) { sessionStorage.setItem('uji-awal', '1'); localStorage.setItem('zuno-akses', k); localStorage.setItem('nexa-chat', JSON.stringify(r)); localStorage.removeItem('nexa-agen-kustom'); } }, [KUNCI, riwayat]);
    const p = await ctx.newPage();
    const errors = [];
    p.on('pageerror', (e) => errors.push(e.message));
    p.on('console', (m) => { if (m.type() === 'error' && !/favicon|ERR_|404/.test(m.text())) errors.push(m.text()); });
    await p.goto(U + '/studio.html', { waitUntil: 'domcontentloaded' });
    await p.waitForFunction(() => window.NexaTimAgen && window.ZunoTim && window.NexaUI, null, { timeout: 20000 });

    // ---------- menu pengaturan ----------
    ok('header: tombol "Pengaturan"', (await p.textContent('#hKey')).trim() === 'Pengaturan');
    await p.click('#hKey');
    ok('Pengaturan: tab Sambungan AI + Tambah agen', (await p.$$eval('#keyDlg .set-tab button', (b) => b.map((x) => x.textContent).join('|'))) === 'Sambungan AI|Tambah agen');
    await p.click('#keyDlg .set-tab [data-set="agen"]');
    ok('Tambah agen terbuka, Sambungan AI tertutup, daftar kosong', await p.evaluate(() => document.getElementById('agenDlg').open && !document.getElementById('keyDlg').open && !document.getElementById('agenKosong').hidden));
    await p.click('#agenDlg .set-tab [data-set="ai"]');
    ok('tab Sambungan AI kembali ke dialog AI', await p.evaluate(() => document.getElementById('keyDlg').open && !document.getElementById('agenDlg').open));
    await p.evaluate(() => document.getElementById('keyDlg').close());
    await p.evaluate(() => window.NexaTimAgen.buka());

    // ---------- formulir ----------
    await p.click('#agenBaru');
    await p.waitForFunction(() => document.querySelectorAll('#agMulai option').length > 19, null, { timeout: 10000 });
    const opsi = await p.$$eval('#agMulai option', (o) => o.map((x) => x.value).filter(Boolean));
    ok('contoh struktur dari 19 profil agents/ (18 tim kantor + H.1 Hana) (' + opsi.length + ')', opsi.length === 19 && opsi.includes('H.1') && opsi.includes('T.5'));
    await p.click('#agenBuat');
    ok('formulir kosong ditolak: pesan + kolom ditandai', /Nama jabatan/.test(await p.textContent('#agenCek')) && (await p.getAttribute('#agNama', 'aria-invalid')) === 'true' && (await p.evaluate(() => window.NexaTimAgen.agen().length)) === 0);
    await p.selectOption('#agMulai', 'R.1');
    const isi = await p.evaluate(() => ({ nama: document.getElementById('agNama').value, peran: document.getElementById('agPeran').value, dilarang: document.getElementById('agDilarang').value, divisi: document.getElementById('agDivisi').value, keluaran: document.getElementById('agKeluaran').value, memori: document.getElementById('agMemori').value }));
    ok('mulai dari struktur Raka: peran, larangan, keluaran, memori terisi; identitas kosong; divisi Riset', !isi.nama && isi.peran.length > 50 && isi.dilarang.split('\n').length >= 2 && isi.keluaran && isi.memori && isi.divisi === 'Divisi Riset');
    await p.fill('#agNama', 'Penulis Thread');
    await p.fill('#agPanggilan', 'Raka');
    await p.fill('#agDeskripsi', 'Mengubah bahan riset jadi thread Threads/X untuk pemula.');
    await p.fill('#agPeran', 'Menulis thread pendek dari bahan riset Raka untuk audiens pemula 25-35 tahun, dengan sumber disebut.');
    await p.fill('#agTugas', 'Susun thread 5-7 bagian\nSebut sumber di bagian akhir');
    await p.fill('#agKeluaran', 'Draf thread siap dicek Zulnan');
    await p.click('#agenBuat');
    ok('nama di kantor kembar (Raka) ditolak', /sudah dipakai R\.1/.test(await p.textContent('#agenCek')));
    await p.fill('#agPanggilan', 'Bayu');
    const n0 = calls.length;
    await p.click('#agenBuat');
    await p.waitForFunction(() => { const a = window.NexaTimAgen.agen()[0]; return a && a.pelatihan && !a.sedangLatih; }, null, { timeout: 20000 });
    const a1 = await p.evaluate(() => window.NexaTimAgen.agen()[0]);
    ok('agen dibuat dengan kode divisi berikutnya: R.3 Bayu', a1.kode === 'R.3' && a1.panggilan === 'Bayu' && a1.divisi === 'Divisi Riset');
    const hrd = calls.slice(n0).find((c) => /PERAN ANDA: H\.1 /.test(c.input));
    ok('Hana (H.1) dipanggil dengan kunci akses', !!hrd && hrd.key === KUNCI);
    ok('pelatihan memakai aturan tim, struktur tim, memori sedivisi, dan riwayat chat (tanpa pesan "Sebentar")', hrd && /FAKTA ZULNAN/.test(hrd.input) && /STRUKTUR TIM:[\s\S]*T\.5 Damar/.test(hrd.input) && /MEMORI SEDIVISI:[\s\S]*Raka:/.test(hrd.input) && /RIWAYAT PEKERJAAN[\s\S]*Bikin carousel AI buat pemula[\s\S]*2 carousel siap/.test(hrd.input) && !/Sebentar, aku cek/.test(hrd.input) && /PROFIL AGEN BARU:[\s\S]*Kode: R\.3/.test(hrd.input));
    ok('paket pelatihan tersimpan (orientasi, aturan, pelajaran, cara kerja, tumpang tindih)', a1.pelatihan.ai === true && a1.pelatihan.orientasi === PELATIHAN.orientasi && a1.pelatihan.pelajaran.length === 1 && a1.pelatihan.cara_kerja.length === 3 && a1.pelatihan.tumpang_tindih === 'R.2 Nara (hook)' && a1.pelatihan.sumber.riwayat >= 3);
    ok('daftar: Bayu R.3 + status pelatihan + catatan tumpang tindih', /Bayu/.test(await p.textContent('#agenDaftar')) && /Dilatih Hana/.test(await p.textContent('#agenDaftar .agen-st')) && /mirip R\.2 Nara/.test(await p.textContent('#agenDaftar .agen-warn')));
    ok('Chat ZUNO dikabari Hana', await p.evaluate(() => window.NexaChat.pesan().some((m) => /^Hana \(Divisi HRD\) selesai melatih Bayu \(R\.3/.test(m.teks))));

    // ---------- tugas ----------
    await p.click('#agenDaftar [data-aksi="tugas"]');
    await p.fill('#agTugasIn', 'Buat thread soal 5 cara pakai AI di kantor');
    const n1 = calls.length;
    await p.click('#agTugasJalan');
    await p.waitForFunction(() => !document.getElementById('agTugasAksi').hidden, null, { timeout: 20000 });
    const tugas = calls.slice(n1).find((c) => /PERAN ANDA: R\.3 /.test(c.input));
    ok('tugas: prompt berisi aturan tim, peran, larangan, paket pelatihan Hana, memori, tugas Zulnan', tugas && /FAKTA ZULNAN/.test(tugas.input) && /DILARANG: /.test(tugas.input) && tugas.input.includes(PELATIHAN.orientasi) && /PAKET PELATIHAN DARI HANA/.test(tugas.input) && /MEMORI AGEN:/.test(tugas.input) && /5 cara pakai AI di kantor/.test(tugas.input) && tugas.tier === 'default');
    ok('hasil tampil di dialog', /Ringkas email panjang/.test(await p.textContent('#agTugasOut')));
    ok('hasil masuk riwayat Bayu', await p.evaluate(() => window.NexaTimAgen.agen()[0].riwayat.length === 1));
    ok('hasil kerja live: nama Bayu, tanpa gambar karakter yang tidak ada', await p.evaluate(() => [...document.querySelectorAll('.live-item')].some((li) => li.querySelector('b').textContent === 'Bayu' && li.querySelector('.live-ava') && !li.querySelector('img'))));
    const n2 = calls.length;
    await p.click('[data-view="tugas"] [data-ke="daftar"]');
    await p.click('#agenDaftar [data-aksi="tugas"]'); await p.fill('#agTugasIn', 'Thread kedua'); await p.click('#agTugasJalan');
    await p.waitForFunction(() => !document.getElementById('agTugasAksi').hidden, null, { timeout: 20000 });
    ok('tugas berikutnya membawa riwayat tugas sebelumnya', calls.slice(n2).some((c) => /Tugasmu sebelumnya:[\s\S]*5 cara pakai AI di kantor/.test(c.input)));
    const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#agTugasUnduh')]);
    const isiHasil = fs.readFileSync(await dl.path(), 'utf8');
    ok('unduh hasil .md (' + dl.suggestedFilename() + ')', /^# Bayu \(R\.3, Penulis Thread\)/.test(isiHasil) && /Tugas: Thread kedua/.test(isiHasil));
    await p.click('[data-view="tugas"] [data-ke="daftar"]');

    // ---------- profil .md format agents/ ----------
    const [dp] = await Promise.all([p.waitForEvent('download'), p.click('#agenDaftar [data-aksi="unduh"]')]);
    const md = fs.readFileSync(await dp.path(), 'utf8');
    ok('profil .md (' + dp.suggestedFilename() + '): frontmatter + bagian seperti agents/ + Paket Pelatihan HRD', dp.suggestedFilename() === 'R3-penulis-thread.md' && /^---\nname: Penulis Thread\n/.test(md) && /\nkode: "R\.3"\n/.test(md) && /\npanggilan: Bayu\n/.test(md) && ['## Definisi Peran', '## Status', '## Kemampuan Inti', '## Integrasi Alur Kerja', '## Tugas di Zuno', '## Dilarang', '## Keluaran', '## Pembelajaran & Memori', '## Paket Pelatihan HRD'].every((h) => md.includes('\n' + h + '\n')));

    // ---------- tersimpan setelah muat ulang ----------
    await p.reload({ waitUntil: 'domcontentloaded' });
    await p.waitForFunction(() => window.NexaTimAgen, null, { timeout: 20000 });
    ok('setelah muat ulang: Bayu tetap ada dan terdaftar untuk hasil live', await p.evaluate(() => window.NexaTimAgen.agen().length === 1 && window.NexaUI.agen().some((x) => x.kode === 'R.3' && x.nama === 'Bayu' && !x.kantor)));
    await p.evaluate(() => window.NexaTimAgen.buka());

    // ---------- ubah: pindah divisi = kode baru, dilatih ulang ----------
    await p.click('#agenDaftar [data-aksi="ubah"]');
    ok('ubah: formulir terisi data Bayu', (await p.inputValue('#agPanggilan')) === 'Bayu' && /thread pendek/.test(await p.inputValue('#agPeran')));
    await p.selectOption('#agDivisi', 'Divisi HRD');
    const n3 = calls.length;
    await p.click('#agenBuat');
    await p.waitForFunction(() => { const a = window.NexaTimAgen.agen()[0]; return a && a.kode === 'H.2' && a.pelatihan && !a.sedangLatih; }, null, { timeout: 20000 });
    ok('pindah ke Divisi HRD: kode H.2 (H.1 milik Hana), riwayat tugas tetap, dilatih ulang', await p.evaluate(() => { const a = window.NexaTimAgen.agen(); return a.length === 1 && a[0].riwayat.length === 2; }) && calls.slice(n3).some((c) => /PERAN ANDA: H\.1 /.test(c.input)) && await p.evaluate(() => !window.NexaUI.agen().some((x) => x.kode === 'R.3')));

    // ---------- latih ulang tanpa AI: jujur, tidak mengarang ----------
    await p.evaluate(() => localStorage.removeItem('zuno-akses'));
    const n4 = calls.length;
    await p.click('#agenDaftar [data-aksi="latih"]');
    await p.waitForFunction(() => { const a = window.NexaTimAgen.agen()[0]; return a.pelatihan && a.pelatihan.ai === false; }, null, { timeout: 10000 });
    ok('tanpa kunci akses: tidak memanggil AI, paket berisi data mentah, status jelas', calls.length === n4 && await p.evaluate(() => { const l = window.NexaTimAgen.agen()[0].pelatihan; return l.riwayat.length >= 3 && !l.orientasi && l.pelajaran.length === 0; }) && /tanpa ringkasan AI: kunci akses belum diisi/.test(await p.textContent('#agenDaftar .agen-st')));
    await p.evaluate((k) => localStorage.setItem('zuno-akses', k), KUNCI);

    // ---------- HP ----------
    await p.setViewportSize({ width: 390, height: 780 });
    await p.click('#agenBaru');
    ok('HP: dialog muat tanpa geser ke samping', await p.evaluate(() => { const d = document.getElementById('agenDlg'); return d.scrollWidth <= d.clientWidth + 1 && d.getBoundingClientRect().right <= innerWidth; }));
    await p.click('[data-view="form"] [data-ke="daftar"]');
    await p.setViewportSize({ width: 1280, height: 860 });

    // ---------- hapus (dua langkah) ----------
    await p.click('#agenDaftar [data-aksi="hapus"]');
    ok('hapus minta konfirmasi dulu', /Yakin hapus Bayu/.test(await p.textContent('#agenDaftar [data-aksi="hapus"]')) && (await p.evaluate(() => window.NexaTimAgen.agen().length)) === 1);
    await p.click('#agenDaftar [data-aksi="hapus"]');
    ok('hapus: agen hilang dari daftar dan penyimpanan', await p.evaluate(() => window.NexaTimAgen.agen().length === 0 && JSON.parse(localStorage.getItem('nexa-agen-kustom')).length === 0 && !document.getElementById('agenKosong').hidden));
    ok('nol galat JS (' + errors.join(' | ') + ')', errors.length === 0);
  } catch (e) {
    console.log('GAGAL galat tes: ' + (e && e.stack || e)); gagal++;
  } finally {
    await browser.close(); srv.close();
  }
  // sejak 2026-11-12 edisi jasa memakai Workspace Nexaoffice yang sama (varian HUD 'jasa' dihapus), jadi menu ini ikut
  const { bangunRuangKerja } = await import(path.join(__dirname, '..', 'web', 'bangun.mjs'));
  const ws = bangunRuangKerja('nexa');
  ok('Workspace Nexaoffice (dipakai Zuno dan jasa) memuat menu Tambah agen', ws.includes('agenDlg') && ws.includes('tim-agen.js'));
  console.log(gagal ? 'HASIL: ' + gagal + ' GAGAL' : 'HASIL: SEMUA LOLOS');
  process.exit(gagal ? 1 : 0);
})();
