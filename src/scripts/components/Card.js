export default class Card {
    constructor(item, galleryItemTemplate, openBigPopup, openPopupDeleteItem) {
      this._item = item;
      this._galleryItemTemplate = galleryItemTemplate;
      this._openBigPopup = openBigPopup;
      this._openPopupDeleteItem = openPopupDeleteItem;
    }
  
    //клонируем шаблон
    _getCloneElement = () => {
      const galleryItem = document.querySelector(this._galleryItemTemplate).content.querySelector('.gallery__item').cloneNode(true);
      return galleryItem;
    }
  
    //поставить лайк
    _handleLike = () => {
      this._galleryLike.classList.toggle('gallery__like_active');
    }
  
    //вызов попапа удаления карточки
    _handleDelete = () => {
      this._openPopupDeleteItem(this);
    }

    //удалить карточку
    removeItem = () => {
      this._galleryItem.remove();
    }
  
    //открыть модальное окно с картинкой
    _handleOpenBigPopup = () => {
      this._openBigPopup(this._item);
    }
  
    //навешиваем слушатели кликов в карточке
    _setEventListeners = () => {
      this._galleryLike.addEventListener('click', this._handleLike); //клик по лайку
      this._galleryTrash.addEventListener('click', this._handleDelete); //клик по корзине
      this._galleryImage.addEventListener('click', this._handleOpenBigPopup); //клик по картинке
    }
  
    //создаем единицу галереи
    createGalleryItem = () => {
      this._galleryItem = this._getCloneElement();
      this._galleryImage = this._galleryItem.querySelector('.gallery__img');
      this._galleryHeading = this._galleryItem.querySelector('.gallery__heading');
      this._galleryHeading.textContent = this._item.heading;
      this._galleryImage.src = this._item.url;
      this._galleryImage.alt = `Фото ${this._item.heading}`;
      this._galleryLike = this._galleryItem.querySelector('.gallery__like');
      this._galleryTrash = this._galleryItem.querySelector('.gallery__trash');
      this._setEventListeners();
      return this._galleryItem;
    }
  }