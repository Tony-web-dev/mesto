
const popupElement = document.querySelector('.popup'); //общая переменная попапа
const popupEditProfile = document.querySelector('.popup_edit-profile'); //попап редакт.профиля
const btnEditProfile = document.querySelector('.profile__edit-button'); //кнопка открытия попапа редакт.профиля
const btnClosePopup = document.querySelector('.popup__close-button'); //кнопка закрытия редакт.профиля
const profileName = document.querySelector('.profile__name'); //имя профиля
const profileAbout = document.querySelector('.profile__about'); //род занятий профиля
let popupInputName = popupElement.querySelector('.popup__input_change_name'); //поле ввода нового имени
let popupInputAbout = popupElement.querySelector('.popup__input_change_about'); //поле ввода нового рода занятий
const formEdit = document.forms['popup-edit-form']; //форма для отправки события

//функция открытия попапа
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');   
}

//функция закрытия попала
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
}

//функция замены данных профиля
const changeInfo = (e) => {
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

//событие по кнопке закрытия попапа
btnClosePopup.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

//событие по кнопке "сохранить"
formEdit.addEventListener('submit', changeInfo); 

const popupAddGalleryItem = document.querySelector('.popup_add-gallery-item'); //попап добавл.картинки
const btnAddGalleryItem = document.querySelector('.profile__gallery-add-button'); //кнопка открытия попапа добавл.картинки
const btnCloseGallery = popupAddGalleryItem.querySelector('.popup__close-button'); //кнопка закрытия попапа добавл.картинки
let newItemName = popupAddGalleryItem.querySelector('.popup__input_add_name'); //поле ввода названия картинки
let newItemUrl = popupAddGalleryItem.querySelector('.popup__input_add-url'); //поле ввода адреса картинки
const formAdd = document.forms['popup-add-form']; //форма для вызова события в паопапе добавл.картинки
//массив с картинками
const initialCards = [
  {
    heading: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    heading: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    heading: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    heading: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    heading: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    heading: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const gallery = document.querySelector('.gallery'); //галерея
const galleryItemTemplate = document.querySelector('#gallery__item').content; //темплейт единицы галереи

const item = {heading: '.gallery__heading', link: '.gallery__img'}; //единица массива

//функция создания новой единицы галереи
const createGalleryItem = (item) => {
  const galleryItem = galleryItemTemplate.querySelector('.gallery__item').cloneNode(true);
  galleryItem.querySelector('.gallery__heading').textContent = item.heading;
  galleryItem.querySelector('.gallery__img').src = item.link;
  galleryItem.querySelector('.gallery__like').addEventListener('click', e => {
      e.target.classList.toggle('gallery__like_active');
  }) //кнопка лайка на каждой карточке
  galleryItem.querySelector('.gallery__trash').addEventListener('click', e => {
    const card = e.target.closest('.gallery__item');
    card.remove();
  }) //кнопка корзины на каждой карточке
  return galleryItem; //возвращаем значение новой единицы для дальнейшего использования
 }

//добавление массива с картинками в html
initialCards.forEach(item => {
  gallery.append(createGalleryItem(item));
});

//функция добавления картинки через попап
const addNewGalleryItem = (e) => {
  e.preventDefault();
  gallery.prepend(createGalleryItem({heading: newItemName.value, link: newItemUrl.value}));
  closePopup(popupAddGalleryItem);
}

//событие по кнопке открытия попапа добавл.картинки
btnAddGalleryItem.addEventListener('click', () => {
  openPopup(popupAddGalleryItem);
});

//событие по кнопке закрытия попапа добавл.картинки
btnCloseGallery.addEventListener('click', () => {
  closePopup(popupAddGalleryItem);
});

//событие по кнопке "добавить"
formAdd.addEventListener('submit', addNewGalleryItem); 
