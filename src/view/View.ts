import { on } from '../utils/dom';

class View {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  render() {
    this.element.innerHTML = this.markUp();
  }

  markUp() {
    return ``;
  }

  on(eventName: string, handler: (event: Event) => void) {
    on(this.element, eventName, handler);
    return this;
  }
}

export default View;
