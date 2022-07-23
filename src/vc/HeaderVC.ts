import { TabType } from "./MainVC";

class HeaderVC {
  private container = document.createElement("div");

  constructor(onSelectTab: (newTab: TabType) => void) {
    this.container.innerHTML = `
        <button id="product-purchase-menu">상품 구매</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-add-menu">상품 관리</button>
    `;
    this.container.addEventListener("click", ({ target }) => {
      if (target instanceof HTMLButtonElement) {
        onSelectTab(target.id as TabType);
      }
    });
  }

  public getContainer() {
    return this.container;
  }
}

export default HeaderVC;
