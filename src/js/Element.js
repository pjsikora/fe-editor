class Element {
    constructor() {
        this.elements = [];
        this.selector = '';
        this.$addElement;
        this.$removeElement;
        this.$editElement;
    }

    bindEvents() {
        this.$addElement.addEventListener('click');
        this.$removeElement.addEventListener();
        this.$editElement.addEventListener();
    }

    addElement() {}

    removeElement() {}
}