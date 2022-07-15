import Controller from './controller';
import VendingMachine from './model/VendingMachine';
import { $, createElement } from './utils';
import ProductAddView from './view/ProductAddView';
import ProductPurchaseView from './view/ProductPurchaseView';
import TabView from './view/TabView';
import VendingMachineManageView from './view/VendingMachineManage';

function main() {
  ($('#app') as HTMLDivElement).appendChild(
    createElement('header', { id: 'header' }),
  );

  ($('#app') as HTMLDivElement).appendChild(
    createElement('main', { id: 'main' }),
  );

  const model = new VendingMachine();

  const views = {
    tabView: new TabView(),
    productAddView: new ProductAddView(),
    vendingMachineManageView: new VendingMachineManageView(),
    productPurchaseView: new ProductPurchaseView(),
  };

  new Controller(model, views);
}

main();
