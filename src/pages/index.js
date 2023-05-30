import "./index.css";
import Card from "../scripts/components/Card.js"
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupDeleteItem from "../scripts/components/PopupDeleteItem.js";
import { api } from "../scripts/components/Api.js";
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

const profile = new UserInfo({ profileNameSelector, profileAboutSelector, profileAvatarSelector });

//попап с большой картинкой
const popupBigPicture = new PopupWithImage(popupImageSelector);
popupBigPicture.setEventListeners();

//попап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, items => {
  api.setUserInfo(items)
    .then(res => {
      profile.setUserInfo({ user: res.name, about: res.about, avatar: res.avatar });
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.resetDefaultBtnText()
    })
})
popupEditProfile.setEventListeners();


//событие по кнопке редакт.профиля 
btnEditProfile.addEventListener('click', () => {  
  formEditProfileValidate.resetValidation(); 
  popupEditProfile.setInputValues(profile.getUserInfo());
  popupEditProfile.open();
}) 

//удаление карточки
const deleteGalleryItem = new PopupDeleteItem(popupDeleteItemSelector, (item, itemID) => {
  api.deleteCard(itemID)
  .then(() => {
    item.removeItem()
    deleteGalleryItem.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupEditProfile.resetDefaultBtnText()
  })
})
deleteGalleryItem.setEventListeners();

//создание карточки
const createCardElement = item => {
  const cardElement = new Card(
    item, 
    galleryItemTemplate, 
    popupBigPicture.open, 
    deleteGalleryItem.open, 
    (like, itemID) => {
      if (like.classList.contains('gallery__like_active')) {
        api.toDislike(itemID)
        .then(res => {
          cardElement.toggleLike(res.likes);
        })
        .catch((err) => {
          console.log(err);
        })
      } else {
        api.toLike(itemID)
        .then(res => {
          cardElement.toggleLike(res.likes);
        })
        .catch((err) => {
          console.log(err);
        })
      }
  }).createGalleryItem(); 
  return cardElement;
}

//отрисовка галереи
const section = new Section( item => {
    section.addItemToEnd(createCardElement(item));
}, gallerySelector);

//попап добавления картинок
const popupAddGallery = new PopupWithForm(popupAddGallerySelector, item => {
  api.addCard(item)
  .then(items => {
    items.myID = profile.getUserID();
    section.addItemToBegin(createCardElement(items))
    popupAddGallery.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupEditProfile.resetDefaultBtnText()
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
    profile.setUserInfo({ user: res.name, about: res.about, avatar: res.avatar });
    popupEditAvatar.close();
  })   
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupEditProfile.resetDefaultBtnText()
  })
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

Promise.all([api.getUserInfo(), api.getInitialCards()]) 
.then(([users, items]) => {
  items.forEach(item => item.myID = users._id);
  profile.setUserInfo({ user: users.name, about: users.about, avatar: users.avatar });
  profile.setUserID(users._id);
  section.renderItems(items);
})
.catch((err) => {
  console.log(err);
});
