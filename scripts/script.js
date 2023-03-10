//большая просьба ошибки по js расписывать максимально подробно, плаваю -_-

const popupElement = document.querySelector('.popup');
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnClosePopup = popupElement.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const btnSaveChanges = popupElement.querySelector('.popup__save-button');

btnEditProfile.addEventListener('click', () => {
    popupElement.classList.add('popup_opened');
});

const closePopup = () => {
    popupElement.classList.remove('popup_opened');
}

btnClosePopup.addEventListener('click', closePopup);

const changeInfo = () => {
    let popupInputName = popupElement.querySelector('.popup__input_change_name');
    let popupInputAbout = popupElement.querySelector('.popup__input_change_about');
    if (popupInputName.value.length === 0 || popupInputAbout.value.length === 0) {
        closePopup();
    } else {
        profileName.innerText = popupInputName.value;
        profileAbout.innerText = popupInputAbout.value;
        popupInputName.value = '';
        popupInputAbout.value = '';
        closePopup();
    }
}

btnSaveChanges.addEventListener('click', changeInfo);