import { SELECTOR } from '../../constants';
import { Product } from '../../types/vendingMachine';
import { removeFirstLetter } from '../../utils';

class Template {
  getProductAdd(products: Product[]) {
    return `
      <section>
        <h2>상품 추가하기</h2>
        <form id=${removeFirstLetter(SELECTOR.PRODUCT_ADD.FORM)}>
          <input name="name" id=${removeFirstLetter(
            SELECTOR.PRODUCT_ADD.NAME_INPUT,
          )} placeholder="상품명"/>
          <input name="price" type="number" id=${removeFirstLetter(
            SELECTOR.PRODUCT_ADD.PRICE_INPUT,
          )} placeholder="가격"/>
          <input name="quantity" type="number" id=${removeFirstLetter(
            SELECTOR.PRODUCT_ADD.QUANTITY_INPUT,
          )} placeholder="수량"/>
          <button id=${removeFirstLetter(
            SELECTOR.PRODUCT_ADD.BUTTON,
          )}>추가하기</button>
        </form>
      </section>
      ${this.getProductList(products)}
    `;
  }

  getProductList(products: Product[]) {
    return `
      <section>
        <h2>상품 현황</h2>
        <table>
          <tr>
            <th>상품명</th><th>가격</th><th>수량</th>
          </tr>
          ${products.map((product) => this.getProductItem(product)).join('')}
        </table>
      </section>
    `;
  }

  getProductItem = ({ name, price, quantity }: Product) => {
    return `
      <tr class=${removeFirstLetter(SELECTOR.PRODUCT.MANAGE_ITEM)}>
        <td class=${removeFirstLetter(
          SELECTOR.PRODUCT.MANAGE_NAME,
        )}>${name}</td>
        <td class=${removeFirstLetter(
          SELECTOR.PRODUCT.MANAGE_PRICE,
        )}>${price}</td>
        <td class=${removeFirstLetter(
          SELECTOR.PRODUCT.MANAGE_QUANTITY,
        )}>${quantity}</td>
      </tr>
    `;
  };
}

export default Template;
