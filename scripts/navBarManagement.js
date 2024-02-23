import { Navbar } from './classes/navbar.js';

const iconNavbar = document.querySelector('#icon');
const mainNavbar = document.querySelector('#main-navbar');
const topNav = document.getElementById("myTopnav");

// Open or close the navigation
iconNavbar.addEventListener('click', editNav);

function editNav(event) {
  event.preventDefault();
  event.stopPropagation();
  if (topNav.className === "topnav") {
    Navbar.openNavbar(topNav, mainNavbar);
  } else {
    Navbar.closeNavbar(topNav, mainNavbar);
  }
}

// close navbar by scroll
window.addEventListener('scroll', () => {
  Navbar.closeNavbar(topNav, mainNavbar);
});

// close the navbar by click outside 
window.addEventListener('click', () => {
  Navbar.closeNavbar(topNav, mainNavbar);
});