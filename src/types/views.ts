import ProductAddView from '../view/ProductAddView';
import ProductPurchaseView from '../view/ProductPurchaseView';
import TabView from '../view/TabView';
import VendingMachineManageView from '../view/VendingMachineManage';

interface ViewType {
  tabView: TabView;
  productAddView: ProductAddView;
  vendingMachineManageView: VendingMachineManageView;
  productPurchaseView: ProductPurchaseView;
}

export { ViewType };
