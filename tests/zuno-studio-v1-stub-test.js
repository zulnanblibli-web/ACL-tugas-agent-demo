const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1280,height:900}});
  const errs=[]; p.on('pageerror',e=>errs.push('PAGEERR '+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
  await p.addInitScript(()=>{
    let failQA = true; let calls=0, active=0, maxActive=0;
    window.__stats=()=>({calls,maxActive});
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    async function gen(input,opts){
      calls++; active++; maxActive=Math.max(maxActive,active);
      try{
        const m=input.match(/PERAN ANDA: (\S+)/); const role=m?m[1]:'?';
        let text;
        if(role==='Lead' && /rencanakan/.test(input)) text=JSON.stringify({golongan:'ide baru',fase:1,ringkasan_bahan:'tes',memori_dipakai:['niche'],usulan_memori_baru:[],pertanyaan:[],produk_atau_portofolio:false,kartu:[{id:'KK-001',platform:'Instagram',funnel:'TOFU',ide:'AI bantu kerja kantor'},{id:'KK-002',platform:'Instagram',funnel:'MOFU',ide:'Prompt harian'},{id:'KK-003',platform:'TikTok',funnel:'BOFU',ide:'Cerita bikin agent'}]});
        else if(role==='1.2') text=JSON.stringify({briefs:[1,2,3].map(i=>({id:'KK-00'+i,ide:'Ide '+i,funnel:['TOFU','MOFU','BOFU'][i-1],platform:'Instagram',angle:'angle '+i,hooks:['h1','h2','h3'],tujuan_cta:'cta',kaitan_produk:''}))});
        else if(/^2\.\d/.test(role)){ const bad = failQA && role==='2.2' && /KK-001/.test(input); if(role==='2.2'&&/KK-001/.test(input)) failQA=false; text=JSON.stringify({verdict:bad?'Tidak Lolos':'Lolos',catatan:bad?['klaim penghasilan']:['ok'],bagian:bad?'teks':'-'}); }
        else text='**Hasil '+role+'**\n- poin satu\n- poin dua <b>x</b>\n\n1. a\n2. b';
        const parts=text.match(/.{1,40}/gs)||[text]; let acc='';
        for(const s of parts){ if(opts.signal&&opts.signal.aborted) throw {code:'cancelled',message:'x'}; await sleep(25); acc+=s; opts.onText&&opts.onText({text:acc,delta:s}); }
        return {text,truncated:false};
      } finally { active--; }
    }
    const sample=async(i,o)=>gen(i,o||{});
    sample.json=async(i,o)=>JSON.parse((await gen(i,o||{})).text);
    window.claude={use:async n=>n==='sample'?sample:n==='downloads'?{save:async()=>{window.__saved=true}}:null};
  });
  await p.goto('file://'+process.cwd()+'/prototypes/zuno-studio-v1.html');
  await p.waitForTimeout(300);
  console.log('run enabled:', await p.$eval('#run',e=>!e.disabled));
  await p.fill('#cmd','tes perintah');
  await p.click('#run');
  await p.waitForTimeout(1500);
  await p.screenshot({path:'/tmp/mid.png',fullPage:true});
  await p.waitForSelector('#gatepanel:not(.hidden)',{timeout:60000});
  console.log('gate shown; stats',await p.evaluate(()=>window.__stats()));
  console.log('cards:',await p.$$eval('.kk',e=>e.map(x=>x.innerText.replace(/\n/g,' | '))));
  console.log('r1 entries (2.2 KK-001):',await p.$$eval('#g2 details.ent',e=>e.filter(x=>x.innerText.includes('2.2')&&x.innerText.includes('KK-001')).map(x=>x.querySelector('.lb').innerText+' '+x.querySelector('.sb').innerText+' '+x.dataset.state)));
  await p.screenshot({path:'/tmp/gate.png',fullPage:true});
  await p.click('#approveall');
  await p.click('#go3');
  await p.waitForSelector('#finalpanel:not(.hidden)',{timeout:60000});
  await p.click('#mkreport');
  await p.waitForSelector('#copyrep:not(.hidden)',{timeout:30000});
  console.log('report len',(await p.$eval('#reptext',e=>e.textContent)).length,'dl visible',await p.$eval('#dlrep',e=>!e.classList.contains('hidden')));
  await p.click('#dlrep'); await p.waitForTimeout(100); console.log('saved',await p.evaluate(()=>window.__saved));
  await p.screenshot({path:'/tmp/final.png',fullPage:true});
  const m=await b.newPage({viewport:{width:390,height:800}});
  await m.addInitScript(()=>{}); 
  console.log('ERRORS',errs);
  await b.close();
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
