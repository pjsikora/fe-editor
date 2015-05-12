class Page {
    constructor() {
    	console.log('Page init');

    	this.contentKeeper = document.getElementById("editorWrapper");
    }
    
    loadStructure() {}

    addElement(elementString) {
    	this.contentKeeper.innerHTML += elementString;
    }
    
    removeElement() {}

    getJSONstructure() {}
    setJSONstructure() {}

    
}