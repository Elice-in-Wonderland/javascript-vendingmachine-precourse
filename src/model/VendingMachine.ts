import { SELECTOR } from '../constants';
import { removeFirstLetter } from '../utils';

class VendingMachine {
  selectedTab: string;

  inputAmount: number;

  coins: [];

  products: [];

  constructor() {
    this.selectedTab = removeFirstLetter(SELECTOR.TAB_MENU.PRODUCT_ADD); // 처음 시작할 탭
    this.inputAmount = 0;
    this.coins = [];
    this.products = [];
  }

  setSelectedTab(tab: string) {
    this.selectedTab = tab;
  }
}

export default VendingMachine;
