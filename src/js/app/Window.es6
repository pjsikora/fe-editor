export class Window {
  constructor() {
    this.$windowOverlay = document.getElementById("windowOverlay");
    this.$window = document.getElementById("window");
  }

  open() {
    this.$window.style.display = "block";
    this.$windowOverlay.style.display = "block";
  }

  close() {
    this.$window.style.display = "none";
    this.$windowOverlay.style.display = "none";
  }
}
