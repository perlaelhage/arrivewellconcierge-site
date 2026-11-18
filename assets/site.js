(function () {
  var d = document, h = d.documentElement;
  var burger = d.querySelector('.burger');
  var menu = d.getElementById('menu');
  if (!burger || !menu) { return; }
  h.classList.add('js');
  menu.hidden = true;
  function set(open) {
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    h.classList.toggle('menu-open', open);
  }
  burger.addEventListener('click', function () { set(menu.hidden); });
  d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { set(false); burger.focus(); }
  });
  if (window.matchMedia) {
    var q = window.matchMedia('(min-width:1200px)');
    var close = function () { if (q.matches) { set(false); } };
    if (q.addEventListener) { q.addEventListener('change', close); } else if (q.addListener) { q.addListener(close); }
  }
})();
