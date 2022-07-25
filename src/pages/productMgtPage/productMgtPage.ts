import { domCreator, domSelector } from '../../utils/dom';
import './productMgtPage.css';

class ProductMgtPage {
  pageElement: HTMLElement;

  constructor(pageElement: HTMLElement) {
    this.pageElement = pageElement;
  }

  createProductMgtPageElement(): HTMLElement {
    const newNode: HTMLElement = domCreator('div');
    newNode.innerHTML = `
      <h1>상품 추가하기</h1>
      <input id="product__name__value" placeholder="상품명"/>
      <input id="product__price__value" placeholder="가격"/>
      <input id="product__cnt__value" placeholder="수량"/>
      <button id="product__add__btn">추가하기</button>
      <h1>상품 현황</h1>
      <table class="product__list">
          <tr>
              <td>상품명</td>
              <td>가격</td>
              <td>수량</td>
          </tr>
          <div class="product__list__elements"></div>
      </table>
    `;
    return newNode;
  }

  addProductMgtPageElement(newNode: HTMLElement): void {
    this.pageElement?.appendChild(newNode);
  }

  addProductTableElement(
    productName: string,
    productPrice: number,
    productCount: number,
  ) {
    const productListElements = domSelector('.product__list__elements');
    const newProductElement = domCreator('tr');
    const productInfoList = [productName, productPrice, productCount];
    const fragment = new DocumentFragment();

    productInfoList.forEach((info) => {
      const newTdElement = domCreator('td');
      newTdElement.innerHTML = info;
      fragment.appendChild(newTdElement);
    });

    newProductElement.appendChild(fragment);
    productListElements?.appendChild(newProductElement);
  }
}
export default ProductMgtPage;
