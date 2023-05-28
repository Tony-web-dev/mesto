(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(r)?r:String(r)}var i=r((function e(t,r,o,i){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_getCloneElement",(function(){return document.querySelector(u._galleryItemTemplate).content.querySelector(".gallery__item").cloneNode(!0)})),n(this,"_handleLike",(function(){u._galleryLike.classList.toggle("gallery__like_active")})),n(this,"_handleDelete",(function(){u._openPopupDeleteItem(u)})),n(this,"removeItem",(function(){u._galleryItem.remove()})),n(this,"_handleOpenBigPopup",(function(){u._openBigPopup(u._item)})),n(this,"_setEventListeners",(function(){u._galleryLike.addEventListener("click",u._handleLike),u._galleryTrash.addEventListener("click",u._handleDelete),u._galleryImage.addEventListener("click",u._handleOpenBigPopup)})),n(this,"createGalleryItem",(function(){return u._galleryItem=u._getCloneElement(),u._galleryImage=u._galleryItem.querySelector(".gallery__img"),u._galleryHeading=u._galleryItem.querySelector(".gallery__heading"),u._galleryHeading.textContent=u._item.heading,u._galleryImage.src=u._item.url,u._galleryImage.alt="Фото ".concat(u._item.heading),u._galleryLike=u._galleryItem.querySelector(".gallery__like"),u._galleryTrash=u._galleryItem.querySelector(".gallery__trash"),u._setEventListeners(),u._galleryItem})),this._item=t,this._galleryItemTemplate=r,this._openBigPopup=o,this._openPopupDeleteItem=i}));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,f(n.key),n)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,r){return(t=f(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var s=c((function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"enableValidation",(function(){n._setEventListeners()})),a(this,"_setEventListeners",(function(){n._toggleBtnSubmit(n._inputList,n._btnSubmit,n._inactiveButtonClass),n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e),n._toggleBtnSubmit()}))}))})),a(this,"_checkInputValidity",(function(e){var t=n._form.querySelector(".".concat(e.name).concat(n._errorSpanTemplate));e.validity.valid?n._hideError(e,t):n._showError(e,t)})),a(this,"_showError",(function(e,t){e.classList.add(n._inputErrorClass),t.textContent=e.validationMessage})),a(this,"_hideError",(function(e,t){e.classList.remove(n._inputErrorClass),t.textContent=""})),a(this,"_toggleBtnSubmit",(function(){n._hasValidInput()?n._enableButton():n._disableButton(n._btnSubmit)})),a(this,"_hasValidInput",(function(){return n._inputList.every((function(e){return e.validity.valid}))})),a(this,"_enableButton",(function(){n._btnSubmit.classList.remove(n._inactiveButtonClass),n._btnSubmit.removeAttribute("disabled")})),a(this,"_disableButton",(function(){n._btnSubmit.classList.add(n._inactiveButtonClass),n._btnSubmit.setAttribute("disabled",!0)})),a(this,"resetValidation",(function(){n._inputList.forEach((function(e){var t=n._form.querySelector(".".concat(e.name).concat(n._errorSpanTemplate));n._hideError(e,t)})),n._disableButton()})),this._form=r,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorSpanTemplate=t.errorSpanTemplate,this._inputList=Array.from(r.querySelectorAll(this._inputSelector)),this._btnSubmit=r.querySelector(this._submitButtonSelector)}));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function b(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var d=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),b(this,"_handleOverlayClose",(function(e){e.target===e.currentTarget&&r.close()})),this._popupElement=document.querySelector(t),this._form=this._popupElement.querySelector(".form")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",this._handleOverlayClose)}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},g.apply(this,arguments)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function w(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===v(t)?t:String(t)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(i,e);var t,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(n){var o=S(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function i(e){var t,r,n,u,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),n=h(r=o.call(this,e)),l=function(e){r._bigPictureImg.src=e.url,r._bigPictureImg.alt="Фото ".concat(e.heading),r._bigPictureHeading.textContent=e.heading,g((t=h(r),S(i.prototype)),"open",t).call(t)},(u=w(u="open"))in n?Object.defineProperty(n,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[u]=l,r._bigPictureImg=r._popupElement.querySelector(".popup__img"),r._bigPictureHeading=r._popupElement.querySelector(".popup__img-heading"),r}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(d);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function P(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function L(e,t,r){return(t=k(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var I=P((function e(t,r){var n=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),L(this,"addItemToEnd",(function(e){n._section.append(e)})),L(this,"addItemToBegin",(function(e){n._section.prepend(e)})),L(this,"renderItems",(function(){n._items.forEach((function(e){n.renderer(e)}))})),this._section=document.querySelector(r),this._items=o,this.renderer=i}));function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,q(n.key),n)}}function B(e,t,r){return t&&T(e.prototype,t),r&&T(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function R(e,t,r){return(t=q(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===C(t)?t:String(t)}var x=B((function e(t){var r=this,n=t.profileNameSelector,o=t.profileAboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),R(this,"getUserInfo",(function(){return{user:r._profileName.textContent,about:r._profileAbout.textContent}})),R(this,"setUserInfo",(function(e){r._profileName.textContent=e.user,r._profileAbout.textContent=e.about})),this._profileName=document.querySelector(n),this._profileAbout=document.querySelector(o)}));function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===V(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},A.apply(this,arguments)}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(n);if(o){var r=H(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitCallback=t,r._inputList=r._form.querySelectorAll(".form__input"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;A(H(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback(e._getInputValues()),e.close()}))}},{key:"close",value:function(){A(H(u.prototype),"close",this).call(this),this._form.reset()}}])&&D(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},F.apply(this,arguments)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}function K(e,t,r){return(t=Q(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Q(e){var t=function(e,t){if("object"!==G(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===G(t)?t:String(t)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(i,e);var t,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(n){var o=J(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}(this,e)});function i(e,t){var r,n,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),K(M(u=o.call(this,e)),"open",(function(e){F((r=M(u),J(i.prototype)),"open",r).call(r),u._item=e})),K(M(u),"setEventListeners",(function(){F((n=M(u),J(i.prototype)),"setEventListeners",n).call(n),u._form.addEventListener("submit",(function(e){e.preventDefault(),u._submitCallback(u._item),u.close()}))})),u._submitCallback=t,u}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(d),X=document.forms["edit-form"],Y=document.querySelector(".profile__edit-button"),Z=document.forms["edit-avatar"],$=document.querySelector(".profile__avatar-button"),ee=document.forms["add-form"],te=document.querySelector(".profile__gallery-add-button"),re={inputSelector:".form__input",submitButtonSelector:".form__save-button",inactiveButtonClass:"form__save-button_disabled",inputErrorClass:"form__input_error",errorSpanTemplate:"-message-error"},ne=new x({profileNameSelector:".profile__name",profileAboutSelector:".profile__about"}),oe=new E(".popup_big-picture");oe.setEventListeners();var ie=new U(".popup_edit-profile",(function(e){ne.setUserInfo(e)}));ie.setEventListeners(),Y.addEventListener("click",(function(){se.resetValidation(),ie.setInputValues(ne.getUserInfo()),ie.open()}));var ue=new W(".popup_delete-gallery-item",(function(e){e.removeItem()}));ue.setEventListeners();var le=function(e){return new i(e,"#gallery__item",oe.open,ue.open).createGalleryItem()},ce=new I({items:[{heading:"Архыз",url:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{heading:"Челябинская область",url:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{heading:"Иваново",url:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{heading:"Камчатка",url:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{heading:"Холмогорский район",url:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{heading:"Байкал",url:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){ce.addItemToEnd(le(e))}},".gallery");ce.renderItems();var ae=new U(".popup_add-gallery-item",(function(e){ce.addItemToBegin(le(e))}));ae.setEventListeners(),te.addEventListener("click",(function(){pe.resetValidation(),ae.open()}));var fe=new U(".popup_edit-avatar",(function(e){document.querySelector(".profile__avatar").src=e.avatar}));fe.setEventListeners(),$.addEventListener("click",(function(){ye.resetValidation(),fe.open()}));var se=new s(re,X);se.enableValidation();var pe=new s(re,ee);pe.enableValidation();var ye=new s(re,Z);ye.enableValidation()})();