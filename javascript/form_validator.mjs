
'use strict';
// Код валидации формы
export default function validate_form(arrayFormInformation) {
    // VALIDATORS FOR INPUTS
    let validatorRegExp = function (value, pattern) {
        let regObj = new RegExp(pattern, 'm');
        let resTF = regObj.test(value);
        console.log('phone is ', resTF, pattern);
        return resTF;
    };
    let validatorNumber = function (value, max, min) {
        let regObj = new RegExp("^-?\\d+\\.?\\d*", "gisu");
        let resultTF = regObj.test(value);
        if (resultTF === true) {
            if (max === undefined && min === undefined) {

                return true
            } else {
                if (Number(value) >= min && Number(value) <= max) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false
        }
    };
    let validatorLetter = function (value) {
        let regObj = new RegExp("^([\\D]+)$", "gisu");
        return regObj.test(value);
    };


    let inputChecker = function (event) {
        if (!event.target.matches('input')) return;
        let input = event.target;
        let inputName = input.name;
        let validatorName = input.dataset.validator;
        let inputValue = input.value;
        if (inputValue == "" && !input.dataset.hasOwnProperty('required')) {
            return;
        } else if (inputValue == "" && input.dataset.hasOwnProperty('required')) {
            input.classList.add(arrayFormInformation.inputErrorClass);
            return;
        }
        if (validatorName === "letters") {
            if (validatorLetter(inputValue) === false) {
                input.classList.add(arrayFormInformation.inputErrorClass)
            }
        } else if (validatorName === 'number') {
            let NumMin = input.dataset.validatorMin;
            let NumMax = input.dataset.validatorMax;
            if (validatorNumber(inputValue, NumMax, NumMin) === false) {
                input.classList.add(arrayFormInformation.inputErrorClass)
            }
        } else if (validatorName === "regexp") {
            if (validatorRegExp(inputValue, input.dataset.validatorPattern) === false) {
                input.classList.add(arrayFormInformation.inputErrorClass)
            }
        }
    };
    let formSubmit = function (event) {
        event.preventDefault();
        let formEl = event.target;
        let child;
        let formValid = 0;
        for (child in formEl.children) {
            if (formEl.children[child].tagName === 'INPUT') {
                let input = formEl.children[child];
                let validatorName = input.dataset.validator;
                let inputValue = input.value;
                let inputName = input.name;
                if (input.dataset.hasOwnProperty('required') === true) {
                    if (validatorName === "letters") {
                        if (validatorLetter(inputValue) === false) {
                            input.classList.add(arrayFormInformation.inputErrorClass);
                            formValid += 1;
                        }
                    } else if (validatorName === 'number') {
                        let NumMin = input.dataset.validatorMin;
                        let NumMax = input.dataset.validatorMax;
                        if (validatorNumber(inputValue, NumMax, NumMin) === false) {
                            formValid += 1;
                            input.classList.add(arrayFormInformation.inputErrorClass)
                        }
                    } else if (validatorName === "regexp") {
                        if (validatorRegExp(inputValue, input.dataset.validatorPattern) === false) {
                            input.classList.add(arrayFormInformation.inputErrorClass);
                            formValid += 1;
                        }


                    }
                }
            }
        }
        if (formValid !== 0) {
            formEl.classList.add(arrayFormInformation.formInvalidClass)
        } else {

            formEl.classList.remove(arrayFormInformation.formInvalidClass);
            formEl.classList.add(arrayFormInformation.formValidClass)

        }
    };
    let inputFocus = function (event) {
        if (!event.target.matches('input')) return;

        let input = event.target;

        if (input.classList.contains(arrayFormInformation.inputErrorClass) === true) {
            input.classList.remove(arrayFormInformation.inputErrorClass);
        }
    };


    let formId = arrayFormInformation.formId;
    let formElement = document.getElementById(formId);
    // formElement.addEventListener('focusout', inputChecker, true);
    // formElement.addEventListener('submit', formSubmit, true);
    // formElement.addEventListener('focus', inputFocus, true);
    //

};

// Вызов валидатора формы
// validateForm({
//     formId: 'profile',
//     formValidClass: 'form_valid',
//     formInvalidClass: 'form_invalid',
//
//     inputErrorClass: 'input_error'
// });
