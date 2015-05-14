class MainCtrl {
	constructor() {
		this.page = new Page('editorWrapper');

		this.elementsJSON = {};
		this.elementsHTML = {};

		this.$elementsList = document.getElementById("elementsList");
		this.$btnAddElement = document.getElementById("addElement");
		this.$btnGetJSON = document.getElementById("getJSON");
		this.$btnGetHTML = document.getElementById("getHTML");
		this.$btnAddElements = document.getElementById("addElements");
		this.$inputContent = document.getElementById("elementContent");

		this.$el = document.querySelector('div');

		for (var key in elements) {
			this.$elementsList.innerHTML += '<option value="'+key+'">'+elements[key].name+'</option>';
		}

		this.bindEvents();
	}

	bindEvents() {
		this.$el.addEventListener("click", (function(event) { this.removeElement(event) }).bind(this));
		// this.$el.addEventListener("click", this.removeElement(event) );

		this.$btnAddElement.addEventListener("click", (function(event) { this.addElement() }).bind(this));
		this.$btnAddElement.addEventListener("click", (function(event) { this.addElementsRandomly() }).bind(this));
		this.$btnGetJSON.addEventListener("click", (function(event) { this.getJSON() }).bind(this));
		this.$btnGetHTML.addEventListener("click", (function(event) { this.getHTML() }).bind(this));
	}

	addElementsRandomly() {

	}

	removeElement(e) {
		console.log(e);

	}

	addElement(e) {

		// console.log();
		let newElement = new Element();
		newElement.createFromTpl(elements[this.$elementsList.value].template, '');



		this.page.addElement();
		// console.log(document.querySelectorAll("[data-prefix]"));
	}

	showElementOptions() {
		console.log('Show element options');
	}

	getHTML() {
		// let element = document.getElementById('editorWrapper');


		return '';
	}

	getJSON() {
		return "JSON";

	}

	generatePrefix() {
		// can be based on timestamp for smalle cont of duplications
		let prefix = Date.now() / 1000;
		return prefix;
	}
}
