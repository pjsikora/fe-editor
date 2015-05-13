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
    key: 'loadStructure',
    value: function loadStructure() {}
  }, {
    key: 'addElement',
    value: function addElement(elementString) {
      this.contentKeeper.innerHTML += elementString;
    }
  }, {
    key: 'removeElement',
    value: function removeElement() {}
  }, {
    key: 'getJSONstructure',
    value: function getJSONstructure() {}
  }, {
    key: 'setJSONstructure',
    value: function setJSONstructure() {}
  }, {
    key: 'getHTMLstructure',
    value: function getHTMLstructure() {
      return this.HTMLStructure;
    }
  }, {
    key: 'setHTMLstructure',
    value: function setHTMLstructure(structure) {
      this.HTMLStructure = structure;
    }
  }]);

  return Page;
})();