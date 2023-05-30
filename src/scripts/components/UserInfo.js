export default class UserInfo {
    constructor({ profileNameSelector, profileAboutSelector, profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileAbout = document.querySelector(profileAboutSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

    //получение текущей информации о пользователе
    getUserInfo = () => {
        return {
            person: this._profileName.textContent,
            about: this._profileAbout.textContent
            }
    }

    //внедрение информации о пользователе на страницу
    setUserInfo = ({ person, about, avatar, _id }) => {
        this._profileName.textContent = person;
        this._profileAbout.textContent = about;
        this._profileAvatar.src = avatar;
        this._id = _id
    }

    //установить id
    setID() {
        return this._id;
    }
}