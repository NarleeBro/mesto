export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        //console.log(this._profileName)
        this._profileJob = document.querySelector(configInfo.profileJobSelector);
        //console.log(this._profileJob)
    }

    getUserInfo() {
        return {yourname: this._profileName.textContent, yourjob: this._profileJob.textContent};
    }
   
    setUserInfo(dataUser) {
        this._profileName.textContent = dataUser.yourname;
        //console.log(this._profileName.textContent)
        this._profileJob.textContent = dataUser.yourjob;
        //console.log(this._profileJob.textContent)
    }
}