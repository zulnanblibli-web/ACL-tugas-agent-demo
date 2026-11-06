// Zuno: riset bahan konten dari web (Vercel Function), dipakai Peneliti Tren (R.1).
// Sumber publik tanpa API key:
//   - Google Trends: pencarian yang sedang naik di Indonesia (RSS harian)
//   - Google News: berita terbaru per kata kunci (RSS pencarian, 7 hari terakhir)
//   - Hacker News (Algolia): diskusi teknologi/AI yang ramai (14 hari terakhir)
// Masuk : GET /api/riset?q=kata kunci 1|kata kunci 2   (maks. 4 kata kunci + RISET_KATA_KUNCI), header x-zuno-key
// Keluar: JSON {tren:[...], berita:[...], diskusi:[...], gagal:[...], diambil:"ISO"}
// Setelan (Environment Variables di Vercel atau web/.env.local; semua opsional):
//   RISET_AKTIF        on (bawaan) | off            matikan riset web sama sekali
//   RISET_SUMBER       trends,news,hn (bawaan)      pilih sumber, pisahkan koma
//   RISET_NEGARA       ID (bawaan)                  kode negara 2 huruf untuk Google Trends dan Google News
//   RISET_BAHASA       id (bawaan)                  kode bahasa Google News (id, en, ms, ...)
//   RISET_KATA_KUNCI   mis. "kue rumahan|resep viral"  kata kunci niche yang selalu ikut dicari (pisahkan |)
//   RISET_HARI_BERITA  7 (bawaan, 1-30)             umur berita Google News
//   RISET_HARI_DISKUSI 14 (bawaan, 1-60)            umur diskusi Hacker News
// Catatan: feed Google News hanya untuk pemakaian pribadi (lihat <copyright> di feed-nya).
import { timingSafeEqual } from 'node:crypto';

function keyOk(given) {
  const want = process.env.ZUNO_ACCESS_KEY || '';
  if (!want || !given) return false;
  const a = Buffer.from(String(given)), b = Buffer.from(want);
  return a.length === b.length && timingSafeEqual(a, b);
}
const json = (status, obj) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
export function unesc(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
      if (e[0] === '#') { const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return Number.isFinite(n) ? String.fromCodePoint(n) : m; }
      return ENT[e.toLowerCase()] ?? m;
    })
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
const tag = (xml, name) => { const m = xml.match(new RegExp('<' + name + '(?:\\s[^>]*)?>([\\s\\S]*?)</' + name + '>')); return m ? unesc(m[1]) : ''; };
const items = (xml) => xml.match(/<item>[\s\S]*?<\/item>/g) || [];

export function parseTrends(xml, max = 12) {
  return items(xml).slice(0, max).map((it) => ({
    kata: tag(it, 'title'),
    perkiraan_pencarian: tag(it, 'ht:approx_traffic'),
    tanggal: tag(it, 'pubDate'),
    berita: (it.match(/<ht:news_item>[\s\S]*?<\/ht:news_item>/g) || []).slice(0, 2).map((n) => ({
      judul: tag(n, 'ht:news_item_title'), tautan: tag(n, 'ht:news_item_url'), sumber: tag(n, 'ht:news_item_source')
    }))
  })).filter((x) => x.kata);
}

export function parseNews(xml, q, max = 6) {
  return items(xml).slice(0, max).map((it) => {
    const sumber = tag(it, 'source');
    let judul = tag(it, 'title');
    if (sumber && judul.endsWith(' - ' + sumber)) judul = judul.slice(0, -(sumber.length + 3));
    return { kata_kunci: q, judul, tautan: tag(it, 'link'), sumber, tanggal: tag(it, 'pubDate') };
  }).filter((x) => x.judul);
}

export function parseHN(data, q, max = 4) {
  return ((data && data.hits) || []).slice(0, max).map((h) => ({
    kata_kunci: q, judul: String(h.title || ''), tautan: h.url || ('https://news.ycombinator.com/item?id=' + h.objectID),
    poin: Number(h.points) || 0, komentar: Number(h.num_comments) || 0, tanggal: String(h.created_at || '')
  })).filter((x) => x.judul);
}

async function get(url, as, ms = 8000) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctl.signal, headers: { 'user-agent': 'Mozilla/5.0 (compatible; ZunoRiset/1.0)', accept: as === 'json' ? 'application/json' : 'application/rss+xml, application/xml, text/xml' } });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return as === 'json' ? await r.json() : await r.text();
  } finally { clearTimeout(t); }
}

export function cleanQueries(raw, max = 4) {
  return String(raw || '').split('|').map((s) => s.replace(/[\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80)).filter(Boolean).filter((s, i, a) => a.indexOf(s) === i).slice(0, max);
}
const num = (v, d, lo, hi) => { const n = parseInt(v, 10); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d; };
// Setelan riset dari env (dibaca tiap permintaan supaya perubahan di .env.local/Vercel langsung terasa setelah redeploy/mulai ulang).
export function setelan(env = process.env) {
  const sumber = String(env.RISET_SUMBER || 'trends,news,hn').toLowerCase().split(/[\s,]+/).filter((x) => ['trends', 'news', 'hn'].includes(x));
  return {
    aktif: String(env.RISET_AKTIF || 'on').toLowerCase() !== 'off',
    sumber: sumber.length ? [...new Set(sumber)] : ['trends', 'news', 'hn'],
    negara: (/^[a-z]{2}$/i.test(env.RISET_NEGARA || '') ? env.RISET_NEGARA : 'ID').toUpperCase(),
    bahasa: (/^[a-z]{2,3}(-[a-z]{2,4})?$/i.test(env.RISET_BAHASA || '') ? env.RISET_BAHASA : 'id'),
    kata_kunci: cleanQueries(env.RISET_KATA_KUNCI || '', 3),
    hari_berita: num(env.RISET_HARI_BERITA, 7, 1, 30),
    hari_diskusi: num(env.RISET_HARI_DISKUSI, 14, 1, 60)
  };
}

export async function riset(qs, cfg = setelan()) {
  const gagal = [], since = Math.floor(Date.now() / 1000) - cfg.hari_diskusi * 86400, on = (k) => cfg.sumber.includes(k);
  qs = cleanQueries([...qs, ...cfg.kata_kunci].join('|'), 6);
  const hl = cfg.bahasa, gl = cfg.negara, ceid = gl + ':' + hl.split('-')[0];
  const none = Promise.resolve([]);
  const tren = on('trends') ? get('https://trends.google.com/trending/rss?geo=' + encodeURIComponent(gl), 'xml').then(parseTrends).catch((e) => { gagal.push('Google Trends: ' + e.message); return []; }) : none;
  const berita = on('news') ? Promise.all(qs.map((q) => get('https://news.google.com/rss/search?q=' + encodeURIComponent(q + ' when:' + cfg.hari_berita + 'd') + '&hl=' + encodeURIComponent(hl) + '&gl=' + encodeURIComponent(gl) + '&ceid=' + encodeURIComponent(ceid), 'xml').then((x) => parseNews(x, q)).catch((e) => { gagal.push('Google News "' + q + '": ' + e.message); return []; }))) : Promise.resolve([]);
  const diskusi = on('hn') ? Promise.all(qs.map((q) => get('https://hn.algolia.com/api/v1/search?query=' + encodeURIComponent(q) + '&tags=story&hitsPerPage=4&numericFilters=' + encodeURIComponent('created_at_i>' + since), 'json').then((x) => parseHN(x, q)).catch((e) => { gagal.push('Hacker News "' + q + '": ' + e.message); return []; }))) : Promise.resolve([]);
  const [t, b, d] = await Promise.all([tren, berita, diskusi]);
  const seen = new Set();
  const uniq = (arr) => arr.filter((x) => { const k = x.tautan || x.judul; if (seen.has(k)) return false; seen.add(k); return true; });
  return { tren: t, berita: uniq(b.flat()), diskusi: uniq(d.flat()), gagal, diambil: new Date().toISOString(), setelan: { sumber: cfg.sumber, negara: gl, bahasa: hl, kata_kunci_tetap: cfg.kata_kunci, kata_kunci_dicari: qs } };
}

export async function GET(req) {
  if (!process.env.ZUNO_ACCESS_KEY) return json(503, { code: 'not_configured', message: 'ZUNO_ACCESS_KEY belum diisi di Vercel.' });
  if (!keyOk(req.headers.get('x-zuno-key'))) return json(401, { code: 'not_granted', message: 'Kunci akses salah.' });
  const cfg = setelan();
  if (!cfg.aktif) return json(403, { code: 'riset_off', message: 'Riset web dimatikan (RISET_AKTIF=off).' });
  const u = new URL(req.url);
  return json(200, await riset(cleanQueries(u.searchParams.get('q')), cfg));
}
