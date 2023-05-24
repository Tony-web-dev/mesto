export default class Section {
    constructor({ items, renderer },  sectionSelector) {
        this._section = document.querySelector(sectionSelector);
        this._items = items;
        this.renderer = renderer;
    }

    addItemToEnd = (domElement) => {
        this._section.append(domElement);
    }

    addItemToBegin = (domElement) => {
        this._section.prepend(domElement);
    }

    renderItems = () => {
        this._items.forEach(item => {
            this.addItemToEnd(this.renderer(item));
        })
    }   
}