import { SELECTOR } from './constants';
import Store from './model/Store';
import { Product } from './types/vendingMachine';
import { ViewType } from './types/views';
import ProductAddView from './view/ProductAddView';
import ProductPurchaseView from './view/ProductPurchaseView';
import TabView from './view/TabView';
import VendingMachineManageView from './view/VendingMachineManageView';

class Controller {
  model: Store;

  tabView: TabView;

  productAddView: ProductAddView;

  vendingMachineManageView: VendingMachineManageView;

  productPurchaseView: ProductPurchaseView;

  constructor(model: Store, views: ViewType) {
    this.model = model;
    this.tabView = views.tabView;
    this.productAddView = views.productAddView;
    this.vendingMachineManageView = views.vendingMachineManageView;
    this.productPurchaseView = views.productPurchaseView;

    this.subscribeEvent();
    this.render();
  }

  subscribeEvent() {
    this.tabView.on('@change', (event: Event) =>
      this.changeTab((event as CustomEvent).detail.tab),
    );

    this.productAddView.on('@add', (event: Event) =>
      this.productSubmit((event as CustomEvent).detail.product),
    );

    this.vendingMachineManageView.on('@addCoins', (event: Event) =>
      this.vendingMachineManageSubmit((event as CustomEvent).detail.amount),
    );

    this.productPurchaseView.on('@inputMoney', (event: Event) =>
      this.productPurchaseSubmit((event as CustomEvent).detail.amount),
    );

    this.productPurchaseView.on('@productPurchase', (event: Event) =>
      this.handleProductPurchase((event as CustomEvent).detail.product),
    );

    this.productPurchaseView.on('@change', this.handleChange.bind(this));
  }

  changeTab(tab: string) {
    this.model.setSelectedTab(tab);
    this.render();
  }

  productSubmit(product: Partial<Product>) {
    if (!this.model.addProduct(product)) return;

    this.productAddView.render(this.model.getProducts());
  }

  vendingMachineManageSubmit(amount?: number) {
    if (!this.model.addCoins(amount)) return;

    this.vendingMachineManageView.render(this.model.getVendingMachine());
  }

  productPurchaseSubmit(amount?: number) {
    if (!this.model.inputMoney(amount)) return;

    this.productPurchaseView.render(this.model.getVendingMachine());
  }

  handleProductPurchase(product: Pick<Product, 'name' | 'price'>) {
    if (!this.model.productPurchase(product)) return;

    this.productPurchaseView.render(this.model.getVendingMachine());
  }

  handleChange() {
    if (!this.model.returnChange()) return;

    this.productPurchaseView.render(this.model.getVendingMachine());
  }

  render() {
    const tabId = `#${this.model.selectedTab}`;

    if (tabId === SELECTOR.TAB_MENU.PRODUCT_ADD) {
      this.productAddView.render(this.model.getProducts());
      return;
    }

    if (tabId === SELECTOR.TAB_MENU.VENDING_MACHINE_MANAGE) {
      this.vendingMachineManageView.render(this.model.getVendingMachine());
      return;
    }

    if (tabId === SELECTOR.TAB_MENU.PRODUCT_PURCHASE) {
      this.productPurchaseView.render(this.model.getVendingMachine());
    }
  }
}

export default Controller;
