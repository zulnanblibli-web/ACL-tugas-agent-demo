import * as T from 'three';
import {zones} from './data.js';
import {breakSeats} from './seating.js';

const TAU=Math.PI*2;
const mix=T.MathUtils.lerp;
const smooth=t=>{t=T.MathUtils.clamp(t,0,1);return t*t*(3-2*t)};
function turn(current,target,amount){return current+Math.atan2(Math.sin(target-current),Math.cos(target-current))*Math.min(1,amount)}

// A seated worker stands up, exits beside the chair, visits a reserved break position,
// then returns through the doorway and sits down at the same workstation.
export function createAgentAnimation(actors,{reduced=false}={}){
 let running=!reduced,time=0,speed=1;
 const reserved=new Map();
 const entries=actors.map((actor,i)=>{
  const seat=actor.seat||{id:`home-${actor.id}`,x:actor.group.position.x,z:actor.group.position.z,rotation:actor.group.rotation.y,seatTop:1.175,type:'desk',zone:actor.zone};
  return {actor,seat,home:new T.Vector3(seat.x,0,seat.z),phase:'work',activity:actor.workActivity||'type',remaining:actor.firstWork??30+i*11,progress:0,sit:1,atHome:true,target:null,path:[],next:0,walked:0,cycle:0,manual:null};
 });
 function seatedY(seat){return seat?.seatTop===undefined?0:seat.seatTop-1.3}
 function applyPose(e,dt=0){
  const a=e.actor,r=a.rig||{},phase=a.id*.83,t=time*(.8+(a.id%5)*.09)+phase;
  const moving=e.phase==='walking';
  const pose=e.activity,seat=e.atHome?e.seat:e.target;
  const walk=moving?Math.sin(e.walked*5.1):0;
  a.group.position.y=(['standing-up','sitting-down'].includes(e.phase)?e.rootY:mix(0,seatedY(seat),e.sit))+(moving?Math.abs(walk)*.022:0);
  for(let i=0;i<2;i++){
   if(r.legs?.[i])r.legs[i].rotation.x=mix(moving?Math.sin(e.walked*5.1+i*Math.PI)*.43:0,-Math.PI/2,e.sit);
   if(r.knees?.[i])r.knees[i].rotation.x=mix(moving?Math.max(0,-Math.sin(e.walked*5.1+i*Math.PI))*.5:0,Math.PI/2,e.sit);
   if(r.arms?.[i])r.arms[i].rotation.set(moving?-Math.sin(e.walked*5.1+i*Math.PI)*.28:0,0,0);
   if(r.elbows?.[i])r.elbows[i].rotation.x=moving?-.12:0;
  }
  if(r.body){r.body.rotation.x=e.sit*.055;r.body.rotation.z=0;}
  if(r.head){r.head.rotation.y=moving?0:Math.sin(t*.33)*.07;r.head.rotation.x=e.sit*.03;}
  if(r.cup)r.cup.visible=false;if(r.book)r.book.visible=false;if(r.pen)r.pen.visible=false;
  if(moving||e.phase==='standing-up'||e.phase==='sitting-down')return;
  const arms=r.arms||[],elbows=r.elbows||[];
  const arm=(i,x,z=0)=>{if(arms[i]){arms[i].rotation.x=x;arms[i].rotation.z=z}};
  const elbow=(i,x)=>{if(elbows[i])elbows[i].rotation.x=x};
  if(pose==='stretch'){
   arm(0,-2.3-Math.sin(t*.5)*.25,-.25);arm(1,-2.3-Math.sin(t*.5)*.25,.25);elbow(0,-.25);elbow(1,-.25);
   if(r.body)r.body.rotation.z=Math.sin(t*.45)*.08;return;
  }
  if(pose==='coffee'){
   const sip=smooth((Math.sin(t*.65)+1)/2);arm(0,-.35);elbow(0,-.8);arm(1,mix(-.55,-1.05,sip));elbow(1,mix(-1.1,-2.1,sip));
   if(r.cup)r.cup.visible=true;if(r.head)r.head.rotation.x=sip*.06;return;
  }
  if(['read','reading','research','check','audit','review'].includes(pose)){
   arm(0,-.72,-.08);arm(1,-.68,.08);elbow(0,-1.2);elbow(1,-1.15);
   if(r.book)r.book.visible=true;if(r.head)r.head.rotation.x=.12+Math.sin(t*.4)*.035;return;
  }
  if(['draw','write','plan'].includes(pose)){
   arm(0,-.48);elbow(0,-1.0);arm(1,-.5+Math.sin(t*2.5)*.06,.07+Math.sin(t*1.3)*.04);elbow(1,-.95+Math.sin(t*2.5)*.08);
   if(r.pen)r.pen.visible=true;if(r.head)r.head.rotation.x=.09;return;
  }
  if(['meeting','coordinate','receive','publish'].includes(pose)){
   arm(0,-.45);elbow(0,-1.0);arm(1,-.5-Math.max(0,Math.sin(t*.7))*.4,.1);elbow(1,-1.0-Math.max(0,Math.sin(t*.7))*.5);
   if(r.head)r.head.rotation.y=Math.sin(t*.55)*.15;return;
  }
  // Typing, editing and testing use distinct hand timing and occasional mouse movements.
  const rate=pose==='edit'?2.3:pose==='test'?3.1:4;
  arm(0,-.5+Math.sin(t*rate)*.035);elbow(0,-.95+Math.sin(t*rate)*.065);
  arm(1,-.52+Math.sin(t*rate+1.1)*.035,pose==='edit'?.13:0);elbow(1,-.93+Math.sin(t*rate+1.1)*.06);
 }
 function route(e,target){
  const {actor:a,seat:s}=e;const room=zones.find(r=>r.id===a.zone);const lane=s.x<-14?-12.7:12.7;
  let p=[[s.x,s.z]];
  if(s.type==='command')p.push([s.x+1.15,s.z],[1.2,1.5],[3,3],[11.4,3]);
  else if(s.type==='reception')p.push([s.x+1.15,s.z],[5,19.5],[11.4,19.5]);
  else {const front=(room?.z??s.z-1.65)+(room?.d??9)/2,side=s.x<=(room?.x??s.x)?1.15:-1.15;p.push([s.x+side,s.z],[s.x+side,front-.8],[room?.x??s.x,front-.8],[room?.x??s.x,front+.65],[lane,front+.65]);}
  const last=p[p.length-1];
  if(target.kind==='coffee')p.push([last[0],-16],[0,-16],[0,-18],[target.x,-18],[target.x,target.z]);
  if(target.kind==='meeting')p.push([last[0],-16],[-20,-16],[-20,-18.8],[target.x+1.1,-18.8],[target.x+1.1,target.z],[target.x,target.z]);
  if(target.kind==='reading')p.push([last[0],-16],[20,-16],[20,-18.5],[target.x,-18.5],[target.x,target.z]);
  if(target.kind==='stretch')p.push([last[0],31.5],[-12.7,31.5],[target.x,31.5],[target.x,target.z]);
  return p.filter((v,i)=>i===0||Math.hypot(v[0]-p[i-1][0],v[1]-p[i-1][1])>.01).map(([x,z])=>new T.Vector3(x,0,z));
 }
 function reserve(e){
  const kinds=['coffee','meeting','reading','stretch'];const preferred=e.cycle===0?(e.actor.breakPreference||kinds[e.actor.id%4]):kinds[(e.actor.id+e.cycle)%4];
  const options=breakSeats.filter(s=>s.kind===preferred);const start=e.actor.id%options.length;
  for(let i=0;i<options.length;i++){const seat=options[(start+i)%options.length];if(!reserved.has(seat.id)){reserved.set(seat.id,e.actor.id);return seat}}
  // Disuruh santai dari luar (Workspace) sementara tempat favorit penuh: pakai tempat istirahat lain yang kosong.
  if(e.manual==='free')for(const seat of breakSeats)if(!reserved.has(seat.id)){reserved.set(seat.id,e.actor.id);return seat}
  return null;
 }
 function transition(e,phase){e.phase=phase;e.progress=0;}
 function stand(e,returning){
  if(returning){e.path=e.path.slice().reverse();e.next=1;}
  e.transitionFrom=e.actor.group.position.clone();e.transitionTo=e.path[1].clone();e.transitionSeat=e.atHome?e.seat:e.target;e.rootY=seatedY(e.transitionSeat);transition(e,'standing-up');
 }

 function arrive(e){
  const seat=e.atHome?e.seat:e.target;
  if(seat.seatTop!==undefined){e.transitionFrom=e.actor.group.position.clone();e.transitionTo=new T.Vector3(seat.x,0,seat.z);e.rootY=0;transition(e,'sitting-down');}else {e.sit=0;e.phase='break';e.activity=e.target.kind;e.remaining=e.manual==='free'?Infinity:e.manual==='work'?.3:12+(e.actor.id%5)*3;}
 }
 function tick(dt){
  time+=dt;
  for(const e of entries){
   const a=e.actor;
   if(a.name==='Zulnan'){applyPose(e,dt);continue;}
   if(e.phase==='work'){
    e.remaining-=dt;
    if(e.remaining<=0){const target=reserve(e);if(target){e.target=target;e.path=route(e,target);e.next=1;stand(e,false);}else e.remaining=e.manual==='free'?2:8+(a.id%5);}
   }else if(e.phase==='break'){
    e.remaining-=dt;if(e.remaining<=0){if(e.sit>0)stand(e,true);else {e.atHome=true;e.path=e.path.slice().reverse();e.next=1;e.activity='returning';transition(e,'walking');}}
   }else if(e.phase==='standing-up'){
    e.progress=Math.min(1,e.progress+dt/1.6);const p=e.progress,high=seatedY(e.transitionSeat)>0;e.sit=1-smooth(p);
    const horizontal=high?smooth(p/.7):smooth((p-.2)/.8);a.group.position.x=mix(e.transitionFrom.x,e.transitionTo.x,horizontal);a.group.position.z=mix(e.transitionFrom.z,e.transitionTo.z,horizontal);
    e.rootY=seatedY(e.transitionSeat)*(high?1-smooth((p-.6)/.4):1-smooth(p))+.3*Math.sin(Math.PI*p);
    if(p===1){e.rootY=0;e.atHome=!e.atHome;e.next=2;e.activity=e.atHome?'returning':'travelling';transition(e,'walking');}
   }else if(e.phase==='sitting-down'){
    e.progress=Math.min(1,e.progress+dt/1.6);e.sit=smooth(e.progress);const seat=e.atHome?e.seat:e.target,p=e.progress,high=seatedY(seat)>0;
    const horizontal=smooth((p-.4)/.6);a.group.position.x=mix(e.transitionFrom.x,seat.x,horizontal);a.group.position.z=mix(e.transitionFrom.z,seat.z,horizontal);
    e.rootY=seatedY(seat)*smooth(high?p/.6:p)+.25*Math.sin(Math.PI*p);a.group.rotation.y=turn(a.group.rotation.y,seat.rotation,dt*8);
    if(e.progress===1){a.group.rotation.y=seat.rotation;if(e.atHome){e.phase='work';e.activity=a.workActivity||'type';e.cycle++;e.remaining=e.manual==='work'?Infinity:e.manual==='free'?1.2:45+((a.id*47+e.cycle*29)%150);e.target=null;}else {e.phase='break';e.activity=e.target.kind;e.remaining=e.manual==='free'?Infinity:e.manual==='work'?.3:12+((a.id*7)%21);}}
   }else if(e.phase==='walking'){
    const target=e.path[e.next];if(!target){arrive(e);applyPose(e,dt);continue;}
    const dx=target.x-a.group.position.x,dz=target.z-a.group.position.z,d=Math.hypot(dx,dz),step=Math.min(d,dt*(2.2+(a.id%5)*.08));
    if(d>1e-7){a.group.position.x+=dx/d*step;a.group.position.z+=dz/d*step;a.group.rotation.y=turn(a.group.rotation.y,Math.atan2(dx,dz),dt*9);e.walked+=step;}
    if(e.atHome&&e.target&&Math.hypot(a.group.position.x-e.target.x,a.group.position.z-e.target.z)>1.2&&reserved.get(e.target.id)===a.id)reserved.delete(e.target.id);
    if(d<=step+1e-7){e.next++;const seat=e.atHome?e.seat:e.target;if(e.next>=e.path.length||(seat.seatTop!==undefined&&e.next===e.path.length-1))arrive(e);}
   }
   applyPose(e,dt);
  }
 }
 function advance(dt){if(!running)return;let remaining=Math.min(600,Math.max(0,dt))*speed;while(remaining>1e-8){const step=Math.min(remaining,.05);tick(step);remaining-=step;}}
 function reset(){time=0;reserved.clear();for(const [i,e] of entries.entries()){e.actor.group.position.copy(e.home);e.actor.group.rotation.y=e.seat.rotation;e.phase='work';e.activity=e.actor.workActivity||'type';e.remaining=e.actor.firstWork??30+i*11;e.progress=0;e.rootY=seatedY(e.seat);e.sit=1;e.atHome=true;e.target=null;e.path=[];e.next=0;e.walked=0;e.cycle=0;e.manual=null;applyPose(e);}}
 reset();
 // Kendali dari luar (Workspace situs): busy=true agen kembali dan tetap di mejanya; false = istirahat dan tetap santai.
 // key = id angka (urutan team) atau nama. null = kembali ke jadwal simulasi biasa.
 function setWork(key,busy){const e=entries.find(x=>x.actor.id===key||String(x.actor.name).toLowerCase()===String(key).toLowerCase());if(!e||e.actor.name==='Zulnan')return false;
  e.manual=busy===null||busy===undefined?null:busy?'work':'free';
  if(e.manual==='work'){if(e.phase==='work')e.remaining=Infinity;else if(e.phase==='break')e.remaining=0;}
  else if(e.manual==='free'){if(e.phase==='work')e.remaining=Math.min(e.remaining,.2+(e.actor.id%6)*.35);else if(e.phase==='break')e.remaining=Infinity;}
  else {if(e.remaining===Infinity)e.remaining=e.phase==='work'?20+(e.actor.id%7)*4:6;}
  return true;}
 function status(){return entries.map(e=>({id:e.actor.id,name:e.actor.name,phase:e.phase,activity:e.activity,atHome:e.atHome,target:e.target?.kind||null,manual:e.manual}));}
 return {advance,reset,setWork,status,start(){running=true},pause(){running=false},setSpeed(v){speed=Math.max(.25,Math.min(4,Number(v)||1));},get running(){return running},get time(){return time},snapshot:()=>entries.map(e=>({
  id:e.actor.id,name:e.actor.name,phase:e.phase,activity:e.activity,seated:e.sit>.98,sitBlend:e.sit,position:e.actor.group.position.toArray(),rotation:e.actor.group.rotation.y,
  walked:e.walked,cycle:e.cycle,seatId:(e.atHome?e.seat:e.target)?.id,homeSeat:e.seat.id,target:e.target?.kind||null,
  legs:e.actor.rig?.legs?.map(l=>l.rotation.x)||[],knees:e.actor.rig?.knees?.map(l=>l.rotation.x)||[],remaining:e.remaining
 }))};
}
