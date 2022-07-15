class View {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  show() {
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}

export default View;
