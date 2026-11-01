const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1100,height:900}});
  const errs=[]; p.on('pageerror',e=>errs.push('PAGEERR '+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
  await p.addInitScript(()=>{
    window.__ZUNO_NOTICE_DELAY=600; window.__order=[]; let failOnce=true;
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    const gen=async(input)=>{
      await sleep(30);
      const role=(input.match(/PERAN ANDA: (\S+)/)||[])[1];
      if(role==='lead') return {golongan:'ide baru',kartu:[{id:'KK-001',platform:'Instagram',funnel:'TOFU',ide:'AI rapikan kerja'},{id:'KK-002',platform:'Instagram',funnel:'MOFU',ide:'Prompt harian'},{id:'KK-003',platform:'TikTok',funnel:'BOFU',ide:'Cerita bikin agent'}]};
      if(role==='1.2') return {briefs:[1,2,3].map(i=>({id:'KK-00'+i,ide:'Ide '+i,funnel:['TOFU','MOFU','BOFU'][i-1],platform:'Instagram',angle:'a',hooks:['h']}))};
      if(role==='1.3'){ if(/Format: video/.test(input)) return {adegan:[{babak:'hook',teks:'Capek kerjaan numpuk?',detik:1.2},{babak:'hook',teks:'Coba satu hal ini',detik:1.2},{babak:'isi',teks:'Rapikan pakai AI',detik:1.3},{babak:'isi',teks:'Satu langkah dulu',detik:1.2},{babak:'isi',teks:'Pelan pelan aja',detik:1.2},{babak:'penutup',teks:'Simpan dulu ya',detik:1.4}],caption:'cap v',hashtag:['#ai'],fakta:[]};
        return {slides:[1,2,3,4,5,6].map(i=>({judul:i==1?'Capek kerjaan numpuk?':i==6?'Simpan dulu ya':'Langkah nomor '+i,isi:i==1?'':'Isi singkat slide '+i+' yang cukup panjang supaya teks membungkus beberapa baris dengan rapi di kanvas'})),caption:'cap',hashtag:['#ai','#produktif'],fakta:['tidak ada']}; }
      if(role==='1.5'){ if(/Format: video/.test(input)) return {gaya:/ID: KK-003/.test(input)?'Glitch Digital':'Dentum',kesan:'cepat',items:Array.from({length:12},()=>({kunci:'AI'}))};
        return {template:'B',alasan:'TOFU menahan scroll',items:Array.from({length:6},(_,i)=>({kunci:i==0?'Capek':'langkah',pill:i==2?'TIPS':''}))} }
      if(role==='3.1') return {platform:'Instagram',caption_final:'cap final',hashtag:['#ai'],cover:'slide 1',saran_jadwal:'sore (asumsi)',catatan:['belum diposting']};
      if(/^2\./.test(role)){ const bad=failOnce&&role==='2.2'&&/ID: KK-001/.test(input); if(bad){failOnce=false; window.__order.push('veto')} return {verdict:bad?'Tidak Lolos':'Lolos',catatan:bad?['klaim penghasilan']:['ok'],bagian:bad?'teks':'-'}; }
      return {};
    };
    const sample=async(i)=>({text:JSON.stringify(await gen(i))}); sample.json=async(i)=>gen(i);
    window.claude={use:async n=>n==='sample'?sample:n==='downloads'?{save:async(o)=>{window.__saved=(window.__saved||[]).concat([o.filename+':'+(o.data&&o.data.size)])}}:null};
  });
  await p.goto('file://'+process.cwd()+'/prototypes/zuno-studio-v2.html');
  await p.waitForTimeout(300);
  await p.fill('#cmd','tes'); await p.click('#run');
  await p.waitForSelector('.banner.warn:has-text("KK-001")',{timeout:20000});
  console.log('notice shown; card stage at notice:', await p.$$eval('.kc',e=>e[0].innerText.replace(/\n/g,' | ')));
  await p.screenshot({path:'/tmp/v2-notice.png',fullPage:true});
  await p.waitForFunction(()=>!document.getElementById('run').disabled,null,{timeout:90000});
  console.log('cards:',await p.$$eval('.kc',e=>e.map(x=>x.innerText.replace(/\n/g,' | '))));
  console.log('tracks:',await p.$$eval('.track',e=>e.map(x=>x.dataset.s)));
  console.log('slides KK-001:',await p.$$eval('#resc .res:first-child img',e=>e.length));
  await p.screenshot({path:'/tmp/v2-final.png',fullPage:true});
  await p.click('#resc .slide button');
  await p.click('#tabv');
  const vinfo=await p.$eval('#resv video',v=>new Promise(r=>{v.onloadedmetadata=()=>r({w:v.videoWidth,h:v.videoHeight});setTimeout(()=>r('timeout'),4000)}));
  console.log('video',vinfo, 'bytes dl:', await p.$eval('#resv .res','x=>x.innerText.slice(0,80)'));
  await p.click('#resv .btn >> text=Unduh video'); 
  await p.click('#resv .btn.ok'); await p.waitForSelector('#resv .pill.ok',{timeout:15000}); console.log('approved pill:',await p.$eval('#resv .pill',e=>e.textContent),'| paket:',await p.$eval('#resv .res','x=>x.innerText.includes("PAKET POSTING")'));
  await p.click('#dlog'); console.log('saved',await p.evaluate(()=>window.__saved));
  await p.screenshot({path:'/tmp/v2-video.png',fullPage:true});
  console.log('ERRORS',errs); await b.close();
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
