import * as THREE from 'three';
import {createSimulation} from './simulation.js';
export function createActivities({agents,models,homes,headings,screens,scene,wrap,camera,visibleFloor,onSelect,ownerModel,onOwner}){
 const simulation=createSimulation(agents,homes,headings),actors=simulation.actors;
 const layer=document.createElement('div');layer.className='agent-label-layer';layer.setAttribute('aria-label','Nama, jabatan dan kegiatan agen');wrap.append(layer);
 const labels=new Map(),rigs=new Map();
 const propMaterial=new THREE.MeshStandardMaterial({color:'#eee6d1',roughness:.3});
 function register(id,model){const parts={};model.userData.activityRig=true;for(const name of ['ArmL','ArmR','LegL','LegR','ShoeL','ShoeR'])parts[name]=model.getObjectByName(name);const cup=new THREE.Mesh(new THREE.CylinderGeometry(.10,.075,.16,16),propMaterial);cup.position.set(0,-.4,.10);cup.visible=false;if(parts.ArmR)parts.ArmR.add(cup);else model.add(cup);parts.cup=cup;
 const controller=new THREE.Mesh(new THREE.BoxGeometry(.48,.10,.20),new THREE.MeshStandardMaterial({color:'#dadfd9',roughness:.4}));controller.position.set(0,1.37,.38);controller.visible=false;model.add(controller);parts.controller=controller;rigs.set(id,parts);}
 for(const a of agents){const label=document.createElement('button');label.className='agent-label';label.dataset.agentLabel=a.id;label.title=`${a.name} · ${a.job}`;label.innerHTML='<b></b><span></span><small></small>';label.querySelector('b').textContent=a.name;label.querySelector('span').textContent=a.title||a.job;label.addEventListener('click',()=>onSelect(a.id));layer.append(label);labels.set(a.id,label);register(a.id,models.get(a.id));}
 const ownerLabel=document.createElement('button');ownerLabel.className='agent-label';ownerLabel.dataset.ownerLabel='true';ownerLabel.innerHTML='<b>Zulnan</b><span>Owner</span><small>Bersantai di sudut kopi</small>';ownerLabel.onclick=onOwner;layer.append(ownerLabel);
 const p=new THREE.Vector3();
 function sync(dt=0){for(const actor of actors){const model=models.get(actor.id);if(!model)continue;if(!rigs.has(actor.id)||model.userData.activityRig!==true){register(actor.id,model);model.userData.activityRig=true;}
  const isDemo=simulation.running||simulation.time>0;const working=actor.pose==='work',sitting=working||['game','rest'].includes(actor.pose);model.position.set(...actor.pos);model.position.y+=isDemo&&sitting?-.12:0;
  const diff=THREE.MathUtils.euclideanModulo(actor.heading-model.rotation.y+Math.PI,Math.PI*2)-Math.PI;model.rotation.y+=diff*Math.min(1,dt*9||1);
  const rig=rigs.get(actor.id);if(!isDemo)for(const name of ['LegL','LegR','ArmL','ArmR'])if(rig[name])rig[name].rotation.x=0;
  if(isDemo)for(const name of ['ArmL','ArmR','LegL','LegR'])if(rig[name])rig[name].rotation.set(0,0,0);
  const t=simulation.time,walking=actor.phase==='walking';
  // Monitor menyala selama agen duduk bekerja di kursinya; kursi kosong = layar redup.
  if(screens)screens.nyala(actor.id,!isDemo||(actor.phase==='work'&&!walking&&actor.room===actor.homeRoom));
  if(isDemo&&walking){for(const [name,sign]of [['ArmL',1],['ArmR',-1],['LegL',-1],['LegR',1]])if(rig[name])rig[name].rotation.x=Math.sin(actor.legPhase)*.55*sign;model.position.y+=Math.abs(Math.sin(actor.legPhase))*.022;}
  else if(isDemo){if(sitting){for(const name of ['LegL','LegR'])if(rig[name])rig[name].rotation.x=-1.05;}if(working){if(rig.ArmL)rig.ArmL.rotation.x=-.85+Math.sin(t*8+actor.index)*.07;if(rig.ArmR)rig.ArmR.rotation.x=-.85+Math.cos(t*8+actor.index)*.07;}
   if(actor.pose==='coffee'){if(rig.ArmR)rig.ArmR.rotation.x=-.8-1.15*(.5+.5*Math.sin(t*1.5));}
   if(actor.pose==='game'){if(rig.ArmL){rig.ArmL.rotation.x=-.95;rig.ArmL.rotation.z=1.0;}if(rig.ArmR){rig.ArmR.rotation.x=-.95;rig.ArmR.rotation.z=-1.0;}}
   if(actor.pose==='read'||actor.pose==='prayer'){if(rig.ArmL)rig.ArmL.rotation.x=-.5;if(rig.ArmR)rig.ArmR.rotation.x=-.5;}
   if(actor.pose==='swim'){model.position.y+=Math.sin(t*2)*.055;for(const [name,sign]of [['ArmL',1],['ArmR',-1]])if(rig[name]){rig[name].rotation.x=Math.sin(t*2)*.7;rig[name].rotation.z=sign*(.8+Math.cos(t*2)*.5);}}
  }
  rig.cup.visible=isDemo&&!walking&&actor.pose==='coffee';rig.controller.visible=isDemo&&!walking&&actor.pose==='game';for(const name of ['ShoeL','ShoeR'])if(rig[name])rig[name].visible=!(isDemo&&actor.floor===0&&actor.pos[0]>6.5&&actor.pos[0]<12.5&&actor.pos[2]<-3.5);
  model.visible=visibleFloor(actor.floor);const label=labels.get(actor.id);p.copy(model.position);p.y+=1.95;p.project(camera);const visible=model.visible&&p.z<1&&Math.abs(p.x)<1.05&&Math.abs(p.y)<1.05;label.hidden=!visible;if(visible){label.style.transform=`translate(-50%,-100%) translate(${(p.x+1)*wrap.clientWidth/2}px,${(1-p.y)*wrap.clientHeight/2}px)`;label.dataset.phase=actor.phase;label.dataset.distant=String(camera.position.distanceTo(model.position)>22);label.querySelector('small').textContent=isDemo?actor.activity:'Preview';}
 }
 if(ownerModel){ownerModel.getWorldPosition(p);const ownerFloor=Math.max(0,Math.min(2,Math.floor((p.y+.5)/6)));p.y+=1.6;p.project(camera);ownerLabel.hidden=!visibleFloor(ownerFloor)||Math.abs(p.x)>1||Math.abs(p.y)>1||p.z>1;ownerLabel.style.transform=`translate(-50%,-100%) translate(${(p.x+1)*wrap.clientWidth/2}px,${(1-p.y)*wrap.clientHeight/2}px)`;}
 }
 // Place all actors in world coordinates so a walking actor can traverse floor boundaries.
 for(const actor of actors){const model=models.get(actor.id);scene.attach(model);model.position.set(...actor.pos);}

 return {simulation,sync,register(id,model){scene.attach(model);model.userData.activityRig=false;register(id,model);},get(id){return actors.find(a=>a.id===id);},labelCount:()=>labels.size};
}
