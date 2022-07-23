import ViewController from "../Component/ViewController";
import ProductAddView from "../view/ProductAddView";
import ProductPurchaseView from "../view/ProductPurchaseView";
import MachineCoinManageView from "../view/MachineCoinManageView";

export type TabType =
  | "product-purchase-menu"
  | "vending-machine-manage-menu"
  | "product-add-menu";

const Views = {
  "product-purchase-menu": ProductPurchaseView,
  "vending-machine-manage-menu": MachineCoinManageView,
  "product-add-menu": ProductAddView,
};

class MainVC extends ViewController {
  public override changeView(selectedTab: TabType) {
    this.container.innerHTML = "";
    this.container.appendChild(Views[selectedTab].getContainer());
  }
}

export default MainVC;
