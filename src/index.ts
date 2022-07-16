import { SELECTOR } from './constants';
import Controller from './controller';
import Store from './model/Store';
import { $, createElement, removeFirstLetter } from './utils';
import TabView from './view/TabView';
import ProductAddView from './view/ProductAddView';
import VendingMachineManageView from './view/VendingMachineManage';
import ProductPurchaseView from './view/ProductPurchaseView';

function initDom() {
  ($(SELECTOR.ROOT) as HTMLDivElement).appendChild(
    createElement('header', { id: removeFirstLetter(SELECTOR.HEADER) }),
  );

  ($(SELECTOR.ROOT) as HTMLDivElement).appendChild(
    createElement('main', { id: removeFirstLetter(SELECTOR.MAIN) }),
  );
}

function main() {
  initDom();
  const model = new Store();

  const views = {
    tabView: new TabView(),
    productAddView: new ProductAddView(),
    vendingMachineManageView: new VendingMachineManageView(),
    productPurchaseView: new ProductPurchaseView(),
  };

  // eslint-disable-next-line no-new
  new Controller(model, views);
}

main();
