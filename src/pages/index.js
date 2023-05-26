import "./index.css";
import Card from "../scripts/components/Card.js"
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import {
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
  popupImageSelector,
  validationConfig
} from "../scripts/utils/constants.js";

const profile = new UserInfo({ profileNameSelector, profileAboutSelector });

//попап с большой картинкой
const popupBigPicture = new PopupWithImage(popupImageSelector);
popupBigPicture.setEventListeners();

//попап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, () => {
  profile.setUserInfo(popupEditProfile._getInputValues());
})
popupEditProfile.setEventListeners();

//событие по кнопке редакт.профиля 
btnEditProfile.addEventListener('click', () => {  
  formEditProfileValidate.resetValidation(); 
  popupEditProfile.setInputValues(profile.getUserInfo());
  popupEditProfile.open();
}) 

//отрисовка галереи
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = new Card(item, galleryItemTemplate, popupBigPicture.open).createGalleryItem(); 
    return cardElement;
  }
}, gallerySelector);
section.renderItems(); 

//попап добавления картинок
const popupAddGallery = new PopupWithForm(popupAddGallerySelector, () => {
  section.addItemToBegin(section._renderer(popupAddGallery._getInputValues()));
}); 
popupAddGallery.setEventListeners();

//событие по кнопке открытия попапа добавл.картинки 
btnAddGallery.addEventListener('click', () => { 
  formAddGalleryItemValidate.resetValidation(); 
  popupAddGallery.open();
}) 

//проверяем форму редакт.профиля валидатором 
const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile); 
formEditProfileValidate.enableValidation(); 

//проверяем форму добавл.картинки валидатором 
const formAddGalleryItemValidate = new FormValidator(validationConfig, formAddGalleryItem); 
formAddGalleryItemValidate.enableValidation();