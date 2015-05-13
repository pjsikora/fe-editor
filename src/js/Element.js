class Element {
    constructor(config) {
        this.elements = [];
        this.selector = '';
        this.$addElement;
        this.$removeElement;
        this.$editElement;

        this.elementPrefix = config.prefix;
    }

    bindEvents() {
        this.$addElement.addEventListener('click');
        this.$removeElement.addEventListener();
        this.$editElement.addEventListener();
    }

    prepareElement() {

    }
}