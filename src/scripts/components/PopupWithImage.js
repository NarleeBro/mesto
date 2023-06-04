import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._imagePopupFigcaptionText = this._popup.querySelector(
      ".popup__figcaption-text"
    );
  }

  open = (cardImageData) => {
    this._popupImage.src = cardImageData.link;
    this._popupImage.alt = cardImageData.placename;
    this._imagePopupFigcaptionText.textContent = cardImageData.placename;
    super.open();
  };
}
