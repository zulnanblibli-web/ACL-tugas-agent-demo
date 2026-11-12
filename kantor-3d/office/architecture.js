import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
// Procedural architectural details; opaque curtain wall is independent of cutaway floors.
export function addArchitecture(scene,floors,screens=null){
 const shell=new THREE.Group();shell.name='Nexa Office — opaque exterior';scene.add(shell);
 const context=new THREE.Group();context.name='Entrance and landscape';scene.add(context);
 const palette=new Map();const material=(color,roughness=.7,metalness=0)=>{const key=[color,roughness,metalness].join();if(!palette.has(key))palette.set(key,new THREE.MeshStandardMaterial({color,roughness,metalness}));return palette.get(key);};
 function finish(type){const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');let seed=63;const rand=()=>{seed=seed*16807%2147483647;return seed/2147483647;};ctx.fillStyle=type==='wood'?'#72553a':'#d0c5ad';ctx.fillRect(0,0,512,512);for(let i=0;i<1800;i++){ctx.strokeStyle=type==='wood'?`rgba(28,20,13,${rand()*.2})`:`rgba(94,82,61,${rand()*.07})`;const y=rand()*512;ctx.beginPath();ctx.moveTo(0,y);ctx.bezierCurveTo(180,y+rand()*6,350,y-rand()*9,512,y+rand()*3);ctx.stroke();}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(2,2);return new THREE.MeshStandardMaterial({map:t,bumpMap:t,bumpScale:type==='wood'?.012:.008,roughness:type==='wood'?.48:.7});}
 const walnut=finish('wood'),travertine=finish('stone');walnut.userData.themeRole='wood';travertine.userData.themeRole='stone';
 const bronze=material('#81715a',.3,.75),dark=material('#202c30',.48,.5),fabric=material('#b8b29e',.95),leather=material('#4a473e',.5);
 bronze.userData.themeRole='metal';dark.userData.themeRole='frame';fabric.userData.themeRole='fabric';
 const facadeCanvas=document.createElement('canvas');facadeCanvas.width=256;facadeCanvas.height=512;const fc=facadeCanvas.getContext('2d');const sky=fc.createLinearGradient(0,0,0,512);sky.addColorStop(0,'#263f4b');sky.addColorStop(.35,'#456a7e');sky.addColorStop(.64,'#829eac');sky.addColorStop(.72,'#627f8e');sky.addColorStop(1,'#28434f');fc.fillStyle=sky;fc.fillRect(0,0,256,512);fc.fillStyle='#c5d5da15';fc.beginPath();fc.moveTo(0,130);fc.bezierCurveTo(80,110,130,180,256,130);fc.lineTo(256,154);fc.bezierCurveTo(110,190,90,135,0,154);fc.fill();const facadeTexture=new THREE.CanvasTexture(facadeCanvas);facadeTexture.colorSpace=THREE.SRGBColorSpace;
 const mirror=new THREE.MeshPhysicalMaterial({color:'#a9c1cd',map:facadeTexture,metalness:.65,roughness:.10,clearcoat:1,clearcoatRoughness:.08,transparent:false,opacity:1,transmission:0,envMapIntensity:2.2});
 mirror.userData.themeRole='facade';const glassMaterials=[mirror];
 const light=new THREE.MeshStandardMaterial({color:'#fff2d0',emissive:'#ffd591',emissiveIntensity:1.8,roughness:.3});
 function box(g,x,y,z,w,h,d,m,r=0){const geo=r?new RoundedBoxGeometry(w,h,d,2,r):new THREE.BoxGeometry(w,h,d);const mesh=new THREE.Mesh(geo,typeof m==='string'?material(m):m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;}
 function cylinder(g,x,y,z,r,h,m,top=r){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(top,r,h,24),m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;}
 function sign(g,text,subtitle,x,y,z,w,h,{darkBackground=true,rotation=0}={}){
  const c=document.createElement('canvas');c.width=1536;c.height=512;const ctx=c.getContext('2d');ctx.fillStyle=darkBackground?'#17272c':'#d8ceb7';ctx.fillRect(0,0,1536,512);ctx.fillStyle=darkBackground?'#e4cda3':'#3c443d';ctx.textAlign='center';ctx.font='500 130px Arial';ctx.fillText(text,768,270);ctx.font='32px Arial';ctx.letterSpacing='8px';ctx.fillText(subtitle,768,375);const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
  const m=new THREE.MeshStandardMaterial({map:texture,roughness:.55,emissive:'#c1a16e',emissiveMap:texture,emissiveIntensity:.16});const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);mesh.position.set(x,y,z);mesh.rotation.y=rotation;g.add(mesh);mesh.userData.sign=text;return mesh;
 }
 function pot(g,x,y,z,scale=1){cylinder(g,x,y+.32*scale,z,.3*scale,.64*scale,travertine,.4*scale);cylinder(g,x,y+.63*scale,z,.31*scale,.035*scale,material('#403c2c'));for(let i=0;i<15;i++){const a=i*2.4;const leaf=new THREE.Mesh(new THREE.SphereGeometry(1,10,6),material(i%2?'#4c6441':'#344e37',.84));leaf.position.set(x+Math.cos(a)*.27*scale,y+(1+i*.055)*scale,z+Math.sin(a)*.27*scale);leaf.scale.set(.14*scale,.44*scale,.065*scale);leaf.rotation.set(.25,0,Math.cos(a)*.8);leaf.castShadow=true;g.add(leaf);}}
 // Complete envelope: ground volume, mezzanine volume and enclosed upper pool pavilion.
 const levels=[{y:0,z:0,d:24},{y:6,z:0,d:24},{y:12,z:-5,d:13}];
 for(const level of levels){const y=level.y,z=level.z,d=level.d;
  for(const side of [-1,1]){
   for(let i=0;i<12;i++){const x=-13.75+i*2.5;box(shell,x,y+2.73,z+side*(d/2+.12),2.42,5.40,.18,mirror);box(shell,x-1.25,y+2.75,z+side*(d/2+.25),.065,5.55,.12,bronze);}
   for(let i=0;i<Math.round(d/2);i++){const zz=z-d/2+(i+.5)*d/Math.round(d/2);box(shell,side*15.1,y+2.73,zz,.18,5.4,d/Math.round(d/2)-.07,mirror);box(shell,side*15.23,y+2.75,zz-d/Math.round(d/2)/2,.12,5.55,.065,bronze);}
  }
  box(shell,0,y+5.7,z,30.7,.34,d+.7,dark,.08);box(shell,0,y+.03,z,30.5,.18,d+.5,travertine,.04);
  box(shell,0,y+5.48,z+d/2+.27,30,.025,.04,light);
 }
 // Main roof and stepped terrace roof are opaque, hiding all contents from outside.
 box(shell,0,11.93,0,30.6,.30,24.6,travertine,.06);box(shell,0,17.85,-5,30.7,.34,13.7,dark,.08);
 for(let x=-14;x<=14;x+=2.8)box(shell,x,18.05,-5,1.9,.08,7.4,material('#253b43',.25,.6),.02);
 box(shell,0,12.15,7.1,29.2,.40,9.4,material('#697660'),.03); // green roof over front wing
 for(let x=-13;x<14;x+=1.4)pot(shell,x,12.38,10.2,.45);
 // Entrance: inset double doors, stone portal, canopy, address plate and brass handles.
 box(shell,0,1.8,12.30,5.9,3.6,.42,travertine,.10);box(shell,0,1.65,12.55,4.7,3.25,.12,mirror);
 box(shell,0,1.65,12.65,.055,3.3,.08,bronze);for(const x of [-.35,.35])box(shell,x,1.65,12.78,.045,.65,.07,bronze,.015);
 box(shell,0,3.8,13.4,7.2,.20,3.8,dark,.08);box(shell,0,3.67,13.4,6.5,.025,3.1,light);
 sign(shell,'NEXA OFFICE','CREATIVE WORKSPACE',0,4.65,12.34,12,1.65);
 sign(shell,'NEXA','OFFICE',15.38,8.5,-1,5,1.9,{rotation:Math.PI/2});
 // Plinth, stepping stones, landscape strips and warm path lighting.
 box(context,0,-.56,1.5,36,.25,32,travertine,.16);box(context,0,-.40,16.6,7,.12,6,walnut,.03);
 for(let i=0;i<4;i++)box(context,0,-.30-i*.07,13.1+i*.7,7+i*.30,.16,.75,travertine,.03);
 for(const x of [-12,12]){box(context,x,-.12,14.7,7,.70,2.0,material('#515e4b'),.12);for(let i=0;i<4;i++)pot(context,x-2.4+i*1.6,.24,14.7,.65);}
 for(const x of [-5,5])for(const z of [13.8,16.7]){box(context,x,.25,z,.14,1.2,.14,dark,.03);box(context,x,.65,z+.09,.10,.20,.025,light);}
 // Executive wing on mezzanine: two dedicated, fully furnished offices.
 const mid=floors[1];box(mid,0,-.20,7,30,.4,11,travertine);box(mid,0,.04,7,29.7,.08,10.7,walnut);
 for(const x of [-14.7,0,14.7])box(mid,x,1.85,7,.14,3.7,10.6,material('#c8c2b1'));
 for(const [x,w]of [[-11.55,6.9],[0,13],[11.55,6.9]])box(mid,x,1.85,1.7,w,3.7,.14,material('#d7cbb4'));for(const x of [-7.3,7.3])box(mid,x,3.12,1.7,1.6,1.16,.14,material('#d7cbb4'));
 // Slatted feature walls and readable room signage. Front remains a deliberate interior cutaway.
 for(const [cx,title,sub]of [[-7.3,'ZUNO','LEAD OFFICE'],[7.3,'ZULNAN','OWNER OFFICE']]){
  for(let x=cx-6.8;x<cx+6.8;x+=.25)if(Math.abs(x-cx)>.85)box(mid,x,1.82,1.86,.07,3.6,.10,walnut);
  const door=box(mid,cx-.74,1.23,2.60,1.48,2.46,.08,walnut,.025);door.rotation.y=-Math.PI/2;for(const dx of [-.80,.80])box(mid,cx+dx,1.28,1.97,.055,2.56,.055,bronze);box(mid,cx,2.57,1.97,1.65,.06,.055,bronze);box(mid,cx-.67,1.12,3.13,.05,.035,.22,bronze,.01);
  sign(mid,title,sub,cx+3.2,2.58,1.97,4.8,1.35);
  // Executive desk: stone top, walnut pedestal, brass legs, leather pad, monitor, keyboard, lamp.
  box(mid,cx,1.05,6,4.7,.16,1.85,travertine,.07);box(mid,cx-1.65,.52,6,.9,1,1.45,walnut,.04);box(mid,cx+1.75,.52,6,.07,1,.07,bronze);
  for(let i=0;i<3;i++){box(mid,cx-1.65,.20+i*.30,6.74,.82,.025,.035,bronze);}
  box(mid,cx,1.15,5.8,1.7,.025,.85,leather,.03);box(mid,cx,1.65,6.35,1.35,.78,.08,dark,.04);box(mid,cx,1.65,6.30,1.24,.65,.012,screens?screens.untuk(cx<0?'L.0':null):material('#779398',.3));box(mid,cx,1.26,6.35,.05,.35,.05,bronze);box(mid,cx,1.14,6.35,.5,.025,.32,bronze);box(mid,cx,1.19,5.58,.85,.04,.23,material('#505a57'),.03);
  for(let j=0;j<5;j++)box(mid,cx-.30+j*.14,1.215,5.59,.08,.008,.15,material('#8c958c'));
  cylinder(mid,cx+1.8,1.18,6.3,.19,.08,bronze);box(mid,cx+1.8,1.65,6.3,.025,.9,.025,bronze);box(mid,cx+1.5,2.1,6.3,.65,.045,.28,dark,.03);box(mid,cx+1.5,2.07,6.3,.55,.012,.21,light);
  box(mid,cx-1,1.18,5.9,.43,.06,.58,material('#e8ddc2'));cylinder(mid,cx+1.1,1.27,5.5,.085,.20,material('#e7e2d2'));
  // Executive chair plus two visitor chairs, each with upholstery, swivel and armrests.
  for(const [xx,zz,executive]of [[cx,4.55,true],[cx-.95,7.6,false],[cx+.95,7.6,false]]){
   box(mid,xx,.58,zz,executive?.92:.8,.22,.82,executive?leather:fabric,.10);box(mid,xx,1.10,zz+(executive?-.35:.35),.82,executive?1.1:.84,.16,executive?leather:fabric,.07);
   cylinder(mid,xx,.29,zz,.04,.5,bronze);box(mid,xx,.10,zz,.76,.05,.08,bronze);box(mid,xx,.10,zz,.08,.05,.76,bronze);for(const side of [-1,1])box(mid,xx+side*.45,.83,zz,.07,.07,.65,bronze,.02);
  }
  // Credenza, books, curated wall art and a private lounge corner.
  box(mid,cx-4.7,.6,3.4,2.8,1.2,.70,walnut,.06);for(let i=0;i<9;i++)box(mid,cx-5.8+i*.22,1.4,3.4,.13,.4+(i%3)*.06,.25,material(['#a79771','#d5c6a6','#596b62'][i%3]));
  box(mid,cx+4.5,.35,9,3,.5,1.1,fabric,.12);box(mid,cx+4.5,.9,9.45,3,1,.25,fabric,.10);cylinder(mid,cx+4.4,.60,7.7,.60,.10,walnut);cylinder(mid,cx+4.4,.30,7.7,.12,.55,bronze);
  pot(mid,cx-6,0,10.2,1.2);pot(mid,cx+6,0,3.3,1.1);
  box(mid,cx,.10,6.5,8,.035,6,material(cx<0?'#657b78':'#8a8370',.95));
  // Small ceiling-independent pendants retain a clear cutaway view.
  for(const xx of [cx-1.4,cx+1.4]){cylinder(mid,xx,3.8,5.9,.015,.6,bronze);cylinder(mid,xx,3.48,5.9,.35,.12,dark);cylinder(mid,xx,3.40,5.9,.30,.015,light);}
 }
 // Ground lobby studio identity and reception desk near the main entry.
 const ground=floors[0];box(ground,0,1.35,9.3,5.7,2.7,.18,walnut,.06);sign(ground,'NEXA STUDIO','IDEAS INTO REALITY',0,1.70,9.42,4.9,1.6);
 box(ground,0,.65,10.25,4.8,1.3,.85,travertine,.08);box(ground,0,1.34,10.25,5,.08,1.0,walnut,.03);pot(ground,-3.4,0,9.8,.9);pot(ground,3.4,0,9.8,.9);
 // Batching retains textured and emissive material detail without excessive draw calls.
 for(const group of [shell,context,...floors]){group.updateMatrixWorld(true);const byMat=new Map(),remove=[];group.traverse(o=>{if(o.isMesh&&!o.userData.sign&&!o.parent?.userData.workspaceSofa){const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(new THREE.Matrix4().copy(group.matrixWorld).invert().multiply(o.matrixWorld));if(!byMat.has(o.material))byMat.set(o.material,[]);byMat.get(o.material).push(geo);remove.push(o);}});for(const o of remove){o.removeFromParent();o.geometry.dispose();}for(const [m,geos]of byMat){const mesh=new THREE.Mesh(mergeGeometries(geos),m);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);geos.forEach(g=>g.dispose());}}
 return {shell,context,glassMaterials};
}
