import * as THREE from 'three';
import {createThemeWorlds} from './theme-worlds.js';
// Three choices; the grotto opens its dedicated single-floor scene. The two legacy themes, each with its own Nexa Office building and Nexa Studio interior (theme-worlds.js).
// Lighting and backdrop differ between the exterior (Office) and interior (Studio) views.
export const themes=[
 {id:'senja',previewBackground:'#3b2f3c',name:'Menara Senja',tag:'Menara mewah · interior hangat',
  description:'Office: menara sirip perunggu dengan balkon taman dan kolam infinity di atap. Studio: hijau tua, kuningan, kayu walnut dan chandelier.',
  colors:['#1d3a2e','#c9a35a','#e9a06c'],
  exteriorTitle:'Nexa Office · Menara Senja',exteriorText:'Menara bersirip perunggu, balkon taman, kolam infinity di atap.',
  exteriorCamera:{target:[0,14,4],offset:[52,24,64]},
  roles:{wood:'#5b3c27',stone:'#2f2a26',tile:'#7a5537',wall:'#1d3a2e',metal:'#c9a35a',frame:'#16130f',fabric:'#2f5a43',rug:'#22392f',panel:'#173127',slat:'#b48a4a'},
  textures:{tile:'parquet'},
  views:{
   exterior:{background:'linear-gradient(180deg,#2c3356 0%,#6d5478 38%,#d98a6a 72%,#f2b984 100%)',fog:['#a7768a',95,320],sun:['#ffb37c',2.3,[-40,24,34]],hemi:.75,environment:.75},
   interior:{background:'radial-gradient(ellipse at 50% 45%,#3a2c22,#120d0a)',fog:['#1e1712',90,300],sun:['#ffd9aa',1.9,[-18,32,15]],hemi:.95,environment:.75}
  }},
 {id:'langit',previewBackground:'#1d2c4a',name:'Griya Langit',tag:'Penthouse · kantor terang',
  description:'Office: penthouse di puncak gedung dengan teras rumput, kolam dan tangga spiral mengelilingi pohon. Studio: putih, kayu oak, kaca berbingkai hitam, dinding tanaman.',
  colors:['#f3f1ec','#c9a77a','#1d2c4a'],
  exteriorTitle:'Nexa Office · Griya Langit',exteriorText:'Penthouse dua level di atas kota, teras rumput dan kolam.',
  exteriorCamera:{target:[0,3,3],offset:[48,32,56]},
  roles:{wood:'#cfae80',stone:'#f2f0eb',tile:'#e6dccb',wall:'#f7f6f2',metal:'#1a1b1d',frame:'#121315',fabric:'#2c2f33',rug:'#e3dacb',panel:'#f4f2ee',slat:'#c9a77a'},
  textures:{tile:'marbleBeige'},
  views:{
   exterior:{background:'linear-gradient(180deg,#0b1730 0%,#1f3a66 50%,#5f82b2 100%)',fog:['#223a63',90,300],sun:['#cdd9ff',1.4,[-20,40,25]],hemi:.7,environment:.55},
   interior:{background:'radial-gradient(ellipse at 50% 50%,#eceeea,#c9cbc6)',fog:['#d6d8d3',90,300],sun:['#fffaf0',2.7,[-18,32,15]],hemi:1.35,environment:.45}
  }},
 {id:'grotto',name:'The Grotto',tag:'Gua alam · studio 360°',description:'Studio satu lantai dengan 15 zona, vault batu alam, kaca lengkung, taman, kolam dan animasi 18 agen.',previewBackground:'#273d30',colors:['#293f30','#b29b78','#d9b570'],href:'/nexa.html?theme=grotto'}
];
const roleColors={wall:['#e6e2d5','#dedfd2','#c8c2b1','#d7cbb4','#d3c5a5','#c6b99b'],fabric:['#c0c6b5','#bcbca9','#c2bfae','#c5c7b6','#b6be9f','#d2cbb3','#b8b29e','#c4c2af'],rug:['#547b80','#778a71','#d4d3bd','#b6bea6','#657b78','#8a8370'],metal:['#81715a'],frame:['#202c30'],panel:['#3f4a42'],slat:['#727963']};
// Alamat scene tema yang punya halaman sendiri (The Grotto), dengan parameter halaman ini ikut terbawa
// (mis. ringkas/asli/demo/kualitas saat kantor disematkan di situs), kecuali pilihan tema lama.
export function themeHref(theme,search=location.search){const u=new URL(theme.href,location.href);new URLSearchParams(search).forEach((v,k)=>{if(!['theme','tema'].includes(k)&&!u.searchParams.has(k))u.searchParams.set(k,v);});return u.pathname+u.search;}
export function createThemeManager({scene,floors,shell,context,glassMaterials,sun,hemi,camera,groundPlane,viewport,onChange}){
 const records=new Map();scene.traverse(o=>{if(!o.isMesh)return;for(const m of Array.isArray(o.material)?o.material:[o.material]){if(records.has(m)||!m.color)continue;let role=m.userData.themeRole;if(!role){const hex='#'+m.color.getHexString();role=Object.keys(roleColors).find(key=>roleColors[key].includes(hex));}if(role)records.set(m,{role,color:m.color.clone(),map:m.map,bumpMap:m.bumpMap,bumpScale:m.bumpScale,roughness:m.roughness,metalness:m.metalness});}});
 const worlds=createThemeWorlds({scene,floors,shell,context,glassMaterials});let active=themes[0].id,view='exterior',storageAvailable=true;
 camera.far=640;camera.updateProjectionMatrix();
 function light(){const theme=themes.find(t=>t.id===active),v=theme.views[view];sun.color.set(v.sun[0]);sun.intensity=v.sun[1];sun.position.set(...v.sun[2]);hemi.intensity=v.hemi;scene.environmentIntensity=v.environment;scene.fog.color.set(v.fog[0]);scene.fog.near=v.fog[1];scene.fog.far=v.fog[2];viewport.style.background=v.background;if(groundPlane)groundPlane.visible=view!=='exterior';document.documentElement.dataset.officeView=view;}
 function apply(id,{save=true}={}){const theme=themes.find(t=>t.id===id);if(!theme)return false;if(theme.href){if(save)try{localStorage.setItem('nexa-office-theme',id)}catch{}window.location.assign(themeHref(theme));return true;}
  for(const [m,base] of records){m.color.copy(base.color);m.map=base.map;m.bumpMap=base.bumpMap;m.bumpScale=base.bumpScale;m.roughness=base.roughness;m.metalness=base.metalness;
   if(theme.roles[base.role])m.color.set(theme.roles[base.role]);
   const texture=theme.textures[base.role]&&worlds.textures[theme.textures[base.role]];
   if(texture){m.map=texture;m.bumpMap=texture;m.bumpScale=.01;m.color.set('#ffffff');m.roughness=id==='langit'?.32:.5;}
   m.needsUpdate=true;}
  worlds.apply(id);active=id;light();document.documentElement.dataset.officeTheme=id;
  if(save)try{localStorage.setItem('nexa-office-theme',id);}catch{storageAvailable=false;}onChange?.(theme);return true;}
 let saved;try{saved=localStorage.getItem('nexa-office-theme');}catch{storageAvailable=false;}const requested=new URLSearchParams(location.search).get('theme');apply(themes.some(t=>t.id===requested)?requested:themes.some(t=>t.id===saved)?saved:themes[0].id,{save:false});if(requested)try{const u=new URL(location.href);u.searchParams.delete('theme');history.replaceState(null,'',u.pathname+u.search+u.hash)}catch{}
 return {apply,setView(next){view=next==='exterior'?'exterior':'interior';light();},get view(){return view;},get theme(){return themes.find(t=>t.id===active);},update:time=>worlds.update(time),get active(){return active;},get storageAvailable(){return storageAvailable;},snapshot:()=>({id:active,materials:[...records].map(([m,b])=>({role:b.role,color:'#'+m.color.getHexString(),roughness:m.roughness,metalness:m.metalness,map:m.map?.uuid||null})),decorations:worlds.snapshot()})};
}
