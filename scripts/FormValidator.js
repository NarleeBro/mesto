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
  //показываем ошибки текст+красная линия
    _showInputError() {
      this._errorTextElement.classList.add(this._textErrorActive);
      this._errorTextElement.textContent = this._input.validationMessage;
    }
  //скрываем ошибки текст+красная линия
    _hideInputError() {
      this._errorTextElement.classList.remove(this._textErrorActive);
      this._errorTextElement.textContent = '';
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
  //проверка валидности
    _checkValidity() {
      this._errorTextElement = document.querySelector(`#${this._input.id}-error`);
      if(this._input.validity.valid) {
      this._hideInputError();
    } else {
      this._showInputError();
    }
  }
  
    _setEventListener() {
      this._inputList.forEach(input => {
      input.addEventListener('input', () => {
      this._input = input;
      this._checkValidity();
      this._toggleButtonState();
      });
    })
  }
  
    enableValidation() {
      this._setEventListener();
    }
  //сброс ошибки перед открытием попап
    resetErrorBeforeOpenForm() {
    this._inputList.forEach(input => {
    this._input = input;
    this._errorTextElement = document.querySelector(`#${this._input.id}-error`);
    if (!input.validity.valid) {
      this._hideInputError();
    }
  })
  this._disableButton();
    }
  }