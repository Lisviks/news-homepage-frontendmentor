const menuBtn = document.querySelector('.menu-btn')
const menuBtnImage = document.querySelector('.menu-btn img')
const nav = document.querySelector('.nav')

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open')
  if(nav.classList.contains('open')) {
    menuBtnImage.src = './assets/images/icon-menu-close.svg'
  } else {
    menuBtnImage.src = './assets/images/icon-menu.svg'
  }
})
