const { chromium } = require('playwright');
// Tes alur Build App (Divisi Engineering) dengan Claude tiruan. Argumen: --klien untuk proyek klien.
const KLIEN = process.argv.includes('--klien'); const BURUK = process.argv.includes('--buruk'); const POTONG = process.argv.includes('--potong'); const GAGAL = process.argv.includes('--gagal');
(async()=>{
  const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1100,height:900}});
  const errs=[]; p.on('pageerror',e=>errs.push('PAGEERR '+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
  await p.addInitScript(([BURUK,POTONG,GAGAL])=>{
    window.__calls=[];
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    const APP=(kredit,contoh)=>BURUK?'<html><body><script>var pw="admin2026"; // TODO login\nundefinedFn();<\/script><h1>App</h1>':'<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="'+kredit+'"><title>Absensi</title></head><body><script>const IS_PREVIEW = true; const TAMPILKAN_CONTOH_LOGIN = '+contoh+';async function h(p){const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(p));return [...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,"0")).join("")}<\/script><h1>Login</h1><div id="contoh">Contoh akses</div><nav>Dashboard · Absensi · Reset Akses</nav><footer>'+kredit+'</footer></body></html>';
    const gen=async(input)=>{
      await sleep(20);
      const role=(input.match(/PERAN ANDA: (\S+)/)||[])[1]; window.__calls.push({role,rev:/REVISI/.test(input),prd:/PRD DARI ZULNAN[\s\S]*Fitur ketujuh dari PRD/.test(input)});
      if(role==='T.1') return {nama_aplikasi:'Absensi Siswa',masalah:'Guru rekap absensi manual di kertas',fitur:['Login','Input absensi','Rekap bulanan','Ekspor Excel','Data siswa','Fitur keenam','Fitur ketujuh dari PRD'],nanti:['Notifikasi orang tua'],out_of_scope:['Multi-bahasa','Pembayaran','Aplikasi Android'],definisi_selesai:['Guru bisa input absensi','Rekap per bulan tampil'],mesin:'Apps Script + Google Sheets',alasan_mesin:'gratis dan data terlihat di Sheets',biaya:'gratis',role:[{nama:'Admin',hak:'semua'}],menu:['Dashboard','Absensi','Rekap','Reset Akses'],data:[{nama:'Siswa',kolom:['id','nama','kelas']}],ai:'tidak dipakai',kredit:'Creative @nexamind.ai',asumsi:['satu sekolah'],pertanyaan:/REVISI/.test(input)?[]:['Berapa kelas?']};
      if(role==='T.2') return {halaman:[{nama:'Login',isi:['form','Contoh akses','kredit'],hp:'satu kolom',desktop:'tengah'}],gaya:{primer:'#1f3a5f',latar:'#ffffff',teks:'#15202b',aksen:'#f2a900',huruf:'Inter',nuansa:'bersih'},komponen:['tombol','kartu'],animasi:[{elemen:'tombol simpan',tujuan:'respons aksi',durasi_ms:250},{elemen:'logo',tujuan:'hiasan',durasi_ms:900}],posisi_kredit:'footer',catatan:[]};
      if(role==='T.4') return {butir:[{butir:'Guru bisa input absensi',status:'terlihat di kode',catatan:'form absensi'},{butir:'Rekap per bulan tampil',status:'perlu uji manual',catatan:'butuh data asli'}],risiko:['kuota Apps Script'],ringkas:'Kode lengkap, dua butir perlu dicoba di Sheets asli.'};
      return {};
    };
    const txt=async(input)=>{ await sleep(20); const role=(input.match(/PERAN ANDA: (\S+)/)||[])[1]; window.__calls.push({role,file:/index\.html lengkap/.test(input)?'html':'backend',rev:/REVISI/.test(input)});
      const kredit=(input.match(/Kredit (?:wajib|klien): "([^"]+)"/)||[])[1]||'?'; const contoh=(input.match(/TAMPILKAN_CONTOH_LOGIN: (\w+)/)||[])[1];
      window.__akun=(input.match(/AKUN AWAL \(acak, dibuat sistem\): ([^\n]+)/)||[])[1];
      return /index\.html lengkap/.test(input)?'```html\n'+APP(kredit,contoh)+'\n```':'function doGet(){}\nfunction setupDatabase(){ /* Utilities.computeDigest SHA_256 */ }'; };
    window.__opts=[];
    const sample=async(i,o)=>{
      const first=Array.isArray(i)?i[0].content:i; window.__opts.push({effort:o&&o.effort,lanjut:Array.isArray(i)});
      if(!/Balas HANYA isi file/.test(first)) return {text:JSON.stringify(await gen(i))};
      if(Array.isArray(i)){ const full=window.__full[first]; const sofar=i[1].content; window.__calls.push({role:'T.3',file:'lanjutan'}); if(o&&o.onText)o.onText({text:full.slice(sofar.length),delta:full.slice(sofar.length)}); return {text:full.slice(sofar.length),truncated:false}; }
      if(GAGAL&&(window.__gagal=(window.__gagal||0)+1)<=2) throw {code:'upstream_error',message:'koneksi putus'};
      const full=await txt(i); window.__full=window.__full||{}; window.__full[first]=full;
      if(POTONG){ const half=full.slice(0,Math.floor(full.length/2)); if(/index\.html lengkap/.test(first)) return {text:half,truncated:true}; throw {code:'upstream_error',message:'putus',text:half}; }
      if(o&&o.onText)o.onText({text:full,delta:full}); return {text:full,truncated:false};
    };
    sample.json=async(i)=>gen(i);
    window.claude={use:async n=>n==='sample'?sample:n==='downloads'?{save:async(o)=>{window.__saved=(window.__saved||[]).concat([o.filename+':'+(o.data&&o.data.size)])}}:null};
  },[BURUK,POTONG,GAGAL]);
  await p.goto('file://'+process.cwd()+'/prototypes/zuno-studio-v2.html'); await p.waitForTimeout(300);
  console.log('konten terlihat awal:', await p.isVisible('#wsKonten'), '| build tersembunyi:', !(await p.isVisible('#wsBuild')));
  await p.click('#wsB'); console.log('setelah klik Build: konten tersembunyi', !(await p.isVisible('#wsKonten')), '| build terlihat', await p.isVisible('#wsBuild'));
  const PRD = process.argv.includes('--prd');
  if(PRD){ await p.setInputFiles('#bprd',{name:'prd-absensi.md',mimeType:'text/markdown',buffer:Buffer.from('# PRD Absensi\n## Fitur\n- Login\n- Fitur ketujuh dari PRD\n')}); await p.waitForSelector('#bprdinfo >> text=PRD dimuat'); console.log('PRD dimuat:', await p.$eval('#bprdinfo',e=>e.innerText)); }
  else await p.fill('#breq','aplikasi absensi siswa untuk guru');
  if(KLIEN){ await p.selectOption('#bjenis','klien'); await p.fill('#bklien','SD Contoh'); await p.fill('#bkredit','Dibuat untuk SD Contoh'); }
  await p.click('#brun');
  await p.waitForSelector('#bres .res >> text=Setujui ruang lingkup',{timeout:15000});
  console.log('gerbang 1 muncul; semua 7 fitur tetap (tanpa batas MVP):', await p.$eval('#bres .res',e=>e.innerText.includes('Fitur (7)')&&e.innerText.includes('Fitur ketujuh dari PRD')&&!/MVP/.test(e.innerText)), '| PRD ikut ke Arsitek:', PRD?(await p.evaluate(()=>window.__calls)).filter(c=>c.role==='T.1')[0].prd:'(tanpa PRD)', '| tombol desain belum ada:', !(await p.$('text=Setujui tampilan')));
  // revisi ruang lingkup
  await p.fill('#bres input[aria-label="Catatan revisi gerbang 1"]','kelasnya 3'); await p.click('#bres button:has-text("Revisi bagian ini")');
  await p.waitForFunction(()=>window.__calls.filter(c=>c.role==='T.1').length===2&&document.getElementById('bstop').disabled,null,{timeout:15000}); console.log('revisi T.1 membawa catatan:', (await p.evaluate(()=>window.__calls)).filter(c=>c.role==='T.1')[1].rev);
  await p.waitForSelector('#bres .res >> text=Setujui ruang lingkup');
  await p.click('#bres button:has-text("Setujui ruang lingkup")');
  await p.waitForSelector('text=Setujui tampilan',{timeout:15000});
  console.log('animasi tanpa tujuan dibuang:', await p.$eval('#bres',e=>!e.innerText.includes('logo (hiasan')));
  await p.click('#bres button:has-text("Setujui tampilan")');
  if(GAGAL){ await p.waitForSelector('#bres button:has-text("Coba lagi")',{timeout:30000}); console.log('error tampil:', (await p.$eval('#berr',e=>e.innerText)).slice(0,120), '| log tampil:', await p.isVisible('#bdlog'));
    await p.click('#bdlog'); await p.click('#bres button:has-text("Coba lagi")'); }
  await p.waitForSelector('text=Lanjut rilis',{timeout:30000});
  const rows=await p.$$eval('#bres table.uji:first-of-type tr',r=>r.slice(1).map(x=>x.children[0].innerText+'='+x.children[1].innerText));
  console.log('cek otomatis:', rows.join(' | '));
  console.log('akun acak (bukan admin2026):', await p.evaluate(()=>window.__akun));
  await p.click('#bres >> text=Pratinjau HP'); await p.waitForSelector('iframe.bframe.hp');
  await p.click('#bres >> text=Unduh index.html'); await p.click('#bres >> text=Unduh PANDUAN.md');
  await p.click('#bres button:has-text("Lanjut rilis")');
  await p.waitForSelector('text=gerbang 3 menunggu link live');
  console.log('status:', await p.$eval('#bcard .st',e=>e.innerText));
  console.log('tracks:', await p.$$eval('#btracks .track',e=>e.map(x=>x.querySelector('.tname').textContent+'='+x.dataset.s).join(', ')));
  console.log('urutan peran:', (await p.evaluate(()=>window.__calls)).map(c=>c.role+(c.file?':'+c.file:'')+(c.rev?'(rev)':'')).join(','));
  console.log('unduhan:', await p.evaluate(()=>window.__saved));
  console.log('lanjutan dipakai:', (await p.evaluate(()=>window.__opts)).filter(o=>o.lanjut).length, '| effort T.3:', [...new Set((await p.evaluate(()=>window.__opts)).filter(o=>o.effort).map(o=>o.effort))].join(','));
  console.log('tombol log tampil:', await p.isVisible('#bdlog'), '| keterangan standby dihapus:', !(await p.$eval('#wsBuild',e=>e.innerText.includes('standby'))));
  // alur konten tidak tersentuh
  await p.click('#wsK'); console.log('kembali ke konten, kartu konten kosong:', await p.$$eval('.kc',e=>e.filter(x=>x.closest('#wsKonten')).length)===0);
  await p.screenshot({path:'/tmp/v2-build.png',fullPage:true});
  console.log('ERRORS',errs); await b.close();
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
