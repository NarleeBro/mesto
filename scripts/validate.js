const validationObject = {
  forms:  document.forms,
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save-profile",

  currentInputErrorContainer: 'input.id',
  disableButtonClass: "popup__button-invalid",
  textErrorActive: 'error'
};

//функция валидации
function enableValidation (object) {
  const forms = Array.from(object.forms);
  forms.forEach((form) => {
    const inputList = form.querySelectorAll(object.inputSelector);
    const button = form.querySelector(object.submitButtonSelector);
    setEventListenerValidation(inputList, button, object.currentInputErrorContainer, object.disableButtonClass, object.textErrorActive);
  })
  }

  //слушатели на импуты форм
  function setEventListenerValidation(inputList, button, currentInputErrorContainer, disableButtonClass, textErrorActive) {
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        checkValidity(input, currentInputErrorContainer, textErrorActive);
        toggleButtonState(inputList, button, disableButtonClass);
        })
    })
  }

  //функция проверки валидности импутов
  function checkValidity(input, currentInputErrorContainer, textErrorActive) {
    const errorTextElement = document.querySelector(`#${input.id}-error`);
    if(input.validity.valid) {
    hideInputError(input, errorTextElement, textErrorActive);
  } else {
    showInputError(input, errorTextElement, textErrorActive);
  }
  }

  //функция которая прячет текст ошибок красного цвета + полоска
  function hideInputError(input, errorTextElement, textErrorActive) {
    errorTextElement.textContent = '';
    errorTextElement.classList.remove(textErrorActive);
  }

  //функция которая показывает текст ошибок красного цвета + полоска
  function showInputError(input, errorTextElement, textErrorActive) {
    errorTextElement.textContent = input.validationMessage;
    errorTextElement.classList.add(textErrorActive);
  }

  //функция которая включает/отключает кнопку в форме
   function toggleButtonState(inputList, button, disableButtonClass) {
    if(hasValidInput(inputList)) {
      enableButton(button, disableButtonClass);
    } else {
      disableButton(button, disableButtonClass);
    }
  }

  //функция которая проверяет валидность импутов
  function hasValidInput(inputList) {
    return Array.from(inputList).every((input) => input.validity.valid);}

    //функция которая стилизует добавляя/удалля класс
  function enableButton(button, disableButtonClass) {
    button.classList.remove(disableButtonClass);
    button.removeAttribute('disabled');
  }

  //функция которая стилизует добавляя/удалля класс
  function disableButton(button, disableButtonClass) {
    button.classList.add(disableButtonClass);
    button.setAttribute('disabled', true);
  }

  //функция которая очищает ошибки красные
  function resetErrorBeforeOpenForm(form, object) {
    const button = form.querySelector(object.submitButtonSelector);
    form.querySelectorAll(object.inputSelector).forEach((input) => {
      const errorTextElement = document.querySelector(`#${input.id}-error`);
      if (!input.validity.valid) {
        hideInputError(input, errorTextElement, object.textErrorActive)
      }
      disableButton(button, object.disableButtonClass)
    })
  }

  //вызов функции валидации
  //enableValidation(validationObject)