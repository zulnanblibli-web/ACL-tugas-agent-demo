import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export function createCharacter(a) {
 const root=new THREE.Group(); root.name=a.name; root.userData.agentId=a.id;
 const mats=new Map();
 function box(x,y,z,w,h,d,color,parent=root){
  let mat=mats.get(color); if(!mat){mat=new THREE.MeshStandardMaterial({color,roughness:.86});mats.set(color,mat);}
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
 }
 // Stylized proportions and voxel construction; front faces +Z.
 const legs=[];for(const side of [-1,1]){const leg=new THREE.Group();leg.name=side<0?'LegL':'LegR';leg.position.set(side*.18,1.05,0);root.add(leg);box(0,-.36,0,.29,.94,.30,a.pants||'#dfd5bf',leg);box(0,-.94,.04,.25,.15,.37,a.skin,leg);const shoe=box(0,-.93,.08,.29,.22,.49,a.shoe,leg);shoe.name=side<0?'ShoeL':'ShoeR';shoe.userData.keep=true;legs.push(leg);}
 box(0,1.40,0,.74,.67,.38,a.color);box(0,1.05,0,.71,.08,.37,'#716455');
 box(0,1.74,0,.22,.15,.23,a.skin);box(0,2.06,0,.67,.61,.54,a.skin);
 box(-.365,2.03,0,.09,.20,.16,a.skin);box(.365,2.03,0,.09,.20,.16,a.skin);
 box(0,2.38,-.015,.72,.18,.58,a.hair);box(0,2.17,-.255,.70,.37,.08,a.hair);
 box(-.31,2.26,0,.10,.27,.53,a.hair);
 if(['long','bob','bun'].includes(a.style)){
  box(.32,2.15,-.10,.13,.48,.38,a.hair);box(-.32,2.15,-.10,.13,.48,.38,a.hair);
  if(a.style==='long')box(0,1.80,-.26,.66,.52,.16,a.hair);
  if(a.style==='bun')box(.15,2.42,-.29,.28,.28,.25,a.hair);
 }
 for(let i=0;i<6;i++){const x=-.29+i*.115;box(x,2.45+(i%3)*.025,-.04,.13,.09,.49,a.hair);if(a.style==='curly')box(x,2.34+(i%2)*.04,.23,.12,.16,.12,a.hair);}
 if(a.style==='swept')box(.13,2.33,.24,.45,.19,.13,a.hair);
 box(-.145,2.08,.28,.065,.095,.025,'#282723');box(.145,2.08,.28,.065,.095,.025,'#282723');
 box(0,1.99,.295,.08,.07,.07,a.skin);
 for(let i=0;i<3;i++)box(.04,1.26+i*.17,.199,.025,.025,.02,'#4b5b58');
 const arms=[];
 for(const s of [-1,1]){const arm=new THREE.Group();arm.name=s<0?'ArmL':'ArmR';arm.position.set(s*.48,1.63,0);root.add(arm);box(0,-.12,0,.23,.30,.34,a.color,arm);box(0,-.42,0,.20,.36,.25,a.skin,arm);arms.push(arm);}
 switch(a.accessory){
 case 'watch':box(-.48,1.12,0,.23,.09,.29,'#252c2d');box(-.48,1.12,.155,.13,.10,.03,'#666f6e');break;
 case 'glasses': for(const x of [-.17,.17]){box(x,2.09,.313,.28,.035,.035,'#20282a');box(x,1.94,.313,.28,.035,.035,'#20282a');box(x-.12,2.015,.313,.035,.15,.035,'#20282a');box(x+.12,2.015,.313,.035,.15,.035,'#20282a');}box(0,2.06,.32,.10,.035,.035,'#20282a');break;
 case 'headphones':box(0,2.48,0,.85,.08,.19,'#343c40');box(-.41,2.15,0,.14,.27,.23,'#343c40');box(.41,2.15,0,.14,.27,.23,'#343c40');break;
 case 'pencil':box(.53,1.08,.21,.055,.44,.055,'#e9b14b');break;
 case 'camera':box(.53,1.02,.23,.29,.20,.12,'#374547');box(.53,1.02,.31,.12,.12,.07,'#789d9e');break;
 default:box(.53,1.01,.20,.27,.36,.065,a.accessory==='blueprint'?'#76b3c1':a.accessory==='tablet'?'#303c42':'#d5b987');box(.53,1.01,.24,.21,.27,.015,'#e8e1cd');
 }
 // Vertex colours preserve every voxel colour while sharing one PBR material.
 // One body mesh and two articulated arm meshes per agent, instead of dozens of draws.
 const shared=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.86});
 for(const parent of [root,...arms,...legs]){
  parent.updateMatrix();const geoms=[];
  for(const mesh of [...parent.children])if(mesh.isMesh&&!mesh.userData.keep){
   mesh.updateMatrix();const g=mesh.geometry.clone().applyMatrix4(mesh.matrix);
   const colors=new Float32Array(g.attributes.position.count*3);
   for(let i=0;i<colors.length;i+=3){colors[i]=mesh.material.color.r;colors[i+1]=mesh.material.color.g;colors[i+2]=mesh.material.color.b;}
   g.setAttribute('color',new THREE.BufferAttribute(colors,3));geoms.push(g);parent.remove(mesh);mesh.geometry.dispose();
  }
  const merged=new THREE.Mesh(mergeGeometries(geoms),shared);merged.castShadow=true;merged.receiveShadow=true;parent.add(merged);geoms.forEach(g=>g.dispose());
 }

 root.traverse(o=>{o.userData.agentId=a.id;});
 const tracks=arms.map((arm,i)=>new THREE.QuaternionKeyframeTrack(arm.name+'.quaternion',[0,1.5,3],[0,0,0,1,0,0,(i?1:-1)*Math.sin(.0175),Math.cos(.0175),0,0,0,1]));
 const walkTracks=[...arms,...legs].map((part,i)=>{const sign=i%2?1:-1;const values=[0,1,2,3,4].flatMap(n=>{const angle=Math.sin(n*Math.PI/2)*.55*sign*(i<2?-1:1);return [Math.sin(angle/2),0,0,Math.cos(angle/2)];});return new THREE.QuaternionKeyframeTrack(part.name+'.quaternion',[0,.25,.5,.75,1],values);});root.animations=[new THREE.AnimationClip('Idle',3,tracks),new THREE.AnimationClip('Walk',1,walkTracks)];return root;
}
