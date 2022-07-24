/* eslint-disable no-restricted-syntax */
import { SELECTOR } from '../../constants';
import { VendingMachine } from '../../types/vendingMachine';
import { formDataToObject } from '../../utils/common';
import { $, delegate, emit, getDataSet } from '../../utils/dom';
import View from '../View';
import Template from './Template';

class ProductPurchaseView extends View {
  template: Template;

  constructor() {
    super($(SELECTOR.MAIN) as HTMLElement);
    this.template = new Template();
    this.bindEvents();
  }

  bindEvents() {
    delegate(
      this.element,
      'submit',
      SELECTOR.PRODUCT_PURCHASE.CHARGE_FORM,
      (event) => this.handleSubmit(event),
    );

    delegate(this.element, 'click', SELECTOR.PRODUCT.PURCHASE_BUTTON, (event) =>
      this.handleProductPurchase(event),
    );

    delegate(
      this.element,
      'click',
      SELECTOR.PRODUCT_PURCHASE.COIN_RETURN_BUTTON,
      (event) => this.handleChange(event),
    );
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const { amount } = formDataToObject(
      new FormData(event.target as HTMLFormElement),
    );

    emit(this.element, '@inputMoney', {
      amount: amount ? Number(amount) : undefined,
    });
  }

  handleProductPurchase(event: Event) {
    event.preventDefault();

    const { productName: name, productPrice: price } = getDataSet(
      (event.target as HTMLButtonElement).closest(SELECTOR.PRODUCT.MANAGE_ITEM),
      ['productName', 'productPrice'],
    );

    emit(this.element, '@productPurchase', {
      product: { name, price: Number(price) },
    });
  }

  handleChange(event: Event) {
    event.preventDefault();

    emit(this.element, '@change', {});
  }

  markUp(vendingMachine: VendingMachine) {
    return this.template.getProductPurchaseView(vendingMachine);
  }
}

export default ProductPurchaseView;
