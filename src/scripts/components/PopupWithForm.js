import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    //console.log(this._submitFunction)
    //this._form = document.querySelector('.popup__form');
    this._form = this._popup.querySelector(".popup__form");
    //console.log(this._form)
    this._inputList = this._form.querySelectorAll(".popup__input");
    //console.log(this._inputList)
    //console.log(getInputsValue());
    ///99999999
    this._submitButton = this._form.querySelector(
      ".popup__button-save-profile"
    );
    //console.log(this._submitButton)
    this._defaultButtonText = this._submitButton.textContent;
  }

  _getInputsValue() {
    /* const data = Object.fromEntries(new FormData(this._form));
    console.log(data)
    return data; */
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
    //console.log(dataFormUser)
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
