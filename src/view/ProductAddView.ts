import { SELECTOR } from '../constants';
import { $, removeFirstLetter } from '../utils';
import View from './View';

class ProductAddView extends View {
  constructor() {
    super($(SELECTOR.MAIN) as HTMLElement);
  }

  markUp() {
    return `
      <section>
        <h2>상품 추가하기</h2>
        <form id=${removeFirstLetter(SELECTOR.PRODUCT_ADD.FORM)}>
          <input id=${removeFirstLetter(
            SELECTOR.PRODUCT_ADD.NAME_INPUT,
          )} placeholder="상품명"/>
          <input type="number" id=${removeFirstLetter(
            SELECTOR.PRODUCT_ADD.PRICE_INPUT,
          )} placeholder="가격"/>
          <input type="number" id=${removeFirstLetter(
            SELECTOR.PRODUCT_ADD.QUANTITY_INPUT,
          )} placeholder="수량"/>
          <button id=${removeFirstLetter(
            SELECTOR.PRODUCT_ADD.BUTTON,
          )}>추가하기</button>
        </form>
      </section>
      <section>
        <h2>상품 현황</h2>
      </section>
    `;
  }
}

export default ProductAddView;
