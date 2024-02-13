const inputsText = document.querySelectorAll('input[type=text]');
const inputEmail = document.querySelector('input[type=email]');
const inputBirthDate = document.querySelector('#birthdate');
const inputQuantity = document.querySelector('#quantity');
const form = document.querySelector('form[name="reserve"]');
const insults = ['connard', 'salopard', 'abruti'];

console.log(inputBirthDate.value)

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Boucle pour géré les 2 inputs de type text prénom et nom
    for(let input of inputsText) {
        try {
            verifyInputsText(input);
            displayError(input, '');
        } catch(error) {
            displayError(input, error.message);
        }
    }

    try {
        verifyInputBirthDate(inputBirthDate);
        displayError(inputBirthDate, '');
    } catch(error) {
        displayError(inputBirthDate, error.message);
    }
})


// fonction pour afficher l'erreur sous l'input correspondant
function displayError(input, error) {

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

// fonction qui gère la validité du nom et prénom
function verifyInputsText(input) {
    const regexName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$");
    const valueInput = input.value;

    if(valueInput === "") {
        throw new Error(`Le champ ${input.dataset.name} ne peut etre vide`);
    } else if(valueInput.length < 2) {
        throw new Error(`Le ${input.dataset.name} doit faire au moins 2 lettres`);
    } else if (insults.includes(valueInput)) {
        throw new Error(`Le ${input.dataset.name} ne peut contenir d'injures ! ${valueInput[0].toUpperCase() + valueInput.slice(1)} !`);
    } else if(!regexName.test(valueInput)) {
        throw new Error(`Le ${input.dataset.name} ne peut contenir de caractères sépciales`);
    }
}

function verifyInputBirthDate(input) {
    const valueInput = input.value;
    const arrayDate = valueInput.split('-');
    const yearDate = +arrayDate[0];
    if(valueInput === "") {
        throw new Error(`Renseignez une ${input.dataset.name} de naissance`);
    } else if(yearDate < 1950) {
        throw new Error(`Tu ne peux pas etre si vieux !`);
    }
}

function verifyInputEmail(input) {
    
}