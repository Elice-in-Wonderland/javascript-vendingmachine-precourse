class CommonComponent {
  element: HTMLElement;
  props;

  constructor({ element, props = {} }) {
    this.element = element;
    this.props = props;
    this.init();
    this.render();
    this.setEvent();
  }

  init(): void {}

  render(): void {
    this.element.innerHTML = this.markUp();
    this.renderCallback();
  }

  markUp(): string {
    return ``;
  }

  renderCallback(): void {}

  setEvent(): void {}
}
export default CommonComponent;
