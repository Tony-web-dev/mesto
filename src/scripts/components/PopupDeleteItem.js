import Popup from "./Popup.js";

export default class PopupDeleteItem extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
    }

    //открытие попапа
    open = (item, id) => {
        super.open();
        this._item = item;
        this._id = id;
    }

    //слушатели родителя + кнопки сабмита
    setEventListeners = () => {
        super.setEventListeners();
        this._form.addEventListener('submit', e => {
            e.preventDefault();
            this._submitCallback(this._id);
            this.close();
        });
    }
}

