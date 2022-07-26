/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { COIN_LIST, ERROR_MESSAGE, SELECTOR } from '../constants';
import { Product, VendingMachine } from '../types/vendingMachine';
import { entries, removeFirstLetter } from '../utils/common';
import { getItem, setItem } from '../utils/localStorage';
import { getRandomNumber } from '../utils/randomCoinMaker';
import {
  isEnoughAmount,
  isValidAmount,
  isValidProduct,
} from '../utils/validate';

function descendingOrder(arr: Array<[number, number]>) {
  return arr.sort((a, b) => b[0] - a[0]);
}

const initVendingMachine = {
  inputAmount: 0,
  coins: { 500: 0, 100: 0, 50: 0, 10: 0 },
  products: [],
  changeCoins: { 500: 0, 100: 0, 50: 0, 10: 0 },
};

class Store {
  selectedTab: string;

  vendingMachine: VendingMachine;

  constructor() {
    this.selectedTab = removeFirstLetter(SELECTOR.TAB_MENU.PRODUCT_ADD); // 처음 시작할 탭
    this.vendingMachine = getItem('vendingMachine') || initVendingMachine;
  }

  setSelectedTab(tab: string) {
    this.selectedTab = tab;
  }

  addProduct(product: Partial<Product>) {
    if (!isValidProduct(product, this.vendingMachine.products)) return false;

    this.setVendingMachine({
      products: [product as Product, ...this.vendingMachine.products],
    });

    return true;
  }

  addCoins(amount?: number) {
    if (!isValidAmount(amount)) return false;

    let insertedAmount = amount as number;
    const newCoins = { ...this.vendingMachine.coins };

    while (insertedAmount > 0) {
      const randomCoin = getRandomNumber(COIN_LIST);
      if (!isEnoughAmount(insertedAmount, randomCoin)) continue;

      newCoins[randomCoin] += 1;
      insertedAmount -= randomCoin;
    }

    this.setVendingMachine({
      coins: newCoins,
    });

    return true;
  }

  inputMoney(amount?: number) {
    if (!isValidAmount(amount)) return false;

    this.setVendingMachine({
      inputAmount: this.vendingMachine.inputAmount + (amount as number),
    });

    return true;
  }

  productPurchase(product: Pick<Product, 'name' | 'price'>) {
    const { name, price } = product;

    if (!isEnoughAmount(this.vendingMachine.inputAmount, price)) {
      alert(ERROR_MESSAGE.PRODUCT_PURCHASE_ERROR);
      return false;
    }

    this.setVendingMachine({
      inputAmount: this.vendingMachine.inputAmount - price,
      products: this.vendingMachine.products.map((oldProduct) => {
        if (oldProduct.name === name) {
          oldProduct.quantity -= 1;
        }

        return oldProduct;
      }),
    });

    return true;
  }

  returnChange() {
    this.calculateChange();
    return true;
  }

  calculateChange() {
    let { inputAmount } = this.vendingMachine;
    const newCoins = { ...this.vendingMachine.coins };
    const newChangeCoins = { ...this.vendingMachine.changeCoins };

    for (const [unit, count] of descendingOrder(
      entries(this.vendingMachine.coins),
    )) {
      if (inputAmount === 0) break;

      const coinUnit = unit;
      const needCount = Math.floor(inputAmount / coinUnit);
      const amount = Math.min(count, needCount);

      newCoins[coinUnit] = count - amount;
      newChangeCoins[coinUnit] += amount;
      inputAmount -= coinUnit * amount;
    }

    this.setVendingMachine({
      inputAmount,
      coins: newCoins,
      changeCoins: newChangeCoins,
    });
  }

  getSelectedTab() {
    return this.selectedTab;
  }

  getProducts() {
    return this.vendingMachine.products;
  }

  getVendingMachine() {
    return this.vendingMachine;
  }

  setVendingMachine(partOfVendingMachine: Partial<VendingMachine>) {
    this.vendingMachine = {
      ...this.vendingMachine,
      ...partOfVendingMachine,
    };

    setItem('vendingMachine', this.vendingMachine);
  }
}

export default Store;
