import initialCards from "./scripts/utils/cards.js"; 
import Card from "./scripts/components/Card.js"
import FormValidator from "./scripts/components/FormValidator.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import Section from "./scripts/components/Section.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
 

const popupEditProfileSelector = '.popup_edit-profile'; //попап редакт.профиля 
const popupAddGallerySelector = '.popup_add-gallery-item';

const btnEditProfile = document.querySelector('.profile__edit-button'); //кнопка открытия попапа редакт.профиля 
// const profileName = document.querySelector('.profile__name'); //имя пользователя 
// const profileAbout = document.querySelector('.profile__about'); //род занятий пользователя
// const inputProfileName = popupEditProfile.querySelector('.form__input_edit-name'); //поле ввода нового имени 
// const inputProfileAbout = popupEditProfile.querySelector('.form__input_edit-about'); //поле ввода нового рода занятий 
const formEditProfile = document.forms['edit-form']; //форма редакт.профиля 

// const popupAddGallery = document.querySelector('.popup_add-gallery-item'); //попап добавл.картинки 
const btnAddGallery = document.querySelector('.profile__gallery-add-button'); //кнопка открытия попапа добавл.картинки 
// const inputGalleryItemName = popupAddGallery.querySelector('.form__input_add-name'); //поле ввода названия картинки 
// const inputGalleryItemUrl = popupAddGallery.querySelector('.form__input_add-url'); //поле ввода адреса картинки 
const formAddGalleryItem = document.forms['add-form']; //форма добавл.картинки 

 
const galleryItemTemplate = '#gallery__item'; //селектор темплейта единицы галереи  
const popupImageSelector = '.popup_big-picture';
const gallerySelector = '.gallery'; //галерея

const profileNameSelector = '.profile__name';
const profileAboutSelector = '.profile__about';


//объект для валидации 
const validationConfig = { 
  inputSelector: '.form__input',//поле ввода 
  submitButtonSelector: '.form__save-button',//кнопка сохранить 
  inactiveButtonClass: 'form__save-button_disabled',//модиф кнопки 
  inputErrorClass: 'form__input_error',//модиф поля ввода 
  errorSpanTemplate: '-message-error'//шаблон спана 
}; 

const profile = new UserInfo({ profileNameSelector, profileAboutSelector });

const popupBigPicture = new PopupWithImage(popupImageSelector);
popupBigPicture.setEventListeners();

const popupEditProfile = new PopupWithForm(popupEditProfileSelector, e => {
  e.preventDefault();
  profile.setUserInfo(popupEditProfile.getInputValues());
  popupEditProfile.close();
})
popupEditProfile.setEventListeners();


const popupAddGallery = new PopupWithForm(popupAddGallerySelector, e => {
  e.preventDefault();
  section.addItemToBegin(section.renderer(popupAddGallery.getInputValues()));
  popupAddGallery.close();
})
popupAddGallery.setEventListeners();

//событие по кнопке редакт.профиля 
btnEditProfile.addEventListener('click', () => {  
  formEditProfileValidate.resetErrors(); 
  popupEditProfile.setInputValues(profile.getUserInfo());
  popupEditProfile.open();
}) 


const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = new Card(item, galleryItemTemplate, popupBigPicture.open).createGalleryItem(); 
    return cardElement;
  }
}, gallerySelector)

section.renderItems(); 

//проверяем форму редакт.профиля валидатором 
const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile); 
formEditProfileValidate.enableValidation(); 

//проверяем форму добавл.картинки валидатором 
const formAddGalleryItemValidate = new FormValidator(validationConfig, formAddGalleryItem); 
formAddGalleryItemValidate.enableValidation(); 

//функция добавления картинки через попап 
const addNewGalleryItem = e => { 
  e.preventDefault(); 
  addItemToBegin(gallery, createCard({name: inputGalleryItemName.value, link: inputGalleryItemUrl.value})); 
  // closePopup(popupAddGallery); 
  formAddGalleryItem.reset(); 
} 

//событие по кнопке открытия попапа добавл.картинки 
btnAddGallery.addEventListener('click', () => { 
  formAddGalleryItem.reset(); 
  formAddGalleryItemValidate.resetErrors(); 
  popupAddGallery.open();
}) 

// //событие по кнопке "добавить" 
// formAddGalleryItem.addEventListener('submit', addNewGalleryItem); 