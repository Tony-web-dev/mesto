//большая просьба ошибки по js расписывать максимально подробно, плаваю -_-

const popupElement = document.querySelector('.popup');
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnClosePopup = popupElement.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
let popupInputName = popupElement.querySelector('.popup__input_change_name');
let popupInputAbout = popupElement.querySelector('.popup__input_change_about');
let formEdit = popupElement.querySelector('.popup__form');

const openPopup = () => {
    popupElement.classList.add('popup_opened');
    popupInputName.value = profileName.textContent;
    popupInputAbout.value = profileAbout.textContent;
}

const closePopup = () => {
    popupElement.classList.remove('popup_opened');
}

const changeInfo = (e) => {
    e.preventDefault();
    profileName.textContent = popupInputName.value;
    profileAbout.textContent = popupInputAbout.value;
    closePopup();
}

btnEditProfile.addEventListener('click', openPopup);
btnClosePopup.addEventListener('click', closePopup);
formEdit.addEventListener('submit', changeInfo);
