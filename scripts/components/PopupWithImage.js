import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        /* this._popupImage = this._popup.querySelector('.popup__image'); */
        this._popupImage = this._popup.querySelector('.popup__image');
        //console.log(this._popupImage)
        this._imagePopupCaption = this._popup.querySelector('.popup__figcaption-text');
        //console.log(this._imagePopupCaption)
    }

    open = (cardData) => {
        this._popupImage.src = cardData.link;
       // console.log(this._popupImage.src)
        this._popupImage.alt = cardData.placename;
       // console.log(this._popupImage.alt)
        this._imagePopupCaption.textContent = cardData.placename;
        //console.log(this._imagePopupCaption.textContent)
        super.open();
    }
}