export default class Section {
    constructor(renderer,  sectionSelector) {
        this._section = document.querySelector(sectionSelector);
        this._renderer = renderer;
    }

    //добавление картинки в конец списка (отрисовка массива initialCards)
    addItemToEnd = (domElement) => {
        this._section.append(domElement);
    }
    //добавление картинки в начало списка (отрисовка новых карточек)
    addItemToBegin = (domElement) => {
        this._section.prepend(domElement);
    }

    //загрузка карточек
    renderItems = (items) => {
        items.forEach(item => {
            this._renderer(item);
        })
    }   
}