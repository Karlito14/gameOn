import { Modal } from './classes/modal.js';

// DOM Elements
const modalbg = document.querySelector('#modal');
const modalContent = modalbg.querySelector('#content');
const closeSpan = modalContent.querySelector('#close');
const modalBtn = document.querySelectorAll('.modal-btn');
const main = document.querySelector('#main');
const body = document.querySelector('body');

// Instance class modal
export const modal = new Modal(modalbg, main, modalContent, body);

modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Close modal
closeSpan.addEventListener('click', () => {
    modal.closeModal();
});

modalbg.addEventListener('click', () => {
    modal.closeModal();
});

// close modal or focus in modal
window.addEventListener('keydown', (event) => {
    if(modalbg.style.display === 'block') {
        if(event.code === 'Escape') {
            modal.closeModal();
        }
  
        if(event.code === 'Tab') {
            modal.closeFocusInModal(event);
        }
    }
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', () => {
    modal.launchModal();
}));
