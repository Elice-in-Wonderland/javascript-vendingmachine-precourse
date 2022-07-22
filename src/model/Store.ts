/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { COIN_LIST, ERROR_MESSAGE, SELECTOR } from '../constants';
import { Product, VendingMachine } from '../types/vendingMachine';
import {
  isValidAmount,
  isValidProduct,
  removeFirstLetter,
  isEnoughAmount,
} from '../utils';
import { getRandomNumber } from '../utils/randomCoinMaker';
import { getCoinsSum } from '../view/VendingMachineManageView/Template';

class Store {
  selectedTab: string;

  vendingMachine: VendingMachine;

  constructor() {
    this.selectedTab = removeFirstLetter(SELECTOR.TAB_MENU.PRODUCT_ADD); // 처음 시작할 탭
    this.vendingMachine = {
      inputAmount: 0,
      coins: { 500: 0, 100: 0, 50: 0, 10: 0 },
      products: [{ name: 'test', price: 5000, quantity: 5 }],
      chargeCoins: { 500: 0, 100: 0, 50: 0, 10: 0 },
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

    return true;
  }

  addCoins(amount?: number) {
    if (!isValidAmount(amount)) return false;

    let insertedAmount = amount as number;

    while (insertedAmount > 0) {
      const randomCoin = getRandomNumber(COIN_LIST);
      if (!isEnoughAmount(insertedAmount, randomCoin)) continue;

      this.vendingMachine.coins[randomCoin] += 1;
      insertedAmount -= randomCoin;
    }

    return true;
  }

  inputMoney(amount?: number) {
    if (!isValidAmount(amount)) return false;

    this.vendingMachine.inputAmount += amount as number;

    return true;
  }

  productPurchase(product: Pick<Product, 'name' | 'price'>) {
    const { name, price } = product;

    if (!isEnoughAmount(this.vendingMachine.inputAmount, price)) {
      alert(ERROR_MESSAGE.PRODUCT_PURCHASE_ERROR);
      return false;
    }

    const newVendingMachine = {
      inputAmount: (this.vendingMachine.inputAmount -= price),
      products: this.vendingMachine.products.map((oldProduct) => {
        if (oldProduct.name === name) {
          oldProduct.quantity -= 1;
        }

        return oldProduct;
      }),
    };

    this.vendingMachine = {
      ...this.vendingMachine,
      ...newVendingMachine,
    };

    return true;
  }

  returnChange() {
    const coinsSum = getCoinsSum(this.vendingMachine.coins);
    const { inputAmount } = this.vendingMachine;

    // TODO: 잔돈 반환 로직 리팩토링
    // 불변성 지키기?
    // 다른 방식도 생각
    if (inputAmount > coinsSum) {
      this.returnPartOfChange();
    } else {
      this.returnAllOfChange();
    }

    return true;
  }

  returnPartOfChange() {
    console.log('줄 수 있는 만큼 반환');
    let { inputAmount } = this.vendingMachine;

    for (const [unit, count] of Object.entries(this.vendingMachine.coins)) {
      const coinUnit = Number(unit);
      inputAmount -= coinUnit * count;

      this.vendingMachine.chargeCoins[coinUnit] += count;
      this.vendingMachine.coins[coinUnit] = 0;
    }

    this.setVendingMachine({
      inputAmount,
    });
  }

  returnAllOfChange() {
    console.log('전액 반환');
    let { inputAmount } = this.vendingMachine;

    for (const [unit, count] of Object.entries(this.vendingMachine.coins)) {
      if (inputAmount === 0) break;

      const coinUnit = Number(unit);
      const needCount = Math.floor(inputAmount / coinUnit);
      const amount = Math.min(count, needCount);

      this.vendingMachine.coins[coinUnit] = count - amount;
      this.vendingMachine.chargeCoins[coinUnit] += amount;
      inputAmount -= coinUnit * amount;
    }

    this.setVendingMachine({
      inputAmount,
    });
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
  }
}

export default Store;
