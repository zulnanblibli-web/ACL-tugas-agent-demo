// Uji tools/rilis/rilis.mjs (skrip rilis di laptop Zulnan) tanpa internet dan tanpa CLI asli:
// clasp / firebase / vercel / npm diganti tiruan, link live diganti fetch tiruan.
// Jalankan: node tests/zuno-rilis-laptop-test.mjs
import { mkdtempSync, writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { rilis, tulisLaporan } = await import(pathToFileURL(join(root, 'tools/rilis/rilis.mjs')).href);
const out = []; const ok = (n, v) => out.push([n, !!v]);
const HTML = '<!DOCTYPE html><html><head><meta charset="utf-8"><script>const IS_PREVIEW = true; const GAS_URL = ""; const firebaseConfig = {apiKey:"ISI"}; const SUPABASE_URL = ""; const SUPABASE_ANON_KEY = "";</script></head><body>App</body></html>';
function paket(mesin, extra = {}) {
  const d = mkdtempSync(join(tmpdir(), 'zuno-rilis-'));
  writeFileSync(join(d, 'rilis.json'), JSON.stringify(Object.assign({ id: 'PRJ-261106-AB7', kode: 'AB7', nama: 'Absensi Siswa', slug: 'absensi-siswa', mesin, backend: mesin === 'Firebase' ? 'firestore.rules' : mesin === 'Vercel + Supabase' ? 'schema.sql' : 'Code.gs', opsi: { izinGoogleOtomatis: false } }, extra)));
  writeFileSync(join(d, 'index.html'), HTML);
  writeFileSync(join(d, 'Code.gs'), 'function doGet(){ setupDatabase(); return HtmlService.createHtmlOutputFromFile("Index"); }');
  writeFileSync(join(d, 'firestore.rules'), 'rules_version = "2";');
  writeFileSync(join(d, 'akun-awal.json'), JSON.stringify({ akun: [{ peran: 'Admin', email: 'admin_x@zuno.local', password: 'RahasiaAdm1n' }] }));
  return d;
}
function tiruan(cfg = {}) {
  const calls = [];
  const exec = (cmd, args, o) => {
    calls.push({ cmd, args, cwd: o && o.cwd }); const a = args.join(' ');
    if (cmd === 'npm') { cfg.terpasang = true; return { code: 0, out: 'added 1', err: '' }; }
    if (args[0] === '--version') return cfg.tanpaCli && !cfg.terpasang ? { code: 1, out: '', err: 'not found' } : { code: 0, out: '1.0', err: '' };
    if (cmd === 'clasp') {
      if (a === '--json show-authorized-user') return { code: 0, out: JSON.stringify(cfg.belumLogin ? { loggedIn: false } : { loggedIn: true, email: 'zulnan@contoh.id' }), err: '' };
      if (a.startsWith('--json create-script')) {
        if (cfg.apiMati) return { code: 1, out: '', err: 'User has not enabled the Apps Script API. Enable it by visiting https://script.google.com/home/usersettings' };
        mkdirSync(join(o.cwd, 'gas'), { recursive: true }); writeFileSync(join(o.cwd, 'gas', 'Code.js'), '// bawaan'); writeFileSync(join(o.cwd, '.clasp.json'), '{"scriptId":"S1","rootDir":"gas"}');
        return { code: 0, out: '{\n  "scriptId": "S1",\n  "parentId": "SHEET1",\n  "files": []\n}', err: '' };
      }
      if (a === 'push --force') { cfg.pushed = readFileSync(join(o.cwd, 'gas', 'Index.html'), 'utf8'); return { code: 0, out: 'Pushed 3 files.', err: '' }; }
      if (a.startsWith('--json create-deployment')) return { code: 0, out: '{"deploymentId":"AKfyDEP1","versionNumber":' + (args.includes('-i') ? 2 : 1) + '}', err: '' };
    }
    if (cmd === 'firebase') {
      if (args[0] === 'login:list') return { code: 0, out: JSON.stringify({ status: 'success', result: [{ user: { email: 'z@contoh.id' } }] }), err: '' };
      if (args[0] === 'projects:create') return { code: 0, out: '{"status":"success","result":{"projectId":"' + args[1] + '"}}', err: '' };
      if (args[0] === 'apps:create') return { code: 0, out: '{"status":"success","result":{"appId":"1:2:web:3"}}', err: '' };
      if (args[0] === 'apps:sdkconfig') return { code: 0, out: '{"status":"success","result":{"fileName":"x","sdkConfig":{"apiKey":"AIzaUJI","projectId":"p"}}}', err: '' };
      if (args[0] === 'firestore:databases:create') return { code: 0, out: '{}', err: '' };
      if (args[0] === 'deploy') { cfg.fbHtml = readFileSync(join(o.cwd, 'public', 'index.html'), 'utf8'); cfg.fbJson = readFileSync(join(o.cwd, 'firebase.json'), 'utf8'); return { code: 0, out: '{"status":"success"}', err: '' }; }
    }
    if (cmd === 'vercel') {
      if (args[0] === 'whoami') return { code: 0, out: 'zulnan', err: '' };
      if (args[0] === 'link') return { code: 0, out: 'Linked', err: '' };
      if (args[0] === 'deploy') { cfg.vHtml = readFileSync(join(o.cwd, 'index.html'), 'utf8'); return { code: 0, out: 'Inspect: https://vercel.com/x\nProduction: https://zuno-absensi-siswa-ab7.vercel.app', err: '' }; }
    }
    return { code: 1, out: '', err: 'perintah tak terduga: ' + cmd + ' ' + a };
  };
  const fetch = async (u, o = {}) => {
    calls.push({ fetch: u, method: o.method || 'GET', body: o.body });
    if (/identitytoolkit/.test(u)) return cfg.authMati ? new Response('{"error":{"message":"OPERATION_NOT_ALLOWED"}}', { status: 400 }) : new Response('{"idToken":"x"}', { status: 200 });
    if (cfg.izin && !cfg.diizinkan) return new Response('<html>Authorization is required to perform that action. accounts.google.com</html>', { status: 200 });
    return new Response('<html>' + (cfg.halaman || '<!-- ZUNORILISPRJ261106AB7 --> App') + '</html>', { status: 200 });
  };
  return { exec, fetch, calls, cfg };
}
const O = (t, x = {}) => Object.assign({ exec: t.exec, fetch: t.fetch, tungguMs: 0, jedaMs: 0, diam: true }, x);

// Apps Script + Google Sheets
let d = paket('Apps Script + Google Sheets'), t = tiruan({ belumLogin: true }), H = await rilis(d, O(t));
ok('GAS belum login clasp -> perlu_pemilik + cara login sekali', H.status === 'perlu_pemilik' && /clasp login/.test(H.perlu[0].cara));
t = tiruan({ apiMati: true }); H = await rilis(d, O(t));
ok('GAS Apps Script API mati -> perlu_pemilik + link usersettings', H.status === 'perlu_pemilik' && /usersettings/.test(H.perlu[0].cara));
d = paket('Apps Script + Google Sheets'); t = tiruan({ tanpaCli: true }); H = await rilis(d, O(t));
ok('GAS clasp belum terpasang -> dipasang sendiri lewat npm -g', t.calls.some((c) => c.cmd === 'npm' && c.args.join(' ') === 'install -g @google/clasp --no-audit --no-fund'));
ok('GAS rilis pertama -> live + link /exec + spreadsheet', H.status === 'live' && H.url === 'https://script.google.com/macros/s/AKfyDEP1/exec' && /SHEET1/.test(H.spreadsheet));
ok('GAS spreadsheet + script dibuat (create-script --type sheets --rootDir gas)', t.calls.some((c) => c.cmd === 'clasp' && /create-script --type sheets --title Absensi Siswa --rootDir gas/.test(c.args.join(' '))));
ok('GAS Index.html dikirim dengan IS_PREVIEW = false + penanda proyek', /const IS_PREVIEW = false/.test(t.cfg.pushed) && /ZUNORILISPRJ261106AB7/.test(t.cfg.pushed));
const mf = JSON.parse(readFileSync(join(d, 'gas', 'appsscript.json'), 'utf8'));
ok('GAS manifest web app: jalan sebagai pemilik, akses semua orang', mf.webapp.executeAs === 'USER_DEPLOYING' && mf.webapp.access === 'ANYONE_ANONYMOUS' && mf.runtimeVersion === 'V8');
ok('GAS Code.js bawaan dihapus, Code.gs dari paket dipakai', !existsSync(join(d, 'gas', 'Code.js')) && /setupDatabase/.test(readFileSync(join(d, 'gas', 'Code.gs'), 'utf8')));
t = tiruan({}); H = await rilis(d, O(t));
ok('GAS rilis ulang: tanpa create-script, deploy -i ke deployment yang sama (link tetap)', H.status === 'live' && !t.calls.some((c) => /create-script/.test((c.args || []).join(' '))) && t.calls.some((c) => c.cmd === 'clasp' && c.args.includes('-i') && c.args.includes('AKfyDEP1')));
d = paket('Apps Script + Google Sheets'); t = tiruan({ izin: true }); H = await rilis(d, O(t));
ok('GAS aplikasi baru belum diberi izin Google -> perlu_pemilik dengan langkah Izinkan (default tidak diklik agen)', H.status === 'perlu_pemilik' && /Izinkan/.test(H.perlu[0].cara) && H.perlu[0].siapa === 'pemilik' && H.cek.izin_google);
t.cfg.diizinkan = true; H = await rilis(d, O(t, { cek: true }));
ok('GAS --cek setelah diizinkan -> live tanpa deploy ulang', H.status === 'live' && !t.calls.slice(-3).some((c) => c.cmd));
d = paket('Apps Script + Google Sheets', { opsi: { izinGoogleOtomatis: true } }); t = tiruan({ izin: true }); H = await rilis(d, O(t));
ok('GAS izinGoogleOtomatis=true -> langkah izin jadi tugas agen (perlu_agen)', H.status === 'perlu_agen' && H.perlu[0].siapa === 'agen');
// Blogger
d = paket('Apps Script + Blogger'); t = tiruan({}); H = await rilis(d, O(t));
const bw = readFileSync(join(d, 'blogger-widget.html'), 'utf8');
ok('Blogger: backend live di Apps Script, blogger-widget.html berisi GAS_URL, tempel Blogger jadi langkah agen', H.status === 'perlu_agen' && /const GAS_URL = "https:\/\/script\.google\.com\/macros\/s\/AKfyDEP1\/exec"/.test(bw) && /Blogger/.test(H.perlu[0].apa));
// Firebase
d = paket('Firebase'); t = tiruan({}); H = await rilis(d, O(t));
ok('Firebase: proyek + web app + Firestore dibuat, hosting + rules dideploy', ['projects:create', 'apps:create', 'apps:sdkconfig', 'firestore:databases:create', 'deploy'].every((k) => t.calls.some((c) => c.cmd === 'firebase' && c.args[0] === k)) && H.url === 'https://zuno-absensi-siswa-ab7.web.app');
ok('Firebase: firebaseConfig asli disuntik ke index.html, IS_PREVIEW = false', /const firebaseConfig = \{"apiKey":"AIzaUJI"/.test(t.cfg.fbHtml) && /IS_PREVIEW = false/.test(t.cfg.fbHtml) && /firestore\.rules/.test(t.cfg.fbJson));
ok('Firebase: aktifkan Email/Password = langkah agen (agent-desktop)', H.status === 'perlu_agen' && /Email\/Password/.test(H.perlu[0].apa));
t.cfg.authMati = true; H = await rilis(d, O(t, { akunFirebase: true }));
ok('Firebase --akun-firebase saat Email/Password belum aktif -> perlu_agen lagi', H.status === 'perlu_agen');
t.cfg.authMati = false; H = await rilis(d, O(t, { akunFirebase: true }));
const su = t.calls.filter((c) => c.fetch && /signUp/.test(c.fetch)).pop();
ok('Firebase --akun-firebase: akun Admin dibuat skrip lewat API (tanpa mengetik), lalu live', H.status === 'live' && su && JSON.parse(su.body).email === 'admin_x@zuno.local');
// Vercel + Supabase
d = paket('Vercel + Supabase'); t = tiruan({}); H = await rilis(d, O(t));
ok('Supabase belum disiapkan -> langkah agen (dashboard + schema.sql + supabase.json)', H.status === 'perlu_agen' && /supabase\.json/.test(H.perlu[0].cara));
writeFileSync(join(d, 'supabase.json'), JSON.stringify({ url: 'https://abc.supabase.co', anonKey: 'eyJanon' }));
H = await rilis(d, O(t));
ok('Vercel + Supabase: URL + anon key disuntik, deploy --prod, link dari keluaran vercel', H.status === 'live' && H.url === 'https://zuno-absensi-siswa-ab7.vercel.app' && /SUPABASE_URL = "https:\/\/abc\.supabase\.co"/.test(t.cfg.vHtml) && /SUPABASE_ANON_KEY = "eyJanon"/.test(t.cfg.vHtml));
// laporan
tulisLaporan(d, H);
ok('Laporan: hasil-rilis.json + LAPORAN-RILIS.md ditulis', existsSync(join(d, 'hasil-rilis.json')) && /Status: \*\*live\*\*/.test(readFileSync(join(d, 'LAPORAN-RILIS.md'), 'utf8')));
// dijalankan sebagai program (seperti di laptop): clasp palsu di PATH, kode keluar + baris JSON terakhir
if (process.platform !== 'win32') {
  const { spawnSync } = await import('node:child_process');
  const { copyFileSync, chmodSync } = await import('node:fs');
  const dp = paket('Apps Script + Google Sheets'), bin = mkdtempSync(join(tmpdir(), 'zuno-bin-'));
  copyFileSync(join(root, 'tools/rilis/rilis.mjs'), join(dp, 'rilis.mjs'));
  writeFileSync(join(bin, 'clasp'), '#!/usr/bin/env node\nconst a=process.argv.slice(2).join(" "),fs=require("fs");\nif(a==="--version")console.log("3.4.1");\nelse if(a==="--json show-authorized-user")console.log(JSON.stringify({loggedIn:!process.env.BELUM}));\nelse if(a.startsWith("--json create-script")){fs.mkdirSync("gas",{recursive:true});console.log(JSON.stringify({scriptId:"S9",parentId:"P9",files:[]}))}\nelse if(a==="push --force")console.log("Pushed");\nelse if(a.startsWith("--json create-deployment"))console.log(JSON.stringify({deploymentId:"DEP9"}));\nelse process.exit(3);\n');
  chmodSync(join(bin, 'clasp'), 0o755);
  const env = Object.assign({}, process.env, { PATH: bin + ':' + process.env.PATH });
  let r = spawnSync(process.execPath, ['rilis.mjs'], { cwd: dp, env: Object.assign({}, env, { BELUM: '1' }), encoding: 'utf8' });
  const j1 = JSON.parse(r.stdout.trim().split('\n').pop());
  ok('Program: belum login -> kode keluar 20, JSON terakhir status perlu_pemilik', r.status === 20 && j1.status === 'perlu_pemilik');
  r = spawnSync(process.execPath, ['rilis.mjs'], { cwd: dp, env, encoding: 'utf8', timeout: 60000 });
  const j2 = JSON.parse(r.stdout.trim().split('\n').pop());
  ok('Program: link /exec tanpa izin (fetch asli gagal di sandbox) -> kode 20 + langkah izin, laporan ditulis', r.status === 20 && j2.url === 'https://script.google.com/macros/s/DEP9/exec' && existsSync(join(dp, 'LAPORAN-RILIS.md')) && existsSync(join(dp, '.zuno-rilis-state.json')));
}
// salinan di prototipe harus sama dengan sumber
const proto = readFileSync(join(root, 'prototypes/zuno-studio-v2.html'), 'utf8');
const m = proto.match(/<script type="text\/plain" id="zuno-rilis-mjs">\n([\s\S]*?)<\/script>/);
ok('Salinan rilis.mjs di prototipe sama dengan tools/rilis/rilis.mjs (jalankan node tools/rilis/sisip.mjs bila beda)', m && m[1] === readFileSync(join(root, 'tools/rilis/rilis.mjs'), 'utf8'));

let all = true;
for (const [n, v] of out) { console.log((v ? 'LOLOS ' : 'GAGAL ') + n); if (!v) all = false; }
console.log(out.length + ' cek. ' + (all ? 'HASIL: SEMUA LOLOS' : 'HASIL: ADA YANG GAGAL'));
process.exit(all ? 0 : 1);
