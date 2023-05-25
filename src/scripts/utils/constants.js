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

const galleryItemTemplate = '#gallery__item'; //селектор шаблона единицы галереи
const gallerySelector = '.gallery'; //селектор галереи
const popupEditProfileSelector = '.popup_edit-profile'; //попап редакт.профиля
const formEditProfile = document.forms['edit-form']; //форма редакт.профиля 
const btnEditProfile = document.querySelector('.profile__edit-button'); //кнопка открытия попапа редакт.профиля 
const profileNameSelector = '.profile__name'; //селектор имени пользователя в профиле
const profileAboutSelector = '.profile__about'; //селектор рода занятий пользователя в профиле

const popupAddGallerySelector = '.popup_add-gallery-item'; //попап добавл.картинок
const formAddGalleryItem = document.forms['add-form']; //форма добавл.картинки 
const btnAddGallery = document.querySelector('.profile__gallery-add-button'); //кнопка открытия попапа добавл.картинки
const inputGalleryItemHeading = document.querySelector('.form__input_add-heading'); //поле ввода названия картинки 
const inputGalleryItemUrl = document.querySelector('.form__input_add-url'); //поле ввода адреса картинки  

const popupImageSelector = '.popup_big-picture'; //попап большой картинки

//объект для валидации 
const validationConfig = { 
  inputSelector: '.form__input',//поле ввода 
  submitButtonSelector: '.form__save-button',//кнопка сохранить 
  inactiveButtonClass: 'form__save-button_disabled',//модиф кнопки 
  inputErrorClass: 'form__input_error',//модиф поля ввода 
  errorSpanTemplate: '-message-error'//шаблон спана 
}; 

export {
  initialCards,
  galleryItemTemplate,
  gallerySelector,
  popupEditProfileSelector,
  formEditProfile,
  btnEditProfile,
  profileNameSelector,
  profileAboutSelector,
  popupAddGallerySelector,
  formAddGalleryItem,
  btnAddGallery,
  inputGalleryItemHeading,
  inputGalleryItemUrl,
  popupImageSelector,
  validationConfig
}