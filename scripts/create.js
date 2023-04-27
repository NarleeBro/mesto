export default class Card {
    constructor(cardData, selectorTemplate, openImagePopup) {
      this._cardData = cardData;
      this._link = cardData.link;
      this._name = cardData.name;
      this._selectorTemplate = selectorTemplate;
      this._openImagePopup = openImagePopup;
      this._cloneElement = document.querySelector(this._selectorTemplate).content.querySelector(".template__list").cloneNode(true);
      this._imageElement = this._cloneElement.querySelector(".element__mask-group");
      this._likeIconElement = this._cloneElement.querySelector(".element__like");
      this._trashElement = this._cloneElement.querySelector(".element__trash");
      this._subTitle = this._cloneElement.querySelector(".element__title");
    }
    
    /* _getTemplateClone() {
      //77777777777 20 minut
      return document.querySelector(this._selectorTemplate).content.querySelector(".template__list").cloneNode(true);
    } */
  
    _handleOpenImageInPopupImage = () => {
    this._openImagePopup(this._cardData);
    }
  
    _handleDelete = () => {
    this._cloneElement.remove();
    this._cloneElement = null;
    }
  
    _handleLike = () => {
    this._likeIconElement.classList.toggle("element__like_active");
    }
  
  _setEventListener() {
  this._likeIconElement.addEventListener('click', this._handleLike);
  this._trashElement.addEventListener('click', this._handleDelete);
  this._imageElement.addEventListener('click', this._handleOpenImageInPopupImage);
    }
  
  createCard() {
     /*  this._cloneElement = this._getTemplateClone(); */
      this._imageElement.src = this._link;
      this._imageElement.alt = this._name;
      this._subTitle.textContent = this._name;
      this._setEventListener();
      return this._cloneElement;
    }
  }