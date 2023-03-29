const popupEditProfile = document.querySelector('.popup_edit-profile'); //попап редакт.профиля
const btnEditProfile = document.querySelector('.profile__edit-button'); //кнопка открытия попапа редакт.профиля
const profileName = document.querySelector('.profile__name'); //имя пользователя
const profileAbout = document.querySelector('.profile__about'); //род занятий пользователя
const popupInputName = popupEditProfile.querySelector('.popup__input_change_name'); //поле ввода нового имени
const popupInputAbout = popupEditProfile.querySelector('.popup__input_change_about'); //поле ввода нового рода занятий
const formEditProfile = document.forms['popup-edit-form']; //форма редакт.профиля

const popupAddGalleryItem = document.querySelector('.popup_add-gallery-item'); //попап добавл.картинки
const btnAddGalleryItem = document.querySelector('.profile__gallery-add-button'); //кнопка открытия попапа добавл.картинки
const newGalleryItemName = popupAddGalleryItem.querySelector('.popup__input_add_name'); //поле ввода названия картинки
const newGalleryItemUrl = popupAddGalleryItem.querySelector('.popup__input_add-url'); //поле ввода адреса картинки
const formAddGalleryItem = document.forms['popup-add-form']; //форма добавл.картинки

const gallery = document.querySelector('.gallery'); //галерея
const galleryItemTemplate = document.querySelector('#gallery__item').content; //темплейт единицы галереи
const popupBigPicture = document.querySelector('.popup_big-picture'); //попап увелич.картинки

const openPopup = element => element.classList.add('popup_opened'); //функция открытия попапа
const closePopup = element => element.classList.remove('popup_opened'); //функция закрытия попапа

//функция замены данных профиля
const changeInfoProfile = e => {
    e.preventDefault();
    profileName.textContent = popupInputName.value;
    profileAbout.textContent = popupInputAbout.value;
    closePopup(popupEditProfile);
}

//событие по кнопке редакт.профиля
btnEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileAbout.textContent;
});

//закрытие попапов
document.querySelectorAll('.popup__close-button').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});

//событие по кнопке "сохранить"
formEditProfile.addEventListener('submit', changeInfoProfile);

//массив с картинками
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
  gallery.prepend(createGalleryItem({name: newGalleryItemName.value, link: newGalleryItemUrl.value}));
  closePopup(popupAddGalleryItem);
  formAddGalleryItem.reset();
};

//событие по кнопке открытия попапа добавл.картинки
btnAddGalleryItem.addEventListener('click', () => openPopup(popupAddGalleryItem));

//событие по кнопке "добавить"
formAddGalleryItem.addEventListener('submit', addNewGalleryItem);