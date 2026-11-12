import * as T from 'three';
import {ImprovedNoise} from 'three/addons/math/ImprovedNoise.js';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
// A continuous, watertight vaulted envelope, rather than a perimeter of separate boulders.
export function addGrottoArchitecture(root,{stone,bronze,glow,wood}){
 const noise=new ImprovedNoise();const roof=new T.Group();roof.name='Grotto vault / removable cutaway';root.add(roof);roof.visible=false;roof.userData.dynamic=true;
 const cave=new T.MeshStandardMaterial({color:'#b49a78',roughness:.91,side:T.DoubleSide,map:stone.map,bumpMap:stone.bumpMap,bumpScale:.16});
 function vault(a0,a1,parent){const nx=96,nz=100,vertices=[],uv=[],indices=[];for(let j=0;j<=nz;j++){const z=-31+j/nz*77;for(let i=0;i<=nx;i++){const a=a0+(a1-a0)*i/nx;const ridge=noise.noise(Math.cos(a)*3,z*.08,3)*2.6+noise.noise(a*8,z*.24,9)*.7+noise.noise(a*20,z*.7,2)*.15;const r=33.4+ridge;const y=2.2+Math.sin(a)*(15.8+Math.sin(z*.1)*1.5)+ridge*.7;vertices.push(Math.cos(a)*r,y,z);uv.push(a*5,z*.09)}}for(let j=0;j<nz;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i,b=a+1,c=a+nx+1,d=c+1;const az=a0+(a1-a0)*(i+.5)/nx,zz=-31+(j+.5)/nz*77;if(!(az>1.25&&az<1.9&&zz>-29&&zz<-17))indices.push(a,c,b,b,c,d)}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();const mesh=new T.Mesh(g,cave);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh}
 vault(.12,.3,root);vault(Math.PI-.3,Math.PI-.12,root);vault(.3,Math.PI-.3,roof);
 // Rear elevation and entrance elevation: both exist for a complete 360-degree orbit.
 function elevation(z,front=false){const shape=new T.Shape();shape.moveTo(-33.3,0);shape.lineTo(33.3,0);for(let i=0;i<=80;i++){const a=i/80*Math.PI;shape.lineTo(Math.cos(a)*33.3,2.2+Math.sin(a)*15.8)}shape.closePath();if(front){const opening=new T.Path();opening.moveTo(-7,0);opening.lineTo(-7,5);opening.absarc(0,5,7,Math.PI,0,true);opening.lineTo(7,0);opening.closePath();shape.holes.push(opening)}const g=new T.ExtrudeGeometry(shape,{depth:1.1,steps:1,bevelEnabled:true,bevelSize:.3,bevelThickness:.3,bevelSegments:3});const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*.07,uv.getY(i)*.07);const pp=g.attributes.position;for(let i=0;i<pp.count;i++){const x=pp.getX(i),y=pp.getY(i);pp.setZ(i,pp.getZ(i)+noise.noise(x*.16,y*.16,5)*.5)}g.computeVertexNormals();const m=new T.Mesh(g,cave);m.position.z=z;m.castShadow=true;m.receiveShadow=true;roof.add(m)}
 elevation(-32);elevation(45,true);
 // Carved ribs, curved glass entrances and cove light strips on all working-room portals.
 const glass=new T.MeshPhysicalMaterial({color:'#d7e4dc',transparent:true,opacity:.075,roughness:.08,metalness:.1,clearcoat:1,side:T.DoubleSide,depthWrite:false});
 const portals=[];
 function arch(x,z,w,h){const path=new T.CatmullRomCurve3(Array.from({length:41},(_,i)=>{const a=Math.PI-i/40*Math.PI;return new T.Vector3(x+Math.cos(a)*w/2,2+Math.sin(a)*(h-2),z)}));const rib=new T.Mesh(new T.TubeGeometry(path,60,.24,10,false),stone);rib.castShadow=true;rib.receiveShadow=true;root.add(rib);const strip=new T.Mesh(new T.TubeGeometry(path,60,.026,6,false),glow);strip.position.z=.27;root.add(strip);for(const side of [-1,1]){const jamb=new T.Mesh(new T.CylinderGeometry(.25,.3,2,16),stone);jamb.position.set(x+side*w/2,1,z);root.add(jamb);const frame=new T.Mesh(new T.CylinderGeometry(.025,.025,4,8),bronze);frame.position.set(x+side*(w/2-.35),2,z+.15);root.add(frame)}
  // Half-height front panes retain a central walkable doorway, with slim bronze rails.
  for(const side of [-1,1]){const pane=new T.Mesh(new T.PlaneGeometry(w/2-1.3,2.4),glass);pane.position.set(x+side*(w/4+.65),1.4,z+.1);root.add(pane)}portals.push({x,z,w,h})}
 for(const x of [-22,22])for(const z of [-9,2,13])arch(x,z+4.5,11.6,5.9);
 arch(-22,30,11.6,5.9);arch(-20,-18,14.5,6.2);arch(20,-18,14.5,6.2);arch(0,-18,16,6.4);
 // Terraced entry and a planted garden courtyard around the natural pool.
 const turf=new T.MeshStandardMaterial({color:'#697758',roughness:.93});new T.TextureLoader().load('/assets/nexa/materials/grass-color.jpg',t=>{t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(3,2);turf.map=t;turf.needsUpdate=true});
 for(const [x,z,w,d] of [[-21,38,12,9],[1,36,5,10],[29,25,4,12]]){const bed=new T.Mesh(new T.BoxGeometry(w,.18,d),turf);bed.position.set(x,.04,z);bed.receiveShadow=true;root.add(bed)}
 // Rock spurs and hanging greenery are supported by the vault; nothing floats as a standalone roof beam.
 const vineMat=new T.MeshStandardMaterial({color:'#506d37',roughness:.85,side:T.DoubleSide});
 for(let i=0;i<28;i++){const x=-29+(i%14)*4.4,z=i<14?-29:-16;const length=1.7+(i%5)*.36;const path=new T.CatmullRomCurve3([new T.Vector3(x,9,z),new T.Vector3(x+.2,8,z+.1),new T.Vector3(x-.25,9-length,z+.2)]);const stem=new T.Mesh(new T.TubeGeometry(path,12,.019,5,false),vineMat);root.add(stem);for(let j=0;j<8;j++){const t=j/8,p=path.getPoint(t),leaf=new T.Mesh(new T.SphereGeometry(1,7,5),vineMat);leaf.position.copy(p);leaf.position.x+=(j%2?1:-1)*.13;leaf.scale.set(.17,.06,.3);leaf.rotation.z=j;root.add(leaf)}}
 return {roof,portals,setRoof(visible){roof.visible=visible},get roofVisible(){return roof.visible}};
}
