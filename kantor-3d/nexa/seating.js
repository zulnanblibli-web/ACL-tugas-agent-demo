import {team, zones} from './data.js';

export const workProfiles = ['coordinate','receive','research','plan','write','edit','draw','edit','edit','review','check','read','publish','plan','draw','type','test','audit'];
// Detik pertama sebelum istirahat (dipendekkan 2026-11-10 supaya gerak terlihat lebih cepat; sebagian besar tetap bekerja di awal).
export const firstWorkSeconds = [160,210,8,250,40,180,120,300,25,270,165,330,195,70,360,15,240,390];
export const breakPreferences = ['meeting','coffee','coffee','meeting','reading','stretch','reading','coffee','stretch','coffee','meeting','reading','coffee','meeting','reading','coffee','stretch','stretch'];

export const workstationPlans = [3,4,5,6,7,8,9].map(zone => {
  const room = zones.find(r => r.id === zone);
  const count = Math.max(3, team.filter(a => a.zone === zone).length);
  const spacing = count === 4 ? 2.7 : 3;
  return {room, count, width: count === 4 ? 10.8 : 9, seats: Array.from({length:count}, (_, i) => ({
    id:`desk-${zone}-${i}`, zone, x:room.x+(i-(count-1)/2)*spacing, z:room.z+1.65,
    rotation:Math.PI, seatTop:1.175, type:'desk'
  }))};
});
export const commandSeats = Array.from({length:7}, (_, i) => {
  const angle=.2+i*.46;
  return {id:`command-${i}`,zone:2,x:Math.cos(angle)*3.7,z:3-Math.sin(angle)*3.7,
    rotation:Math.PI/2+angle,chairRotation:angle-Math.PI/2,seatTop:1.175,type:'command',angle};
});
export const receptionSeat={id:'reception',zone:1,x:0,z:21.1,rotation:0,seatTop:1.175,type:'reception'};
export const ownerSeat={id:'owner-sofa',zone:13,x:21.4,z:25,rotation:0,seatTop:.925,type:'sofa'};
export const breakSeats = [
  ...Array.from({length:6},(_,i)=>({id:`coffee-${i}`,kind:'coffee',zone:12,x:-5+i*2,z:-19.3,rotation:Math.PI,seatTop:1.9,type:'stool'})),
  ...Array.from({length:4},(_,i)=>({id:`meeting-${i}`,kind:'meeting',zone:10,x:-24+i*2.6,z:-20.3,rotation:Math.PI,seatTop:1.175,type:'meeting'})),
  ...Array.from({length:4},(_,i)=>({id:`game-sofa-${i}`,kind:'reading',zone:11,x:17.8+i*1.4,z:-20,rotation:0,seatTop:.925,type:'sofa'})),
  ...Array.from({length:3},(_,i)=>({id:`garden-${i}`,kind:'stretch',zone:14,x:-24+i*2.6,z:36.5+i,rotation:Math.PI/2,type:'standing'}))
];

// Both geometry and actors use these exact seat coordinates; there is no separate spawn grid.
export function assignHomeSeats(roster=team) {
  const result=new Map();
  for(const plan of workstationPlans){
    const people=roster.filter(a=>a.zone===plan.room.id);
    people.forEach((a,i)=>{const slot=people.length===1?1:people.length===2?i*2:i;result.set(a.id,plan.seats[slot]);});
  }
  for(const a of roster){if(a.zone===2)result.set(a.id,commandSeats[3]);if(a.zone===1)result.set(a.id,receptionSeat);}
  return result;
}
