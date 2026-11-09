// Tambahan KHUSUS edisi jasa: fitur yang dibuat langsung di repo jasa (zuno-studio-app) dan tidak ada di Zuno.
// ekspor-jasa.mjs menempelkannya ke index.html setiap ekspor, supaya ekspor tidak menghapusnya.
// Setiap "cari" harus ditemukan tepat satu kali; bila Zuno berubah dan penanda hilang, ekspor BERHENTI.
// Sumber: commit main jasa 2026-11-08 (ee49c9f Damar T.5, 37b85f6 E.2/E.3) dan branch feat/kantor-3d-voxel (tombol Kantor 3D).
// Perbaikan saat dipindah: prompt audit Damar memakai baris baru sungguhan, bukan teks "\\n".
// "syarat": tambahan hanya dipasang bila file itu ada di repo jasa.
export const tambahanJasa = [
 {
  "nama": "Agen E.2 Bima (Remotion) dan E.3 Fira (Google Flow)",
  "cari": "\n 'E.1':['Pelatih Editing Video Pendek'",
  "ganti": "\n 'E.2':['Bima — Editor Remotion','Khusus menyiapkan paket produksi Remotion untuk personal branding, faceless, motion graphics, teks kinetik, subtitle, transisi dan audio cue. Berikan struktur scene, timeline frame, komposisi, style, dan panduan render yang dapat diimplementasikan; tandai pekerjaan sebagai RENCANA sampai render nyata diverifikasi.','mengklaim MP4 sudah dirender, menggunakan video wajah tanpa izin, mengubah naskah yang telah disetujui atau menjalankan Google Flow.'],\n 'E.3':['Fira — Editor Google Flow','Khusus menyusun brief dan prompt scene Google Flow untuk affiliate, iklan produk, UGC faceless dan video bisnis: jaga DNA produk, detail visual, demonstrasi yang dapat diverifikasi, CTA dan kontinuitas antar scene. Hasil berupa prompt dan rencana shot; render hanya lewat koneksi resmi yang diotorisasi.','mengarang fitur/klaim produk, memalsukan testimoni, menyatakan video sudah digenerate, menjalankan Remotion atau menjanjikan API Flow tersedia.'],\n 'E.1':['Pelatih Editing Video Pendek'"
 },
 {
  "nama": "T.5 Damar di tim Engineering",
  "cari": "T.4 Penguji & Rilis; melapor ke Lead",
  "ganti": "T.4 Penguji & Rilis, T.5 Damar (Audit Bug & Security); melapor ke Lead"
 },
 {
  "nama": "Peran T.5 Damar",
  "cari": "\n 'T.4':['Penguji & Rilis','Peninjau tiap tahap",
  "ganti": "\n 'T.5':['Damar — Bug Hunter & Security','Audit hanya kode proyek yang diberikan. Cari bug, kelemahan otorisasi, akses data tanpa izin, kunci rahasia di client, XSS, injection, validasi input, konfigurasi produksi, dan risiko regresi. Laporkan temuan nyata dengan lokasi, bukti, tingkat keparahan, serta tindakan koreksi minimal. Bila tidak dapat diuji, tandai perlu uji manual; jangan membuat temuan fiktif.','melakukan eksploitasi pada sistem eksternal, meminta rahasia, mengklaim uji penetrasi berjalan, mengubah kebutuhan produk.'],\n 'T.4':['Penguji & Rilis','Peninjau tiap tahap"
 },
 {
  "nama": "Jalur T.5 di papan Build App",
  "cari": "['t4','T.4 Penguji & Rilis','Uji, laporan, panduan'],['g3'",
  "ganti": "['t4','T.4 Penguji & Rilis','Uji, laporan, panduan'],['t5','T.5 Damar · Security','Audit bug dan keamanan'],['g3'"
 },
 {
  "nama": "Audit statis T.5 Damar setelah uji",
  "cari": "\n    B.code.panduan=BEng.panduan();\n    var gagal=auto.filter",
  "ganti": "\n    BEng.set('t5','run','Damar mengaudit bug dan keamanan kode hasil build');\n    var sec=await ask('T.5',B.id,PE('T.5','Audit keamanan statis dan bug potensial. Beri temuan yang bisa ditindaklanjuti; jangan mengarang hasil pengujian runtime.',bCtx(true)+'\\n\\nINDEX.HTML:\\n'+html.slice(0,50000)+'\\n\\n'+be+':\\n'+String(B.code.backend||'').slice(0,20000),'Balas HANYA JSON: {\"temuan\":[{\"judul\":\"...\", \"tingkat\":\"kritis|tinggi|sedang|rendah|perlu uji manual\",\"lokasi\":\"file atau fungsi\", \"bukti\":\"potongan atau alasan konkret\", \"perbaikan\":\"langkah minimal\"}],\"ringkasan\":\"...\"}'),'default');\n    B.security={temuan:(Array.isArray(sec.temuan)?sec.temuan:[]).slice(0,12).map(function(x){return {judul:String(x&&x.judul||''),tingkat:String(x&&x.tingkat||'perlu uji manual'),lokasi:String(x&&x.lokasi||''),bukti:String(x&&x.bukti||''),perbaikan:String(x&&x.perbaikan||'')}}),ringkasan:String(sec.ringkasan||'')};\n    B.security.temuan.forEach(function(x){B.test.review.push({butir:'Audit Damar: '+x.judul+' ('+x.lokasi+')',status:['kritis','tinggi','sedang'].indexOf(x.tingkat)>-1?'belum terlihat':'perlu uji manual',catatan:x.bukti+'; Perbaikan: '+x.perbaikan})});\n    BEng.set('t5',B.security.temuan.some(function(x){return ['kritis','tinggi','sedang'].indexOf(x.tingkat)>-1})?'warn':'done','Audit statis: '+B.security.temuan.length+' catatan; pemeriksaan runtime terpisah');\n    B.code.panduan=BEng.panduan();\n    var gagal=auto.filter"
 },
 {
  "nama": "Tombol hero ke Kantor 3D",
  "syarat": "kantor.html",
  "cari": "  <a class=\"hero-cta mv mv6\" href=\"#ruangKerja\">MULAI DI RUANG KERJA</a>",
  "ganti": "  <a class=\"hero-cta mv mv6\" href=\"/kantor.html\">JELAJAHI KANTOR 3D ↗</a>\n  <a class=\"hero-cta mv mv6\" href=\"#ruangKerja\">MULAI DI RUANG KERJA</a>"
 }
];
