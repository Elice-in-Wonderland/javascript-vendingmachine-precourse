import { SELECTOR } from '../constants';
import { $, removeFirstLetter } from '../utils';
import { delegate } from '../utils/dom';
import View from './View';

export function emit(target: HTMLElement, eventName: string, detail: any) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

class TabView extends View {
  constructor() {
    super($('#header') as HTMLHeadElement);
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    delegate(this.element, 'click', 'button', (event) =>
      this.handleTabClick(event),
    );
  }

  handleTabClick(event: Event) {
    const tab = (event.target as HTMLButtonElement).id;
    emit(this.element, '@change', { tab });
  }

  markUp() {
    return `
      <h1>🥤자판기🥤</h1>
      <ul>
        <li>
          <button id=${removeFirstLetter(
            SELECTOR.TAB_MENU.PRODUCT_ADD,
          )}>상품 관리</button>
        </li>
        <li>
          <button id=${removeFirstLetter(
            SELECTOR.TAB_MENU.VENDING_MACHINE_MANAGE,
          )}>잔돈 충전</button>
        </li>
        <li>
          <button id=${removeFirstLetter(
            SELECTOR.TAB_MENU.PRODUCT_PURCHASE,
          )}>상품 구매</button>
        </li>
      </ul>
    `;
  }
}

export default TabView;
