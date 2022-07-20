import { domCreator } from '../utils/dom';

class ProductMgtPage {
  pageElement: HTMLElement;

  constructor(pageElement: HTMLElement) {
    this.pageElement = pageElement;
    this.addProductMgtPageElement(this.createProductMgtPageElement());
  }

  createProductMgtPageElement(): HTMLElement {
    const newNode: HTMLElement = domCreator('div');
    newNode.innerHTML = 'productMgtPage';
    return newNode;
  }

  addProductMgtPageElement(newNode: HTMLElement): void {
    this.pageElement?.appendChild(newNode);
  }
}
export default ProductMgtPage;
