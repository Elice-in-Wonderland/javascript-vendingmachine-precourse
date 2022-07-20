import { domCreator } from '../utils/dom';

class BuyProductPage {
  pageElement: HTMLElement;

  constructor(pageElement: HTMLElement) {
    this.pageElement = pageElement;
    this.addBuyProductPageElement(this.createBuyProductPageElement());
  }

  createBuyProductPageElement(): HTMLElement {
    const newNode: HTMLElement = domCreator('div');
    newNode.innerHTML = 'buyProductPage';

    return newNode;
  }

  addBuyProductPageElement(newNode: HTMLElement): void {
    this.pageElement?.appendChild(newNode);
  }
}
export default BuyProductPage;
