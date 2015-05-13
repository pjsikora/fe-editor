"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainCtrl = (function () {
	function MainCtrl() {
		_classCallCheck(this, MainCtrl);

		var page = new Page(),
		    $s = document.getElementById("elementsList"),
		    $b = document.getElementById("addElement");

		for (var key in elements) {
			$s.innerHTML += "<option value=\"" + key + "\">" + elements[key].name + "</option>";
		}

		function addOption(e) {
			var ne = new Element({ prefix: "cus" });

			page.addElement(elements[$s.value].template);
		}

		$b.addEventListener("click", addOption);

		$s.addEventListener("click", function (e) {
			console.log("clicked");
			// Get the CSS classes
			/*
   var classes = e.target.className.split(" ");
   // Search for the CSS class!
   if(classes) {
   	// For every CSS class the element has...
   	for(var x = 0; x < classes.length; x++) {
   		// If it has the CSS class we want...
   		if(classes[x] == "classA") {
   			// Bingo!
   			console.log("Anchor element clicked!");
   			
   			
   			// Now do something here....
   			
   			
   	
   			}
   	}
   }*/

			//}
		});
	}

	_createClass(MainCtrl, [{
		key: "generatePrefix",
		value: function generatePrefix() {
			// can be based on timestamp for smalle cont of duplications
			var prefix = Date.now() / 1000;
			return prefix;
		}
	}]);

	return MainCtrl;
})();