export default class UserInfo {
    constructor({ profileNameSelector, profileAboutSelector,profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileAbout = document.querySelector(profileAboutSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

    //получение текущей информации о пользователе
    getUserInfo = () => {
        return {
            user: this._profileName.textContent,
            about: this._profileAbout.textContent
            }
    }

    //внедрение информации о пользователе на страницу
    setUserInfo = ({ user, about, avatar }) => {
        this._profileName.textContent = user;
        this._profileAbout.textContent = about;
        this._profileAvatar.src = avatar;
    }

    //получить id
    getUserID(id) {
        this._id = id;
    }

    //установить id
    setUserID() {
        return this._id;
    }
}