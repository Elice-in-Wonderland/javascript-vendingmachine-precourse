import { domCreator, domSelector } from '../utils/dom';

class ChargeChangePage {
  pageElement: HTMLElement;

  constructor(pageElement: HTMLElement) {
    this.pageElement = pageElement;
    this.addChargeChangePageElement(this.createChargeChangePageElement());
  }

  createChargeChangePageElement(): HTMLElement {
    const newNode: HTMLElement = domCreator('div');
    newNode.innerHTML = 'chargeChangePage';
    return newNode;
  }

  addChargeChangePageElement(newNode: HTMLElement): void {
    this.pageElement?.appendChild(newNode);
  }
}
export default ChargeChangePage;
