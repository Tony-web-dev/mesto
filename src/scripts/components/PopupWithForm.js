import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._inputList = this._form.querySelectorAll('.form__input');
        this._submitBtn = this._form.querySelector('.form__save-button');
        this._defaultBtnText = this._submitBtn.textContent;
    }

    //сбор информации из полей ввода
    _getInputValues() {
        const values = {}; 
        this._inputList.forEach(input => { 
            values[input.name] = input.value; 
        })
        return values; 
    }

    //передача информации из html в открытый попап
    setInputValues(inputValues) {
        this._inputList.forEach(input => {
            input.value = inputValues[input.name];
        })
    }

    //вешаем слушатели родителя и кнопки сабмита
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', e => {
            e.preventDefault();
            this._submitBtn.textContent = `${this._submitBtn.textContent} ...`;
            this._submitCallback(this._getInputValues());
        });
    }

    resetDefaultBtnText() {
        this._submitBtn.textContent = this._defaultBtnText;
    }

    //дополнение очистки формы к методу close родителя
    close() {
        super.close();
        this._form.reset();
    }
}