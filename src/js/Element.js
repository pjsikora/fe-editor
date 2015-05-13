class Element {
    constructor(config) {
        this.elements = [];
        this.$el;
        this.selector = '';
        this.$addElement;
        this.$removeElement;
        this.$editElement;


        // this.elementPrefix = config.prefix ? config.prefix : '000';


    }

    createFromTpl(template, content) {


      let tmpEl = document.createElement('div');
      console.log(tmpEl);
      tmpEl.innerHTML = template;
      console.log(tmpEl);
      console.log(tmpEl.innerHTML);
      console.log(tmpEl.outerHTML);
      tmpEl = tmpEl.innerHTML;

      console.log(tmpEl);
      // console.log(el.innerHTML);


      // tmpEl.setAttribute("data-prefix", 'settedPrefix');
      console.log(tmpEl);
      return this.$el;
    }

    bindEvents() {
        this.$addElement.addEventListener();
        this.$removeElement.addEventListener();
        this.$editElement.addEventListener();
    }

    prepareElement() {

    }
}
