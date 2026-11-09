/* Nexaoffice ruang kerja: menu di HP. */
(function () {
  'use strict';
  var b = document.getElementById('menuBtn'), l = document.getElementById('navLinks');
  if (!b || !l) return;
  b.addEventListener('click', function () { var o = l.classList.toggle('open'); b.setAttribute('aria-expanded', String(o)); });
  l.addEventListener('click', function (e) { if (e.target.closest('a')) { l.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); } });
})();
