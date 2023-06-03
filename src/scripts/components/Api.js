export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    //console.log(this._url)
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  _checkRes(res) {
    return res.ok ? res.json() : Promise.reject;
  }

  getInfo() {
    return fetch("https://nomoreparties.co/v1/cohort-66/users/me", {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  getCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards", {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }
  //99999
  setUserInfo(data) {
    return fetch("https://nomoreparties.co/v1/cohort-66/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.yourname,
        about: data.yourjob,
      }),
    }).then(this._checkRes);
  }

  setNewAvatar(data) {
    return fetch("https://nomoreparties.co/v1/cohort-66/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkRes);
  }

  addCard(item) {
    return fetch("https://nomoreparties.co/v1/cohort-66/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: item.placename,
        link: item.link,
      }),
    }).then(this._checkRes);
  }

  addLike(cardId) {
    /*  return fetch('https://nomoreparties.co/v1/cohort-66/cards/cardId/likes', { */
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }
}
