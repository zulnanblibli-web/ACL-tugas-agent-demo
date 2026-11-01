const { chromium } = require('playwright');
// Argumen opsional: path file referensi (foto/video) yang diunggah ke tool.
const args = process.argv.slice(2); const MODE = args.includes('--tampil') ? 'tampil' : 'tanpa'; const refs = args.filter(a=>!a.startsWith('--'));
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
      if(role==='lead') return {golongan:'ide baru',kartu:[{id:'KK-001',platform:'Instagram',funnel:'TOFU',ide:'AI rapikan kerja'},{id:'KK-002',platform:'TikTok',funnel:'MOFU',ide:'Prompt harian'}]};
      if(role==='1.2') return {briefs:[1,2].map(i=>({id:'KK-00'+i,ide:'Ide '+i,funnel:['TOFU','MOFU'][i-1],platform:'Instagram',angle:'a',hooks:['h'],tujuan_cta:'simpan'}))};
      if(role==='1.1') return {masalah_audiens:['kerjaan numpuk, bingung mulai dari mana','takut salah pakai AI'],sudut_jarang:['AI bukan pengganti, tapi asisten'],pola_hook:['pain point','negative'],catatan:'semua perlu dicek'};
      if(role==='1.3'){ if(/Format: video/.test(input)){ const B=[['hook','Capek kerjaan numpuk?',true],['hook','Salah mulai dari sini',true],['hook','Bukan karena malas',false],['problem','Semua serba telat',false],['problem','To-do list makin panjang',false],['problem','Tiap hari lembur',false],['twist','Eits. Bukan itu masalahnya',true],['twist','Kamu belum punya sistem',false],['solusi','Tulis semua tugas',false],['solusi','Minta AI urutkan',false],['solusi','Kerjakan satu dulu',false],['solusi','Cek ulang sore',false],['cta','Simpan dulu ya',false],['cta','Coba besok pagi',false]]; return {big_idea:'Kerjaan numpuk itu masalah sistem, bukan malas',jenis_hook:'pain',jenis_ending:'cta',foreshadow:'Jawabannya ada di langkah ketiga',faktor_viral:['relate','fakta mengejutkan'],adegan:B.map((x,i)=>({babak:x[0],teks:x[1],vo:x[1]+'.',visual:'teks besar bergerak',detik:1.2+((i%3)*.3),wajah:x[2]})),caption:'cap v',hashtag:['#ai'],fakta:['tidak ada']}}
        return {big_idea:'Kerjaan numpuk itu masalah sistem',jenis_hook:'pain',jenis_ending:'cta',foreshadow:'Jawabannya ada di slide 4',faktor_viral:['relate'],slides:[['hook','Capek kerjaan numpuk?',''],['problem','Langkah nomor 2','Isi singkat slide 2 yang cukup panjang supaya teks membungkus beberapa baris dengan rapi'],['twist','Langkah nomor 3','Isi singkat slide 3 yang cukup panjang supaya teks membungkus beberapa baris dengan rapi'],['solusi','Langkah nomor 4','Isi singkat slide 4'],['solusi','Langkah nomor 5','Isi singkat slide 5'],['cta','Simpan dulu ya','']].map(x=>({babak:x[0],judul:x[1],isi:x[2]})),caption:'cap',hashtag:['#ai','#produktif'],fakta:['tidak ada']}; }
      if(role==='1.10') return {lolos:!window.__optFail,skor:window.__optFail?5:8,gagal:window.__optFail?['hook lembek']:[],perbaikan:window.__optFail?['tulis ulang: A -> B']:[]};
      if(role==='1.7') return {efek:[{fx:'lean-in',start:0.2,end:2.4,text:'',alasan:'tekanan di hook'},{fx:'tidak-ada',start:1,end:3},{fx:'backdrop-word',start:0.1,end:2.1,text:'AI',alasan:'kata besar'}]};
      if(role==='1.5'){ if(/Format: video/.test(input)){ const ref=/ADA REFERENSI/.test(input); return ref?{gaya:'Dari referensi',kesan:'neon cepat',alasan:'palet dan energi dari referensi',palet:{bg1:'#0a1440',bg2:'#10206a',ink:'#ffffff',acc:'#3df0ff'},font:'Anton',huruf_besar:true,latar:'cincin',masuk:'jatuh',kamera:'zoom',ekstra:['ticker','bentuk','partikel','kilau','penghitung'],energi:3,items:Array.from({length:40},()=>({kunci:'AI'}))}:{gaya:'Dentum',kesan:'cepat',items:Array.from({length:40},()=>({kunci:'AI'}))} }
        return {template:'B',alasan:'TOFU menahan scroll',items:Array.from({length:6},(_,i)=>({kunci:i==0?'Capek':'langkah',pill:i==2?'TIPS':''}))} }
      if(role==='3.1') return {platform:'Instagram',caption_final:'cap final',hashtag:['#ai'],cover:'slide 1',saran_jadwal:'sore (asumsi)',catatan:['belum diposting']};
      if(/^2\./.test(role)){ const bad=failOnce&&role==='2.2'&&/ID: KK-001/.test(input); if(bad)failOnce=false; return {verdict:bad?'Tidak Lolos':'Lolos',catatan:bad?['klaim penghasilan']:['ok'],bagian:bad?'teks':'-'}; }
      return {};
    };
    const sample=async(i,o)=>({text:JSON.stringify(await gen(i,o))}); sample.json=async(i,o)=>gen(i,o); sample.limits=async()=>({images:true});
    window.claude={use:async n=>n==='sample'?sample:n==='downloads'?{save:async(o)=>{window.__saved=(window.__saved||[]).concat([o.filename+':'+(o.data&&o.data.size)])}}:null};
  });
  await p.goto('file://'+process.cwd()+'/prototypes/zuno-studio-v2.html');
  await p.waitForTimeout(300);
  console.log('paket default:', await p.$eval('#count',e=>e.value));
  if(refs.length){ await p.setInputFiles('#reffile',refs); await p.fill('#refnote','neon, cepat'); console.log('ref list:', await p.$eval('#reflist',e=>e.innerText.slice(0,80))); }
  await p.selectOption('#mode',MODE); await p.fill('#cmd','tes'); await p.click('#run');
  await p.waitForSelector('.banner.warn:has-text("KK-001")',{timeout:20000});
  await p.waitForFunction(()=>!document.getElementById('run').disabled,null,{timeout:120000});
  console.log('cards:',await p.$$eval('.kc',e=>e.map(x=>x.innerText.replace(/\n/g,' | '))));
  console.log('tracks:',await p.$$eval('.track',e=>e.map(x=>x.dataset.s)));
  console.log('panggilan 1.5 video:',JSON.stringify((await p.evaluate(()=>window.__calls)).filter(c=>c.role==='1.5')));
  await p.click('#tabv');
  const md=await p.evaluate(()=>document.querySelector('#resv .mdprev').innerText);
  console.log('md preview panjang:',md.length,'| ada babak:',['HOOK','PROBLEM','TWIST','SOLUSI','CTA'].every(k=>md.includes(k)),'| ada storyboard:',md.includes('Storyboard per adegan'),'| HyperFrames:',md.includes('hyperframes'),'| rencana efek:',md.includes('_effects.json'),'| skrip rekam:',md.includes('Skrip rekam'));
  console.log('tombol:',await p.$$eval('#resv .btns .btn',e=>e.map(x=>x.textContent.trim())));
  await p.screenshot({path:'/tmp/v2-final.png',fullPage:true});
  await p.click('#resv .btn >> text=Unduh paket'); await p.click('#resv .btn >> text=Unduh komposisi'); 
  await p.click('#resv .btn.ok'); await p.waitForSelector('#resv .pill.ok',{timeout:15000}); await p.waitForTimeout(500);
  console.log('setelah setuju paket posting di md:', await p.evaluate(()=>document.querySelector('#resv .mdprev').innerText.includes('Paket posting')));
  console.log('unduhan:',await p.evaluate(()=>window.__saved));
  console.log('ERRORS',errs); await b.close();
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
