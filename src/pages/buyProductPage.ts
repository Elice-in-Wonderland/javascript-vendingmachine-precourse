import { domCreator } from '../utils/dom';

class BuyProductPage {
  pageElement: HTMLElement;

  constructor(pageElement: HTMLElement) {
    this.pageElement = pageElement;
  }

  createBuyProductPageElement(): HTMLElement {
    const newNode: HTMLElement = domCreator('div');
    newNode.innerHTML = `
        <div>butProductPage</div>
    `;

    return newNode;
  }

  addBuyProductPageElement(newNode: HTMLElement): void {
    this.pageElement?.appendChild(newNode);
  }
}
export default BuyProductPage;
