import * as THREE from 'three';
// Layar monitor menyala. Isi layar digambar prosedural per jenis kerja agen (bukan tangkapan aplikasi asli),
// menyala terang saat agen duduk bekerja dan meredup saat kursinya kosong. Isi digulir pelan supaya tampak sedang dikerjakan.
const JENIS={'L.0':'laporan','L.1':'laporan','R.1':'riset','R.2':'riset','P.1':'naskah','P.2':'naskah','D.1':'desain','E.1':'video','E.2':'kode','E.3':'video','M.1':'jadwal','T.1':'wireframe','T.2':'wireframe','T.3':'kode','T.4':'terminal','T.5':'terminal'};
const GULIR={naskah:[0,.018],riset:[0,.012],laporan:[0,.02],kode:[0,.03],terminal:[0,.045],video:[.03,0]};
function acak(seed){return()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};}
function gambar(jenis){
 const c=document.createElement('canvas');const lebar=jenis==='video'?1024:512,tinggi=GULIR[jenis]&&jenis!=='video'?600:300;c.width=lebar;c.height=tinggi;const x=c.getContext('2d');const r=acak(jenis.length*977+31);
 const bar=(bx,by,w,h,col)=>{x.fillStyle=col;x.fillRect(bx,by,w,h);};
 const baris=(warna,mulai,akhir,kiri=24)=>{for(let y=mulai;y<akhir;y+=18){const w=60+r()*360;bar(kiri+(r()<.2?24:0),y,Math.min(w,lebar-kiri-30),8,warna[Math.floor(r()*warna.length)]);}};
 if(jenis==='kode'){bar(0,0,lebar,tinggi,'#141b26');bar(0,0,34,tinggi,'#1b2432');for(let y=10,i=0;y<tinggi;y+=17,i++){bar(10,y+2,14,5,'#3b4a5e');let px=46+Math.floor(r()*4)*16;const n=1+Math.floor(r()*4);for(let k=0;k<n&&px<lebar-20;k++){const w=20+r()*90;bar(px,y,w,8,['#7fb4ff','#e4c07a','#9bd58a','#d48fd8','#cdd6e2'][Math.floor(r()*5)]);px+=w+8;}}}
 else if(jenis==='terminal'){bar(0,0,lebar,tinggi,'#0b1110');for(let y=12;y<tinggi;y+=17){const lulus=r()>.15;bar(14,y,10,8,lulus?'#57d68d':'#e8b04f');bar(32,y,80+r()*300,8,lulus?'#9fd8b7':'#e9d29a');}}
 else if(jenis==='naskah'){bar(0,0,lebar,tinggi,'#eef0f3');bar(0,0,lebar,tinggi,'#f7f7f4');for(let y=14;y<tinggi;y+=96){bar(24,y,220,12,'#2e3b52');baris(['#8a93a3','#a3abb8'],y+26,y+88);}}
 else if(jenis==='laporan'){bar(0,0,lebar,tinggi,'#f2f4f7');for(let y=12;y<tinggi;y+=58){const kanan=r()>.5;const w=180+r()*200;bar(kanan?lebar-w-18:18,y,w,44,kanan?'#3d7bff':'#ffffff');bar(kanan?lebar-w-6:30,y+12,w-40,7,kanan?'#dbe7ff':'#9aa3b1');bar(kanan?lebar-w-6:30,y+26,(w-40)*.6,7,kanan?'#dbe7ff':'#b7bec9');}}
 else if(jenis==='riset'){bar(0,0,lebar,tinggi,'#f4f5f7');for(let y=12;y<tinggi;y+=100){bar(16,y,lebar-32,88,'#ffffff');bar(28,y+12,120,64,['#9cc3d8','#d9b48c','#a9c79a'][Math.floor(r()*3)]);bar(162,y+14,240,10,'#2f3a4c');baris(['#9aa3b1'],y+36,y+80,162);for(let k=0;k<6;k++){const h=10+r()*44;bar(420+k*12,y+76-h,8,h,'#3d7bff');}}}
 else if(jenis==='video'){bar(0,0,lebar,tinggi,'#1a1d24');bar(0,0,lebar,150,'#111318');for(let k=0;k<4;k++){bar(40+k*250,22,130,110,['#3a5a7a','#6d4d6b','#4d6b4f','#7a6440'][k]);}for(let t=0;t<4;t++){let px=0;while(px<lebar){const w=40+r()*150;bar(px+2,166+t*32,w-4,24,['#4d8df7','#e0a14b','#5cc28a','#c36fd1'][t]);px+=w+(r()*30);}}for(let px=0;px<lebar;px+=20)bar(px,154,1,8,'#5a6170');}
 else if(jenis==='desain'){bar(0,0,lebar,tinggi,'#2a2d33');bar(0,0,60,tinggi,'#22252a');for(let k=0;k<6;k++)bar(18,16+k*44,24,24,'#4a4f58');for(let k=0;k<3;k++){const ax=84+k*140;bar(ax,40,124,156,'#f3efe7');bar(ax+10,52,104,70,['#d97a4a','#3d7bff','#2f9e7a'][k]);bar(ax+10,132,90,9,'#2b2f36');bar(ax+10,148,70,7,'#8d939c');bar(ax+10,170,40,14,'#2b2f36');}bar(84,220,400,58,'#33373e');}
 else if(jenis==='wireframe'){bar(0,0,lebar,tinggi,'#f6f7f9');x.strokeStyle='#5d6b80';x.lineWidth=3;for(const [bx,by,w,h] of [[24,22,200,120],[260,22,226,56],[260,92,108,50],[378,92,108,50],[24,160,462,120]]){x.strokeRect(bx,by,w,h);x.beginPath();x.moveTo(bx,by);x.lineTo(bx+w,by+h);x.stroke();}bar(40,176,180,10,'#3d7bff');bar(40,198,300,7,'#9aa3b1');}
 else if(jenis==='jadwal'){bar(0,0,lebar,tinggi,'#f4f5f7');bar(0,0,lebar,34,'#2f3a4c');for(let k=0;k<7;k++)for(let b=0;b<4;b++){const cx=12+k*71,cy=44+b*63;bar(cx,cy,64,56,'#ffffff');if(r()>.45)bar(cx+6,cy+8,52,16,['#3d7bff','#e0a14b','#5cc28a'][Math.floor(r()*3)]);}}
 else{bar(0,0,lebar,tinggi,'#0d1117');x.fillStyle='#24456e';x.font='700 120px Arial';x.textAlign='center';x.fillText('N',lebar/2,tinggi/2+42);}
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;
 if(jenis==='video')t.repeat.set(.5,1);else if(GULIR[jenis])t.repeat.set(1,.5);t.anisotropy=4;return t;
}
export function createScreens(){
 const tekstur=new Map(),milik=new Map(),target=new Map();
 const ambil=jenis=>{if(!tekstur.has(jenis))tekstur.set(jenis,gambar(jenis));return tekstur.get(jenis);};
 const bahan=(jenis,terang)=>{const map=ambil(jenis);const m=new THREE.MeshStandardMaterial({color:'#000000',emissive:'#ffffff',emissiveMap:map,emissiveIntensity:terang,roughness:.32,metalness:0});m.userData.screen=jenis;return m;};
 const siaga=bahan('siaga',.55);
 return {
  // Bahan layar untuk agen id (satu bahan per agen supaya bisa menyala/meredup sendiri); tanpa id = layar siaga.
  untuk(id){if(!id||!JENIS[id])return siaga;if(!milik.has(id)){milik.set(id,bahan(JENIS[id],1.05));target.set(id,1.05);}return milik.get(id);},
  nyala(id,on){if(milik.has(id))target.set(id,on?1.05:.07);},
  update(detik,dt=0){for(const [jenis,[gx,gy]] of Object.entries(GULIR)){const t=tekstur.get(jenis);if(t){t.offset.x=(detik*gx)%1;t.offset.y=(-detik*gy)%1;}}
   for(const [id,m] of milik){const tuju=target.get(id);m.emissiveIntensity+= (tuju-m.emissiveIntensity)*Math.min(1,dt>0?dt*3:1);}},
  snapshot(){return [...milik].map(([id,m])=>({id,jenis:m.userData.screen,terang:+m.emissiveIntensity.toFixed(2)}));}
 };
}
