class Api {
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
        .catch((err) => {
            console.log(err);
        });
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
        .catch((err) => {
            console.log(err);
        });
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
        .catch((err) => {
            console.log(err);
        });
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
        .catch((err) => {
            console.log(err);
        });
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
        .catch((err) => {
            console.log(err);
        });
    }

    toLike(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
        .catch((err) => {
            console.log(err);
        });
    }

    toDislike(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
        .catch((err) => {
            console.log(err);
        });
    }

    deleteCard(cardID) {
        return fetch (`${this._baseUrl}/cards/${cardID}`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
        .catch((err) => {
            console.log(err);
        });
    }

}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: 'f35f3961-8176-428d-a013-e1f5dcaddc87',
      'Content-Type': 'application/json'
    }
  })