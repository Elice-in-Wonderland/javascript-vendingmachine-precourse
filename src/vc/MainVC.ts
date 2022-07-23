import ViewController from "../Component/ViewController";
import ProductAddView from "../view/ProductAddView";
import ProductPurchaseView from "../view/ProductPurchaseView";
import MachineCoinManageView from "../view/MachineCoinManageView";
import Coins from "../model/Coins";
import { $ } from "../util/index";
import Product from "../model/Product";

export type TabType =
  | "product-purchase-menu"
  | "vending-machine-manage-menu"
  | "product-add-menu";

export type TProduct = {
  name: string;
  price: number;
  quantity: number;
};

export interface IState {
  coins: Coins;
  products: Array<Product>;
  money: number;
}

const Views = {
  "product-purchase-menu": ProductPurchaseView,
  "vending-machine-manage-menu": MachineCoinManageView,
  "product-add-menu": ProductAddView,
};

class MainVC extends ViewController {
  currentView!: ProductPurchaseView | MachineCoinManageView | ProductAddView;
  selectedTab!: TabType;

  constructor() {
    super();
    this.setEvent();
  }

  public override changeView(selectedTab: TabType) {
    this.currentView = new Views[selectedTab](this.state);
    this.selectedTab = selectedTab;
    this.updateView();
  }

  protected updateView() {
    this.container.innerHTML = "";
    this.container.appendChild(this.currentView.getContainer());
  }

  protected override setEvent(): void {
    this.container.addEventListener("click", ({ target }) => {
      if (!(target instanceof HTMLElement)) return;
      if (target.id === "product-add-button") this.addProduct();
      if (target.id === "vending-machine-charge-button") this.addMachineMoney();
      if (target.id === "charge-button") this.addUserMoney();
      if (target.id === "purchase-button") this.purchaseProduct();
      if (target.id === "coin-return-button") this.getReturnMoney();
    });
  }

  private addProduct() {
    const name = $("#product-name-input", this.getContainer()).value;
    const price = Number($("#product-price-input", this.getContainer()).value);
    const quantity = Number(
      $("#product-quantity-input", this.getContainer()).value
    );
    if (!name || !price || !quantity) return;
    const product = new Product({ name, price, quantity });
    const newState = { ...this.state };
    newState.products.push(product);
    this.setState(newState);
  }

  private addMachineMoney() {
    const money = Number(
      $("#vending-machine-charge-input", this.getContainer()).value
    );
    if (!(money % 10 === 0)) return;
    const newState = { ...this.state };
    newState.coins.setCoinsByMoney(money);
    this.setState(newState);
  }

  private addUserMoney() {
    const money = Number($("#charge-input", this.getContainer()).value);
    if (!(money % 10 === 0)) return;
    const newState = { ...this.state };
    newState.money += money;
    this.setState(newState);
  }

  private purchaseProduct() {}

  private getReturnMoney() {}

  protected override state: IState = {
    coins: new Coins(),
    products: [],
    money: 0,
  };

  protected override setState(nextState: IState): void {
    this.state = {
      ...nextState,
    };
    this.changeView(this.selectedTab);
  }
}

export default MainVC;
