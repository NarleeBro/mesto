// Ищем необходимые элементы на странице по классам (можно по другим ижентификаторам)
const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_section_edit-profile')
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

/* const popupFormElement = document.querySelector('.popup__form'); */ //форма родитель, в ней ищем классы с модификаторами
const popupFormEditProfile = popupEditProfile.querySelector('.popup__form_edit-profile');
const popupOpenButtonAddElement = document.querySelector('.profile__add-button');
const nameInputElement = popupFormEditProfile.querySelector('.popup__input_edit_name');
const jobInputElement = popupFormEditProfile.querySelector('.popup__input_edit_job');

const profileNameTitle = document.querySelector('.profile__title');
const profileJobSubtitle = document.querySelector('.profile__subtitle');


// Функция которая добавляет класс к элементу, который мы нашли ранее через querySelector
const openPopup = function () {
  popupEditProfile.classList.add('popup_opened');
    // Тут мы прописали, чтобы значение текста, которое написано на странице "Профиль", где имя "Кусто", передавалось в открывающийся попап
    nameInputElement.value = profileNameTitle.textContent;
    // Тут мы прописали, чтобы значение текста, которое написано на странице "Профиль", где должность "Исследоватеот океана", передавалось в открывающийся попап
    jobInputElement.value = profileJobSubtitle.textContent;
}

// Функция которая удаляет класс у элемента, который мы нашли ранее через querySelector. Далее мы эти функции будем использовать для открытия и закрытия попап
const closePopup = function () {
  popupEditProfile.classList.remove('popup_opened');
}

// Функция которая передает введенные значения в попапе на страницу при ее закрытии 
const handleFormSubmit = function (evt) {
    evt.preventDefault();
    // Тут мы прописали, чтобы значение текста, которое мы напишем в открывшемся попапе, где имя "Кусто", передавалось при закрытии попапа на страницу
    profileNameTitle.textContent = nameInputElement.value;
    // Тут мы прописали, чтобы значение текста, которое мы напишем в открывшемся попапе, где должность "Исследоватеот океана", передавалось при закрытии попапа на стараницу    
    profileJobSubtitle.textContent = jobInputElement.value;
    closePopup ();
}

// Функция, которая дает возможность закрыть попап в любом месте экрана, кроме самой формы попап */
/* const closePopupByClickOnOverlay = function (event) {
console.log(event.target, event.currentTarget);
if (event.target !== event.currentTarget) {
    return;
}
closePopup();
}; */ 

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupFormEditProfile.addEventListener('submit', handleFormSubmit);
// Слушатель, который дает возможность закрыть попап в любом месте экрана, кроме самой формы попап (применяется с функцией закрытия попап)*/
/* popupElement.addEventListener('click', closePopupByClickOnOverlay); */

/* ---------------------------------------------------------------------------------------------------- */
// Мыссив для клонирования фотографий в template
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

// Ищем необходимые элементы на странице по классам (можно по другим ижентификаторам)
//Шаблон картинка + напдись + лайк + корзина
const userCardsContainer = document.querySelector('.elements');
const userTemplate = document.querySelector('.template').content;
const userCard = userTemplate.querySelector('.element');
const userImage = userCard.querySelector('.element__mask-group');
const userImageTitle = userTemplate.querySelector('.element__title');
const userImageButtonLike = userTemplate.querySelector('.element__like');
const userImageButtonTrash = userTemplate.querySelector('.element__trash');
const templateList = document.querySelector('.tempale__list');
//Попап откпытия картинки с увеличением на экран
const popupIncreaseImage = document.querySelector('.popup_section_increase-image');
const popupImageElement = document.querySelector('.popup__image');

//Попап создания новой карчтоки
const popupCreateCard = document.querySelector('.popup_section_create-card');
const popupFormCreateCard = popupCreateCard.querySelector('.popup__form_create-card');
const popupButtonCloseCreateCard = popupCreateCard.querySelector('.popup__close-create-card');

const placeNameInputCreateCard = popupFormCreateCard.querySelector('.popup__input_edit_place-name');
const imageUrlInputCreateCard = popupFormCreateCard.querySelector('.popup__input_edit_image-url');
//создаем клон массива темплейт в новую переменную
const createCard = function (item) {
  const cardElement = userTemplate.cloneNode(true);

  const userImage = cardElement.querySelector('.element__mask-group');
  const userImageTitle = cardElement.querySelector('.element__title');

  userImageTitle.textContent = item.name;
  userImage.src = item.link;
  userImage.alt = item.name;
  
  setEventListeners(cardElement);

  return cardElement;
}

//в карточки попадают данные из массива
initialCards.forEach (function (item) {
  templateList.append(createCard(item));
});

//функция Удаление файла через корзину
function handleDelete (event) {
  const card = event.target.closest('#fortrash');
	card.remove();
}

//функция включателя/выключателя лайк
function likeAktive (event) {
  event.target.classList.toggle('element__like_active');
};

//обшая фунция для слушателей на странице
function setEventListeners (cardElement) {
  //слушатель на корзину 
  cardElement.querySelector('.element__trash').addEventListener('click', handleDelete);
//слушатель на лайк 
  cardElement.querySelector('.element__like').addEventListener('click', likeAktive);
}


// Функция которая добавляет класс к элементу, который мы нашли ранее через querySelector
const openPopupCreateCard = function () {
  popupCreateCard.classList.add('popup_opened');
}

// Функция которая удаляет класс у элемента, который мы нашли ранее через querySelector. Далее мы эти функции будем использовать для открытия и закрытия попап
const closePopupCreateCard = function () {
  popupCreateCard.classList.remove('popup_opened');
}

// слушатель для открытия попап создания новой карчтоки
popupOpenButtonAddElement.addEventListener('click', openPopupCreateCard);
popupButtonCloseCreateCard.addEventListener('click', closePopupCreateCard);

////////////////////Создание новой карточки из попап
const handleNewCard = function (event) {
  event.preventDefault();
  const placeNameImageURLElement = {
    name: placeNameInputCreateCard.value,
    link: imageUrlInputCreateCard.value,
  };
  //placeNameInputCreateCard.value = null/* placeNameInputCreateCard.textContent *//* '' */;
  //imageUrlInputCreateCard.value = null/* placeNameInputCreateCard.textContent *//* '' */;
  event.target.reset();
  const placeInPage = createCard(placeNameImageURLElement);
  templateList.prepend(placeInPage);
  closePopupCreateCard(popupCreateCard); 
 }
//вешаем слушатель на кнопку создать с функией создания новой карточки
popupFormCreateCard.addEventListener('submit', handleNewCard);

//попап открытия карточки с увеличением размера

