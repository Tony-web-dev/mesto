import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = this._popupElement.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__input');
    }

    getInputValues() {
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value;
        })
        return this._values;
    }


    setInputValues(inputValues) {
        this._inputList.forEach(input => {
            input.value = inputValues[input.name];
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitCallback);
}

    close() {
        super.close();
        this._form.reset();
    }
}