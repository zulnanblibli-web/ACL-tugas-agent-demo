// Sumber identitas: AGENTS-18.md. Penampilan adalah desain voxel baru, bukan status backend.
export const rooms = [
 {id:'lead',name:'Ruang ZUNO',floor:1,pos:[-7.3,6,6],detail:'Kantor Lead: meja eksekutif, layar koordinasi, perpustakaan kecil dan area diskusi.'},
 {id:'owner',name:'Ruang Zulnan',floor:1,pos:[7.3,6,6],detail:'Kantor Owner: meja pribadi, kursi tamu, rak buku, lounge dan lampu kerja.'},
 {id:'konten',name:'Studio Konten',floor:0,pos:[-7,0,3],detail:'Meja kolaborasi, monitor, papan ide, dan ruang produksi kreatif.'},
 {id:'engineering',name:'Engineering',floor:0,pos:[7,0,3],detail:'Sayap pengembangan terpisah, workstation ganda dan papan arsitektur.'},
 {id:'meeting',name:'Ruang Meeting',floor:0,pos:[-8,0,-7],detail:'Meja U, kursi berlapis kain, mikrofon, layar presentasi dan tanaman tengah.'},
 {id:'library',name:'Perpustakaan',floor:0,pos:[3,0,-8],detail:'Rak buku kayu, bangku baca dan cahaya jendela.'},
 {id:'rest',name:'Rest Room',floor:1,pos:[-9,6,-5],detail:'Ruang istirahat tersendiri, sofa nyaman dan pencahayaan hangat.'},
 {id:'game',name:'Game Room',floor:1,pos:[0,6,-5],detail:'TV layar besar, dua PC gaming, konsol bergaya PlayStation, controller dan sofa.'},
 {id:'curhat',name:'Tempat Curhat',floor:1,pos:[10,6,-5],detail:'Sudut percakapan privat dengan dua kursi dan tanaman pembatas.'},
 {id:'prayer',name:'Mushola',floor:0,pos:[9.4,0,-7.1],detail:'Ruang sholat terpisah dengan sajadah, rak Al-Quran, rak alas kaki dan sudut wudu.'},
 {id:'pool',name:'Kolam Renang',floor:2,pos:[-6,12,-5],detail:'Air bergelombang dengan kilau, pola caustic, ubin dasar kolam, tangga dan kursi berjemur.'},
 {id:'coffee',name:'Balkon Kopi',floor:2,pos:[9,12,-5],detail:'Mesin espresso, grinder, cangkir, gelas, bar kopi dan pergola.'}
];
const rows = [
 ['L.0','ZUNO','Lead','Orkestrasi & koordinasi','#257e83','#3b2921','short','glasses','meeting'],
 ['L.1','Lia','Konten','Komunikasi & laporan','#d7a566','#442b24','bob','tablet','konten'],
 ['R.1','Raka','Konten','Riset tren & verifikasi','#657c4f','#302621','curly','glasses','konten'],
 ['R.2','Nara','Konten','Strategi & angle konten','#b37582','#222c30','long','tablet','konten'],
 ['P.1','Dika','Konten','Naskah & storyboard','#c27c47','#4c3020','swept','notebook','konten'],
 ['P.2','Vino','Konten','Retensi video & hook','#7894a7','#25262b','short','headphones','konten'],
 ['D.1','Sari','Konten','Visual & carousel','#d1b55e','#633b27','bun','pencil','konten'],
 ['E.1','Edo','Konten','Arahan editing & efek','#657a93','#1e252e','swept','headphones','konten'],
 ['E.2','Bima','Konten','Perencanaan Remotion','#9b755c','#3a2924','curly','headphones','konten'],
 ['E.3','Fira','Konten','Perencanaan Google Flow','#7f9c8e','#7b492f','bob','camera','konten'],
 ['Q.1','Tara','Konten','Fakta & brand voice','#8f7898','#2a2227','bun','notebook','library'],
 ['Q.2','Nita','Konten','Bukti & kepatuhan format','#af8f74','#42302c','long','glasses','library'],
 ['M.1','Maya','Konten','Caption & antrian posting','#c38d7c','#623c2a','bob','tablet','konten'],
 ['T.1','Arga','Engineering','PRD & arsitektur','#4c7777','#252c2c','short','blueprint','engineering'],
 ['T.2','Rani','Engineering','UI/UX & wireframe','#9e9fbc','#432f2b','bun','pencil','engineering'],
 ['T.3','Fajar','Engineering','Implementasi aplikasi','#5b6d83','#24282a','curly','glasses','engineering'],
 ['T.4','Tio','Engineering','Testing & paket rilis','#8d9760','#47302a','swept','tablet','engineering'],
 ['T.5','Damar','Engineering','Audit statis bug & security','#585b61','#26252b','short','notebook','engineering']
];
export const agents=rows.map((r,i)=>({id:r[0],name:r[1],division:r[2],job:r[3],color:r[4],hair:r[5],style:r[6],accessory:r[7],room:i===0?'lead':r[8],floor:i===0?1:0,skin:['#dba477','#bb825a','#e4b68c','#ce9369'][i%4],shoe:['#dcae35','#f1e7d4','#4b5559'][i%3]}));

// Owner is a separate occupant, never a nineteenth operational agent.
export const owner={id:'OWNER',name:'Zulnan',color:'#e9e8df',hair:'#272321',style:'curly',accessory:'watch',skin:'#dba477',shoe:'#eeeee7',pants:'#486780'};

const titles=['Lead','Juru Kabar','Peneliti Tren','Strategi Media Sosial','Penulis Naskah','Optimasi Video','Desainer Visual','Editor Video','Spesialis Remotion','Spesialis Flow','Penjaga Merek','Verifikator Bukti','Kurator Instagram','Arsitek Aplikasi','Desainer UI/UX','Pengembang Aplikasi','Penguji & Rilis','Auditor Security'];
agents.forEach((a,i)=>a.title=titles[i]);

// Kursi kerja tiap agen (koordinat dunia) + arah hadap ke monitornya. Meja studio punya dua sisi:
// kursi di sisi z negatif menghadap +z (heading 0), sisi z positif menghadap -z (heading PI).
// Dipakai app.js (posisi agen), simulation.js (arah hadap saat bekerja) dan scene.js (layar monitor milik agen).
export function workSeats(){
 const seats={};let content=0,engineering=0,library=0;
 for(const a of agents){let pos;
  if(a.id==='L.0')pos=[-7.3,6,4.45];
  else if(a.room==='engineering'){const i=engineering++;pos=[[3.55,5.45,8.35,10.25][i%4],0,i<4?1.26:6.06];}
  else if(a.room==='library'){pos=[.1+(library++)*4.8,0,-9.6];}
  else{const i=content++;pos=[[-9.35,-7.45,-4.55,-2.65][i%4],0,i<4?1.26:i<8?6.06:-1.26];}
  const desk=a.room==='konten'||a.room==='engineering';
  seats[a.id]={pos,heading:a.id==='L.0'?0:desk&&pos[2]<0?0:Math.PI,desk};
 }
 return seats;
}
