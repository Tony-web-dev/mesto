//большая просьба ошибки по js расписывать максимально подробно, плаваю -_-

const popupEditProfile = document.querySelector('.popup_edit-profile');
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnClosePopup = popupEditProfile.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
let popupInputName = popupEditProfile.querySelector('.popup__input_change_name');
let popupInputAbout = popupEditProfile.querySelector('.popup__input_change_about');
let formEdit = popupEditProfile.querySelector('.popup__form');

const openPopupEditProfile = () => {
    popupEditProfile.classList.add('popup_opened');
    popupInputName.value = profileName.textContent;
    popupInputAbout.value = profileAbout.textContent;
}

const closePopupEditProfile = () => {
    popupEditProfile.classList.remove('popup_opened');
}

const changeInfo = (e) => {
    e.preventDefault();
    profileName.textContent = popupInputName.value;
    profileAbout.textContent = popupInputAbout.value;
    closePopupEditProfile();
}

btnEditProfile.addEventListener('click', openPopupEditProfile);
btnClosePopup.addEventListener('click', closePopupEditProfile);
formEdit.addEventListener('submit', changeInfo);
