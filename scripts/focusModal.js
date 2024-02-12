const modalContent = document.querySelector('.content');
const modalbg = document.querySelector(".bground");

const focusableElementsArray = [
    '[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
];

// focusable elements in modal content
const focusableElements = Array.from(modalContent.querySelectorAll(focusableElementsArray));
const firstFocusableElement = focusableElements[0];
const lastFocusableElement = focusableElements[focusableElements.length - 1];
  
// close Focus In Modal
function closeFocusInModal(event, elementfocus) {
    let focusableElement;

    if(elementfocus === lastFocusableElement && !event.shiftKey) {
        event.preventDefault();
        focusableElement = firstFocusableElement;
    } else if (elementfocus === firstFocusableElement && event.shiftKey) {
        event.preventDefault();
        focusableElement = lastFocusableElement;
    }

    return focusableElement;
}

// focus element 
function focus() {
    setTimeout(() => {
        firstFocusableElement.focus(); 
    },100);

    window.addEventListener('keydown', (event) => {

        const elementfocus = modalContent.querySelector(':focus');

        if((elementfocus === firstFocusableElement || elementfocus === lastFocusableElement) && event.code === 'Tab') {
            const focusElement = closeFocusInModal(event, elementfocus);
            if(focusElement) {
                focusElement.focus();
            }
        }
    })
}

export {focus};