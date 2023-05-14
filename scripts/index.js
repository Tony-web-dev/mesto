import initialCards from "./cards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popupEditProfile = document.querySelector('.popup_edit-profile'); //попап редакт.профиля
const btnEditProfile = document.querySelector('.profile__edit-button'); //кнопка открытия попапа редакт.профиля
const profileName = document.querySelector('.profile__name'); //имя пользователя
const profileAbout = document.querySelector('.profile__about'); //род занятий пользователя
const inputProfileName = popupEditProfile.querySelector('.form__input_edit-name'); //поле ввода нового имени
const inputProfileAbout = popupEditProfile.querySelector('.form__input_edit-about'); //поле ввода нового рода занятий
const formEditProfile = document.forms['edit-form']; //форма редакт.профиля

const popupAddGallery = document.querySelector('.popup_add-gallery-item'); //попап добавл.картинки
const btnAddGallery = document.querySelector('.profile__gallery-add-button'); //кнопка открытия попапа добавл.картинки
const inputGalleryItemName = popupAddGallery.querySelector('.form__input_add-name'); //поле ввода названия картинки
const inputGalleryItemUrl = popupAddGallery.querySelector('.form__input_add-url'); //поле ввода адреса картинки
const formAddGalleryItem = document.forms['add-form']; //форма добавл.картинки

const gallery = document.querySelector('.gallery'); //галерея
const galleryItemTemplate = '#gallery__item'; //селектор темплейта единицы галереи
const popupBigPicture = document.querySelector('.popup_big-picture'); //попап увелич.картинки
const bigPictureHeading = popupBigPicture.querySelector('.popup__img-heading'); //название картинки
const bigPictureImg = popupBigPicture.querySelector('.popup__img'); //масштабированная картинка

//объект для валидации
const validationConfig = {
  inputSelector: '.form__input',//поле ввода
  submitButtonSelector: '.form__save-button',//кнопка сохранить
  inactiveButtonClass: 'form__save-button_disabled',//модиф кнопки
  inputErrorClass: 'form__input_error',//модиф поля ввода
  errorSpanTemplate: '-message-error',//шаблон спана
};

//функция открытия попапа
const openPopup = element => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
}

//функция закрытия попапа
const closePopup = element => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}

//функция закрытия попапа по escape
const closePopupEscape = e => {
  if (e.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

//функция закрытия попапа кликом вне модалки
const closePopupOverlay = e => {
  if (e.target === e.currentTarget) {
    closePopup(e.currentTarget);
  }
}

//событие по клику вне модалки
document.querySelectorAll('.popup').forEach(element => element.addEventListener('click', closePopupOverlay));

//функция замены данных профиля
const changeProfile = e => {
    e.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileAbout.textContent = inputProfileAbout.value;
    closePopup(popupEditProfile);
}

//событие по кнопке редакт.профиля
btnEditProfile.addEventListener('click', () => {
  formEditProfile.reset();
  formEditProfileValidate.resetErrors();
  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
})

//закрытие попапов
document.querySelectorAll('.popup__close-button').forEach(button => {
  const popupBtns = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupBtns));
})

//событие по кнопке "сохранить"
formEditProfile.addEventListener('submit', changeProfile);

//вызов модального окна большой картинки
const openBigPopup = (item) => {
  bigPictureHeading.textContent = item.name;
  bigPictureImg.src = item.link;
  bigPictureImg.alt = `Фото ${item.name}`;
  openPopup(popupBigPicture);
}

//функция добавления картинки в конец списка
const addItemToEnd = (section, card) => {
  section.append(card);
}

//функция добавления картинки в начало списка
const addItemToBegin = (section, card) => {
  section.prepend(card);
}

//добавление массива с картинками в html
initialCards.forEach(item => {
  addItemToEnd(gallery, new Card(item, galleryItemTemplate, openBigPopup).createGalleryItem());
})

const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidate.enableValidation();

const formAddGalleryItemValidate = new FormValidator(validationConfig, formAddGalleryItem);
formAddGalleryItemValidate.enableValidation();

//функция добавления картинки через попап
const addNewGalleryItem = e => {
  e.preventDefault();
  addItemToBegin(gallery, new Card({name: inputGalleryItemName.value, link: inputGalleryItemUrl.value}, galleryItemTemplate, openBigPopup).createGalleryItem());
  closePopup(popupAddGallery);
  formAddGalleryItem.reset();
}

//событие по кнопке открытия попапа добавл.картинки
btnAddGallery.addEventListener('click', () => {
  formAddGalleryItem.reset();
  formAddGalleryItemValidate.resetErrors();
  openPopup(popupAddGallery);
})

//событие по кнопке "добавить"
formAddGalleryItem.addEventListener('submit', addNewGalleryItem);
