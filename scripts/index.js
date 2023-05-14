import initialCards from "./cards.js";
//import Card from "./Card.js";

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
const galleryItemTemplate = '#gallery__item'; //темплейт единицы галереи
const popupBigPicture = document.querySelector('.popup_big-picture'); //попап увелич.картинки
const bigPictureHeading = popupBigPicture.querySelector('.popup__img-heading'); //название картинки
const bigPictureImg = popupBigPicture.querySelector('.popup__img'); //масштабированная картинка

const btnSubmitProfile = formEditProfile.querySelector('.form__save-button'); //кнопка сабмита в попапе редакт.профиля
const btnSubmitGallery = formAddGalleryItem.querySelector('.form__save-button'); //кнопка сабмита в попапе добавл.картинки

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
  resetErrors(formEditProfile);
  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
  disableButton(btnSubmitProfile, validationConfig.inactiveButtonClass);
});

//закрытие попапов
document.querySelectorAll('.popup__close-button').forEach(button => {
  const popupBtns = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupBtns));
});

//событие по кнопке "сохранить"
formEditProfile.addEventListener('submit', changeProfile);

class Card {
  constructor(item, galleryItemTemplate) {
    this._item = item;
    this._link = item.link;
    this._name = item.name;
    this._galleryItemTemplate = galleryItemTemplate;
  }

  _getClone = () => {
    const galleryItem = document.querySelector(this._galleryItemTemplate).content.querySelector('.gallery__item').cloneNode(true);
    return galleryItem;
  }

  _setEventListeners = () => {
    this._galleryLike.addEventListener('click', e => {
      e.target.classList.toggle('gallery__like_active');
  });

    this._galleryTrash.addEventListener('click', e => {
      e.target.closest('.gallery__item').remove();
    });

    this._galleryImage.addEventListener('click', () => {
      openPopup(popupBigPicture);
      bigPictureHeading.textContent = this._name;
      bigPictureImg.src = this._link;
      bigPictureImg.alt = `Фото ${this._name}`;
  })
}

  createGalleryItem = () => {
    this._galleryItem = this._getClone();
    this._galleryImage = this._galleryItem.querySelector('.gallery__img');
    this._galleryLike = this._galleryItem.querySelector('.gallery__like');
    this._galleryTrash = this._galleryItem.querySelector('.gallery__trash');
    this._galleryHeading = this._galleryItem.querySelector('.gallery__heading');
    this._galleryHeading.textContent = this._name;
    this._galleryImage.src = this._link;
    this._galleryImage.alt = `Фото ${this._name}`;
    this._setEventListeners();
    return this._galleryItem;
  }
}

//добавляем карточку в нужный контейнер
const addItem = (container, item) => {
  container.append(item);
}

//добавление массива с картинками в html
initialCards.forEach(item => {
  const card = new Card(item, galleryItemTemplate);
  addItem(gallery, card.createGalleryItem());
});

//функция добавления картинки через попап
const addNewGalleryItem = e => {
  e.preventDefault();
  gallery.prepend(createGalleryItem({name: inputGalleryItemName.value, link: inputGalleryItemUrl.value}));
  closePopup(popupAddGallery);
  formAddGalleryItem.reset();
};

//событие по кнопке открытия попапа добавл.картинки
btnAddGallery.addEventListener('click', () => {
  formAddGalleryItem.reset();
  resetErrors(formAddGalleryItem);
  openPopup(popupAddGallery);
  disableButton(btnSubmitGallery, validationConfig.inactiveButtonClass);
})

//событие по кнопке "добавить"
formAddGalleryItem.addEventListener('submit', addNewGalleryItem);

//функция сброса ошибок при повторном открытии попапа
const resetErrors = (form) => {
  form.querySelectorAll('.form__input').forEach(input => {
    const currentErrorContainer = document.querySelector(`.${input.name}-message-error`);
    hideError(input, currentErrorContainer, validationConfig.inputErrorClass);
  })
}
