//импорты из других файлов
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";

import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupDeleteCard from "../scripts/components/PopupDeleteCard.js";
import Api from "../scripts/components/Api.js";
import {
  popupOpenButtonElement,
  popupOpenButtonAddElement,
  selectorTemplate,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  listsForTemplateElementSelector,
  popupAvatarSelector,
  popupDeleteSelector,
  formsValidator,
  configProfileInfo,
  validationObject,
} from "../scripts/utils/cards.js";
import "../pages/index.css";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "e831aae7-60b4-4f1e-b303-432cbd525640",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(configProfileInfo);

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const deletePopupCard = new PopupDeleteCard(
  popupDeleteSelector,
  ({ element, cardId }) => {
    api
      .deleteCard(cardId)
      .then(() => {
        element.removeCard();
        deletePopupCard.close();
      })
      .catch((error) =>
        console.error(`ERROR ТУТ ошибка deletePopupCard ${error}`)
      )
      .finally(() => deletePopupCard.setupDefaultText());
  }
);

deletePopupCard.setEventListeners();

function createNewCard(element) {
  const card = new Card(
    element,
    selectorTemplate,
    popupImage.open,
    deletePopupCard.open,
    (likeElement, cardId) => {
      if (likeElement.classList.contains("element__like_active")) {
        api
          .deleteLike(cardId)
          .then((res) => {
            card.toggleLike(res.likes);
          })
          .catch((error) =>
            console.error(`ERROR ТУТ ошибка createNewCard deleteLike ${error}`)
          );
      } else {
        api
          .addLike(cardId)
          .then((res) => {
            card.toggleLike(res.likes);
          })
          .catch((error) =>
            console.error(`ERROR ТУТ ошибка createNewCard addLike ${error}`)
          );
      }
    }
  );
  return card.createCard();
}

const section = new Section((element) => {
  section.addItemAppend(createNewCard(element));
}, listsForTemplateElementSelector);

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api
    .setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo({
        avatar: res.avatar,
        yourname: res.name,
        yourjob: res.about,
      });
      popupProfile.close();
    })
    .catch((error) => console.error(`ERROR ТУТ ошибка popupProfile ${error}`))
    .finally(() => popupProfile.setupDefaultText());
});
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddCardSelector, (item) => {
  api
    .addCard(item)
    .then((dataCArd) => {
      dataCArd.myid = userInfo.getId();
      section.addItem(createNewCard(dataCArd));
      popupAddCard.close();
    })
    .catch((error) => console.error(`ERROR ТУТ ошибка popupAddCard ${error}`))
    .finally(() => popupAddCard.setupDefaultText());
});

popupAddCard.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api
    .setNewAvatar(data)
    .then((res) => {
      userInfo.setUserInfo({
        yourname: res.name,
        yourjob: res.about,
        avatar: res.avatar,
      });
      popupEditAvatar.close();
    })
    .catch((error) =>
      console.error(`ERROR ТУТ ошибка popupEditAvatar ${error}`)
    )
    .finally(() => popupEditAvatar.setupDefaultText());
});

popupEditAvatar.setEventListeners();

Array.from(document.forms).forEach((item) => {
  const form = new FormValidator(validationObject, item);
  const name = item.name;
  formsValidator[name] = form;
  form.enableValidation();
});

//слушатель для открытия попап ред-я профиля с передачей значений со страницы в попап
popupOpenButtonElement.addEventListener("click", () => {
  formsValidator.popupEditProfileForm.resetErrorBeforeOpenForm();
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
});

//слушатель для открываения попап создания новой карточки №2
popupOpenButtonAddElement.addEventListener("click", () => {
  formsValidator.popupCreateCardForm.resetErrorBeforeOpenForm();
  popupAddCard.open();
});

document
  .querySelector(".profile__avatar-overlaybutton")
  .addEventListener("click", () => {
    formsValidator.popupEditAvatarForm.resetErrorBeforeOpenForm();
    popupEditAvatar.open();
  });

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCArd]) => {
    dataCArd.forEach((element) => (element.myid = dataUser._id));
    userInfo.setUserInfo({
      yourname: dataUser.name,
      yourjob: dataUser.about,
      avatar: dataUser.avatar,
    });

    userInfo.setId(dataUser._id);
    section.renderItems(dataCArd);
  })
  .catch((error) => console.error(`ERROR ТУТ ошибка PROMISE.ALL ${error}`));
