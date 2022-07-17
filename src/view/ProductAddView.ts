import { SELECTOR } from '../constants';
import {
  $,
  removeFirstLetter,
  formDataToObject,
  delegate,
  emit,
} from '../utils';
import View from './View';

class ProductAddView extends View {
  constructor() {
    super($(SELECTOR.MAIN) as HTMLElement);
    this.bindEvents();
  }

  bindEvents() {
    delegate(this.element, 'submit', SELECTOR.PRODUCT_ADD.FORM, (event) =>
      this.handleSubmit(event),
    );
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const { name, price, quantity } = formDataToObject(
      new FormData(event.target as HTMLFormElement),
    );

    const product = {
      name,
      price: price ? Number(price) : undefined,
      quantity: quantity ? Number(quantity) : undefined,
    };

    emit(this.element, '@add', { product });
  }

  markUp() {
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
      <section>
        <h2>상품 현황</h2>
      </section>
    `;
  }
}

export default ProductAddView;
