import {focus} from './focusModal.js';
// DOM Elements
const modalbg = document.querySelector("#modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalContent = document.querySelector('#content');
const closeButton = document.querySelector('#close');
const topNav = document.getElementById("myTopnav");
const iconNavbar = document.querySelector('#icon');
const mainNavbar = document.querySelector('#main-navbar');
const main = document.querySelector('#main');

// Open or close the navigation
iconNavbar.addEventListener('click', editNav);

function editNav(event) {
  event.stopPropagation();
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
    mainNavbar.style.boxShadow = '0 0 5px #f3f3f3';
    mainNavbar.style.position = 'fixed';
  } else {
    closeNav();
  }
}

function closeNav() {
  if(topNav.className.includes('responsive')) {
    topNav.className = "topnav";
    mainNavbar.removeAttribute('style');
  }
}

window.addEventListener('scroll', closeNav);
window.addEventListener('click', closeNav);

// close modal event
modalContent.addEventListener('click', (event) => {
  event.stopPropagation();
})
closeButton.addEventListener('click', closeModal);
modalbg.addEventListener('click', closeModal)
window.addEventListener('keydown', (event) => {
  if(event.code === 'Escape' && modalbg.style.display === "block") {
    closeModal();
  }
})

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  focus();

  modalbg.style.display = "block";
  modalbg.removeAttribute('aria-hidden');
  main.setAttribute('aria-hidden', true);
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalbg.setAttribute('aria-hidden', true);
  main.removeAttribute('aria-hidden');
}


