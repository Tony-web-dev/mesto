import Popup from "./Popup.js";

export default class PopupDeleteItem extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._submitBtn = this._form.querySelector('.form__save-button');
        this._defaultBtnText = this._submitBtn.textContent;
    }

    //открытие попапа
    open = (item, itemID) => {
        super.open();
        this._item = item;
        this._id = itemID;
    }

    //слушатели родителя + кнопки сабмита
    setEventListeners = () => {
        super.setEventListeners();
        this._form.addEventListener('submit', e => {
            e.preventDefault();
            this._submitBtn.textContent = `${this._submitBtn.textContent} ...`;
            this._submitCallback(this._item, this._id);
        });
    }

    //сброс текста кнопки сабмита до дефолтного
    resetDefaultBtnText() {
        this._submitBtn.textContent = this._defaultBtnText;
    }
}

