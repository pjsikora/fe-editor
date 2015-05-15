class Page {
    constructor(elementID) {
      console.log('Page init');
      this.elementsCollection = {};
      this.HTMLStructure = '';
      this.JSONStructure = '';
    	this.contentKeeper = document.getElementById(elementID);
    }

    init() {
      return 1;
    }

    addElement(elementString) {
      this.HTMLStructure += elementString;
    }

    removeElement() {

    }

    clearHTML() {
      this.HTMLStructure = '';
    }

    // TODO
    getJSONStructure() {

    }

    // TODO
    setJSONStructure() {

    }

    redraw() {
      this.contentKeeper.innerHTML = this.HTMLStructure;
    }

    getHTMLStructure() {
      return this.HTMLStructure;
    }

    addHTMLStructure(structure) {
      this.HTMLStructure += structure;
    }

    setHTMLStructure(structure) {
      this.HTMLStructure = structure;
    }

}
