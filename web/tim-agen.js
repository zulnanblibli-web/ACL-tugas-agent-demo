/* Nexaoffice Workspace: menu Pengaturan > Tambah agen (Divisi HRD).
   Zulnan mengisi formulir dengan struktur yang sama seperti 18 profil agents/ (identitas, peran, kemampuan, tugas,
   masukan, keluaran, serah terima, larangan, metrik, gaya komunikasi, memori). Hana (H.1, Divisi HRD) memberi kode
   divisi, lalu melatih agen baru: Paket Pelatihan disusun dari aturan tim (window.ZunoTim.aturan), struktur tim,
   memori agen sedivisi, dan riwayat pekerjaan (chat ZUNO, hasil di halaman ini, tugas agen tambahan). Ringkasan
   orientasinya ditulis AI (ikut Pengaturan AI) hanya dari data itu; tanpa AI paket tetap berisi data mentahnya.
   Agen tambahan bisa langsung diberi tugas; hasilnya tampil live, masuk riwayatnya, dan bisa disimpan ke folder lokal.
   Disimpan di browser ini (localStorage). Profil bisa diunduh sebagai .md dengan format agents/ untuk dimasukkan ke repo. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var KUNCI = 'nexa-agen-kustom';
  var DIVISI = [['Lead', 'L'], ['Divisi Riset', 'R'], ['Divisi Produksi', 'P'], ['Divisi Desain', 'D'], ['Divisi Editing', 'E'], ['Divisi Mutu', 'Q'], ['Divisi Marketing', 'M'], ['Divisi Engineering', 'T'], ['Divisi HRD', 'H']];
  var DAFTAR_KOLOM = ['kemampuan', 'tugas', 'masukan', 'keluaran', 'dilarang', 'metrik', 'gaya', 'memori'];
  var profil = null, muatProfil = null, agen = [], ubah = null, aktif = null, ctl = null, hasilTerakhir = null;
  var dlg = $('agenDlg');
  if (!dlg) return;

  /* ---------- data ---------- */
  function baca() { try { var a = JSON.parse(localStorage.getItem(KUNCI) || '[]'); return Array.isArray(a) ? a.filter(function (x) { return x && /^[A-Z]\.[1-9]$/.test(x.kode); }) : []; } catch (e) { return []; } }
  function simpan() { try { localStorage.setItem(KUNCI, JSON.stringify(agen)); return true; } catch (e) { kabar('Gagal menyimpan di browser ini: ' + ((e && e.message) || 'penyimpanan penuh') + '.', 'bad'); return false; } }
  function daftarkan() { if (window.NexaUI && window.NexaUI.daftarAgen) agen.forEach(function (a) { window.NexaUI.daftarAgen(a.kode, a.panggilan, a.nama); }); }
  function ambilProfil() {
    if (profil) return Promise.resolve(profil);
    if (!muatProfil) muatProfil = fetch('/assets/agen-profil.json').then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (j) { profil = Array.isArray(j.agen) ? j.agen : []; return profil; })
      .catch(function () { muatProfil = null; return []; });
    return muatProfil;
  }
  function semuaAgen() { return (profil || []).map(function (p) { return { kode: p.kode, panggilan: p.panggilan, nama: p.nama, divisi: p.divisi, tambahan: false, p: p }; }).concat(agen.map(function (a) { return { kode: a.kode, panggilan: a.panggilan, nama: a.nama, divisi: a.divisi, tambahan: true, p: a }; })); }
  function baris(t) { return String(t || '').split('\n').map(function (s) { return s.replace(/^\s*[-*•]\s*/, '').trim(); }).filter(Boolean).slice(0, 15); }
  function tgl(t) { return new Date(t).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }); }
  function kodeBaru(divisi, kecuali) {
    var huruf = (DIVISI.filter(function (d) { return d[0] === divisi; })[0] || [])[1];
    if (!huruf) return null;
    var dipakai = semuaAgen().filter(function (a) { return a.kode !== kecuali; }).map(function (a) { return a.kode; });
    for (var n = 1; n <= 9; n++) if (dipakai.indexOf(huruf + '.' + n) < 0) return huruf + '.' + n;
    return null; // satu divisi paling banyak 9 agen (kode satu digit dibaca pratinjau live)
  }

  /* ---------- tampilan ---------- */
  function lihat(v) {
    dlg.querySelectorAll('.agen-view').forEach(function (el) { el.hidden = el.getAttribute('data-view') !== v; });
    $('agenJudul').textContent = v === 'form' ? (ubah ? 'Ubah ' + ubah.panggilan + ' (' + ubah.kode + ')' : 'Agen baru') : v === 'tugas' ? 'Tugas agen' : 'Tambah agen';
    if (v === 'daftar') gambarDaftar();
  }
  function kabar(t, jenis) { var el = $('agenKabar'); el.textContent = t || ''; el.setAttribute('data-jenis', jenis || ''); }
  function gambarDaftar() {
    var ol = $('agenDaftar'); ol.innerHTML = '';
    $('agenKosong').hidden = agen.length > 0;
    agen.forEach(function (a) {
      var li = document.createElement('li'); li.className = 'agen-item';
      var lat = a.pelatihan || {};
      var st = a.sedangLatih ? 'Hana sedang melatih…' : lat.waktu ? ('Dilatih Hana ' + tgl(lat.waktu) + ' dari ' + (lat.sumber ? lat.sumber.riwayat : 0) + ' catatan riwayat' + (lat.ai ? '' : ' (tanpa ringkasan AI: ' + (lat.gagal || 'AI belum tersambung') + ')')) : 'Belum dilatih';
      li.innerHTML = '<p class="agen-kepala"><b></b> <span class="agen-kode"></span></p><p class="agen-jabatan"></p><p class="agen-st"></p>' +
        (lat.tumpang_tindih ? '<p class="agen-warn"></p>' : '') +
        '<p class="agen-aksi"><button type="button" class="btn" data-aksi="tugas">Beri tugas</button><button type="button" class="btn" data-aksi="latih">Latih ulang</button><button type="button" class="btn" data-aksi="ubah">Ubah</button><button type="button" class="btn" data-aksi="unduh">Unduh profil</button><button type="button" class="btn" data-aksi="hapus">Hapus</button></p>';
      li.querySelector('b').textContent = a.panggilan;
      li.querySelector('.agen-kode').textContent = a.kode + ' · ' + a.divisi;
      li.querySelector('.agen-jabatan').textContent = a.nama + (a.riwayat && a.riwayat.length ? ' · ' + a.riwayat.length + ' tugas selesai' : '');
      li.querySelector('.agen-st').textContent = st;
      if (lat.tumpang_tindih) li.querySelector('.agen-warn').textContent = 'Catatan Hana: mirip ' + lat.tumpang_tindih;
      li.querySelectorAll('[data-aksi]').forEach(function (b) { b.setAttribute('data-kode', a.kode); b.disabled = !!a.sedangLatih && b.getAttribute('data-aksi') !== 'unduh'; });
      ol.appendChild(li);
    });
  }
  function isiDivisi() {
    $('agDivisi').innerHTML = DIVISI.map(function (d) { return '<option value="' + d[0] + '">' + d[0] + '</option>'; }).join('');
  }
  function isiMulai() {
    var sel = $('agMulai'), pilih = sel.value;
    sel.innerHTML = '<option value="">Formulir kosong</option>';
    semuaAgen().forEach(function (a) { var o = document.createElement('option'); o.value = a.kode; o.textContent = a.kode + ' ' + a.panggilan + ', ' + a.nama + (a.tambahan ? ' (tambahan)' : ''); sel.appendChild(o); });
    sel.value = pilih;
  }
  var KOLOM = { agNama: 'nama', agPanggilan: 'panggilan', agDeskripsi: 'deskripsi', agPeran: 'peran', agMenerima: 'menerima', agMenyerahkan: 'menyerahkan', agEskalasi: 'eskalasi' };
  var KOLOM_DAFTAR = { agKemampuan: 'kemampuan', agTugas: 'tugas', agMasukan: 'masukan', agKeluaran: 'keluaran', agDilarang: 'dilarang', agMetrik: 'metrik', agGaya: 'gaya', agMemori: 'memori' };
  function isiForm(p, salin) {
    Object.keys(KOLOM).forEach(function (id) { $(id).value = p ? String(p[KOLOM[id]] || '') : ''; });
    Object.keys(KOLOM_DAFTAR).forEach(function (id) { $(id).value = p && Array.isArray(p[KOLOM_DAFTAR[id]]) ? p[KOLOM_DAFTAR[id]].join('\n') : ''; });
    if (salin) { $('agNama').value = ''; $('agPanggilan').value = ''; } // struktur disalin, identitas tetap baru
    if (p && DIVISI.some(function (d) { return d[0] === p.divisi; })) $('agDivisi').value = p.divisi;
    $('agStatus').value = p && /aktif harian/i.test(p.status || '') ? 'aktif harian' : 'standby';
    dlg.querySelectorAll('#agenForm [aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
    $('agenCek').textContent = '';
  }
  function bacaForm() {
    var a = { divisi: $('agDivisi').value, status: $('agStatus').value };
    Object.keys(KOLOM).forEach(function (id) { a[KOLOM[id]] = $(id).value.replace(/\s+/g, ' ').trim(); });
    Object.keys(KOLOM_DAFTAR).forEach(function (id) { a[KOLOM_DAFTAR[id]] = baris($(id).value); });
    return a;
  }
  function periksa(a) {
    var salah = [];
    var wajib = [['agNama', a.nama.length >= 3, 'Nama jabatan minimal 3 huruf.'], ['agPanggilan', /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ' ]{1,19}$/.test(a.panggilan), 'Nama di kantor 2-20 huruf, tanpa angka atau simbol.'],
      ['agDeskripsi', a.deskripsi.length >= 10, 'Deskripsi singkat minimal satu kalimat.'], ['agPeran', a.peran.length >= 20, 'Definisi peran minimal satu-dua kalimat.'],
      ['agTugas', a.tugas.length > 0, 'Tulis minimal satu tugas.'], ['agKeluaran', a.keluaran.length > 0, 'Tulis minimal satu keluaran.'], ['agDilarang', a.dilarang.length > 0, 'Tulis minimal satu larangan.']];
    wajib.forEach(function (w) { $(w[0]).removeAttribute('aria-invalid'); if (!w[1]) salah.push(w); });
    var kecuali = ubah ? ubah.kode : null;
    semuaAgen().forEach(function (x) {
      if (x.kode === kecuali) return;
      if (x.panggilan.toLowerCase() === a.panggilan.toLowerCase()) salah.push(['agPanggilan', false, 'Nama di kantor "' + a.panggilan + '" sudah dipakai ' + x.kode + '.']);
      if (x.nama && x.nama.toLowerCase() === a.nama.toLowerCase()) salah.push(['agNama', false, 'Nama jabatan "' + a.nama + '" sudah dipakai ' + x.panggilan + ' (' + x.kode + ').']);
    });
    salah.forEach(function (w) { $(w[0]).setAttribute('aria-invalid', 'true'); });
    return salah;
  }

  /* ---------- pelatihan oleh Hana (H.1) ---------- */
  function riwayatTim() {
    var r = [];
    try {
      (JSON.parse(localStorage.getItem('nexa-chat') || '[]') || []).forEach(function (m) {
        var t = String(m && m.teks || '').replace(/\s+/g, ' ').trim();
        if (!t || /^Sebentar, aku cek/.test(t) || /^Halo Zulnan/.test(t)) return;
        var penting = m.dari === 'kamu' || /^Perintah diterima|^Selesai\.|Naskah siap|sudah kamu setujui|selesai dibangun|tertahan|perlu perhatianmu|Ada kendala|^Laporan kinerja|^Tersimpan di laptopmu|selesai mengerjakan|^Hana/.test(t);
        if (penting) r.push(tgl(m.waktu || Date.now()) + ' ' + (m.dari === 'kamu' ? 'Zulnan' : 'ZUNO') + ': ' + t.slice(0, 260));
      });
    } catch (e) {}
    r = r.slice(-40);
    try {
      var h = window.ZunoHasil && window.ZunoHasil.ringkas();
      if (h && h.konten) r.push('Konten di halaman ini, perintah "' + (h.konten.perintah || '(kosong)').slice(0, 160) + '": ' + h.konten.kartu.map(function (c) { return c.id + ' ' + c.format + ' "' + c.topik + '" tahap ' + (c.tahap || '-') + (c.disetujui ? ', disetujui Zulnan' : ''); }).join('; '));
      if (h && h.build) r.push('Agent Builder di halaman ini: ' + h.build.id + ' "' + (h.build.nama || '') + '" tahap ' + (h.build.tahap || '-') + (h.build.selesai ? ', selesai' : ''));
    } catch (e) {}
    agen.forEach(function (a) { (a.riwayat || []).slice(-5).forEach(function (t) { r.push(tgl(t.waktu) + ' ' + a.panggilan + ' (' + a.kode + ') mengerjakan "' + t.tugas.slice(0, 140) + '": ' + t.ringkas.slice(0, 200)); }); });
    return r;
  }
  function strukturTim(kecuali) {
    return semuaAgen().filter(function (x) { return x.kode !== kecuali; }).map(function (x) { var p = x.p; return x.kode + ' ' + x.panggilan + ', ' + x.nama + ' (' + x.divisi + (x.tambahan ? ', agen tambahan' : '') + '): ' + (p.deskripsi || '') + (p.keluaran && p.keluaran.length ? ' Keluaran: ' + p.keluaran.join('; ') : ''); });
  }
  function memoriSedivisi(a) {
    var out = [];
    semuaAgen().forEach(function (x) { if (x.divisi !== a.divisi || x.kode === a.kode) return; (x.p.memori || []).forEach(function (m) { out.push(x.panggilan + ': ' + m); }); (x.p.dilarang || []).slice(0, 3).forEach(function (m) { out.push(x.panggilan + ' dilarang: ' + m); }); });
    return out.slice(0, 24);
  }
  function profilTeks(a) {
    return ['Kode: ' + a.kode, 'Nama jabatan: ' + a.nama, 'Nama di kantor: ' + a.panggilan, 'Divisi: ' + a.divisi, 'Status: ' + a.status, 'Deskripsi: ' + a.deskripsi, 'Definisi peran: ' + a.peran,
      'Kemampuan inti: ' + (a.kemampuan.join('; ') || '-'), 'Tugas: ' + a.tugas.join('; '), 'Masukan: ' + (a.masukan.join('; ') || '-'), 'Keluaran: ' + a.keluaran.join('; '),
      'Menerima dari: ' + (a.menerima || '-'), 'Menyerahkan ke: ' + (a.menyerahkan || '-'), 'Mengeskalasi ke: ' + (a.eskalasi || '-'), 'Dilarang: ' + a.dilarang.join('; '),
      'Metrik: ' + (a.metrik.join('; ') || '-'), 'Gaya komunikasi: ' + (a.gaya.join('; ') || '-'), 'Memori: ' + (a.memori.join('; ') || '-')].join('\n');
  }
  function urai(teks) {
    var t = String(teks || '').replace(/```(?:json)?/g, ''), i = t.indexOf('{'), j = t.lastIndexOf('}');
    if (i < 0 || j <= i) throw { code: 'bad_json', message: 'Jawaban Hana bukan JSON.' };
    return JSON.parse(t.slice(i, j + 1));
  }
  function daftarAman(x, n) { return (Array.isArray(x) ? x : []).map(function (s) { return String(s || '').replace(/\s+/g, ' ').trim().slice(0, 320); }).filter(Boolean).slice(0, n); }
  async function latih(a) {
    var riwayat = riwayatTim(), sedivisi = memoriSedivisi(a), tim = strukturTim(a.kode);
    var lat = { oleh: 'H.1 Hana', waktu: Date.now(), ai: false, sumber: { riwayat: riwayat.length, tim: tim.length, sedivisi: sedivisi.length }, riwayat: riwayat.slice(-20), sedivisi: sedivisi, orientasi: '', aturan_penting: [], pelajaran: [], cara_kerja: [], serah_terima: '', tumpang_tindih: '', catatan: '', siap: true };
    a.sedangLatih = true; gambarDaftar();
    try {
      if (!window.ZunoTim || !window.claude) throw { message: 'aturan tim belum termuat' };
      if (!window.ZunoKey || !window.ZunoKey.get()) throw { code: 'not_granted', message: 'kunci akses belum diisi di Pengaturan AI' };
      var sample = await window.claude.use('sample');
      var kerja = 'Latih agen baru di bawah ini supaya langsung bisa bekerja di tim. Pakai HANYA DATA dan ATURAN TIM di atas; jangan mengarang riwayat, pelajaran, angka, atau pengalaman. ' +
        'Susun Paket Pelatihan: orientasi (3-5 kalimat: posisi agen di tim, rekan yang memberi bahan dan menerima hasilnya); aturan_penting (4-8 aturan dari ATURAN TIM yang paling menentukan untuk peran ini, diringkas tanpa mengubah makna); ' +
        'pelajaran (0-6 pelajaran yang benar-benar terlihat di RIWAYAT PEKERJAAN atau MEMORI SEDIVISI, sebut asalnya; array kosong bila riwayat kosong); cara_kerja (3-6 langkah kerja peran ini); serah_terima (satu kalimat); ' +
        'tumpang_tindih (kode dan nama agen lain yang tugas atau keluarannya mirip, dan bagian mana; kosong bila tidak ada); siap (false bila formulir belum cukup jelas untuk bekerja); catatan_untuk_zulnan (singkat, kosong bila tidak ada).';
      var data = 'PROFIL AGEN BARU:\n' + profilTeks(a) + '\n\nSTRUKTUR TIM:\n' + tim.join('\n') + '\n\nMEMORI SEDIVISI:\n' + (sedivisi.join('\n') || '(kosong)') + '\n\nRIWAYAT PEKERJAAN (dari chat ZUNO dan hasil di Workspace):\n' + (riwayat.join('\n') || '(kosong, belum ada pekerjaan tercatat di browser ini)');
      var format = 'Balas HANYA JSON: {"orientasi":"...","aturan_penting":["..."],"pelajaran":["..."],"cara_kerja":["..."],"serah_terima":"...","tumpang_tindih":"","siap":true,"catatan_untuk_zulnan":""}';
      var h = await sample(window.ZunoTim.prompt('H.1', kerja, data, format), { modelTier: 'quick' });
      var j = urai(h.text);
      lat.orientasi = String(j.orientasi || '').trim().slice(0, 900);
      lat.aturan_penting = daftarAman(j.aturan_penting, 8);
      lat.pelajaran = riwayat.length || sedivisi.length ? daftarAman(j.pelajaran, 6) : [];
      lat.cara_kerja = daftarAman(j.cara_kerja, 6);
      lat.serah_terima = String(j.serah_terima || '').trim().slice(0, 300);
      lat.tumpang_tindih = String(j.tumpang_tindih || '').trim().slice(0, 300);
      lat.catatan = String(j.catatan_untuk_zulnan || '').trim().slice(0, 300);
      lat.siap = j.siap !== false;
      lat.ai = !!lat.orientasi;
      if (!lat.ai) lat.gagal = 'ringkasan kosong';
    } catch (e) {
      lat.gagal = e && e.code === 'not_granted' ? 'kunci akses belum diisi di Pengaturan AI' : ((e && e.message) || 'galat');
    }
    a.sedangLatih = false; a.pelatihan = lat;
    simpan(); gambarDaftar();
    var pesan = 'Hana (Divisi HRD) ' + (lat.ai ? 'selesai melatih ' : 'menyiapkan ') + a.panggilan + ' (' + a.kode + ', ' + a.nama + ') dari ' + riwayat.length + ' catatan riwayat dan ' + sedivisi.length + ' memori sedivisi.' +
      (lat.ai ? '' : ' Ringkasan orientasi AI belum dibuat (' + lat.gagal + '); klik Latih ulang setelah AI tersambung.') + (lat.tumpang_tindih ? ' Catatan: mirip ' + lat.tumpang_tindih + '.' : '') + (lat.ai && !lat.siap ? ' Hana menilai formulirnya belum cukup jelas: ' + (lat.catatan || 'lengkapi peran dan keluaran') + '.' : '');
    kabar(pesan, lat.ai ? 'ok' : 'warn');
    if (window.NexaChat) window.NexaChat.lapor(pesan, { jenis: lat.ai ? 'ok' : 'warn' });
    return lat;
  }

  /* ---------- tugas agen tambahan ---------- */
  function promptTugas(a, tugas) {
    var lat = a.pelatihan || {};
    var paket = [lat.orientasi ? 'Orientasi: ' + lat.orientasi : '', lat.aturan_penting && lat.aturan_penting.length ? 'Aturan penting: ' + lat.aturan_penting.join(' | ') : '',
      lat.pelajaran && lat.pelajaran.length ? 'Pelajaran dari pekerjaan sebelumnya: ' + lat.pelajaran.join(' | ') : '', lat.cara_kerja && lat.cara_kerja.length ? 'Cara kerja: ' + lat.cara_kerja.join(' | ') : '',
      lat.serah_terima ? 'Serah terima: ' + lat.serah_terima : '', !lat.orientasi && lat.riwayat && lat.riwayat.length ? 'Riwayat tim: ' + lat.riwayat.slice(-10).join(' | ') : '',
      lat.sedivisi && lat.sedivisi.length ? 'Memori sedivisi: ' + lat.sedivisi.slice(0, 10).join(' | ') : ''].filter(Boolean).join('\n');
    var sendiri = (a.riwayat || []).slice(-5).map(function (t) { return tgl(t.waktu) + ' "' + t.tugas.slice(0, 120) + '": ' + t.ringkas.slice(0, 240); }).join('\n');
    return (window.ZunoTim ? window.ZunoTim.aturan : '') +
      '\n\nPERAN ANDA: ' + a.kode + ' ' + a.nama + ' (' + a.panggilan + ', ' + a.divisi + '; agen tambahan, dilatih Hana dari Divisi HRD)' +
      '\nTUGAS PERAN: ' + a.peran + ' Tugas: ' + a.tugas.join('; ') + '.' + (a.kemampuan.length ? '\nKEMAMPUAN: ' + a.kemampuan.join('; ') : '') +
      (a.masukan.length ? '\nMASUKAN YANG BIASA DITERIMA: ' + a.masukan.join('; ') : '') + '\nKELUARAN: ' + a.keluaran.join('; ') +
      '\nSERAH TERIMA: menerima dari ' + (a.menerima || '-') + '; menyerahkan ke ' + (a.menyerahkan || '-') + '; mengeskalasi ke ' + (a.eskalasi || 'Zulnan') +
      '\nDILARANG: ' + a.dilarang.join('; ') + (a.metrik.length ? '\nMETRIK KEBERHASILAN: ' + a.metrik.join('; ') : '') + (a.gaya.length ? '\nGAYA KOMUNIKASI: ' + a.gaya.join('; ') : '') +
      '\n\nPAKET PELATIHAN DARI HANA (HRD):\n' + (paket || '(belum ada)') +
      '\n\nMEMORI AGEN:\n' + (a.memori.join('\n') || '-') + (sendiri ? '\nTugasmu sebelumnya:\n' + sendiri : '') +
      '\n\nPEKERJAAN SEKARANG (dari Zulnan):\n' + tugas +
      '\n\nFORMAT KELUARAN:\nTulis hasil dalam Markdown sesuai KELUARAN peranmu, langsung ke isi. Tandai bagian yang perlu dicek Zulnan dengan "(perlu dicek)". Bila tugas di luar peranmu, katakan dan sebut agen yang tepat dari tim.';
  }
  function bukaTugas(a) {
    aktif = a; hasilTerakhir = null;
    $('agTugasJudul').textContent = 'Beri tugas ke ' + a.panggilan + ' (' + a.kode + ')';
    $('agTugasPeran').textContent = a.nama + '. Keluaran: ' + a.keluaran.join('; ') + '.';
    $('agTugasOut').hidden = true; $('agTugasOut').textContent = ''; $('agTugasAksi').hidden = true; $('agTugasSt').textContent = '';
    lihat('tugas'); $('agTugasIn').focus();
  }
  async function jalankan() {
    var a = aktif, tugas = $('agTugasIn').value.trim();
    if (!a) return;
    if (tugas.length < 5) { $('agTugasSt').textContent = 'Tulis tugasnya dulu.'; $('agTugasIn').focus(); return; }
    if (!window.ZunoKey || !window.ZunoKey.get()) { $('agTugasSt').textContent = 'Kunci akses belum diisi. Buka Sambungan AI di menu pengaturan ini.'; return; }
    ctl = new AbortController();
    $('agTugasJalan').disabled = true; $('agTugasStop').disabled = false; $('agTugasAksi').hidden = true;
    var out = $('agTugasOut'); out.hidden = false; out.textContent = '';
    $('agTugasSt').textContent = a.panggilan + ' sedang bekerja…';
    try {
      var sample = await window.claude.use('sample');
      var h = await sample(promptTugas(a, tugas), { modelTier: 'default', signal: ctl.signal, onText: function (u) { out.textContent = u.text; } });
      var teks = String(h.text || '').trim();
      if (!teks) throw { message: 'jawaban kosong' };
      out.textContent = teks;
      hasilTerakhir = { agen: a, tugas: tugas, teks: teks, waktu: Date.now() };
      a.riwayat = (a.riwayat || []).concat([{ waktu: hasilTerakhir.waktu, tugas: tugas.slice(0, 400), ringkas: teks.replace(/\s+/g, ' ').slice(0, 500) }]).slice(-20);
      simpan();
      $('agTugasSt').textContent = 'Selesai' + (h.truncated ? ' (terpotong batas panjang jawaban)' : '') + ', ' + teks.length.toLocaleString('id-ID') + ' karakter. Masuk riwayat ' + a.panggilan + '.';
      $('agTugasAksi').hidden = false;
      if (window.NexaChat) window.NexaChat.lapor(a.panggilan + ' (' + a.kode + ', ' + a.nama + ') selesai mengerjakan: "' + (tugas.length > 120 ? tugas.slice(0, 118) + '…' : tugas) + '". Hasilnya di Pengaturan > Tambah agen, bisa disimpan ke folder lokal.', { jenis: 'ok' });
    } catch (e) {
      var batal = e && e.code === 'cancelled';
      $('agTugasSt').textContent = batal ? 'Dihentikan.' : 'Gagal: ' + ((e && e.message) || 'galat') + '.';
    }
    ctl = null; $('agTugasJalan').disabled = false; $('agTugasStop').disabled = true;
  }

  /* ---------- profil .md (format agents/) ---------- */
  function slug(t) { return String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'agen'; }
  function profilMd(a) {
    var lat = a.pelatihan || {}, q = function (t) { return JSON.stringify(String(t || '')); };
    var L = ['---', 'name: ' + a.nama, 'description: ' + a.deskripsi, 'tools: Zuno Web Workspace (menu Tambah agen, ikut Pengaturan AI)', 'kode: "' + a.kode + '"', 'panggilan: ' + a.panggilan, 'divisi: ' + a.divisi,
      'status: ' + a.status, 'acuan: ' + q('agen tambahan, dibuat ' + tgl(a.dibuat) + ' lewat menu Tambah agen, dilatih H.1 Hana (Divisi HRD)'), '---', '',
      '# ' + a.nama, '', '**Kode:** ' + a.kode + ' · **Nama di kantor:** ' + a.panggilan + ' · **Divisi:** ' + a.divisi, '', '## Definisi Peran', a.peran, '', '## Status', a.status === 'aktif harian' ? '**Aktif harian.**' : '**Standby.** Aktif saat diberi tugas.', ''];
    var sec = function (judul, arr) { if (arr && arr.length) { L.push('## ' + judul); arr.forEach(function (x) { L.push('- ' + x); }); L.push(''); } };
    sec('Kemampuan Inti', a.kemampuan);
    L.push('## Integrasi Alur Kerja', '- **Menerima dari**: ' + (a.menerima || '-'), '- **Menyerahkan ke**: ' + (a.menyerahkan || '-'), '- **Mengeskalasi ke**: ' + (a.eskalasi || 'Zulnan'), '');
    sec('Metrik Keberhasilan', a.metrik); sec('Tugas di Zuno', a.tugas); sec('Dilarang', a.dilarang); sec('Masukan', a.masukan); sec('Keluaran', a.keluaran); sec('Gaya Komunikasi', a.gaya); sec('Pembelajaran & Memori', a.memori);
    if (lat.waktu) {
      L.push('## Paket Pelatihan HRD', 'Dilatih ' + lat.oleh + ' pada ' + tgl(lat.waktu) + ' dari ' + lat.sumber.riwayat + ' catatan riwayat dan ' + lat.sumber.sedivisi + ' memori sedivisi.' + (lat.ai ? '' : ' Ringkasan AI belum dibuat (' + (lat.gagal || '-') + ').'), '');
      if (lat.orientasi) L.push('**Orientasi:** ' + lat.orientasi, '');
      sec('Aturan penting', lat.aturan_penting); sec('Pelajaran dari pekerjaan sebelumnya', lat.pelajaran); sec('Cara kerja', lat.cara_kerja);
      if (lat.serah_terima) L.push('**Serah terima:** ' + lat.serah_terima, '');
      if (lat.tumpang_tindih) L.push('**Catatan tumpang tindih:** ' + lat.tumpang_tindih, '');
    }
    return L.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
  }
  function unduh(nama, teks) { var u = URL.createObjectURL(new Blob([teks], { type: 'text/markdown' })), x = document.createElement('a'); x.href = u; x.download = nama; document.body.appendChild(x); x.click(); x.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 4000); }

  /* ---------- kejadian ---------- */
  function buka() {
    agen = baca(); daftarkan();
    var kd = $('keyDlg'); if (kd && kd.open) kd.close(); // satu dialog pengaturan terbuka pada satu waktu
    if (!dlg.open) dlg.showModal();
    lihat('daftar');
    ambilProfil().then(function (p) { if (!p.length) kabar('Profil 18 agen belum termuat; isian contoh tidak tersedia, formulir tetap bisa diisi.', 'warn'); isiMulai(); });
  }
  window.NexaTimAgen = { buka: buka, agen: function () { return agen.slice(); }, profilMd: profilMd, prompt: promptTugas };
  isiDivisi();
  agen = baca(); daftarkan();

  $('agenBaru').addEventListener('click', function () { ubah = null; ambilProfil().then(isiMulai); isiForm(null); $('agMulai').value = ''; lihat('form'); $('agMulai').focus(); });
  $('agMulai').addEventListener('change', function () { var k = this.value, x = semuaAgen().filter(function (a) { return a.kode === k; })[0]; if (x) isiForm(x.p, true); else if (!ubah) isiForm(null); if (ubah) { $('agNama').value = ubah.nama; $('agPanggilan').value = ubah.panggilan; } });
  $('agenForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    await ambilProfil();
    var a = bacaForm(), salah = periksa(a);
    if (salah.length) { $('agenCek').textContent = salah.map(function (w) { return w[2]; }).filter(function (v, i, s) { return s.indexOf(v) === i; }).join(' '); $(salah[0][0]).focus(); return; }
    var kode = ubah && ubah.divisi === a.divisi ? ubah.kode : kodeBaru(a.divisi, ubah ? ubah.kode : null);
    if (!kode) { $('agenCek').textContent = a.divisi + ' sudah punya 9 agen. Pilih divisi lain.'; $('agDivisi').focus(); return; }
    var lama = ubah;
    a.kode = kode; a.dibuat = lama ? lama.dibuat : Date.now(); a.riwayat = lama ? (lama.riwayat || []) : []; a.diubah = lama ? Date.now() : null;
    if (lama) { agen = agen.filter(function (x) { return x !== lama; }); if (window.NexaUI && lama.kode !== kode) window.NexaUI.hapusAgen(lama.kode); }
    agen.push(a);
    if (!simpan()) return;
    daftarkan(); ubah = null;
    lihat('daftar');
    kabar('Agen ' + a.panggilan + ' (' + a.kode + ') tersimpan. Hana sedang melatihnya…', '');
    await latih(a);
    var tombol = $('agenDaftar').querySelector('[data-aksi="tugas"][data-kode="' + a.kode + '"]'); if (tombol) tombol.focus();
  });
  $('agenDaftar').addEventListener('click', async function (e) {
    var b = e.target.closest('[data-aksi]'); if (!b) return;
    var a = agen.filter(function (x) { return x.kode === b.getAttribute('data-kode'); })[0]; if (!a) return;
    var aksi = b.getAttribute('data-aksi');
    if (aksi === 'tugas') bukaTugas(a);
    else if (aksi === 'latih') { kabar('Hana melatih ulang ' + a.panggilan + '…', ''); await latih(a); }
    else if (aksi === 'ubah') { ubah = a; await ambilProfil(); isiMulai(); isiForm(a); $('agMulai').value = ''; lihat('form'); $('agNama').focus(); }
    else if (aksi === 'unduh') unduh(a.kode.replace('.', '') + '-' + slug(a.nama) + '.md', profilMd(a));
    else if (aksi === 'hapus') {
      if (b.getAttribute('data-yakin') !== '1') { b.setAttribute('data-yakin', '1'); b.textContent = 'Yakin hapus ' + a.panggilan + '?'; return; }
      agen = agen.filter(function (x) { return x !== a; }); simpan();
      if (window.NexaUI) window.NexaUI.hapusAgen(a.kode);
      gambarDaftar(); kabar(a.panggilan + ' (' + a.kode + ') dihapus dari tim tambahan. Riwayat chat tidak berubah.', '');
      $('agenBaru').focus();
    }
  });
  $('agTugasJalan').addEventListener('click', jalankan);
  $('agTugasStop').addEventListener('click', function () { try { ctl && ctl.abort(); } catch (e) {} });
  $('agTugasIn').addEventListener('keydown', function (e) { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); if (!$('agTugasJalan').disabled) jalankan(); } });
  $('agTugasUnduh').addEventListener('click', function () { var h = hasilTerakhir; if (h) unduh(h.agen.panggilan + ' - ' + slug(h.tugas.slice(0, 50)) + '.md', '# ' + h.agen.panggilan + ' (' + h.agen.kode + ', ' + h.agen.nama + ')\n\nTugas: ' + h.tugas + '\n\n' + h.teks + '\n'); });
  $('agTugasSimpan').addEventListener('click', async function () {
    var h = hasilTerakhir; if (!h || !window.NexaChat || !window.NexaChat.simpanBerkas) return;
    var judul = h.tugas.split('\n')[0].trim(), folder = h.agen.panggilan + ' - ' + h.agen.nama;
    var indeks = '# Tugas ' + h.agen.panggilan + ' (' + h.agen.kode + ')\n\nTugas: ' + h.tugas + '\nDikerjakan: ' + new Date(h.waktu).toLocaleString('id-ID') + '\n\n## ' + folder + '\n\n- hasil.md\n';
    $('agTugasSt').textContent = 'Menyimpan…';
    var ok = await window.NexaChat.simpanBerkas(window.NexaChat.namaTugas('Agen ' + h.agen.panggilan, judul), indeks, [{ folder: window.ZunoHasil.aman(folder), nama: 'hasil.md', data: '# ' + judul + '\n\n' + h.teks + '\n' }]);
    $('agTugasSt').textContent = ok ? 'Tersimpan di folder lokal (lihat kabar di Chat ZUNO).' : 'Belum tersimpan. Lihat Chat ZUNO untuk langkahnya.';
  });
  dlg.addEventListener('click', function (e) {
    var t = e.target.closest('[data-ke],[data-tutup],[data-set]');
    if (!t) return;
    if (t.hasAttribute('data-tutup')) dlg.close();
    else if (t.hasAttribute('data-ke')) { if (ctl) return; ubah = null; lihat(t.getAttribute('data-ke')); }
    else if (t.getAttribute('data-set') === 'ai' && !ctl) { dlg.close(); if (window.ZunoHUD) window.ZunoHUD.askKey(); }
  });
  dlg.addEventListener('cancel', function (e) { if (ctl) e.preventDefault(); });

  // Menu pengaturan: tab "Tambah agen" di dialog Sambungan AI (dialog yang sama dipakai edisi jasa, jadi tab disisipkan di sini).
  var keyDlg = $('keyDlg'), form = keyDlg && keyDlg.querySelector('form');
  if (form) {
    var seg = document.createElement('div');
    seg.className = 'seg set-tab'; seg.setAttribute('role', 'group'); seg.setAttribute('aria-label', 'Menu pengaturan');
    seg.innerHTML = '<button type="button" data-set="ai" aria-pressed="true">Sambungan AI</button><button type="button" data-set="agen" aria-pressed="false">Tambah agen</button>';
    keyDlg.insertBefore(seg, form);
    seg.addEventListener('click', function (e) { var b = e.target.closest('[data-set="agen"]'); if (!b) return; keyDlg.close(); buka(); });
  }
  if (location.hash === '#tambah-agen') buka();
})();
