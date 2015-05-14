'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Element = (function () {
    function Element(config) {
        _classCallCheck(this, Element);

        this.elements = [];
        this.elHTML;
        this.selector = '';
        this.$addElement;
        this.$removeElement;
        this.$editElement;

        // this.elementPrefix = config.prefix ? config.prefix : '000';
    }

    _createClass(Element, [{
        key: 'createFromTpl',

        // Thanks Krasimir http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line
        value: function createFromTpl(html, options) {
            var re = /<%([^%>]+)?%>/g,
                reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
                code = 'var r=[];\n',
                cursor = 0,
                match;
            var add = function add(line, js) {
                js ? code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n' : code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '';
                return add;
            };
            while (match = re.exec(html)) {
                add(html.slice(cursor, match.index))(match[1], true);
                cursor = match.index + match[0].length;
            }
            add(html.substr(cursor, html.length - cursor));
            code += 'return r.join("");';
            return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            this.$addElement.addEventListener();
            this.$removeElement.addEventListener();
            this.$editElement.addEventListener();
        }
    }, {
        key: 'prepareElement',
        value: function prepareElement() {}
    }]);

    return Element;
})();