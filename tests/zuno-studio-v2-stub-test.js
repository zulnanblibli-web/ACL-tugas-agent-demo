const { chromium } = require('playwright');
// Argumen opsional: path file referensi (foto/video) yang diunggah ke tool.
const args = process.argv.slice(2); const TIPE=(args.find(a=>a.startsWith('--tipe='))||'').slice(7); const COVERF=(args.find(a=>a.startsWith('--cover='))||'').slice(8); const MODE = args.includes('--tampil') ? 'tampil' : 'tanpa'; const refs = args.filter(a=>!a.startsWith('--'));
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
    window.claude={use:async n=>n==='sample'?sample:n==='downloads'?{save:async(o)=>{window.__saved=(window.__saved||[]).concat([o.filename+':'+(o.data&&o.data.size)]); if(/\.zip$/.test(o.filename)){const buf=new Uint8Array(await o.data.arrayBuffer()); let bin=''; for(let i=0;i<buf.length;i++)bin+=String.fromCharCode(buf[i]); window.__zip=btoa(bin)}}}:null};
  });
  await p.goto('file://'+process.cwd()+'/prototypes/zuno-studio-v2.html');
  await p.waitForTimeout(300);
  console.log('paket default:', await p.$eval('#count',e=>e.value));
  if(refs.length){ await p.setInputFiles('#reffile',refs); await p.fill('#refnote','neon, cepat'); console.log('ref list:', await p.$eval('#reflist',e=>e.innerText.slice(0,80))); }
  await p.selectOption('#mode',MODE); if(TIPE) await p.selectOption('#tv',TIPE); if(COVERF){ await p.setInputFiles('#coverfile',COVERF); await p.waitForSelector('#coverprev canvas',{timeout:5000}); console.log('cover dipilih:',await p.$eval('#coverprev',e=>e.innerText.slice(0,40))); } await p.fill('#cmd','tes'); await p.fill('#src','Tools AI baru untuk merangkum rapat https://contoh.test/berita'); await p.click('#run');
  await p.waitForSelector('.banner:has-text("siap kamu tinjau")',{timeout:30000});
  await p.waitForFunction(()=>!document.getElementById('run').disabled,null,{timeout:120000});
  console.log('cards:',await p.$$eval('.kc',e=>e.map(x=>x.innerText.replace(/\n/g,' | '))));
  console.log('tracks:',await p.$$eval('.track',e=>e.map(x=>x.querySelector('.tname').textContent+'='+x.dataset.s)));
  console.log('panggilan 1.5 video:',JSON.stringify((await p.evaluate(()=>window.__calls)).filter(c=>c.role==='D.1')));
  await p.click('#tabv');
  const md=await p.evaluate(()=>document.querySelector('#resv .mdprev').innerText);
  console.log('md preview panjang:',md.length,'| ada babak:',['HOOK','PROBLEM','TWIST','SOLUSI','CTA'].every(k=>md.includes(k)),'| ada storyboard:',md.includes('Storyboard per adegan'),'| HyperFrames:',md.includes('hyperframes'),'| rencana efek:',md.includes('_effects.json'),'| skrip rekam:',md.includes('Skrip rekam'));
  console.log('tipe video:',TIPE||'otomatis','| md memuat tipe:',md.includes('Tipe video')||md.includes('tipe_video'),'| karakter:',md.includes('Gambar acuan'),'| segmen wajah terpanjang:',(md.match(/Segmen wajah terpanjang[^\n]*|segmen_wajah_terpanjang[^\n]*/i)||['-'])[0].slice(0,60));
  console.log('tombol:',await p.$$eval('#resv .btns .btn',e=>e.map(x=>x.textContent.trim())));
  console.log('peran dipanggil:',[...new Set((await p.evaluate(()=>window.__calls)).map(c=>c.role))].join(','));
  console.log('jumlah P.1 (tanpa revisi otomatis):',(await p.evaluate(()=>window.__calls)).filter(c=>c.role==='P.1').length);
  console.log('pemberitahuan:',await p.$$eval('#notices .banner',e=>e.map(x=>x.innerText.slice(0,120))));
  console.log('ringkasan tampil:',await p.$$eval('.ringkas',e=>e.length),'| pill:',await p.$$eval('.res .pill',e=>e.map(x=>x.textContent)));
  await p.click('#tabc'); const mdc=await p.evaluate(()=>document.querySelector('#resc .mdprev').innerText); await p.click('#tabv');
  { await p.click('#tabc'); const u=await p.$eval('#resc .slides img',e=>e.src); require('fs').writeFileSync('/tmp/cover-test'+(COVERF?'-user':'')+'.png',Buffer.from(u.split(',')[1],'base64'));
    if(COVERF){ const alt=process.env.GANTI; if(alt){ await p.setInputFiles('#resc input[type=file]',alt); await p.waitForFunction(()=>/Cover diganti/.test(document.querySelector('#resc').innerText),null,{timeout:10000}); const u2=await p.$eval('#resc .slides img',e=>e.src); require('fs').writeFileSync('/tmp/cover-ganti.png',Buffer.from(u2.split(',')[1],'base64')); console.log('cover diganti dari hasil: ok'); } }
    await p.click('#tabv'); }
  console.log('md carousel: daftar sumber',mdc.includes('Daftar sumber'),'| ringkasan',mdc.includes('Ringkasan Sebelum Terbit'),'| Tidak Lolos?',/Tidak Lolos/.test(mdc),'| kolom Tipe + tipe fakta:',mdc.includes('Tipe')&&mdc.includes('fakta'),'| catatan teks dipotong:',mdc.includes('Catatan tata letak'));
  await p.screenshot({path:'/tmp/v2-final.png',fullPage:true});
  await p.click('#resv .btn >> text=Unduh paket'); await p.click('#resv .btn >> text=Unduh komposisi'); await p.click('#resv .btn >> text=Unduh paket Claude Code'); await p.waitForFunction(()=>window.__zip,null,{timeout:15000}); require('fs').writeFileSync('/tmp/paket-claude-code.zip',Buffer.from(await p.evaluate(()=>window.__zip),'base64')); 
  await p.click('#resv .btn.ok'); await p.waitForSelector('#resv .pill.ok',{timeout:15000}); await p.waitForTimeout(500);
  console.log('setelah setuju paket posting di md:', await p.evaluate(()=>document.querySelector('#resv .mdprev').innerText.includes('Paket posting')));
  console.log('unduhan:',await p.evaluate(()=>window.__saved));
  console.log('ERRORS',errs); await b.close();
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
