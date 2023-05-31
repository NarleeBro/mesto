import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    /* this._popupImage = this._popup.querySelector('.popup__image'); */
    this._popupImage = this._popup.querySelector(".popup__image");
    //console.log(this._popupImage)
    this._imagePopupFigcaptionText = this._popup.querySelector(
      ".popup__figcaption-text"
    );
    //console.log(this._imagePopupFigcaptionText)
  }

  open = (cardImageData) => {
    this._popupImage.src = cardImageData.link;
    console.log(this._popupImage.src)
    this._popupImage.alt = cardImageData.placename;
    // console.log(this._popupImage.alt)
    this._imagePopupFigcaptionText.textContent = cardImageData.placename;
    //console.log(this._imagePopupFigcaptionText.textContent)
    super.open();
  };
}
