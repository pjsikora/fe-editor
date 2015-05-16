"use strict";

var ls = window.localStorage;

function LSSet(element, value) {
  ls.setItem(element, value);
}

function LSGet(element) {
  return ls.getItem(element);
}