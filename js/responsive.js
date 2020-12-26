burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')




burger.addEventListener('click', ()=> {
    navlist.classList.toggle('visiblity-resp');
    rightNav.classList.toggle('visiblity-resp');
    navbar.classList.toggle('h-nav-resp');


})
