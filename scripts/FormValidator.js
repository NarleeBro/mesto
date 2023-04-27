export default class FormValidator {
    constructor(object, form) {
      this._inputSelector = object.inputSelector;
      this._submitButtonSelector = object.submitButtonSelector;
      this._currentInputErrorContainer = object.currentInputErrorContainer;
      this._disableButtonClass = object.disableButtonClass;
      this._textErrorActive = object.textErrorActive;
      this._form = form;
      this._button = form.querySelector(this._submitButtonSelector);
      this._inputList = form.querySelectorAll(this._inputSelector);
  
    }
  
    _showInputError(errorTextElement, input) {
      errorTextElement.classList.add(this._textErrorActive);
      errorTextElement.textContent = input.validationMessage;
    }
  
    _hideInputError(errorTextElement, input) {
      errorTextElement.classList.remove(this._textErrorActive);
      errorTextElement.textContent = '';
    }
  
    _enableButton() {
      this._button.classList.remove(this._disableButtonClass);
      this._button.removeAttribute('disabled');
    }
  
    _disableButton() {
      this._button.classList.add(this._disableButtonClass);
      this._button.setAttribute('disabled', true);
    }
  
    _hasValidInput() {
      return Array.from(this._inputList).every((input) => input.validity.valid);
    }
  
    _toggleButtonState() {
      if(this._hasValidInput()) {
        this._enableButton();
      } else {
        this._disableButton(this._button);
      }
    }
  
    _checkValidity(input) {
      const errorTextElement = document.querySelector(`#${input.id}-error`);
      if(input.validity.valid) {
      this._hideInputError(errorTextElement, input);
    } else {
      this._showInputError(errorTextElement, input);
    }
  }
  
    _setEventListener() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
      this._checkValidity(input);
      this._toggleButtonState();
      });
    })
  }
  
    enableValidation() {
      this._setEventListener();
    }
  
    resetErrorBeforeOpenForm() {
  this._inputList.forEach(input => {
    const errorTextElement = document.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
      this._hideInputError(errorTextElement, input);
    }
  })
  this._disableButton();
    }
  }