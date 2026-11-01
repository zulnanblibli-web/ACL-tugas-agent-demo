const { chromium } = require('playwright');
// Argumen opsional: path file referensi (foto/video) yang diunggah ke tool.
const refs = process.argv.slice(2);
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
      if(role==='1.3'){ if(/Format: video/.test(input)) return {adegan:Array.from({length:14},(_,i)=>({babak:i<3?'hook':i==13?'penutup':'isi',teks:['Capek kerjaan numpuk?','Coba satu hal ini','Cuma lima menit','Rapikan pakai AI','Satu langkah dulu','Tulis tugasmu','Minta AI susun','Cek hasilnya','Rapikan lagi','Simpan polanya','Ulangi besok','Pelan pelan aja','Konsisten kecil','Simpan dulu ya'][i],detik:1.1+((i%3)*.15)})),caption:'cap v',hashtag:['#ai'],fakta:[]};
        return {slides:[1,2,3,4,5,6].map(i=>({judul:i==1?'Capek kerjaan numpuk?':i==6?'Simpan dulu ya':'Langkah nomor '+i,isi:i==1?'':'Isi singkat slide '+i+' yang cukup panjang supaya teks membungkus beberapa baris dengan rapi di kanvas'})),caption:'cap',hashtag:['#ai','#produktif'],fakta:['tidak ada']}; }
      if(role==='1.5'){ if(/Format: video/.test(input)){ const ref=/ADA REFERENSI/.test(input); return ref?{gaya:'Dari referensi',kesan:'neon cepat',alasan:'palet dan energi dari referensi',palet:{bg1:'#0a1440',bg2:'#10206a',ink:'#ffffff',acc:'#3df0ff'},font:'Anton',huruf_besar:true,latar:'cincin',masuk:'jatuh',kamera:'zoom',ekstra:['ticker','bentuk','partikel','kilau','penghitung'],energi:3,items:Array.from({length:30},()=>({kunci:'AI'}))}:{gaya:'Dentum',kesan:'cepat',items:Array.from({length:30},()=>({kunci:'AI'}))} }
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
  await p.fill('#cmd','tes'); await p.click('#run');
  await p.waitForSelector('.banner.warn:has-text("KK-001")',{timeout:20000});
  await p.waitForFunction(()=>!document.getElementById('run').disabled,null,{timeout:120000});
  console.log('cards:',await p.$$eval('.kc',e=>e.map(x=>x.innerText.replace(/\n/g,' | '))));
  console.log('tracks:',await p.$$eval('.track',e=>e.map(x=>x.dataset.s)));
  console.log('panggilan 1.5 video:',JSON.stringify((await p.evaluate(()=>window.__calls)).filter(c=>c.role==='1.5')));
  await p.click('#tabv');
  console.log('kartu gaya:',await p.$eval('#resv details pre',e=>e.textContent.split('\n').slice(0,6).join(' || ')).catch(()=>'(tertutup)'));
  await p.screenshot({path:'/tmp/v2-final.png',fullPage:true});
  await p.click('#resv .btn.ok'); await p.waitForSelector('#resv .pill.ok',{timeout:15000});
  console.log('disetujui; paket posting:', await p.$eval('#resv .res',x=>x.innerText.includes('PAKET POSTING')));
  console.log('ERRORS',errs); await b.close();
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
