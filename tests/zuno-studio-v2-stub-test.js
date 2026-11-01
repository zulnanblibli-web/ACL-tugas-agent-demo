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
      if(role==='1.3'){ if(/ID: KK-003/.test(input)) return {adegan:[{teks:'Capek kerjaan numpuk?',detik:2},{teks:'Coba pakai AI buat bantu rapikan',detik:2},{teks:'Simpan ya',detik:2}],caption:'cap v',hashtag:['#ai'],fakta:[]};
        return {slides:[1,2,3,4,5,6].map(i=>({judul:'Judul panjang slide nomor '+i,isi:'Isi singkat slide '+i+' yang cukup panjang supaya teks membungkus beberapa baris dengan rapi di kanvas'})),caption:'cap',hashtag:['#ai','#produktif'],fakta:['tidak ada']}; }
      if(role==='1.5'){const n=/ID: KK-003/.test(input)?4:6;return {gaya:/KK-003/.test(input)?'ungu':'teal',ikon:Array(n).fill('🚀')}}
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
  await p.click('#resv .btn.ok'); console.log('approved pill:',await p.$eval('#resv .pill',e=>e.textContent));
  await p.click('#dlog'); console.log('saved',await p.evaluate(()=>window.__saved));
  await p.screenshot({path:'/tmp/v2-video.png',fullPage:true});
  console.log('ERRORS',errs); await b.close();
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
