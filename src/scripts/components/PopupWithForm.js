import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = this._popupElement.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__input');
    }

    //сбор информации из полей ввода
    _getInputValues() {
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value;
        })
        return this._values;
    }

    //передача информации из полей ввода в отрисовку страницы
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
            this._submitCallback(this._getInputValues());
            this.close();
        });
    }

    //дополнение очистки формы к методу close родителя
    close() {
        super.close();
        this._form.reset();
    }
}