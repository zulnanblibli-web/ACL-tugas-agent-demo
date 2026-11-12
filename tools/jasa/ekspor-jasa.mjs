// Ekspor Zuno Studio edisi jasa (white-label) ke folder repo jasa.
// Sumber tetap satu: web/ (hasil node web/build.mjs dari prototypes/zuno-studio-v2.html).
// Identitas Zulnan diganti profil brand pembeli (brand.js); API key milik pembeli sendiri.
//
//   node web/build.mjs
//   node tools/jasa/ekspor-jasa.mjs <folder-repo-jasa>
//   node tests/zuno-jasa-test.mjs <folder-repo-jasa>
//
// Setiap penanda harus ditemukan tepat satu kali. Bila Zuno berubah dan penanda hilang,
// ekspor BERHENTI dengan pesan jelas: perbaiki penandanya, jangan dilewati.
import { bangunRuangKerja } from '../../web/bangun.mjs';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { tambahanJasa } from './tambahan-jasa.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const web = join(root, 'web');
const out = process.argv[2];
if (!out) { console.error('Pakai: node tools/jasa/ekspor-jasa.mjs <folder-repo-jasa>'); process.exit(1); }
mkdirSync(out, { recursive: true });

function swapIn(name, text, find, repl) {
  const isRe = find instanceof RegExp;
  const n = isRe ? (text.match(new RegExp(find.source, find.flags.includes('g') ? find.flags : find.flags + 'g')) || []).length : text.split(find).length - 1;
  if (n !== 1) throw new Error('[' + name + '] penanda ditemukan ' + n + ' kali (harus 1): ' + String(find).slice(0, 90));
  return text.replace(find, () => repl);
}

// ---------- halaman ----------
// Sejak 2026-11-12 (Zulnan K1-K3) edisi jasa memakai tampilan Nexaoffice yang sama dengan Workspace web Zulnan
// (web/studio.html), tampilan HUD lama tidak dipakai lagi:
//   K1 pembeli langsung masuk Workspace di "/"; bagian jualan halaman depan (harga, Pesan kit, produk lain) tidak ikut.
//   K2 nama tampil = nama brand pembeli (brand.js), bawaannya "Nexaoffice".
//   K3 kredit "Creative @nexamind.ai" tetap kecil di footer (data-zb-asli: tidak diganti brand.js).
let page = bangunRuangKerja('nexa');
const P = (f, r) => { page = swapIn('index.html', page, f, r); };
P('<meta name="author" content="Creative @nexamind.ai">', '<meta name="author" content="Nexaoffice">');
P(/<ul class="nav-links" id="navLinks">[\s\S]*?<\/ul>/, '<ul class="nav-links" id="navLinks">\n        <li><a href="/" aria-current="page">Workspace</a></li>\n        <li><a href="/#chat" data-buka="chat">Chat</a></li>\n        <li><a href="/office/karakter.html">Karakter agen</a></li>\n      </ul>');
P(/<ul class="footer-links">[\s\S]*?<\/ul>/, '<ul class="footer-links">\n      <li><a href="/">Workspace</a></li>\n      <li><a href="/office/karakter.html">Karakter agen</a></li>\n    </ul>');
P('<p class="credit">Creative @nexamind.ai</p>', '<p class="credit" data-zb-asli>Creative @nexamind.ai</p>');
P('<script src="/live.js"></script>', '<script src="/brand.js"></script>\n<script src="/live.js"></script>');
P(/var SLOGAN='Hai, kenalin Gue Zulnan\.[^'\n]*';/, "var SLOGAN=ZB.slogan||'(tanpa slogan)';");
P(/var SLOGAN_BEATS=\[[^\]\n]*\];/, 'var SLOGAN_BEATS=ZB.sloganBeats.map(function(b){return b.teks});');
P(/karakter:'Avatar voxel Zulnan[^'\n]*'/, "karakter:'Avatar 3D pemilik brand dan Zuno si robot (kepala kotak teal, satu mata biru besar, antena kilat oranye, dada menyala oranye) di studio terang. Bila pemilik mengunggah foto atau avatar, pakai itu sebagai acuan. Wajah dan proporsi karakter tidak boleh berubah.'");
P(/'BRIEF DASAR: [^'\n]*'/, "'BRIEF DASAR: '+ZB.brief");
P(/'PILAR KONTEN \(fondasi[^'\n]*'/, "'PILAR KONTEN (fondasi; setiap konten WAJIB berdiri di satu pilar): '+ZB.pilarTxt+'. Satu konten satu pilar, satu arah, satu janji yang jelas: untuk siapa, masalah apa, dapat apa setelah nonton.'");
P(/'SUARA: [^'\n]*'/, "'SUARA: '+ZB.suara+'.'");
P(/'FAKTA ZULNAN \(bank fakta[^'\n]*'/, "(ZB.fakta?'FAKTA ZULNAN (bank fakta; hanya ini yang boleh dipakai): '+ZB.fakta.replace(/\\s*\\n+\\s*/g,'; ')+'. Dilarang mengarang pengalaman, testimoni, angka, atau fakta lain.':'FAKTA ZULNAN: belum diisi pemilik. Jangan memakai fakta, pengalaman, angka, atau testimoni tentang pemilik sama sekali.')");
P(/'BOFU = BUKTI TENTANG ZULNAN[^'\n]*'/, "'BOFU = BUKTI TENTANG ZULNAN supaya orang percaya: pakai HANYA bank fakta di atas'+(ZB.fakta?'':' (masih kosong: pakai bukti dari sumber luar yang disebut sumbernya, tanpa klaim tentang pemilik)')+', arahkan ke follow dan komentar. TOFU/MOFU: bahan dari sumber luar dan pengetahuan umum, fakta pemilik hanya sebagai bumbu bila pas.'");
P(' (contoh aman: 6 web aktif, sekitar 30 menit per web)', '');
P(/var PILAR=\['Cuan dari AI'[^\]\n]*\];/, 'var PILAR=ZB.pilar.slice();');
P(/var sl=\[\{babak:'slogan'[^\n]*?\}\];/, "var sl=ZB.sloganBeats.map(function(b,i){return {babak:'slogan',teks:b.teks,vo:b.vo,visual:i===0?(tampil?'pemilik menyapa ke kamera':'sapaan dengan animasi masuk'):'teks slogan dengan ikon',detik:i===0?1.8:1.7,wajah:i===0&&tampil}});");
P("var TV_IMG={A:['zuno-zulnan-percakapan.webp'],B:['zuno-tim-orkestrasi.webp']};", "var TV_IMG={A:[],B:['zuno-tim-orkestrasi.webp']};");
P("im.src='/assets/foto-zulnan.webp'", "if(!ZB.foto)return res(null);im.src=ZB.foto");
P("(assets/foto-zulnan.webp)", "(assets/foto-brand.webp)");
P("(web/assets/foto-zulnan.webp)", "(assets/foto-brand.webp, opsional)");
// Fitur yang dibuat langsung di repo jasa (agen E.2/E.3/T.5, tombol Kantor 3D): ditempel ulang tiap ekspor.
for (const t of tambahanJasa) {
  if (t.syarat && !existsSync(join(out, t.syarat))) continue;
  page = swapIn('index.html (tambahan jasa: ' + t.nama + ')', page, t.cari, t.ganti);
}
// Nama produk edisi jasa: Nexaoffice (Zulnan 2026-11-12). Teks "Zuno Studio" di prompt, unduhan, dan paket ikut diganti;
// brand.js lalu menggantinya lagi dengan nama brand pembeli bila sudah diisi. Nama agen ZUNO tidak diubah.
page = page.split('Zuno Studio v2').join('Nexaoffice').split('Zuno Studio').join('Nexaoffice');
for (const sisa of ['/studio.html', 'href="/#hasil"', 'href="/#biaya"', 'href="/#paket"', 'href="/#produk"', 'Pesan kit']) if (page.includes(sisa)) throw new Error('[index.html] masih ada tautan/teks halaman jualan: ' + sisa);
writeFileSync(join(out, 'index.html'), page);

// ---------- jembatan dan tampilan ----------
let live = readFileSync(join(web, 'live.js'), 'utf8');
live = live.split('Zuno Studio').join('Nexaoffice');
live = swapIn('live.js', live, 'JSON.stringify({ input: input,', 'JSON.stringify({ input: window.ZB ? window.ZB.repPrompt(input) : input,');
writeFileSync(join(out, 'live.js'), live);
for (const f of ['hud.js', 'pengaturan-ai.js', 'studio-nexa.css', 'studio-nexa.js', 'ui.js', 'serah.js', 'tim-agen.js']) copyFileSync(join(web, f), join(out, f));
copyFileSync(join(here, 'files', 'brand.js'), join(out, 'brand.js'));
// Tampilan HUD lama (sebelum 2026-11-12) dibuang dari repo jasa.
for (const f of ['hud.css', 'motion.js']) rmSync(join(out, f), { force: true });
mkdirSync(join(out, 'site'), { recursive: true });
for (const f of ['tokens.css', 'gerak.css', 'gerak.js']) copyFileSync(join(web, 'site', f), join(out, 'site', f));

// ---------- Kantor 3D tertanam di Workspace ----------
// Sumber Kantor 3D tetap di repo jasa (kantor.html, office/, nexa.html, nexa/). Versi tertanamnya sama dengan di web Zulnan
// (dibuat tools/kantor/ambil-kantor.mjs): office/ruang.html (Menara Senja, Griya Langit) dan office/grotto.html (The Grotto).
// nexa.html di repo jasa tetap halaman The Grotto mandiri (dipakai tes Kantor 3D), jadi versi tertanamnya diberi nama lain.
mkdirSync(join(out, 'office'), { recursive: true });
for (const f of ['sematan.css', 'sematan.js', 'nexa-sematan.css', 'nexa-sematan.js']) copyFileSync(join(web, 'office', f), join(out, 'office', f));
writeFileSync(join(out, 'office', 'ruang.html'), readFileSync(join(web, 'office', 'ruang.html'), 'utf8').split('Zuno Studio').join('Nexaoffice'));
writeFileSync(join(out, 'office', 'kendali.js'), swapIn('office/kendali.js', readFileSync(join(web, 'office', 'kendali.js'), 'utf8'), "'/nexa.html?'", "'/office/grotto.html?'"));
writeFileSync(join(out, 'office', 'grotto.html'), swapIn('office/grotto.html', readFileSync(join(web, 'nexa.html'), 'utf8'), 'href="/studio.html"', 'href="/"'));

// ---------- server Node untuk laptop/VPS (menu Pengaturan AI > Server VPS) ----------
// Isi sama dengan web/dev-server.mjs; di repo jasa namanya server.mjs dan berada di folder utama.
let srv = readFileSync(join(web, 'dev-server.mjs'), 'utf8').split('web\\').join('').split('web/').join('').split('folder web').join('folder repo ini');
writeFileSync(join(out, 'server.mjs'), srv);
copyFileSync(join(web, '.env.local.example'), join(out, '.env.local.example'));
mkdirSync(join(out, 'tools', 'vps'), { recursive: true });
for (const f of readdirSync(join(root, 'tools', 'vps'))) copyFileSync(join(root, 'tools', 'vps', f), join(out, 'tools', 'vps', f));
mkdirSync(join(out, 'docs'), { recursive: true });
copyFileSync(join(root, 'docs', 'vps-nexaoffice.md'), join(out, 'docs', 'vps-nexaoffice.md'));

// ---------- server: penyedia otomatis dari key yang diisi pembeli ----------
const AUTO = "(process.env.AI_PROVIDER || (process.env.GEMINI_API_KEY ? 'gemini' : process.env.OPENROUTER_API_KEY ? 'openrouter' : process.env.OPENAI_API_KEY ? 'openai' : 'claude'))";
mkdirSync(join(out, 'api'), { recursive: true });
let ai = readFileSync(join(web, 'api', 'ai.js'), 'utf8');
ai = swapIn('api/ai.js', ai, "(process.env.AI_PROVIDER || 'claude')", AUTO);
writeFileSync(join(out, 'api', 'ai.js'), ai);
let st = readFileSync(join(web, 'api', 'status.js'), 'utf8');
st = swapIn('api/status.js', st, "(process.env.AI_PROVIDER || 'claude')", AUTO);
writeFileSync(join(out, 'api', 'status.js'), st);
for (const f of readdirSync(join(web, 'api'))) if (!['ai.js', 'status.js'].includes(f)) copyFileSync(join(web, 'api', f), join(out, 'api', f));

// ---------- aset: tanpa foto dan avatar Zulnan ----------
const SKIP_ASSET = /foto-zulnan|zulnan|README/i;
// Aset khusus situs Nexaoffice dan salinan Kantor 3D (sumbernya repo jasa sendiri) tidak ikut ke jasa.
const SKIP_TOP = new Set(['agents', 'themes', 'nexa', 'site', 'fonts', 'nexaoffice-alur.mp4', 'nexaoffice-alur.webm', 'nexaoffice-alur.webp', 'agen-profil.json']); // agen-profil.json: profil tim Zulnan untuk menu Tambah agen (hanya edisi Nexaoffice)
function copyDir(a, b, top = false) {
  mkdirSync(b, { recursive: true });
  for (const f of readdirSync(a)) {
    if (top && SKIP_TOP.has(f)) continue;
    const s = join(a, f);
    if (statSync(s).isDirectory()) copyDir(s, join(b, f));
    else if (!SKIP_ASSET.test(f)) copyFileSync(s, join(b, f));
  }
}
// Folder aset milik repo jasa sendiri (Kantor 3D: 18 GLB agen, preview tema; The Grotto: assets/nexa) tidak ikut dihapus.
const KEEP_ASSETS = ['agents', 'themes', 'nexa'];
if (existsSync(join(out, 'assets'))) for (const f of readdirSync(join(out, 'assets'))) if (!KEEP_ASSETS.includes(f)) rmSync(join(out, 'assets', f), { recursive: true, force: true });
copyDir(join(web, 'assets'), join(out, 'assets'), true);
// Huruf angka/kode Workspace (JetBrains Mono, SIL OFL).
mkdirSync(join(out, 'assets', 'fonts'), { recursive: true });
copyFileSync(join(web, 'assets', 'fonts', 'jetbrains-mono-latin-400-normal.woff2'), join(out, 'assets', 'fonts', 'jetbrains-mono-latin-400-normal.woff2'));
// Profil 18 agen untuk menu Tambah agen (isian contoh + kode yang sudah dipakai), tanpa data pribadi Zulnan:
// gaya bicara dan memori (berisi suara Zulnan) dikosongkan; nama Zulnan jadi "pemilik".
{
  const prof = JSON.parse(readFileSync(join(web, 'assets', 'agen-profil.json'), 'utf8'));
  const PRIBADI = /Gue |gue |Hai, kenalin|6 web aktif|sales sekitar|FMCG|keriting|foto-zulnan/;
  const bersih = (v) => typeof v === 'string' ? v.replace(/6 web aktif Zulnan/g, 'produk pemilik').replace(/"?Creative @nexamind\.ai"?/g, 'kredit pemilik').replace(/kredit Nexamind/g, 'kredit pemilik').replace(/ZULNAN/g, 'PEMILIK').replace(/Zulnan/g, 'pemilik')
    : Array.isArray(v) ? v.map(bersih).filter((x) => !(typeof x === 'string' && PRIBADI.test(x))) : v;
  prof.agen = prof.agen.map((a) => { const o = {}; for (const [k, v] of Object.entries(a)) o[k] = ['gaya', 'memori'].includes(k) ? (Array.isArray(v) ? [] : '') : bersih(v); return o; });
  const teks = JSON.stringify(prof, null, 1);
  if (/zulnan|nexamind/i.test(teks) || PRIBADI.test(teks)) throw new Error('assets/agen-profil.json jasa masih memuat data pribadi Zulnan');
  writeFileSync(join(out, 'assets', 'agen-profil.json'), teks + '\n');
}

// ---------- paket, konfigurasi, dokumen ----------
// package.json digabung: dependensi Zuno + dependensi/script/devDependencies milik repo jasa (Kantor 3D) tetap ada.
const pkg = JSON.parse(readFileSync(join(web, 'package.json'), 'utf8'));
pkg.name = 'zuno-studio-jasa'; delete pkg.scripts;
const outPkgFile = join(out, 'package.json');
const old = existsSync(outPkgFile) ? JSON.parse(readFileSync(outPkgFile, 'utf8')) : {};
const extraDeps = Object.keys(old.dependencies || {}).filter(d => !(d in (pkg.dependencies || {})));
const jasaLokal = extraDeps.length || old.devDependencies || old.scripts;
if (jasaLokal) {
  pkg.dependencies = { ...(old.dependencies || {}), ...(pkg.dependencies || {}) };
  if (old.devDependencies) pkg.devDependencies = old.devDependencies;
  if (old.scripts) pkg.scripts = old.scripts;
}
writeFileSync(outPkgFile, JSON.stringify(pkg, null, 2) + '\n');
if (jasaLokal) {
  // package-lock repo jasa dipertahankan; pastikan dependensi Zuno sudah ada di dalamnya.
  const lockFile = join(out, 'package-lock.json');
  const lock = existsSync(lockFile) ? JSON.parse(readFileSync(lockFile, 'utf8')) : {};
  const missing = Object.keys(pkg.dependencies || {}).filter(d => !(lock.packages && lock.packages['node_modules/' + d]));
  if (missing.length) throw new Error('package-lock.json repo jasa belum memuat: ' + missing.join(', ') + '. Jalankan "npm install" di repo jasa lalu ekspor lagi.');
} else if (existsSync(join(web, 'package-lock.json'))) {
  const lock = JSON.parse(readFileSync(join(web, 'package-lock.json'), 'utf8'));
  lock.name = pkg.name; if (lock.packages && lock.packages['']) lock.packages[''].name = pkg.name;
  writeFileSync(join(out, 'package-lock.json'), JSON.stringify(lock, null, 2) + '\n');
}
// vercel.json tanpa redirect /kantor.html: repo jasa masih memakai halaman kantor.html sendiri.
{ const vj = JSON.parse(readFileSync(join(web, 'vercel.json'), 'utf8')); delete vj.redirects; writeFileSync(join(out, 'vercel.json'), JSON.stringify(vj, null, 2) + '\n'); }
for (const f of readdirSync(join(here, 'files'))) if (f !== 'brand.js') copyFileSync(join(here, 'files', f), join(out, f.replace(/^dot-/, '.')));

// ---------- pasang lokal: skill, subagent, pemasang satu perintah (Zulnan 2026-11-11) ----------
// Skill pihak ketiga ikut (lisensi MIT/Apache, LICENSE di tiap folder). Tidak ikut:
// - lisensi isi belum pasti untuk dijual ulang (disarankan dipasang sendiri, PANDUAN-LOKAL.md bagian 6);
// - skill khusus Zuno/Zulnan (aturan dan data pribadi).
const keb = JSON.parse(readFileSync(join(root, 'tools', 'pasang', 'kebutuhan-skill.json'), 'utf8'));
const SKILL_TAK_IKUT = new Set([...Object.keys(keb.tidak_ikut_jasa), ...keb.khusus_zuno]);
const salinBersih = (a, b) => { // tanpa __pycache__ dan berkas .pyc
  mkdirSync(b, { recursive: true });
  for (const f of readdirSync(a)) {
    if (f === '__pycache__' || f.endsWith('.pyc')) continue;
    const s = join(a, f);
    if (statSync(s).isDirectory()) salinBersih(s, join(b, f)); else copyFileSync(s, join(b, f));
  }
};
const skillOut = join(out, '.claude', 'skills');
rmSync(skillOut, { recursive: true, force: true });
for (const d of readdirSync(join(root, '.claude', 'skills'))) {
  const s = join(root, '.claude', 'skills', d);
  if (!statSync(s).isDirectory() || SKILL_TAK_IKUT.has(d)) continue;
  salinBersih(s, join(skillOut, d));
}
copyFileSync(join(here, 'skills-README.md'), join(skillOut, 'README.md'));
mkdirSync(join(out, '.claude', 'agents'), { recursive: true });
for (const f of readdirSync(join(root, '.claude', 'agents'))) if (/^impeccable-.*\.md$/.test(f)) copyFileSync(join(root, '.claude', 'agents', f), join(out, '.claude', 'agents', f));
salinBersih(join(root, 'tools', 'pasang'), join(out, 'tools', 'pasang'));
for (const f of ['pasang.bat', 'pasang.sh']) copyFileSync(join(root, f), join(out, f));
// jalankan-lokal.bat: di repo jasa server.mjs ada di folder utama (bukan web\dev-server.mjs).
let bat = readFileSync(join(root, 'jalankan-lokal.bat'), 'utf8');
for (const [a, b] of [['Zuno Web lokal', 'Nexaoffice lokal'], ['"%~dp0web\\dev-server.mjs"', '"%~dp0server.mjs"'], ['cd /d "%~dp0web"', 'cd /d "%~dp0"'], ['node dev-server.mjs --buka', 'node server.mjs --buka']]) {
  if (!bat.includes(a)) throw new Error('[jalankan-lokal.bat] penanda tidak ditemukan: ' + a);
  bat = bat.split(a).join(b);
}
bat = bat.split('web\\server-lokal.log').join('server-lokal.log').split('web\\.env.local').join('.env.local').split('(sejajar dengan folder web)').join('(sejajar dengan server.mjs)').split('Folder "web" tidak ditemukan').join('server.mjs tidak ditemukan').split('Kirim isi server-lokal.log ke Claude Code').join('Kirim isi server-lokal.log ke penjual');
writeFileSync(join(out, 'jalankan-lokal.bat'), bat);

let ver = 'tidak diketahui';
try { ver = execSync('git rev-parse --short HEAD', { cwd: root }).toString().trim(); } catch (e) {}
writeFileSync(join(out, 'VERSI.txt'), 'Nexaoffice edisi jasa\nDiekspor: ' + new Date().toISOString().slice(0, 10) + '\nSumber Zuno: ' + ver + '\n');

// ---------- cek akhir: tidak ada identitas Zulnan tersisa yang tidak terlindungi ----------
const leaks = [];
for (const f of ['index.html', 'live.js', 'hud.js', 'studio-nexa.css', 'ui.js', 'tim-agen.js', 'serah.js', 'pengaturan-ai.js', 'office/grotto.html', 'office/ruang.html', 'assets/agen-profil.json', 'server.mjs', 'api/ai.js', 'api/status.js', 'api/riset.js', 'api/gambar.js']) {
  const t = readFileSync(join(out, f), 'utf8');
  for (const bad of ['sales sekitar 12 tahun', 'FMCG', '6 web aktif', 'rambut hitam keriting', 'foto-zulnan', 'zuno-zulnan-percakapan']) if (t.includes(bad)) leaks.push(f + ': ' + bad);
}
if (leaks.length) throw new Error('Masih ada data pribadi Zulnan:\n' + leaks.join('\n'));
console.log('Edisi jasa diekspor ke ' + out + ' (sumber ' + ver + ')');
