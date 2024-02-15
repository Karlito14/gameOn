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
        if(valueInput === "") {
            throw new Error(`Renseignez une ${input.dataset.name} de naissance`);
        } else if(yearDate < 1950) {
            throw new Error(`Vous ne pouvez pas etre si vieux !`);
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
}