'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Page = (function () {
  function Page(elementID) {
    _classCallCheck(this, Page);

    console.log('Page init');
    this.elementsCollection = {};
    this.HTMLStructure = '';
    this.contentKeeper = document.getElementById(elementID);
  }

  _createClass(Page, [{
    key: 'init',
    value: function init() {
      return 1;
    }
  }, {
    key: 'loadStructure',
    value: function loadStructure() {}
  }, {
    key: 'addElement',
    value: function addElement(elementString) {
      this.HTMLStructure += elementString;
    }
  }, {
    key: 'removeElement',
    value: function removeElement() {}
  }, {
    key: 'getJSONStructure',
    value: function getJSONStructure() {}
  }, {
    key: 'setJSONStructure',
    value: function setJSONStructure() {}
  }, {
    key: 'redrawStructure',
    value: function redrawStructure() {
      this.contentKeeper.innerHTML = this.HTMLStructure;
    }
  }, {
    key: 'getHTMLStructure',
    value: function getHTMLStructure() {
      return this.HTMLStructure;
    }
  }, {
    key: 'setHTMLStructure',
    value: function setHTMLStructure(structure) {
      this.HTMLStructure = structure;
    }
  }]);

  return Page;
})();