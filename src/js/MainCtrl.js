class MainCtrl {
	constructor() {
		this.page = new Page('editorWrapper');

		this.$elementsList = document.getElementById("elementsList");
		this.$btnAddElement = document.getElementById("addElement");
		this.$btnGetJSON = document.getElementById("getJSON");
		this.$btnGetHTML = document.getElementById("getHTML");
		this.$btnClearHTML = document.getElementById("clearAll");
		this.$btnAddElements = document.getElementById("addElements");
		this.$btnLoadElements = document.getElementById("loadElements");
		this.$btnClearElements = document.getElementById("clearAll");

		this.$inputContent = document.getElementById("elementContent");

		this.$el = document.querySelector('div');

		for (var key in elements) {
			this.$elementsList.innerHTML += '<option value="'+key+'">'+elements[key].name+'</option>';
		}

		this.bindEvents();
		this.initContent();
	}

	initContent() {
		this.page.setHTMLStructure(LSGet('fedojoeditor_html'));
		this.page.redraw();

	}

	bindEvents() {
		this.$el.addEventListener("click", (function(event) { this.removeElement(event) }).bind(this));
		this.$btnAddElement.addEventListener("click", (event) => this.addElement());
		this.$btnAddElement.addEventListener("click", (event) => this.addElementRandomly());
		this.$btnGetJSON.addEventListener("click", (event) => this.getJSON());
		this.$btnGetHTML.addEventListener("click", (event) => this.getHTML());
		this.$btnLoadElements.addEventListener("click", (event) => this.loadElements());
		this.$btnClearElements.addEventListener("click", (event) => this.clearHTML());

		// document.querySelectorAll("[data-prefix]").addEventListener('click', (function(event) { this.showElementPrefs() }).bind(this));
	}

	showElementPrefs(e) {
		console.log('show prefs');
	}

	addElementsRandomly() {

	}


	loadElements() {
		this.page.addHTMLStructure(initialHTML);

		LSSet('fedojoeditor_html', this.page.getHTMLStructure());

		this.page.redraw();
	}

	removeElement(e) {

	}

	addElement(e) {
		let newElement = new Element(),
				option = this.$elementsList.value,
				tpl = elements[option].template,
				prefix = Date.now(),
				content = this.$inputContent.value ? this.$inputContent.value : 'Empty',
				el = newElement.createFromTpl(tpl, { prefix: prefix, content : content}); // get

		this.page.addElement(el);

		LSSet('fedojoeditor_html', this.page.getHTMLStructure());

		this.page.redraw();
	}

	showElementOptions() {
		console.log('Show element options');
	}

	setElementsHTML(html) {
		this.page.setHTMLStructure(html);
	}

	redraw() {
		this.page.redrawStructure();
	}

	getElementsHTML() {
		return this.page.getHTMLStructure();
	}

	getJSON() {
		return "JSON";
	}

	generatePrefix() {
		let prefix = Date.now() / 1000;
		return prefix;
	}

	clearHTML() {
		this.page.clearHTML();
		LSSet('fedojoeditor_html', this.page.getHTMLStructure());
		this.page.redraw();
	}
}
