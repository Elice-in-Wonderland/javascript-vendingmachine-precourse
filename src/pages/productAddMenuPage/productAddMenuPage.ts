import CommonComponent from '../../commonComponent';
import { domSelector, addEventListenerToTarget } from '../../utils/dom';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../utils/localStorage';
import { isProductValid } from '../../utils/validate';
import './productAddMenuPage.css';

class ProductAddMenuPage extends CommonComponent {
  markUp(): string {
    return `
      <h1>상품 추가하기</h1>
      <input id="product-name-input" type="text" placeholder="상품명"/>
      <input id="product-price-input" type="number" placeholder="가격"/>
      <input id="product-quantity-input" type="number" placeholder="수량"/>
      <button id="product-add-button">추가하기</button>
      <h1>상품 현황</h1>
      <table id="product-list">
          
      </table>
    `;
  }

  createProductList(): string {
    const products = getLocalStorageItem('products');
    if (products === null) return '';
    return `
      <tr>
        <td>상품명</td>
        <td>가격</td>
        <td>수량</td>
      </tr>
      ${products
        .map(
          ({ productName, productPrice, productQuantity }) =>
            `<tr>
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td>${productQuantity}</td>
          </tr>`,
        )
        .join('')}
    `;
  }

  renderProducts(): void {
    domSelector('#product-list').innerHTML = this.createProductList();
  }

  renderCallback(): void {
    this.renderProducts();
  }

  onProductAddButtonClick(): void {
    let newProduct = {
      productName: domSelector('#product-name-input', this.element).value,
      productPrice: domSelector('#product-price-input', this.element).value,
      productQuantity: domSelector('#product-quantity-input', this.element)
        .value,
    };

    if (
      !isProductValid(
        newProduct.productName,
        newProduct.productPrice,
        newProduct.productQuantity,
      )
    ) {
      return;
    }

    let productList = getLocalStorageItem('products');

    if (productList === null) {
      setLocalStorageItem('products', [newProduct]);
      return;
    }

    productList = [...productList, newProduct];
    setLocalStorageItem('products', productList);
    this.renderCallback();
  }

  setEvent(): void {
    addEventListenerToTarget(
      domSelector('#product-add-button'),
      'click',
      this.onProductAddButtonClick.bind(this),
    );
  }
}
export default ProductAddMenuPage;
