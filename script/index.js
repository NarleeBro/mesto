const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.popup__edit-button-open');
console.log(popupOpenButtonElement);

const openPopup = function () {
    popupElement.classList.add('popup_is-opened');
    console.log('Open popup clicked')
}

const closePopup = function () {
    popupElement.classList.remove('popup_is-opened');
}

const ClosePopupByClickOnOverlay = function (event) {
console.log(event.target, event.currentTarget);
if (event.target !== event.currentTarget) {
    return;
}
closePopup();
};

popupOpenButtonElement.addEventListener('click', openPopup);
/* popupOpenButtonElement.addEventListener('click', function (event) {
  console.log(event);
}); */
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', ClosePopupByClickOnOverlay);

/* popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup); */

/* const togglePopupVisibility = function () {
    popupElement.classList.toggle('popup_is-opened');
} */

/* popupOpenButtonElement.addEventListener('click', togglePopupVisibility); */

/* togglePopupVisibility(); */

