export default class UserInfo {
    constructor({ profileNameSelector, profileAboutSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileAbout = document.querySelector(profileAboutSelector);
    }

    //получение текущей информации о пользователе
    getUserInfo = () => {
        return {
            user: this._profileName.textContent,
            about: this._profileAbout.textContent
            }
    }

    //внедрение информации о пользователе на страницу
    setUserInfo = (userInfo) => {
        this._profileName.textContent = userInfo.user;
        this._profileAbout.textContent = userInfo.about;
    }
}