import { domSelector, addEventListenerToTarget } from '../utils/dom';
import { SELECTOR } from '../constants/index';
import CommonComponent from '../commonComponent';

class Navbar extends CommonComponent {
  markUp(): string {
    return `
      <nav id="navbar">
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
      </nav>
    `;
  }

  setEvent() {
    addEventListenerToTarget(
      domSelector(SELECTOR.PRODUCT_ADD_MENU),
      'click',
      () => this.props.onProductMgtPageClicked(),
    );
    addEventListenerToTarget(
      domSelector(SELECTOR.VENDING_MACHINE_MANAGE_MENU),
      'click',
      () => this.props.onChargeChangePageClicked(),
    );
    addEventListenerToTarget(
      domSelector(SELECTOR.PRODUCT_PURCHASE_MENU),
      'click',
      () => this.props.onBuyProductPageClicked(),
    );
  }
}

export default Navbar;
