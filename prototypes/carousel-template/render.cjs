/* Renderer carousel Zuno (prototipe): spec.json -> HTML -> PNG 1080x1350.
   Pakai: NODE_PATH=$(npm root -g) node render.cjs [spec.json] [outdir] [--strict] */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const [specFile = 'spec.json', outDir = 'out'] = args.filter(a => !a.startsWith('--'));
const spec = JSON.parse(fs.readFileSync(specFile, 'utf8'));

/* ---- Token desain (dari referensi Zulnan) ---- */
const T = {
  bg: '#0B0F1A', panel: '#111827', blue: '#1677FF', sky: '#3EA6FF', ink: '#F5F7FA', mute: '#B9C2D3',
  fontHead: "'Poppins','Manrope',sans-serif", fontBody: "'Inter',sans-serif"
};

/* ---- Batas kata (lint): rapi bukan bergantung pada agen ingat aturan ---- */
const LIMIT = { title: 5, titleCover: 8, sub: 14, eyebrow: 4, itemJudul: 6, itemIsi: 12, statIsi: 8, rowLabel: 3, rowIsi: 7, quote: 14, bullet: 6, check: 6, button: 5 };
const warns = [];
const wc = s => String(s).trim().split(/\s+/).filter(Boolean).length;
function lint(i, field, text, key) {
  const n = wc(text);
  if (n > LIMIT[key]) warns.push(`slide ${i + 1} ${field}: ${n} kata (maks ${LIMIT[key]}): "${text}"`);
}
spec.slides.forEach((s, i) => {
  lint(i, 'eyebrow', s.eyebrow || '', 'eyebrow');
  lint(i, 'judul', (s.title || []).join(' '), s.type === 'cover' ? 'titleCover' : 'title');
  if (s.sub) lint(i, 'sub', s.sub, 'sub');
  (s.items || []).forEach((it, k) => { lint(i, `item${k + 1}.judul`, it.judul, 'itemJudul'); lint(i, `item${k + 1}.isi`, it.isi, 'itemIsi'); });
  if (s.stat) lint(i, 'stat', s.stat.isi, 'statIsi');
  (s.rows || []).forEach((r, k) => { lint(i, `row${k + 1}.label`, r.label, 'rowLabel'); lint(i, `row${k + 1}.isi`, r.isi, 'rowIsi'); });
  if (s.quote) lint(i, 'quote', s.quote, 'quote');
  (s.bullets || []).forEach((b, k) => lint(i, `bullet${k + 1}`, b, 'bullet'));
  (s.checks || []).forEach((c, k) => lint(i, `check${k + 1}`, c, 'check'));
  if (s.button) lint(i, 'button', s.button, 'button');
});

/* ---- Ikon ---- */
const ICON = {
  bar: '<svg viewBox="0 0 48 48"><rect x="8" y="26" width="9" height="14" rx="2" fill="#3EA6FF"/><rect x="20" y="16" width="9" height="24" rx="2" fill="#3EA6FF"/><rect x="32" y="8" width="9" height="32" rx="2" fill="#3EA6FF"/></svg>',
  trend: '<svg viewBox="0 0 48 48" fill="none" stroke="#3EA6FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 35 L19 23 L27 30 L41 14"/><path d="M31 13 H41 V23"/></svg>',
  quote: '<svg viewBox="0 0 64 64"><path fill="#3EA6FF" d="M8 36c0-12 6-21 18-26l3 6c-6 3-9 7-9 11h9v19H8V36zm28 0c0-12 6-21 18-26l3 6c-6 3-9 7-9 11h9v19H36V36z"/></svg>',
  tick: '<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="11" fill="#2BA8FF"/><path d="M12 25l8 8 16-17" fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrows: '<svg viewBox="0 0 48 32" fill="none" stroke="#F5F7FA" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l10 10L8 26"/><path d="M26 6l10 10-10 10"/></svg>'
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const CSS = `
@font-face{font-family:'Poppins';font-weight:700;src:local('Poppins Bold'),local('Poppins-Bold')}
:root{--bg:${T.bg};--panel:${T.panel};--blue:${T.blue};--sky:${T.sky};--ink:${T.ink};--mute:${T.mute}}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1080px;height:1350px;background:var(--bg)}
.s{position:relative;width:1080px;height:1350px;overflow:hidden;color:var(--ink);font-family:${T.fontBody};
  background:radial-gradient(900px 700px at 8% 78%,rgba(22,119,255,.16),transparent 65%),radial-gradient(800px 600px at 100% 0%,rgba(22,119,255,.14),transparent 60%),linear-gradient(180deg,#0B0F1A 0%,#0A1226 100%)}
.arc{position:absolute;border-radius:50%;border:3px solid rgba(62,166,255,.55);
  box-shadow:0 0 70px rgba(22,119,255,.5),inset 0 0 90px rgba(22,119,255,.3);
  background:radial-gradient(circle at 30% 70%,rgba(22,119,255,.2),transparent 62%)}
.arc.tr{width:640px;height:640px;right:-300px;top:-390px}
.arc.bl{width:520px;height:520px;left:-330px;bottom:-290px}
.in{position:absolute;left:100px;right:100px;top:170px}
.eye{display:flex;align-items:center;gap:22px;height:48px}
.eye i{width:9px;height:46px;border-radius:5px;background:#1EA0FF}
.eye b{font:700 28px ${T.fontHead};letter-spacing:.24em;text-transform:uppercase;white-space:nowrap}
.eye u{flex:1;height:2px;background:rgba(255,255,255,.7)}
.h1{margin-top:46px;font:700 112px/1.02 ${T.fontHead};text-transform:uppercase;letter-spacing:-.01em;-webkit-text-stroke:1.5px currentColor}
.t-cover .h1{font-size:140px}
.h1 span{display:block;width:max-content;white-space:nowrap}
.h1 span:last-child{color:var(--sky)}
.bar{width:122px;height:11px;border-radius:6px;background:#1FA9FF;margin-top:30px}
.sub{margin-top:34px;font:400 38px/1.34 ${T.fontBody};color:var(--mute);max-width:820px}
.card{border:2px solid rgba(62,166,255,.7);border-radius:36px;background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.03));box-shadow:0 0 34px rgba(22,119,255,.2)}
.foot{position:absolute;left:150px;right:66px;bottom:62px;display:flex;align-items:center;gap:26px}
.foot u{flex:1;height:2px;background:rgba(255,255,255,.7)}
.foot b{min-width:112px;height:60px;border:2px solid rgba(62,166,255,.85);border-radius:30px;background:rgba(10,18,38,.8);box-shadow:0 0 22px rgba(22,119,255,.35);display:flex;align-items:center;justify-content:center;font:700 32px ${T.fontHead}}
.pill{display:inline-flex;align-items:center;gap:18px;height:84px;padding:0 40px;border-radius:42px;border:2px solid rgba(62,166,255,.9);background:linear-gradient(180deg,#0E57C4,#0A3F99);box-shadow:0 0 30px rgba(22,119,255,.45);font:700 33px ${T.fontHead};white-space:nowrap}
.pill svg{width:34px;height:23px}
/* poin */
.items{margin-top:40px;display:flex;flex-direction:column;gap:20px}
.it{display:flex;align-items:center;gap:30px;padding:20px 34px 20px 28px;height:160px}
.num{flex:none;width:84px;height:84px;border-radius:24px;background:linear-gradient(160deg,#2C8CFF,#0A57D6);box-shadow:0 8px 22px rgba(22,119,255,.45),inset 0 1px 0 rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;font:700 52px ${T.fontHead}}
.vr{flex:none;width:2px;height:88px;background:rgba(255,255,255,.35)}
.it h3{font:700 38px/1.15 ${T.fontHead}}
.it p{margin-top:8px;font:400 29px/1.32 ${T.fontBody};color:#D6DCE8}
/* fakta */
.stat{margin-top:40px;display:flex;align-items:center;gap:38px;padding:30px 44px;height:240px}
.stat .big{font:700 160px/1 ${T.fontHead};color:var(--sky);display:flex;align-items:baseline;gap:18px;-webkit-text-stroke:1.5px var(--sky)}
.stat .big small{font:700 46px ${T.fontHead};-webkit-text-stroke:0}
.stat p{font:400 36px/1.3 ${T.fontBody};color:#E2E7F0;max-width:330px}
.rows{margin-top:22px;display:flex;flex-direction:column;gap:20px}
.row{display:flex;align-items:center;gap:30px;padding:0 36px;height:112px;border-radius:30px}
.ico{flex:none;width:74px;height:74px;border-radius:20px;background:rgba(62,166,255,.14);display:flex;align-items:center;justify-content:center}
.ico svg{width:42px;height:42px}
.row b{font:700 38px ${T.fontHead};min-width:200px}
.row p{font:400 30px/1.25 ${T.fontBody};color:#D6DCE8}
.src{position:absolute;left:100px;bottom:66px;font:italic 400 28px ${T.fontBody};color:var(--mute)}
.src b{font-style:normal;font-weight:600}
/* alasan */
.quote{margin-top:44px;display:flex;align-items:center;gap:40px;padding:42px 46px;min-height:230px}
.quote svg{flex:none;width:92px;height:92px}
.quote .vr{height:130px}
.quote p{font:500 44px/1.28 ${T.fontBody};color:#EEF2F8}
.bul{margin-top:46px;display:flex;flex-direction:column;gap:26px;padding-left:36px}
.bul div{display:flex;align-items:center;gap:30px;font:400 40px ${T.fontBody}}
.bul i{flex:none;width:24px;height:24px;border-radius:50%;background:#26A8FF;box-shadow:0 0 18px rgba(38,168,255,.7)}
/* cta */
.cta{margin-top:44px;display:flex;flex-direction:column;align-items:flex-start;gap:30px}
.chk{width:100%;padding:22px 44px}
.chk div{display:flex;align-items:center;gap:26px;padding:18px 0;font:600 38px/1.2 ${T.fontBody};border-bottom:2px solid rgba(255,255,255,.22)}
.chk div:last-child{border-bottom:0}
.chk svg{flex:none;width:46px;height:46px}
/* cover */
.photo{position:absolute;right:-8px;bottom:0;width:660px;height:auto}
.t-cover.has-photo .sub{max-width:430px;font-size:36px}
.t-cover.has-photo .cov-cta{left:100px;right:auto;bottom:96px}
.cov-cta{position:absolute;right:66px;bottom:150px}
`;

const eyebrow = t => `<div class="eye"><i></i><b>${esc(t)}</b><u></u></div>`;
const h1 = t => `<div class="h1">${t.map(l => `<span>${esc(l)}</span>`).join('')}</div>`;
const foot = (i, n, left) => `<div class="foot"${left ? ` style="left:${left}px"` : ''}><u></u><b>${String(i + 1).padStart(2, '0')}</b></div>`;
const head = s => eyebrow(s.eyebrow) + h1(s.title) + '<div class="bar"></div>' + (s.sub ? `<div class="sub">${esc(s.sub)}</div>` : '');

const BODY = {
  cover: s => `${s.foto ? `<img class="photo" src="file://${path.resolve(path.dirname(specFile), s.foto)}">` : ''}<div class="in">${head(s)}</div><div class="cov-cta"><span class="pill">${esc(s.cta)}${ICON.arrows}</span></div>`,
  poin: (s, i, n) => `<div class="in">${head(s)}<div class="items">${s.items.map((it, k) =>
    `<div class="it card"><div class="num">${k + 1}</div><div class="vr"></div><div><h3>${esc(it.judul)}</h3><p>${esc(it.isi)}</p></div></div>`).join('')}</div></div>${foot(i, n)}`,
  fakta: (s, i, n) => `<div class="in">${head(s)}<div class="stat card"><div class="big">${esc(s.stat.angka)}<small>${esc(s.stat.satuan)}</small></div><div class="vr"></div><p>${esc(s.stat.isi)}</p></div>
    <div class="rows">${s.rows.map(r => `<div class="row card"><div class="ico">${ICON[r.ikon]}</div><b>${esc(r.label)}</b><div class="vr" style="height:56px"></div><p>${esc(r.isi)}</p></div>`).join('')}</div></div>
    <div class="src"><b>${esc(s.sumber.split(':')[0])}:</b>${esc(s.sumber.slice(s.sumber.indexOf(':') + 1))}</div>${foot(i, n, 640)}`,
  alasan: (s, i, n) => `<div class="in">${head(s)}<div class="quote card">${ICON.quote}<div class="vr"></div><p>${esc(s.quote)}</p></div>
    <div class="bul">${s.bullets.map(b => `<div><i></i>${esc(b)}</div>`).join('')}</div></div>${foot(i, n)}`,
  cta: (s, i, n) => `<div class="in">${head(s)}<div class="cta"><div class="chk card">${s.checks.map(c => `<div>${ICON.tick}<span>${esc(c)}</span></div>`).join('')}</div><span class="pill">${esc(s.button)}${ICON.arrows}</span></div></div>${foot(i, n)}`
};

function page(s, i, n) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>
<div class="s t-${s.type}${s.foto ? ' has-photo' : ''}"><div class="arc tr"></div><div class="arc bl"></div>${BODY[s.type](s, i, n)}</div>
<script>
document.fonts.ready.then(()=>{
  document.querySelectorAll('.h1').forEach(h=>{
    const max=h.parentElement.clientWidth;let sz=parseFloat(getComputedStyle(h).fontSize);
    while(sz>76&&[...h.children].some(c=>c.getBoundingClientRect().width>max)){sz-=2;h.style.fontSize=sz+'px'}
  });
  document.body.dataset.ready='1';
});
</script></body></html>`;
}

(async () => {
  if (warns.length) { console.log('LINT:\n - ' + warns.join('\n - ')); if (strict) process.exit(2); } else console.log('LINT: lolos');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  const n = spec.slides.length;
  for (let i = 0; i < n; i++) {
    const f = path.resolve(outDir, `slide-${String(i + 1).padStart(2, '0')}`);
    fs.writeFileSync(f + '.html', page(spec.slides[i], i, n));
    const p = await ctx.newPage();
    await p.goto('file://' + f + '.html');
    await p.waitForSelector('body[data-ready="1"]');
    await p.screenshot({ path: f + '.png', clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    await p.close();
    console.log('ok', path.basename(f) + '.png');
  }
  await browser.close();
})();
