export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Произошла ошибка: ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
    }

    setUserInfo(userData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userData.person,
                about: userData.about
            })
        })
        .then(this._checkResponse)
    }

    setAvatar(user) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: user.avatar
            })
        })
        .then(this._checkResponse)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
    }

    addCard(item) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: item.heading,
                link: item.url
            })
        })
        .then(this._checkResponse)
    }

    toLike(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
    }

    toDislike(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
    }

    deleteCard(cardID) {
        return fetch (`${this._baseUrl}/cards/${cardID}`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
    }

}