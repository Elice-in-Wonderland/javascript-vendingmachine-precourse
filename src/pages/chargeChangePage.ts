import { domCreator } from '../utils/dom';

class ChargeChangePage {
  pageElement: HTMLElement;

  constructor(pageElement: HTMLElement) {
    this.pageElement = pageElement;
  }

  createChargeChangePageElement(): HTMLElement {
    const newNode: HTMLElement = domCreator('div');
    newNode.innerHTML = `
        <div>chargeChangePage</div>
    `;
    return newNode;
  }

  addChargeChangePageElement(newNode: HTMLElement): void {
    this.pageElement?.appendChild(newNode);
  }
}
export default ChargeChangePage;
