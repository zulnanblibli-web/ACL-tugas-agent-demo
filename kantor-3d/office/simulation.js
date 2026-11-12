// A deterministic visual simulation, completely independent of backend AI jobs.
// Routes use shared aisles, room entrances and explicit stair landings.
export const destinations={
 coffee:{room:'coffee',floor:2,point:[8.2,12,-7.8],approach:[[12.2,12,-.6],[11.7,12,-6.8],[8.2,12,-6.8]],activity:'Menyiapkan kopi',pose:'coffee'},
 game:{room:'game',floor:1,point:[-.7,6,-4.75],approach:[[.6,6,.65],[-1.9,6,-1.7],[-1.9,6,-5.6]],activity:'Bermain konsol',pose:'game'},
 pc:{room:'game',floor:1,point:[-3.3,6,-7.65],approach:[[.6,6,.65],[-1.9,6,-1.7],[-1.9,6,-6.4],[-3.3,6,-6.4]],activity:'Bermain PC gaming',pose:'game'},
 rest:{room:'rest',floor:1,point:[-9.6,6,-6.4],approach:[[.6,6,.65],[-6.4,6,.65],[-6.4,6,-6.2]],activity:'Beristirahat di lounge',pose:'rest'},
 library:{room:'library',floor:0,point:[.1,0,-9],approach:[[.6,0,-2.8],[.1,0,-2.8]],activity:'Membaca buku',pose:'read'},
 prayer:{room:'prayer',floor:0,point:[10.05,0,-6.75],approach:[[.6,0,-2.8],[9.4,0,-2.8],[9.4,0,-4.4],[10.05,0,-4.4]],activity:'Di mushola',pose:'prayer'},
 pool:{room:'pool',floor:2,point:[-5,11.05,-5],approach:[[12.2,12,-.6],[2,12,-.6],[2,12,-5],[.3,12,-5],[-1.2,11.05,-5]],activity:'Berenang santai',pose:'swim'}
};
const HUBS=[[.6,0,-2.8],[.6,6,.65],[12.2,12,-.6]];
const LANDINGS=[[13.2,0,-1.5],[13.2,6,-1.5],[13.2,12,-10.45]];
export function stairRoute(from,to){const path=[];let f=from;while(f!==to){if(f<to){
 if(f===0)path.push([12,0,-2.8],[12,0,-1.5],LANDINGS[0]);else path.push([12.2,6,.65],[12.2,6,-1.5],LANDINGS[1]);
 for(let step=1;step<=18;step++)path.push([13.2,f*6+step/18*6,-1.5-step/18*8.95]);
 f++;path.push([12.2,f*6,-10.45],[12.2,f*6,f===2?-.6:.65]);
 }else{
 path.push([12.2,f*6,f===2?-.6:.65],[12.2,f*6,-10.45],[13.2,f*6,-10.45]);
 for(let step=1;step<=18;step++)path.push([13.2,f*6-step/18*6,-10.45+step/18*8.95]);
 f--;path.push([12,f*6,-1.5]);if(f===0)path.push([12,0,-2.8]);else path.push([12.2,f*6,f===2?-.6:.65]);
 }}return path;}
const dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]);
export function createSimulation(agents,homePositions,headings={}){
 // Arah hadap saat bekerja: ke monitor di kursinya (lihat workSeats di data.js).
 const workHeading=a=>headings[a.id]??(a.id==='L.0'?0:Math.PI);
 let clock=0,running=false,speed=2;const listeners=[];const stairOwners=new Map();
 const actors=agents.map((a,i)=>({id:a.id,index:i,home:[...homePositions[a.id]],pos:[...homePositions[a.id]],floor:a.floor,room:a.room,homeRoom:a.room,homeFloor:a.floor,phase:'work',activity:a.job,pose:'work',path:[],routeHistory:[],walked:0,cycles:0,manual:null,desired:null,wait:1+i*.8,legPhase:0,heading:workHeading(a),workHeading:workHeading(a),busy:i%3!==1,target:null}));
 const lookup=id=>actors.find(a=>a.id===id);
 function exitWork(a){const [x,y,z]=a.home;if(a.homeFloor===1)return [[x,y,3],[x,y,.65],HUBS[1]];if(a.homeRoom==='library')return [[x,y,-5.6],[.6,y,-5.6],HUBS[0]];const escape=z<0?-2.5:z<3?2.5:7.1;return [[x,y,escape],[.6,y,escape],HUBS[0]];}
 function entryWork(a){return [...exitWork(a)].reverse().concat([a.home]);}
 function buildRoute(a,target){let route=[];
 if(a.phase==='work')route=exitWork(a);else if(a.target)route=[...a.target.approach].reverse();
 else route=[HUBS[a.floor]];
 if(a.floor!==target.floor)route.push(HUBS[a.floor],...stairRoute(a.floor,target.floor));
 route.push(...target.approach,target.point);const clean=[];let last=a.pos;for(const p of route){if(dist(last,p)>.01){clean.push([...p]);last=p;}}return clean;
 }
 function travel(a,target,kind){a.path=buildRoute(a,target);a.target=target;a.destinationKind=kind;a.phase='walking';a.pose='walk';a.activity=kind==='work'?'Menuju tempat kerja':`Menuju ${target.room==='prayer'?'mushola':target.activity.toLowerCase()}`;a.routeHistory=a.path.map(p=>[...p]);a.wait=0;}
 function goWork(a){travel(a,{floor:a.homeFloor,room:a.homeRoom,point:a.home,approach:entryWork(a).slice(0,-1),pose:'work',activity:agents[a.index].job},'work');}
 function goLeisure(a,key){const keys=Object.keys(destinations);const desired=key||keys[(a.index+a.cycles++)%keys.length];const ordered=[desired,...keys.filter(k=>k!==desired)];const chosen=ordered.find(k=>!actors.some(other=>other!==a&&other.target===destinations[k]&&other.phase!=='work'));if(!chosen){a.wait=4;return;}travel(a,destinations[chosen],chosen);}
 function arrive(a){const target=a.target;a.floor=target.floor;a.room=target.room;a.pose=target.pose;a.phase=a.destinationKind==='work'?'work':'leisure';a.activity=target.activity;a.wait=a.phase==='work'?22+a.index*.9:16+a.index*.5;a.heading=a.pose==='work'?a.workHeading:['coffee','game','read'].includes(a.pose)?Math.PI:0;}
 function step(dt){if(!running)return;clock+=dt;
 for(const a of actors){if(a.path.length){let budget=1.35*dt;while(budget>0&&a.path.length){const point=a.path[0];if(a.stair!==undefined&&Math.abs(a.pos[0]-13.2)>.45){stairOwners.delete(a.stair);delete a.stair;}if(Math.abs(point[0]-13.2)<.01){const future=a.path.find(p=>Math.abs(p[1]-a.pos[1])>.01)||point;const index=Math.max(0,Math.min(1,Math.floor((Math.min(a.pos[1],future[1])+.001)/6)));const owner=stairOwners.get(index);if(owner&&owner!==a.id){a.activity='Menunggu tangga';break;}stairOwners.set(index,a.id);a.stair=index;}const d=dist(a.pos,point);const amount=Math.min(d,budget);if(d>0){const dx=point[0]-a.pos[0],dz=point[2]-a.pos[2];if(Math.hypot(dx,dz)>.001)a.heading=Math.atan2(dx,dz);for(let i=0;i<3;i++)a.pos[i]+=(point[i]-a.pos[i])*amount/d;a.walked+=amount;a.legPhase+=amount*7;}budget-=amount;if(d<=amount+.00001)a.path.shift();else break;}
 a.floor=Math.max(0,Math.min(2,Math.round(a.pos[1]/6)));if(!a.path.length)arrive(a);
 }else{a.wait-=dt;if(a.desired){const next=a.desired;a.desired=null;if(next==='work')goWork(a);else goLeisure(a,next==='free'?undefined:next);}
 else if(a.wait<=0){if(a.phase==='work'&&a.manual!==true){goLeisure(a);}else if(a.phase==='leisure'&&a.manual!==false){goWork(a);}else if(a.phase==='leisure')goLeisure(a);else a.wait=12;}}
 }
 listeners.forEach(fn=>fn());
 }
 function reset(){clock=0;running=false;stairOwners.clear();actors.forEach((a,i)=>{Object.assign(a,{pos:[...a.home],floor:a.homeFloor,room:a.homeRoom,phase:'work',activity:agents[i].job,pose:'work',path:[],walked:0,routeHistory:[],cycles:0,manual:null,desired:null,wait:i%3===1?1+i*.6:24+i*.8,target:null,stair:undefined,legPhase:0,heading:a.workHeading});});listeners.forEach(fn=>fn());}
 reset();
 return {actors,get time(){return clock;},get running(){return running;},get speed(){return speed;},setSpeed(value){speed=Math.max(.5,Math.min(4,Number(value)||1));},start(){running=true;},pause(){running=false;},reset,step(dt){step(dt*speed);},advance(seconds){for(let t=0;t<seconds;t+=.1)step(Math.min(.1,seconds-t));},setWork(id,busy){const a=lookup(id);if(!a)return;a.manual=busy;a.desired=busy?'work':'free';if(a.phase==='work'&&busy)a.desired=null;},visit(id,key){const a=lookup(id);if(!a||!destinations[key])return;a.manual=false;a.desired=key;},subscribe(fn){listeners.push(fn);},snapshot(){return actors.map(a=>({id:a.id,position:[...a.pos],floor:a.floor,room:a.room,homeRoom:a.homeRoom,heading:a.heading,pose:a.pose,phase:a.phase,activity:a.activity,walked:a.walked,remaining:a.path.length}));}};
}
