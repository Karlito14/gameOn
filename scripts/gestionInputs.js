const inputsText = document.querySelectorAll('input[type=text]');
const inputEmail = document.querySelector('input[type=email]');
const form = document.querySelector('form[name="reserve"]');
const insults = ['connard', 'salopard', 'abruti'];


form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Boucle pour géré les 2 inputs de type text prénom et nom
    for(let input of inputsText) {
        try {
            if(input.id === 'first') {
                verifyInputsText(input, 'prénom');
                displayError(input, '', 'prenom');
            } else {
                verifyInputsText(input, 'nom');
                displayError(input, '', 'nom');
            }
        } 
        catch(error) {
            if(input.id === 'first') {
                displayError(input, error.message, 'prenom');
            } else {
                displayError(input, error.message, 'nom');
            }
        }
    }
})


// fonction pour afficher l'erreur sous l'input correspondant
function displayError(input, error, id) {

    let paragrapheError = document.querySelector(`#erreur-${id}`);

    if(!paragrapheError) {
        paragrapheError = document.createElement('p');
        paragrapheError.id = `erreur-${id}`;
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
function verifyInputsText(input, type) {
    const regexName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$");
    const valueInput = input.value;

    if(valueInput === "") {
        throw new Error(`Le champ ${type} ne peut etre vide`);
    } else if(valueInput.length < 2) {
        throw new Error(`Le ${type} doit faire au moins 2 lettres`);
    } else if (insults.includes(valueInput)) {
        throw new Error(`Le ${type} ne peut contenir d'injures ! ${valueInput[0] + valueInput.slice(1)} !`);
    } else if(!regexName.test(valueInput)) {
        throw new Error(`Le ${type} ne peut contenir de caractères sépciales`);
    }
}