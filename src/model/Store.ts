import { SELECTOR } from '../constants';
import { Product, VendingMachine } from '../types/vendingMachine';
import { isValidProduct, removeFirstLetter } from '../utils';

class Store {
  selectedTab: string;

  vendingMachine: VendingMachine;

  constructor() {
    this.selectedTab = removeFirstLetter(SELECTOR.TAB_MENU.PRODUCT_ADD); // 처음 시작할 탭
    this.vendingMachine = {
      inputAmount: 0,
      coins: { '500': 0, '100': 0, '50': 0, '10': 0 },
      products: [],
    };
  }

  setSelectedTab(tab: string) {
    this.selectedTab = tab;
  }

  addProduct(product: Partial<Product>) {
    if (!isValidProduct(product, this.vendingMachine.products)) return false;

    this.vendingMachine.products = [
      product as Product,
      ...this.vendingMachine.products,
    ];

    return this.vendingMachine.products;
  }
}

export default Store;
