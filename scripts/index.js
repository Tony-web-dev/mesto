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
const galleryItemTemplate = document.querySelector('#gallery__item').content; //темплейт единицы галереи
const popupBigPicture = document.querySelector('.popup_big-picture'); //попап увелич.картинки

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
  const popupOpened = document.querySelector('.popup_opened');
  if (e.key === 'Escape') {
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
});

//закрытие попапов
document.querySelectorAll('.popup__close-button').forEach(button => {
  const popupBtns = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupBtns));
});

//событие по кнопке "сохранить"
formEditProfile.addEventListener('submit', changeProfile);

//функция создания новой единицы галереи
const createGalleryItem = item => {
  const galleryItem = galleryItemTemplate.querySelector('.gallery__item').cloneNode(true);
  galleryItem.querySelector('.gallery__heading').textContent = item.name;
  galleryItem.querySelector('.gallery__img').src = item.link;
  galleryItem.querySelector('.gallery__img').alt = `Фото ${item.name}`;

  //вешаем обработчик лайка на каждый item
  galleryItem.querySelector('.gallery__like').addEventListener('click', e => {
      e.target.classList.toggle('gallery__like_active');
  });

  //вешаем обработчик корзины на каждый item
  galleryItem.querySelector('.gallery__trash').addEventListener('click', e => {
    e.target.closest('.gallery__item').remove();
  });

  //вешаем обработчик клика по картинке и вызов попапа big-picture
  galleryItem.querySelector('.gallery__img').addEventListener('click', () => {
    openPopup(popupBigPicture);
    popupBigPicture.querySelector('.popup__img-heading').textContent = item.name;
    popupBigPicture.querySelector('.popup__img').src = item.link;
    popupBigPicture.querySelector('.popup__img').alt = `Фото ${item.name}`;
  });
  return galleryItem;
 }

//добавление массива с картинками в html
initialCards.forEach(item => gallery.append(createGalleryItem(item)));

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