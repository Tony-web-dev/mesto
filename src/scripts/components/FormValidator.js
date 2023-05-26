export default class FormValidator {
    constructor(config, form) {
      this._form = form;
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorSpanTemplate = config.errorSpanTemplate;
      this._inputList = Array.from(form.querySelectorAll(this._inputSelector));
      this._btnSubmit = form.querySelector(this._submitButtonSelector)
    }
  
    //включаем валидацию форм
    enableValidation = () => {
      this._setEventListeners();
    }

    //вешаем слушатели на инпуты форм
    _setEventListeners = () => {
      this._toggleBtnSubmit(this._inputList, this._btnSubmit, this._inactiveButtonClass);
      this._inputList.forEach(input => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input); //вызываем проверку валидности
          this._toggleBtnSubmit(); //вызываем перключение кнопки сабмита актив/дезактив
        })
      })
    }
  
    //проверка валидности
    _checkInputValidity = (input) => {
      const currentErrorContainer = this._form.querySelector(`.${input.name}${this._errorSpanTemplate}`);
      if (!input.validity.valid) {
        this._showError(input, currentErrorContainer);
      } else {
        this._hideError(input, currentErrorContainer);
      }
    }
  
    //показать ошибку в поле спана
    _showError = (input, currentErrorContainer) => {
      input.classList.add(this._inputErrorClass);
      currentErrorContainer.textContent = input.validationMessage;
    }
  
    //скрыть ошибку в поле спана
    _hideError = (input, currentErrorContainer) => {
      input.classList.remove(this._inputErrorClass);
      currentErrorContainer.textContent = '';
    }
  
    //переключатель кнопки сабмита
    _toggleBtnSubmit = () => {
      if (this._hasValidInput()) {
        this._enableButton();
      } else {
        this._disableButton(this._btnSubmit);
      }
    }
  
    //проверка валидности всех полей
    _hasValidInput = () => {
      return this._inputList.every(input => input.validity.valid);
    }
  
    //активация кнопки сабмита
    _enableButton = () => {
      this._btnSubmit.classList.remove(this._inactiveButtonClass);
      this._btnSubmit.removeAttribute('disabled');
    }
  
    //дезактивация кнопки сабмита
    _disableButton = () => {
      this._btnSubmit.classList.add(this._inactiveButtonClass);
      this._btnSubmit.setAttribute('disabled', true);
    }
  
    //сброс ошибок при открытии форм
    resetValidation = () => {
      this._inputList.forEach(input => {
        const currentErrorContainer = this._form.querySelector(`.${input.name}${this._errorSpanTemplate}`);
        this._hideError(input, currentErrorContainer);
      })
      this._disableButton(); //сразу дезактивируем кнопку
    }
  }