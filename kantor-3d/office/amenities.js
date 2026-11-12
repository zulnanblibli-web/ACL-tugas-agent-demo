import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
// Local procedural props: no external assets or product-service integrations.
export function addAmenities(floors){
 const cache=new Map(),mat=(color,metalness=0,roughness=.65)=>{const key=[color,metalness,roughness].join();if(!cache.has(key))cache.set(key,new THREE.MeshStandardMaterial({color,metalness,roughness}));return cache.get(key);};
 const steel=mat('#a6b2b1',.85,.23),black=mat('#202c30',.25,.4),white=mat('#e8e5da',.05,.3),wood=mat('#775c40');
 wood.userData.themeRole='wood';
 const glass=new THREE.MeshPhysicalMaterial({color:'#dcebe3',transparent:true,opacity:.48,roughness:.08,metalness:.08});
 const features=[];
 function box(g,x,y,z,w,h,d,m,r=.02){const mesh=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),typeof m==='string'?mat(m):m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;}
 function cyl(g,x,y,z,r,h,m,top=r){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(top,r,h,20),m);mesh.position.set(x,y,z);mesh.castShadow=true;g.add(mesh);return mesh;}
 function ring(g,x,y,z,r,t,m,rotation=[Math.PI/2,0,0]){const mesh=new THREE.Mesh(new THREE.TorusGeometry(r,t,6,20),m);mesh.position.set(x,y,z);mesh.rotation.set(...rotation);g.add(mesh);return mesh;}
 function screen(g,title,x,y,z,w,h){const canvas=document.createElement('canvas');canvas.width=768;canvas.height=432;const c=canvas.getContext('2d');const gradient=c.createLinearGradient(0,0,768,432);gradient.addColorStop(0,'#13232d');gradient.addColorStop(1,'#356b71');c.fillStyle=gradient;c.fillRect(0,0,768,432);c.strokeStyle='#95cbb4';c.lineWidth=3;for(let i=0;i<9;i++){c.beginPath();c.moveTo(0,280+i*15);c.bezierCurveTo(240,100+i*23,430,390-i*20,768,90+i*26);c.stroke();}c.fillStyle='#e7edce';c.textAlign='center';c.font='600 50px Arial';c.fillText(title,384,185);c.font='20px Arial';c.fillText('NEXA • PLAY LOUNGE',384,230);const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;box(g,x,y,z,w+.13,h+.13,.10,black);const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({map:t,emissiveMap:t,emissive:'#ffffff',emissiveIntensity:.38,roughness:.23}));mesh.position.set(x,y,z+.062);g.add(mesh);}
 function plaque(g,text,x,y,z,w=2.8){const c=document.createElement('canvas');c.width=768;c.height=192;const ctx=c.getContext('2d');ctx.fillStyle='#243a34';ctx.fillRect(0,0,768,192);ctx.fillStyle='#e1d2ae';ctx.font='44px Arial';ctx.textAlign='center';ctx.fillText(text,384,110);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,w/4),new THREE.MeshStandardMaterial({map:t}));mesh.position.set(x,y,z);mesh.userData.sign=text;g.add(mesh);}
 function cup(g,x,y,z,{clear=false,coffee=true}={}){
  const profile=[new THREE.Vector2(.055,0),new THREE.Vector2(.085,.015),new THREE.Vector2(.095,.17),new THREE.Vector2(.078,.17),new THREE.Vector2(.067,.032),new THREE.Vector2(.055,.025)];const mesh=new THREE.Mesh(new THREE.LatheGeometry(profile,20),clear?glass:white);mesh.position.set(x,y,z);g.add(mesh);ring(g,x+.115,y+.09,z,.055,.012,clear?glass:white,[0,0,0]);cyl(g,x,y-.013,z,.145,.018,white);if(coffee)cyl(g,x,y+.135,z,.075,.008,mat('#4b2e1a',0,.22));return mesh;
 }
 // Espresso station, brew groups, portafilters, grinder, milk jug, cups and glasses.
 const coffee=new THREE.Group();coffee.position.y=-.95;floors[2].add(coffee);box(coffee,8.0,2.36,-9,1.75,.64,.70,steel,.06);box(coffee,8,2.72,-9,1.9,.10,.77,black);box(coffee,8,2.12,-8.63,1.67,.07,.51,steel);box(coffee,8,2.14,-8.59,1.4,.018,.34,black);
 for(const x of [7.55,8.42]){cyl(coffee,x,2.36,-8.58,.10,.18,steel);box(coffee,x,2.25,-8.36,.05,.05,.36,black);cup(coffee,x,2.18,-8.47);cyl(coffee,x,2.61,-8.62,.07,.025,black).rotation.x=Math.PI/2;}
 for(let i=0;i<12;i++)box(coffee,7.38+i*.11,2.159,-8.59,.018,.01,.30,steel,.003);
 box(coffee,9.43,2.32,-9,.48,.53,.46,black);cyl(coffee,9.43,2.72,-9,.19,.30,glass,.23);cyl(coffee,9.43,2.61,-9,.17,.08,mat('#473524'));cyl(coffee,9.43,2.89,-9,.24,.025,black);box(coffee,9.43,2.36,-8.68,.13,.12,.22,steel);
 const jug=cyl(coffee,10.33,2.21,-8.75,.11,.30,steel,.15);ring(coffee,10.48,2.25,-8.75,.065,.012,steel,[0,0,0]);
 for(let i=0;i<4;i++){cup(coffee,6.25+i*.32,2.12,-9.05,{clear:i>1,coffee:i===0});cup(coffee,6.2+i*.32,2.12,-9.55,{coffee:false});}
 for(const x of [6,10]){cup(floors[2],x, .76,-4,{clear:x===10});box(floors[2],x+.28,.77,-4.1,.26,.035,.24,white);}
 plaque(coffee,'NEXA COFFEE',8.6,3.1,-10.86,3.2);features.push('espresso-machine','coffee-cups','glassware');
 // TV lounge: large TV, soundbar, two consoles and handheld controllers.
 const game=floors[1];screen(game,'PLAY / PAUSE',0,2.35,-11.22,3.65,2.05);box(game,0,.70,-10.6,4.2,1.2,.70,wood);box(game,0,1.36,-10.6,4.4,.10,.79,black);box(game,0,1.52,-10.66,1.9,.12,.17,black);
 box(game,1.30,1.84,-10.53,.12,.86,.48,white,.06);box(game,1.63,1.84,-10.53,.12,.86,.48,white,.06);box(game,1.465,1.84,-10.53,.20,.82,.40,black,.035);box(game,1.46,1.90,-10.30,.018,.55,.016,mat('#4983a6',.3,.3),.003);
 function controller(g,x,y,z){box(g,x,y,z,.34,.10,.18,white,.04);for(const dx of [-.13,.13])box(g,x+dx,y-.035,z+.06,.10,.13,.11,white,.035);for(const dx of [-.07,.07])cyl(g,x+dx,y+.06,z,.028,.018,black);for(const dx of [-.12,.12])cyl(g,x+dx,y+.06,z-.05,.018,.014,black);}
 controller(game,-.75,1.46,-10.5);controller(game,-1.25,1.46,-10.5);
 // Two detailed gaming PCs with monitors, RGB fan rings, keyboard and mouse.
 for(const x of [-3.3,3.3]){
  box(game,x,1.0,-8.7,2.3,.12,1.05,wood);for(const dx of [-.95,.95])box(game,x+dx,.5,-8.7,.07,1,.07,black);
  screen(game,'NEXA PLAY',x,1.63,-8.92,1.24,.72);box(game,x,1.20,-8.95,.035,.36,.035,steel);box(game,x,1.08,-8.95,.45,.03,.25,black);
  box(game,x+.84,1.43,-8.55,.38,.72,.59,black,.045);box(game,x+.84,1.43,-8.24,.31,.64,.015,glass,.01);for(let j=0;j<3;j++)ring(game,x+.84,1.21+j*.22,-8.22,.074,.012,mat(['#77b9a5','#8a9fcd','#d5b873'][j],.1,.35),[0,0,0]);
  box(game,x-.08,1.10,-8.37,.79,.035,.22,black);for(let j=0;j<8;j++)box(game,x-.38+j*.085,1.122,-8.37,.055,.006,.16,mat('#8bbdaf'),.002);box(game,x+.51,1.11,-8.36,.11,.055,.17,black,.025);box(game,x,.55,-7.65,.76,.18,.72,black,.07);box(game,x,1.1,-7.28,.78,1.05,.18,black,.07);box(game,x,1.11,-7.17,.45,.40,.025,mat('#557f78'));cyl(game,x,.27,-7.65,.045,.48,steel);box(game,x,.10,-7.65,.75,.04,.06,steel);box(game,x,.10,-7.65,.06,.04,.75,steel);
 }
 box(game,0,.57,-7.1,2.2,.12,1.0,wood);for(const x of [-.9,.9])box(game,x,.28,-7.1,.06,.55,.06,black);controller(game,-.35,.68,-7.1);controller(game,.35,.68,-7.1);
 plaque(game,'GAME ROOM',0,3.7,-11.30,2.5);features.push('tv','gaming-pcs','playstation-style-console','controllers');
 // Dedicated prayer room, separate from social / game spaces.
 const prayer=floors[0];box(prayer,9.45,.07,-7.25,6.1,.08,7.7,mat('#d9d0b8'));box(prayer,6.4,1.65,-7.25,.13,3.3,7.7,wood);box(prayer,9.45,1.65,-11.10,6.1,3.3,.12,mat('#d3c5a5'));
 for(const [x,w] of [[7.2,1.6],[11.4,2.2]])box(prayer,x,1.1,-3.4,w,2.2,.12,mat('#c6b99b'));box(prayer,9.05,2.4,-3.4,5.5,.16,.14,wood);
 box(prayer,9.4,1.2,-11.0,1.5,2.4,.1,mat('#b4a079'));plaque(prayer,'MUSHOLA',9.4,2.8,-10.91,2.5);
 for(let row=0;row<2;row++)for(let col=0;col<4;col++){const x=7.25+col*1.4,z=-9.1+row*2.35;box(prayer,x,.15,z,1.12,.035,1.92,mat('#58786c'));box(prayer,x,.173,z-.77,.87,.008,.025,mat('#d8c394'));for(const dx of [-.46,.46])box(prayer,x+dx,.173,z,.015,.008,1.74,mat('#d8c394'));}
 // Quran cabinet, shoe rack at entrance and a separate small ablution corner.
 box(prayer,6.95,.7,-10.1,.7,1.3,.60,wood);for(let i=0;i<4;i++)box(prayer,6.95,.35+i*.28,-10.1,.66,.04,.65,white);
 box(prayer,11.6,.37,-2.8,1.9,.70,.54,wood);for(let i=0;i<3;i++)box(prayer,11.6,.12+i*.27,-2.8,1.9,.035,.57,white);for(let i=0;i<4;i++)box(prayer,11+i*.38,.18,-2.8,.16,.09,.29,black,.025);
 box(prayer,7.0,.65,-4.15,1.0,1.1,.6,mat('#c9c8b8'));cyl(prayer,7.0,1.23,-4.15,.34,.12,white);box(prayer,7.0,1.46,-4.38,.035,.44,.035,steel);box(prayer,7.0,1.66,-4.25,.035,.035,.30,steel);
 plaque(prayer,'LEPAS ALAS KAKI',11.3,1.1,-3.31,1.8);features.push('mushola','prayer-mats','ablution-basin');
 // Sudut santai Zulnan (Owner) di lantai 3, antara kolam dan bar kopi: kursi pantai, payung, meja kecil + kopi.
 // Zulnan bukan agen operasional; ia hanya duduk bersantai di sini (tidak ikut simulasi kerja).
 const lounge=new THREE.Group();lounge.name='Sudut Zulnan';floors[2].add(lounge);
 const kayu=mat('#9a6b43',0,.6),kain=mat('#f1ebdd',0,.85),biru=mat('#2f6fb0',0,.7);
 box(lounge,3.2,.072,-7.7,3.5,.025,3.1,mat('#d8c7a6',0,.95),.01);
 for(const [lx,lz] of [[2.0,-7.95],[2.0,-7.25],[3.5,-7.95],[3.5,-7.25]])box(lounge,lx,.18,lz,.07,.26,.07,kayu,.01);
 box(lounge,2.75,.33,-7.6,1.75,.07,.82,kayu,.02);
 for(let i=0;i<5;i++)box(lounge,2.0+i*.37,.395,-7.6,.34,.07,.76,i%2?biru:kain,.02);
 const tilt=.75;const sandar=box(lounge,3.55+Math.sin(tilt)*.5,.38+Math.cos(tilt)*.5,-7.6,.09,1.0,.8,kayu,.02);sandar.rotation.z=-tilt;
 const bantal=box(lounge,3.49+Math.sin(tilt)*.5,.42+Math.cos(tilt)*.5,-7.6,.07,.92,.74,kain,.02);bantal.rotation.z=-tilt;
 box(lounge,3.55+Math.sin(tilt)*.98,.4+Math.cos(tilt)*.98,-7.6,.12,.14,.5,biru,.04).rotation.z=-tilt;
 cyl(lounge,3.45,.33,-6.62,.05,.6,kayu);cyl(lounge,3.45,.64,-6.62,.3,.05,mat('#efe9dc',.05,.35));cyl(lounge,3.45,.04,-6.62,.2,.04,kayu);
 cup(lounge,3.38,.67,-6.58);box(lounge,3.62,.675,-6.72,.2,.012,.14,white,.005);
 cyl(lounge,2.3,1.25,-8.75,.035,2.5,mat('#e8e2d4',.3,.4));
 for(let k=0;k<8;k++){const w=new THREE.Mesh(new THREE.CylinderGeometry(.04,1.3,.38,3,1,true,k*Math.PI/4,Math.PI/4),new THREE.MeshStandardMaterial({color:k%2?'#2f6fb0':'#f4efe4',roughness:.8,side:THREE.DoubleSide}));w.position.set(2.3,2.42,-8.75);w.castShadow=true;lounge.add(w);}
 cyl(lounge,2.3,.05,-8.75,.28,.08,mat('#5d5f5c',.2,.6));
 cyl(lounge,4.75,.45,-9.15,.025,.9,mat('#2b2f33',.3,.5));plaque(lounge,'SUDUT ZULNAN',4.75,1.05,-9.12,1.3);lounge.children.at(-1).rotation.y=Math.PI/4;
 features.push('owner-lounge','owner-beach-chair','owner-coffee');
 // Pose Zulnan: setengah berbaring di kursi pantai menghadap kolam, tangan santai.
 function seatOwner(model){const yaw=new THREE.Group();yaw.position.set(3.42,.62,-7.6);yaw.rotation.y=-Math.PI/2;lounge.add(yaw);const lean=new THREE.Group();lean.rotation.x=-tilt;yaw.add(lean);
  model.position.set(0,-1.05*.7,0);model.rotation.set(0,0,0);model.scale.setScalar(.7);lean.add(model);
  for(const n of ['LegL','LegR']){const leg=model.getObjectByName(n);if(leg)leg.rotation.x=-(Math.PI/2-tilt)+.06;}
  const kiri=model.getObjectByName('ArmL'),kanan=model.getObjectByName('ArmR');if(kiri){kiri.rotation.x=-.35;kiri.rotation.z=-.15;}if(kanan){kanan.rotation.x=-.55;kanan.rotation.z=.25;}
  return yaw;}
 return {features,seatOwner};
}
