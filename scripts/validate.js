const validationConfig = {
    formSelector: '.form',//форма
    inputSelector: '.form__input',//поле ввода
    submitButtonSelector: '.form__save-button',//кнопка сохранить
    inactiveButtonClass: 'form__save-button_disabled',//модиф кнопки
    inputErrorClass: 'form__input_error',//модиф поля ввода
    errorSpanTemplate: '-message-error',//шаблон спана
  };

  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector)); //создаем массив форм
    formList.forEach(form => {
        //отменяем стандартное поведение браузера
        form.addEventListener('submit', e => {
            e.preventDefault();
        })
        //вызываем на каждую форму слушатель инпутов
        setEventListeners(form, config.submitButtonSelector, config.inputSelector, config.inactiveButtonClass, config.inputErrorClass, config.errorSpanTemplate);
    })
  }

  const setEventListeners = (form, submitButtonSelector, inputSelector, inactiveButtonClass, inputErrorClass, errorSpanTemplate) => {
    const inputList = Array.from(form.querySelectorAll(inputSelector)); //создаем массив инпутов
    const btnSubmit = form.querySelector(submitButtonSelector); //кнопка сабмита
    toggleBtnSubmit(inputList, btnSubmit, inactiveButtonClass); //сразу выключаем кнопку сабмита
    inputList.forEach(input => {
        //вешаем слушатели инпутов
        input.addEventListener('input', () => {
            checkInputValidity(input, errorSpanTemplate, inputErrorClass);//вызываем проверку валидности
            toggleBtnSubmit(inputList, btnSubmit, inactiveButtonClass);//вызываем переключение кнопки сабмита
        })
    })
  }

 //функция проверки на валидность
  const checkInputValidity = (input, errorSpanTemplate, inputErrorClass) => {
    const currentErrorContainer = document.querySelector(`.${input.name}${errorSpanTemplate}`); //спан-контейнер активного инпута
    if (!input.validity.valid) {
        showError(input, currentErrorContainer, inputErrorClass);
    } else {
        hideError(input, currentErrorContainer, inputErrorClass);
    } 
 }

 //функция показать ошибку
 const showError = (input, currentErrorContainer, inputErrorClass) => {
    input.classList.add(inputErrorClass);
    currentErrorContainer.textContent = input.validationMessage;
}

//функция скрыть ошибку
const hideError = (input, currentErrorContainer, inputErrorClass) => {
    input.classList.remove(inputErrorClass);
    currentErrorContainer.textContent = '';
}

//переключатель кнопки сабмита
const toggleBtnSubmit = (inputList, button, inactiveButtonClass) => {
    if (hasValidInput(inputList)) {
        enableButton(button, inactiveButtonClass);
    } else {
        disableButton(button, inactiveButtonClass);
    }
}

//функция проверки валидности всех полей формы
const hasValidInput = inputList => inputList.every(input => input.validity.valid);

//функция активации кнопки сабмита
const enableButton = (button, inactiveButtonClass) => {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
}

//функция скрытия кнопки сабмита
const disableButton = (button, inactiveButtonClass) => {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', true);
}

enableValidation(validationConfig);