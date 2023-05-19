//импорты из других файлов
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";

import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import {
  initialCards,
  popupOpenButtonElement,
  popupOpenButtonAddElement,
  selectorTemplate,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  listsForTemplateElementSelector,
  formsValidator,
  configProfileInfo,
  validationObject,
} from "../scripts/utils/cards.js";
import "../pages/index.css";

// Ищем необходимые элементы на странице по классам (можно по другим идентификаторам)
//const popupAllElementsOnPages = document.querySelectorAll(".popup");
//const popupForm = document.querySelector(".popup__form");
//const popupEditProfile = document.querySelector(".popup_section_edit-profile");
//const popupCloseButtonElements = document.querySelectorAll(".popup__close");
/* const popupFormEditProfile = popupEditProfile.querySelector('.popup__form_edit_profile'); */ //альтернативный вариант нахождения формы
//const popupFormEditProfile = document.forms["popupEditProfileForm"];
//const nameInputElement = popupFormEditProfile.querySelector(".popup__input_edit_name");
//const jobInputElement = popupFormEditProfile.querySelector(".popup__input_edit_job");
//const profileNameTitle = document.querySelector(".profile__title");
//const profileJobSubtitle = document.querySelector(".profile__subtitle");
//Шаблон картинка + напдись + лайк + корзина
//const userTemplate = document.querySelector(".template").content;
//const userImage = userTemplate.querySelector(".element__mask-group");
//const templateList = document.querySelector(".elements__list-template");
//Попап откпытия картинки с увеличением на экран
//const popupIncreaseImage = document.querySelector(".popup_section_increase-image");
//const popupImageElement = document.querySelector(".popup__image");
//const popupFigcaptionText = document.querySelector(".popup__figcaption-text");
//Попап создания новой карчтоки
//const popupCreateCard = document.querySelector(".popup_section_create-card");
/* const popupFormCreateCard = popupCreateCard.querySelector('.popup__form_create_card'); */ //альтернативный вариант нахождения формы
//const popupFormCreateCard = document.forms["popupCreateCardForm"];
//const placeNameInputCreateCard = popupFormCreateCard.querySelector(".popup__input_edit_place-name");
//const imageUrlInputCreateCard = popupFormCreateCard.querySelector(".popup__input_edit_image-url");

const userInfo = new UserInfo(configProfileInfo);
//console.log(userInfo)
const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element, selectorTemplate, popupImage.open);
      return card.createCard();
    },
  },
  listsForTemplateElementSelector
);

section.renderItems();

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputsValue());
  popupProfile.close();
});
popupProfile.setEventListeners();
//console.log(popupProfile)

const popupAddCard = new PopupWithForm(popupAddCardSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCard.getInputsValue()));
  popupAddCard.close();
});
//console.log(popupAddCard)
popupAddCard.setEventListeners();

// 777777777777777
Array.from(document.forms).forEach((item) => {
  const form = new FormValidator(validationObject, item);
  const name = item.name;
  formsValidator[name] = form;
  form.enableValidation();
});

//слушатель для открытия попап ред-я профиля с передачей значений со страницы в попап
/* popupOpenButtonElement.addEventListener("click", function () { */
popupOpenButtonElement.addEventListener("click", () => {
  formsValidator.popupEditProfileForm.resetErrorBeforeOpenForm();
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
});

//слушатель для открываения попап создания новой карточки №2
/* popupOpenButtonAddElement.addEventListener("click", function () { */
popupOpenButtonAddElement.addEventListener("click", () => {
  /* popupFormCreateCard.reset(); */
  formsValidator.popupCreateCardForm.resetErrorBeforeOpenForm();
  /* openPopup(popupCreateCard); */
  popupAddCard.open();
});

/* //функция? которая добавляет карточки в нужный контейнер
function addCard(container, card) {
  container.prepend(card);
} */

/* //сделаем копию класса для формы редактирования профиля
const popupFormEditProfileValidator = new FormValidator(validationObject, popupFormEditProfile);
popupFormEditProfileValidator.enableValidation();

//сделаем копию класса для формы создания карчтоки 
const popupFormCreateCardValidator = new FormValidator(validationObject, popupFormCreateCard);
popupFormCreateCardValidator.enableValidation(); */

/* //создание при загрузке страницы начальных карточек
initialCards.popupFormEditProfileValidator.forEach((element) => {
  addCard(templateList, createNewCard(element));
}); */

/* //Функция которая передает введенные значения в попапе на страницу при ее закрытии
const handleFormEditProfileSubmit = function (evt) {
  evt.preventDefault();
  // Тут мы прописали, чтобы значение текста, которое мы напишем в открывшемся попапе, где имя "Кусто", передавалось при закрытии попапа на страницу
  profileNameTitle.textContent = nameInputElement.value;
  // Тут мы прописали, чтобы значение текста, которое мы напишем в открывшемся попапе, где должность "Исследоватеот океана", передавалось при закрытии попапа на стараницу
  profileJobSubtitle.textContent = jobInputElement.value;
  closePopup(popupEditProfile);
};

popupFormEditProfile.addEventListener("submit", handleFormEditProfileSubmit); */

//создаем клон массива template в новую переменную
/* function createNewCard (element) {
  const card = new Card(element, selectorTemplate, popupImage.open);
  const cardElement = card.createCard();
  return cardElement;
}; */

/* //функция создание новой карточки из попап
popupFormCreateCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const placeNameImageURLElement = {
    name: placeNameInputCreateCard.value,
    link: imageUrlInputCreateCard.value,
  };
  
  addCard(templateList, createNewCard(placeNameImageURLElement));
  closePopup(popupCreateCard);
}); */

/* //функция Удаление файла через корзину
function handleDelete(event) {
  const card = event.target.closest(".template__list");
  // console.log(card)
  card.remove();
} */
/* //функция включателя/выключателя лайк
function toggleLike(event) {
  event.target.classList.toggle("element__like_active");
} */

/* //обшая функция для слушателей на странице (лайк, корзина)
function setEventListeners(cardElement) {
  cardElement
    .querySelector(".element__trash")
    .addEventListener("click", handleDelete); //слушатель на корзину
  cardElement
    .querySelector(".element__like")
    .addEventListener("click", toggleLike); //слушатель на лайк
} */
