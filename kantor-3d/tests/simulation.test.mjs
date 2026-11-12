import assert from 'node:assert/strict';
import {createSimulation,stairRoute} from '../office/simulation.js';
const agents=[{id:'worker',floor:0,room:'konten',job:'Menulis naskah'},{id:'visitor',floor:0,room:'engineering',job:'Menguji aplikasi'},{id:'lead',floor:1,room:'lead',job:'Koordinasi'}];
const homes={worker:[-9.35,0,1.26],visitor:[8.35,0,1.26],lead:[-7.3,6,4.45]};
for(const [a,b] of [[0,2],[2,0],[1,2],[2,1]]){const route=stairRoute(a,b);for(let i=1;i<route.length;i++)assert.ok(Math.abs(route[i][1]-route[i-1][1])<=.334,'No vertical teleport');assert.ok(route.some(p=>p[0]===13.2),'Stairs used');assert.equal(route.at(-1)[1],b*6);}console.log('PASS physical stair routes both directions and all floors');
const sim=createSimulation(agents,homes);sim.start();sim.setWork('worker',true);sim.visit('visitor','coffee');
let visited=false,moved=false,seenStair=false;let previous=[...homes.visitor];
for(let t=0;t<150;t++){sim.advance(.5);const a=sim.actors[1];assert.ok(Math.hypot(...a.pos.map((n,i)=>n-previous[i]))<=.676,'Walking bounded by speed, no teleport');previous=[...a.pos];moved ||= a.walked>1;seenStair ||= a.pos[1]>1&&a.pos[1]<5;visited ||= a.room==='coffee';}
assert.ok(moved&&seenStair&&visited);assert.deepEqual(sim.actors[0].pos,homes.worker);assert.equal(sim.actors[0].phase,'work');console.log('PASS worker stays working while free agent travels through stairs to coffee');
sim.pause();const paused=sim.snapshot(),time=sim.time;sim.advance(10);sim.step(1);assert.deepEqual(sim.snapshot(),paused);assert.equal(sim.time,time);console.log('PASS pause freezes positions and simulated clock');
sim.reset();assert.equal(sim.running,false);assert.equal(sim.time,0);for(const a of sim.actors){assert.deepEqual(a.pos,homes[a.id]);assert.equal(a.path.length,0);}console.log('PASS reset restores all workstations');
