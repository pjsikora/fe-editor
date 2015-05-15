"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorage = (function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);

    $this.ls = window.localStorage;
  }

  _createClass(LocalStorage, [{
    key: "set",
    value: function set(element, value) {
      $this.ls.setItem(element, value);
    }
  }, {
    key: "get",
    value: function get(element) {
      return $this.ls.getItem(element);
    }
  }]);

  return LocalStorage;
})();