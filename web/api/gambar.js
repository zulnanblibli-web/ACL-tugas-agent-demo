// Zuno: ambil gambar dari sumber berita untuk cover carousel (slide 1).
// GET /api/gambar?u=<tautan sumber>        header x-zuno-key
// GET /api/gambar?cari=<nama tokoh/produk>  cadangan bila sumber tidak punya gambar: foto berlisensi bebas dari
//     Wikipedia/Wikimedia Commons (judul artikel wajib memuat semua kata yang dicari, supaya tidak salah orang/benda).
//   - tautan Google News (news.google.com/rss/articles/...) dibuka dulu ke artikel aslinya;
//   - tautan gambar langsung (mis. thumbnail Google Trends) dipakai apa adanya;
//   - tautan artikel: diambil og:image / twitter:image dari halamannya.
// Keluar: byte gambar (image/jpeg|png|webp|gif), header x-zuno-sumber (nama situs) dan x-zuno-asal (tautan artikel/gambar).
// Pengaman: hanya http(s), port standar, tanpa alamat lokal/privat (dicek ulang tiap redirect), halaman maks. 1,5 MB, gambar maks. 6 MB, batas waktu.
// Setelan: RISET_GAMBAR=off mematikan endpoint ini.
// Catatan hak cipta: gambar milik penerbitnya. Zuno menulis kredit "Gambar: <situs>" di slide 1; cek hak pakai sebelum posting.
import { timingSafeEqual } from 'node:crypto';
import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';

function keyOk(given) {
  const want = process.env.ZUNO_ACCESS_KEY || '';
  if (!want || !given) return false;
  const a = Buffer.from(String(given)), b = Buffer.from(want);
  return a.length === b.length && timingSafeEqual(a, b);
}
const json = (status, obj) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export function privat(ip) {
  if (isIP(ip) === 4) {
    const [a, b] = ip.split('.').map(Number);
    return a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || a >= 224;
  }
  const v = ip.toLowerCase();
  if (v.startsWith('::ffff:')) return privat(v.slice(7));
  return v === '::' || v === '::1' || v.startsWith('fc') || v.startsWith('fd') || v.startsWith('fe80');
}
let RES = lookup;
export function _uji(o) { if (o && o.resolve) RES = o.resolve; } // hanya untuk tes (DNS tiruan)
export async function aman(raw, resolve = RES) {
  let u;
  try { u = new URL(raw); } catch (e) { return null; }
  if (!/^https?:$/.test(u.protocol) || u.username || u.password) return null;
  if (u.port && !['80', '443'].includes(u.port)) return null;
  const host = u.hostname.replace(/^\[|\]$/g, '');
  if (!host || host === 'localhost' || host.endsWith('.local') || host.endsWith('.internal')) return null;
  if (isIP(host)) return privat(host) ? null : u;
  try { const all = await resolve(host, { all: true }); if (!all.length || all.some((x) => privat(x.address))) return null; } catch (e) { return null; }
  return u;
}

const UA = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36', 'accept-language': 'id,en;q=0.8' };
export async function ambil(raw, opt = {}, guard = aman) {
  let url = raw;
  for (let i = 0; i < 4; i++) {
    const u = await guard(url);
    if (!u) throw new Error('alamat ditolak');
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), opt.ms || 8000);
    let r;
    try { r = await fetch(u, { method: opt.method || 'GET', body: opt.body, headers: { ...UA, ...(opt.headers || {}) }, redirect: 'manual', signal: ctl.signal }); }
    finally { clearTimeout(t); }
    if (r.status >= 300 && r.status < 400 && r.headers.get('location')) { url = new URL(r.headers.get('location'), u).toString(); continue; }
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return { r, url: u.toString() };
  }
  throw new Error('redirect terlalu banyak');
}
async function bacaMaks(r, max) {
  const len = Number(r.headers.get('content-length') || 0);
  if (len > max) throw new Error('terlalu besar');
  const reader = r.body.getReader(); const parts = []; let n = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; n += value.length; if (n > max) { try { reader.cancel(); } catch (e) {} throw new Error('terlalu besar'); } parts.push(value); }
  return Buffer.concat(parts.map((p) => Buffer.from(p)));
}

// Tautan Google News RSS disamarkan; buka ke artikel aslinya lewat endpoint batchexecute (cara yang dipakai halaman Google News sendiri).
export async function bukaGoogleNews(link, get = ambil) {
  const id = (String(link).match(/news\.google\.com\/(?:rss\/)?articles\/([^?/#]+)/) || [])[1];
  if (!id) return null;
  const { r } = await get('https://news.google.com/rss/articles/' + id + '?oc=5&hl=en-US&gl=US&ceid=US:en');
  const page = (await bacaMaks(r, 1500000)).toString('utf8');
  const sg = (page.match(/data-n-a-sg="([^"]+)"/) || [])[1], ts = (page.match(/data-n-a-ts="([^"]+)"/) || [])[1];
  if (!sg || !ts) return null;
  const inner = JSON.stringify(['garturlreq', [['X', 'X', ['X', 'X'], null, null, 1, 1, 'US:en', null, 1, null, null, null, null, null, 0, 1], 'X', 'X', 1, [1, 1, 1], 1, 1, null, 0, 0, null, 0], id, Number(ts), sg]);
  const body = 'f.req=' + encodeURIComponent(JSON.stringify([[['Fbv4je', inner, null, 'generic']]]));
  const { r: r2 } = await get('https://news.google.com/_/DotsSplashUi/data/batchexecute', { method: 'POST', body, headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' } });
  const t = (await bacaMaks(r2, 500000)).toString('utf8');
  const m = t.match(/\\"garturlres\\",\\"(.*?)\\"/);
  return m ? m[1].replace(/\\\\u003d/g, '=').replace(/\\\\u0026/g, '&') : null;
}

export function ogImage(html, base) {
  const metas = html.match(/<meta\b[^>]*>/gi) || [];
  for (const want of ['og:image:secure_url', 'og:image', 'twitter:image', 'twitter:image:src']) {
    for (const m of metas) {
      const key = (m.match(/\b(?:property|name)\s*=\s*["']([^"']+)["']/i) || [])[1];
      const val = (m.match(/\bcontent\s*=\s*["']([^"']+)["']/i) || [])[1];
      if (key && val && key.toLowerCase() === want) { try { return new URL(val.replace(/&amp;/g, '&'), base).toString(); } catch (e) {} }
    }
  }
  return null;
}

export async function gambarDari(link, get = ambil) {
  let asal = String(link || '');
  if (/news\.google\.com\/(rss\/)?articles\//.test(asal)) { const real = await bukaGoogleNews(asal, get); if (!real) throw new Error('tautan Google News tidak bisa dibuka'); asal = real; }
  let { r, url } = await get(asal);
  let type = (r.headers.get('content-type') || '').toLowerCase();
  if (!type.startsWith('image/')) {
    const html = (await bacaMaks(r, 1500000)).toString('utf8');
    const img = ogImage(html, url);
    if (!img) throw new Error('halaman tidak punya gambar utama (og:image)');
    ({ r } = await get(img)); type = (r.headers.get('content-type') || '').toLowerCase();
  }
  if (!/^image\/(jpeg|jpg|png|webp|gif)/.test(type)) throw new Error('bukan gambar yang didukung (' + (type || '?') + ')');
  const buf = await bacaMaks(r, 6000000);
  return { buf, type: type.split(';')[0], asal: url, sumber: new URL(url).hostname.replace(/^www\./, '') };
}

// Cari foto berlisensi bebas (pilicense=free) lewat API Wikipedia: id dulu, lalu en.
// Judul artikel harus memuat semua kata penting yang dicari (cegah gambar yang tidak nyambung).
const WUA = { 'user-agent': 'ZunoStudio/1.0 (https://github.com/zulnanblibli-web/zuno-studio-app)', accept: 'application/json' };
export function cocokJudul(judul, cari) {
  const norm = (t) => String(t).toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N} ]/gu, ' ');
  const j = ' ' + norm(judul).replace(/\s+/g, ' ') + ' ';
  const kata = norm(cari).split(/\s+/).filter((w) => w.length > 1);
  return kata.length > 0 && kata.every((w) => j.includes(' ' + w + ' ') || j.includes(' ' + w));
}
export async function cariWiki(cari, get = ambil) {
  const q = String(cari || '').replace(/\s+/g, ' ').trim().slice(0, 80);
  if (q.length < 2) throw new Error('kata pencarian kosong');
  for (const lang of ['id', 'en']) {
    const api = 'https://' + lang + '.wikipedia.org/w/api.php?';
    let j;
    try {
      const { r } = await get(api + 'action=query&format=json&formatversion=2&generator=search&gsrlimit=3&gsrsearch=' + encodeURIComponent(q) + '&prop=pageimages&piprop=name&pilicense=free', { headers: WUA });
      j = JSON.parse((await bacaMaks(r, 400000)).toString('utf8'));
    } catch (e) { continue; }
    const pages = ((j.query && j.query.pages) || []).sort((a, b) => (a.index || 0) - (b.index || 0));
    const hit = pages.find((p) => p.pageimage && cocokJudul(p.title, q));
    if (!hit) continue;
    const { r: r2 } = await get(api + 'action=query&format=json&formatversion=2&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=1200&titles=' + encodeURIComponent('File:' + hit.pageimage), { headers: WUA });
    const j2 = JSON.parse((await bacaMaks(r2, 400000)).toString('utf8'));
    const ii = (((j2.query && j2.query.pages) || [])[0] || {}).imageinfo;
    const info = ii && ii[0];
    if (!info || !/^image\/(jpeg|png|webp|gif)/.test(info.mime || '')) continue;
    const md = info.extmetadata || {}, txt = (k) => String((md[k] && md[k].value) || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 80);
    const { r: r3 } = await get(info.thumburl || info.url);
    const type = (r3.headers.get('content-type') || '').toLowerCase();
    if (!/^image\/(jpeg|jpg|png|webp|gif)/.test(type)) continue;
    const buf = await bacaMaks(r3, 6000000);
    const kredit = 'Wikimedia Commons' + (txt('Artist') ? ', ' + txt('Artist') : '') + (txt('LicenseShortName') ? ' (' + txt('LicenseShortName') + ')' : '');
    return { buf, type: type.split(';')[0], asal: info.descriptionurl || info.url, sumber: kredit, judul: hit.title };
  }
  throw new Error('tidak ada foto berlisensi bebas yang cocok untuk "' + q + '"');
}

export async function GET(req) {
  if (!process.env.ZUNO_ACCESS_KEY) return json(503, { code: 'not_configured', message: 'ZUNO_ACCESS_KEY belum diisi di Vercel.' });
  if (!keyOk(req.headers.get('x-zuno-key'))) return json(401, { code: 'not_granted', message: 'Kunci akses salah.' });
  if (String(process.env.RISET_GAMBAR || 'on').toLowerCase() === 'off') return json(403, { code: 'gambar_off', message: 'Ambil gambar dari sumber dimatikan (RISET_GAMBAR=off).' });
  const sp = new URL(req.url).searchParams, u = sp.get('u') || '', cari = sp.get('cari') || '';
  try {
    const g = cari ? await cariWiki(cari) : await gambarDari(u);
    return new Response(g.buf, { status: 200, headers: { 'content-type': g.type, 'cache-control': 'no-store', 'x-zuno-sumber': encodeURIComponent(g.sumber), 'x-zuno-asal': encodeURIComponent(g.asal) } });
  } catch (e) {
    return json(422, { code: 'no_image', message: String(e && e.message || e).slice(0, 160) });
  }
}
