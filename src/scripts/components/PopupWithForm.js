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
  }

  getInputsValue() {
    this._values = {};
    this._inputList.forEach((input) => {
      this._values[input.name] = input.value;
    });
    //console.log(this._values)
    return this._values;
  }

  setInputsValue(dataFormUser) {
    this._inputList.forEach((input) => {
      input.value = dataFormUser[input.name];
    });
    //console.log(dataFormUser)
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitFunction);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
