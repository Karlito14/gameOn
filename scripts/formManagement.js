import { Form } from "./classes/form.js";


// DOM elements form
const elForm = document.querySelector('#formulaire');
const inputFirst = elForm.querySelector('#first');
const inputLast = elForm.querySelector('#last');
const inputEmail = elForm.querySelector('input[type=email]');
const inputBirthDate = elForm.querySelector('#birthdate');
const inputQuantity = elForm.querySelector('#quantity');
const inputsRadio = elForm.querySelectorAll('input[type=radio]');
const parentInputsRadio = inputsRadio[0].closest('fieldset');
const conditionsInput = elForm.querySelector('input[type=checkbox][required');
const parentInputConditions = conditionsInput.closest('fieldset');

// submit form
elForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    let completedForm = true;

    try {
        Form.checkTextInput(inputFirst);
        Form.displayError(inputFirst, '');
    } catch(error) {
        Form.displayError(inputFirst, error.message);
        completedForm = false;
    }

    try {
        Form.checkTextInput(inputLast);
        Form.displayError(inputLast, '');
    } catch (error) {
        Form.displayError(inputLast, error.message);
        completedForm = false;
    }

    try {
        Form.checkEmailInput(inputEmail);
        Form.displayError(inputEmail, '');
    } catch (error) {
        Form.displayError(inputEmail, error.message);
        completedForm = false;
    }

    try {
        Form.checkBirthdateInput(inputBirthDate);
        Form.displayError(inputBirthDate, '');
    } catch (error) {
        Form.displayError(inputBirthDate, error.message);
        completedForm = false;
    }

    try {
        Form.checkQuantityInput(inputQuantity);
        Form.displayError(inputQuantity, '');
    } catch (error) {
        Form.displayError(inputQuantity, error.message);
        completedForm = false;
    }

    try {
        Form.checkRadioInputs(inputsRadio);
        Form.displayError(parentInputsRadio, '');
    } catch (error) {
        Form.displayError(parentInputsRadio, error.message);
        completedForm = false;
    }

    try {
        Form.checkCheckboxRequired(conditionsInput);
        Form.displayError(parentInputConditions, '');
    } catch (error) {
        Form.displayError(parentInputConditions, error.message);
        completedForm = false;
    }

    const formData = new FormData(elForm);

    if(completedForm) {
        Form.completedForm(elForm);

        Form.sendForm(formData);
    }
})
