// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const topNav = document.getElementById("myTopnav");
const closeButton = document.querySelector('.close');
const modalContent = document.querySelector('.content');
const main = document.querySelector('.main');

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
window.addEventListener('keydown', (event) => {
  if(event.code === 'Escape' && modalbg.style.display === "block") {
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

const focusableElements = Array.from(modalContent.querySelectorAll(focusableElementsArray));
const firstFocusableElement = focusableElements[0];
const lastFocusableElement = focusableElements[focusableElements.length - 1];

// close Focus In Modal
function closeFocusInModal(event) {
  let focusableElement;
  if(event.code === 'Tab' && modalbg.style.display === "block") {
    const elementfocus = modalContent.querySelector(':focus')
    
    if(elementfocus === lastFocusableElement && !event.shiftKey) {
      event.preventDefault();
      focusableElement = firstFocusableElement;
    } else if (elementfocus === firstFocusableElement && event.shiftKey) {
      event.preventDefault();
      focusableElement = lastFocusableElement;
    }
  }
  return focusableElement;
}

// focus element 
function focus() {
  setTimeout(() => {
    firstFocusableElement.focus(); 
  },100);

  window.addEventListener('keydown', (event) => {
    const focusElement = closeFocusInModal(event);
    if(focusElement) {
      focusElement.focus();
    }
  })
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


