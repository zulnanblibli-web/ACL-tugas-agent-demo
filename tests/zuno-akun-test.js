// Tes menu Akun (Zulnan 2026-11-12): akun niche tanpa identitas Zulnan, akun personal tetap memakai slogan + bank fakta.
// Jalankan: NODE_PATH=$(npm root -g) node tests/zuno-akun-test.js
const { chromium } = require('playwright');
const assert=(ok,m)=>{if(!ok){console.error('GAGAL: '+m);process.exitCode=1}else console.log('LOLOS: '+m)};
(async()=>{
  const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1100,height:900}});
  const errs=[]; p.on('pageerror',e=>errs.push('PAGEERR '+e.message));
  await p.addInitScript(()=>{
    window.__ZUNO_NOTICE_DELAY=300; window.__in=[];
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    const gen=async(input)=>{ await sleep(20); const role=(input.match(/PERAN ANDA: (\S+)/)||[])[1]; window.__in.push({role,input});
      if(role==='L.0') return {kata_kunci_riset:['pulau'],golongan:'ide baru',kartu:[{id:'KK-001',platform:'Instagram',funnel:'TOFU',ide:'a'},{id:'KK-002',platform:'TikTok',funnel:'MOFU',ide:'b'}]};
      if(role==='R.1') return {sumber:[],masalah_audiens:['a'],sudut_jarang:['b'],pola_hook:['c'],catatan:'cek'};
      if(role==='R.2') return {briefs:[1,2].map(i=>({id:'KK-00'+i,ide:'Ide '+i,funnel:['TOFU','MOFU'][i-1],platform:'Instagram',angle:'a',hooks:['h'],tujuan_cta:'follow'}))};
      if(role==='P.1'){ if(/Format: video/.test(input)) return {big_idea:'Hari pertama di pulau',jenis_hook:'tanya',jenis_ending:'cta',foreshadow:'x',faktor_viral:['seri'],adegan:Array.from({length:12},(_,i)=>({babak:i<2?'hook':i<5?'problem':i<7?'twist':i<10?'solusi':'cta',teks:'Adegan '+(i+1),vo:'Kalimat '+(i+1)+'.',visual:'pulau',detik:1.5,wajah:false})),caption:'cap',hashtag:['#pulau'],fakta:['tidak ada']};
        return {big_idea:'Hari pertama',jenis_hook:'tanya',jenis_ending:'cta',foreshadow:'x',faktor_viral:['seri'],slides:[{babak:'hook',tipe:'cover',judul:'Terdampar hari 1',isi:''},{babak:'solusi',tipe:'poin',judul:'Cari air dulu',isi:'Air lebih penting dari makanan.'},{babak:'cta',tipe:'cta',judul:'Komen: bangun apa besok?',isi:'',centang:['Follow'],tombol:'Follow'}],caption:'cap',hashtag:['#pulau'],fakta:['tidak ada']}; }
      if(role==='P.2') return {lolos:true,skor:8,gagal:[],perbaikan:[]};
      if(role==='E.2') return {komposisi:{lebar:1080,tinggi:1920,fps:30},scene:[{no:1,dari_frame:0,sampai_frame:45,isi:'Adegan 1',animasi:'masuk',audio_cue:'whoosh'}],gaya:'x',catatan_render:'x'};
      if(role==='E.3') return {dna_visual:'pulau',shot:[{no:1,adegan:1,durasi_detik:4,prompt:'island',kamera:'pan',kontinuitas:'x'}],cta:'',catatan:'x'};
      if(role==='E.1') return {efek:[]};
      if(role==='D.1'){ if(/Format: video/.test(input)) return {gaya:'Dentum',kesan:'cepat',items:Array.from({length:40},()=>({kunci:'pulau'}))}; return {alasan:'x',items:Array.from({length:3},()=>({label:'Hari 1'}))}; }
      if(/^Q\./.test(role)) return {tingkat:'aman',catatan:[],bagian:'-'};
      if(role==='L.1') return {kualitas:'ok',kesesuaian:'ok',penting:[],saran:'Setujui.'};
      if(role==='M.1') return {platform:'Instagram',caption_final:'cap',hashtag:['#pulau'],cover:'slide 1',saran_jadwal:'sore (asumsi)',catatan:[]};
      return {}; };
    const sample=async i=>({text:JSON.stringify(await gen(i))}); sample.json=async i=>gen(i); sample.limits=async()=>({images:true});
    window.claude={use:async n=>n==='sample'?sample:n==='downloads'?{save:async()=>{}}:null};
  });
  await p.goto('file://'+process.cwd()+'/prototypes/zuno-studio-v2.html'); await p.waitForTimeout(300);

  assert(await p.$eval('#akun',e=>e.value)==='personal','bawaan akun tujuan: Personal (Zulnan)');
  assert(/slogan/.test(await p.$eval('#akunInfo',e=>e.textContent)),'keterangan akun personal tampil');
  await p.click('#akunBaru'); await p.fill('#akunNama','Zulnan Niche'); await p.click('#akunSimpan');
  assert(await p.$eval('#akunForm',e=>!e.hidden)&&await p.$eval('#akun',e=>e.value)==='personal','nama akun niche yang memakai "Zulnan" ditolak');
  await p.fill('#akunNama','Pulau Netizen'); await p.fill('#akunNiche','seri animasi bertahan hidup di pulau'); await p.fill('#akunGaya','karakter sendiri, tanpa wajah manusia asli'); await p.click('#akunSimpan');
  const nv=await p.$eval('#akun',e=>e.value);
  assert(await p.$eval('#akunForm',e=>getComputedStyle(e).display==='none'),'form akun tertutup (tidak terlihat) setelah disimpan');
  assert(nv!=='personal'&&/Pulau Netizen/.test(await p.$eval('#akun',e=>e.selectedOptions[0].textContent)),'akun niche tersimpan dan langsung dipilih');
  assert(await p.$eval('#tv',e=>['A','B','C'].every(v=>e.querySelector('option[value="'+v+'"]').disabled)&&e.value==='')&&await p.$eval('#mode',e=>e.querySelector('option[value="tampil"]').disabled&&e.value==='tanpa'),'akun niche: tipe video A/B/C dan Mode Tampil dimatikan');
  await p.reload(); await p.waitForTimeout(300);
  assert(await p.$eval('#akun',e=>e.value)===nv,'akun niche dan pilihan terakhir tetap ada setelah halaman dimuat ulang');

  await p.fill('#cmd','hari pertama terdampar'); await p.fill('#src','catatan bertahan hidup https://contoh.test/pulau'); await p.click('#run');
  await p.waitForFunction(()=>document.querySelectorAll('.res .btn.ok').length===2&&!document.getElementById('run').disabled,null,{timeout:60000});
  for(const sel of ['#resc','#resv']){ if(sel==='#resv') await p.click('#tabv'); await p.click(sel+' .btn.ok >> text=Lanjut ke desain & editing'); await p.waitForFunction(()=>!document.getElementById('run').disabled,null,{timeout:60000}); }
  await p.waitForSelector('.banner:has-text("siap kamu tinjau")',{timeout:60000});
  await p.waitForFunction(()=>!document.getElementById('run').disabled,null,{timeout:60000});
  const ins=await p.evaluate(()=>window.__in);
  const roles=[...new Set(ins.map(x=>x.role))];
  assert(ins.length>8&&ins.every(x=>x.input.includes('AKUN TUJUAN: akun niche "Pulau Netizen"')),'semua prompt agen ('+roles.join(',')+') memuat aturan akun niche');
  const bocor=ins.filter(x=>/FAKTA ZULNAN|BRIEF DASAR|BOFU = BUKTI|Hai, kenalin|Gue Zulnan|nama di konten: Zulnan|6 web aktif|suara dan gaya Zulnan/.test(x.input)).map(x=>x.role);
  assert(bocor.length===0,'tidak ada bank fakta, slogan, atau brief pribadi Zulnan di prompt akun niche'+(bocor.length?' (bocor: '+bocor.join(',')+')':''));
  assert(ins.some(x=>/BRIEF AKUN NICHE: seri animasi bertahan hidup di pulau/.test(x.input)&&/karakter sendiri/.test(x.input)),'brief dan gaya akun niche masuk ke prompt');
  const st=await p.evaluate(()=>{const S=window.ZunoAkun.state();return {adegan:S.cards.filter(c=>c.format==='video').map(c=>c.konten.adegan.map(a=>a.babak+':'+a.vo).join('|')).join(''),md:S.cards.map(c=>c.md||'').join('\n'),gaya:JSON.stringify(S.cards.filter(c=>c.kartuGaya).map(c=>c.kartuGaya)),info:JSON.stringify(S.cards.filter(c=>c.fileInfo).map(c=>c.fileInfo)),ring:window.ZunoHasil.ringkas().konten}});
  assert(!/slogan|kenalin|Zulnan\./.test(st.adegan),'video akun niche tanpa adegan slogan');
  assert(/\| Akun \| Pulau Netizen \(niche: tanpa identitas Zulnan\)/.test(st.md),'paket konten mencatat akun niche');
  assert(/tanpa slogan \(akun niche Pulau Netizen\)/.test(st.gaya)&&/"slogan_setelah_hook":false/.test(st.info),'Kartu Gaya dan info file: tanpa slogan');
  assert(st.ring.akun==='Pulau Netizen'&&st.ring.akunJenis==='niche','ringkasan hasil (folder lokal/Chat) membawa akun niche');
  assert((await p.$$eval('.kc',e=>e.map(x=>x.innerText).join(' '))).includes('Pulau Netizen'),'kartu konten menampilkan nama akun');

  await p.selectOption('#akun','personal'); await p.evaluate(()=>{window.__in=[]}); await p.selectOption('#count','v'); await p.fill('#cmd','tes personal'); await p.click('#run');
  await p.waitForFunction(()=>document.querySelectorAll('.res .btn.ok').length>=1&&!document.getElementById('run').disabled,null,{timeout:60000});
  const ip=await p.evaluate(()=>window.__in);
  assert(ip.length>3&&ip.every(x=>!/AKUN TUJUAN/.test(x.input))&&ip.some(x=>/FAKTA ZULNAN/.test(x.input)),'akun personal: prompt tetap memakai bank fakta Zulnan, tanpa aturan niche');
  assert(await p.evaluate(()=>window.ZunoAkun.state().cards[0].konten.adegan.some(a=>a.babak==='slogan'&&/Gue Zulnan/.test(a.vo))),'akun personal: slogan tetap disisipkan setelah hook');
  assert(await p.$eval('#tv',e=>!e.querySelector('option[value="A"]').disabled),'akun personal: tipe video A/B/C aktif lagi');
  await p.click('#tabv').catch(()=>{});
  await p.screenshot({path:'/tmp/akun-workspace.png',clip:{x:0,y:0,width:1100,height:900}}).catch(()=>{});
  assert(errs.length===0,'tanpa error halaman'+(errs.length?': '+errs.join(' | '):''));
  await b.close(); console.log(process.exitCode?'HASIL: ADA YANG GAGAL':'HASIL: SEMUA LOLOS');
})();
