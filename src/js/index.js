import './../components/components';

const burgerBtnHandler = () => {
  let burgerMenu = document.getElementById('burgerMenu');
  burgerMenu.classList.remove('header--burgerMenu-nonactive');
  burgerMenu.classList.add('header--burgerMenu-active');
};
