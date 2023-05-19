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
  }

  getUserInfo() {
    return {
      yourname: this._profileName.textContent,
      yourjob: this._profileJob.textContent,
    };
  }

  setUserInfo(dataFormUser) {
    this._profileName.textContent = dataFormUser.yourname;
    //console.log(this._profileName.textContent)
    this._profileJob.textContent = dataFormUser.yourjob;
    //console.log(this._profileJob.textContent)
  }
}
