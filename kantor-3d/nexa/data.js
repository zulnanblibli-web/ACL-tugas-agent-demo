export const zones=[
[1,'Lobby & Resepsionis',0,25,10,8,'Penerimaan tamu, informasi dan akses ke seluruh studio.'],
[2,'Command Center ZUNO',0,3,17,15,'Pusat koordinasi tim. Meja melingkar, layar data dan workstation kolaboratif.'],
[3,'Riset & Strategi',-22,-9,12,9,'Riset tren, ide dan perencanaan strategi. Papan riset dan layar analitik.'],
[4,'Naskah & Storyboard',-22,2,12,9,'Penulisan naskah, pengembangan cerita dan papan storyboard.'],
[5,'Design Visual',-22,13,12,9,'Desain konten, aset visual, warna dan kebutuhan kreatif.'],
[6,'Editing & Remotion',22,-9,12,9,'Editing video, komposisi dan perencanaan motion.'],
[7,'Google Flow / Produksi',22,2,12,9,'Perencanaan iklan, video produk dan scene Google Flow.'],
[8,'Engineering & Development',-22,25,12,10,'Pengembangan aplikasi, UI/UX, arsitektur dan integrasi.'],
[9,'QA, Testing & Security',22,13,12,9,'Pengujian kualitas, pemeriksaan fakta dan keamanan.'],
[10,'Ruang Meeting',-20,-23,15,10,'Meja konferensi, layar presentasi dan diskusi tim.'],
[11,'Ruang Santai / Game',20,-23,15,10,'Sofa, beanbag, konsol dan waktu rehat bersama.'],
[12,'Pantry / Coffee Corner',0,-23,17,10,'Bar kopi, mesin espresso, rak cangkir dan kursi bar.'],
[13,'Owner Lounge · Zulnan',21,26,13,10,'Lounge pribadi di tepi kolam, perpustakaan, laptop dan kursi santai.'],
[14,'Kolam Renang Santai',15,38,24,11,'Kolam turquoise, batu alam, waterfall dan dek relaksasi.'],
[15,'Mushola / Ruang Tenang',-9,27,6,10,'Ruang tenang terpisah, sajadah, mihrab dan rak penyimpanan.']
].map(([id,name,x,z,w,d,detail])=>({id,name,x,z,w,d,detail}));
export const team=[
['ZUNO','Lead Orchestrator',2,'#c7c0a5','beanie'],['Lia','Communication & Reporting',1,'#ddd3be','glasses'],['Raka','Trend & Research',3,'#686f62','goggles'],['Nara','Social Media Strategist',3,'#d98f9e','cap'],['Dika','Scriptwriter & Storyboard',4,'#8a9193','glasses'],['Vino','Video Hook & Retention',4,'#343f49','headphones'],['Sari','Graphic Designer',5,'#d5c5ae','beanie'],['Edo','Video Effects Director',6,'#454a53','goggles'],['Bima','Remotion Video Editor',6,'#333c4c','cap'],['Fira','Google Flow Specialist',7,'#6f7a63','cap'],['Tara','Content Quality Controller',9,'#8f9693','glasses'],['Nita','Compliance & Format',9,'#c5bda7','glasses'],['Maya','Marketing & Distribution',7,'#ccc3ac','goggles'],['Arga','Engineering Architect',8,'#434540','glasses'],['Rani','UI/UX Designer',8,'#c1b7a1','beanie'],['Fajar','Application Developer',8,'#454c4d','headphones'],['Tio','Software Testing & QA',9,'#777d6c','goggles'],['Damar','Bug Hunter & Security',9,'#353c3e','hood']
].map(([name,role,zone,color,style],i)=>({id:i,name,role,zone,color,style,image:`/assets/nexa/team/${name.toLowerCase()}.webp`}));
