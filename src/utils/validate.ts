import { ERROR_MESSAGE } from '../constants';
import { Product } from '../types/vendingMachine';
import { every } from './common';

const isEnoughAmount = (insertedAmount: number, randomCoin: number) =>
  insertedAmount - randomCoin >= 0;

const isContainsBlank = (str: string) => str.match(/\s+/);

const isNotValidRange = (value: number, min = 1, max = 9999) =>
  value < min || value > max;

const isSmallerThan100 = (value: number) => value < 100;

const isNotDividedBy10 = (value: number) => value % 10 !== 0;

function isValidProduct(
  { name, price, quantity }: Partial<Product>,
  products: Product[],
) {
  if (!name) {
    alert(ERROR_MESSAGE.PRODUCT_NAME_EMPTY);
    return false;
  }

  if (!price) {
    alert(ERROR_MESSAGE.PRODUCT_PRICE_EMPTY);
    return false;
  }

  if (!quantity) {
    alert(ERROR_MESSAGE.PRODUCT_QUANTITY_EMPTY);
    return false;
  }

  if (isContainsBlank(name)) {
    alert(ERROR_MESSAGE.PRODUCT_NAME_BLANK);
    return false;
  }
  if (!every((product: Product) => product.name !== name, products)) {
    alert(ERROR_MESSAGE.PRODUCT_NAME_DUPLICATE);
    return false;
  }

  if (isSmallerThan100(price) || isNotDividedBy10(price)) {
    alert(ERROR_MESSAGE.PRODUCT_PRICE_RANGE);
    return false;
  }

  if (isNotValidRange(quantity)) {
    alert(ERROR_MESSAGE.PRODUCT_QUANTITY_TYPE);
    return false;
  }

  return true;
}

function isValidAmount(amount?: number) {
  if (!amount) {
    alert(ERROR_MESSAGE.AMOUNT_EMPTY);
    return false;
  }

  if (
    isNotValidRange(amount, 1, Number.MAX_VALUE) ||
    isNotDividedBy10(amount)
  ) {
    alert(ERROR_MESSAGE.AMOUNT_RANGE);
    return false;
  }

  return true;
}

export { isEnoughAmount, isValidProduct, isValidAmount };
