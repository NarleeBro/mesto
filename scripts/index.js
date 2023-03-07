const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const popupFormElement = document.querySelector('.popup__form');
const nameInputElement = popupFormElement.querySelector('.popup__input_edit_name');
const jobInputElement = popupFormElement.querySelector('.popup__input_edit_job');

const profileNameTitle = document.querySelector('.profile__title');
const profileJobSubtitle = document.querySelector('.profile__subtitle');

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    nameInputElement.value = profileNameTitle.textContent;
    jobInputElement.value = profileJobSubtitle.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

const handleFormSubmit = function (evt) {
    evt.preventDefault();
    profileNameTitle.textContent = nameInputElement.value;
    profileJobSubtitle.textContent = jobInputElement.value;
    closePopup ();
}

/* Функция, которая дает возможность закрыть попап в любом месте экрана, кроме самой формы попап */
/* const closePopupByClickOnOverlay = function (event) {
console.log(event.target, event.currentTarget);
if (event.target !== event.currentTarget) {
    return;
}
closePopup();
}; */ 

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupFormElement.addEventListener('submit', handleFormSubmit);
/* Слушатель, который дает возможность закрыть попап в любом месте экрана, кроме самой формы попап (применяется с функцией закрытия попап)*/
/* popupElement.addEventListener('click', closePopupByClickOnOverlay); */