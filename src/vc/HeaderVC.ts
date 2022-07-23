import ViewController from "../Component/ViewController";
import { TabType } from "./MainVC";

class HeaderVC extends ViewController {
  constructor(onSelectTab: (newTab: TabType) => void) {
    super();
    this.setEvent(onSelectTab);
  }

  protected override setEvent(onSelectTab: (newTab: TabType) => void) {
    this.container.addEventListener("click", ({ target }) => {
      if (!(target instanceof HTMLButtonElement)) return;
      onSelectTab(target.id as TabType);
    });
  }

  protected override template() {
    return `
        <button id="product-purchase-menu">상품 구매</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-add-menu">상품 관리</button>
    `;
  }
}

export default HeaderVC;
