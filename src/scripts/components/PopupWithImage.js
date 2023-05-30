import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._bigPictureImg = this._popupElement.querySelector('.popup__img');
        this._bigPictureHeading = this._popupElement.querySelector('.popup__img-heading');
    }

    //дополняем метод open родителя
    open = (items) => {
        this._bigPictureImg.src = items.link;
        this._bigPictureImg.alt = `Фото ${items.name}`;
        this._bigPictureHeading.textContent = items.name;
        super.open();
    }
}