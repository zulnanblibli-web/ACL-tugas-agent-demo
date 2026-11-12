const { chromium } = require('playwright');
// Argumen opsional: path file referensi (foto/video) yang diunggah ke tool.
// Tes edisi jasa: node tests/zuno-jasa-test.js <folder-repo-jasa>
const args = process.argv.slice(2); const JASA = args.find(a=>!a.startsWith('--')); if(!JASA){console.error('Pakai: node tests/zuno-jasa-test.js <folder-repo-jasa>');process.exit(1)} const MODE = args.includes('--tampil') ? 'tampil' : 'tanpa'; const refs = [];
(async()=>{
  const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1100,height:900}});
  const errs=[]; p.on('pageerror',e=>errs.push('PAGEERR '+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
  await p.addInitScript(()=>{
    window.__ZUNO_NOTICE_DELAY=600; window.__calls=[]; let failOnce=true;
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    const gen=async(input,opts)=>{
      await sleep(30);
      const role=(input.match(/PERAN ANDA: (\S+)/)||[])[1];
      window.__calls.push({role,images:(opts&&opts.images||[]).length});
      if(role==='L.0') return {golongan:'ide baru',kartu:[{id:'KK-001',platform:'Instagram',funnel:'TOFU',ide:'AI rapikan kerja'},{id:'KK-002',platform:'TikTok',funnel:'MOFU',ide:'Prompt harian'}]};
      if(role==='R.2') return {briefs:[1,2].map(i=>({id:'KK-00'+i,ide:'Ide '+i,funnel:['TOFU','MOFU'][i-1],platform:'Instagram',angle:'a',hooks:['h'],tujuan_cta:'simpan'}))};
      if(role==='R.1') return {sumber:/SUMBER:/.test(input)?[{judul:'Tools AI baru untuk merangkum rapat',tautan:'https://contoh.test/berita',jenis:'berita',inti:'Ada fitur ringkas rapat otomatis',sudut_konten:'Rapat 1 jam jadi 3 poin'}]:[],masalah_audiens:['kerjaan numpuk, bingung mulai dari mana','takut salah pakai AI'],sudut_jarang:['AI bukan pengganti, tapi asisten'],pola_hook:['pain point','negative'],catatan:'semua perlu dicek'};
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
    try{localStorage.setItem('zuno-akses','kunci-uji');if(!/kosong/.test(location.hash))localStorage.setItem('zuno-brand',JSON.stringify({nama:'Rina Kue',niche:'kue rumahan',positioning:'membantu ibu rumah tangga mulai jualan kue',audiens:'ibu rumah tangga 25-40 tahun',platform:'Instagram, TikTok',pilar:['Resep','Tips jualan','Cerita dapur'],suara:'hangat pakai aku/kamu',fakta:'Jualan kue sejak 2020\nPunya 2 varian andalan',slogan:'Halo, aku Rina. Aku bantu kamu mulai jualan kue.',kredit:'Dibuat oleh Studio Rina'}));else localStorage.removeItem('zuno-brand')}catch(e){}
    const of=window.fetch.bind(window);
    window.__aiReq=[];
    window.fetch=async(u,o)=>{
      if(String(u).includes('/api/gambar')){window.__gambarReq=(window.__gambarReq||[]).concat([String(u)]);return new Response(JSON.stringify({code:'no_image',message:'tes: tidak ada gambar'}),{status:422,headers:{'content-type':'application/json'}})}
      if(String(u).includes('/api/riset'))return new Response(JSON.stringify({diambil:'2026-11-06T07:00:00Z',tren:[],berita:[{kata_kunci:'kue',judul:'Berita uji',tautan:'https://news.test/b',sumber:'News Test'}],diskusi:[],gagal:[]}),{headers:{'content-type':'application/json'}});
      if(String(u).includes('/api/status'))return new Response(JSON.stringify({online:true,provider:'claude',model:'claude-opus-5-5',ai_key_set:true,access_set:true}),{headers:{'content-type':'application/json'}});
      if(String(u).includes('/api/ai')){
        const body=JSON.parse(o.body);window.__aiReq.push({tier:body.tier,img:(body.images||[]).length,key:o.headers['x-zuno-key'],input:typeof body.input==='string'?body.input:JSON.stringify(body.input)});
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
  const http=require('http'),fs=require('fs'),path=require('path');const root=path.resolve(JASA);
  const srv=http.createServer((q,r)=>{let f=path.join(root,decodeURIComponent(q.url.split('?')[0]));if(f.endsWith('/'))f+='index.html';fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);return r.end()}r.writeHead(200,{'content-type':f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':'text/html'});r.end(d)})});
  await new Promise(r=>srv.listen(0,r));
  await p.goto('http://127.0.0.1:'+srv.address().port+'/');
  await p.waitForTimeout(500);
  console.log('Workspace: judul',await p.$eval('h1',e=>e.textContent),'| status',await p.$eval('#hStat',e=>e.textContent),'| dialog kunci terbuka?',await p.$eval('#keyDlg',e=>e.open));
  console.log('alur awal:',await p.$$eval('#hFlow .node b',e=>e.map(x=>x.textContent).join(' > ')));
  await p.waitForTimeout(300);
  console.log('paket default:', await p.$eval('#count',e=>e.value));
  await p.selectOption('#mode',MODE); await p.fill('#cmd','tes'); await p.fill('#src','Tools AI baru untuk merangkum rapat https://contoh.test/berita'); await p.click('#run');
  await p.waitForFunction(()=>document.querySelectorAll('.res .btn.ok').length===2&&!document.getElementById('run').disabled,null,{timeout:60000});
  for(const sel of ['#resc','#resv']){ if(sel==='#resv') await p.click('#tabv'); await p.click(sel+' .btn.ok >> text=Lanjut ke desain & editing'); await p.waitForFunction(()=>!document.getElementById('run').disabled,null,{timeout:60000}); }
  await p.click('#tabc');
  await p.waitForSelector('.banner:has-text("siap kamu tinjau")',{timeout:30000});
  await p.waitForFunction(()=>!document.getElementById('run').disabled,null,{timeout:120000});
  console.log('cards:',await p.$$eval('.kc',e=>e.map(x=>x.innerText.replace(/\n/g,' | '))));
  console.log('tracks:',await p.$$eval('.track',e=>e.map(x=>x.querySelector('.tname').textContent+'='+x.dataset.s)));
  console.log('panggilan 1.5 video:',JSON.stringify((await p.evaluate(()=>window.__calls)).filter(c=>c.role==='D.1')));
  await p.click('#tabv');
  const md=await p.evaluate(()=>document.querySelector('#resv .mdprev').innerText);
  console.log('md preview panjang:',md.length,'| ada babak:',['HOOK','PROBLEM','TWIST','SOLUSI','CTA'].every(k=>md.includes(k)),'| ada storyboard:',md.includes('Storyboard per adegan'),'| HyperFrames:',md.includes('hyperframes'),'| rencana efek:',md.includes('_effects.json'),'| skrip rekam:',md.includes('Skrip rekam'));
  console.log('tombol:',await p.$$eval('#resv .btns .btn',e=>e.map(x=>x.textContent.trim())));
  console.log('peran dipanggil:',[...new Set((await p.evaluate(()=>window.__calls)).map(c=>c.role))].join(','));
  console.log('jumlah P.1 (tanpa revisi otomatis):',(await p.evaluate(()=>window.__calls)).filter(c=>c.role==='P.1').length);
  console.log('pemberitahuan:',await p.$$eval('#notices .banner',e=>e.map(x=>x.innerText.slice(0,120))));
  console.log('ringkasan tampil:',await p.$$eval('.ringkas',e=>e.length),'| pill:',await p.$$eval('.res .pill',e=>e.map(x=>x.textContent)));
  await p.click('#tabc'); const mdc=await p.evaluate(()=>document.querySelector('#resc .mdprev').innerText); await p.click('#tabv');
  console.log('md carousel: daftar sumber',mdc.includes('Daftar sumber'),'| ringkasan',mdc.includes('Ringkasan Sebelum Terbit'),'| Tidak Lolos?',/Tidak Lolos/.test(mdc));
  await p.screenshot({path:'/tmp/v2-final.png',fullPage:true});
  await p.click('#resv .btn >> text=Unduh paket'); await p.click('#resv .btn >> text=Unduh komposisi'); 
  await p.click('#resv .btn.ok'); await p.waitForSelector('#resv .pill.ok',{timeout:15000}); await p.waitForTimeout(500);
  console.log('setelah setuju paket posting di md:', await p.evaluate(()=>document.querySelector('#resv .mdprev').innerText.includes('Paket posting')));
  console.log('unduhan:',await p.evaluate(()=>window.__saved));
  console.log('alur HUD akhir:',await p.$$eval('#hFlow .node',e=>e.map(x=>x.querySelector('b').textContent+'='+x.dataset.s).join(' ')));
  console.log('proses %:',await p.$eval('#hPct',e=>e.textContent),'| model:',await p.$eval('#hModel',e=>e.textContent),'| panggilan /api/ai:',(await p.evaluate(()=>window.__aiReq)).length,'| kunci terkirim:',(await p.evaluate(()=>window.__aiReq[0]&&window.__aiReq[0].key)));
  await p.screenshot({path:process.env.SHOT||'/tmp/zuno-web.png',fullPage:true});
  // ---- cek khusus edisi jasa ----
  const gagal=[];const cek=(nama,ok)=>{console.log((ok?'OK   ':'GAGAL')+' '+nama);if(!ok)gagal.push(nama)};
  const req=await p.evaluate(()=>window.__aiReq);
  const semua=req.map(r=>r.input).join('\n');
  cek('prompt terkirim ('+req.length+')',req.length>5);
  cek('prompt tanpa nama Zulnan',!/zulnan/i.test(semua));
  cek('prompt tanpa fakta pribadi penjual',!/(12 tahun|FMCG|6 web aktif|30 menit per web|nexamind)/i.test(semua));
  cek('prompt memakai nama brand',semua.includes('Rina Kue'));
  cek('prompt memakai fakta brand',semua.includes('Jualan kue sejak 2020'));
  cek('prompt memakai audiens brand',semua.includes('ibu rumah tangga 25-40 tahun')&&!/pemula 25-35 tahun/.test(semua));
  cek('prompt memakai pilar brand',semua.includes('1) Resep, 2) Tips jualan, 3) Cerita dapur'));
  cek('prompt memakai slogan brand',semua.includes('Halo, aku Rina'));
  const teks=await p.evaluate(()=>document.body.innerText);
  cek('halaman tanpa nama Zulnan',!/zulnan/i.test(teks));
  cek('halaman tanpa kredit nexamind selain footer (K3)',!/nexamind/i.test(teks.replace(/Creative @nexamind\.ai\s*$/m,''))&&(await p.$eval('.nx-footer .credit',e=>e.textContent.trim()))==='Creative @nexamind.ai');
  // Tampilan Nexaoffice (Zulnan 2026-11-12: K1-K3)
  cek('K1: Workspace di "/" tanpa bagian jualan (harga, pesan kit, produk lain)',(await p.$$eval('#navLinks a',e=>e.map(x=>x.getAttribute('href')).join(' ')))==='/ /#chat /office/karakter.html'&&!/Pesan kit|Harga belum ditentukan|Produk lain/i.test(teks)&&!!(await p.$('#ruangKerja')));
  cek('K2: nama brand menggantikan Nexaoffice (menu, footer, judul tab)',(await p.$$eval('.wordmark',e=>e.map(x=>x.textContent.trim())))+''==='Rina Kue,Rina Kue'&&!/Nexaoffice/.test(teks)&&/Rina Kue/.test(await p.title()));
  cek('tampilan Nexaoffice: studio-nexa.css dimuat, HUD lama tidak ada',!!(await p.$('link[href="/studio-nexa.css"]'))&&!(await p.$('link[href="/hud.css"]'))&&!fs.existsSync(path.join(root,'hud.css'))&&!fs.existsSync(path.join(root,'motion.js')));
  cek('Kantor 3D tertanam: iframe office/ruang.html termuat',await p.evaluate(()=>{const f=document.getElementById('kantorIframe');return !!(f&&/\/office\/ruang\.html/.test(f.src)&&f.contentDocument&&f.contentDocument.querySelector('script[src="/office/office.bundle.js"]'))}));
  cek('Kantor 3D tertanam: tema The Grotto pakai office/grotto.html',/\/office\/grotto\.html\?/.test(fs.readFileSync(path.join(root,'office/kendali.js'),'utf8'))&&fs.existsSync(path.join(root,'office/grotto.html'))&&fs.existsSync(path.join(root,'nexa.html')));
  cek('nama produk Nexaoffice (tanpa "Zuno Studio" di halaman, live.js, LISENSI, CLAUDE.md, PANDUAN, README, VERSI)',['index.html','live.js','office/ruang.html','LISENSI.md','CLAUDE.md','PANDUAN.md','PANDUAN-LOKAL.md','README.md','VERSI.txt','jalankan-lokal.bat'].every(f=>!/Zuno Studio/.test(fs.readFileSync(path.join(root,f),'utf8')))&&/Nexaoffice/.test(fs.readFileSync(path.join(root,'LISENSI.md'),'utf8')));
  cek('Tambah agen: profil 18 agen tanpa data pribadi penjual',(()=>{const t=fs.readFileSync(path.join(root,'assets/agen-profil.json'),'utf8');const j=JSON.parse(t);return j.agen.length>=18&&!/zulnan|nexamind|6 web aktif|Hai, kenalin/i.test(t)})());
  { const z=await p.evaluate(async()=>{const B={id:'PRJ-261106-AB7',jenis:'portofolio',klien:'',scope:{nama_aplikasi:'Absensi "Kelas" O\'Neil',mesin:'Apps Script + Google Sheets',kredit:'Creative @nexamind.ai'},code:{html:'<html></html>',beName:'Code.gs',backend:'function doGet(){}',panduan:'# Panduan untuk Zulnan'},design:{},akun:{adminU:'admin_ab12',adminP:'Rahasia123',demoU:'demo_cd34',demoP:'Demo12345'}};return await window.ZunoUji.rilisZip(B).text()});
    const blok=(n)=>{const i=z.indexOf('/'+n+'{');return i<0?'':z.slice(i+n.length+1)};
    const rj=blok('rilis.json'),aj=blok('akun-awal.json');
    const ambilJson=(t)=>{for(let k=t.indexOf('{'),d=0,i=k;i<t.length;i++){if(t[i]==='{')d++;else if(t[i]==='}'&&--d===0)return JSON.parse(t.slice(k,i+1))}};
    let man=null,ak=null;try{man=ambilJson(rj);ak=ambilJson(aj)}catch(e){console.log('JSON rusak:',e.message)}
    cek('paket rilis jasa: tanpa nama penjual (Zulnan/nexamind)',!/Zulnan|nexamind/i.test(z));
    cek('paket rilis jasa: pemilik = nama brand pembeli di rilis.json dan CLAUDE.md',man&&man.pemilik==='Rina Kue'&&/Pemilik: Rina Kue/.test(z));
    cek('paket rilis jasa: JSON tetap valid walau nama memuat tanda kutip',man&&man.nama==='Absensi "Kelas" O\'Neil'&&ak&&ak.akun.length===2);
    cek('paket rilis jasa: rilis.mjs netral (perlu_pemilik, tanpa nama orang)',/perlu_pemilik/.test(z)&&/export async function rilis/.test(z)); }
  const unduh=await p.evaluate(async()=>{const t=await new Blob(['Dibuat Zulnan · Creative @nexamind.ai'],{type:'text/markdown'}).text();const z=new TextDecoder().decode(new TextEncoder().encode('Pemilik: Zulnan'));return t+' | '+z});
  cek('unduhan (.md dan isi zip) memakai brand: '+unduh,!/zulnan|nexamind/i.test(unduh)&&unduh.includes('Rina Kue')&&unduh.includes('Studio Rina'));
  const mdv=await p.evaluate(()=>{const e=document.querySelector('#resv .mdprev');return e?e.innerText:''});
  cek('paket video memuat slogan brand',mdv.includes('Halo, aku Rina'));
  cek('tombol Pengaturan brand ada di menu',!!(await p.$('#navLinks #zbBtn')));
  // pemakaian pertama: dialog pengaturan terbuka sendiri
  const p2=await b.newPage();await p2.addInitScript(()=>{try{localStorage.setItem('zuno-akses','kunci-uji');if(!sessionStorage.getItem('sekali')){localStorage.removeItem('zuno-brand');sessionStorage.setItem('sekali','1')}}catch(e){}});
  await p2.goto('http://127.0.0.1:'+srv.address().port+'/#kosong');await p2.waitForTimeout(1500);
  cek('pemakaian pertama: dialog Pengaturan brand terbuka',await p2.evaluate(()=>{const d=document.getElementById('zbDlg');return !!(d&&d.open)}));
  cek('K2: brand belum diisi -> nama bawaan Nexaoffice',(await p2.$eval('.wordmark',e=>e.textContent.trim()))==='Nexaoffice');
  await p2.fill('#zb_nama','Toko Uji');await p2.click('#zbSave');await p2.waitForTimeout(1500);
  cek('simpan brand lalu halaman memakai nama baru',await p2.evaluate(()=>window.ZB&&window.ZB.nama==='Toko Uji'&&!document.getElementById('zbDlg').open&&document.querySelector('.wordmark').textContent.trim()==='Toko Uji'));
  // paket pasang lokal (2026-11-11): skill ikut, yang lisensinya belum pasti tidak ikut tapi ada di panduan
  { const ex=(f)=>fs.existsSync(path.join(root,f)); const rd=(f)=>ex(f)?fs.readFileSync(path.join(root,f),'utf8'):'';
    const sk=ex('.claude/skills')?fs.readdirSync(path.join(root,'.claude/skills')):[];
    cek('paket lokal: pemasang satu perintah (pasang.bat, pasang.sh, tools/pasang)',['pasang.bat','pasang.sh','tools/pasang/pasang.ps1','tools/pasang/pasang.sh','tools/pasang/cek-kesiapan.mjs','jalankan-lokal.bat'].every(ex)&&/server\.mjs/.test(rd('jalankan-lokal.bat'))&&!/dev-server/.test(rd('jalankan-lokal.bat')));
    cek('paket lokal: skill pihak ketiga ikut dengan LICENSE ('+sk.length+' folder)',['impeccable','frontend-design','ui-ux-pro-max','hue','awwwards','jury','youtube','lemo-opuscar','blender-director','hallmark'].every(d=>sk.includes(d)&&fs.readdirSync(path.join(root,'.claude/skills',d)).some(f=>/^licen[sc]e/i.test(f))));
    cek('paket lokal: taste-skill, ui-styling, dan skill khusus Zuno tidak ikut',!['design-taste-frontend','ui-styling','penulis-hook','perakit-agen','rilis-engineering','antrian-posting','01-idea-to-scope-lock'].some(d=>sk.includes(d)));
    const pl=rd('PANDUAN-LOKAL.md');
    cek('PANDUAN-LOKAL: urutan pasang + cara pasang sendiri taste-skill dan ui-styling',/## 3\. Urutan/.test(pl)&&/Leonxlnx\/taste-skill/.test(pl)&&/nextlevelbuilder\/ui-ux-pro-max-skill/.test(pl)&&/\.claude\/skills\/ui-styling/.test(pl)&&/Kenapa tidak ikut paket/.test(pl));
    cek('paket lokal: CLAUDE.md white-label + tanpa nama penjual di file baru',ex('CLAUDE.md')&&!/zulnan/i.test(rd('CLAUDE.md')+pl+rd('.claude/skills/README.md')+rd('jalankan-lokal.bat')));
    cek('paket lokal: tanpa __pycache__',!require('child_process').execSync('find "'+path.join(root,'.claude')+'" -name __pycache__').toString().trim()); }
  console.log('ERRORS',errs);
  if(errs.length)gagal.push('error di halaman');
  console.log(gagal.length?'HASIL: GAGAL ('+gagal.length+')':'HASIL: SEMUA LOLOS');
  await b.close(); process.exit(gagal.length?1:0);
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
