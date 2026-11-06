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
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

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
let page = readFileSync(join(web, 'index.html'), 'utf8');
const P = (f, r) => { page = swapIn('index.html', page, f, r); };
P('<meta name="author" content="Creative @nexamind.ai">', '<meta name="author" content="Zuno Studio">');
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
writeFileSync(join(out, 'index.html'), page);

// ---------- jembatan dan tampilan ----------
let live = readFileSync(join(web, 'live.js'), 'utf8');
live = swapIn('live.js', live, 'JSON.stringify({ input: input,', 'JSON.stringify({ input: window.ZB ? window.ZB.repPrompt(input) : input,');
writeFileSync(join(out, 'live.js'), live);
for (const f of ['hud.css', 'hud.js', 'motion.js']) copyFileSync(join(web, f), join(out, f));
copyFileSync(join(here, 'files', 'brand.js'), join(out, 'brand.js'));

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
function copyDir(a, b) {
  mkdirSync(b, { recursive: true });
  for (const f of readdirSync(a)) {
    const s = join(a, f);
    if (statSync(s).isDirectory()) copyDir(s, join(b, f));
    else if (!SKIP_ASSET.test(f)) copyFileSync(s, join(b, f));
  }
}
if (existsSync(join(out, 'assets'))) rmSync(join(out, 'assets'), { recursive: true, force: true });
copyDir(join(web, 'assets'), join(out, 'assets'));

// ---------- paket, konfigurasi, dokumen ----------
const pkg = JSON.parse(readFileSync(join(web, 'package.json'), 'utf8'));
pkg.name = 'zuno-studio-jasa'; delete pkg.scripts;
writeFileSync(join(out, 'package.json'), JSON.stringify(pkg, null, 2) + '\n');
if (existsSync(join(web, 'package-lock.json'))) {
  const lock = JSON.parse(readFileSync(join(web, 'package-lock.json'), 'utf8'));
  lock.name = pkg.name; if (lock.packages && lock.packages['']) lock.packages[''].name = pkg.name;
  writeFileSync(join(out, 'package-lock.json'), JSON.stringify(lock, null, 2) + '\n');
}
copyFileSync(join(web, 'vercel.json'), join(out, 'vercel.json'));
for (const f of readdirSync(join(here, 'files'))) if (f !== 'brand.js') copyFileSync(join(here, 'files', f), join(out, f.replace(/^dot-/, '.')));

let ver = 'tidak diketahui';
try { ver = execSync('git rev-parse --short HEAD', { cwd: root }).toString().trim(); } catch (e) {}
writeFileSync(join(out, 'VERSI.txt'), 'Zuno Studio edisi jasa\nDiekspor: ' + new Date().toISOString().slice(0, 10) + '\nSumber Zuno: ' + ver + '\n');

// ---------- cek akhir: tidak ada identitas Zulnan tersisa yang tidak terlindungi ----------
const leaks = [];
for (const f of ['index.html', 'live.js', 'hud.js', 'hud.css', 'api/ai.js', 'api/status.js', 'api/riset.js', 'api/gambar.js']) {
  const t = readFileSync(join(out, f), 'utf8');
  for (const bad of ['sales sekitar 12 tahun', 'FMCG', '6 web aktif', 'rambut hitam keriting', 'foto-zulnan', 'zuno-zulnan-percakapan']) if (t.includes(bad)) leaks.push(f + ': ' + bad);
}
if (leaks.length) throw new Error('Masih ada data pribadi Zulnan:\n' + leaks.join('\n'));
console.log('Edisi jasa diekspor ke ' + out + ' (sumber ' + ver + ')');
