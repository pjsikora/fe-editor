define(["exports"], function (exports) {
  "use strict";

  define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = (function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    })();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var Window = (function () {
      function Window() {
        _classCallCheck(this, Window);

        this.$windowOverlay = document.getElementById("windowOverlay");
        this.$window = document.getElementById("window");
      }

      _createClass(Window, [{
        key: "open",
        value: function open() {
          this.$window.style.display = "block";
          this.$windowOverlay.style.display = "block";
        }
      }, {
        key: "close",
        value: function close() {
          this.$window.style.display = "none";
          this.$windowOverlay.style.display = "none";
        }
      }]);

      return Window;
    })();

    exports.Window = Window;
  });
  //# sourceMappingURL=Window.js.map
});

//# sourceMappingURL=Window.es6.map