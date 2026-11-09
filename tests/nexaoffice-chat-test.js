const { chromium } = require('playwright');
// Uji menu Chat ZUNO di Workspace (web/studio.html): ZUNO melapor tiap langkah dari kejadian asli, laporan kinerja agen,
// tombol ke hasil, tanya-jawab (tidak masuk pratinjau kerja), riwayat tersimpan, dan simpan hasil ke folder lokal
// (folder per tugas, subfolder per hasil sesuai judul). AI, riset, gambar, dan folder laptop tiruan.
//   node web/build.mjs && NODE_PATH=$(npm root -g) node tests/nexaoffice-chat-test.js
let gagal = 0;
const ok = (nama, syarat) => { console.log((syarat ? 'OK    ' : 'GAGAL ') + nama); if (!syarat) gagal++; };
(async () => {
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } }); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', (e) => errs.push('PAGEERR ' + e.message)); p.on('console', (m) => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
  await ctx.addInitScript(() => {
    // folder laptop tiruan (File System Access API)
    window.__fs = {};
    try { window.__fs = JSON.parse(sessionStorage.getItem('__fs') || '{}'); } catch (e) {}
    const dir = (path) => ({ kind: 'directory', name: path.split('/').pop(),
      async getDirectoryHandle(n) { return dir(path + '/' + n); },
      async getFileHandle(n) { const fp = path + '/' + n; return { async createWritable() { const parts = []; return { async write(d) { parts.push(d); }, async close() { const bl = new Blob(parts); window.__fs[fp] = { size: bl.size, teks: /\.(md|json|txt)$/.test(fp) ? await bl.text() : '' }; sessionStorage.setItem('__fs', JSON.stringify(window.__fs)); } }; } }; },
      async queryPermission() { return 'granted'; }, async requestPermission() { return 'granted'; } });
    window.showDirectoryPicker = async () => dir('Hasil Zuno');
  });
  await ctx.addInitScript(() => {
    window.__ZUNO_NOTICE_DELAY=600; window.__calls=[]; let failOnce=true;
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    const gen=async(input,opts)=>{
      await sleep(30);
      const role=(input.match(/PERAN ANDA: (\S+)/)||[])[1];
      window.__calls.push({role,images:(opts&&opts.images||[]).length});
      if(role==='L.0') return {kata_kunci_riset:['AI agent'],golongan:'ide baru',kartu:[{id:'KK-001',platform:'Instagram',funnel:'TOFU',ide:'Ide 1'},{id:'KK-002',platform:'TikTok',funnel:'MOFU',ide:'Prompt harian'}]};
      if(role==='R.2') return {briefs:[1,2].map(i=>({id:'KK-00'+i,ide:'Ide '+i,funnel:['TOFU','MOFU'][i-1],platform:'Instagram',angle:'a',hooks:['h'],tujuan_cta:'simpan'}))};
      if(role==='R.1'){ window.__r1=input; } if(role==='R.1') return {sumber:/SUMBER:/.test(input)?[{judul:'Tools AI baru untuk merangkum rapat',tautan:'https://contoh.test/berita',jenis:'berita',inti:'Ada fitur ringkas rapat otomatis',sudut_konten:'Rapat 1 jam jadi 3 poin'}]:[],masalah_audiens:['kerjaan numpuk, bingung mulai dari mana','takut salah pakai AI'],sudut_jarang:['AI bukan pengganti, tapi asisten'],pola_hook:['pain point','negative'],catatan:'semua perlu dicek'};
      if(role==='P.1'){ if(/Format: video/.test(input)){ const B=[['hook','Capek kerjaan numpuk?',true],['hook','Salah mulai dari sini',true],['hook','Bukan karena malas',false],['problem','Semua serba telat',false],['problem','To-do list makin panjang',false],['problem','Tiap hari lembur',false],['twist','Eits. Bukan itu masalahnya',true],['twist','Kamu belum punya sistem',false],['solusi','Tulis semua tugas',false],['solusi','Minta AI urutkan',false],['solusi','Kerjakan satu dulu',false],['solusi','Cek ulang sore',false],['cta','Simpan dulu ya',false],['cta','Coba besok pagi',false]]; return {big_idea:'Kerjaan numpuk itu masalah sistem, bukan malas',jenis_hook:'pain',jenis_ending:'cta',foreshadow:'Jawabannya ada di langkah ketiga',faktor_viral:['relate','fakta mengejutkan'],adegan:B.map((x,i)=>({babak:x[0],teks:x[1],vo:x[1]+'.',visual:'teks besar bergerak',detik:1.2+((i%3)*.3),wajah:x[2]})),caption:'cap v',hashtag:['#ai'],fakta:['tidak ada']}}
        return {big_idea:'Kerjaan numpuk itu masalah sistem',jenis_hook:'pain',jenis_ending:'cta',foreshadow:'Jawabannya ada di slide 4',faktor_viral:['relate'],slides:[{babak:'hook',tipe:'cover',judul:'Capek kerjaan numpuk?',isi:''},{babak:'problem',tipe:'poin',judul:'3 langkah singkat',isi:'Urutan kerja yang bisa dicoba.',poin:[{judul:'Pilih satu tugas',isi:'Jangan semuanya, satu dulu.'},{judul:'Minta AI buat draf',isi:'Lu tinggal rapikan.'}]},{babak:'twist',tipe:'fakta',judul:'Fakta singkat',angka:{nilai:'30',satuan:'menit',isi:'Rata-rata waktu per web.'},baris:[{label:'6 web',isi:'Sudah aktif'}],sumber:'Sumber: catatan Zulnan'},{babak:'solusi',tipe:'alasan',judul:'Kenapa ini penting?',kutipan:'Jalan dulu, rapikan sambil jalan.',butir:['Cepat dites','Revisi murah']},{babak:'solusi',judul:'Langkah nomor 5 yang terlalu panjang sekali',isi:'Isi singkat slide 5 yang cukup panjang supaya teks membungkus beberapa baris dengan rapi'},{babak:'cta',tipe:'cta',judul:'Simpan dulu ya',isi:'',centang:['Simpan konten ini','Bagikan ke teman','Komen WEB'],tombol:'Follow untuk info terbaru'}],caption:'cap',hashtag:['#ai','#produktif'],fakta:['tidak ada']}; }
      if(role==='P.2') return {lolos:!window.__optFail,skor:window.__optFail?5:8,gagal:window.__optFail?['hook lembek']:[],perbaikan:window.__optFail?['tulis ulang: A -> B']:[]};
      if(role==='E.1') return {efek:[{fx:'lean-in',start:0.2,end:2.4,text:'',alasan:'tekanan di hook'},{fx:'tidak-ada',start:1,end:3},{fx:'backdrop-word',start:0.1,end:2.1,text:'AI',alasan:'kata besar'}]};
      if(role==='D.1'){ if(/Format: video/.test(input)){ const ref=/ADA REFERENSI/.test(input); return ref?{gaya:'Dari referensi',kesan:'neon cepat',alasan:'palet dan energi dari referensi',palet:{bg1:'#0a1440',bg2:'#10206a',ink:'#ffffff',acc:'#3df0ff'},font:'Anton',huruf_besar:true,latar:'cincin',masuk:'jatuh',kamera:'zoom',ekstra:['ticker','bentuk','partikel','kilau','penghitung'],energi:3,items:Array.from({length:40},()=>({kunci:'AI'}))}:{gaya:'Dentum',kesan:'cepat',items:Array.from({length:40},()=>({kunci:'AI'}))} }
        return {alasan:'urutan tipe slide',items:Array.from({length:6},(_,i)=>({label:['Proses membangun','Poin penting','Data dan insight','Kenapa penting','Poin penting','Ajakan'][i]}))} }
      if(role==='M.1') return {platform:'Instagram',caption_final:'cap final',hashtag:['#ai'],cover:'slide 1',saran_jadwal:'sore (asumsi)',catatan:['belum diposting']};
      if(/^Q\./.test(role)){ const r=role==='Q.1'&&/ID: KK-001/.test(input); return r?{tingkat:'risiko',catatan:['ada kalimat yang terdengar seperti klaim penghasilan; ubah jadi proses'],bagian:'teks'}:role==='Q.2'?{tingkat:'saran',catatan:['hook bisa lebih tajam'],bagian:'teks'}:{tingkat:'aman',catatan:[],bagian:'-'}; }
      if(role==='L.1') return {kualitas:'Hook kuat, alur jelas.',kesesuaian:'Cocok dengan perintah dan mode.',penting:['[Risiko nyata] klaim penghasilan di slide 3','[Saran] hook bisa lebih tajam'],saran:'Setujui dengan perubahan kecil.'};
      return {};
    };
    const sample=async(i,o)=>({text:JSON.stringify(await gen(i,o))}); sample.json=async(i,o)=>gen(i,o); sample.limits=async()=>({images:true});
    window.__mode=(location.hash||'').slice(1);
    try{localStorage.setItem('zuno-akses','kunci-uji')}catch(e){}
    const of=window.fetch.bind(window);
    window.__aiReq=[];
    window.__risetReq=[];
    window.fetch=async(u,o)=>{
      if(String(u).includes('/api/gambar')){window.__gambarReq=(window.__gambarReq||[]).concat([String(u)]);return new Response(JSON.stringify({code:'no_image',message:'tes: tidak ada gambar'}),{status:422,headers:{'content-type':'application/json'}})}
      if(String(u).includes('/api/riset')){window.__risetReq.push({url:String(u),key:o&&o.headers&&o.headers['x-zuno-key']});return new Response(JSON.stringify({diambil:'2026-11-06T07:00:00Z',tren:[{kata:'chatgpt',perkiraan_pencarian:'2000+',berita:[]}],berita:[{kata_kunci:'AI agent',judul:'Berita AI agent',tautan:'https://news.test/a',sumber:'News Test'}],diskusi:[],gagal:[]}),{headers:{'content-type':'application/json'}})}
      if(String(u).includes('/api/status'))return new Response(JSON.stringify({online:true,provider:'claude',model:'claude-opus-5-5',ai_key_set:true,access_set:true}),{headers:{'content-type':'application/json'}});
      if(String(u).includes('/api/ai')){
        const body=JSON.parse(o.body);window.__aiReq.push({tier:body.tier,img:(body.images||[]).length,key:o.headers['x-zuno-key']});
        const inp=typeof body.input==='string'?body.input:body.input.map(m=>m.content).join('\n');
        const j=JSON.stringify(await gen(inp,{images:body.images}));
        const half=Math.floor(j.length/2);
        const lines=[{t:'delta',text:j.slice(0,half)},{t:'delta',text:j.slice(half)},{t:'done',stop:'end_turn',model:'claude-opus-5-5'}];
        const enc=new TextEncoder();
        return new Response(new ReadableStream({start(c){lines.forEach(l=>c.enqueue(enc.encode(JSON.stringify(l)+'\n')));c.close()}}),{headers:{'content-type':'application/x-ndjson'}});
      }
      return of(u,o);
    };
  });
  const http = require('http'), fs = require('fs'), path = require('path'); const root = path.join(__dirname, '..', 'web');
  const MIME = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.glb': 'model/gltf-binary' };
  const srv = http.createServer((q, r) => { let f = path.join(root, decodeURIComponent(q.url.split('?')[0])); if (f.endsWith('/')) f += 'index.html'; fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); r.end(d); }); });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  const U = 'http://127.0.0.1:' + srv.address().port;
  const teksChat = () => p.$$eval('#chatLog .chat-msg', (li) => li.map((l) => l.getAttribute('data-dari') + ': ' + l.querySelector('.chat-teks').textContent));
  const fsKeys = () => p.evaluate(() => Object.keys(window.__fs));
  try {
    await p.goto(U + '/studio.html#chat');
    await p.waitForSelector('#chatLog .chat-msg');
    ok('menu Chat: #chat membuka chat ZUNO, kolom kerja disembunyikan', await p.isVisible('#chat') && !(await p.isVisible('#cmd')) && (await p.getAttribute('#lihatChat', 'aria-pressed')) === 'true');
    ok('menu Chat ada di menu atas', (await p.textContent('.nav-links a[data-buka="chat"]')).trim() === 'Chat');
    ok('ZUNO menyapa sebagai pelapor tim', /aku ZUNO, pelapor tim/.test((await teksChat()).join('\n')));
    await p.click('#chatPilihFolder');
    await p.waitForFunction(() => /Hasil Zuno/.test(document.getElementById('chatFolder').textContent)).catch(() => {});
    ok('Pilih folder: folder hasil di laptop tercatat', /Folder hasil: Hasil Zuno/.test(await p.textContent('#chatFolder')));

    // ---- jalankan konten dari tab Kerja ----
    await p.click('#lihatKerja');
    await p.fill('#cmd', 'buat 2 konten soal AI untuk kantor'); await p.click('#run');
    await p.waitForFunction(() => document.querySelectorAll('.res .btn.ok').length === 2 && !document.getElementById('run').disabled, null, { timeout: 60000 });
    await p.waitForTimeout(1200);
    const n1 = Number(await p.textContent('#chatBaru'));
    ok('selama di tab Kerja, chat menandai kabar baru (' + n1 + ')', n1 > 3 && await p.isVisible('#chatBaru'));
    let c = (await teksChat()).join('\n');
    ok('ZUNO: perintah diterima + format', /Perintah diterima: "buat 2 konten soal AI untuk kantor"\. Format: 1 carousel \+ 1 video/.test(c));
    ok('ZUNO: tiap divisi dilaporkan mulai dan selesai (Lead, Riset, Produksi)', /Lead \(ZUNO dan Lia\) mulai bekerja/.test(c) && /Riset \(Raka dan Nara\) mulai bekerja/.test(c) && /Lead selesai/.test(c) && /Produksi \(Dika dan Vino\) mulai bekerja/.test(c));
    ok('ZUNO: naskah siap dicek, dengan tombol ke naskah', /Naskah siap kamu cek: KK-001/.test(c) && !!(await p.$('#chatLog [data-aksi="naskah"]')));
    ok('ZUNO: laporan kinerja agen (tabel dari panggilan AI asli)', (await p.$$eval('#chatLog .chat-tabel tbody tr', (r) => r.map((x) => x.querySelector('th').firstChild.textContent))).join(',').includes('ZUNO'));
    await p.waitForTimeout(800);
    let k = await fsKeys();
    const tugas = k.map((x) => x.split('/')[1]).find(Boolean) || '';
    ok('folder tugas: tanggal + Konten + judul permintaan (' + tugas + ')', /^\d{4}-\d\d-\d\d Konten - buat 2 konten soal AI untuk kantor$/.test(tugas));
    ok('naskah tersimpan otomatis, nama sesuai judul (' + k.filter((x) => /naskah\.docx$/.test(x)).map((x) => x.split('/').slice(2).join('/')).join(' | ') + ')', k.some((x) => /\/01 Carousel - Ide 1\/Ide 1 - naskah\.docx$/.test(x)) && k.some((x) => /\/02 Video - .+\/.+ - naskah\.docx$/.test(x)) && k.some((x) => /daftar-hasil\.md$/.test(x)));
    await p.click('#lihatChat');
    ok('membuka chat menghapus tanda kabar baru', !(await p.isVisible('#chatBaru')));
    await p.click('#chatLog [data-aksi="naskah"] >> nth=-1');
    await p.waitForTimeout(800);
    ok('tombol di chat mengarah ke hasil (tab Kerja, hasil terlihat)', await p.isVisible('#cmd') && await p.evaluate(() => { const r = document.getElementById('resp').getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; }));

    // ---- lanjut sampai hasil jadi ----
    for (const sel of ['#resc', '#resv']) { if (sel === '#resv') await p.click('#tabv'); await p.click(sel + ' .btn.ok >> text=Lanjut ke desain & editing'); await p.waitForFunction(() => !document.getElementById('run').disabled, null, { timeout: 120000 }); }
    await p.waitForSelector('.banner:has-text("siap kamu tinjau")', { timeout: 30000 });
    await p.waitForTimeout(1500);
    c = (await teksChat()).join('\n');
    ok('ZUNO: tiap hasil yang selesai dilaporkan, jujur soal video (paket, belum MP4)', /Selesai\. 1 carousel siap kamu review: KK-001/.test(c) && /Selesai\. 1 video siap kamu review: KK-002 .+belum file MP4/.test(c));
    ok('ZUNO: Desain dan Editing ikut dilaporkan setelah Lanjut', /Desain \(Sari\) mulai bekerja/.test(c) && /Editing \(Edo, Bima, dan Fira\) mulai bekerja/.test(c));
    k = await fsKeys();
    ok('hasil tersimpan per judul: slide PNG, paket.md, paket render video', k.some((x) => /Ide 1 - slide 1\.png$/.test(x)) && k.some((x) => /Ide 1 - paket\.md$/.test(x)) && k.some((x) => /02 Video - .+ - paket-claude-code\.zip$/.test(x)));
    // ---- setujui video: masuk antrian, ZUNO melapor aturan unggah ----
    await p.click('#resv .btn.ok'); await p.waitForSelector('#resv .pill.ok', { timeout: 15000 }); await p.waitForSelector('#antrianl .res', { timeout: 15000 });
    await p.waitForFunction(() => /masuk Antrian Posting/.test(document.getElementById('chatLog').textContent), null, { timeout: 10000 }).catch(() => {});
    c = (await teksChat()).join('\n');
    ok('ZUNO: yang disetujui masuk antrian, agen mengunggah sendiri setelah sambungan siap, belum terkirim', /sudah kamu setujui dan masuk Antrian Posting/.test(c) && /mengunggahnya sendiri/.test(c) && /belum ada yang terkirim/.test(c));
    await p.waitForTimeout(800);
    ok('antrian posting ikut tersimpan di folder hasil', (await fsKeys()).some((x) => /antrian-posting\.json$/.test(x)));

    // ---- tanya-jawab ----
    await p.click('#lihatChat');
    const liveSebelum = await p.$$eval('#liveKonten .live-item', (l) => l.length);
    const aiSebelum = await p.evaluate(() => window.__aiReq.length);
    await p.fill('#chatIn', 'sampai mana kerjaan tim?'); await p.press('#chatIn', 'Enter');
    await p.waitForFunction((n) => window.__aiReq.length > n, aiSebelum, { timeout: 10000 }).catch(() => {});
    await p.waitForTimeout(600);
    c = await teksChat();
    ok('pesan bebas: terkirim ke AI, dijawab ZUNO', c.some((x) => x === 'kamu: sampai mana kerjaan tim?') && /^zuno: /.test(c[c.length - 1]) && (await p.evaluate(() => window.__aiReq.length)) === aiSebelum + 1);
    ok('obrolan chat tidak masuk pratinjau Hasil kerja agen', (await p.$$eval('#liveKonten .live-item', (l) => l.length)) === liveSebelum);
    await p.click('[data-cepat="status"]');
    ok('tombol Status sekarang: laporan tanpa AI', /Tim tidak sedang berjalan\. \d+ dari \d+ tahap selesai/.test((await teksChat()).slice(-1)[0]) && (await p.evaluate(() => window.__aiReq.length)) === aiSebelum + 1);
    const jumlah = (await teksChat()).length;
    await p.reload(); await p.waitForSelector('#chatLog .chat-msg');
    ok('riwayat chat tetap ada setelah halaman dimuat ulang', (await teksChat()).length === jumlah);
    const hp = await b.newPage({ viewport: { width: 375, height: 800 } });
    await hp.goto(U + '/studio.html#chat'); await hp.waitForSelector('#chatLog .chat-msg');
    ok('HP: chat tanpa geser samping', await hp.evaluate(() => document.documentElement.scrollWidth <= innerWidth) && await hp.isVisible('#chatIn'));
    ok('tanpa galat halaman (' + errs.join(' | ').slice(0, 300) + ')', errs.filter((e) => !/404|422/.test(e)).length === 0);
  } finally { await b.close(); srv.close(); }
  console.log(gagal ? 'HASIL: ' + gagal + ' GAGAL' : 'HASIL: SEMUA LOLOS');
  process.exit(gagal ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
