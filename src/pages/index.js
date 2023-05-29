import "./index.css";
import Card from "../scripts/components/Card.js"
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupDeleteItem from "../scripts/components/PopupDeleteItem.js";
import Api from "../scripts/components/Api.js";
import {
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
} from "../scripts/utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'f35f3961-8176-428d-a013-e1f5dcaddc87',
    'Content-Type': 'application/json'
  }
})

const profile = new UserInfo({ profileNameSelector, profileAboutSelector,profileAvatarSelector });

//попап с большой картинкой
const popupBigPicture = new PopupWithImage(popupImageSelector);
popupBigPicture.setEventListeners();

//попап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, items => {
  api.setUserInfo(items)
    .then(res => {
      profile.setUserInfo({ user: res.name, about: res.about, avatar: res.avatar });
    })
    .catch((err) => {
      console.log(err);
    });
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
const section = new Section( item => {
    section.addItemToEnd(createCardElement(item));
}, gallerySelector);

//попап добавления картинок
const popupAddGallery = new PopupWithForm(popupAddGallerySelector, item => {
  Promise.all([api.getUserInfo(), api.addCard(item)])
  .then(([users, items]) => {
    items.myID = users._id;
    section.addItemToBegin(createCardElement(item))
  })
  .catch((err) => {
    console.log(err);
  })
}); 
popupAddGallery.setEventListeners();

//событие по кнопке открытия попапа добавл.картинки 
btnAddGallery.addEventListener('click', () => { 
  formAddGalleryItemValidate.resetValidation(); 
  popupAddGallery.open();
}) 

//попап редактирования аватара
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, users => {
  api.setAvatar(users)
  .then(res => {
    profile.setUserInfo({ user: res.name, about: res.about, avatar: res.avatar })
  })   
  .catch((err) => {
    console.log(err);
  });
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

//проверяем форму редакт.аватара валидатором
const formEditAvatarValidate = new FormValidator(validationConfig, formEditAvatar);
formEditAvatarValidate.enableValidation();

Promise.all([api.getUserInfo(), api.getInitialCards()]) //проверить время загрузки если последовательные then
.then(([users, items]) => {
  items.forEach(item => item.myID = users._id);
  profile.setUserInfo({ user: users.name, about: users.about, avatar: users.avatar });
  section.renderItems(items);
})
.catch((err) => {
  console.log(err);
});
