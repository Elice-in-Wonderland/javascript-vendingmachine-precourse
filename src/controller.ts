import { SELECTOR } from './constants';
import Store from './model/Store';
import { Product } from './types/vendingMachine';
import { ViewType } from './types/views';
import ProductAddView from './view/ProductAddView';
import ProductPurchaseView from './view/ProductPurchaseView';
import TabView from './view/TabView';
import VendingMachineManageView from './view/VendingMachineManage';

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
  }

  changeTab(tab: string) {
    this.model.setSelectedTab(tab);
    this.render();
  }

  productSubmit(product: Partial<Product>) {
    const products = this.model.addProduct(product);

    // TODO: 상품현황에 대한 View 구현
    // TODO: product add 후에 그 아이템으로 렌더링
    debugger;
    if (products) this.productAddView.render();
  }

  render() {
    const tabId = `#${this.model.selectedTab}`;

    if (tabId === SELECTOR.TAB_MENU.PRODUCT_ADD) {
      this.productAddView.render();
      return;
    }

    if (tabId === SELECTOR.TAB_MENU.VENDING_MACHINE_MANAGE) {
      this.vendingMachineManageView.render();
      return;
    }

    if (tabId === SELECTOR.TAB_MENU.PRODUCT_PURCHASE) {
      this.productPurchaseView.render();
    }
  }
}

export default Controller;
