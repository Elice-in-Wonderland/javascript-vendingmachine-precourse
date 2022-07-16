import { SELECTOR } from './constants';
import Store from './model/Store';
import { ViewType } from './types/views';
import ProductAddView from './view/ProductAddView';
import TabView from './view/TabView';
import VendingMachineManageView from './view/VendingMachineManage';

class Controller {
  model: Store;

  tabView: TabView;

  productAddView: ProductAddView;

  vendingMachineManageView: VendingMachineManageView;

  productPurchaseView: ProductAddView;

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
  }

  changeTab(tab: string) {
    this.model.setSelectedTab(tab);
    this.render();
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

  // TODO: 상품 추가하기에 대한 로직 구현
  // TODO: 상품현황에 대한 View 구현
}

export default Controller;
