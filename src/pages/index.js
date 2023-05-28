import "./index.css";
import Card from "../scripts/components/Card.js"
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupDeleteItem from "../scripts/components/PopupDeleteItem.js";
import {
  initialCards,
  popupEditProfileSelector,
  formEditProfile,
  btnEditProfile,
  profileNameSelector,
  profileAboutSelector,
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
} from "../scripts/utils/constants.js";



const profile = new UserInfo({ profileNameSelector, profileAboutSelector });

//попап с большой картинкой
const popupBigPicture = new PopupWithImage(popupImageSelector);
popupBigPicture.setEventListeners();

//попап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, item => {
  profile.setUserInfo(item);
})
popupEditProfile.setEventListeners();

//событие по кнопке редакт.профиля 
btnEditProfile.addEventListener('click', () => {  
  formEditProfileValidate.resetValidation(); 
  popupEditProfile.setInputValues(profile.getUserInfo());
  popupEditProfile.open();
}) 

//удаление карточки
const deleteGalleryItem = new PopupDeleteItem(popupDeleteItemSelector, (item) => {
  item.removeItem();
})
deleteGalleryItem.setEventListeners();

//создание карточки
const createCardElement = item => {
  const cardElement = new Card(item, galleryItemTemplate, popupBigPicture.open, deleteGalleryItem.open).createGalleryItem(); 
  return cardElement;
}

//отрисовка галереи
const section = new Section({
  items: initialCards,
  renderer: item => {
    section.addItemToEnd(createCardElement(item));
  }
}, gallerySelector);
section.renderItems(); 

//попап добавления картинок
const popupAddGallery = new PopupWithForm(popupAddGallerySelector, item => {
  section.addItemToBegin(createCardElement(item));
}); 
popupAddGallery.setEventListeners();

//событие по кнопке открытия попапа добавл.картинки 
btnAddGallery.addEventListener('click', () => { 
  formAddGalleryItemValidate.resetValidation(); 
  popupAddGallery.open();
}) 

//попап редактирования аватара
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, item => {
  document.querySelector('.profile__avatar').src = item.avatar;
})
popupEditAvatar.setEventListeners();

//событие по кнопке открытия попапа редакт.аватара
btnEditAvatar.addEventListener('click', () => {
  formEditAvatarValidate.resetValidation();
  popupEditAvatar.open();
})


//проверяем форму редакт.профиля валидатором 
const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile); 
formEditProfileValidate.enableValidation(); 

//проверяем форму добавл.картинки валидатором 
const formAddGalleryItemValidate = new FormValidator(validationConfig, formAddGalleryItem); 
formAddGalleryItemValidate.enableValidation();


const formEditAvatarValidate = new FormValidator(validationConfig, formEditAvatar);
formEditAvatarValidate.enableValidation();