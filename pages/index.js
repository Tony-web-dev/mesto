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
  inputGalleryItemHeading,
  inputGalleryItemUrl,
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
  formEditProfileValidate.resetErrors(); 
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
const popupAddGallery = new PopupWithForm(popupAddGallerySelector, ({}) => {
  section.addItemToBegin({name: inputGalleryItemHeading.value, link: inputGalleryItemUrl.value});
});
  
popupAddGallery.setEventListeners();

//событие по кнопке открытия попапа добавл.картинки 
btnAddGallery.addEventListener('click', () => { 
  formAddGalleryItemValidate.resetErrors(); 
  popupAddGallery.open();
}) 

//проверяем форму редакт.профиля валидатором 
const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile); 
formEditProfileValidate.enableValidation(); 

//проверяем форму добавл.картинки валидатором 
const formAddGalleryItemValidate = new FormValidator(validationConfig, formAddGalleryItem); 
formAddGalleryItemValidate.enableValidation();