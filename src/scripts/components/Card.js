export default class Card {
    constructor(dataCard, galleryItemTemplate, openBigPopup, openPopupDeleteItem, changeLike) {
      this._galleryItemTemplate = galleryItemTemplate;
      this._openBigPopup = openBigPopup;
      this._openPopupDeleteItem = openPopupDeleteItem;
      this._dataCard = dataCard;
      this._myID = dataCard.myID;
      this._ownerID = dataCard.owner._id;
      this._cardID = dataCard._id;
      this._likes = dataCard.likes;
      this._likeCount = dataCard.likes.length;
      this._changeLike = changeLike;
    }
  
    //клонируем шаблон
    _getCloneElement = () => {
      const galleryItem = document.querySelector(this._galleryItemTemplate).content.querySelector('.gallery__item').cloneNode(true);
      return galleryItem;
    }

    //обработчик лайка на странице
    _handleLike = () => {
      this._changeLike(this._likeIcon, this._cardID)
    }

    //если поставленный лайк мой - закрасить лайк
    _isLiked() {
      this._likes.forEach(card => {
        if(card._id === this._myID) {
          this._likeIcon.classList.add('gallery__like_active');
          return;
        }
      })
      this._likeCounter.textContent = this._likeCount;
    }
  
    //переключатель лайков
    toggleLike = (likes) => {
      this._likeIcon.toggle('gallery__like_active');
      this._likeCounter.textContent = likes.length;
    }

    //видимость иконки корзины
    _checkGalleryTrash() {
      if(this._myID === this._ownerID) {
        this._trashIcon.classList.remove('gallery__trash_hidden');
      } else {
        this._trashIcon.classList.add('gallery__trash_hidden');
      }
    }
  
    //вызов попапа удаления карточки
    _handleDelete = () => {
      this._openPopupDeleteItem(this, this._cardID);
    }

    //удалить карточку
    removeItem = () => {
      this._galleryItem.remove();
    }
  
    //открыть модальное окно с картинкой
    _handleOpenBigPopup = () => {
      this._openBigPopup(this._dataCard);
    }
  
    //навешиваем слушатели кликов в карточке
    _setEventListeners = () => {
      this._likeIcon.addEventListener('click', this._handleLike); //клик по лайку
      this._trashIcon.addEventListener('click', this._handleDelete); //клик по корзине
      this._galleryImage.addEventListener('click', this._handleOpenBigPopup); //клик по картинке
    }

    //создаем единицу галереи
    createGalleryItem = () => {
      this._galleryItem = this._getCloneElement();
      this._likeIcon = this._galleryItem.querySelector('.gallery__like');
      this._trashIcon = this._galleryItem.querySelector('.gallery__trash');
      this._galleryImage = this._galleryItem.querySelector('.gallery__img');
      this._galleryHeading = this._galleryItem.querySelector('.gallery__heading');
      this._likeCounter = this._galleryItem.querySelector('.gallery__like-counter');
      this._galleryHeading.textContent = this._dataCard.name;
      this._galleryImage.src = this._dataCard.link;
      this._galleryImage.alt = `Фото ${this._dataCard.name}`;
      this._isLiked();
      this._checkGalleryTrash();
      this._setEventListeners();
      return this._galleryItem;
    }
  }