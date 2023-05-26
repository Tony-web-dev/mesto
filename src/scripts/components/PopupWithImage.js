import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._bigPictureImg = this._popupElement.querySelector('.popup__img');
        this._bigPictureHeading = this._popupElement.querySelector('.popup__img-heading');
    }

    //дополняем метод open родителя
    open = (item) => {
        this._bigPictureImg.src = item.url;
        this._bigPictureImg.alt = `Фото ${item.heading}`;
        this._bigPictureHeading.textContent = item.heading;
        super.open();
    }
}