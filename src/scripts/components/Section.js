export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._initialCard = items;
    this._renderer = renderer;
  }

  renderItems() {
    this._initialCard.forEach((element) => {
      this._renderer(element);
    });
  }
  addItem(elementDom) {
    this._container.prepend(elementDom);
  }
}
