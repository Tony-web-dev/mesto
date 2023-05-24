export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = e => {
        if (e.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose = e => {
        if (e.target === e.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', this._handleOverlayClose);
    }
}