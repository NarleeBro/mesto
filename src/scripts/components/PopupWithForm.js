import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(
      ".popup__button-save-profile"
    );

    this._defaultButtonText = this._submitButton.textContent;
  }

  _getInputsValue() {
    this._values = {};
    this._inputList.forEach((input) => {
      this._values[input.name] = input.value;
    });

    return this._values;
  }

  setInputsValue(dataAnyForm) {
    this._inputList.forEach((input) => {
      input.value = dataAnyForm[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`;
      this._submitFunction(this._getInputsValue());
    });
  }

  setupDefaultText() {
    this._submitButton.textContent = this._defaultButtonText;
  }

  close() {
    super.close();
    this._form.reset();
  }
}
