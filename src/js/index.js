import './../components/components';
const themeEl = document.getElementsByTagName('body')[0];
if (localStorage.getItem('theme') == 'dark') {
  themeEl.classList.remove('lightTheme');
  themeEl.classList.add('darkTheme');
} else {
  themeEl.classList.add('lightTheme');
  themeEl.classList.remove('darkTheme');
}

const themeChangeHandler = (event) => {
  event.preventDefault();

  if (themeEl.classList.contains('lightTheme')) {
    themeEl.classList.remove('lightTheme');
    themeEl.classList.add('darkTheme');
    localStorage.setItem('theme', 'dark');
  } else {
    themeEl.classList.remove('darkTheme');
    themeEl.classList.add('lightTheme');
    localStorage.setItem('theme', 'light');
  }
};

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
