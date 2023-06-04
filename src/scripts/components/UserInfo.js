export default class UserInfo {
  constructor(configProfileInfo) {
    this._profileName = document.querySelector(
      configProfileInfo.profileNameSelector
    );
    this._profileJob = document.querySelector(
      configProfileInfo.profileJobSelector
    );
    this._profileAvatar = document.querySelector(
      configProfileInfo.profileAvatar
    );
  }

  getUserInfo() {
    return {
      yourname: this._profileName.textContent,
      yourjob: this._profileJob.textContent,
    };
  }

  setUserInfo({ avatar, yourname, yourjob }) {
    this._profileAvatar.src = avatar;
    this._profileName.textContent = yourname;
    this._profileJob.textContent = yourjob;
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }
}
