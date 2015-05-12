'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Element = (function () {
    function Element() {
        _classCallCheck(this, Element);

        this.elements = [];
        this.selector = '';
        this.$addElement;
        this.$removeElement;
        this.$editElement;
    }

    _createClass(Element, [{
        key: 'bindEvents',
        value: function bindEvents() {
            this.$addElement.addEventListener('click');
            this.$removeElement.addEventListener();
            this.$editElement.addEventListener();
        }
    }, {
        key: 'addElement',
        value: function addElement() {}
    }, {
        key: 'removeElement',
        value: function removeElement() {}
    }]);

    return Element;
})();