import CommonComponent from '../../commonComponent';
import { domCreator, domSelector } from '../../utils/dom';
import './productMgtPage.css';

class ProductMgtPage extends CommonComponent {
  markUp(): string {
    return `
      <h1>상품 추가하기</h1>
      <input id="product-name-input" type="text" placeholder="상품명"/>
      <input id="product-price-input" type="number" placeholder="가격"/>
      <input id="product-quantity-input" type="number" placeholder="수량"/>
      <button id="product-add-button">추가하기</button>
      <h1>상품 현황</h1>
      <table class="product-list">
          <tr>
              <td>상품명</td>
              <td>가격</td>
              <td>수량</td>
          </tr>
      </table>
    `;
  }
}
export default ProductMgtPage;
