import { modal } from './modal.js';

const main = document.querySelector('#main');
const modalbg = document.querySelector("#modal");

export class form {

    static displayError(input, error) {

        let paragrapheError = document.querySelector(`#erreur-${input.dataset.name}`);

        if(!paragrapheError) {
            paragrapheError = document.createElement('p');
            paragrapheError.id = `erreur-${input.dataset.name}`;
        } 

        if(error) {
            paragrapheError.innerText = error;
            paragrapheError.classList.add('message-erreur');
            input.after(paragrapheError);
        } else {
            paragrapheError.remove();
        }  
    }

    static checkTextInput(input) {
        const regexName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$");
        const valueInput = input.value;

        const insults = ['connard', 'salopard', 'abruti'];

        if(valueInput === "") {
            throw new Error(`Le champ ${input.dataset.name} ne peut etre vide`);
        } else if(valueInput.trim().length < 2) {
            throw new Error(`Le ${input.dataset.name} doit faire au moins 2 lettres`);
        } else if (insults.includes(valueInput)) {
            throw new Error(`Le ${input.dataset.name} ne peut contenir d'injures !`);
        } else if(!regexName.test(valueInput)) {
            throw new Error(`Le ${input.dataset.name} ne peut contenir de caractères sépciales`);
        }
    }

    static checkBirthdateInput(input) {
        const valueInput = input.value;
        const arrayDate = valueInput.split('-');
        const yearDate = +arrayDate[0];

        const today = new Date();
        const year = today.getFullYear();

        if(valueInput === "") {
            throw new Error(`Renseignez une ${input.dataset.name} de naissance`);
        } else if(yearDate < 1950) {
            throw new Error(`Vous ne pouvez pas etre si vieux !`);
        } else if(yearDate > year - 18) {
            throw new Error(`Il faut etre majeur pour participer`);
        }
    }

    static checkEmailInput(input) {
        const regexEmail = new RegExp("[a-zA0-9_.\-]+@[a-zA-Z0-9]+\.[a-z0-9.]+")

        if(!regexEmail.test(input.value)) {
            throw new Error(`Veuillez renseigner une adresse mail valide`);
        }
    }

    static checkQuantityInput(input) {
        const min = +input.min;
        const max = +input.max;

        if(input.value === "") {
            throw new Error('Veuillez renseigner un nombre');
        } else if (+input.value < min || +input.value > max) {
            throw new Error('Veuillez renseigner un nombre entre 0 et 99');
        }
    }

    static checkRadioInputs(array) {
        let checked = false;
        for(let input of array) {
            if(input.checked) {
                checked = true;
                break;
            }
        }

        if(checked === false) {
            throw new Error('Veuillez choisir une ville');
        }
    }

    static checkCheckboxRequired(input) {
        if(!input.checked) {
            throw new Error("Vous devez accepter nos conditions d'utilisation");
        }
    }

    static completedForm(form) {
        const elParent = form.closest('div');
        form.remove();

        const block = `
            <div class='block-validation'>
                <p class='text-validation'>Merci de votre inscription</p>
                <button class="btn-submit button button-close">Fermer</button>
            </div>
        `;

        elParent.innerHTML = block;

        const buttonClose = elParent.querySelector('.button-close');

        buttonClose.addEventListener('click', () => {
            modal.closeModal(modalbg, main);
        })
    }
}