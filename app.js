'use strict';

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

// active menu
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// tilt.js on photos
VanillaTilt.init(document.querySelectorAll('.js-tilt'), {
    scale: 1.2
});