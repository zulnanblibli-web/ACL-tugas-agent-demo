#!/usr/bin/env node
// Zuno rilis: membawa paket rilis Agent Builder sampai link live di laptop pemilik, sesuai mesin yang dipilih.
// Dijalankan oleh Claude Desktop (Remote Control) atau dobel-klik jalankan-rilis.bat di folder paket.
//   node rilis.mjs           rilis (atau rilis ulang ke deployment yang sama)
//   node rilis.mjs --cek     hanya cek link live (setelah izin Google / langkah agen selesai)
// Hasil: hasil-rilis.json + LAPORAN-RILIS.md di folder ini; baris terakhir keluaran = JSON hasil.
// Kode keluar: 0 live, 10 perlu langkah agen (agent-desktop), 20 perlu pemilik (login sekali, izin, biaya), 1 gagal.
// Aturan: tidak mengetik atau menyimpan password pemilik, tidak membayar, tidak menghapus apa pun di luar folder ini.
// Sumber tunggal: tools/rilis/rilis.mjs di repo Zuno (disalin ke prototypes/zuno-studio-v2.html oleh tools/rilis/sisip.mjs).
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, readdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const WIN = process.platform === 'win32';
const qa = (a) => (WIN && /[\s&|<>^"()]/.test(a) ? '"' + String(a).replace(/"/g, '\\"') + '"' : a);
export function jalankanPerintah(cmd, args, o = {}) {
  const r = spawnSync(WIN ? cmd : cmd, WIN ? args.map(qa) : args, { cwd: o.cwd, encoding: 'utf8', shell: WIN, timeout: o.timeout || 600000, env: process.env });
  return { code: r.status == null ? 1 : r.status, out: r.stdout || '', err: (r.stderr || '') + (r.error ? String(r.error.message) : '') };
}
const PAKET = { clasp: '@google/clasp', firebase: 'firebase-tools', vercel: 'vercel' };
const jsonDari = (t) => { const s = String(t || ''); for (let i = s.indexOf('{'); i > -1; i = s.indexOf('{', i + 1)) { try { return JSON.parse(s.slice(i)); } catch (e) {} } return null; };
const tunggu = (ms) => new Promise((r) => setTimeout(r, ms));
const KOMENTAR = '<' + '!-- ';

export async function rilis(dir, o = {}) {
  const exec = o.exec || jalankanPerintah, ambil = o.fetch || ((u, x) => fetch(u, x)), sekarang = o.now || (() => new Date());
  const tungguMs = o.tungguMs != null ? o.tungguMs : 8 * 60000, jeda = o.jedaMs != null ? o.jedaMs : 10000;
  const man = JSON.parse(readFileSync(join(dir, 'rilis.json'), 'utf8'));
  const stFile = join(dir, '.zuno-rilis-state.json');
  const st = existsSync(stFile) ? JSON.parse(readFileSync(stFile, 'utf8')) : {};
  const simpanSt = () => writeFileSync(stFile, JSON.stringify(st, null, 2));
  const H = { pemilik: String(man.pemilik || 'pemilik'), proyek: man.id, nama: man.nama, mesin: man.mesin, status: 'gagal', url: st.url || '', langkah: [], perlu: [], cek: {}, waktu: sekarang().toISOString() };
  const catat = (t) => { H.langkah.push(t); if (!o.diam) console.log('- ' + t); };
  const perlu = (siapa, apa, cara) => H.perlu.push({ siapa, apa, cara });
  const sel = (status) => { H.status = status; return H; };
  const penanda = 'ZUNORILIS' + String(man.id || '').replace(/[^A-Za-z0-9]/g, '');
  const baca = (f) => readFileSync(join(dir, f), 'utf8');
  const siapkanHtml = (h) => {
    h = h.replace(/const\s+IS_PREVIEW\s*=\s*true/, 'const IS_PREVIEW = false');
    const tag = KOMENTAR + penanda + ' -->';
    return h.includes(penanda) ? h : /<head[^>]*>/i.test(h) ? h.replace(/<head[^>]*>/i, (m) => m + tag) : tag + h;
  };
  const butuhCli = (nama) => {
    if (exec(nama, ['--version'], { cwd: dir }).code === 0) return true;
    catat(nama + ' belum ada, dipasang: npm install -g ' + PAKET[nama]);
    if (exec('npm', ['install', '-g', PAKET[nama], '--no-audit', '--no-fund'], { cwd: dir, timeout: 900000 }).code !== 0 || exec(nama, ['--version'], { cwd: dir }).code !== 0) {
      perlu('agen', 'Pasang ' + PAKET[nama], 'npm install -g ' + PAKET[nama] + ' (cek internet/VPN), lalu jalankan rilis.mjs lagi');
      return false;
    }
    return true;
  };
  const cekLive = async (url, maks) => {
    const akhir = Date.now() + maks;
    for (let i = 0; ; i++) {
      try {
        const r = await ambil(url, { redirect: 'follow' });
        const t = await r.text();
        H.cek = { http: r.status, penanda: t.includes(penanda), izin_google: /accounts\.google\.com|ServiceLogin|Authorization is required|perlu otorisasi|needs authorization/i.test(t) };
        if (r.ok && H.cek.penanda) return true;
      } catch (e) { H.cek = { galat: String(e && e.message || e).slice(0, 160) }; }
      if (Date.now() + jeda > akhir) return false;
      await tunggu(jeda);
    }
  };
  const hanyaCek = !!o.cek || !!o.akunFirebase;

  try {
    if (/^Apps Script/.test(man.mesin)) {
      if (!hanyaCek) {
        if (!butuhCli('clasp')) return sel('perlu_agen');
        const au = jsonDari(exec('clasp', ['--json', 'show-authorized-user'], { cwd: dir }).out) || {};
        if (!au.loggedIn) { perlu('pemilik', 'Login clasp sekali (akun Google pemilik aplikasi)', 'Jalankan `clasp login` di Command Prompt, pilih akun Google, klik Izinkan. Setelah itu rilis berikutnya tanpa login.'); return sel('perlu_pemilik'); }
        catat('clasp login sebagai ' + (au.email || 'akun Google'));
        const gas = join(dir, 'gas');
        if (!st.scriptId) {
          if (existsSync(gas)) rmSync(gas, { recursive: true, force: true });
          mkdirSync(gas, { recursive: true });
          if (existsSync(join(dir, '.clasp.json'))) rmSync(join(dir, '.clasp.json'));
          const c = exec('clasp', ['--json', 'create-script', '--type', 'sheets', '--title', man.nama, '--rootDir', 'gas'], { cwd: dir });
          const j = jsonDari(c.out);
          if (c.code !== 0 || !j || !j.scriptId) {
            const t = c.out + c.err;
            if (/Apps Script API|usersettings/i.test(t)) { perlu('pemilik', 'Aktifkan Google Apps Script API sekali', 'Buka https://script.google.com/home/usersettings lalu nyalakan "Google Apps Script API". Satu kali untuk semua proyek.'); return sel('perlu_pemilik'); }
            throw new Error('clasp create-script gagal: ' + t.trim().slice(0, 300));
          }
          st.scriptId = j.scriptId; st.parentId = j.parentId; simpanSt();
          catat('Spreadsheet + Apps Script dibuat (' + j.scriptId + ')');
        } else catat('Memakai Apps Script yang sama (' + st.scriptId + ')');
        mkdirSync(gas, { recursive: true });
        for (const f of readdirSync(gas)) if (/^(Code|Kode)\.(js|gs)$/.test(f)) rmSync(join(gas, f));
        writeFileSync(join(gas, 'Code.gs'), baca(man.backend || 'Code.gs'));
        writeFileSync(join(gas, 'Index.html'), siapkanHtml(baca('index.html')));
        writeFileSync(join(gas, 'appsscript.json'), JSON.stringify({ timeZone: man.zonaWaktu || 'Asia/Jakarta', runtimeVersion: 'V8', exceptionLogging: 'STACKDRIVER', webapp: { executeAs: 'USER_DEPLOYING', access: 'ANYONE_ANONYMOUS' } }, null, 2));
        const p = exec('clasp', ['push', '--force'], { cwd: dir });
        if (p.code !== 0) throw new Error('clasp push gagal: ' + (p.out + p.err).trim().slice(0, 300));
        catat('Kode dikirim ke Apps Script (clasp push)');
        const d = exec('clasp', ['--json', 'create-deployment', '-d', 'Zuno ' + sekarang().toISOString().slice(0, 16)].concat(st.deploymentId ? ['-i', st.deploymentId] : []), { cwd: dir });
        const dj = jsonDari(d.out);
        if (d.code !== 0 || !dj || !dj.deploymentId) throw new Error('clasp deploy gagal: ' + (d.out + d.err).trim().slice(0, 300));
        st.deploymentId = dj.deploymentId; st.url = 'https://script.google.com/macros/s/' + dj.deploymentId + '/exec'; simpanSt();
        catat((st.redeploy ? 'Deployment diperbarui, link tetap: ' : 'Web app dideploy: ') + st.url); st.redeploy = true; simpanSt();
        if (man.mesin === 'Apps Script + Blogger') {
          let w = siapkanHtml(baca('index.html')).replace(/((?:const|let|var)\s+GAS_URL\s*=\s*)(['"`])[^'"`]*\2/, (m, a, q) => a + q + st.url + q);
          writeFileSync(join(dir, 'blogger-widget.html'), w);
          catat('blogger-widget.html siap (GAS_URL diisi)');
        }
      }
      H.url = st.url; H.spreadsheet = st.parentId ? 'https://docs.google.com/spreadsheets/d/' + st.parentId + '/edit' : '';
      if (!H.url) throw new Error('Belum ada deployment. Jalankan tanpa --cek dulu.');
      if (!(await cekLive(H.url, hanyaCek ? Math.min(tungguMs, 60000) : 15000))) {
        perlu(man.opsi && man.opsi.izinGoogleOtomatis ? 'agen' : 'pemilik', 'Izin Google sekali untuk aplikasi baru ini', 'Buka ' + H.url + ' di Chrome (akun pemilik), klik "Tinjau izin" > pilih akun > "Lanjutan" > "Buka ' + man.nama + '" > "Izinkan". Lalu jalankan `node rilis.mjs --cek`.');
        return sel(man.opsi && man.opsi.izinGoogleOtomatis ? 'perlu_agen' : 'perlu_pemilik');
      }
      if (man.mesin === 'Apps Script + Blogger') perlu('agen', 'Pasang tampilan di Blogger', 'Buka blogger.com (sudah login) > blog tujuan > Tata Letak > Tambah Gadget > HTML/JavaScript, tempel isi blogger-widget.html, Simpan. Aplikasi sudah jalan di link Apps Script sambil menunggu.');
      catat('Link live terbuka dan berisi aplikasi ini');
      return sel(H.perlu.length ? 'perlu_agen' : 'live');
    }

    if (man.mesin === 'Firebase') {
      const fb = join(dir, 'firebase');
      if (!hanyaCek) {
        if (!butuhCli('firebase')) return sel('perlu_agen');
        const lg = jsonDari(exec('firebase', ['login:list', '--json'], { cwd: dir }).out) || {};
        if (!(Array.isArray(lg.result) ? lg.result.length : lg.result)) { perlu('pemilik', 'Login Firebase sekali', 'Jalankan `firebase login` di Command Prompt, pilih akun Google, Izinkan.'); return sel('perlu_pemilik'); }
        if (!st.fbProject) {
          const pid = ('zuno-' + man.slug).replace(/[^a-z0-9-]/g, '-').slice(0, 24).replace(/-+$/, '') + '-' + String(man.kode || 'app').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 5);
          const c = exec('firebase', ['projects:create', pid, '-n', String(man.nama).slice(0, 30), '--json'], { cwd: dir, timeout: 900000 });
          if (c.code !== 0) { const t = c.out + c.err; if (/billing|Terms of Service|ToS|quota/i.test(t)) { perlu('pemilik', 'Firebase minta persetujuan atau kuota proyek', t.trim().slice(0, 200)); return sel('perlu_pemilik'); } throw new Error('firebase projects:create gagal: ' + t.trim().slice(0, 300)); }
          st.fbProject = pid; simpanSt(); catat('Proyek Firebase dibuat: ' + pid);
        }
        const pid = st.fbProject;
        if (!st.fbConfig) {
          const a = jsonDari(exec('firebase', ['apps:create', 'WEB', String(man.nama).slice(0, 40), '--project', pid, '--json'], { cwd: dir }).out) || {};
          const appId = a.result && a.result.appId;
          if (!appId) throw new Error('firebase apps:create gagal');
          const s = jsonDari(exec('firebase', ['apps:sdkconfig', 'WEB', appId, '--project', pid, '--json'], { cwd: dir }).out) || {};
          const r = s.result || {};
          st.fbConfig = r.sdkConfig || (r.fileContents ? jsonDari(r.fileContents) : null);
          if (!st.fbConfig || !st.fbConfig.apiKey) throw new Error('firebase apps:sdkconfig tidak memberi konfigurasi');
          simpanSt(); catat('Aplikasi web Firebase dibuat, konfigurasi diambil');
          const db = exec('firebase', ['firestore:databases:create', '(default)', '--location', man.lokasiFirestore || 'asia-southeast2', '--project', pid, '--json'], { cwd: dir });
          catat(db.code === 0 || /already exists/i.test(db.out + db.err) ? 'Firestore siap' : 'Firestore belum terbuat: ' + (db.out + db.err).trim().slice(0, 120));
        }
        mkdirSync(join(fb, 'public'), { recursive: true });
        const cfgTxt = 'const firebaseConfig = ' + JSON.stringify(st.fbConfig) + ';';
        let h = siapkanHtml(baca('index.html'));
        h = /(?:const|let|var)\s+firebaseConfig\s*=\s*\{[\s\S]*?\};?/.test(h) ? h.replace(/(?:const|let|var)\s+firebaseConfig\s*=\s*\{[\s\S]*?\};?/, cfgTxt) : h;
        writeFileSync(join(fb, 'public', 'index.html'), h);
        if (existsSync(join(dir, 'firestore.rules'))) copyFileSync(join(dir, 'firestore.rules'), join(fb, 'firestore.rules'));
        writeFileSync(join(fb, 'firebase.json'), JSON.stringify({ hosting: { public: 'public', ignore: ['firebase.json'] }, firestore: { rules: 'firestore.rules' } }, null, 2));
        writeFileSync(join(fb, '.firebaserc'), JSON.stringify({ projects: { default: pid } }, null, 2));
        const d = exec('firebase', ['deploy', '--only', 'hosting,firestore:rules', '--project', pid, '--non-interactive', '--json'], { cwd: fb, timeout: 900000 });
        if (d.code !== 0) throw new Error('firebase deploy gagal: ' + (d.out + d.err).trim().slice(0, 300));
        st.url = 'https://' + pid + '.web.app'; simpanSt(); catat('Hosting + aturan Firestore dideploy: ' + st.url);
        if (!st.fbAuth) perlu('agen', 'Aktifkan login Email/Password lalu buat akun Admin', 'Buka https://console.firebase.google.com/project/' + pid + '/authentication/providers, aktifkan Email/Password, Simpan (agent-desktop). Lalu jalankan `node rilis.mjs --akun-firebase` (akun Admin dibuat skrip dari akun-awal.json, tanpa mengetik password).');
      }
      H.url = st.url;
      if (o.akunFirebase) {
        const ak = JSON.parse(baca('akun-awal.json'));
        for (const a of ak.akun) {
          const r = await ambil('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + encodeURIComponent(st.fbConfig.apiKey), { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email: a.email, password: a.password, returnSecureToken: false }) });
          const j = await r.json().catch(() => ({}));
          if (!r.ok && !/EMAIL_EXISTS/.test(JSON.stringify(j))) { perlu('agen', 'Login Email/Password belum aktif', 'Aktifkan dulu di console (lihat langkah sebelumnya), lalu ulangi --akun-firebase'); return sel('perlu_agen'); }
          catat('Akun ' + a.peran + ' Firebase siap: ' + a.email);
        }
        st.fbAuth = true; simpanSt();
      }
      if (!(await cekLive(H.url, hanyaCek ? Math.min(tungguMs, 60000) : 30000))) throw new Error('Link ' + H.url + ' belum menampilkan aplikasi ini');
      catat('Link live terbuka dan berisi aplikasi ini');
      return sel(H.perlu.length ? 'perlu_agen' : 'live');
    }

    if (man.mesin === 'Vercel + Supabase') {
      const web = join(dir, 'web');
      if (!hanyaCek) {
        if (!butuhCli('vercel')) return sel('perlu_agen');
        if (exec('vercel', ['whoami'], { cwd: dir }).code !== 0) { perlu('pemilik', 'Login Vercel sekali', 'Jalankan `vercel login` di Command Prompt.'); return sel('perlu_pemilik'); }
        const sbFile = join(dir, 'supabase.json');
        const sb = existsSync(sbFile) ? JSON.parse(readFileSync(sbFile, 'utf8')) : null;
        if (!sb || !sb.url || !sb.anonKey) {
          perlu('agen', 'Siapkan Supabase', 'Lewat agent-desktop di https://supabase.com/dashboard (sudah login): New project (paket Free; bila diminta bayar, berhenti dan tanya pemilik), password database dibuat acak oleh dashboard (jangan diketik ulang). SQL Editor: tempel isi schema.sql, Run. Settings > API: salin Project URL dan anon public key ke supabase.json di folder ini: {"url":"...","anonKey":"..."}. Lalu jalankan rilis.mjs lagi.');
          return sel('perlu_agen');
        }
        mkdirSync(web, { recursive: true });
        let h = siapkanHtml(baca('index.html'));
        h = h.replace(/((?:const|let|var)\s+SUPABASE_URL\s*=\s*)(['"`])[^'"`]*\2/, (m, a, q) => a + q + sb.url + q).replace(/((?:const|let|var)\s+SUPABASE_ANON_KEY\s*=\s*)(['"`])[^'"`]*\2/, (m, a, q) => a + q + sb.anonKey + q);
        writeFileSync(join(web, 'index.html'), h);
        const nama = ('zuno-' + man.slug + '-' + String(man.kode || '').toLowerCase()).replace(/[^a-z0-9-]/g, '-').slice(0, 90);
        if (!st.vercelLink) { const l = exec('vercel', ['link', '--yes', '--project', nama], { cwd: web }); if (l.code !== 0) throw new Error('vercel link gagal: ' + (l.out + l.err).trim().slice(0, 300)); st.vercelLink = nama; simpanSt(); }
        const d = exec('vercel', ['deploy', '--prod', '--yes'], { cwd: web, timeout: 900000 });
        const u = (d.out.match(/https:\/\/[a-z0-9.-]+\.vercel\.app/gi) || []).pop();
        if (d.code !== 0 || !u) throw new Error('vercel deploy gagal: ' + (d.out + d.err).trim().slice(0, 300));
        st.url = u; simpanSt(); catat('Dideploy ke Vercel: ' + u);
      }
      H.url = st.url;
      if (!(await cekLive(H.url, 30000))) { perlu('agen', 'Link Vercel belum terbuka publik', 'Bila diminta login Vercel: matikan Vercel Authentication di Settings > Deployment Protection proyek ' + (st.vercelLink || '') + ' lewat agent-desktop, lalu `node rilis.mjs --cek`.'); return sel('perlu_agen'); }
      catat('Link live terbuka dan berisi aplikasi ini');
      return sel('live');
    }
    throw new Error('Mesin tidak dikenal: ' + man.mesin);
  } catch (e) {
    H.galat = String(e && e.message || e);
    return sel('gagal');
  }
}

export function tulisLaporan(dir, H) {
  writeFileSync(join(dir, 'hasil-rilis.json'), JSON.stringify(H, null, 2));
  const L = ['# Laporan rilis: ' + H.nama, '', '- Pemilik: ' + (H.pemilik || '-'), '- Proyek: ' + H.proyek + ' · mesin ' + H.mesin, '- Status: **' + H.status + '**', '- Link: ' + (H.url || '-')];
  if (H.spreadsheet) L.push('- Spreadsheet data: ' + H.spreadsheet);
  if (H.galat) L.push('- Galat: ' + H.galat);
  L.push('', '## Langkah', ...H.langkah.map((x) => '- ' + x));
  if (H.perlu.length) L.push('', '## Masih perlu', ...H.perlu.map((p) => '- [' + p.siapa + '] ' + p.apa + ': ' + p.cara));
  writeFileSync(join(dir, 'LAPORAN-RILIS.md'), L.join('\n') + '\n');
}

const KODE = { live: 0, perlu_agen: 10, perlu_pemilik: 20, gagal: 1 };
if (process.argv[1] && /(^|[\\/])rilis\.mjs$/i.test(process.argv[1])) {
  const dir = dirname(fileURLToPath(import.meta.url));
  const H = await rilis(dir, { cek: process.argv.includes('--cek'), akunFirebase: process.argv.includes('--akun-firebase') });
  tulisLaporan(dir, H);
  console.log(JSON.stringify({ status: H.status, url: H.url, perlu: H.perlu, galat: H.galat || null }));
  process.exit(KODE[H.status] ?? 1);
}
