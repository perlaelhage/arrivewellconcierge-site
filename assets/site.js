(function () {
  var burger = document.querySelector('.aw-burger button');
  var menu = document.querySelector('.aw-menu');
  if (burger && menu) {
    menu.hidden = true;
    burger.addEventListener('click', function () {
      menu.hidden = !menu.hidden;
      burger.setAttribute('aria-expanded', menu.hidden ? 'false' : 'true');
    });
  }
})();
