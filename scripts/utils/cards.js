const initialCards = [
    {
      placename: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      placename: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      placename: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      placename: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      placename: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      placename: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupOpenButtonAddElement = document.querySelector(".profile__add-button");

const selectorTemplate = "#cardElement";
const popupProfileSelector = '.popup_section_edit-profile';

const popupAddCardSelector ='.popup_section_create-card';

const popupImageSelector = '.popup_section_increase-image';
const listsElementSelector = '.elements__list-template';

const formsValidator = {};

const configInfo = {
  //profileNameSelector: '.popup__input_edit_name',
  profileNameSelector: '.profile__title',
  
  //profileNameSelector: '#nameInput',
  //profileJobSelector: '.popup__input_edit_job'
  profileJobSelector: '.profile__subtitle'
}

const validationObject = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save-profile",

  currentInputErrorContainer: 'input.id',
  disableButtonClass: "popup__button-invalid",
  textErrorActive: 'error'
};

export {
  initialCards,
  popupOpenButtonElement,
  popupOpenButtonAddElement,
  selectorTemplate,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  listsElementSelector,
  formsValidator,
  configInfo,
  validationObject
};