// Ищем необходимые элементы на странице по классам (можно по другим идентификаторам)
/* const popupElement = document.querySelector('.popup'); */
const popupEditProfile = document.querySelector('.popup_section_edit-profile')
const popupCloseButtonElement = document.querySelector('.popup__close'); ////////убрать????????
const popupCloseButtonElements = document.querySelectorAll('.popup__close');

const popupOpenButtonElement = document.querySelector('.profile__edit-button');
/* const popupFormElement = document.querySelector('.popup__form'); */ //форма родитель, в ней ищем классы с модификаторами
const popupFormEditProfile = popupEditProfile.querySelector('.popup__form_edit_profile');
const popupOpenButtonAddElement = document.querySelector('.profile__add-button');
const nameInputElement = popupFormEditProfile.querySelector('.popup__input_edit_name');
const jobInputElement = popupFormEditProfile.querySelector('.popup__input_edit_job');
const profileNameTitle = document.querySelector('.profile__title');
const profileJobSubtitle = document.querySelector('.profile__subtitle');
//Шаблон картинка + напдись + лайк + корзина
const userCardsContainer = document.querySelector('.elements');
const userTemplate = document.querySelector('.template').content;
const userCard = userTemplate.querySelector('.element');
const userImage = userCard.querySelector('.element__mask-group');
const userImageTitle = userTemplate.querySelector('.element__title');
const userImageButtonLike = userTemplate.querySelector('.element__like');
const userImageButtonTrash = userTemplate.querySelector('.element__trash');
const templateList = document.querySelector('.elements__list-template');
//Попап откпытия картинки с увеличением на экран
const popupIncreaseImage = document.querySelector('.popup_section_increase-image');
const popupImageElement = document.querySelector('.popup__image');
const popupFigcaptionText = document.querySelector('.popup__figcaption-text');
const popupButtonCloseIncreseImage = document.querySelector('.popup__close_increase-image');
//Попап создания новой карчтоки
const popupCreateCard = document.querySelector('.popup_section_create-card');
const popupFormCreateCard = popupCreateCard.querySelector('.popup__form_create_card');
const popupButtonCloseCreateCard = popupCreateCard.querySelector('.popup__close_create-card');
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
    openPopup(popupIncreaseImage) //11111 слушатель для открытия попап увеличения размера картинки
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

////////////////////Создание новой карточки из попап
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
  /* closePopupCreateCard(popupCreateCard);  */
  closePopup(popupCreateCard);
 };
//вешаем слушатель на кнопку создать с функией создания новой карточки
popupFormCreateCard.addEventListener('submit', handleNewCard);

/* //11111 Функция которая открывает попап редакторования профиля №1
const openPopup = function () {
  popupEditProfile.classList.add('popup_opened');
    // Тут мы прописали, чтобы значение текста, которое написано на странице "Профиль", где имя "Кусто", передавалось в открывающийся попап
    nameInputElement.value = profileNameTitle.textContent;
    // Тут мы прописали, чтобы значение текста, которое написано на странице "Профиль", где должность "Исследоватеот океана", передавалось в открывающийся попап
    jobInputElement.value = profileJobSubtitle.textContent;
};

//11111 Функция которая закрывает попап редакторования профиля №1
const closePopup = function () {
  popupEditProfile.classList.remove('popup_opened');
};

//11111 слушатели для открытия/закрытия попап редакторования профиля №1
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

//11111 Функция которая открывает попап создания новой карточки №2
const openPopupCreateCard = function () {
  popupCreateCard.classList.add('popup_opened');
};
//11111 Функция которая закрывает попап создания новой карточки №2
const closePopupCreateCard = function () {
  popupCreateCard.classList.remove('popup_opened');
};
//11111 слушатели для открытия/закрытия попап создания новой карчтоки №2
popupOpenButtonAddElement.addEventListener('click', openPopupCreateCard);
popupButtonCloseCreateCard.addEventListener('click', closePopupCreateCard);

//11111 Функция которая открывает попап карточки с увеличением размера №3
const openPopupLargeImage = function () {
  popupIncreaseImage.classList.add('popup_opened');
};

//11111 Функция которая закрывает попап карточки с увеличением размера №3
const closePopupLargeImage = function () {
  popupIncreaseImage.classList.remove('popup_opened');
};
//11111 слушатель для закрытия попап увеличения размера картинки
popupButtonCloseIncreseImage.addEventListener('click', closePopupLargeImage); */

///////////!!!!!!!

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

//функция открытия попап ред-я профиля с передачей значений со страницы в попап
popupOpenButtonElement.addEventListener('click', function () {
  nameInputElement.value = profileNameTitle.textContent;
  jobInputElement.value = profileJobSubtitle.textContent;
  openPopup(popupEditProfile)
});

//функция которая открывает попап создания новой карточки №2
popupOpenButtonAddElement.addEventListener('click', function () {
    openPopup(popupCreateCard)
});

//функция которая открывает попап карточки с увеличением размера №3
popupImageElement.addEventListener('click', function () {
  openPopup(popupIncreaseImage)
});

//функция которая закрывает попапы
popupCloseButtonElements.forEach(function (element) {
  element.addEventListener('click', function () {
    closePopup(popupEditProfile);
    closePopup(popupCreateCard);
    closePopup(popupIncreaseImage);
  })
});