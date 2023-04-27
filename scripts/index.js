import initialCards from "./cards.js";
import Card from "./create.js";
import FormValidator from "./FormValidator.js";

// Ищем необходимые элементы на странице по классам (можно по другим идентификаторам)
const popupAllElementsOnPages = document.querySelectorAll(".popup");
const popupForm = document.querySelector(".popup__form");
const popupEditProfile = document.querySelector(".popup_section_edit-profile");
const popupCloseButtonElements = document.querySelectorAll(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
/* const popupFormEditProfile = popupEditProfile.querySelector('.popup__form_edit_profile'); */ //альтернативный вариант нахождения формы
const popupFormEditProfile = document.forms["popupEditProfileForm"];

const popupOpenButtonAddElement = document.querySelector(".profile__add-button");
const nameInputElement = popupFormEditProfile.querySelector(".popup__input_edit_name");
const jobInputElement = popupFormEditProfile.querySelector(".popup__input_edit_job");
const profileNameTitle = document.querySelector(".profile__title");
const profileJobSubtitle = document.querySelector(".profile__subtitle");
//Шаблон картинка + напдись + лайк + корзина
const userTemplate = document.querySelector(".template").content;
const userImage = userTemplate.querySelector(".element__mask-group");
const templateList = document.querySelector(".elements__list-template");
//Попап откпытия картинки с увеличением на экран
const popupIncreaseImage = document.querySelector(".popup_section_increase-image");
const popupImageElement = document.querySelector(".popup__image");
const popupFigcaptionText = document.querySelector(".popup__figcaption-text");
//Попап создания новой карчтоки
const popupCreateCard = document.querySelector(".popup_section_create-card");
/* const popupFormCreateCard = popupCreateCard.querySelector('.popup__form_create_card'); */ //альтернативный вариант нахождения формы
const popupFormCreateCard = document.forms["popupCreateCardForm"];

const placeNameInputCreateCard = popupFormCreateCard.querySelector(".popup__input_edit_place-name");
const imageUrlInputCreateCard = popupFormCreateCard.querySelector(".popup__input_edit_image-url"
);
const selectorTemplate = "#cardElement";

//константы для функции reset
/* const buttonOfFormEditProfile = popupFormEditProfile.querySelector('.popup__button-save-profile');
const inputListFormEditProfile = popupFormEditProfile.querySelectorAll('.popup__input');
const buttonOfFormCreateCard = popupFormCreateCard.querySelector('.popup__button-save-profile');
const inputListFormCreateCard = popupFormCreateCard.querySelectorAll('.popup__input'); */

const validationObject = {
  //forms:  document.forms,
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save-profile",

  currentInputErrorContainer: 'input.id',
  disableButtonClass: "popup__button-invalid",
  textErrorActive: 'error'
};

//Функция которая передает введенные значения в попапе на страницу при ее закрытии
const handleFormEditProfileSubmit = function (evt) {
  evt.preventDefault();
  // Тут мы прописали, чтобы значение текста, которое мы напишем в открывшемся попапе, где имя "Кусто", передавалось при закрытии попапа на страницу
  profileNameTitle.textContent = nameInputElement.value;
  // Тут мы прописали, чтобы значение текста, которое мы напишем в открывшемся попапе, где должность "Исследоватеот океана", передавалось при закрытии попапа на стараницу
  profileJobSubtitle.textContent = jobInputElement.value;
  closePopup(popupEditProfile);
};

//7777777777 функция открытия попап картинки
function openImagePopup(cardData) {
  popupImageElement.src = cardData.link;
  popupImageElement.alt = cardData.name;
  popupFigcaptionText.textContent = cardData.name;
  openPopup(popupIncreaseImage);
}

popupFormEditProfile.addEventListener("submit", handleFormEditProfileSubmit);



//создаем клон массива темплейт в новую переменную
function createNewCard (element) {
  const card = new Card(element, selectorTemplate, openImagePopup);
  const cardElement = card.createCard();
  return cardElement;
};

//7777777777 функция добавления карточки в нужный контейнер
function addCard(container, card) {
  container.prepend(card);
}


/* class FormValidator {
  constructor(object, form) {
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._currentInputErrorContainer = object.currentInputErrorContainer;
    this._disableButtonClass = object.disableButtonClass;
    this._textErrorActive = object.textErrorActive;
    this._form = form;
    this._button = form.querySelector(this._submitButtonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector);

  }

  _showInputError(errorTextElement, input) {
    input.classList.add(this.__textErrorActive);
    errorTextElement.textContent = input.validationMessage;
  }

  _hideInputError(errorTextElement, input) {
    input.classList.remove(this.__textErrorActive);
    errorTextElement.textContent = '';
  }

  _enableButton() {
    this._button.classList.remove(this._disableButtonClass);
    this._button.disabled = false;
  }

  _disableButton() {
    this._button.classList.add(this._disableButtonClass);
    this._button.disabled = true;
  }

  _hasValidInput() {
    return Array.from(this._inputList).every((input) => input.validity.valid);
  }

  _toggleButtonState() {
    if(this._hasValidInput()) {
      this._enableButton();
    } else {
      this._disableButton(this._button);
    }
  }

  _checkValidity(input) {
    const errorTextElement = document.querySelector(`#${input.id}-error`);
    console.log(errorTextElement)
    if(input.validity.valid) {
    this._hideInputError(errorTextElement, input);
  } else {
    this._showInputError(errorTextElement, input);
  }
}

  _setEventListener() {
  this._inputList.forEach(input => {
    input.addEventListener('input', () => {
    this._checkValidity(input);
    this._toggleButtonState();
    });
  })
}

  enableValidation() {
    /* this._button = this._form.querySelector(this._submitButtonSelector);
    this._inputList = this._form.querySelectorAll(this._inputSelector); 
    this._setEventListener();
  }

  resetErrorBeforeOpenForm() {
this._inputList.forEach(input => {
  const errorTextElement = document.querySelector(`#${input.id}-error`);
  if (!input.validity.valid) {
    this._hideInputError(errorTextElement, input);
  }
})
this._disableButton();
  }
} */

const popupFormEditProfileValidator = new FormValidator(validationObject, popupFormEditProfile);
popupFormEditProfileValidator.enableValidation()

const popupFormCreateCardValidator = new FormValidator(validationObject, popupFormCreateCard);
popupFormCreateCardValidator.enableValidation()

//7777777777  создание при загрузке страницы начальных карточек
initialCards.forEach((element) => {
  addCard(templateList, createNewCard(element));
});

//в карточки попадают данные из массива
//initialCards.forEach (function (item) {
//templateList.append(createCard(item));
//});

//функция Удаление файла через корзину
function handleDelete(event) {
  const card = event.target.closest(".template__list");
  // console.log(card)
  card.remove();
}
//функция включателя/выключателя лайк
function toggleLike(event) {
  event.target.classList.toggle("element__like_active");
}

//обшая фунция для слушателей на странице (лайк, корзина)
function setEventListeners(cardElement) {
  cardElement
    .querySelector(".element__trash")
    .addEventListener("click", handleDelete); //слушатель на корзину
  cardElement
    .querySelector(".element__like")
    .addEventListener("click", toggleLike); //слушатель на лайк
}

//функция создание новой карточки из попап
popupFormCreateCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const placeNameImageURLElement = {
    name: placeNameInputCreateCard.value,
    link: imageUrlInputCreateCard.value,
  };
  //evt.target.reset();
  //templateList.prepend(placeInPage);
  addCard(templateList, createNewCard(placeNameImageURLElement));
  closePopup(popupCreateCard);
});

//вешаем слушатель на кнопку создать с функией создания новой карточки
/* popupFormCreateCard.addEventListener("submit", handleNewCard) */;

//универсальная функция открытия попап №all
const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupFromEcs);
};

//универсальная функция закрытия попап №all
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupFromEcs);
};

//функция закрытия попап по Escape
function closePopupFromEcs(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

//слушатель для открытия попап ред-я профиля с передачей значений со страницы в попап
popupOpenButtonElement.addEventListener("click", function () {
   //resetErrorBeforeOpenForm(popupFormEditProfile); //обнуляем красные ошибки
   popupFormEditProfile.reset();
   popupFormEditProfileValidator.resetErrorBeforeOpenForm();
  /* toggleButtonState(
    inputListFormEditProfile,
    buttonOfFormEditProfile,
    validationObject.disableButtonClass
  );  */
  nameInputElement.value = profileNameTitle.textContent;
  jobInputElement.value = profileJobSubtitle.textContent;
  openPopup(popupEditProfile);
});

//слушатель для открываения попап создания новой карточки №2
popupOpenButtonAddElement.addEventListener("click", function () {
  popupFormCreateCard.reset();
  popupFormCreateCardValidator.resetErrorBeforeOpenForm();
  //resetErrorBeforeOpenForm(popupFormCreateCard); //обнуляем красные ошибки
  /* toggleButtonState(
    inputListFormCreateCard,
    buttonOfFormCreateCard,
    validationObject.disableButtonClass
  ); */
  openPopup(popupCreateCard);
});

//слушатель, котораый закрывает попапы методом перебора
popupCloseButtonElements.forEach(function (element) {
  //находим все попап через родителя по классу closest('.class')
  const popup = element.closest(".popup");
  element.addEventListener("click", function () {
    closePopup(popup);
  });
});

///функция закрытия попап по оверлей
popupAllElementsOnPages.forEach(function (element) {
  element.addEventListener("mousedown", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(element);
    }
  });
});
