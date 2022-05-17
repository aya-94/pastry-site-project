'use strict';

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

VanillaTilt.init(document.querySelectorAll('.js-tilt'), {
    scale: 1.2
});