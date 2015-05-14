class Page {
    constructor(elementID) {
      console.log('Page init');
      this.elementsCollection = {};
      this.HTMLStructure = '';
    	this.contentKeeper = document.getElementById(elementID);
    }

    init() {
      return 1;
    }

    loadStructure() {

    }

    addElement(elementString) {
      this.HTMLStructure += elementString;
    }

    removeElement() {

    }

    getJSONStructure() {

    }
    setJSONStructure() {

    }

    redrawStructure() {
      this.contentKeeper.innerHTML = this.HTMLStructure;
    }

    getHTMLStructure() {
      return this.HTMLStructure;
    }

    setHTMLStructure(structure) {
      this.HTMLStructure = structure;
    }

}
