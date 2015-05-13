"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainCtrl = (function () {
	function MainCtrl() {
		_classCallCheck(this, MainCtrl);

		this.page = new Page("editorWrapper");

		this.elementsJSON = {};
		this.elementsHTML = {};

		this.$elementsList = document.getElementById("elementsList");
		this.$btnAddElement = document.getElementById("addElement");
		this.$btnGetJSON = document.getElementById("getJSON");
		this.$btnGetHTML = document.getElementById("getHTML");
		this.$btnAddElements = document.getElementById("addElements");
		this.$inputContent = document.getElementById("elementContent");

		this.$el = document.querySelector("div");

		for (var key in elements) {
			this.$elementsList.innerHTML += "<option value=\"" + key + "\">" + elements[key].name + "</option>";
		}

		this.bindEvents();
	}

	_createClass(MainCtrl, [{
		key: "bindEvents",
		value: function bindEvents() {
			this.$el.addEventListener("click", (function (event) {
				this.removeElement(event);
			}).bind(this));
			// this.$el.addEventListener("click", this.removeElement(event) );

			this.$btnAddElement.addEventListener("click", (function (event) {
				this.addElement();
			}).bind(this));
			this.$btnAddElement.addEventListener("click", (function (event) {
				this.addElementsRandomly();
			}).bind(this));
			this.$btnGetJSON.addEventListener("click", (function (event) {
				this.getJSON();
			}).bind(this));
			this.$btnGetHTML.addEventListener("click", (function (event) {
				this.getHTML();
			}).bind(this));
		}
	}, {
		key: "addElementsRandomly",
		value: function addElementsRandomly() {}
	}, {
		key: "removeElement",
		value: function removeElement(e) {
			console.log(e);
		}
	}, {
		key: "addElement",
		value: function addElement(e) {

			console.log();
			var newElement = new Element();
			newElement.createFromTpl(elements[this.$elementsList.value].template, "");

			this.page.addElement();
			// console.log(document.querySelectorAll("[data-prefix]"));
		}
	}, {
		key: "showElementOptions",
		value: function showElementOptions() {
			console.log("Show element options");
		}
	}, {
		key: "getHTML",
		value: function getHTML() {
			var element = document.getElementById("editorWrapper");

			return element.innerHTML;
		}
	}, {
		key: "getJSON",
		value: function getJSON() {
			return "JSON";
		}
	}, {
		key: "generatePrefix",
		value: function generatePrefix() {
			// can be based on timestamp for smalle cont of duplications
			var prefix = Date.now() / 1000;
			return prefix;
		}
	}]);

	return MainCtrl;
})();