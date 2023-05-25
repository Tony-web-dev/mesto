export default class Section {
    constructor({ items, renderer },  sectionSelector) {
        this._section = document.querySelector(sectionSelector);
        this._items = items;
        this._renderer = renderer;
    }

    //добавление картинки в конец списка (отрисовка массива initialCards)
    addItemToEnd = (item) => {
        this._section.append(this._renderer(item));
    }
    //добавление картинки в начало списка (отрисовка новых карточек)
    addItemToBegin = (item) => {
        this._section.prepend(this._renderer(item));
    }

    //загрузка карточек
    renderItems = () => {
        this._items.forEach(item => {
            this.addItemToEnd(item);
        })
    }   
}