import { SELECTOR } from '../../constants';
import { VendingMachine } from '../../types/vendingMachine';
import { $, delegate } from '../../utils';
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

  // TODO: 투입금 핸들링
  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('TODO');
  }

  // TODO: 아이템 구매하기 핸들링
  handleProductPurchase(event: Event) {
    event.preventDefault();
    console.log('TODO');
  }

  // TODO: 반환금 핸드링
  handleChange(event: Event) {
    event.preventDefault();
    console.log('TODO');
  }

  markUp(vendingMachine: VendingMachine) {
    return this.template.getProductPurchaseView(vendingMachine);
  }
}

export default ProductPurchaseView;
