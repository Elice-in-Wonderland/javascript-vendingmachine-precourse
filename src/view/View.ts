import { on } from '../utils/dom';

class View {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  render(item?: any) {
    this.element.innerHTML = this.markUp(item);
  }

  markUp(item?: any) {
    return ``;
  }

  on(eventName: string, handler: (event: Event) => void) {
    on(this.element, eventName, handler);
    return this;
  }
}

export default View;
