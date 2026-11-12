import assert from 'node:assert/strict';
import * as T from 'three';
import {createAgentAnimation} from '../nexa/animation.js';
import {team} from '../nexa/data.js';
import {assignHomeSeats,ownerSeat,workProfiles,firstWorkSeconds,breakPreferences,workstationPlans} from '../nexa/seating.js';
const homes=assignHomeSeats();
function actor(a,seat){const group=new T.Group();group.position.set(seat.x,0,seat.z);group.rotation.y=seat.rotation;return {...a,group,seat,workActivity:workProfiles[a.id]||'read',firstWork:firstWorkSeconds[a.id],breakPreference:breakPreferences[a.id],rig:{legs:[new T.Group(),new T.Group()],knees:[new T.Group(),new T.Group()],arms:[new T.Group(),new T.Group()],elbows:[new T.Group(),new T.Group()],body:new T.Group(),head:new T.Group(),cup:new T.Group(),book:new T.Group(),pen:new T.Group()}}}
const actors=[...team.map(a=>actor(a,homes.get(a.id))),actor({id:18,name:'Zulnan',zone:13},ownerSeat)];
const sim=createAgentAnimation(actors,{reduced:true});const initial=sim.snapshot();
assert.equal(new Set(initial.map(a=>a.seatId)).size,19);
assert.ok(initial.every(a=>a.seated&&a.phase==='work'&&a.knees.every(x=>Math.abs(x-Math.PI/2)<1e-8)));
for(const a of actors){assert.ok(Math.abs(a.group.position.x-a.seat.x)<1e-8);assert.ok(Math.abs(a.group.position.z-a.seat.z)<1e-8);assert.ok(Math.abs(a.group.position.y+1.3-a.seat.seatTop)<1e-8);assert.ok(Math.abs(a.group.rotation.y-a.seat.rotation)<1e-8)}
assert.equal(workstationPlans.find(p=>p.room.id===9).seats.length,4);
assert.ok(new Set(initial.map(a=>a.activity)).size>=10);
sim.advance(10);assert.deepEqual(sim.snapshot(),initial);
console.log('PASS all 19 characters start seated at unique real seat positions, bent knees, correct height/orientation; QA has four seats');
console.log('PASS reduced motion stays seated and paused; work activities differ by role');
sim.start();let previous=initial;const phases=new Set(),activities=new Set();let returned=false,standingBeforeWalking=false;
const priorPhase=new Map();
for(let i=0;i<18000;i++){
 sim.advance(.05);const current=sim.snapshot();
 const occupied=new Map();
 for(let j=0;j<actors.length;j++){
  const a=current[j],b=previous[j];const distance=new T.Vector3(...a.position).distanceTo(new T.Vector3(...b.position));assert.ok(distance<.13,`No teleport: ${a.name} ${a.phase} ${distance}`);
  if(a.seated){assert.ok(!occupied.has(a.seatId),`Seat occupied twice: ${a.seatId}`);occupied.set(a.seatId,a.id)}
  if(a.phase==='walking'&&b.phase==='standing-up')standingBeforeWalking=true;
  if(a.phase==='work'){assert.ok(a.seated);assert.ok(a.knees.every(x=>Math.abs(x-Math.PI/2)<1e-8));assert.ok(Math.hypot(a.position[0]-actors[j].seat.x,a.position[2]-actors[j].seat.z)<1e-8);}
  if(a.phase==='walking')assert.equal(a.seated,false);
  phases.add(a.phase);activities.add(a.activity);returned ||= a.cycle>0;
 }
 if(i===2999)assert.ok(current.filter(a=>a.phase==='work').length>=10,'Most staff must keep working instead of all leaving together');
 previous=current;
}
assert.ok(standingBeforeWalking&&returned);for(const phase of ['work','standing-up','walking','sitting-down','break'])assert.ok(phases.has(phase));
for(const activity of ['coffee','meeting','reading','stretch'])assert.ok(activities.has(activity),activity);
console.log('PASS stand-up/walk/sit-down/return cycle, reserved break seats, no duplicate seated occupants or frame teleports');
console.log('PASS coffee, seated meeting, seated reading and standing stretch occur on independent schedules');
sim.pause();const paused=sim.snapshot();sim.advance(10);assert.deepEqual(sim.snapshot(),paused);sim.reset();assert.deepEqual(sim.snapshot(),initial);
console.log('PASS pause freezes exact poses; reset restores seated work poses and hides break props');
sim.start();sim.setSpeed(2);sim.advance(3);assert.ok(Math.abs(sim.time-6)<1e-8);console.log('PASS playback speed');
