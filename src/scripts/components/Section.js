export default class Section {
    constructor({ items, renderer },  sectionSelector) {
        this._section = document.querySelector(sectionSelector);
        this._items = items;
        this.renderer = renderer;
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
    renderItems = () => {
        this._items.forEach(item => {
            this.renderer(item);
        })
    }   
}