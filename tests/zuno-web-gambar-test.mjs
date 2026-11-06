// Uji web/api/gambar.js tanpa internet: fetch dan DNS diganti tiruan.
// Format Google News (data-n-a-sg/ts + batchexecute) dan og:image diambil dari respons asli 2026-11-06.
// Jalankan: node tests/zuno-web-gambar-test.mjs
const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
const calls = [];
let mode = 'ok';
const html = (body) => new Response(body, { status: 200, headers: { 'content-type': 'text/html; charset=utf-8' } });
const img = (b = PNG, t = 'image/png') => new Response(b, { status: 200, headers: { 'content-type': t, 'content-length': String(b.length) } });
const js = (o) => new Response(JSON.stringify(o), { status: 200, headers: { 'content-type': 'application/json' } });
globalThis.fetch = async (u, o = {}) => {
  const url = String(u); calls.push({ url, method: o.method || 'GET', redirect: o.redirect, body: o.body || '' });
  if (url.startsWith('https://news.google.com/rss/articles/ABC')) return html('<c-wiz><div jscontroller="x" data-n-a-sg="SIG123" data-n-a-ts="1793951686"></div></c-wiz>');
  if (url.startsWith('https://news.google.com/_/DotsSplashUi/data/batchexecute')) return new Response(')]}\'\n\n[["wrb.fr","Fbv4je","[\\"garturlres\\",\\"https://berita.contoh.id/artikel-ai?x\\\\u003d1\\",1]",null,null,null,"generic"]]', { status: 200 });
  if (url === 'https://berita.contoh.id/artikel-ai?x=1') return html('<html><head><meta name="twitter:image" content="https://cdn.contoh.id/tw.png"><meta property="og:image" content="/img/utama.png"></head></html>');
  if (url === 'https://berita.contoh.id/img/utama.png') return img();
  if (url === 'https://cdn.contoh.id/besar.jpg') return img(Buffer.alloc(7000000), 'image/jpeg');
  if (url === 'https://berita.contoh.id/tanpa-gambar') return html('<html><head><title>x</title></head></html>');
  if (url === 'https://berita.contoh.id/pindah') return new Response('', { status: 302, headers: { location: 'http://10.0.0.5/rahasia' } });
  if (url.startsWith('https://id.wikipedia.org/w/api.php') && /generator=search/.test(url)) {
    if (mode === 'salah') return js({ query: { pages: [{ index: 1, title: 'Jack (film)', pageimage: 'Poster.jpg' }] } });
    return js({ query: { pages: [{ index: 2, title: 'Dorsey (disambiguasi)' }, { index: 1, title: 'Jack Dorsey', pageimage: 'Jack_Dorsey_2014.jpg' }] } });
  }
  if (url.startsWith('https://en.wikipedia.org/w/api.php') && /generator=search/.test(url)) return js({ query: { pages: [] } });
  if (url.startsWith('https://id.wikipedia.org/w/api.php') && /prop=imageinfo/.test(url)) return js({ query: { pages: [{ imageinfo: [{ mime: 'image/jpeg', thumburl: 'https://upload.wikimedia.org/thumb/jd.jpg', url: 'https://upload.wikimedia.org/jd.jpg', descriptionurl: 'https://commons.wikimedia.org/wiki/File:Jack_Dorsey_2014.jpg', extmetadata: { Artist: { value: '<a href="x">Fotografer Uji</a>' }, LicenseShortName: { value: 'CC BY 2.0' } } }] }] } });
  if (url === 'https://upload.wikimedia.org/thumb/jd.jpg') return img(PNG, 'image/jpeg');
  throw new Error('URL tak terduga di tes: ' + url);
};
process.env.ZUNO_ACCESS_KEY = 'rahasia-uji-123';
const m = await import('../web/api/gambar.js');
m._uji({ resolve: async (h) => (h === 'jahat.contoh.id' ? [{ address: '192.168.1.9' }] : [{ address: '93.184.216.34' }]) });
const call = async (q, key = 'rahasia-uji-123') => { const r = await m.GET(new Request('http://x/api/gambar?' + q, { headers: { 'x-zuno-key': key } })); return { status: r.status, h: r.headers, buf: Buffer.from(await r.arrayBuffer()) }; };
const out = [];
let r = await call('u=https://berita.contoh.id/img/utama.png', 'salah');
out.push(['kunci salah -> 401', r.status === 401]);
calls.length = 0;
r = await call('u=' + encodeURIComponent('https://news.google.com/rss/articles/ABC?oc=5'));
out.push(['Google News dibuka ke artikel asli lalu og:image (path relatif) diambil', r.status === 200 && r.h.get('content-type') === 'image/png' && r.buf.equals(PNG)]);
out.push(['batchexecute membawa id + sg + ts', calls.some((c) => c.method === 'POST' && /ABC/.test(decodeURIComponent(c.body)) && /SIG123/.test(decodeURIComponent(c.body)) && /1793951686/.test(decodeURIComponent(c.body)))]);
out.push(['header sumber = situs penerbit, asal = artikel', decodeURIComponent(r.h.get('x-zuno-sumber')) === 'berita.contoh.id' && decodeURIComponent(r.h.get('x-zuno-asal')) === 'https://berita.contoh.id/artikel-ai?x=1']);
out.push(['og:image didahulukan dari twitter:image', calls.some((c) => c.url === 'https://berita.contoh.id/img/utama.png') && !calls.some((c) => c.url === 'https://cdn.contoh.id/tw.png')]);
out.push(['redirect tidak diikuti otomatis (dicek ulang tiap langkah)', calls.every((c) => c.redirect === 'manual')]);
r = await call('u=' + encodeURIComponent('https://berita.contoh.id/tanpa-gambar'));
out.push(['artikel tanpa og:image -> 422 no_image', r.status === 422 && /og:image/.test(r.buf.toString())]);
r = await call('u=' + encodeURIComponent('https://cdn.contoh.id/besar.jpg'));
out.push(['gambar > 6 MB ditolak', r.status === 422 && /terlalu besar/.test(r.buf.toString())]);
for (const bad of ['http://127.0.0.1/a.png', 'http://169.254.169.254/latest/meta-data', 'http://[::1]/x', 'file:///etc/passwd', 'https://berita.contoh.id:8443/a', 'https://jahat.contoh.id/a.png', 'https://user:pw@berita.contoh.id/a']) {
  calls.length = 0; r = await call('u=' + encodeURIComponent(bad));
  out.push(['ditolak tanpa fetch: ' + bad, r.status === 422 && calls.length === 0]);
}
r = await call('u=' + encodeURIComponent('https://berita.contoh.id/pindah'));
out.push(['redirect ke alamat privat ditolak', r.status === 422 && /ditolak/.test(r.buf.toString())]);
mode = 'ok'; calls.length = 0;
r = await call('cari=' + encodeURIComponent('Jack Dorsey'));
out.push(['cari tokoh: foto Wikimedia berlisensi bebas', r.status === 200 && calls.some((c) => /pilicense=free/.test(c.url))]);
out.push(['kredit Wikimedia memuat pembuat + lisensi', decodeURIComponent(r.h.get('x-zuno-sumber')) === 'Wikimedia Commons, Fotografer Uji (CC BY 2.0)']);
mode = 'salah';
r = await call('cari=' + encodeURIComponent('Jack Dorsey'));
out.push(['judul tidak cocok ("Jack (film)") -> tidak dipakai', r.status === 422]);
out.push(['cocokJudul', m.cocokJudul('Jack Dorsey', 'jack dorsey') && !m.cocokJudul('Jack (film)', 'Jack Dorsey') && m.cocokJudul('ChatGPT', 'chatgpt') && !m.cocokJudul('X', '')]);
process.env.RISET_GAMBAR = 'off';
r = await call('u=x');
out.push(['RISET_GAMBAR=off -> 403', r.status === 403]);
delete process.env.RISET_GAMBAR;
let ok = true;
for (const [n, v] of out) { console.log((v ? 'LOLOS ' : 'GAGAL ') + n); if (!v) ok = false; }
console.log(ok ? 'HASIL: SEMUA LOLOS' : 'HASIL: ADA YANG GAGAL'); process.exit(ok ? 0 : 1);
