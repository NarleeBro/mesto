const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupOpenButtonAddElement = document.querySelector(
  ".profile__add-button"
);

const selectorTemplate = "#cardElement";
const popupProfileSelector = ".popup_section_edit-profile";

const popupAddCardSelector = ".popup_section_create-card";

const popupImageSelector = ".popup_section_increase-image";
const listsForTemplateElementSelector = ".elements__list-template";

const popupAvatarSelector = ".popup_section_edit-avatar";
const popupDeleteSelector = ".popup_section_delete";

const formsValidator = {};

const configProfileInfo = {
  profileNameSelector: ".profile__title",

  profileJobSelector: ".profile__subtitle",
  profileAvatar: ".profile__avatar-pic",
};

const validationObject = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save-profile",

  currentInputErrorContainer: "input.id",
  disableButtonClass: "popup__button-invalid",
  textErrorActive: "error",
};

export {
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
};
