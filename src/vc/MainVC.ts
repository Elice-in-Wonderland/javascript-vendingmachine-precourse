import ViewController from "../Component/ViewController";
import ProductAddView from "../view/ProductAddView";
import ProductPurchaseView from "../view/ProductPurchaseView";
import MachineCoinManageView from "../view/MachineCoinManageView";
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

export type Tproducts = Array<Product>;

export interface IState {
  coins: [];
  products: Tproducts;
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
    this.container.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (event.target.id === "product-add-button") this.addProduct(event);
    });
  }

  private addProduct(event: Event) {
    event.preventDefault();
    const name = $("#product-name-input", this.getContainer()).value;
    const price = $("#product-price-input", this.getContainer()).value;
    const quantity = $("#product-quantity-input", this.getContainer()).value;
    const product = new Product({ name, price, quantity });
    const newState = { ...this.state };
    newState.products.push(product);
    this.setState(newState);
  }

  protected override state: IState = {
    coins: [],
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
