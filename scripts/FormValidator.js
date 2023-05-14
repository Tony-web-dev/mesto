export default class FormValidator {
    constructor(config, form) {
      this._form = form;
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorSpanTemplate = config.errorSpanTemplate;
      this._inputList = form.querySelectorAll(this._inputSelector);
      this._btnSubmit = form.querySelector(this._submitButtonSelector)
    }
  
    enableValidation = () => {
      this._setEventListeners();
    }
  
    _setEventListeners = () => {
      this._toggleBtnSubmit(this._inputList, this._btnSubmit, this._inactiveButtonClass);
      this._inputList.forEach(input => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input);
          this._toggleBtnSubmit();
        })
      })
    }
  
    _checkInputValidity = (input) => {
      const currentErrorContainer = this._form.querySelector(`.${input.name}${this._errorSpanTemplate}`);
      if (!input.validity.valid) {
        this._showError(input, currentErrorContainer);
      } else {
        this._hideError(input, currentErrorContainer);
      }
    }
  
    _showError = (input, currentErrorContainer) => {
      input.classList.add(this._inputErrorClass);
      currentErrorContainer.textContent = input.validationMessage;
    }
  
    _hideError = (input, currentErrorContainer) => {
      input.classList.remove(this._inputErrorClass);
      currentErrorContainer.textContent = '';
    }
  
    _toggleBtnSubmit = () => {
      if (this._hasValidInput()) {
        this._enableButton();
      } else {
        this._disableButton(this._btnSubmit);
      }
    }
  
    _hasValidInput = () => {
      return Array.from(this._inputList).every(input => input.validity.valid);
    }
  
    _enableButton = () => {
      this._btnSubmit.classList.remove(this._inactiveButtonClass);
      this._btnSubmit.removeAttribute('disabled');
    }
  
    _disableButton = () => {
      this._btnSubmit.classList.add(this._inactiveButtonClass);
      this._btnSubmit.setAttribute('disabled', true);
    }
  
    resetErrors = () => {
      this._inputList.forEach(input => {
        const currentErrorContainer = this._form.querySelector(`.${input.name}${this._errorSpanTemplate}`);
        this._hideError(input, currentErrorContainer);
      })
      this._disableButton();
    }
  }