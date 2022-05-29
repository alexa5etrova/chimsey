(() => {})();
const burgerBtnHandler = () => {
  let burgerMenu = document.getElementById('burgerMenu');
  if (burgerMenu.classList.contains('header--burgerMenu-nonactive')) {
    burgerMenu.classList.remove('header--burgerMenu-nonactive');
    burgerMenu.classList.add('header--burgerMenu-active');
  } else {
    burgerMenu.classList.remove('header--burgerMenu-active');
    burgerMenu.classList.add('header--burgerMenu-nonactive');
  }
};
//# sourceMappingURL=index.js.map
