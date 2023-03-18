// Ищем необходимые элементы на странице по классам (можно по другим ижентификаторам)
const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_section_edit-profile')
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const popupFormElement = document.querySelector('.popup__form'); //эту форму убрать, т.к. есть классы с модификаторами
const popupFormEditProfile = popupEditProfile.querySelector('.popup__form_edit-profile');
const nameInputElement = popupFormElement.querySelector('.popup__input_edit_name');
const jobInputElement = popupFormElement.querySelector('.popup__input_edit_job');

const profileNameTitle = document.querySelector('.profile__title');
const profileJobSubtitle = document.querySelector('.profile__subtitle');


// Функция которая добавляет класс к элементу, который мы нашли ранее через querySelector
const openPopup = function () {
    popupElement.classList.add('popup_opened');
    // Тут мы прописали, чтобы значение текста, которое написано на странице "Профиль", где имя "Кусто", передавалось в открывающийся попап
    nameInputElement.value = profileNameTitle.textContent;
    // Тут мы прописали, чтобы значение текста, которое написано на странице "Профиль", где должность "Исследоватеот океана", передавалось в открывающийся попап
    jobInputElement.value = profileJobSubtitle.textContent;
}

// Функция которая удаляет класс у элемента, который мы нашли ранее через querySelector. Далее мы эти функции будем использовать для открытия и закрытия попап
const closePopup = function () {
    popupElement.classList.remove('popup_opened');
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
popupFormElement.addEventListener('submit', handleFormSubmit);
// Слушатель, который дает возможность закрыть попап в любом месте экрана, кроме самой формы попап (применяется с функцией закрытия попап)*/
/* popupElement.addEventListener('click', closePopupByClickOnOverlay); */

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
  

//Попап откпытия картинки с увеличением на экран
const popupIncreaseImage = document.querySelector('.popup_section_increase-image');
const popupIncreaseImage = document.querySelector('.popup_section_increase-image');
console.log(popupIncreaseImage);


//Попап создания новой карчтоки
const popupCreateCard = document.querySelector('.popup_section_create-card');
const popupFormCreateCard = popupCreateCard.querySelector('.popup__form_create-card');
console.log(popupFormCreateCard);