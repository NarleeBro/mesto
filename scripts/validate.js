const validationConfig = {
  formSelector:  document.forms,
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save-profile",

  errorSelectorTemplate: 'popup__error_type_',
  disableButtonClass: "popup__button-invalid",
  textErrorActive: 'error'
};

//!!!@@@!!!
function enableValidation (config) {
  const forms = Array.from(config.formSelector);
  forms.forEach((form) => {
    const inputList = form.querySelectorAll(config.inputSelector);
    const button = form.querySelector(config.submitButtonSelector);
    hangEventListener(inputList, button, config.errorSelectorTemplate, config.disableButtonClass, config.textErrorActive);
  })
  }

  function hangEventListener(inputList, button, errorSelectorTemplate, disableButtonClass, textErrorActive) {
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        checkValidity(input, errorSelectorTemplate, textErrorActive);
        toggleButtonState(inputList, button, disableButtonClass);
        })
    })
  }

  function checkValidity(input, errorSelectorTemplate, textErrorActive) {
    const errorTextElement = document.querySelector(`#${input.id}-error`);
    if(input.validity.valid) {
    hideInputError(input, errorTextElement, textErrorActive);
  } else {
    showInputError(input, errorTextElement, textErrorActive);
  }
  }

  function hideInputError(input, errorTextElement, textErrorActive) {
    errorTextElement.textContent = '';
    errorTextElement.classList.remove(textErrorActive);
  }

  function showInputError(input, errorTextElement, textErrorActive) {
    errorTextElement.textContent = input.validationMessage;
    errorTextElement.classList.add(textErrorActive);
  }

  function toggleButtonState(inputList, button, disableButtonClass) {
    if(hasValidInput(inputList)) {
      enableButton(button, disableButtonClass);
    } else {
      disableButton(button, disableButtonClass);
    }
  }

  function hasValidInput(inputList) {
    return Array.from(inputList).every((input) => input.validity.valid); //можно через some сделать 1.07 время видео
  }

  function enableButton(button, disableButtonClass) {
    button.classList.remove(disableButtonClass);
    
    button.removeAttribute('disabled');
  }

  function disableButton(button, disableButtonClass) {
    button.classList.add(disableButtonClass);
    button.setAttribute('disabled', true);
  }

  function resetErrorForOpenForm(form) {
    form.querySelectorAll(validationConfig.inputSelector).forEach((input) => {
      const errorTextElement = document.querySelector(`#${input.id}-error`);
      if (!input.validity.valid) {
        hideInputError(input, errorTextElement, validationConfig.textErrorActive)
      }
    })
  }

  enableValidation(validationConfig)