const initialCards = [
    {
      heading: 'Архыз',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      heading: 'Челябинская область',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      heading: 'Иваново',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      heading: 'Камчатка',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      heading: 'Холмогорский район',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      heading: 'Байкал',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


const popupEditProfileSelector = '.popup_edit-profile'; //попап редакт.профиля
const formEditProfile = document.forms['edit-form']; //форма редакт.профиля 
const btnEditProfile = document.querySelector('.profile__edit-button'); //кнопка открытия попапа редакт.профиля 
const profileNameSelector = '.profile__name'; //имя пользователя в профиле
const profileAboutSelector = '.profile__about'; //род занятий пользователя в профиле
const profileAvatarSelector = '.profile__avatar';
const popupEditAvatarSelector = '.popup_edit-avatar'; //попап редакт.аватара
const formEditAvatar = document.forms['edit-avatar']; //форма редакт.аватара
const btnEditAvatar = document.querySelector('.profile__avatar-button'); //кнопка открытия попапа редакт.аватара

const galleryItemTemplate = '#gallery__item'; //шаблон единицы галереи
const gallerySelector = '.gallery'; //галерея
const popupAddGallerySelector = '.popup_add-gallery-item'; //попап добавл.картинок
const formAddGalleryItem = document.forms['add-form']; //форма добавл.картинки 
const btnAddGallery = document.querySelector('.profile__gallery-add-button'); //кнопка открытия попапа добавл.картинки
const popupDeleteItemSelector = '.popup_delete-gallery-item'; //попап удаления карточки

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
  popupEditProfileSelector,
  formEditProfile,
  btnEditProfile,
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector,
  popupEditAvatarSelector,
  formEditAvatar,
  btnEditAvatar,
  galleryItemTemplate,
  gallerySelector,
  popupAddGallerySelector,
  formAddGalleryItem,
  btnAddGallery,
  popupDeleteItemSelector,
  popupImageSelector,
  validationConfig
}