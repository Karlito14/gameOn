// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const topNav = document.getElementById("myTopnav");
const closeButton = document.querySelector('.close');
const modalContent = document.querySelector('.content');
const main = document.querySelector('main');

// Open or close the navigation
topNav.addEventListener('click', editNav);
function editNav(event) {
  if (this.className === "topnav") {
    this.className += " responsive";
  } else {
    this.className = "topnav";
  }
}


// close modal event
modalContent.addEventListener('click', (event) => {
  event.stopPropagation();
})
closeButton.addEventListener('click', closeModal);
modalbg.addEventListener('click', closeModal)
modalbg.addEventListener('keydown', (event) => {
  if(event.code === 'Escape') {
    closeModal();
  }
})

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


const focusableElementsArray = [
  '[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
];


// focus element 
function focus() {
  const focusableElements = Array.from(modalContent.querySelectorAll(focusableElementsArray));
  const firstFocusableElement = focusableElements[0];

  setTimeout(() => {
    firstFocusableElement.focus(); 
  },100);
}

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


