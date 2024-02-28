import { Modal } from './classes/modal.js';

// DOM Elements
const modalbg = document.querySelector("#modal");
const modalContent = modalbg.querySelector('#content');
const closeSpan = modalContent.querySelector('#close');
const modalBtn = document.querySelectorAll(".modal-btn");
const main = document.querySelector('#main');
const body = document.querySelector('body');

export const modal = new Modal(modalbg, main, modalContent, body);

modalContent.addEventListener('click', (event) => {
  event.stopPropagation();
})

// Close modal
closeSpan.addEventListener('click', () => {
  modal.closeModal(modalbg, main);
});

modalbg.addEventListener('click', () => {
  modal.closeModal(modalbg, main);
})

// close modal or focus in modal
window.addEventListener('keydown', (event) => {
  if(event.code === 'Escape' && modalbg.style.display === "block") {
    modal.closeModal(modalbg, main);
  }

  if(event.code === 'Tab' && modalbg.style.display === 'block') {
    modal.closeFocusInModal(event);
  }
})

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modal.launchModal(modalbg, main, modalContent);
}));
