import { name } from "file-loader";

export default class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
        // this._authorization = options.headers.authorization;
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
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
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
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
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
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
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
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
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }



}