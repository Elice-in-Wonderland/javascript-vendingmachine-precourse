import { SELECTOR } from '../../constants';
import { Product } from '../../types/vendingMachine';
import { formDataToObject } from '../../utils/common';
import { $, delegate, emit } from '../../utils/dom';
import View from '../View';
import Template from './Template';

class ProductAddView extends View {
  template: Template;

  constructor() {
    super($(SELECTOR.MAIN) as HTMLElement);
    this.template = new Template();
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

  markUp(products: Product[]) {
    return this.template.getProductAdd(products);
  }
}

export default ProductAddView;
