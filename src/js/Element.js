class Element {
    constructor(config) {
        this.elements = [];
        this.elHTML;
        this.selector = '';
        this.$addElement;
        this.$removeElement;
        this.$editElement;


        // this.elementPrefix = config.prefix ? config.prefix : '000';


    }

    createFromTpl(template, content) {
      let tmpEl = document.createElement('div');
      tmpEl.innerHTML = template;
      tmpEl = tmpEl.innerHTML;

      this.elHTML = template; // TODO Recreate it after parsed with template
      return this.elHTML;
    }

    bindEvents() {
        this.$addElement.addEventListener();
        this.$removeElement.addEventListener();
        this.$editElement.addEventListener();
    }

    prepareElement() {

    }
}
