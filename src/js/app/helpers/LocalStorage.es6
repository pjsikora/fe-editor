export let ls = window.localStorage;

export function LSSet(element, value) {
  ls.setItem(element, value);
}

export function LSGet(element) {
  return ls.getItem(element);
}
