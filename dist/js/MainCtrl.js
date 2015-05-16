"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainCtrl = (function () {
	function MainCtrl() {
		_classCallCheck(this, MainCtrl);

		this.page = new Page("editorWrapper");

		this.$elementsList = document.getElementById("elementsList");
		this.$btnAddElement = document.getElementById("addElement");
		this.$btnGetJSON = document.getElementById("getJSON");
		this.$btnGetHTML = document.getElementById("getHTML");
		this.$btnClearHTML = document.getElementById("clearAll");
		this.$btnAddElements = document.getElementById("addElements");
		this.$btnLoadElements = document.getElementById("loadElements");
		this.$btnClearElements = document.getElementById("clearAll");

		this.$inputContent = document.getElementById("elementContent");

		this.$el = document.querySelector("div");

		for (var key in elements) {
			this.$elementsList.innerHTML += "<option value=\"" + key + "\">" + elements[key].name + "</option>";
		}

		this.bindEvents();
		this.initContent();
	}

	_createClass(MainCtrl, [{
		key: "initContent",
		value: function initContent() {
			this.page.setHTMLStructure(LSGet("fedojoeditor_html"));
			this.page.redraw();
		}
	}, {
		key: "bindEvents",
		value: function bindEvents() {
			this.$el.addEventListener("click", (function (event) {
				this.removeElement(event);
			}).bind(this));
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
			// this.$btnGetHTML.addEventListener("click", (function(event) { this.getHTML() }).bind(this));
			this.$btnLoadElements.addEventListener("click", (function (event) {
				this.loadElements();
			}).bind(this));
			this.$btnClearElements.addEventListener("click", (function (event) {
				this.clearHTML();
			}).bind(this));
		}
	}, {
		key: "showElementPrefs",
		value: function showElementPrefs(e) {
			console.log("show prefs");
		}
	}, {
		key: "addElementsRandomly",
		value: function addElementsRandomly() {}
	}, {
		key: "loadElements",
		value: function loadElements() {
			this.page.addHTMLStructure(initialHTML);

			LSSet("fedojoeditor_html", this.page.getHTMLStructure());

			this.page.redraw();
		}
	}, {
		key: "removeElement",
		value: function removeElement(e) {}
	}, {
		key: "addElement",
		value: function addElement(e) {
			var newElement = new Element(),
			    option = this.$elementsList.value,
			    tpl = elements[option].template,
			    prefix = Date.now(),
			    content = this.$inputContent.value ? this.$inputContent.value : "Empty",
			    el = newElement.createFromTpl(tpl, { prefix: prefix, content: content }); // get

			this.page.addElement(el);

			LSSet("fedojoeditor_html", this.page.getHTMLStructure());

			this.page.redraw();
		}
	}, {
		key: "showElementOptions",
		value: function showElementOptions() {
			console.log("Show element options");
		}
	}, {
		key: "setElementsHTML",
		value: function setElementsHTML(html) {
			this.page.setHTMLStructure(html);
		}
	}, {
		key: "redraw",
		value: function redraw() {
			this.page.redrawStructure();
		}
	}, {
		key: "getElementsHTML",
		value: function getElementsHTML() {
			return this.page.getHTMLStructure();
		}
	}, {
		key: "getJSON",
		value: function getJSON() {
			return "JSON";
		}
	}, {
		key: "generatePrefix",
		value: function generatePrefix() {
			var prefix = Date.now() / 1000;
			return prefix;
		}
	}, {
		key: "clearHTML",
		value: function clearHTML() {
			this.page.clearHTML();
			LSSet("fedojoeditor_html", this.page.getHTMLStructure());
			this.page.redraw();
		}
	}]);

	return MainCtrl;
})();

// document.querySelectorAll("[data-prefix]").addEventListener('click', (function(event) { this.showElementPrefs() }).bind(this));