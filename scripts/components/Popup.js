export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    //открытие попапа
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    //закрытие попапа
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    //закрытие по escape
    _handleEscClose = e => {
        if (e.key === 'Escape') {
            this.close();
        }
    }

    //закрытие по клику вне модалки
    _handleOverlayClose = e => {
        if (e.target === e.currentTarget) {
            this.close();
        }
    }

    //слушатели кликов по крестику и клику вне модалки
    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', this._handleOverlayClose);
    }
}