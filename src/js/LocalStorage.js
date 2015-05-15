class LocalStorage {
  constructor() {
    $this.ls = window.localStorage;
  }
  set(element, value) {
    $this.ls.setItem(element, value);
  }
  get(element) {
    return $this.ls.getItem(element);
  }
}
