import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, submitFoo) {
    super(popupSelector);
    this._submitFoo = submitFoo;
    this._submitButton = this._form.querySelector(
      ".popup__button-save-profile"
    );
    this._defaultButtonText = this._submitButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`;
      this._submitFoo({ element: this._element, cardId: this._cardId });
    });
  }

  setupDefaultText() {
    this._submitButton.textContent = this._defaultButtonText;
  }

  open = ({ element, cardId }) => {
    super.open();
    this._element = element;
    this._cardId = cardId;
  };
}
