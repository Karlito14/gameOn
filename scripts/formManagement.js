import { form } from "./classes/form.js";

const elForm = document.querySelector('form[name="reserve"]');
const inputFirst = elForm.querySelector('#first');
const inputLast = elForm.querySelector('#last');
const inputEmail = elForm.querySelector('input[type=email]');
const inputBirthDate = elForm.querySelector('#birthdate');
const inputQuantity = elForm.querySelector('#quantity');
const inputsRadio = elForm.querySelectorAll('input[type=radio]');
const parentInputsRadio = inputsRadio[0].closest('div');
const conditionsInput = elForm.querySelector('input[type=checkbox][required');
const parentInputConditions = conditionsInput.closest('div')

elForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let completedForm = true;

    try {
        form.checkTextInput(inputFirst);
        form.displayError(inputFirst, '');
    } catch(error) {
        form.displayError(inputFirst, error.message);
        completedForm = false;
    }

    try {
        form.checkTextInput(inputLast);
        form.displayError(inputLast, '');
    } catch (error) {
        form.displayError(inputLast, error.message);
        completedForm = false;
    }

    try {
        form.checkEmailInput(inputEmail);
        form.displayError(inputEmail, '');
    } catch (error) {
        form.displayError(inputEmail, error.message);
        completedForm = false;
    }

    try {
        form.checkBirthdateInput(inputBirthDate);
        form.displayError(inputBirthDate, '');
    } catch (error) {
        form.displayError(inputBirthDate, error.message);
        completedForm = false;
    }

    try {
        form.checkQuantityInput(inputQuantity);
        form.displayError(inputQuantity, '');
    } catch (error) {
        form.displayError(inputQuantity, error.message);
        completedForm = false;
    }

    try {
        form.checkRadioInputs(inputsRadio);
        form.displayError(parentInputsRadio, '');
    } catch (error) {
        form.displayError(parentInputsRadio, error.message);
        completedForm = false;
    }

    try {
        form.checkCheckboxRequired(conditionsInput);
        form.displayError(parentInputConditions, '');
    } catch (error) {
        form.displayError(parentInputConditions, error.message);
        completedForm = false;
    }

    if(completedForm) {
        form.completedForm(elForm);
    }

})
