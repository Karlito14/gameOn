const inputsText = document.querySelectorAll('input[type=text]');

const injures = ['connard', 'salopard', 'abruti'];

for (let input of inputsText) {
    input.addEventListener("input", () => {
        if(injures.includes(input.value)) {
            input.setCustomValidity("invalide");
        } else {
            input.setCustomValidity("");
            input.checkValidity();
        }  
    });

    input.addEventListener("invalid", () => {
        if(input.id === 'first') {
            personalisedMessage(input, 'prénom');
        } else {
            personalisedMessage(input, 'nom');
        }
    });
}

// fonction pour personnaliser le message selon l'erreur
function personalisedMessage (input, type) {
    const valeurInput = input.value.trim();
    
    if(valeurInput === "") {
        input.setCustomValidity(`Veuillez saisir un ${type} d'utilisateur non vide !`);
    } else if(valeurInput.length < 2) {
        input.setCustomValidity(`Le ${type} doit faire 2 lettres minimum`);
    } else if (injures.includes(valeurInput)) {
        input.setCustomValidity(`Un ${type} d'utilisateur ne peut contenir d'injures ! ${valeurInput[0].toUpperCase() + valeurInput.slice(1)} !`);
    } else {
        input.setCustomValidity(`Un ${type} d'utilisateur ne peut contenir que des lettres en minuscules ou majuscules et des tirets. Essayez à nouveau.`);
    }
}