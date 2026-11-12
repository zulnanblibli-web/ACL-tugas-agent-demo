import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {workSeats} from './data.js';
// All architectural assets and textures are procedural; metres are scene units.
export function makeOffice(scene,screens=null){
 const seatList=Object.entries(workSeats()).filter(([,s])=>s.desk);
 const seatAt=(x,z)=>seatList.find(([,s])=>Math.abs(s.pos[0]-x)<.05&&Math.abs(s.pos[2]-z)<.05)?.[0]||null;
 const floors=[0,6,12].map(y=>{const g=new THREE.Group();g.position.y=y;scene.add(g);return g;});
 function texture(type){const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');let seed=47;const rand=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};
 ctx.fillStyle=type==='wood'?'#c9ad83':type==='tile'?'#cbcfc7':'#ede9dc';ctx.fillRect(0,0,512,512);
 if(type==='wood'){for(let i=0;i<1400;i++){ctx.strokeStyle=`rgba(91,61,32,${rand()*.15})`;let y=rand()*512;ctx.beginPath();ctx.moveTo(0,y);ctx.bezierCurveTo(180,y+rand()*8,300,y-4,512,y+rand()*5);ctx.stroke();}for(let y=0;y<512;y+=64){ctx.fillStyle='#7a604032';ctx.fillRect(0,y,512,2);}}
 else if(type==='tile'){ctx.strokeStyle='#f6f5e8';ctx.lineWidth=3;for(let n=0;n<=512;n+=128){ctx.beginPath();ctx.moveTo(n,0);ctx.lineTo(n,512);ctx.moveTo(0,n);ctx.lineTo(512,n);ctx.stroke();}}
 else{for(let i=0;i<4000;i++){ctx.fillStyle=`rgba(91,75,48,${rand()*.08})`;ctx.fillRect(rand()*512,rand()*512,rand()*2+1,1);}}
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(type==='tile'?7:2,type==='tile'?6:2);return t;}
 const wood=new THREE.MeshStandardMaterial({map:texture('wood'),roughness:.55,color:'#dfc79f'}),tile=new THREE.MeshStandardMaterial({map:texture('tile'),roughness:.82}),stone=new THREE.MeshStandardMaterial({map:texture('stone'),color:'#e5dfcc',roughness:.9});
 wood.userData.themeRole='wood';tile.userData.themeRole='tile';stone.userData.themeRole='stone';
 wood.bumpMap=wood.map;wood.bumpScale=.012;stone.bumpMap=stone.map;stone.bumpScale=.008;tile.bumpMap=tile.map;tile.bumpScale=.006;
 const clothCanvas=document.createElement('canvas');clothCanvas.width=clothCanvas.height=128;const cloth=clothCanvas.getContext('2d');cloth.fillStyle='#aaa';cloth.fillRect(0,0,128,128);for(let i=0;i<128;i+=4){cloth.fillStyle=i%8===0?'#bbb':'#888';cloth.fillRect(i,0,1,128);cloth.fillRect(0,i,128,1);}const weave=new THREE.CanvasTexture(clothCanvas);weave.wrapS=weave.wrapT=THREE.RepeatWrapping;weave.repeat.set(3,3);
 const cache=new Map();const mat=(color,roughness=.8)=>{if(!cache.has(color))cache.set(color,new THREE.MeshStandardMaterial({color,roughness,bumpMap:['#c0c6b5','#bcbca9','#c2bfae','#c5c7b6','#b6be9f','#d2cbb3'].includes(color)?weave:null,bumpScale:.009}));return cache.get(color);};
 const glass=new THREE.MeshPhysicalMaterial({color:'#bdd4cc',transparent:true,opacity:.19,roughness:.15,metalness:.05,depthWrite:false});
 function box(g,x,y,z,w,h,d,m){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),typeof m==='string'?mat(m):m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;}
 function cyl(g,x,y,z,r,h,m,rt=r,n=12){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(rt,r,h,n),typeof m==='string'?mat(m):m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;}
 function plant(g,x,z,size=1,y=0){cyl(g,x,y+.28*size,z,.28*size,.56*size,'#c8bea5',.36*size);cyl(g,x,y+1.0*size,z,.035*size,1.3*size,'#71694a',.025*size,6);for(let i=0;i<9;i++){let a=i*2.399;let leaf=new THREE.Mesh(new THREE.SphereGeometry(1,10,6),mat(i%2?'#637d46':'#456543'));leaf.scale.set(.19*size,.52*size,.10*size);leaf.position.set(x+Math.cos(a)*.32*size,y+(1.0+i*.075)*size,z+Math.sin(a)*.32*size);leaf.rotation.set(.4,0,a);leaf.castShadow=true;g.add(leaf);}}
 function rounded(g,x,y,z,w,h,d,color,r=.10){const shape=new THREE.Shape();const a=-w/2,b=-d/2;shape.moveTo(a+r,b);shape.lineTo(a+w-r,b);shape.quadraticCurveTo(a+w,b,a+w,b+r);shape.lineTo(a+w,b+d-r);shape.quadraticCurveTo(a+w,b+d,a+w-r,b+d);shape.lineTo(a+r,b+d);shape.quadraticCurveTo(a,b+d,a,b+d-r);shape.lineTo(a,b+r);shape.quadraticCurveTo(a,b,a+r,b);const mesh=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:h,bevelEnabled:false,curveSegments:4}),typeof color==='string'?mat(color):color);mesh.rotation.x=-Math.PI/2;mesh.position.set(x,y-h/2,z);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;}
 function chair(g,x,z,rot=0,color='#c0c6b5',y=0){const c=new THREE.Group();c.position.set(x,y,z);c.rotation.y=rot;g.add(c);rounded(c,0,.52,0,.70,.19,.69,color,.13);const back=rounded(c,0,.92,-.29,.70,.72,.18,color,.08);back.rotation.z=.04;box(c,-.34,.73,0,.08,.10,.52,color);box(c,.34,.73,0,.08,.10,.52,color);cyl(c,0,.26,0,.045,.4,'#5f665f',.045,8);for(let i=0;i<4;i++){const a=i*Math.PI/2;box(c,Math.cos(a)*.19,.075,Math.sin(a)*.19,.07,.07,.07,'#424b45');}box(c,0,.12,0,.62,.045,.06,'#778078');box(c,0,.12,0,.06,.045,.62,'#778078');}
 function monitor(g,x,z,y=1.45,rot=0,layar=null){const c=new THREE.Group();c.position.set(x,y,z);c.rotation.y=rot;g.add(c);box(c,0,0,0,.86,.54,.055,'#4b5650');box(c,0,.01,.034,.78,.46,.008,layar||'#aabfbb');box(c,0,-.36,0,.04,.22,.04,'#707c72');box(c,0,-.47,.02,.32,.025,.23,'#758174');box(c,0,-.44,.42,.50,.025,.18,'#d4d6c9');if(!layar)for(let i=0;i<3;i++)box(c,-.15,.12-i*.075,.042,.32-i*.06,.018,.008,i===0?'#ecdfb6':'#d8e4d7');}
 function desk(g,x,z,rot=0){const c=new THREE.Group();c.position.set(x,0,z);c.rotation.y=rot;g.add(c);box(c,0,1.02,0,3.7,.12,1.65,wood);for(const sx of [-1.6,1.6])for(const sz of [-.60,.60])box(c,sx,.50,sz,.07,1,.07,'#eeeae0');box(c,0,1.31,0,3.55,.5,.055,'#b3c3b6');for(const side of [-1,1])for(const sx of [-.95,.95]){monitor(c,sx,side*.20,1.49,side<0?Math.PI:0,screens?screens.untuk(seatAt(x+sx,z+side*1.26)):null);chair(c,sx,side*1.26,side<0?0:Math.PI);box(c,sx+.45,1.10,side*.50,.26,.04,.32,'#eee5cd');}plant(c,1.53,.12,.25,1.08);}
 function sofa(g,x,z,rot=0,color='#c4c2af',width=2.5){const c=new THREE.Group();c.userData.workspaceSofa={width,color};c.position.set(x,0,z);c.rotation.y=rot;g.add(c);box(c,0,.35,0,width,.35,.95,color);box(c,0,.80,-.46,width,.92,.20,color);for(const s of [-1,1])box(c,s*(width/2-.1),.58,0,.2,.55,1.1,color);for(let i=0;i<3;i++)box(c,-width*.30+i*width*.30,.57,.04,width*.28,.15,.84,color);box(c,-width*.27,.90,-.19,.46,.38,.17,'#e6dec7');}
 function table(g,x,z,r=.8){cyl(g,x,.69,z,r,.11,wood);cyl(g,x,.33,z,.10,.65,'#5d6c5c',.08);}
 function rail(g,x,z,w){box(g,x,1.01,z,w,1.8,.05,glass);box(g,x,1.9,z,w,.055,.055,'#a5ad99');for(let i=-w/2;i<=w/2;i+=2)box(g,x+i,.95,z,.04,1.9,.04,'#a0aa98');}
 const stairs=[];
 function stairFlight(level){const pieces=[];for(let i=0;i<18;i++){const geometry=new THREE.BoxGeometry(2,.32,.48);geometry.translate(13.2,i*.32+.16,-2-i*.47);pieces.push(geometry);}const flight=new THREE.Mesh(mergeGeometries(pieces),wood);pieces.forEach(g=>g.dispose());flight.position.y=level*6;flight.castShadow=true;flight.receiveShadow=true;flight.name=`Stairs ${level+1}–${level+2}`;scene.add(flight);stairs.push(flight);}
 function bookshelf(g,x,z,w=6){box(g,x,1.9,z,w,3.8,.45,wood);for(let y=.5;y<3.8;y+=.65){box(g,x,y,z+.28,w,.06,.65,wood);for(let i=0;i<Math.floor(w*6);i++){const h=.28+(i%4)*.055;box(g,x-w/2+.15+i*.16,y+h/2+.04,z+.25,.11,h,.25,['#7c8a69','#c1a075','#dfd5b9','#9baeb0','#8c6955'][i%5]);}}}
 // Ground: cutaway walls, large windows, reading library and private meeting room.
 const ground=floors[0];box(ground,0,-.32,0,30,.65,24,stone);box(ground,0,.02,0,29.7,.06,23.7,tile);
 box(ground,0,2.2,-11.8,30,4.4,.22,'#e6e2d5');box(ground,-14.8,2.2,0,.22,4.4,24,'#e6e2d5');
 for(let x=-13;x<15;x+=3){box(ground,x,2.5,-11.62,2.7,3.6,.07,glass);box(ground,x-1.4,2.5,-11.55,.065,3.8,.10,wood);box(ground,x,.66,-11.45,2.8,.11,.42,wood);}
 for(let z=-9;z<12;z+=3){box(ground,-14.62,2.5,z,.07,3.6,2.7,glass);box(ground,-14.55,2.5,z-1.4,.10,3.8,.065,wood);}
 // Structural details and understated division rugs.
 box(ground,-6.6,.07,3,12,.035,12,'#547b80');box(ground,7.1,.07,3,11.8,.035,12,'#778a71');
 for(const x of [-8.4,-3.6,4.5,9.3])for(const z of [0,4.8])desk(ground,x,z);
 for(let z=-9;z<11;z+=3.8)plant(ground,-13.8,z,.9);
 for(let x=-11;x<14;x+=3.6)plant(ground,x,10.8,.8);
 // Lounge and orange accent sofa like reference 1.
 sofa(ground,-9,8.5,0,'#d49555',3.2);sofa(ground,-12,7,Math.PI/2,'#c5c7b6',2.3);table(ground,-10.2,7,.7);plant(ground,-12.9,9.3,.7);
 sofa(ground,11,8.6,0,'#ce7954',2.8);table(ground,10.7,7.2,.7);bookshelf(ground,2.5,-11.2,5.6);plant(ground,13.7,-10,1.2);
 for(const x of [1.3,3.7]){chair(ground,x,-8.2,0,'#819b9c');table(ground,x,-6.8,.55);}
 // Meeting room with dark panels, a U-shaped timber table, inset lights, plants.
 const meeting=new THREE.Group();meeting.position.set(-8,0,-7.6);ground.add(meeting);
 box(meeting,0,.08,0,10.4,.06,6.7,wood);box(meeting,0,1.9,-3.4,10.5,3.8,.12,'#3f4a42');
 for(let x=-4.9;x<5;x+=.32)box(meeting,x,1.9,-3.30,.045,3.75,.06,'#727963');
 box(meeting,0,2.1,-3.15,3.9,2.05,.09,'#d8decf');box(meeting,0,2.05,-3.09,3.7,1.86,.02,'#eaeadb');
 for(const x of [-4.15,4.15]){box(meeting,x,2.3,-3.1,.13,.65,.11,new THREE.MeshStandardMaterial({color:'#fff1bc',emissive:'#f5cc81',emissiveIntensity:1.3}));plant(meeting,x,-2.6,.65);}
 const u=new THREE.Shape();u.moveTo(-3.4,2.2);u.lineTo(-3.4,-1.9);u.quadraticCurveTo(-3.4,-2.7,-2.6,-2.7);u.lineTo(2.6,-2.7);u.quadraticCurveTo(3.4,-2.7,3.4,-1.9);u.lineTo(3.4,2.2);u.lineTo(2.3,2.2);u.lineTo(2.3,-1.6);u.lineTo(-2.3,-1.6);u.lineTo(-2.3,2.2);u.closePath();
 for(const [height,depth,material] of [[.88,.14,wood],[.06,.82,mat('#444d43')]]){const mesh=new THREE.Mesh(new THREE.ExtrudeGeometry(u,{depth,bevelEnabled:false,curveSegments:12}),material);mesh.rotation.x=-Math.PI/2;mesh.position.y=height;mesh.castShadow=true;mesh.receiveShadow=true;meeting.add(mesh);}
 for(const side of [-1,1])for(let i=0;i<6;i++){const z=-1.85+i*.72;chair(meeting,side*4,z,side>0?-Math.PI/2:Math.PI/2,'#bcbca9');box(meeting,side*2.85,1.04,z,.63,.025,.50,'#e4e1cb');box(meeting,side*2.50,1.07,z,.08,.045,.21,'#5a655b');cyl(meeting,side*2.42,1.14,z,.022,.17,'#4e574c',.018,6);cyl(meeting,side*3.05,1.12,z-.35,.055,.18,'#d2dbcd');}
 for(const x of [-2.5,-1.5,-.5,.5,1.5,2.5]){chair(meeting,x,3.45,Math.PI,'#c2bfae');box(meeting,x,1.04,2.15,.7,.025,.50,'#e4e1cb');}
 box(meeting,0,.35,0,1.4,.7,1.4,wood);plant(meeting,0,0,.67,.7);
 // Side glass partition, open entrance facing the central promenade.
 box(meeting,5.25,1.55,-.7,.04,3.1,5.5,glass);box(meeting,5.25,0,-.7,.07,.08,5.5,'#939d88');
 // Timber stairs: visual connection to mezzanine. Floors can be isolated for cutaway navigation.
 stairFlight(0);
 // Mezzanine, 3 distinct rooms.
 const mid=floors[1];box(mid,0,-.20,-5,30,.4,13,stone);box(mid,0,.03,-5,29.8,.06,12.8,wood);box(mid,0,1.7,-11.4,30,3.4,.15,'#dedfd2');/* Front edge connects directly to the executive wing. */
 for(const x of [-4.8,5]){box(mid,x,1.6,-6,.09,3.2,10,glass);for(let z=-10;z<-1;z+=1)box(mid,x,1.6,z,.12,3.2,.06,wood);}
 sofa(mid,-10,-7,0,'#b6be9f',3.5);sofa(mid,-11,-3,Math.PI/2,'#d2cbb3',2.5);table(mid,-9,-4.7,1);box(mid,-8,.08,-5,6,.06,5,'#d4d3bd');plant(mid,-13,-10,1.1);bookshelf(mid,-10,-11,5);
 sofa(mid,0,-4.2,Math.PI,'#c28c65',3.2);plant(mid,3.8,-10,1);
 chair(mid,8,-6,.5,'#c6b5a2');chair(mid,11,-6,-.5,'#b4c1aa');table(mid,9.5,-5.2,.65);for(const z of [-9,-7,-5])plant(mid,13.5,z,1.1);box(mid,10,.1,-6,6,.05,6,'#b6bea6');
 stairFlight(1);
 // Terrace: pool, loungers, coffee bar and pergola.
 const top=floors[2];for(const [x,z,w,d]of [[-13.1,-5,3.8,13],[7.2,-5,15.6,13],[-6,-10,10.8,2.7],[-6,-.1,10.8,3.1]]){box(top,x,-.20,z,w,.4,d,stone);box(top,x,.03,z,w-.05,.06,d-.05,wood);}rail(top,0,1.45,30);rail(top,0,-11.4,30);
 for(const x of [-12,0])for(const z of [-8,-3]){box(top,x,.36,z,1,.25,2.3,'#dfd8be');box(top,x,.6,z-.8,1,.6,.25,'#e6dfc9');}
 for(const x of [4,13])for(const z of [-10,0])box(top,x,1.8,z,.13,3.6,.13,wood);
 for(let z=-10;z<1;z+=.8)box(top,8.5,3.65,z,10,.10,.13,wood);
 box(top,8.8,.5,-9,6,1,1.2,'#c1b597');box(top,8.8,1.04,-9,6.2,.12,1.4,stone);
 for(const x of [6,10]){table(top,x,-4,.7);chair(top,x-.9,-4,Math.PI/2,'#a4ae90');chair(top,x+.9,-4,-Math.PI/2,'#a4ae90');}
 for(let x=-13;x<15;x+=3.2){plant(top,x,-10.5,.8);plant(top,x,.7,.6);}
 // Merge static opaque geometry by material within each floor for browser performance.
 for(const floor of floors){floor.updateMatrixWorld(true);const groups=new Map(),remove=[];floor.traverse(o=>{if(o.isMesh&&!o.material.transparent&&!o.parent?.userData.workspaceSofa){let geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(new THREE.Matrix4().copy(floor.matrixWorld).invert().multiply(o.matrixWorld));if(!groups.has(o.material))groups.set(o.material,[]);groups.get(o.material).push(geo);remove.push(o);}});for(const m of remove){m.removeFromParent();m.geometry.dispose();}for(const [material,geoms]of groups){const mesh=new THREE.Mesh(mergeGeometries(geoms),material);mesh.castShadow=true;mesh.receiveShadow=true;floor.add(mesh);geoms.forEach(g=>g.dispose());}}
 return {floors,stairs};
}
