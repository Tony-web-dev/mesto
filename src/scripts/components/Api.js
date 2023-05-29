class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(this._checkResponse)
        .catch((err) => {
            console.log(err);
        });
    }

    setUserInfo(user) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: user.user,
                about: user.about
            })
        })
        .then(this._checkResponse)
        .catch((err) => {
            console.log(err);
        });
    }

    setAvatar(user) {
        return fetch(`${this._url}/users/me/avatar`, {
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
        return fetch(`${this._url}/cards`, {
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
        return fetch(`${this._url}/cards`, {
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

    toLike(itemID) {
        return fetch(`${this._url}/cards/${itemID}/likes`, {
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

    toDislike(itemID) {
        return fetch(`${this._url}/cards/${itemID}/likes`, {
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

    deleteItem(itemID) {
        return fetch (`${this._url}/cards/${itemID}`, {
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