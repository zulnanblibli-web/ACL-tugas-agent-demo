const { chromium } = require('playwright');
// Tes alur Build App (Divisi Engineering) dengan Claude tiruan. Alur sejak 2026-11-06: otomatis ala superpowers
// (kerjakan -> tinjau Penguji -> perbaiki -> lanjut), tanpa gerbang persetujuan Zulnan; keputusan dicatat.
// Argumen: --klien --buruk --potong --gagal --putus --putus-parah --desref --prd --besar --kosong
// --besar: 20 fitur -> T.3 menulis bertahap per bagian; revisi kode besar lewat edit cari-ganti.
// --kosong: satu file pulang empty_completion -> pindah ke mode bertahap; bagian fitur yang kosong dipecah dua.
const KLIEN = process.argv.includes('--klien'); const BURUK = process.argv.includes('--buruk'); const POTONG = process.argv.includes('--potong'); const GAGAL = process.argv.includes('--gagal'); const PUTUS = process.argv.includes('--putus'); const PARAH = process.argv.includes('--putus-parah'); const DESREF = process.argv.includes('--desref'); const BESAR = process.argv.includes('--besar'); const KOSONG = process.argv.includes('--kosong');
(async()=>{
  const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1100,height:900}});
  const errs=[]; p.on('pageerror',e=>errs.push('PAGEERR '+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
  await p.addInitScript(([BURUK,POTONG,GAGAL,PUTUS,PARAH,DESREF,BESAR,KOSONG])=>{
    window.__calls=[];
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    const APP=(kredit,contoh)=>BURUK?'<html><body><script>var pw="admin2026"; // TODO login\nundefinedFn();<\/script><h1>App</h1></body></html>':'<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="'+kredit+'"><title>Absensi</title></head><body><script>const IS_PREVIEW = true; const TAMPILKAN_CONTOH_LOGIN = '+contoh+';async function h(p){const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(p));return [...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,"0")).join("")}<\/script><h1>Login</h1><div id="contoh">Contoh akses</div><nav>Dashboard · Absensi · Reset Akses</nav><footer>'+kredit+'</footer></body></html>';
    const gen=async(input)=>{
      await sleep(20);
      const role=(input.match(/PERAN ANDA: (\S+)/)||[])[1]; window.__calls.push({role,rev:/REVISI/.test(input),prd:/PRD DARI ZULNAN[\s\S]*Fitur ketujuh dari PRD/.test(input)});
      if(role==='T.1') return {nama_aplikasi:'Absensi Siswa',masalah:'Guru rekap absensi manual di kertas',fitur:BESAR?['Login','Input absensi','Rekap bulanan','Ekspor Excel','Data siswa','Fitur keenam','Fitur ketujuh dari PRD'].concat(Array.from({length:13},(_,k)=>'Fitur tambahan '+(k+8))):['Login','Input absensi','Rekap bulanan','Ekspor Excel','Data siswa','Fitur keenam','Fitur ketujuh dari PRD'],nanti:['Notifikasi orang tua'],out_of_scope:['Multi-bahasa','Pembayaran','Aplikasi Android'],definisi_selesai:['Guru bisa input absensi','Rekap per bulan tampil'],mesin:'Apps Script + Google Sheets',alasan_mesin:'gratis dan data terlihat di Sheets',biaya:'gratis',role:[{nama:'Admin',hak:'semua'}],menu:['Dashboard','Absensi','Rekap','Reset Akses'],data:[{nama:'Siswa',kolom:['id','nama','kelas']}],ai:'tidak dipakai',kredit:'Creative @nexamind.ai',asumsi:['satu sekolah'],pertanyaan:/REVISI/.test(input)?[]:['Berapa kelas?']};
      if(role==='T.2') return {acuan_referensi:/ADA REFERENSI DESAIN/.test(input)?'Kartu putih membulat, sidebar gelap, aksen hijau dari referensi':'',halaman:[{nama:'Login',isi:['form','Contoh akses','kredit'],hp:'satu kolom',desktop:'tengah'}],gaya:{primer:'#1f3a5f',latar:'#ffffff',teks:'#15202b',aksen:'#f2a900',huruf:'Inter',nuansa:'bersih'},komponen:['tombol','kartu'],animasi:[{elemen:'tombol simpan',tujuan:'respons aksi',durasi_ms:250},{elemen:'logo',tujuan:'hiasan',durasi_ms:900}],posisi_kredit:'footer',catatan:[]};
      if(role==='T.3'&&/daftar edit cari-ganti/.test(input)){ window.__edit=(window.__edit||0)+1; window.__editLihatKode=/INDEX\.HTML SAAT INI:[\s\S]*<\/html>/.test(input); return {edit:[{cari:'<nav>Dashboard · Absensi</nav>',ganti:'<nav>Dashboard · Absensi · Reset Akses</nav>'},{cari:'potongan yang tidak ada',ganti:'x'}],catatan:'tambah menu Reset Akses'}; }
      if(role==='T.4'&&/Tinjau RUANG LINGKUP/.test(input)){ window.__tinjau1=(window.__tinjau1||0)+1; window.__q1=/PERTANYAAN TERBUKA ARSITEK[\s\S]*Berapa kelas/.test(input)||window.__q1; return window.__tinjau1===1?{sesuai:false,kurang:['Fitur ekspor PDF dari permintaan belum ada'],keputusan:[{apa:'Jumlah kelas dibuat bebas (Admin menambah kelas sendiri)',alasan:'permintaan tidak menyebut jumlah kelas',risiko_bila_salah:'menu kelas sedikit lebih banyak'}]}:{sesuai:true,kurang:[],keputusan:[]}; }
      if(role==='T.4'&&/Tinjau DESAIN/.test(input)) return {sesuai:true,kurang:[],keputusan:[{apa:'Navigasi bawah di HP',alasan:'standar responsif',risiko_bila_salah:'-'}]};
      if(role==='T.4') return {butir:[{butir:'Guru bisa input absensi',status:'terlihat di kode',catatan:'form absensi'},{butir:'Rekap per bulan tampil',status:'perlu uji manual',catatan:'butuh data asli'}],risiko:['kuota Apps Script'],ringkas:'Kode lengkap, dua butir perlu dicoba di Sheets asli.'};
      return {};
    };
    const txt=async(input)=>{ await sleep(20); const role=(input.match(/PERAN ANDA: (\S+)/)||[])[1]; window.__calls.push({role,file:/index\.html lengkap/.test(input)?'html':'backend',rev:/REVISI/.test(input)});
      const kredit=(input.match(/Kredit (?:wajib|klien): "([^"]+)"/)||[])[1]||'?'; const contoh=(input.match(/TAMPILKAN_CONTOH_LOGIN: (\w+)/)||[])[1];
      window.__akun=(input.match(/AKUN AWAL \(acak, dibuat sistem\): ([^\n]+)/)||[])[1];
      return /index\.html lengkap/.test(input)?'```html\n'+APP(kredit,contoh)+'\n```':'function doGet(){}\nfunction setupDatabase(){ /* Utilities.computeDigest SHA_256 */ }'; };
    window.__opts=[];
    const sample=async(i,o)=>{
      const first=Array.isArray(i)?i[0].content:i; window.__opts.push({effort:o&&o.effort,lanjut:Array.isArray(i),gambar:o&&o.images?o.images.length:0,peran:((Array.isArray(i)?i[0].content:i).match(/PERAN ANDA: (\S+)/)||[])[1],acuan:/ADA REFERENSI DESAIN UI\/UX/.test(Array.isArray(i)?i[0].content:i),ref:/REFERENSI DESAIN UI\/UX DARI ZULNAN/.test(Array.isArray(i)?i[0].content:i)});
      if(!/Balas HANYA isi file/.test(first)) return {text:JSON.stringify(await gen(i))};
      if(Array.isArray(i)&&(PUTUS||PARAH)&&/index\.html lengkap/.test(first)){ window.__lanjutHtml=(window.__lanjutHtml||0)+1; if(PARAH?!window.__pulih:window.__lanjutHtml<=2){ await sleep(10); throw {code:'upstream_error',message:'putus lagi'}; } }
      if(Array.isArray(i)){ const full=window.__full[first]; const sofar=i[1].content; if(full.slice(0,sofar.length)!==sofar) window.__salahSambung=true; window.__calls.push({role:'T.3',file:'lanjutan'}); if(o&&o.onText)o.onText({text:full.slice(sofar.length),delta:full.slice(sofar.length)}); return {text:full.slice(sofar.length),truncated:false}; }
      if(GAGAL&&(window.__gagal=(window.__gagal||0)+1)<=6) throw {code:'upstream_error',message:'koneksi putus'};
      const sec=first.match(/SEKARANG tulis HANYA BAGIAN (\d+)\/(\d+) \(([^)]+)\)/);
      if(KOSONG&&!sec&&/index\.html lengkap/.test(first)&&!window.__kosong1){ window.__kosong1=1; throw {code:'empty_completion',message:'Claude produced no text'}; }
      if(sec){ const nama=sec[3], fit=((first.match(/SEKARANG[^\n]*untuk fitur: ([^.]*)\./)||[])[1]||'').split('; ').filter(Boolean); const server=/^Fitur server|^Inti server/.test(nama);
        if(KOSONG&&nama==='Fitur'&&fit.length===6&&!window.__kosong2){ window.__kosong2=1; throw {code:'empty_completion',message:'Claude produced no text'}; }
        window.__bagian=(window.__bagian||[]).concat([(server?'be:':'html:')+nama+(fit.length?'('+fit.length+')':'')+(first.includes('KODE YANG SUDAH DITULIS')?'+konteks':'')]);
        const kredit=(first.match(/Kredit (?:wajib|klien): "([^"]+)"/)||[])[1]||'?'; const contoh=(first.match(/TAMPILKAN_CONTOH_LOGIN: (\w+)/)||[])[1];
        const fn=fit.map((f,k)=>'function fitur_'+f.replace(/\W+/g,'_')+'(){}').join('\n');
        const out=nama==='Kepala'?'<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="'+kredit+'"><script>const IS_PREVIEW = true; const TAMPILKAN_CONTOH_LOGIN = '+contoh+';<\/script><title>Absensi</title><style>body{margin:0}'+(BESAR?'/*'+'x'.repeat(41000)+'*/':'')+'</style></head>'
          :nama==='Markup'?'<body><h1>Login</h1><div id="contoh">Contoh akses</div><nav>Dashboard · Absensi'+(BESAR?'':' · Reset Akses')+'</nav><footer>'+kredit+'</footer>'
          :nama==='Inti JS'?'<script>async function h(p){const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(p));return [...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,"0")).join("")}'
          :nama==='Penutup'?'h("x");\n<\/script></body></html>'
          :nama==='Inti server'?'function doGet(){}\nfunction setupDatabase(){ /* Utilities.computeDigest SHA_256 */ }'
          :fn;
        if(o&&o.onText)o.onText({text:out,delta:out}); return {text:out,truncated:false}; }
      const full=await txt(i); window.__full=window.__full||{}; window.__full[first]=full;
      if((PUTUS||PARAH)&&/index\.html lengkap/.test(first)){ const part=full.slice(0,Math.floor(full.length/3)); if(o&&o.onText)o.onText({text:part,delta:part}); throw {code:'upstream_error',message:'aliran putus tanpa teks'}; }
      if(POTONG){ const half=full.slice(0,Math.floor(full.length/2)); if(/index\.html lengkap/.test(first)) return {text:half,truncated:true}; throw {code:'upstream_error',message:'putus',text:half}; }
      if(o&&o.onText)o.onText({text:full,delta:full}); return {text:full,truncated:false};
    };
    sample.json=async(i)=>gen(i);
    if(DESREF) sample.limits=async()=>({images:true});
    window.claude={use:async n=>n==='sample'?sample:n==='downloads'?{save:async(o)=>{window.__saved=(window.__saved||[]).concat([o.filename+':'+(o.data&&o.data.size)]);if(/_rilis\.zip$/.test(o.filename)&&o.data)window.__zipTxt=await o.data.text()}}:null};
  },[BURUK,POTONG,GAGAL,PUTUS,PARAH,DESREF,BESAR,KOSONG]);
  await p.goto('file://'+process.cwd()+'/prototypes/zuno-studio-v2.html'); await p.waitForTimeout(300);
  console.log('konten terlihat awal:', await p.isVisible('#wsKonten'), '| build tersembunyi:', !(await p.isVisible('#wsBuild')));
  await p.click('#wsB'); console.log('setelah klik Build: konten tersembunyi', !(await p.isVisible('#wsKonten')), '| build terlihat', await p.isVisible('#wsBuild'));
  const PRD = process.argv.includes('--prd');
  if(PRD){ await p.setInputFiles('#bprd',{name:'prd-absensi.md',mimeType:'text/markdown',buffer:Buffer.from('# PRD Absensi\n## Fitur\n- Login\n- Fitur ketujuh dari PRD\n')}); await p.waitForSelector('#bprdinfo >> text=PRD dimuat'); console.log('PRD dimuat:', await p.$eval('#bprdinfo',e=>e.innerText)); }
  else await p.fill('#breq','aplikasi absensi siswa untuk guru');
  if(DESREF){ const zl=require('zlib'); const crc=b=>{let c,t=[];for(let n=0;n<256;n++){c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;t[n]=c>>>0}c=0xffffffff;for(const x of b)c=t[(c^x)&255]^(c>>>8);return (c^0xffffffff)>>>0};
    const chunk=(ty,d)=>{const l=Buffer.alloc(4);l.writeUInt32BE(d.length);const td=Buffer.concat([Buffer.from(ty),d]);const c=Buffer.alloc(4);c.writeUInt32BE(crc(td));return Buffer.concat([l,td,c])};
    const W=8,raw=Buffer.alloc((W*3+1)*W);for(let y=0;y<W;y++)for(let x=0;x<W;x++){const o=y*(W*3+1)+1+x*3;raw[o]=20;raw[o+1]=140;raw[o+2]=90}
    const ih=Buffer.alloc(13);ih.writeUInt32BE(W,0);ih.writeUInt32BE(W,4);ih[8]=8;ih[9]=2;
    const png=Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ih),chunk('IDAT',zl.deflateSync(raw)),chunk('IEND',Buffer.alloc(0))]);
    await p.setInputFiles('#bdesref',[{name:'dashboard-suka.png',mimeType:'image/png',buffer:png},{name:'kartu.png',mimeType:'image/png',buffer:png},{name:'bukan-gambar.txt',mimeType:'text/plain',buffer:Buffer.from('x')}]);
    await p.fill('#bdesnote','tata letak dashboard dan gaya kartu');
    console.log('referensi desain tampil:', await p.$eval('#bdesinfo',e=>e.innerText.trim()), '| thumbnail:', await p.$$eval('#bdesinfo img',e=>e.length), '| file non-gambar ditolak:', (await p.$eval('#berr',e=>e.innerText)).includes('dilewati')); }
  if(KLIEN){ await p.selectOption('#bjenis','klien'); await p.fill('#bklien','SD Contoh'); await p.fill('#bkredit','Dibuat untuk SD Contoh'); }
  await p.click('#brun');
  const assert=(ok,m)=>{if(!ok){console.error('GAGAL: '+m);process.exitCode=1}else console.log('LOLOS: '+m)};
  if(GAGAL){ await p.waitForSelector('#bres button:has-text("Coba lagi")',{timeout:30000}); console.log('error tampil:', (await p.$eval('#berr',e=>e.innerText)).slice(0,120), '| log tampil:', await p.isVisible('#bdlog'));
    await p.click('#bdlog'); await p.click('#bres button:has-text("Coba lagi")'); }
  if(PARAH){ await p.waitForSelector('#bres button:has-text("Coba lagi")',{timeout:60000}); console.log('kode terpotong, pesan:', (await p.$eval('#berr',e=>e.innerText)).slice(0,140),'| panggilan lanjutan yang gagal:', await p.evaluate(()=>window.__lanjutHtml));
    await p.evaluate(()=>{window.__pulih=true}); await p.click('#bres button:has-text("Coba lagi")'); }
  await p.waitForSelector('#bres >> text=Unduh paket rilis (.zip)',{timeout:60000});
  const calls=await p.evaluate(()=>window.__calls);
  assert(!(await p.$('#bres >> text=Setujui ruang lingkup'))&&!(await p.$('#bres >> text=Setujui tampilan'))&&!(await p.$('#bres >> text=Lanjut rilis')),'tanpa tombol gerbang persetujuan: alur jalan sendiri sampai paket rilis');
  assert(await p.$eval('#bres .res',(e,n)=>e.innerText.includes('Fitur ('+n+')')&&e.innerText.includes('Fitur ketujuh dari PRD')&&!/MVP/.test(e.innerText),BESAR?20:7),'semua '+(BESAR?20:7)+' fitur tetap (tanpa batas MVP)');
  if(PRD) assert(calls.filter(c=>c.role==='T.1')[0].prd,'PRD ikut ke Arsitek');
  assert(calls.filter(c=>c.role==='T.1').length===2&&calls.filter(c=>c.role==='T.1')[1].rev,'tinjauan ruang lingkup menemukan kekurangan -> Arsitek memperbaiki sendiri (2 panggilan T.1)');
  assert(await p.evaluate(()=>window.__q1),'pertanyaan terbuka Arsitek diserahkan ke Penguji untuk diputuskan');
  assert(await p.$eval('#bres',e=>/Catatan keputusan[\s\S]*Jumlah kelas dibuat bebas[\s\S]*Navigasi bawah di HP/.test(e.innerText)),'catatan keputusan tampil (ruang lingkup + desain)');
  assert(await p.$eval('#bres',e=>/Lolos tinjauan ruang lingkup · 1 perbaikan/.test(e.innerText)&&/Lolos tinjauan desain/.test(e.innerText)),'label tinjauan per tahap tampil');
  if(DESREF) assert(await p.$eval('#bres',e=>/Acuan referensi desain[\s\S]*Kartu putih membulat/.test(e.innerText)),'tampilan menampilkan acuan referensi');
  assert(await p.$eval('#bres',e=>!e.innerText.includes('logo (hiasan')),'animasi tanpa tujuan dibuang');
  const rows=await p.$$eval('#bres table.uji:first-of-type tr',r=>r.slice(1).map(x=>x.children[0].innerText+'='+x.children[1].innerText));
  if(BURUK){ const n=calls.filter(c=>c.role==='T.3'&&c.file==='html').length; assert(n===3&&calls.filter(c=>c.role==='T.3'&&c.file==='html'&&c.rev).length===2,'kode buruk: 2 putaran perbaikan otomatis lalu berhenti ('+n+' panggilan html)'); assert(await p.$eval('#bres',e=>/temuan dicatat/.test(e.innerText)&&/Tetap lanjut ke paket rilis/.test(e.innerText)),'sisa temuan dicatat sebagai keputusan + risiko'); }
  else if(!BESAR) assert(calls.filter(c=>c.role==='T.3'&&c.rev).length===0,'kode bersih: tidak ada putaran perbaikan');
  if(BESAR||KOSONG){ const bag=await p.evaluate(()=>window.__bagian||[]); console.log('bagian ditulis:', bag.join(', '));
    assert(calls.filter(c=>c.role==='T.3'&&c.file==='html').length===0,'index.html tidak diminta sebagai satu file utuh lagi'+(KOSONG?' setelah jawaban kosong':''));
    assert(bag[0]==='html:Kepala'&&bag.includes('html:Markup+konteks')&&bag.includes('html:Inti JS+konteks')&&bag[bag.filter(x=>x.startsWith('html:')).length-1]==='html:Penutup+konteks','bagian html berurutan: Kepala, Markup, Inti JS, Fitur, Penutup; tiap bagian membawa kode sebelumnya');
    const nf=bag.filter(x=>/^html:Fitur/.test(x)).reduce((a,x)=>a+ +(x.match(/\((\d+)\)/)||[0,0])[1],0); assert(nf===(BESAR?20:7),'semua fitur ditulis di bagian JS ('+nf+')');
    assert(rows.some(r=>r==='File HTML lengkap (tidak terpotong)=Lolos'),'hasil sambungan bagian = file HTML lengkap'); }
  if(KOSONG){ const bag=await p.evaluate(()=>window.__bagian||[]); assert(bag.filter(x=>/^html:Fitur\(3\)/.test(x)).length===2,'bagian fitur yang pulang kosong dipecah dua (6 -> 3 + 3)'); }
  if(BESAR){ const bag=await p.evaluate(()=>window.__bagian||[]); assert(bag.filter(x=>x.startsWith('be:')).length===4&&bag[bag.indexOf('be:Inti server')]==='be:Inti server','Code.gs untuk aplikasi besar juga bertahap (inti + 3 bagian fitur server)');
    assert(await p.evaluate(()=>window.__edit)===1&&await p.evaluate(()=>window.__editLihatKode),'revisi index.html besar lewat 1 panggilan edit cari-ganti (melihat kode lengkap)');
    assert(rows.some(r=>r==='Menu Reset Akses ada=Lolos'),'edit diterapkan: menu Reset Akses masuk, cek otomatis lolos'); }
  console.log('cek otomatis:', rows.join(' | '));
  console.log('akun acak (bukan admin2026):', await p.evaluate(()=>window.__akun));
  await p.click('#bres >> text=Pratinjau HP'); await p.waitForSelector('iframe.bframe.hp');
  await p.click('#bres >> text=Unduh index.html'); await p.click('#bres >> text=Unduh PANDUAN.md');
  await p.click('#bres button:has-text("Unduh paket rilis (.zip)")'); await p.waitForFunction(()=>window.__zipTxt,null,{timeout:10000});
  { const z=await p.evaluate(()=>window.__zipTxt); assert(/tanpa gerbang persetujuan di tengah/.test(z)&&/Catatan keputusan/.test(z)&&!/gerbang 3/.test(z),'paket rilis: instruksi tanpa gerbang 3, panduan memuat catatan keputusan'); }
  { const z=await p.evaluate(()=>window.__zipTxt);
    assert(/proyek\/absensi_siswa\/rilis\.mjs/.test(z)&&/Zuno rilis: membawa paket rilis Build App sampai link live/.test(z)&&/export async function rilis/.test(z),'paket rilis membawa rilis.mjs (skrip rilis laptop)');
    assert(/proyek\/absensi_siswa\/rilis\.json/.test(z)&&/"mesin": "Apps Script \+ Google Sheets"/.test(z)&&/"izinGoogleOtomatis": false/.test(z),'rilis.json: mesin pilihan + izin Google tidak otomatis secara bawaan');
    assert(/proyek\/absensi_siswa\/CLAUDE\.md/.test(z)&&/agent-desktop skills get desktop/.test(z)&&/tidak mengetik atau menyimpan password/.test(z),'CLAUDE.md operator: alur rilis + larangan agent-desktop');
    assert(/proyek\/absensi_siswa\/akun-awal\.json/.test(z)&&/proyek\/absensi_siswa\/jalankan-rilis\.bat/.test(z)&&/Claude Desktop \+ agent-desktop/.test(z),'akun-awal.json, jalankan-rilis.bat, instruksi Claude Desktop + agent-desktop'); }
  assert(/Siap dirilis/.test(await p.$eval('#bcard .st',e=>e.innerText)),'status akhir Siap dirilis');
  console.log('status:', await p.$eval('#bcard .st',e=>e.innerText));
  console.log('tracks:', await p.$$eval('#btracks .track',e=>e.map(x=>x.querySelector('.tname').textContent+'='+x.dataset.s).join(', ')));
  console.log('urutan peran:', (await p.evaluate(()=>window.__calls)).map(c=>c.role+(c.file?':'+c.file:'')+(c.rev?'(rev)':'')).join(','));
  console.log('unduhan:', await p.evaluate(()=>window.__saved));
  console.log('lanjutan dipakai:', (await p.evaluate(()=>window.__opts)).filter(o=>o.lanjut).length, '| effort T.3:', [...new Set((await p.evaluate(()=>window.__opts)).filter(o=>o.effort).map(o=>o.effort))].join(','));
  if(PUTUS||PARAH) console.log('sambungan kode tanpa celah/ulang:', !(await p.evaluate(()=>window.__salahSambung)), '| panggilan html awal:', (await p.evaluate(()=>window.__calls)).filter(c=>c.file==='html').length);
  if(DESREF){ const o=await p.evaluate(()=>window.__opts); const t2=o.filter(x=>x.peran==='T.2'); const t3=o.filter(x=>x.peran==='T.3'&&!x.lanjut);
    console.log('T.2 terima gambar:', t2.map(x=>x.gambar).join(','), '| T.2 diminta mengacu:', t2.every(x=>x.acuan), '| T.3 tahu referensi:', t3.length>0&&t3.every(x=>x.ref));
    const z=await p.evaluate(()=>window.__zipTxt||''); console.log('zip berisi referensi:', /referensi-desain\/ref-1\.jpg/.test(z)&&/referensi-desain\/ref-2\.jpg/.test(z), '| instruksi menyebut referensi:', /referensi-desain\//.test(z)&&/acuan tampilan dari Zulnan/.test(z)); }
  console.log('tombol log tampil:', await p.isVisible('#bdlog'), '| keterangan standby dihapus:', !(await p.$eval('#wsBuild',e=>e.innerText.includes('standby'))));
  // alur konten tidak tersentuh
  await p.click('#wsK'); console.log('kembali ke konten, kartu konten kosong:', await p.$$eval('.kc',e=>e.filter(x=>x.closest('#wsKonten')).length)===0);
  await p.screenshot({path:'/tmp/v2-build.png',fullPage:true});
  console.log('ERRORS',errs); assert(!errs.filter(e=>!(BURUK&&/undefinedFn/.test(e))).length,'tanpa error halaman (error dari aplikasi buruk di pratinjau sandbox diabaikan)'); await b.close();
})().catch(e=>{console.error('FAIL',e);process.exit(1)});
