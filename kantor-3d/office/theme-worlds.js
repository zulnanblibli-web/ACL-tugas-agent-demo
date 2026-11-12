import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// Two workspace themes with their own buildings (2026-11-09, Zulnan's reference images):
//  - "senja":  Nexa Office = luxury dusk tower (bronze fin bay, planted balconies, rooftop infinity pool,
//              palm podium, fountain, street and city). Nexa Studio = dark luxe interior (deep green,
//              brass, walnut, chandeliers, velvet).
//  - "langit": Nexa Office = sky penthouse on top of a tower (white marble terrace, turf, glass balustrade,
//              plunge pool, spiral stair around a tree, night city). Nexa Studio = bright open office (white,
//              light oak slats, black-framed glass, living wall, beige marble, black chairs).
// Everything is procedural and original: no logos, brand names or images from the references.
// The shared floor plan, rooms, stairs and agent routes are untouched; decoration stays off the aisles.

const rng=seed=>()=>{seed=seed*16807%2147483647;return seed/2147483647;};

function canvasTexture(w,h,draw,repeat=[1,1]){
 const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;draw(canvas.getContext('2d'),w,h);
 const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(...repeat);t.anisotropy=4;return t;
}

// One storey-high glass bay seen from outside at night: lit interior, ceiling downlights, furniture silhouettes.
function litBay({glass,glowTop,glowBottom,frame,seed}){
 return canvasTexture(512,512,(c,w,h)=>{const r=rng(seed);
  const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,glass[0]);g.addColorStop(1,glass[1]);c.fillStyle=g;c.fillRect(0,0,w,h);
  for(let col=0;col<4;col++){const x=col*128,lit=r()>.18;if(!lit)continue;
   const gl=c.createLinearGradient(0,70,0,h);gl.addColorStop(0,glowTop);gl.addColorStop(1,glowBottom);c.globalAlpha=.55+r()*.4;c.fillStyle=gl;c.fillRect(x+6,62,116,h-70);c.globalAlpha=1;
   c.fillStyle='#fff6dd';for(let i=0;i<3;i++){c.beginPath();c.arc(x+22+i*40,74,3,0,7);c.fill();}
   c.fillStyle='rgba(20,14,10,.55)';const kind=Math.floor(r()*4);
   if(kind===0){c.fillRect(x+16,h-120,90,34);c.fillRect(x+16,h-150,90,30);}
   else if(kind===1){c.fillRect(x+40,h-150,10,90);c.beginPath();c.arc(x+45,h-170,28,0,7);c.fill();}
   else if(kind===2){c.fillRect(x+20,h-110,80,10);c.fillRect(x+30,h-100,6,40);c.fillRect(x+84,h-100,6,40);c.fillRect(x+50,h-160,30,40);}
   else{c.fillRect(x+70,h-210,8,150);c.fillRect(x+56,h-220,36,14);}
  }
  c.fillStyle=frame;c.fillRect(0,0,w,46);c.fillRect(0,h-14,w,14);for(let x=0;x<=w;x+=128)c.fillRect(x-4,0,8,h);
  c.fillStyle='rgba(255,255,255,.07)';c.beginPath();c.moveTo(0,h*.7);c.lineTo(w*.55,0);c.lineTo(w*.7,0);c.lineTo(0,h*.92);c.fill();
 });
}
// City window grid. Column 0-7 is dark: roofs map there (see uvBox).
function cityWindows(seed,warm){
 return canvasTexture(256,256,(c,w,h)=>{const r=rng(seed);c.fillStyle='#161d2b';c.fillRect(0,0,w,h);
  for(let y=4;y<h;y+=16)for(let x=12;x<w;x+=30){const on=r()<.48;c.fillStyle=on?(r()<warm?'#ffcf86':'#cde6ff'):'#283246';c.fillRect(x,y,22,10);}
  c.fillStyle='#111722';c.fillRect(0,0,8,h);
 });
}
function noiseTexture(base,flecks,seed,repeat,lines=false){
 return canvasTexture(512,512,(c,w,h)=>{const r=rng(seed);c.fillStyle=base;c.fillRect(0,0,w,h);
  for(let i=0;i<5000;i++){c.fillStyle=flecks[i%flecks.length];c.fillRect(r()*w,r()*h,1+r()*2,1+r()*2);}
  if(lines){c.strokeStyle='rgba(0,0,0,.18)';c.lineWidth=3;for(let n=0;n<=w;n+=128){c.beginPath();c.moveTo(n,0);c.lineTo(n,h);c.moveTo(0,n);c.lineTo(w,n);c.stroke();}}
 },repeat);
}
function marble(base,vein,seed,repeat,grid){
 return canvasTexture(512,512,(c,w,h)=>{const r=rng(seed);c.fillStyle=base;c.fillRect(0,0,w,h);
  for(let i=0;i<90;i++){const y=r()*h;c.strokeStyle=vein;c.globalAlpha=.08+r()*.18;c.lineWidth=.6+r()*1.8;c.beginPath();c.moveTo(0,y);c.bezierCurveTo(w*.3,y+(r()-.5)*220,w*.6,y+(r()-.5)*180,w,y+(r()-.5)*200);c.stroke();}
  c.globalAlpha=1;if(grid){c.fillStyle='rgba(120,110,95,.35)';for(let n=0;n<w;n+=grid){c.fillRect(n,0,2,h);c.fillRect(0,n,w,2);}}
 },repeat);
}
function herringbone(){
 return canvasTexture(512,512,(c,w,h)=>{const r=rng(91);c.fillStyle='#3b2618';c.fillRect(0,0,w,h);
  for(let row=-2;row<10;row++)for(let col=-2;col<10;col++){const x=col*64,y=row*64;
   for(const [dx,dy,ang] of [[0,0,Math.PI/4],[32,32,-Math.PI/4]]){c.save();c.translate(x+dx,y+dy);c.rotate(ang);const t=r();c.fillStyle=`rgb(${92+t*40},${58+t*26},${34+t*16})`;c.fillRect(0,0,88,20);c.strokeStyle='rgba(20,12,6,.6)';c.lineWidth=2;c.strokeRect(0,0,88,20);c.restore();}
  }
 },[5,4]);
}
function rugTexture(){
 return canvasTexture(512,384,(c,w,h)=>{c.fillStyle='#1d3a2e';c.fillRect(0,0,w,h);c.strokeStyle='#c8a25a';c.lineWidth=10;c.strokeRect(18,18,w-36,h-36);c.lineWidth=3;c.strokeRect(40,40,w-80,h-80);
  c.fillStyle='#284b3c';c.beginPath();c.ellipse(w/2,h/2,120,80,0,0,7);c.fill();c.strokeStyle='#d7b26a';c.lineWidth=4;c.beginPath();c.ellipse(w/2,h/2,120,80,0,0,7);c.stroke();
  for(let i=0;i<8;i++){const a=i*Math.PI/4;c.fillStyle='#b88a47';c.beginPath();c.ellipse(w/2+Math.cos(a)*70,h/2+Math.sin(a)*45,14,7,a,0,7);c.fill();}
 });
}
function leafWall(){
 return canvasTexture(512,512,(c,w,h)=>{const r=rng(17);c.fillStyle='#1f3d22';c.fillRect(0,0,w,h);
  for(let i=0;i<2600;i++){const x=r()*w,y=r()*h,s=6+r()*16;c.fillStyle=['#2f6b34','#3f8a3e','#5aa04a','#24552b','#78b55a'][i%5];c.beginPath();c.ellipse(x,y,s,s*.45,r()*3,0,7);c.fill();}
 },[2,2]);
}
function grassTexture(){
 return canvasTexture(256,256,(c,w,h)=>{const r=rng(5);c.fillStyle='#4f8a34';c.fillRect(0,0,w,h);for(let i=0;i<4000;i++){c.fillStyle=['#5c9a3c','#447a2c','#6aa748'][i%3];c.fillRect(r()*w,r()*h,1,3);}},[8,8]);
}
function signTexture(lines,{bg='#1b2420',fg='#e6c98f',w=1024,h=512,font='Georgia'}={}){
 return canvasTexture(w,h,(c)=>{c.fillStyle=bg;c.fillRect(0,0,w,h);c.fillStyle=fg;c.textAlign='center';let y=h*.52;
  for(const [text,size,spacing] of lines){c.font=`${size}px ${font}`;c.letterSpacing=`${spacing||0}px`;c.fillText(text,w/2,y);y+=size*.95;}
 });
}
// Original Nexa monogram (an "N" in a ring). Used instead of any logo from the references.
function monogram(color='#e9c983',bg='rgba(0,0,0,0)'){
 return canvasTexture(512,512,(c,w,h)=>{c.fillStyle=bg;c.fillRect(0,0,w,h);c.strokeStyle=color;c.lineWidth=26;c.beginPath();c.arc(w/2,h/2,210,0,7);c.stroke();c.lineWidth=10;c.beginPath();c.arc(w/2,h/2,176,0,7);c.stroke();
  c.lineWidth=34;c.lineJoin='round';c.beginPath();c.moveTo(178,360);c.lineTo(178,152);c.lineTo(334,360);c.lineTo(334,152);c.stroke();});
}

// Box whose UVs repeat every unit[0] x unit[1] metres; roofs/floors sample the dark first column.
function uvBox(w,h,d,unit,darkTop=false){
 const g=new THREE.BoxGeometry(w,h,d),uv=g.attributes.uv,dims=[[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]];
 for(let f=0;f<6;f++)for(let v=0;v<4;v++){const i=f*4+v;if(darkTop&&(f===2||f===3))uv.setXY(i,.01,.5);else uv.setXY(i,uv.getX(i)*dims[f][0]/unit[0],uv.getY(i)*dims[f][1]/unit[1]);}
 return g;
}

export function createThemeWorlds({scene,floors,shell,context,glassMaterials}){
 const cache=new Map();
 const mat=(color,{metalness=0,roughness=.7,glow=0,side}={})=>{const key=[color,metalness,roughness,glow,side].join();if(!cache.has(key))cache.set(key,new THREE.MeshStandardMaterial({color,metalness,roughness,emissive:glow?color:'#000000',emissiveIntensity:glow,side:side||THREE.FrontSide}));return cache.get(key);};
 const time={value:0};
 function water(deep,shallow){return new THREE.ShaderMaterial({uniforms:{time,deep:{value:new THREE.Color(deep)},shallow:{value:new THREE.Color(shallow)}},
  vertexShader:'varying vec3 wp;void main(){vec4 w=modelMatrix*vec4(position,1.);wp=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
  fragmentShader:'uniform float time;uniform vec3 deep;uniform vec3 shallow;varying vec3 wp;void main(){vec2 q=wp.xz*1.25;float a=sin(q.x*1.6+time*.9+sin(q.y*1.2+time*.45))*cos(q.y*1.8-time*.7);float c=pow(1.-abs(a),12.);vec3 col=mix(deep,shallow,.5+.4*sin(q.x*.33+q.y*.29));col+=vec3(.8,.97,1.)*c*.38;gl_FragColor=vec4(col,1.);}'});}

 function place(g,geo,m,x,y,z,rot){const mesh=new THREE.Mesh(geo,typeof m==='string'?mat(m):m);mesh.position.set(x,y,z);if(rot)mesh.rotation.set(...rot);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;}
 const box=(g,x,y,z,w,h,d,m,r=0,rot)=>place(g,r?new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/2.1,h/2.1,d/2.1)):new THREE.BoxGeometry(w,h,d),m,x,y,z,rot);
 const tbox=(g,x,y,z,w,h,d,m,unit,darkTop)=>place(g,uvBox(w,h,d,unit,darkTop),m,x,y,z);
 const cyl=(g,x,y,z,r,h,m,top=r,n=18,rot)=>place(g,new THREE.CylinderGeometry(top,r,h,n),m,x,y,z,rot);
 const sphere=(g,x,y,z,r,m,scale)=>{const s=place(g,new THREE.SphereGeometry(r,14,10),m,x,y,z);if(scale)s.scale.set(...scale);return s;};
 const plane=(g,x,y,z,w,h,m,rot=[-Math.PI/2,0,0])=>{const p=place(g,new THREE.PlaneGeometry(w,h),m,x,y,z,rot);p.castShadow=false;return p;};
 function torus(g,x,y,z,r,t,m,arc=Math.PI*2,rot=[0,0,0]){return place(g,new THREE.TorusGeometry(r,t,8,40,arc),m,x,y,z,rot);}
 function keep(mesh){mesh.userData.keep=true;return mesh;}
 // Merge meshes per material for performance; signs/shaders flagged keep stay separate.
 function batch(group){group.updateMatrixWorld(true);const buckets=new Map(),remove=[];group.traverse(o=>{if(!o.isMesh||o.userData.keep||o===group)return;const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();for(const k of Object.keys(geo.attributes))if(!['position','normal','uv'].includes(k))geo.deleteAttribute(k);geo.applyMatrix4(new THREE.Matrix4().copy(group.matrixWorld).invert().multiply(o.matrixWorld));const key=o.material;if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(geo);remove.push(o);});
  for(const o of remove){o.removeFromParent();o.geometry.dispose();}
  for(const [m,geos] of buckets){const merged=mergeGeometries(geos);if(!merged)continue;const mesh=new THREE.Mesh(merged,m);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);geos.forEach(g=>g.dispose());}}

 // Shared props -----------------------------------------------------------------------------------------
 const frondMats=[new THREE.MeshStandardMaterial({color:'#4f7d3f',roughness:.85,side:THREE.DoubleSide}),new THREE.MeshStandardMaterial({color:'#6d9a4c',roughness:.85,side:THREE.DoubleSide})];
 const frondGeo=(()=>{const pos=[],uv=[],idx=[];for(let s=0;s<=8;s++){const t=s/8,w=.34*Math.sin(t*Math.PI);for(const side of [-1,1]){pos.push(side*w,Math.sin(t*Math.PI)*.38-t*.95,t*2.6);uv.push(side<0?0:1,t);}if(s<8){const n=s*2;idx.push(n,n+1,n+2,n+1,n+3,n+2);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;})();
 function palm(g,x,y,z,h=5,s=1){const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(x,y,z),new THREE.Vector3(x+.18*s,y+h*.5,z+.1*s),new THREE.Vector3(x+.42*s,y+h,z)]);place(g,new THREE.TubeGeometry(curve,10,.13*s,7,false),'#8b7552',0,0,0);
  for(let j=0;j<10;j++){const leaf=place(g,frondGeo.clone(),frondMats[j%2],x+.42*s,y+h,z);leaf.scale.setScalar(s);leaf.rotation.set(0,j*Math.PI*2/10,0);leaf.castShadow=true;}}
 function shrub(g,x,y,z,s=1,color='#3f6b35'){const m=place(g,new THREE.IcosahedronGeometry(.55*s,1),color,x,y+.4*s,z);m.scale.set(1.2,.8,1.2);}
 function tree(g,x,y,z,h=4,s=1.6){cyl(g,x,y+h/2,z,.14,h,'#6e5537',.1,8);for(const [dx,dy,dz,r] of [[0,h,0,1],[.6,h-.4,.3,.75],[-.5,h-.3,-.4,.8],[.2,h+.6,-.2,.7]])place(g,new THREE.IcosahedronGeometry(r*s*.8,1),'#4e7d3a',x+dx*s*.7,y+dy,z+dz*s*.7);}
 function planterRow(g,x,y,z,w,d,color='#d9cdb8'){box(g,x,y+.3,z,w,.6,d,color,.05);for(let i=0;i<Math.max(1,Math.round(w/.9));i++)shrub(g,x-w/2+.45+i*(w-.9)/Math.max(1,Math.round(w/.9)-1||1),y+.45,z,.65,i%2?'#4a7a3c':'#3a6532');}
 function lounger(g,x,y,z,ry=0,color='#f1ece2'){const l=new THREE.Group();l.position.set(x,y,z);l.rotation.y=ry;g.add(l);box(l,0,.32,0,.75,.14,1.9,color,.04);box(l,0,.55,-.75,.75,.5,.12,color,.04,[-.6,0,0]);for(const sx of [-.3,.3])for(const sz of [-.8,.8])box(l,sx,.14,sz,.06,.28,.06,'#3a3a3a');}
 function umbrella(g,x,y,z,color='#f3efe6'){cyl(g,x,y+1.3,z,.04,2.6,'#5a4a3a');place(g,new THREE.ConeGeometry(1.5,.6,12),color,x,y+2.65,z);}
 function car(g,x,y,z,ry,color){const c=new THREE.Group();c.position.set(x,y,z);c.rotation.y=ry;g.add(c);box(c,0,.42,0,1.9,.55,4.3,color,.18);box(c,0,.86,-.2,1.7,.45,2.3,'#1c2430',.16);for(const sx of [-.85,.85])for(const sz of [-1.35,1.35])cyl(c,sx,.32,sz,.32,.24,'#151515',.32,12,[0,0,Math.PI/2]);for(const sx of [-.6,.6]){box(c,sx,.5,2.16,.32,.12,.04,mat('#fff5d6',{glow:1.6}));box(c,sx,.5,-2.16,.32,.1,.04,mat('#ff4a3a',{glow:1.3}));}}
 function lamp(g,x,y,z,h=3.2,color='#ffd890'){cyl(g,x,y+h/2,z,.06,h,'#2c2a26',.05,8);sphere(g,x,y+h+.1,z,.22,mat(color,{glow:1.8}));}
 function railGlass(g,x,y,z,w,rotY=0,h=1.1){const r=new THREE.Group();r.position.set(x,y,z);r.rotation.y=rotY;g.add(r);const glass=new THREE.MeshPhysicalMaterial({color:'#cfe6ee',transparent:true,opacity:.28,roughness:.05,metalness:.1,depthWrite:false});const p=new THREE.Mesh(new THREE.BoxGeometry(w,h,.04),glass);p.position.y=h/2;keep(p);r.add(p);box(r,0,h+.02,0,w,.05,.08,'#c9c6bd',0);}
 function stringLights(g,a,b,y,sag=.6,n=12){for(let i=0;i<=n;i++){const t=i/n;sphere(g,a[0]+(b[0]-a[0])*t,y-Math.sin(t*Math.PI)*sag,a[1]+(b[1]-a[1])*t,.07,mat('#ffe2a0',{glow:2.2}));}}
 function signPlane(g,tex,x,y,z,w,h,rotY=0,glow=.5){const m=new THREE.MeshStandardMaterial({map:tex,emissive:'#ffffff',emissiveMap:tex,emissiveIntensity:glow,roughness:.5,transparent:true});const p=new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);p.position.set(x,y,z);p.rotation.y=rotY;keep(p);g.add(p);return p;}
 function city(g,{seed,count,rMin,rMax,hMin,hMax,base,warm,avoid=()=>false,low=()=>false}){const r=rng(seed),mats=[0,1,2].map(i=>new THREE.MeshStandardMaterial({map:cityWindows(seed+i*13,warm),emissive:'#ffffff',emissiveMap:null,emissiveIntensity:.0,roughness:.6,metalness:.2}));
  mats.forEach(m=>{m.emissiveMap=m.map;m.emissiveIntensity=.9;});
  for(let i=0;i<count;i++){const a=r()*Math.PI*2,rad=rMin+r()*(rMax-rMin),x=Math.cos(a)*rad,z=Math.sin(a)*rad;if(avoid(x,z))continue;const w=7+r()*11,d=7+r()*11;let h=hMin+Math.pow(r(),1.6)*(hMax-hMin);if(low(x,z,rad))h=Math.min(h,hMin*.6+r()*4);tbox(g,x,base+h/2,z,w,h,d,mats[i%3],[16,32],true);if(r()<.3)box(g,x,base+h+.6,z,w*.5,1.2,d*.5,'#1d2431');}}

 // Hide the previous neutral glass building: both themes bring their own Office.
 const baseShell=[...shell.children],baseContext=[...context.children];
 baseShell.forEach(o=>o.visible=false);baseContext.forEach(o=>o.visible=false);
 const originalSofas=[];scene.traverse(o=>{if(o.userData.workspaceSofa)originalSofas.push(o);});originalSofas.forEach(batch);
 const worlds=new Map();const register=(id,group)=>{group.visible=false;if(!worlds.has(id))worlds.set(id,[]);worlds.get(id).push(group);return group;};
 const ext=(id,name,parent)=>{const g=new THREE.Group();g.name=name;parent.add(g);return register(id,g);};

 // =====================================================================================================
 // TEMA 1 · MENARA SENJA — exterior: luxury dusk tower.
 {const S=ext('senja','Menara Senja — tower',shell),L=ext('senja','Menara Senja — podium & city',context);
  const cream='#ece2cf',bronze=mat('#9a7a4c',{metalness:.7,roughness:.35}),walnut=mat('#4a3122',{roughness:.5}),stoneDark='#3a3430';
  const bay=new THREE.MeshPhysicalMaterial({transmission:0,map:litBay({glass:['#2b2730','#3a2c26'],glowTop:'#ffd9a0',glowBottom:'#b9773f',frame:'#1d1814',seed:3}),roughness:.18,metalness:.35,emissive:'#ffffff',emissiveIntensity:.62,transparent:false,opacity:1});
  bay.emissiveMap=bay.map;bay.userData.facade=true;glassMaterials.push(bay);
  const ledWarm=mat('#ffd28a',{glow:2.4});
  const LEVELS=5,H=6,TOP=LEVELS*H;
  for(let i=0;i<LEVELS;i++){const y=i*H;
   // Glass bays: front wings, sides and back. Central bay is behind bronze fins.
   tbox(S,-9.8,y+2.9,11.75,10.4,5.4,.3,bay,[6,6]);tbox(S,9.8,y+2.9,11.75,10.4,5.4,.3,bay,[6,6]);
   tbox(S,0,y+2.9,12.35,9,5.4,.3,bay,[6,6]);tbox(S,0,y+2.9,-11.95,30,5.4,.3,bay,[6,6]);
   for(const s of [-1,1])tbox(S,s*14.95,y+2.9,0,.3,5.4,24,bay,[6,6]);
   // Slab bands with warm under-glow.
   box(S,0,y+5.85,0,30.8,.5,24.8,cream,.04);box(S,0,y+5.58,12.42,30.4,.05,.06,ledWarm);
   // Cream mullions on wings and sides.
   for(const x of [-14.2,-11.5,-8.1,-5.2,5.2,8.1,11.5,14.2])box(S,x,y+2.9,12.05,.32,5.4,.5,cream);
   for(const s of [-1,1])for(let z=-10;z<=10;z+=4)box(S,s*15.15,y+2.9,z,.5,5.4,.32,cream);
   for(let x=-12;x<=12;x+=4)box(S,x,y+2.9,-12.15,.32,5.4,.5,cream);
   // Planted balconies alternate between the wings above the lobby.
   if(i>0){const bx=i%2?-9.6:9.6;box(S,bx,y+.12,13.6,8.6,.24,3.2,cream,.04);box(S,bx,y-.02,15.14,8.6,.05,.05,ledWarm);
    railGlass(S,bx,y+.24,15.15,8.6);planterRow(S,bx,y+.24,14.75,8.2,.5,'#d8ccb4');lounger(S,bx-2.2,y+.24,13.4,Math.PI/2);lounger(S,bx+1.4,y+.24,13.4,Math.PI/2);palm(S,bx+3.6,y+.6,13.3,2.6,.55);}
  }
  // Central bay: bronze and walnut vertical fins with gold lines, the monogram and the lobby.
  for(let x=-4.3;x<=4.31;x+=.43){box(S,x,TOP/2+.2,12.75,.16,TOP-.6,.5,x%0.86<.1?walnut:bronze);}
  box(S,0,TOP/2,12.95,9.6,.0001+TOP,.06,mat('#1a1410'));
  for(const s of [-1,1]){box(S,s*4.85,TOP/2,12.8,.7,TOP,.9,cream);box(S,s*4.85,TOP/2,13.27,.08,TOP-.4,.04,ledWarm);}
  box(S,0,18.2,13.25,4.3,4.3,.12,mat('#211915'));signPlane(S,monogram('#f0cf8a'),0,18.2,13.33,3.9,3.9,0,1.1);
  // Corner pilasters with vertical light lines.
  for(const sx of [-1,1])for(const sz of [-1,1]){box(S,sx*15.2,TOP/2,sz*12.2,1.1,TOP+.4,1.1,cream,.05);box(S,sx*15.78,TOP/2,sz*12.2,.05,TOP-1,.08,ledWarm);}
  // Lobby: double-height glass portal, canopy, steps.
  box(S,0,2.4,13.05,7.6,4.8,.2,mat('#16110d'));tbox(S,0,2.3,13.17,7,4.4,.1,bay,[3.5,4.4]);
  box(S,0,4.95,15,9.4,.32,4.4,cream,.06);box(S,0,4.76,15,8.6,.05,3.6,ledWarm);for(const s of [-1,1])box(S,s*4.2,2.4,16.9,.3,4.8,.3,bronze);
  for(let k=0;k<4;k++)box(S,0,-.1-k*.08,13.6+k*.55,10-k*.2,.16,.6,'#e3d8c4');
  signPlane(S,signTexture([['NEXA OFFICE',150,18],['CREATIVE TOWER',44,14]],{bg:'#14100d'}),0,6.5,12.98,7.2,1.6,0,.9);
  // Rooftop: deck, infinity pool with a lit glass edge, cabanas, pavilions, bar, palms.
  box(S,0,TOP+.15,0,30.8,.3,24.8,cream,.05);box(S,0,TOP+.33,0,30,.06,24,mat('#8b6a4c',{roughness:.6}));
  box(S,-2,TOP+.5,3.6,17.6,.34,10.4,'#e8decb',.04);
  const pool=keep(plane(S,-2,TOP+.69,3.6,16.6,9.4,water('#0b5b78','#3fc6d6')));pool.castShadow=false;
  box(S,-2,TOP+.45,8.85,16.6,.5,.12,mat('#6fe2ef',{glow:1.6}));box(S,-2,TOP+.2,9.2,17.6,.12,.05,mat('#7ff0ff',{glow:2.2}));
  for(let k=0;k<5;k++)lounger(S,-12.6,TOP+.36,-1+k*2.2,Math.PI/2);for(const x of [-8,0,6])umbrella(S,x,TOP+.36,-3.2);
  for(const s of [-1,1]){const px=s*10.6;box(S,px,TOP+2.1,-8.2,8,3.5,6.2,mat('#222'),.0);tbox(S,px,TOP+2.1,-5.05,7.8,3.4,.1,bay,[3.9,3.4]);box(S,px,TOP+4.05,-7.9,9.2,.3,7.4,'#1d1a17',.05);box(S,px,TOP+3.88,-4.25,9,.04,.05,ledWarm);}
  box(S,0,TOP+1.2,-9.6,6,2.2,1.4,walnut,.05);box(S,0,TOP+2.35,-9.6,6.4,.12,1.8,'#e6dccb');for(const x of [-3,3])for(const z of [-11,-7])box(S,x,TOP+2.2,z,.18,3.7,.18,bronze);for(let x=-3;x<=3;x+=.5)box(S,x,TOP+4.1,-9,.1,.12,4.4,walnut);
  box(S,0,TOP+2.9,-11.3,3.6,2,.15,'#151515');plane(S,0,TOP+2.9,-11.21,3.3,1.75,mat('#7fb8d8',{glow:1.2}),[0,0,0]);
  for(const [x,z] of [[-13.6,-10.8],[13.6,-10.8],[-13.6,10.6],[13.6,10.6],[7.6,-1]]){box(S,x,TOP+.75,z,1.4,.8,1.4,'#d8ccb4',.05);palm(S,x,TOP+1.1,z,3.4,.75);}
  for(const [w,x,z,r] of [[30,0,12.3,0],[30,0,-12.3,0],[24.6,-15.3,0,Math.PI/2],[24.6,15.3,0,Math.PI/2]])railGlass(S,x,TOP+.36,z,w,r,1);
  stringLights(S,[-14,-12],[14,-12],TOP+3.4,.5,16);
  // Podium, fountain, driveway, fence, palms, street, river and city.
  box(L,0,-.55,6,56,.4,52,'#d8cdb9',.1);box(L,0,-.33,19,56,.02,12,mat('#cfc3ad'));
  plane(L,0,-.32,6,56,52,new THREE.MeshStandardMaterial({map:noiseTexture('#d9cfbd',['#cbbfaa','#e4dccb'],8,[14,13],true),roughness:.85}));
  box(L,-10,-.15,19.5,9,.5,6,stoneDark,.08);keep(plane(L,-10,.12,19.5,8.4,5.4,water('#0d4a63','#4cc0d0')));
  for(let i=0;i<14;i++){const x=-13.6+i*.55;cyl(L,x,.6+Math.sin(i)*.15,17.4,.03,1.3+Math.sin(i*1.7)*.3,mat('#d9f6ff',{glow:1.4}),.02,6);cyl(L,x,.45,21.6,.03,.9,mat('#d9f6ff',{glow:1.4}),.02,6);}
  for(const z of [18.6,20.4])for(let i=0;i<6;i++)box(L,-12.5+i*1,-.05,z,.12,.08,.12,mat('#ffe4a0',{glow:2}));
  box(L,-10,.9,24.2,4.6,2.4,.5,'#1e1915',.05);signPlane(L,monogram('#e8c784'),-10,.9,24.48,1.9,1.9,0,1.0);
  box(L,10.5,-.3,21,9,.06,12,mat('#34363b',{roughness:.9}));car(L,8.2,-.27,19,0,'#1c1f26');car(L,12.7,-.27,22.5,Math.PI,'#e9e6df');car(L,0,-.3,17.2,Math.PI/2,'#26303a');
  for(let x=-26;x<=26;x+=4)if(Math.abs(x)>4){box(L,x,.15,31.6,4,.9,.5,cream,.04);box(L,x+2,.6,31.6,.6,1.8,.6,cream,.05);box(L,x+2,1.55,31.6,.4,.12,.4,ledWarm);}
  for(const s of [-1,1])for(let z=-18;z<=30;z+=4){box(L,s*27.6,.15,z,.5,.9,4,cream,.04);box(L,s*27.6,.6,z+2,.6,1.8,.6,cream,.05);}
  for(let x=-24;x<=24;x+=4.2)palm(L,x,-.35,29.4,5.2+((x*7)%3),1);for(const s of [-1,1])for(let z=-16;z<=26;z+=5)palm(L,s*24.8,-.35,z,5+((z*3)%2),1);
  for(const s of [-1,1]){planterRow(L,s*10,-.35,14.3,9,.8);for(let z=16;z<=28;z+=4)lamp(L,s*4.6,-.35,z,3.4);}
  const asphalt=mat('#2a2c31',{roughness:.95});box(L,0,-.9,0,420,.2,420,asphalt);
  for(const s of [-1,1]){box(L,0,-.79,34+s*0,420,.02,.25,mat('#d9d2c2'));}
  for(let x=-200;x<200;x+=6)box(L,x,-.78,38,3,.02,.22,mat('#e9e2d0'));for(let z=-200;z<200;z+=6)for(const s of [-1,1])box(L,s*36,-.78,z,.22,.02,3,mat('#e9e2d0'));
  for(let i=0;i<7;i++)box(L,-6+i*1.2,-.78,41.5,.6,.02,4,mat('#efe9db'));
  box(L,0,-.7,33,64,.18,2.6,'#bdb5a6');for(const s of [-1,1])box(L,s*30.5,-.7,6,2.6,.18,56,'#bdb5a6');box(L,0,-.7,-21,64,.18,2.6,'#bdb5a6');
  [[-20,40,0],[14,40.5,0],[36,-12,Math.PI/2],[-36,20,Math.PI/2],[34,52,0],[-50,36,0]].forEach(([x,z,r],i)=>car(L,x,-.8,z,r,['#c9c3b6','#1f2a33','#7c2e2a','#e8e4da','#3d4a3e','#2b2b2b'][i]));
  keep(plane(L,-78,-.75,0,30,420,water('#29345a','#6a6390')));
  const facing=(x,z)=>{const a=Math.atan2(z,x)*180/Math.PI;return a>-5&&a<110;};
  city(L,{seed:21,count:110,rMin:56,rMax:190,hMin:10,hMax:72,base:-.8,warm:.75,avoid:(x,z)=>(x<-60&&x>-96)||(facing(x,z)&&Math.hypot(x,z)<120),low:(x,z,r)=>facing(x,z)});
  batch(S);batch(L);
 }

 // =====================================================================================================
 // TEMA 2 · GRIYA LANGIT — exterior: sky penthouse floating on a tower above the night city.
 {const S=ext('langit','Griya Langit — penthouse',shell),L=ext('langit','Griya Langit — tower & city',context);
  const white='#f3f1ec',black=mat('#141618',{roughness:.4,metalness:.4});
  const marbleWhite=new THREE.MeshStandardMaterial({map:marble('#eeebe4','#9e978b',4,[6,5],128),roughness:.3});
  const glass=new THREE.MeshPhysicalMaterial({transmission:0,map:litBay({glass:['#1d2c44','#2c3c55'],glowTop:'#fff1d2',glowBottom:'#d8b886',frame:'#101214',seed:11}),roughness:.12,metalness:.45,emissive:'#ffffff',emissiveIntensity:.55,transparent:false,opacity:1});
  glass.emissiveMap=glass.map;glass.userData.facade=true;glassMaterials.push(glass);
  const led=mat('#e9f6ff',{glow:2.2});
  // Tower trunk below the penthouse, tapering into the city.
  const trunkMat=new THREE.MeshStandardMaterial({map:cityWindows(77,.55),roughness:.35,metalness:.5});trunkMat.emissiveMap=trunkMat.map;trunkMat.emissive=new THREE.Color('#ffffff');trunkMat.emissiveIntensity=.65;
  tbox(L,0,-46,1,30,90,24,trunkMat,[16,32],true);
  for(const sx of [-1,1])for(const sz of [-1,1])box(L,sx*15.2,-46,1+sz*12.2,.8,90,.8,'#9aa3ad',0);
  // Terrace slab (Level A) with marble, turf, LED edge and a glass balustrade.
  box(S,0,-.55,3,46,1.1,40,white,.12);box(S,0,-1.12,3,45.4,.05,39.4,led);
  plane(S,0,.012,3,46,40,marbleWhite);
  const turf=new THREE.MeshStandardMaterial({map:grassTexture(),roughness:.95,color:'#93ad80'});
  for(const [x,z,w,d] of [[-19,3,7.6,38],[0,20,30,5.6],[19,-6,7.6,20]])plane(S,x,.03,z,w,d,turf);
  for(let k=0;k<7;k++)box(S,-19,.05,-12+k*4.2,1.8,.05,.9,'#e6e2da');
  for(const [w,x,z,r] of [[46,0,22.9,0],[46,0,-16.9,0],[39.6,-22.9,3,Math.PI/2],[39.6,22.9,3,Math.PI/2]])railGlass(S,x,0,z,w,r,1.15);
  // Plunge pool corner, loungers, outdoor lounge with fire table, planters and trees.
  box(S,18.2,.25,15.6,8.4,.5,9.4,'#e9e5dc',.05);keep(plane(S,18.2,.51,15.6,7.6,8.6,water('#0f5f82','#55d2e4')));box(S,18.2,.3,20.35,8.4,.05,.06,mat('#86f2ff',{glow:2}));
  for(const z of [9.4,11.6])lounger(S,13.2,0,z,Math.PI/2,'#f7f5f0');
  box(S,-8,.32,18.8,7,.5,1.1,'#d9d4ca',.12);box(S,-8,.75,18.35,7,.8,.25,'#d9d4ca',.08);box(S,-11.8,.32,16.8,1.1,.5,4.6,'#d9d4ca',.12);box(S,-8,.3,16.6,2.4,.5,1.4,'#3a3a3a',.06);box(S,-8,.58,16.6,1.8,.06,.6,mat('#ff9a4a',{glow:2.4}));
  for(const [x,z] of [[-21,-14.5],[-21,20.5],[21,-14.5],[6,20.6],[-21,9]]){cyl(S,x,.45,z,.8,.9,'#e4e0d7',.85,16);tree(S,x,.9,z,2.6,1.1);}
  // Penthouse volumes: Level A (y 0-6), Level B (y 6-12, cantilevered), Level C pavilion at the back.
  const wall=mat(white,{roughness:.55});
  function volume(x,y,z,w,h,d,{front=true,back=true,left=true,right=true}={}){
   box(S,x,y+h-.2,z,w+.6,.4,d+.6,wall,.04);box(S,x,y+.15,z,w+.3,.3,d+.3,wall);
   const bay=(px,pz,bw,rot)=>{const b=tbox(S,px,y+h/2-.05,pz,bw,h-.6,.2,glass,[5,h-.6]);b.rotation.y=rot;};
   if(front)bay(x,z+d/2,w-1.2,0);if(back)bay(x,z-d/2,w-1.2,0);if(left)bay(x-w/2,z,d-1.2,Math.PI/2);if(right)bay(x+w/2,z,d-1.2,Math.PI/2);
   for(const sx of [-1,1])for(const sz of [-1,1])box(S,x+sx*w/2,y+h/2,z+sz*d/2,.7,h,.7,wall);
   for(let k=-w/2+5;k<w/2-1;k+=5)for(const sz of [-1,1])box(S,x+k,y+h/2,z+sz*(d/2+.08),.12,h-.6,.14,black);
   for(let k=-d/2+5;k<d/2-1;k+=5)for(const sx of [-1,1])box(S,x+sx*(w/2+.08),y+h/2,z+k,.14,h-.6,.12,black);
  }
  volume(0,0,0,30,6,24);volume(-1.5,6,-4,33,6.4,16.6);
  box(S,-1.5,12.6,-4,35,.35,18.4,white,.08);box(S,-1.5,12.38,5.25,34.4,.05,.06,led);box(S,-1.5,5.78,12.42,30.6,.05,.06,led);
  plane(S,0,6.32,8.4,28,6.8,turf);for(const x of [-9,-4,1])lounger(S,x,6.3,8.6,0,'#f7f5f0');for(const x of [6,10])umbrella(S,x,6.3,9,'#ffffff');box(S,0,6.4,11.6,6,.5,1.2,'#e4e0d7',.1);
  railGlass(S,0,6.2,12.3,30);for(const s2 of [-1,1])railGlass(S,s2*15.2,6.2,8.4,8,Math.PI/2);
  plane(S,-1.5,12.8,-4,30,14,turf);for(const [x,z] of [[-12,-9],[9,-9],[-1,0]]){cyl(S,x,13.2,z,.7,.8,'#e4e0d7',.75,16);tree(S,x,13.6,z,2.2,.9);}
  // Cantilevered sky balcony (Level B) reached by a spiral stair wrapped around a tree.
  box(S,-21,6.1,4,8,.3,9,white,.06);box(S,-21,5.92,4,7.6,.04,8.6,led);railGlass(S,-25,6.25,4,9,Math.PI/2);railGlass(S,-21,6.25,8.5,8);
  for(const x of [-23,-20])lounger(S,x,6.25,2.5,Math.PI,'#f7f5f0');
  const sx=-18.6,sz=13.6;cyl(S,sx,.4,sz,1.1,.8,'#e4e0d7',1.15,24);tree(S,sx,.8,sz,5.2,1.3);
  for(let k=0;k<20;k++){const a=k/20*Math.PI*1.7+.6,y=k*.3+.3;const t=box(S,sx+Math.cos(a)*2,y,sz+Math.sin(a)*2,1.5,.12,.62,mat('#a77c55',{roughness:.5}));t.rotation.y=-a;const s=box(S,sx+Math.cos(a)*2.78,y+.35,sz+Math.sin(a)*2.78,.08,.9,.1,'#f3f1ec');s.rotation.y=-a;}
  const helix=new THREE.CatmullRomCurve3(Array.from({length:24},(_,k)=>{const a=k/23*Math.PI*1.7+.6;return new THREE.Vector3(sx+Math.cos(a)*2.8,k/23*6+1.1,sz+Math.sin(a)*2.8);}));place(S,new THREE.TubeGeometry(helix,60,.06,6,false),'#d9d6cf',0,0,0);
  // Entrance and name plate.
  box(S,0,3.1,12.25,6,5.6,.3,black);signPlane(S,signTexture([['NEXA OFFICE',140,22],['SKY HOUSE',40,16]],{bg:'#f3f1ec',fg:'#1b1d20',font:'Arial'}),0,4.6,12.42,5.4,1.2,0,.25);
  // City far below and a few towers rising around.
  keep(plane(L,0,-92,0,600,600,mat('#0c1424')));keep(plane(L,60,-91,40,40,600,water('#0d1f38','#2a4f7a'),[-Math.PI/2,0,.3]));
  city(L,{seed:51,count:150,rMin:55,rMax:220,hMin:24,hMax:80,base:-92,warm:.55});
  city(L,{seed:63,count:9,rMin:120,rMax:220,hMin:92,hMax:120,base:-92,warm:.3,avoid:(x,z)=>{const a=Math.atan2(z,x)*180/Math.PI;return a>0&&a<100;}});
  batch(S);batch(L);
 }

 // =====================================================================================================
 // Studio interiors. Sofa variants replace the neutral lounges; decorations sit on walls, ceilings, edges.
 function sofaVariant(original,id){const g=new THREE.Group();g.position.copy(original.position);g.rotation.copy(original.rotation);original.parent.add(g);const w=original.userData.workspaceSofa.width;
  if(id==='senja'){const velvet=mat('#b9767c',{roughness:.9}),gold=mat('#c9a35a',{metalness:.8,roughness:.3});
   box(g,0,.42,0,w,.42,1.0,velvet,.16);box(g,0,.92,-.38,w,.9,.32,velvet,.15);for(const x of [-w/2+.14,w/2-.14]){const roll=cyl(g,x,.82,0,.2,1.08,velvet,.2,16);roll.rotation.x=Math.PI/2;}
   for(const x of [-w*.28,0,w*.28])box(g,x,.66,.05,w*.27,.16,.8,mat('#c48990',{roughness:.9}),.07);
   for(let i=0;i<Math.max(3,Math.floor(w*2.4));i++){const x=-w*.4+i*w*.8/(Math.max(3,Math.floor(w*2.4))-1);for(const y of [.8,1.1])sphere(g,x,y,-.215,.03,gold);}
   for(const x of [-w/2+.2,w/2-.2])for(const z of [-.35,.35])cyl(g,x,.12,z,.04,.24,gold,.025,8);
   sphere(g,-w*.28,1.02,-.12,1,mat('#2f5a43',{roughness:.9}),[.24,.24,.1]);
  }else{const fab=mat('#6c8fae',{roughness:.9});
   box(g,0,.42,0,w,.32,.95,fab,.05);box(g,0,.86,-.4,w,.66,.18,fab,.05);for(const x of [-w/2+.07,w/2-.07])box(g,x,.62,0,.14,.4,.95,fab,.04);
   for(const x of [-w*.25,w*.25])box(g,x,.66,.04,w*.46,.14,.8,mat('#7c9ebb',{roughness:.9}),.05);
   for(const x of [-w/2+.12,w/2-.12])for(const z of [-.35,.35])box(g,x,.13,z,.05,.26,.05,'#151515');
  }
  batch(g);return g;}

 const herring=herringbone(),beigeMarble=marble('#e6dccb','#a99a82',12,[6,5],170),rug=rugTexture(),leaves=leafWall();
 // ---- Senja studio: deep green, brass, walnut, chandeliers ----
 {const gold=mat('#caa25a',{metalness:.85,roughness:.28}),glow=mat('#ffe3a3',{glow:2.4}),crystal=mat('#fff6dc',{glow:1.4,roughness:.1});
  function chandelier(g,x,y,z,r=1){cyl(g,x,y+.7,z,.02,1.4,gold,.02,6);torus(g,x,y,z,.62*r,.035,gold,Math.PI*2,[Math.PI/2,0,0]);torus(g,x,y+.32,z,.38*r,.03,gold,Math.PI*2,[Math.PI/2,0,0]);
   for(let i=0;i<10;i++){const a=i/10*Math.PI*2;sphere(g,x+Math.cos(a)*.62*r,y+.08,z+Math.sin(a)*.62*r,.07,glow);sphere(g,x+Math.cos(a)*.62*r,y-.12,z+Math.sin(a)*.62*r,.035,crystal);}
   for(let i=0;i<6;i++){const a=i/6*Math.PI*2;sphere(g,x+Math.cos(a)*.38*r,y+.4,z+Math.sin(a)*.38*r,.06,glow);}sphere(g,x,y-.25,z,.12,crystal);}
  function rugAt(g,x,z,w,d,y=.1){plane(g,x,y,z,w,d,new THREE.MeshStandardMaterial({map:rug,roughness:.95}));}
  const F=[0,1,2].map(f=>{const g=new THREE.Group();g.name=`Senja studio floor ${f+1}`;floors[f].add(g);return register('senja',g);});
  const [G,M,T]=F;
  // Ground: brass cornices, wall panel mouldings, arched mirrors, chandeliers, pendants, rugs, portal.
  box(G,0,4.42,-11.66,29.6,.14,.22,gold);box(G,-14.66,4.42,0,.22,.14,23.6,gold);
  for(let x=-13.5;x<14;x+=3)for(const y of [.35]){box(G,x,y,-11.55,2.4,.5,.04,mat('#173127'));box(G,x,y+.27,-11.53,2.4,.03,.03,gold);}
  for(const z of [-2,1,4,7,10]){const g=G;cyl(g,-14.55,2.1,z,.62,.04,mat('#d5d3cb',{metalness:.9,roughness:.08}),.62,24,[0,0,Math.PI/2]).scale.set(1,1,1);torus(g,-14.5,2.1,z,.66,.04,gold,Math.PI*2,[0,Math.PI/2,0]);sphere(g,-14.45,3.05,z,.08,glow);}
  for(const [x,z,r] of [[-10.5,7.6,1.2],[11,8,1.1],[-8,-7.6,1.25],[2.5,-8.4,.9],[0,10.8,.8]])chandelier(G,x,4.1,z,r);
  for(const x of [-8.4,-3.6,4.5,9.3])for(const z of [0,4.8]){cyl(G,x,3.75,z,.01,1.1,gold,.01,4);cyl(G,x,3.15,z,.28,.18,gold,.08,14);sphere(G,x,3.06,z,.09,glow);}
  rugAt(G,-10.6,7.6,6,4.4);rugAt(G,11,7.8,5,3.6);rugAt(G,2.4,-7.6,5,2.6);
  for(const s of [-1,1]){box(G,s*3.25,1.35,9.12,.42,2.7,.42,mat('#173127'),.05);box(G,s*3.25,2.75,9.12,.55,.1,.55,gold);}
  torus(G,0,2.75,9.12,3.25,.12,mat('#173127'),Math.PI,[0,0,0]).scale.set(1,.42,1);torus(G,0,2.75,9.02,3.12,.04,gold,Math.PI).scale.set(1,.42,1);
  for(const [x,z] of [[-10.2,7],[10.7,7.2]]){cyl(G,x,.95,z,.12,.06,gold,.12,12);cyl(G,x,1.15,z,.02,.35,gold,.02,6);place(G,new THREE.ConeGeometry(.2,.22,14,1,true),mat('#f4dfb0',{glow:.9,side:THREE.DoubleSide}),x,1.38,z);}
  for(const [x,z] of [[-13.6,10.6],[13.5,10.6],[-13.6,-10.4]])palm(G,x,0,z,3.2,.6);
  // Mezzanine and terrace: chandeliers over lounges, panelled back wall, lanterns and string lights.
  box(M,0,3.2,-11.25,29.6,.12,.2,gold);for(let x=-13.5;x<14;x+=3){box(M,x,1.2,-11.3,2.4,1.9,.04,mat('#173127'));box(M,x,2.18,-11.28,2.4,.03,.03,gold);}
  chandelier(M,-9.5,4.4,-5.2,1.1);chandelier(M,10,4.4,-5.4,.9);rugAt(M,-9.4,-5,5.6,4.4,.1);rugAt(M,9.6,-5.6,4.6,4,.1);
  for(const [x,z] of [[-13.8,0.4],[2.8,-10.6]])palm(T,x,0,z,3.6,.8);stringLights(T,[4,-10],[13,-10],3.5,.35,12);stringLights(T,[4,0],[13,0],3.5,.35,12);
  for(let x=-13;x<=13;x+=4.3){box(T,x,.25,.95,.3,.5,.3,'#1d1a17');sphere(T,x,.62,.95,.13,glow);}
  F.forEach(batch);
 }
 // ---- Langit studio: white, light oak slats, black-framed glass, living wall ----
 {const black=mat('#121315',{roughness:.45,metalness:.4}),oak=mat('#c9a77a',{roughness:.55}),greenWall=new THREE.MeshStandardMaterial({map:leaves,roughness:.95}),led=mat('#fbfbf6',{glow:1.6});
  const glassP=new THREE.MeshPhysicalMaterial({color:'#e7f1f1',transparent:true,opacity:.22,roughness:.05,metalness:.05,depthWrite:false});
  function partition(g,x,z,len,alongZ=true,h=3.2){for(let k=0;k<=len;k+=1.25){const px=alongZ?x:x-len/2+k,pz=alongZ?z-len/2+k:z;box(g,px,h/2,pz,.06,h,.06,black);}const p=keep(new THREE.Mesh(new THREE.BoxGeometry(alongZ?.03:len,h,alongZ?len:.03),glassP));p.position.set(x,h/2,z);g.add(p);box(g,x,h,z,alongZ?.08:len,.08,alongZ?len:.08,black);box(g,x,.04,z,alongZ?.08:len,.08,alongZ?len:.08,black);}
  function gridShelf(g,x,z,w=.5,d=1.6,h=1.7){for(const sx of [-1,1])for(const sz of [-1,1])box(g,x+sx*w/2,h/2,z+sz*d/2,.04,h,.04,black);for(let y=.05;y<=h;y+=h/3)box(g,x,y,z,w,.04,d,oak);for(let k=-d/2+d/3;k<d/2;k+=d/3)box(g,x,h/2,z+k,.04,h,.04,black);
   shrub(g,x,h/3+.05,z-d/3,.35,'#4a8a3e');box(g,x,h*2/3+.2,z+d/3,.3,.32,.26,'#e9e4da');shrub(g,x,h+.03,z,.4,'#3f7a36');}
  function slats(g,x,y,z,len,h,alongX=true){for(let k=0;k<len;k+=.22)box(g,alongX?x-len/2+k:x,y+h/2,alongX?z:z-len/2+k,alongX?.1:.08,h,alongX?.08:.1,oak);}
  function livingWall(g,x,y,z,w,h,rotY){const b=box(g,x,y+h/2,z,w,h,.12,mat('#24442a'));b.rotation.y=rotY;const p=plane(g,x+(rotY?0.07:0),y+h/2,z+(rotY?0:.07),w,h,greenWall,[0,rotY,0]);return p;}
  const F=[0,1,2].map(f=>{const g=new THREE.Group();g.name=`Langit studio floor ${f+1}`;floors[f].add(g);return register('langit',g);});
  const [G,M,T]=F;
  livingWall(G,-14.6,.25,6.6,7.4,3.9,Math.PI/2);livingWall(G,-1.6,.25,-11.55,2.2,3.9,0);
  slats(G,-8,.05,-11.05,10,3.7);slats(G,-14.58,.05,-3.2,5.6,3.7,false);
  partition(G,-2.75,-7.6,6.3);
  for(const x of [-6,6.9])for(const z of [0,4.8])gridShelf(G,x,z);
  for(const [x,z] of [[-13.4,10.6],[13.4,10.6],[-13.4,-10.3]]){cyl(G,x,.35,z,.38,.7,'#f2f1ec',.32,16);tree(G,x,.7,z,1.6,.7);}
  slats(M,9.8,.05,-11.05,8,3.2);livingWall(M,-9.6,.25,-11.1,7.4,2.9,0);for(const [x,z] of [[-13,-1.2],[4,-10.4]]){cyl(M,x,.35,z,.38,.7,'#f2f1ec',.32,16);tree(M,x,.7,z,1.6,.7);}
  for(const [x,z] of [[-13.8,.4],[3,-10.6],[13.6,.4]]){cyl(T,x,.4,z,.45,.8,'#f2f1ec',.38,16);tree(T,x,.8,z,2,.85);}
  F.forEach(batch);
 }
 for(const id of ['senja','langit'])for(const original of originalSofas){const v=sofaVariant(original,id);register(id,v);}

 const textures={parquet:herring,marbleBeige:beigeMarble};
 return {
  textures,
  apply(id){originalSofas.forEach(g=>g.visible=false);for(const [key,groups] of worlds)groups.forEach(g=>g.visible=key===id);},
  update(t){time.value=t;},
  snapshot:()=>[...worlds].map(([id,groups])=>({id,active:groups.every(g=>g.visible),groups:groups.length}))
 };
}
