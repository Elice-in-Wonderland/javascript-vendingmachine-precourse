import { COIN_LIST, SELECTOR } from '../constants';
import { Product, VendingMachine } from '../types/vendingMachine';
import {
  isValidAmount,
  isValidProduct,
  removeFirstLetter,
  isEnoughAmount,
} from '../utils';
import { getRandomNumber } from '../utils/randomCoinMaker';

class Store {
  selectedTab: string;

  vendingMachine: VendingMachine;

  constructor() {
    this.selectedTab = removeFirstLetter(SELECTOR.TAB_MENU.PRODUCT_ADD); // 처음 시작할 탭
    this.vendingMachine = {
      inputAmount: 0,
      coins: { 500: 0, 100: 0, 50: 0, 10: 0 },
      products: [],
    };
  }

  setSelectedTab(tab: string) {
    this.selectedTab = tab;
  }

  addProduct(product: Partial<Product>) {
    if (!isValidProduct(product, this.vendingMachine.products)) return null;

    this.vendingMachine.products = [
      product as Product,
      ...this.vendingMachine.products,
    ];

    return this.getProducts();
  }

  addCoins(amount?: number) {
    if (!isValidAmount(amount)) return null;

    let insertedAmount = amount as number;

    while (insertedAmount > 0) {
      const randomCoin = getRandomNumber(COIN_LIST);
      // eslint-disable-next-line no-continue
      if (!isEnoughAmount(insertedAmount, randomCoin)) continue;

      this.vendingMachine.coins[randomCoin] += 1;
      insertedAmount -= randomCoin;
    }

    return this.getVendingMachine();
  }

  getProducts() {
    return this.vendingMachine.products;
  }

  getVendingMachine() {
    return this.vendingMachine;
  }
}

export default Store;
