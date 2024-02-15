import { navbar } from './classes/navbar.js';

const iconNavbar = document.querySelector('#icon');
const mainNavbar = document.querySelector('#main-navbar');
const topNav = document.getElementById("myTopnav");

// Open or close the navigation
iconNavbar.addEventListener('click', editNav);

function editNav(event) {
  event.preventDefault();
  event.stopPropagation();
  if (topNav.className === "topnav") {
    navbar.openNavbar(topNav, mainNavbar);
  } else {
    navbar.closeNavbar(topNav, mainNavbar);
  }
}

window.addEventListener('scroll', () => {
  navbar.closeNavbar(topNav, mainNavbar);
});
window.addEventListener('click', () => {
  navbar.closeNavbar(topNav, mainNavbar);
});