const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.popup__edit-button-open');

const popupFormElement = document.querySelector('.popup__form');
const nameInputElement = popupFormElement.querySelector('.popup__input-name');
const jobInputElement = popupFormElement.querySelector('.popup__input-job');

const profileNameTitle = document.querySelector('.profile__title');
const profileJobSubtitle = document.querySelector('.profile__subtitle');

const openPopup = function () {
    popupElement.classList.add('popup_is-opened');
    nameInputElement.value = profileNameTitle.textContent;
    jobInputElement.value = profileJobSubtitle.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_is-opened');
}

const closePopupByClickOnOverlay = function (event) {
/* console.log(event.target, event.currentTarget); */
if (event.target !== event.currentTarget) {
    return;
}
closePopup();
};

const handleFormSubmit = function (evt) {
    evt.preventDefault();
    profileNameTitle.textContent = nameInputElement.value;
    profileJobSubtitle.textContent = jobInputElement.value;
    closePopup ();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupFormElement.addEventListener('submit', handleFormSubmit);