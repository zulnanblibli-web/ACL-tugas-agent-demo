/* Nexaoffice: terima perintah dari halaman utama (/?perintah=...&divisi=konten|build&jalan=1)
   lalu langsung jalankan di ruang kerja. Parameter dihapus dari alamat supaya muat ulang tidak menjalankan dua kali. */
(function () {
  'use strict';
  var q = new URLSearchParams(location.search);
  var teks = (q.get('perintah') || '').trim(), divisi = q.get('divisi') === 'build' ? 'build' : 'konten';
  if (!teks) return;
  var jalan = q.get('jalan') === '1';
  try { history.replaceState(null, '', location.pathname + '#ruangKerja'); } catch (e) {}
  var $ = function (id) { return document.getElementById(id); };
  var mulai = Date.now();
  (function tunggu() {
    var tombol = divisi === 'build' ? $('brun') : $('run');
    var isian = divisi === 'build' ? $('breq') : $('cmd');
    if (!tombol || !isian || tombol.disabled) {
      if (Date.now() - mulai < 15000) return setTimeout(tunggu, 200);
      if (isian) { isian.value = teks; isian.dispatchEvent(new Event('input', { bubbles: true })); }
      return;
    }
    if (divisi === 'build' && $('wsB')) $('wsB').click();
    isian.value = teks; isian.dispatchEvent(new Event('input', { bubbles: true }));
    var ruang = $('ruangKerja'); if (ruang) ruang.scrollIntoView();
    if (jalan) tombol.click();
  })();
})();
