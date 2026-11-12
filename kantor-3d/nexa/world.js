import * as T from 'three';
import {ImprovedNoise} from 'three/addons/math/ImprovedNoise.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries,mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
import {addGrottoArchitecture} from './architecture.js';
import {workstationPlans,commandSeats,receptionSeat,ownerSeat,assignHomeSeats,workProfiles,firstWorkSeconds,breakPreferences} from './seating.js';
import {zones,team} from './data.js';
let rockGeometry;let seed=87;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
const materials=new Map();function mat(color,roughness=.65,metalness=0){const k=[color,roughness,metalness].join();if(!materials.has(k))materials.set(k,new T.MeshStandardMaterial({color,roughness,metalness}));return materials.get(k)}
function surface(kind){const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');ctx.fillStyle=kind==='stone'?'#8b806a':kind==='wood'?'#795536':'#b4b0a0';ctx.fillRect(0,0,512,512);for(let i=0;i<19000;i++){const v=rnd();ctx.fillStyle=`rgba(${v>.5?'235,223,198':'32,30,20'},${rnd()*.16})`;const x=rnd()*512,y=rnd()*512;ctx.fillRect(x,y,kind==='wood'?25+rnd()*120:1+rnd()*6,kind==='wood'?1:1+rnd()*4)}if(kind==='stone'){const img=ctx.getImageData(0,0,512,512),noise=new ImprovedNoise();for(let y=0;y<512;y++)for(let x=0;x<512;x++){const i=(y*512+x)*4;let n=0;for(let o=0;o<6;o++){const f=.012*Math.pow(2,o);n+=noise.noise(x*f,y*f,4)*32/Math.pow(1.8,o)}const seam=Math.pow(Math.max(0,Math.sin(y*.065+noise.noise(x*.01,y*.008,8)*2)),30)*13;const grain=(rnd()-.5)*13;img.data[i]=163+n-seam+grain;img.data[i+1]=151+n-seam+grain;img.data[i+2]=132+n-seam+grain;}ctx.putImageData(img,0,0)}if(kind==='tile'){ctx.strokeStyle='#77745d60';for(let i=0;i<=512;i+=64){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,512);ctx.moveTo(0,i);ctx.lineTo(512,i);ctx.stroke()}}const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(kind==='stone'?2:4,4);t.colorSpace=T.SRGBColorSpace;return t}
export function buildWorld(scene){
 const root=new T.Group();scene.add(root);const staticMeshes=[];const interactive=[];const actors=[];const seatGeometry=new Map();
 const stone=new T.MeshStandardMaterial({color:'#c0ad8c',map:surface('stone'),roughness:.93,bumpScale:.28});stone.bumpMap=stone.map;
 const wood=new T.MeshStandardMaterial({color:'#967052',map:surface('wood'),roughness:.4,bumpScale:.035});wood.bumpMap=wood.map;const loader=new T.TextureLoader();loader.load('/assets/nexa/materials/wood-color.jpg',t=>{t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(1.5,1.5);t.anisotropy=8;wood.map=t;wood.needsUpdate=true});loader.load('/assets/nexa/materials/wood-bump.jpg',t=>{t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(1.5,1.5);wood.bumpMap=t;wood.needsUpdate=true});
 const floor=new T.MeshStandardMaterial({color:'#e0d5be',map:surface('tile'),roughness:.29,metalness:.12});floor.bumpMap=floor.map;floor.bumpScale=.04;
 const bronze=mat('#a67b44',.32,.72),dark=mat('#172c25',.45),cream=mat('#d0c4a8',.85),black=mat('#1a2222',.42),green=mat('#34583c',.85),leafLight=mat('#71844a',.8),soil=mat('#34392b');
 const glow=new T.MeshStandardMaterial({color:'#ffe3a0',emissive:'#ffc467',emissiveIntensity:2.7});const blueGlow=new T.MeshStandardMaterial({color:'#6cdfeb',emissive:'#2ebccf',emissiveIntensity:1.5,roughness:.2,metalness:.4});
 function mesh(g,m,x,y,z,parent=root,batch=true){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);if(batch&&parent===root)staticMeshes.push(o);return o}
 const boxGeo=new Map();function box(x,y,z,w,h,d,m=wood,parent=root){const key=[w,h,d].join();if(!boxGeo.has(key))boxGeo.set(key,new RoundedBoxGeometry(w,h,d,2,Math.min(.12,h*.15,w*.1,d*.1)));return mesh(boxGeo.get(key),m,x,y,z,parent)}
 function cyl(x,y,z,r,h,m=bronze,r2=r,parent=root){return mesh(new T.CylinderGeometry(r2,r,h,20),m,x,y,z,parent)}
 function ball(x,y,z,sx,sy,sz,m=cream,parent=root){const o=mesh(new T.SphereGeometry(1,16,12),m,x,y,z,parent);o.scale.set(sx,sy,sz);return o}
 function rod(a,b,r,m=bronze){const av=new T.Vector3(...a),bv=new T.Vector3(...b),o=mesh(new T.CylinderGeometry(r,r,av.distanceTo(bv),10),m,...av.clone().add(bv).multiplyScalar(.5).toArray());o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),bv.sub(av).normalize());return o}
 function ring(x,y,z,r,t,m=glow){const o=mesh(new T.TorusGeometry(r,t,6,64),m,x,y,z);o.rotation.x=-Math.PI/2;return o}
 function text(str,x,y,z,w=5,color='#f6ddb0',bg=null){const c=document.createElement('canvas');c.width=1024;c.height=256;const a=c.getContext('2d');if(bg){a.fillStyle=bg;a.fillRect(0,0,1024,256)}a.font='500 64px Georgia';a.textAlign='center';a.textBaseline='middle';a.fillStyle=color;a.fillText(str,512,128,980);const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;const m=new T.MeshBasicMaterial({map:tex,transparent:true,side:T.DoubleSide,depthWrite:false});return mesh(new T.PlaneGeometry(w,w/4),m,x,y,z,root,false)}
 function rock(x,y,z,sx,sy,sz){if(!rockGeometry){let g=new T.IcosahedronGeometry(1,3);g.deleteAttribute('normal');g.deleteAttribute('uv');g=mergeVertices(g);const p=g.attributes.position;for(let i=0;i<p.count;i++){const a=p.getX(i),b=p.getY(i),c=p.getZ(i),noise=1+.09*Math.sin(a*12+b*7+c*8)+.035*Math.sin(c*26+b*18);p.setXYZ(i,a*noise,b*noise,c*noise)}g.computeVertexNormals();const uv=[];for(let i=0;i<p.count;i++)uv.push(Math.atan2(p.getZ(i),p.getX(i))/Math.PI/2+.5,p.getY(i)*.5+.5);g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));rockGeometry=g}const o=mesh(rockGeometry,stone,x,y,z);o.scale.set(sx,sy,sz);o.rotation.set(rnd()*.4,rnd()*6,rnd()*.3);return o}
 function plant(x,z,size=1,y=0){cyl(x,y+.38*size,z,.4*size,.75*size,mat('#c2b59c'),.48*size);cyl(x,y+.78*size,z,.35*size,.04,soil);for(let i=0;i<7;i++){const a=i*2.4+rnd(),h=(1.1+rnd()*1.7)*size;rod([x,y+.7*size,z],[x+Math.cos(a)*.55*size,y+h,z+Math.sin(a)*.55*size],.025*size,green);const o=ball(x+Math.cos(a)*.55*size,y+h,z+Math.sin(a)*.55*size,.2*size,.6*size,.1*size,i%2?green:leafLight);o.rotation.z=Math.cos(a)*.6;o.rotation.x=Math.sin(a)*.6}}
 function tree(x,z,s=1){cyl(x,2*s,z,.18*s,4*s,wood,.11*s);for(let i=0;i<11;i++){const a=i*2.4,h=3+rnd()*2,xx=x+Math.cos(a)*1.6*s,zz=z+Math.sin(a)*1.6*s;rod([x,2*s,z],[xx,h*s,zz],.065*s,wood);for(let j=0;j<16;j++){const aa=j*2.4,rr=rnd()*1.15*s;const o=ball(xx+Math.cos(aa)*rr,(h+(rnd()-.5)*.9)*s,zz+Math.sin(aa)*rr,.32*s,.055*s,.16*s,j%3?green:leafLight);o.rotation.set(rnd()*.8,rnd()*6,rnd()*.6)}}}
 function lantern(x,z,y=.4){box(x,y,z,.28,.62,.28,bronze);box(x,y,z,.21,.43,.21,glow);box(x,y+.34,z,.4,.07,.4,bronze)}
 function lamp(x,z,y=5){cyl(x,y+1.1,z,.035,2.2,bronze);cyl(x,y,z,.72,.25,bronze,.35);cyl(x,y-.14,z,.61,.02,glow)}
 function shelf(x,z,w=7){box(x,1.9,z,w,3.8,.5,wood);for(let l=0;l<4;l++){box(x,.35+l*.9,z+.28,w,.1,.8,bronze);box(x,.44+l*.9,z+.39,w-.2,.035,.12,glow);for(let j=0;j<9;j++)box(x-w/2+.5+j*(w-1)/9,.7+l*.9,z+.37,.18+rnd()*.2,.48+rnd()*.25,.32,mat(['#8e593c','#cfbea1','#4c6655','#b89056'][j%4]))}}
 function screen(x,y,z,w=2,h=1.3,type=0){box(x,y,z,w+.14,h+.14,.16,black);const c=document.createElement('canvas');c.width=512;c.height=320;const ctx=c.getContext('2d');ctx.fillStyle='#10252f';ctx.fillRect(0,0,512,320);ctx.fillStyle='#28424c';ctx.fillRect(0,0,512,30);ctx.fillStyle='#e5cd95';ctx.font='15px monospace';ctx.fillText(['NEXA / ANALYTICS','STORYBOARD / SEQUENCE','VISUAL / COLOUR LAB','TIMELINE / EDIT','FLOW / PRODUCTION','QA / SECURITY','ENGINEERING / CODE'][type%7],18,21);for(let i=0;i<7;i++){ctx.fillStyle=['#1e6c77','#c49c60','#697f95','#8d677e'][i%4];if(type===1){ctx.fillRect(20+(i%3)*164,50+Math.floor(i/3)*90,145,72);ctx.strokeStyle='#dbc68a';ctx.strokeRect(24+(i%3)*164,54+Math.floor(i/3)*90,137,64)}else if(type===0){ctx.fillRect(30+i*65,280-(i*39%180),30,20+(i*39%180))}else{for(let j=0;j<4;j++)ctx.fillRect(24+(j%2)*190,50+i*34,40+(i*23+j*14)%130,6)}}const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;const o=mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:tex}),x,y,z+.09,root,false);return o}
 function monitor(x,z,type=0){box(x,1.9,z,.12,.6,.15,bronze);box(x,1.65,z+.08,.65,.06,.4,black);screen(x,2.5,z,2,1.2,type);box(x,1.68,z+1.1,1.2,.045,.42,black);for(let i=0;i<9;i++)box(x-.5+i*.12,1.71,z+1.1,.055,.02,.28,mat('#85928a'));ball(x+.87,1.72,z+1.1,.12,.07,.18,black)}
 function chair(x,z,rotation=0){const g=new T.Group();g.position.set(x,0,z);g.rotation.y=rotation;root.add(g);cyl(0,.55,0,.08,1,bronze,.08,g);for(let i=0;i<5;i++){const a=i*1.256;box(Math.cos(a)*.38,.14,Math.sin(a)*.38,.16,.13,.16,black,g)}box(0,1.05,0,1.1,.25,1.05,cream,g);box(0,1.65,.42,1.12,1.2,.25,cream,g);box(-.62,1.4,0,.12,.1,.8,bronze,g);box(.62,1.4,0,.12,.1,.8,bronze,g);return g}
 function desk(x,z,w=8){box(x,1.55,z,w,.23,2.6,wood);box(x,1.42,z,w,.04,2.6,bronze);for(const s of [-1,1])box(x+s*(w/2-.4),.77,z,.18,1.5,2,bronze)}
 function sofa(x,z,w=4,rotation=0){const g=new T.Group();root.add(g);g.position.set(x,0,z);g.rotation.y=rotation;box(0,.35,0,w,.45,1.8,wood,g);for(let i=0;i<Math.floor(w/1.4);i++){box(-w/2+.8+i*1.4,.7,0,1.34,.45,1.55,cream,g);box(-w/2+.8+i*1.4,1.3,-.7,1.34,1.1,.32,cream,g)}for(const s of [-1,1])box(s*(w/2-.2),1,0,.4,.9,1.9,cream,g);return g}
 // The entire reference is a single connected, widened floor plate.
 box(0,-.55,6,66,1.1,78,stone);box(0,-.03,6,63,.12,75,floor);
 // Rear grotto wall and cutaway rock shoulders preserve the view into every room.
 for(let i=0;i<18;i++){rock(-31+i*3.65,2.2,-30.5,2.4,2.8,2);rock(-32,1.2,-27+i*4,2.1,1.9,2.7);rock(32,1.2,-27+i*4,2.1,1.9,2.7)}
 for(let i=0;i<16;i++){const a=i/15*Math.PI;rock(Math.cos(a)*31,4.7+Math.sin(a)*2,-30,2.5,1.4,2.3)}
 for(let i=0;i<25;i++){const x=-30+i*2.5;if(Math.abs(x)>8)rock(x,.5,44.5,1.7,1.2+rnd(),1.3);if(i%2===0)lantern(x,43.4)}
 for(let i=0;i<22;i++){const x=-29+rnd()*58,z=-29+rnd()*2;plant(x,z,.6,7+rnd()*3)}
 for(const side of [-1,1]){for(let i=0;i<15;i++){const z=-24+i*4.3;rock(side*31.5,4.5,z,1.9,1.1,2.7);if(i%2===0){const x=side*(27+rnd());for(let j=0;j<7;j++){const yy=5.4-j*.35;const leaf=ball(x+Math.sin(j)*.22,yy,z,.24,.15,.09,j%2?green:leafLight);leaf.rotation.z=j*.5;rod([x,yy+.3,z],[x,yy,z],.018,green)}}}}
 for(const r of zones.filter(r=>[3,4,5,6,7,8,9,10,11,12].includes(r.id))){for(let j=0;j<4;j++)rock(r.x-r.w/2+j*r.w/3,5.5,r.z-r.d/2-.4,r.w/5,.8,1.2);const light=new T.PointLight('#ffb95c',55,12,2);light.position.set(r.x,4.4,r.z);scene.add(light)}
 // Skylight structure, set over the rear portion of the grotto.
 for(let i=-2;i<=2;i++)rod([i*4,17.6,-29],[i*4,18.2,-17],.055,bronze);
 for(let j=0;j<5;j++)rod([-9,17.6+j*.15,-29+j*3],[9,17.6+j*.15,-29+j*3],.05,bronze);
 const glass=new T.MeshPhysicalMaterial({color:'#a9c5b4',transparent:true,opacity:.14,roughness:.09,metalness:.1,side:T.DoubleSide,depthWrite:false});
 const pane=mesh(new T.PlaneGeometry(18,12),glass,0,18.2,-23,root,false);pane.rotation.x=-Math.PI/2;
 for(const r of zones){
  if(r.id===2||r.id===14)continue;
  box(r.x,.1,r.z,r.w,.12,r.d,mat('#b8ac93',.42,.08));
  // Flush amber perimeter lights and low borders.
  box(r.x,.19,r.z+r.d/2,r.w,.055,.055,glow);box(r.x,.19,r.z-r.d/2,r.w,.055,.055,glow);
  const back=r.z-r.d/2;
  if(![1,13,15].includes(r.id)){
   box(r.x,2,back,r.w,4,.22,wood);screen(r.x,3,back+.15,Math.min(6,r.w-3),2.15,[3,4,5,6,7,8,9].indexOf(r.id)+1);
   for(const s of [-1,1]){const xx=r.x+s*r.w/2;box(xx,4,r.z,.08,.08,r.d,bronze);box(xx,.3,r.z,.08,.08,r.d,bronze);mesh(new T.BoxGeometry(.035,3.8,r.d-.1),glass,xx,2,r.z,root,false);for(let k=0;k<3;k++)box(xx,2,r.z-r.d/2+k*r.d/2,.08,4,.08,bronze)}
   rod([r.x-r.w/2,4,back],[r.x+r.w/2,4,back],.04,glow);
  }
  plant(r.x-r.w/2+.7,r.z-r.d/2+1,.8);plant(r.x+r.w/2-.7,r.z+r.d/2-.8,.7);lamp(r.x,r.z,5.6);
 }
 // Six specialized production rooms, each with physical workstations.
 for(const plan of workstationPlans){const r=plan.room,id=r.id;desk(r.x,r.z,plan.width);for(const seat of plan.seats){monitor(seat.x,r.z-.15,({3:0,4:1,5:2,6:3,7:4,8:6,9:5})[id]);const model=chair(seat.x,seat.z);seatGeometry.set(seat.id,{...seat,model});box(seat.x,.34,seat.z-.63,1.1,.07,.65,bronze)}shelf(r.x+r.w/2-1.3,r.z-r.d/2+.2,2);if(id===4){for(let j=0;j<6;j++)box(r.x-3+j*1.1,1.7,r.z+.8,.8,.02,.6,mat('#ece3ca'))}if(id===5){for(let j=0;j<6;j++)cyl(r.x-4+j*.28,1.87,r.z+.85,.07,.4,mat(['#cb795d','#c5a957','#708c7c'][j%3]))}}
 // Circular command center with a walk-in opening and curved multi-monitor array.
 cyl(0,.12,3,9,.24,wood);ring(0,.26,3,8.7,.045,glow);ring(0,.27,3,7.8,.025,bronze);
 const arc=new T.Shape();arc.absarc(0,0,6.6,.1,Math.PI*1.9,false);arc.absarc(0,0,4.9,Math.PI*1.9,.1,true);const ag=new T.ExtrudeGeometry(arc,{depth:.3,bevelEnabled:true,bevelThickness:.07,bevelSize:.07,bevelSegments:2,steps:1});ag.rotateX(-Math.PI/2);mesh(ag,wood,0,1.5,3);
 for(const seat of commandSeats){const a=seat.angle,x=Math.cos(a)*5.8,z=3-Math.sin(a)*5.8;const g=new T.Group();root.add(g);g.position.set(x,0,z);g.rotation.y=a-Math.PI/2;const before=root.children.length;monitor(0,0,0);const made=root.children.slice(before);for(const o of made){o.removeFromParent();g.add(o);const ix=staticMeshes.indexOf(o);if(ix>=0)staticMeshes.splice(ix,1)}const model=chair(seat.x,seat.z,seat.chairRotation);seatGeometry.set(seat.id,{...seat,model})}
 cyl(0,.55,3,2,.8,black);cyl(0,1,3,2.1,.12,bronze);ring(0,1.1,3,1.7,.045,blueGlow);ring(0,1.15,3,1,.03,blueGlow);const holo=mesh(new T.IcosahedronGeometry(.8,0),new T.MeshBasicMaterial({color:'#6bd7df',wireframe:true}),0,1.9,3,root,false);
 text('Z U N O',0,6.4,-7.5,7);text('C O M M A N D   C E N T E R',0,5.5,-7.5,9);for(const s of [-1,1])tree(s*9,-5,1.25);
 // Meeting table and eight chairs.
 desk(-20,-23,10);box(-20,1.7,-23,9,.08,3.6,wood);for(let i=0;i<4;i++){chair(-24+i*2.6,-20.3);chair(-24+i*2.6,-25.7,Math.PI);cyl(-24+i*2.6,1.85,-22.6,.12,.23,cream)}
 // Coffee bar: wood fronts, brass foot rail, espresso machine, cups and glassware.
 box(0,1.5,-22,13,3,1.8,wood);box(0,3.08,-22,13.5,.2,2.2,mat('#d4c1a0',.25));box(0,.35,-20.9,12,.06,.06,glow);shelf(0,-27.6,14);for(let i=0;i<6;i++){const x=-5+i*2;cyl(x,.9,-19.3,.07,1.7,bronze);cyl(x,1.8,-19.3,.54,.2,cream);ring(x,1.1,-19.3,.35,.025,bronze)}box(-2,3.7,-22,2.3,1.1,1.1,mat('#aab3ac',.2,.8));box(-2,3.65,-21.4,1.7,.6,.1,black);for(let i=0;i<2;i++){rod([-2.5+i,3.7,-21.3],[-2.5+i,3.35,-21.1],.05,bronze);cyl(-2.5+i,3.24,-21.1,.16,.25,cream)}cyl(.3,3.65,-22,.25,.9,black);cyl(.3,4.2,-22,.3,.3,glass);for(let j=0;j<9;j++){cyl(2+j*.38,3.3,-22,.12,.28,cream);cyl(2+j*.38,3.45,-22,.1,.02,mat('#4b2b15'))}
 for(const x of [-4,0,4])lamp(x,-22,6.2);
 // Game room: display, two beanbags, sofa and game controller.
 sofa(20,-20,6);for(const x of [16,24]){ball(x,.7,-23,1.5,.85,1.35,mat(x===16?'#7e896a':'#c3af8b'));cyl(x,.6,-20.8,.7,.1,wood)}screen(20,3,-27.7,6,2.6,4);text('▷  PLAY / PAUSE',20,3,-27.5,4,'#a0d2ea');box(20,.7,-25.7,5,1.1,.8,wood);box(22,1.6,-25.5,.35,.75,.4,cream);ball(19,1.31,-25.6,.38,.1,.2,black);
 // Reception and limestone entry arch.
 for(const s of [-1,1]){rock(s*6.3,3.5,23,1.4,4.3,2);tree(s*10,20,1.1)}for(let i=0;i<9;i++){const a=i/8*Math.PI;rock(Math.cos(a)*6.3,6+Math.sin(a)*2.5,23,1.6,1.1,1.7)}
 cyl(0,1.05,27,3.5,2.1,wood);cyl(0,2.15,27,3.65,.15,mat('#e3d6ba',.25));ring(0,.2,27,3.52,.045,glow);screen(-.8,2.7,26.5,1.8,1.1,0);plant(2.5,27,.55,2.2);text('N E X A',0,6.1,24,5);text('S T U D I O',0,5.25,24,4);text('RECEPTION',0,1.3,30.52,3);
 for(let i=0;i<5;i++)box(0,-.35-i*.17,43+i*.6,13+i*.8,.3,.9,floor);
 const receptionChair=chair(receptionSeat.x,receptionSeat.z,Math.PI);seatGeometry.set(receptionSeat.id,{...receptionSeat,model:receptionChair});desk(0,22.8,3.5);{const operator=new T.Group();root.add(operator);operator.position.set(0,0,22.8);operator.rotation.y=Math.PI;const before=root.children.length;monitor(0,0,0);for(const o of root.children.slice(before)){o.removeFromParent();operator.add(o);const i=staticMeshes.indexOf(o);if(i>=0)staticMeshes.splice(i,1)}}
 // Private quiet room: mihrab arch, prayer mats, shoe shelf, ablution tap.
 box(-9,2.4,22,6,4.8,.3,wood);box(-9,2,22.2,2.3,3.8,.08,dark);const arch=mesh(new T.TorusGeometry(1.15,.055,7,32,Math.PI),glow,-9,3.3,22.35);for(const s of [-1,1])box(-9+s*1.15,1.7,22.35,.07,3.2,.06,glow);for(let i=0;i<3;i++){box(-10.5+i*1.5,.24,27,.95,.045,2.6,mat('#436652'));box(-10.5+i*1.5,.27,26.3,.65,.012,.08,bronze)}shelf(-11,23,1.3);box(-6.7,.5,29,.7,1,.9,cream);rod([-6.7,1.4,28.7],[-6.7,1.4,29],.04,bronze);
 // Owner's lounge and poolside deck.
 sofa(20,25,6);sofa(25,27,3,-Math.PI/2);cyl(20,.8,28,.95,.15,wood);cyl(20,.4,28,.08,.8,bronze);box(20,1.05,28,1.3,.04,.8,black);screen(20,1.5,27.8,1.3,.8,6);cyl(21,1,28,.14,.25,cream);shelf(20,21.1,9);lamp(25,24,4);tree(29,31,1.1);
 // Pool: recessed basin, transparent animated surface, caustics, stone waterfall.
 const poolPoints=[[-11,-3],[-8,-5],[-2,-5.2],[3,-4.5],[9,-5],[11.5,-2],[11,2],[7,4.5],[0,5],[-6,4],[-11,1]].map(([x,z])=>new T.Vector3(x,0,z));const curve=new T.CatmullRomCurve3(poolPoints,true,'catmullrom',.3);const edge=curve.getPoints(120);const poolShape=new T.Shape();poolShape.moveTo(edge[0].x,-edge[0].z);for(const p of edge.slice(1))poolShape.lineTo(p.x,-p.z);poolShape.closePath();const basin=new T.ShapeGeometry(poolShape,64);basin.rotateX(-Math.PI/2);mesh(basin,mat('#237278',.28,.25),15,.31,38);const rim=mesh(new T.TubeGeometry(curve,140,.28,8,true),cream,15,.5,38);
 const waterGeometry=new T.ShapeGeometry(poolShape,64);waterGeometry.rotateX(-Math.PI/2);const water=mesh(waterGeometry,new T.MeshPhysicalMaterial({color:'#1e9f9f',roughness:.12,metalness:.55,transparent:true,opacity:.82,clearcoat:1,clearcoatRoughness:.1}),15,.58,38,root,false);
 for(const [xx,zz] of [[3,33],[4,42],[25,33],[25,42]]){rock(xx,.45,zz,1.7,.7,1.3);plant(xx,zz,.6)}
 // Wavy caustic rings remain visible through the water.
 for(let i=0;i<30;i++){const r=ring(4+rnd()*22,.46,34+rnd()*8,.3+rnd()*.8,.013,mat('#92e0be',.3));r.scale.z=.5+rnd()}
 for(let i=0;i<6;i++)rock(29+rnd(),1.2+rnd()*2,35+i*1.4,1.4,2,1.3);
 const waterfall=mesh(new T.PlaneGeometry(1.5,3.2,8,20),new T.MeshPhysicalMaterial({color:'#b0eddd',transparent:true,opacity:.6,roughness:.15,metalness:.25,side:T.DoubleSide}),28.4,2.2,38,root,false);waterfall.rotation.y=-Math.PI/2;
 for(let i=0;i<3;i++){box(7+i*3,1,31,2.2,.35,4,cream);const back=box(7+i*3,1.65,29.8,2.2,1.5,.25,cream);back.rotation.x=-.35;box(7+i*3,.5,31,1.8,.9,2.5,wood)}
 // Trees, planters, recessed light trails and lush perimeter planting.
 for(const [x,z] of [[-12,-14],[12,-14],[-12,10],[12,15],[-15,34],[0,37],[-28,38],[30,-3],[-30,5]])tree(x,z,.7+rnd()*.3);
 for(let i=0;i<45;i++){const side=i%2?-1:1,x=side*(29+rnd()*2),z=-28+rnd()*69;plant(x,z,.6+rnd()*.45);if(i%3===0)lantern(x-side,z)}
 for(let i=0;i<11;i++){for(const s of [-1,1]){box(s*12,.15,-17+i*5,.06,.045,3.7,glow);lantern(s*11,-17+i*5)}}
 for(let i=0;i<12;i++){plant(-5+rnd()*10,-12+rnd()*2,.55);plant(-5+rnd()*10,16+rnd()*2,.55)}
 // Rounded, fully volumetric stylized figures. PNGs remain portrait/reference assets, never billboards.
 const skin=mat('#e5b28b',.75),hair=mat('#3c2b21',.9),eye=mat('#171e1c',.2),shoe=mat('#e6ddca',.7);
 function character(a,seat){
  const g=new T.Group();g.position.set(seat.x,0,seat.z);g.rotation.y=seat.rotation;root.add(g);
  const body=new T.Group();body.name='UpperBody';g.add(body);
  const cloth=mat(a.color,.9),pants=mat('#4a4e48',.9);
  const rig={body,legs:[],knees:[],arms:[],elbows:[],hands:[]};
  ball(0,1.85,0,.43,.55,.28,cloth,body);box(0,2.18,.1,.5,.11,.4,cloth,body);
  for(const side of [-1,1]){
   const leg=new T.Group();leg.name=side<0?'LegL':'LegR';leg.position.set(side*.22,1.43,0);g.add(leg);
   box(0,-.25,0,.31,.5,.26,pants,leg);
   const knee=new T.Group();knee.name=side<0?'KneeL':'KneeR';knee.position.y=-.5;leg.add(knee);
   box(0,-.375,0,.29,.75,.34,pants,knee);box(0,-.805,.13,.38,.25,.62,shoe,knee);
   rig.legs.push(leg);rig.knees.push(knee);
   const arm=new T.Group();arm.position.set(side*.49,2.25,0);body.add(arm);
   ball(0,-.2,0,.17,.25,.17,cloth,arm);
   const elbow=new T.Group();elbow.position.y=-.4;arm.add(elbow);
   ball(0,-.16,0,.15,.21,.15,cloth,elbow);
   const hand=new T.Group();hand.position.set(0,-.35,0);elbow.add(hand);ball(0,0,0,.13,.14,.12,skin,hand);
   rig.arms.push(arm);rig.elbows.push(elbow);rig.hands.push(hand);
  }
  const head=new T.Group();head.position.y=2.75;body.add(head);rig.head=head;
  ball(0,0,0,.61,.64,.52,skin,head);
  for(const side of [-1,1]){ball(side*.59,0,0,.14,.2,.14,skin,head);ball(side*.22,.06,.47,.16,.2,.09,shoe,head);ball(side*.21,.05,.55,.09,.13,.035,eye,head);ball(side*.19,.1,.58,.027,.038,.02,shoe,head)}
  ball(0,-.1,.53,.1,.1,.09,skin,head);ball(0,-.27,.48,.12,.035,.025,hair,head);ball(0,.47,-.04,.61,.25,.52,hair,head);
  for(let i=0;i<11;i++){const angle=i*2.4;ball(Math.cos(angle)*.44,.35+rnd()*.16,Math.sin(angle)*.4,.2,.17,.21,hair,head)}
  if(['beanie','cap','hood'].includes(a.style)){ball(0,.6,-.02,.64,.29,.54,cloth,head);if(a.style==='cap')box(0,.46,.55,.85,.06,.55,cloth,head);if(a.style==='beanie')for(let i=0;i<11;i++)box(-.5+i*.1,.51,.43,.035,.22,.05,cream,head)}
  if(['glasses','goggles'].includes(a.style))for(const side of [-1,1])mesh(new T.TorusGeometry(.21,.025,7,20),bronze,side*.23,a.style==='glasses'?.05:.53,a.style==='glasses'?.56:.4,head);
  if(a.style==='headphones'){for(const side of [-1,1])ball(side*.62,.05,0,.13,.28,.24,black,head);mesh(new T.TorusGeometry(.66,.06,8,20,Math.PI),black,0,.08,0,head)}
  const cup=new T.Group();rig.hands[1].add(cup);cyl(0,.08,0,.1,.18,cream,.1,cup);cyl(0,.175,0,.085,.005,mat('#4b2b15'),.085,cup);mesh(new T.TorusGeometry(.075,.02,6,12),cream,.12,.08,0,cup);cup.visible=false;rig.cup=cup;
  const book=new T.Group();rig.hands[0].add(book);box(0,.05,.1,.48,.08,.38,mat('#dfd6ba'),book);box(0,.1,.1,.5,.025,.4,green,book);book.visible=false;rig.book=book;
  const pen=new T.Group();rig.hands[1].add(pen);cyl(0,0,.13,.025,.25,bronze,.025,pen);pen.visible=false;rig.pen=pen;
  box(0,1.84,-.32,.6,.74,.25,mat('#72654b'),body);
  const actor={id:a.id,name:a.name,zone:a.zone,group:g,rig,seat,workActivity:workProfiles[a.id]||'read',firstWork:firstWorkSeconds[a.id]??200,breakPreference:breakPreferences[a.id]||'reading'};
  actors.push(actor);return actor;
 }
 const homes=assignHomeSeats();for(const a of team){const seat=homes.get(a.id);character(a,seat);if(['draw','write','plan'].includes(workProfiles[a.id]))box(seat.x,1.69,seat.z-.65,1.05,.035,.65,mat(workProfiles[a.id]==='draw'?'#b4d5cc':'#eee5cc'))}
 const owner=character({id:18,name:'Zulnan',zone:13,color:'#e0d8c4',style:'glasses'},ownerSeat);owner.workActivity='read';seatGeometry.set(ownerSeat.id,{...ownerSeat});
 const architecture=addGrottoArchitecture(root,{stone,bronze,glow,wood});
 // Batch only meshes sharing the same moving joint. Never merge knees/elbows into a static torso.
 for(const actor of actors){const parts=[];actor.group.traverse(o=>{if(o.isGroup)parts.push(o)});for(const part of parts){const batches=new Map();for(const o of [...part.children]){if(!o.isMesh)continue;o.updateMatrix();const key=o.material.uuid;if(!batches.has(key))batches.set(key,{material:o.material,geometries:[]});const g=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();g.applyMatrix4(o.matrix);batches.get(key).geometries.push(g);o.removeFromParent()}for(const {material,geometries} of batches.values()){const g=mergeGeometries(geometries,false);if(g){const m=new T.Mesh(g,material);m.castShadow=true;m.receiveShadow=true;part.add(m)}for(const g of geometries)g.dispose()}}}
 // Batch opaque static meshes by material, preserving actual 3D geometry while reducing draw calls.
 root.updateMatrixWorld(true);root.traverse(o=>{if(o.isMesh&&o.parent!==root&&!actors.some(a=>{let p=o.parent;while(p){if(p===a.group||p.userData.dynamic)return true;p=p.parent}return false})&&!o.material.transparent)staticMeshes.push(o)});const groups=new Map();for(const o of staticMeshes){if(!o.parent||o.material.transparent)continue;const key=o.material.uuid;if(!groups.has(key))groups.set(key,{m:o.material,geo:[]});const non=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();non.applyMatrix4(o.matrixWorld);groups.get(key).geo.push(non);o.removeFromParent()}
 for(const {m,geo} of groups.values()){const g=mergeGeometries(geo,false);if(g){const o=new T.Mesh(g,m);o.castShadow=true;o.receiveShadow=true;root.add(o)}for(const g of geo)g.dispose()}
 return {root,actors,seats:seatGeometry,architecture,water,holo,waterfall,update(t){const p=water.geometry.attributes.position;for(let i=0;i<p.count;i++)p.setY(i,Math.sin(p.getX(i)*2+t)*.035+Math.sin(p.getZ(i)*3-t*.8)*.025);p.needsUpdate=true;water.geometry.computeVertexNormals();holo.rotation.y=t*.2;waterfall.material.opacity=.42+Math.sin(t*5)*.12;}};
}
