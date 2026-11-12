// Arah hadap agen ke monitornya, layar monitor menyala/meredup ikut kerja agen, dan sudut santai Zulnan di lantai 3.
// Butuh server statis di 127.0.0.1:4173 (npm run serve:office).
const {chromium}=require('playwright');const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader']});try{
 const page=await browser.newPage({viewport:{width:1280,height:800}});const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await page.goto('http://127.0.0.1:4173/kantor.html');await page.waitForFunction(()=>window.zunoOffice?.state.loaded===18,null,{timeout:120000});await page.selectOption('#quality','low');
 // 1. Kursi dan arah hadap: tiap agen meja menghadap monitor di depannya (monitor 1,06 m di depan kursi, di z meja ±0,2).
 const seats=await page.evaluate(async()=>(await import('/office/data.js')).workSeats());
 const desks=Object.entries(seats).filter(([,s])=>s.desk);assert.equal(desks.length,15,'15 agen punya meja kerja');
 for(const [id,s] of desks){const mz=s.pos[2]+Math.cos(s.heading)*1.06;assert.ok([-.2,.2,4.6,5.0].some(z=>Math.abs(z-mz)<.02),`${id} menghadap monitornya (z monitor ${mz.toFixed(2)})`);}
 assert.equal(seats['M.1'].heading,0,'Maya (sisi belakang meja) menghadap +z');assert.equal(seats['E.3'].heading,0,'Fira (sisi belakang meja) menghadap +z');
 const awal=await page.evaluate(()=>zunoOffice.demo.snapshot());for(const a of awal)if(seats[a.id].desk)assert.equal(a.heading,seats[a.id].heading,`${a.id} mulai menghadap monitor`);
 console.log('PASS arah hadap 15 agen meja ke monitornya (termasuk Maya dan Fira)');
 // 2. Layar: 16 layar milik agen (15 meja + ZUNO), semua menyala saat preview.
 let layar=await page.evaluate(()=>zunoOffice.screens());assert.equal(layar.length,16);assert.ok(layar.every(l=>l.terang>1),'semua layar menyala di preview');
 assert.ok(new Set(layar.map(l=>l.jenis)).size>=7,'isi layar beda per jenis kerja');
 // Demo: setelah beberapa agen pergi santai, layar mereka meredup; yang kembali bekerja menyala.
 await page.evaluate(()=>{zunoOffice.demo.start(false);zunoOffice.demo.advance(20);zunoOffice.demo.pause();});await page.waitForTimeout(2500);
 const snap=await page.evaluate(()=>zunoOffice.demo.snapshot());layar=await page.evaluate(()=>zunoOffice.screens());let pergi=0,kerja=0;
 for(const l of layar){const a=snap.find(x=>x.id===l.id);const on=a.phase==='work'&&a.remaining===0&&a.room===a.homeRoom;if(on){kerja++;assert.ok(l.terang>.9,`${l.id} bekerja: layar menyala (${l.terang})`);assert.equal(a.heading,seats[a.id].heading,`${a.id} kembali menghadap monitor`);}else{pergi++;assert.ok(l.terang<.2,`${l.id} pergi: layar redup (${l.terang})`);}}
 assert.ok(pergi>0&&kerja>0,`ada yang bekerja (${kerja}) dan yang pergi (${pergi})`);
 console.log(`PASS layar menyala saat bekerja (${kerja}) dan meredup saat agen pergi (${pergi})`);
 // 3. Sudut Zulnan di lantai 3: kursi pantai, kopi, label Owner terlihat, ruang terdaftar tetap 12.
 const fitur=(await page.evaluate(()=>zunoOffice.amenities())).features;for(const f of ['owner-lounge','owner-beach-chair','owner-coffee'])assert.ok(fitur.includes(f),f);
 await page.evaluate(()=>zunoOffice.focusOwner());await page.waitForTimeout(1500);
 assert.equal(await page.evaluate(()=>zunoOffice.state.floor),'2');assert.equal((await page.locator('#view-name').textContent()).trim(),'Sudut Zulnan');
 assert.equal(await page.locator('[data-owner-label]').isVisible(),true,'label Zulnan terlihat di lantai 3');
 await page.evaluate(()=>zunoOffice.floor('1'));await page.waitForTimeout(400);assert.equal(await page.locator('[data-owner-label]').isVisible(),false,'label Zulnan tidak muncul di lantai 2');
 assert.equal(await page.locator('[data-room]').count(),12);
 await page.locator('[data-owner-label]').evaluate(()=>{});await page.evaluate(()=>zunoOffice.floor('2'));await page.waitForTimeout(400);await page.locator('[data-owner-label]').click();await page.waitForTimeout(1200);assert.equal((await page.locator('#view-name').textContent()).trim(),'Sudut Zulnan');
 console.log('PASS sudut santai Zulnan di lantai 3 (kursi pantai, payung, kopi), label Owner ikut lantainya');
 assert.deepEqual(errors,[]);console.log('ALL LAYAR/OWNER CHECKS PASSED');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1);});
