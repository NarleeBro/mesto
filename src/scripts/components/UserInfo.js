export default class UserInfo {
  constructor(configProfileInfo) {
    this._profileName = document.querySelector(
      configProfileInfo.profileNameSelector
    );
    //console.log(this._profileName)
    this._profileJob = document.querySelector(
      configProfileInfo.profileJobSelector
    );
    //console.log(this._profileJob)
    this._profileAvatar = document.querySelector(
      configProfileInfo.profileAvatar
    );
    //console.log(this._profileAvatar)
  }

  getUserInfo() {
    return {
      yourname: this._profileName.textContent,
      yourjob: this._profileJob.textContent,
    };
  }

  setUserInfo({ avatar, yourname, yourjob }) {
    this._profileAvatar.src = avatar;
    //console.log(this._profileAvatar.src)
    this._profileName.textContent = yourname;
    //console.log(this._profileName.textContent)
    this._profileJob.textContent = yourjob;
    //console.log(this._profileJob.textContent)
    /* close() */
  }
  //99999gh
setId(id) {
  this._id = id;
}

getId() {
  return this._id;
}
}

