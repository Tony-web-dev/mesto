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
 
Promise.all([api.getUserInfo(), api.getInitialCards()]) 
.then(([user, items]) => {
  items.forEach(items => {
    items.myID = user._id;
  })
  userProfile.setUserInfo({ person: user.name, about: user.about, avatar: user.avatar, _id: user._id });
  section.renderItems(items);
})
.catch((err) => {
  console.log(err);
});


//загрузка профиля
const userProfile = new UserInfo({ profileNameSelector, profileAboutSelector, profileAvatarSelector });

//попап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, userData => {
  api.setUserInfo(userData)
    .then(res => {
      userProfile.setUserInfo({ person: res.name, about: res.about, avatar: res.avatar, _id: res._id });
      popupEditProfile.close();
    })
    .catch(err => {
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
  popupEditProfile.setInputValues(userProfile.getUserInfo());
  popupEditProfile.open();
}) 

//попап редактирования аватара
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, users => {
  api.setAvatar(users)
  .then(res => {
    userProfile.setUserInfo({ person: res.name, about: res.about, avatar: res.avatar, _id: res._id });
    popupEditAvatar.close();
  })   
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    popupEditAvatar.resetDefaultBtnText();
  })
})
popupEditAvatar.setEventListeners();

//событие по кнопке открытия попапа редакт.аватара
btnEditAvatar.addEventListener('click', () => {
  formEditAvatarValidate.resetValidation();
  popupEditAvatar.open();
})


//создание карточки
const createCardElement = item => {
  const cardElement = new Card(item, galleryItemTemplate, popupBigPicture.open, deleteGalleryItem.open, (like, cardID) => {
    if (like.classList.contains('gallery__like_active')) {
        api.toDislike(cardID)
        .then(res => {
          cardElement.toggleLike(res.likes);
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        api.toLike(cardID)
        .then(res => {
          cardElement.toggleLike(res.likes);
        })
        .catch(err => {
          console.log(err);
        })
      }
  });
  return cardElement.createGalleryItem();
}

//отрисовка галереи
const section = new Section(item => {
    section.addItemToEnd(createCardElement(item));
}, gallerySelector);

//попап добавления картинок
const popupAddGallery = new PopupWithForm(popupAddGallerySelector, item => {
  api.addCard(item)
  .then(dataCard => {
    dataCard.myID = userProfile.setID(); //? не могу придумать как впихнуть это в createCardElement и надо ли туда пихать, если туда приходит полный res с сервера
    section.addItemToBegin(createCardElement(dataCard))
    popupAddGallery.close();
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    popupAddGallery.resetDefaultBtnText()
  })
}); 
popupAddGallery.setEventListeners();

//событие по кнопке открытия попапа добавл.картинки 
btnAddGallery.addEventListener('click', () => { 
  formAddGalleryItemValidate.resetValidation(); 
  popupAddGallery.open();
}) 

//попап с большой картинкой
const popupBigPicture = new PopupWithImage(popupImageSelector);
popupBigPicture.setEventListeners();

//удаление карточки
const deleteGalleryItem = new PopupDeleteItem(popupDeleteItemSelector, (item, itemID) => {
  api.deleteCard(itemID)
  .then(() => {
    item.removeItem()
    deleteGalleryItem.close();
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    deleteGalleryItem.resetDefaultBtnText()
  })
})
deleteGalleryItem.setEventListeners();


//проверяем форму редакт.профиля валидатором 
const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile); 
formEditProfileValidate.enableValidation(); 

//проверяем форму добавл.картинки валидатором 
const formAddGalleryItemValidate = new FormValidator(validationConfig, formAddGalleryItem); 
formAddGalleryItemValidate.enableValidation();

//проверяем форму редакт.аватара валидатором
const formEditAvatarValidate = new FormValidator(validationConfig, formEditAvatar);
formEditAvatarValidate.enableValidation();


