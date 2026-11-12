// Kendali per agen The Grotto dari halaman induk (Workspace situs Nexaoffice): setWork(id|nama, sibuk).
import assert from 'node:assert/strict';
import * as T from 'three';
import {createAgentAnimation} from '../nexa/animation.js';
import {team} from '../nexa/data.js';
import {assignHomeSeats,ownerSeat,workProfiles,firstWorkSeconds,breakPreferences} from '../nexa/seating.js';
const homes=assignHomeSeats();
function actor(a,seat){const group=new T.Group();group.position.set(seat.x,0,seat.z);group.rotation.y=seat.rotation;return {...a,group,seat,workActivity:workProfiles[a.id]||'read',firstWork:firstWorkSeconds[a.id],breakPreference:breakPreferences[a.id],rig:{legs:[new T.Group(),new T.Group()],knees:[new T.Group(),new T.Group()],arms:[new T.Group(),new T.Group()],elbows:[new T.Group(),new T.Group()],body:new T.Group(),head:new T.Group(),cup:new T.Group(),book:new T.Group(),pen:new T.Group()}}}
const actors=[...team.map(a=>actor(a,homes.get(a.id))),actor({id:18,name:'Zulnan',zone:13},ownerSeat)];
const sim=createAgentAnimation(actors,{reduced:false});
const at=(name)=>sim.snapshot().find(a=>a.name===name);
const run=(s)=>{for(let t=0;t<s;t+=.05)sim.advance(.05);};

// Siaga: semua agen santai. Hampir semua meninggalkan meja dalam 40 detik (kursi istirahat 17 untuk 18 agen).
for(let i=0;i<18;i++)assert.equal(sim.setWork(i,false),true);
assert.equal(sim.setWork('Zulnan',true),false,'Owner tidak dikendalikan');
run(40);
let snap=sim.snapshot();
const pergi=snap.filter(a=>a.name!=='Zulnan'&&!(a.phase==='work'&&a.seatId===a.homeSeat)).length;
assert.ok(pergi>=16,`siaga: agen meninggalkan meja (${pergi})`);
console.log(`PASS siaga: ${pergi} dari 18 agen istirahat`);

// Tahap jalan: Raka (R.1, id 2) dan Fajar (T.3, id 15) kembali ke meja dan tetap bekerja.
sim.setWork(2,true);sim.setWork('Fajar',true);
run(60);
for(const n of ['Raka','Fajar']){const a=at(n);assert.equal(a.phase,'work',`${n} bekerja (${a.phase})`);assert.equal(a.seatId,a.homeSeat,`${n} di kursinya`);}
const istirahat=sim.snapshot().filter(a=>!['Raka','Fajar','Zulnan'].includes(a.name)&&a.phase==='work'&&a.seatId===a.homeSeat).length;
assert.ok(istirahat<=2,`agen lain tetap santai (${istirahat} di meja)`);
run(400);
for(const n of ['Raka','Fajar'])assert.equal(at(n).phase,'work',`${n} tetap bekerja selama tahapnya jalan`);
console.log('PASS kerja: agen tahap jalan kembali ke meja dan tetap bekerja, yang lain tetap santai');

// Tahap selesai: Raka santai lagi, meninggalkan meja.
sim.setWork('Raka',false);run(30);
assert.notEqual(at('Raka').seatId===at('Raka').homeSeat&&at('Raka').phase==='work',true,'Raka meninggalkan meja');
console.log('PASS santai lagi: agen meninggalkan meja setelah tahapnya selesai');

// Status ringan untuk label nama.
const st=sim.status();assert.equal(st.length,19);assert.ok(st.every(s=>'phase' in s&&'activity' in s&&'manual' in s));
// null = kembali ke jadwal simulasi biasa; reset menghapus kendali.
sim.setWork('Fajar',null);sim.reset();assert.ok(sim.status().every(s=>s.manual===null&&s.phase==='work'));
console.log('PASS status label dan reset kendali');
