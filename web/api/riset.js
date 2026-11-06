// Zuno: riset bahan konten dari web (Vercel Function), dipakai Peneliti Tren (R.1).
// Sumber publik tanpa API key:
//   - Google Trends: pencarian yang sedang naik di Indonesia (RSS harian)
//   - Google News: berita terbaru per kata kunci (RSS pencarian, 7 hari terakhir)
//   - Hacker News (Algolia): diskusi teknologi/AI yang ramai (14 hari terakhir)
// Masuk : GET /api/riset?q=kata kunci 1|kata kunci 2   (maks. 4 kata kunci), header x-zuno-key
// Keluar: JSON {tren:[...], berita:[...], diskusi:[...], gagal:[...], diambil:"ISO"}
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

export function cleanQueries(raw) {
  return String(raw || '').split('|').map((s) => s.replace(/[\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80)).filter(Boolean).filter((s, i, a) => a.indexOf(s) === i).slice(0, 4);
}

export async function riset(qs, geo = 'ID') {
  const gagal = [], since = Math.floor(Date.now() / 1000) - 14 * 86400;
  const jobs = [
    get('https://trends.google.com/trending/rss?geo=' + encodeURIComponent(geo), 'xml').then(parseTrends).catch((e) => { gagal.push('Google Trends: ' + e.message); return []; }),
    ...qs.map((q) => get('https://news.google.com/rss/search?q=' + encodeURIComponent(q + ' when:7d') + '&hl=id&gl=ID&ceid=ID:id', 'xml').then((x) => parseNews(x, q)).catch((e) => { gagal.push('Google News "' + q + '": ' + e.message); return []; })),
    ...qs.map((q) => get('https://hn.algolia.com/api/v1/search?query=' + encodeURIComponent(q) + '&tags=story&hitsPerPage=4&numericFilters=' + encodeURIComponent('created_at_i>' + since), 'json').then((x) => parseHN(x, q)).catch((e) => { gagal.push('Hacker News "' + q + '": ' + e.message); return []; }))
  ];
  const r = await Promise.all(jobs);
  const n = qs.length;
  const seen = new Set();
  const uniq = (arr) => arr.filter((x) => { const k = x.tautan || x.judul; if (seen.has(k)) return false; seen.add(k); return true; });
  return { tren: r[0], berita: uniq(r.slice(1, 1 + n).flat()), diskusi: uniq(r.slice(1 + n).flat()), gagal, diambil: new Date().toISOString() };
}

export async function GET(req) {
  if (!process.env.ZUNO_ACCESS_KEY) return json(503, { code: 'not_configured', message: 'ZUNO_ACCESS_KEY belum diisi di Vercel.' });
  if (!keyOk(req.headers.get('x-zuno-key'))) return json(401, { code: 'not_granted', message: 'Kunci akses salah.' });
  const u = new URL(req.url);
  return json(200, await riset(cleanQueries(u.searchParams.get('q')), (u.searchParams.get('geo') || 'ID').slice(0, 2).toUpperCase()));
}
