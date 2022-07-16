import { SELECTOR } from '../constants';
import { VendingMachine } from '../types/vendingMachine';
import { removeFirstLetter } from '../utils';

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
}

export default Store;
