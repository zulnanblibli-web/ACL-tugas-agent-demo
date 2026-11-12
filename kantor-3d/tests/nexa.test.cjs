const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
(async()=>{
 const base=process.env.NEXA_TEST_BASE||'http://127.0.0.1:3000';
 const out=process.env.NEXA_TEST_OUTPUT||'/tmp/nexa-test';await fs.mkdir(out,{recursive:true});
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1600,height:1000},reducedMotion:'reduce'});const errors=[],bad=[],ai=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)bad.push(r.url())});page.on('request',r=>{if(r.url().includes('/api/ai'))ai.push(r.url())});
  await page.goto(base+'/nexa.html');await page.waitForFunction(()=>window.nexaStudio?.state.ready,null,{timeout:120000});await page.locator('#quality').selectOption('low');
  assert.equal(await page.locator('#zones [data-zone]').count(),15);assert.equal(await page.locator('.pin').count(),15);
  assert.equal(await page.evaluate(()=>nexaStudio.stats().actors),19);
  const anatomy=await page.evaluate(()=>nexaStudio.world.actors.map(a=>({name:a.name,meshes:(()=>{let n=0;a.group.traverse(c=>{if(c.isMesh)n++});return n})(),y:a.group.position.y})));
  assert.ok(anatomy.every(a=>a.meshes>=5));assert.equal(new Set(anatomy.map(a=>a.name)).size,19);
  console.log('PASS 15 zones, 18 volumetric agents + owner, multi-mesh character anatomy');
  for(let id=1;id<=15;id++){
   const button=page.locator(`#zones [data-zone="${id}"]`);await button.click();await page.waitForFunction(id=>nexaStudio.state.selected===id,id);assert.equal(await button.getAttribute('aria-pressed'),'true');assert.ok((await page.locator('#detail-text').textContent()).length>20);
  }
  console.log('PASS every zone is selectable with correct accessible state and description');
  await page.locator('#home').click();await page.waitForTimeout(500);await page.screenshot({path:out+'/overview.png'});
  await page.locator('#team-toggle').click();assert.equal(await page.locator('#team-grid article').count(),18);await page.locator('#team-grid img').evaluateAll(async imgs=>{await Promise.all(imgs.map(img=>{img.loading='eager';return img.decode()}))});assert.ok(await page.locator('#team-grid img').evaluateAll(imgs=>imgs.every(i=>i.naturalWidth>100)));
  await page.locator('#team-grid [data-team-zone="8"]').first().click();await page.waitForFunction(()=>nexaStudio.state.selected===8);assert.equal(await page.locator('#team-dialog').isVisible(),false);
  console.log('PASS all 18 uploaded character portraits decode and link to their work zone');
  await page.locator('#labels-toggle').click();assert.equal(await page.locator('#labels').isVisible(),false);await page.locator('#labels-toggle').click();assert.equal(await page.locator('#labels').isVisible(),true);
  await page.locator('#light').click();assert.equal(await page.evaluate(()=>nexaStudio.state.day),true);await page.locator('#light').click();
  await page.locator('#quality').selectOption('low');assert.equal(await page.evaluate(()=>nexaStudio.state.quality),'low');
  await page.locator('#rotate').click();assert.equal(await page.locator('#rotate').getAttribute('aria-pressed'),'true');await page.locator('#home').click();assert.equal(await page.locator('#rotate').getAttribute('aria-pressed'),'false');
  console.log('PASS labels, lighting, quality and orbit/reset controls');
  await page.setViewportSize({width:390,height:844});await page.locator('#collapse').click();await page.locator('#home').click();await page.waitForTimeout(400);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:out+'/mobile.png'});
  console.log('PASS mobile viewport, no horizontal overflow');
  assert.equal(await page.locator('#play').getAttribute('aria-pressed'),'false');
  await page.locator('#play').click();await page.evaluate(()=>{nexaStudio.animation.advance(20);nexaStudio.animation.pause()});const pose=await page.evaluate(()=>nexaStudio.animation.snapshot());assert.ok(pose.some(a=>a.walked>5));const stride=await page.evaluate(()=>{const before=nexaStudio.animation.snapshot();nexaStudio.animation.start();nexaStudio.animation.advance(.17);nexaStudio.animation.pause();return {before,after:nexaStudio.animation.snapshot()}});assert.ok(stride.after.some((a,i)=>a.phase==='walking'&&Math.abs(a.legs[0]-stride.before[i].legs[0])>.001));await page.locator('#animation-reset').click();assert.ok(await page.evaluate(()=>nexaStudio.animation.snapshot().every(a=>a.walked===0)));
  await page.locator('#roof').click();assert.equal(await page.evaluate(()=>nexaStudio.world.architecture.roof.visible),true);assert.equal(await page.locator('.pin:visible').count(),0);await page.locator('#roof').click();
  const views=[];for(const angle of [0,90,180,270]){await page.evaluate(a=>nexaStudio.orbitTo(a),angle);views.push(await page.evaluate(()=>nexaStudio.camera.position.toArray()))}assert.equal(new Set(views.map(v=>v.join(','))).size,4);console.log('PASS articulated animation, reset, intact roof toggle and four cardinal 360-degree views');
  await page.locator('#theme-toggle').click();assert.deepEqual(await page.locator('.theme-choice h3').allTextContents(),['Menara Senja','Griya Langit','The Grotto']);await page.locator('[data-theme-choice=senja]').click();await page.waitForFunction(()=>window.zunoOffice?.state.loaded===18,null,{timeout:120000});await page.locator('#quality').selectOption('low');assert.equal(await page.evaluate(()=>zunoOffice.state.theme),'senja');await page.locator('#open-themes').click();assert.equal(await page.locator('[data-theme-card]').count(),3);await page.locator('[data-theme-card=grotto]').click();await page.waitForFunction(()=>window.nexaStudio?.state.ready,null,{timeout:120000});await page.locator('#quality').selectOption('low');assert.equal(await page.locator('#zones [data-zone]').count(),15);
  console.log('PASS theme 3 selection from legacy picker and return to both-theme host without losing choices');
  assert.deepEqual(errors,[]);assert.deepEqual(bad,[]);assert.deepEqual(ai,[]);
  const fallback=await browser.newPage();await fallback.addInitScript(()=>{HTMLCanvasElement.prototype.getContext=()=>null});await fallback.goto(base+'/nexa.html');await fallback.waitForSelector('#fallback');assert.equal(await fallback.locator('#zones [data-zone]').count(),15);await fallback.locator('#zones [data-zone="15"]').click();assert.match(await fallback.locator('#detail-name').textContent(),/Mushola/);
  console.log('PASS WebGL fallback retains zone navigation; zero browser/network errors or AI requests');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
