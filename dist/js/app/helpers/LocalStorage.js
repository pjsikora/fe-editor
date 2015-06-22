define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LSSet = LSSet;
  exports.LSGet = LSGet;
  var ls = window.localStorage;

  exports.ls = ls;

  function LSSet(element, value) {
    ls.setItem(element, value);
  }

  function LSGet(element) {
    return ls.getItem(element);
  }
});
//# sourceMappingURL=LocalStorage.js.map