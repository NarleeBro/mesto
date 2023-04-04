// Ищем необходимые элементы на странице по классам (можно по другим идентификаторам)
const popupEditProfile = document.querySelector('.popup_section_edit-profile')
const popupCloseButtonElements = document.querySelectorAll('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupFormEditProfile = popupEditProfile.querySelector('.popup__form_edit_profile');
const popupOpenButtonAddElement = document.querySelector('.profile__add-button');
const nameInputElement = popupFormEditProfile.querySelector('.popup__input_edit_name');
const jobInputElement = popupFormEditProfile.querySelector('.popup__input_edit_job');
const profileNameTitle = document.querySelector('.profile__title');
const profileJobSubtitle = document.querySelector('.profile__subtitle');
//Шаблон картинка + напдись + лайк + корзина
const userTemplate = document.querySelector('.template').content;
const userImage = userTemplate.querySelector('.element__mask-group');
const templateList = document.querySelector('.elements__list-template');
//Попап откпытия картинки с увеличением на экран
const popupIncreaseImage = document.querySelector('.popup_section_increase-image');
const popupImageElement = document.querySelector('.popup__image');
const popupFigcaptionText = document.querySelector('.popup__figcaption-text');
//Попап создания новой карчтоки
const popupCreateCard = document.querySelector('.popup_section_create-card');
const popupFormCreateCard = popupCreateCard.querySelector('.popup__form_create_card');
const placeNameInputCreateCard = popupFormCreateCard.querySelector('.popup__input_edit_place-name');
const imageUrlInputCreateCard = popupFormCreateCard.querySelector('.popup__input_edit_image-url');

//Функция которая передает введенные значения в попапе на страницу при ее закрытии 
const handleFormEditProfileSubmit = function (evt) {
    evt.preventDefault();
    // Тут мы прописали, чтобы значение текста, которое мы напишем в открывшемся попапе, где имя "Кусто", передавалось при закрытии попапа на страницу
    profileNameTitle.textContent = nameInputElement.value;
    // Тут мы прописали, чтобы значение текста, которое мы напишем в открывшемся попапе, где должность "Исследоватеот океана", передавалось при закрытии попапа на стараницу    
    profileJobSubtitle.textContent = jobInputElement.value;
    closePopup (popupEditProfile);
};

popupFormEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

//создаем клон массива темплейт в новую переменную
const createCard = function (item) {
  const cardElement = userTemplate.cloneNode(true);

  const userImage = cardElement.querySelector('.element__mask-group');
  const userImageTitle = cardElement.querySelector('.element__title');

  userImageTitle.textContent = item.name;
  userImage.src = item.link;
  userImage.alt = item.name;
  
  userImage.addEventListener('click', function () {
    popupImageElement.src = item.link;
    popupImageElement.alt = item.name;
    popupFigcaptionText.textContent = item.name;
    openPopup(popupIncreaseImage)
  })

  setEventListeners(cardElement);

  return cardElement;
};

//в карточки попадают данные из массива
initialCards.forEach (function (item) {
  templateList.append(createCard(item));
});

//функция Удаление файла через корзину
function handleDelete (event) {
  const card = event.target.closest('.template__list');
  console.log(card)
	card.remove();
};
//функция включателя/выключателя лайк
function likeAktive (event) {
  event.target.classList.toggle('element__like_active');
};

//обшая фунция для слушателей на странице (лайк, корзина)
function setEventListeners (cardElement) {
  cardElement.querySelector('.element__trash').addEventListener('click', handleDelete); //слушатель на корзину 
  cardElement.querySelector('.element__like').addEventListener('click', likeAktive); //слушатель на лайк 
};

//функция создание новой карточки из попап
const handleNewCard = function (event) {
  event.preventDefault();
  const placeNameImageURLElement = {
    name: placeNameInputCreateCard.value,
    link: imageUrlInputCreateCard.value,
  };
  //placeNameInputCreateCard.value = null/* placeNameInputCreateCard.textContent *//* '' */;/* альтернативные варианты reset */
  //imageUrlInputCreateCard.value = null/* placeNameInputCreateCard.textContent *//* '' */;
  event.target.reset();
  const placeInPage = createCard(placeNameImageURLElement);
  templateList.prepend(placeInPage);
  closePopup(popupCreateCard);
 };
//вешаем слушатель на кнопку создать с функией создания новой карточки
popupFormCreateCard.addEventListener('submit', handleNewCard);

//универсальная функция открытия попап №all
const openPopup = function (popup) {
  /* function openPopup (popup) { */
  popup.classList.add('popup_opened');
}
//универсальная функция закрытия попап №all
const closePopup = function (popup) {
/* function closePopup (popup) { */
  popup.classList.remove('popup_opened');
}

//слушатель для открытия попап ред-я профиля с передачей значений со страницы в попап
popupOpenButtonElement.addEventListener('click', function () {
  nameInputElement.value = profileNameTitle.textContent;
  jobInputElement.value = profileJobSubtitle.textContent;
  openPopup(popupEditProfile)
});

//слушатель для открываения попап создания новой карточки №2
popupOpenButtonAddElement.addEventListener('click', function () {
    openPopup(popupCreateCard)
});

//слушатель, котораый закрывает попапы методом перебора
popupCloseButtonElements.forEach(function (element) {
  //находим все попап через родителя по классу closest('.class')
const popupAll = element.closest('.popup');
  element.addEventListener('click', function () {
    closePopup(popupAll);  
  })
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// Функция, которая дает возможность закрыть попап в любом месте экрана, кроме самой формы попап */
/* const closePopupByClickOnOverlay = function (event) {
console.log(event.target, event.currentTarget);
if (event.target !== event.currentTarget) {
    return;
}
closePopup();
}; */ 

// Слушатель, который дает возможность закрыть попап в любом месте экрана, кроме самой формы попап (применяется с функцией закрытия попап)*/
/* popupEditProfile.addEventListener('click', closePopupByClickOnOverlay); */