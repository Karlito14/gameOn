const focusableElementsArray = [
    '[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
];

export class Modal { 

    constructor(modal, main, modalContent, body) {
        this.modal = modal;
        this.main = main;
        this.modalContent = modalContent;
        this.body = body;
        this.firstFocusableElement = this.findFirstFocusableElement(focusableElementsArray);
        this.lastFocusableElement = this.findLastFocusableElement(focusableElementsArray);
    }

    launchModal() {
        this.focusInFirstFocusableElement();

        this.modal.style.display = "block";
        this.modal.removeAttribute('aria-hidden');
        this.main.setAttribute('aria-hidden', true);
        this.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.style.display = "none";
        this.modal.setAttribute('aria-hidden', true);
        this.main.removeAttribute('aria-hidden');
        this.body.removeAttribute('style');
    }

    focusInFirstFocusableElement() {
        setTimeout(() => {
            this.firstFocusableElement.focus(); 
        },100);
    }

    closeFocusInModal(event) {

        const elementfocus = this.modalContent.querySelector(':focus');

        if(elementfocus === this.lastFocusableElement && !event.shiftKey) {
            event.preventDefault();
            this.firstFocusableElement.focus();
        } else if (elementfocus === this.firstFocusableElement && event.shiftKey) {
            event.preventDefault();
            this.lastFocusableElement.focus();
        }
    }

    findFirstFocusableElement(arrayFocusableElements) {
        const focusableElements = Array.from(this.modalContent.querySelectorAll(arrayFocusableElements));
        return focusableElements[0];
    }

    findLastFocusableElement(arrayFocusableElements) {
        const focusableElements = Array.from(this.modalContent.querySelectorAll(arrayFocusableElements));
        return focusableElements[focusableElements.length - 1];
    }
}