// Uji web/api/riset.js tanpa internet: fetch diganti tiruan yang membalas contoh feed asli
// (diambil 2026-11-06 dari Google Trends RSS, Google News RSS, HN Algolia; disimpan di tests/fixtures).
// Jalankan: node tests/zuno-web-riset-test.mjs
import { readFileSync } from 'node:fs';
const fx = (f) => readFileSync(new URL('./fixtures/' + f, import.meta.url), 'utf8');
const urls = []; let mode = 'ok';
globalThis.fetch = async (url) => {
  urls.push(String(url));
  if (mode === 'down' && /news\.google/.test(url)) throw new Error('fetch failed');
  const body = /trends\.google/.test(url) ? fx('google-trends-id.xml') : /news\.google/.test(url) ? fx('google-news.xml') : fx('hn-algolia.json');
  return new Response(body, { status: 200 });
};
process.env.ZUNO_ACCESS_KEY = 'rahasia-uji-123';
const { GET, parseTrends, parseNews, cleanQueries, unesc } = await import('../web/api/riset.js');
const out = [];
const call = async (q, key = 'rahasia-uji-123') => { const r = await GET(new Request('http://x/api/riset?q=' + encodeURIComponent(q), { headers: { 'x-zuno-key': key } })); return { status: r.status, j: await r.json() }; };
let r = await call('AI agent', 'salah');
out.push(['kunci salah -> 401', r.status === 401 && r.j.code === 'not_granted']);
urls.length = 0;
r = await call('AI agent|ChatGPT kantor');
out.push(['200 + tiga jenis bahan', r.status === 200 && r.j.tren.length === 3 && r.j.berita.length > 0 && r.j.diskusi.length > 0]);
out.push(['tren punya kata + perkiraan + berita', !!(r.j.tren[0].kata && r.j.tren[0].perkiraan_pencarian && r.j.tren[0].berita[0].tautan.startsWith('http'))]);
out.push(['judul berita tanpa " - Sumber"', r.j.berita.every((b) => b.sumber && !b.judul.endsWith(' - ' + b.sumber))]);
out.push(['berita duplikat antar kata kunci dibuang', new Set(r.j.berita.map((b) => b.tautan)).size === r.j.berita.length]);
out.push(['HN: tautan, poin, komentar', r.j.diskusi.every((d) => d.tautan.startsWith('http') && d.poin > 0)]);
out.push(['URL: geo=ID, when:7d, hl=id, filter 14 hari', urls.some((u) => /trends\.google\.com\/trending\/rss\?geo=ID/.test(u)) && urls.some((u) => /when%3A7d/.test(u) && /hl=id/.test(u)) && urls.some((u) => /numericFilters=created_at_i%3E\d+/.test(u))]);
out.push(['1 tren + 2 berita + 2 HN = 5 permintaan', urls.length === 5]);
mode = 'down';
r = await call('AI agent');
out.push(['Google News mati: tetap 200, dicatat di gagal', r.status === 200 && r.j.berita.length === 0 && r.j.gagal.some((g) => /Google News/.test(g)) && r.j.tren.length === 3]);
out.push(['kata kunci dibersihkan, maks. 4', JSON.stringify(cleanQueries('a| a |b|c|d|e|' + 'x'.repeat(200))) === JSON.stringify(['a', 'b', 'c', 'd'])]);
out.push(['entitas + CDATA diurai', unesc('<![CDATA[A &amp; B]]> &#39;x&#39; &apos;y&apos;') === "A & B 'x' 'y'"]);
out.push(['parser kebal feed kosong', parseTrends('').length === 0 && parseNews('<rss></rss>', 'q').length === 0]);
const { setelan } = await import('../web/api/riset.js');
out.push(['setelan bawaan: aktif, 3 sumber, ID/id, 7/14 hari', (() => { const c = setelan({}); return c.aktif && c.sumber.join() === 'trends,news,hn' && c.negara === 'ID' && c.bahasa === 'id' && c.hari_berita === 7 && c.hari_diskusi === 14; })()]);
out.push(['setelan nilai aneh dibersihkan', (() => { const c = setelan({ RISET_NEGARA: 'xxx', RISET_BAHASA: '<b>', RISET_SUMBER: 'twitter', RISET_HARI_BERITA: '999' }); return c.negara === 'ID' && c.bahasa === 'id' && c.sumber.length === 3 && c.hari_berita === 30; })()]);
mode = 'ok';
Object.assign(process.env, { RISET_SUMBER: 'news', RISET_NEGARA: 'my', RISET_BAHASA: 'ms', RISET_KATA_KUNCI: 'kue rumahan|resep viral', RISET_HARI_BERITA: '3' });
urls.length = 0;
r = await call('AI agent');
out.push(['pembeli atur sumber=news, negara MY, bahasa ms: hanya Google News, parameter ikut', urls.length === 3 && urls.every((u) => /news\.google/.test(u) && /hl=ms/.test(u) && /gl=MY/.test(u) && /ceid=MY%3Ams/.test(u) && /when%3A3d/.test(u)) && r.j.tren.length === 0 && r.j.diskusi.length === 0]);
out.push(['kata kunci niche pembeli selalu ikut dicari', JSON.stringify(r.j.setelan.kata_kunci_dicari) === JSON.stringify(['AI agent', 'kue rumahan', 'resep viral'])]);
process.env.RISET_AKTIF = 'off';
r = await call('AI agent');
out.push(['RISET_AKTIF=off -> 403 riset_off', r.status === 403 && r.j.code === 'riset_off']);
for (const k of ['RISET_SUMBER', 'RISET_NEGARA', 'RISET_BAHASA', 'RISET_KATA_KUNCI', 'RISET_HARI_BERITA', 'RISET_AKTIF']) delete process.env[k];
const { GET: STATUS } = await import('../web/api/status.js');
const st = await (await STATUS()).json();
out.push(['/api/status melaporkan setelan riset (tanpa rahasia)', st.riset && st.riset.aktif === true && st.riset.negara === 'ID']);
let ok = true;
for (const [n, v] of out) { console.log((v ? 'LOLOS ' : 'GAGAL ') + n); if (!v) ok = false; }
console.log(ok ? 'HASIL: SEMUA LOLOS' : 'HASIL: ADA YANG GAGAL'); process.exit(ok ? 0 : 1);
