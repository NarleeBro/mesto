export default class Card {
  constructor(
    cardData,
    selectorTemplate,
    openImagePopup,
    openDeletePopup,
    changeLike
  ) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._myId = cardData.myid;
    this._likes = cardData.likes;
    this._likesLength = cardData.likes.length;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
    this._openDeletePopup = openDeletePopup;
    this._changeLike = changeLike;
    this._cloneElement = document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".template__list")
      .cloneNode(true);
    this._imageElement = this._cloneElement.querySelector(
      ".element__mask-group"
    );
    this._likeIconElement = this._cloneElement.querySelector(".element__like");
    this._trashElement = this._cloneElement.querySelector(".element__trash");
    this._subTitle = this._cloneElement.querySelector(".element__title");
    this._counter = this._cloneElement.querySelector(".element__counter");
  }

  //метод открытия картинки в увеличенном размере
  _handleOpenImageInPopupImage = () => {
    this._openImagePopup(this._cardData);
  };
  //метод Удаление файла через корзину
  _handleDelete = () => {
    this._openDeletePopup({ element: this, cardId: this._cardId });
  };
  //метод включателя/выключателя лайк
  _toggleLike = () => {
    this._changeLike(this._likeIconElement, this._cardId);
    //this._likeIconElement.classList.toggle("element__like_active");
  };
  //слушатели на странице (лайк, корзина, картинка увелчиенная)
  _setEventListener() {
    this._likeIconElement.addEventListener("click", this._toggleLike);
    this._trashElement.addEventListener("click", this._handleDelete);
    this._imageElement.addEventListener(
      "click",
      this._handleOpenImageInPopupImage
    );
  }

  _changeVisibleForTrashButton() {
    if (this._myId === this._ownerId) {
      this._trashElement.classList.add("element__trashvision");
    } else {
      this._trashElement.classList.add("element__trashnovision");
    }
  }

  _checkLikesStatus() {
    this._likes.forEach((item) => {
      if (item._id === this._myId) {
        this._likeIconElement.classList.add("element__like_active");
        return;
      }
    });
    this._counter.textContent = this._likesLength;
  }

  toggleLike(likes) {
    this._likeIconElement.classList.toggle("element__like_active");
    this._counter.textContent = likes.length;
  }

  removeCard() {
    this._cloneElement.remove();
    this._cloneElement = null;
  }

  //сосздание карточки
  createCard() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._subTitle.textContent = this._name;
    this._checkLikesStatus();
    this._changeVisibleForTrashButton();
    this._setEventListener();
    return this._cloneElement;
  }
}
