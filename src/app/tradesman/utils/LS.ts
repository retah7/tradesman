export class LS {
  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static set(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }
}
