export default class Card {
    constructor(item, galleryItemTemplate, openBigPopup, openPopupDeleteItem, changeLike) {
      this._galleryItemTemplate = galleryItemTemplate;
      this._openBigPopup = openBigPopup;
      this._openPopupDeleteItem = openPopupDeleteItem;
      this._item = item;
      this._myID = item.myID;
      this._ownerID = item.owner._id;
      this._itemID = item._id;
      this._likes = item.likes;
      this._likeCount = item.likes.length;
      this._changeLike = changeLike;
    }
  
    //клонируем шаблон
    _getCloneElement = () => {
      const galleryItem = document.querySelector(this._galleryItemTemplate).content.querySelector('.gallery__item').cloneNode(true);
      return galleryItem;
    }

    //обработчик лайка на странице
    _handleLike = () => {
      this._changeLike(this._galleryLike, this._itemID)
    }

    //если поставленный лайк мой - закрасить лайк
    _checkLike() {
      this._likes.forEach(item => {
        if(item._id === this._myID) {
          this._galleryLike.classList.add('gallery__like_active');
          return;
        }
      })
      this._counter.textContent = this._likeCount;
    }
  
    //переключатель лайков
    toggleLike = (likes) => {
      this._galleryLike.toggle('gallery__like_active');
      this._counter.textContent = likes.length;
    }

    //видимость иконки корзины
    _checkGalleryTrash = () => {
      if(this._myID === this._ownerID) {
        this._galleryTrash.classList.remove('gallery__trash_hidden');
      } else {
        this._galleryTrash.classList.add('gallery__trash_hidden');
      }
    }
  
    //вызов попапа удаления карточки
    _handleDelete = () => {
      this._openPopupDeleteItem(this, this._itemID);
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
      this._galleryLike = this._galleryItem.querySelector('.gallery__like');
      this._galleryTrash = this._galleryItem.querySelector('.gallery__trash');
      this._galleryImage = this._galleryItem.querySelector('.gallery__img');
      this._galleryHeading = this._galleryItem.querySelector('.gallery__heading');
      this._counter = this._galleryItem.querySelector('.gallery__like-counter');
      this._galleryHeading.textContent = this._item.name;
      this._galleryImage.src = this._item.link;
      this._galleryImage.alt = `Фото ${this._item.name}`;
      this._checkLike();
      this._checkGalleryTrash();
      this._setEventListeners();
      return this._galleryItem;
    }
  }