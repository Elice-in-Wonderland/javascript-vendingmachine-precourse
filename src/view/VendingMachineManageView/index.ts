import { SELECTOR } from '../../constants';
import { VendingMachine } from '../../types/vendingMachine';
import { $, delegate, emit, formDataToObject } from '../../utils';
import View from '../View';
import Template from './Template';

class VendingMachineManageView extends View {
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
      SELECTOR.VENDING_MACHINE_MANAGE.CHARGE_FORM,
      (event) => this.handleSubmit(event),
    );
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const { amount } = formDataToObject(
      new FormData(event.target as HTMLFormElement),
    );

    emit(this.element, '@addCoins', {
      amount: amount ? Number(amount) : undefined,
    });
  }

  markUp(vendingMachine: VendingMachine) {
    return this.template.getVendingMachineManage(vendingMachine);
  }
}

export default VendingMachineManageView;
