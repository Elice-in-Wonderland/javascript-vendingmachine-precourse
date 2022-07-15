import { SELECTOR } from './constants';
import VendingMachine from './model/VendingMachine';
import { ViewType } from './types/views';
import ProductAddView from './view/ProductAddView';
import TabView from './view/TabView';
import VendingMachineManageView from './view/VendingMachineManage';

class Controller {
  model: VendingMachine;

  tabView: TabView;

  productAddView: ProductAddView;

  vendingMachineManageView: VendingMachineManageView;

  productPurchaseView: ProductAddView;

  constructor(model: VendingMachine, views: ViewType) {
    this.model = model;
    this.tabView = views.tabView;
    this.productAddView = views.productAddView;
    this.vendingMachineManageView = views.vendingMachineManageView;
    this.productPurchaseView = views.productPurchaseView;

    this.subscribeEvent();
    this.render();
  }

  subscribeEvent() {
    // CustomEvent type TODO
    this.tabView.on('@change', (event: any) =>
      this.changeTab(event.detail.tab),
    );
  }

  changeTab(tab: string) {
    this.model.setSelectedTab(tab);
    this.render();
  }

  render() {
    const tabId = `#${this.model.selectedTab}`;
    console.log(tabId);

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

  // TODO: 버블링을 활용한 탭 메뉴 핸들링
  // 상품 관리, 잔돈 충전, 상품 구매

  // TODO: 렌더링할 때 모델의 정보가 필요해서 모델을 주입
  // TODO: 뷰에서는 전달된 모델로 화면에 렌더링
}

export default Controller;
