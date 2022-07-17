import { Product } from '../types/vendingMachine';
import { every } from './common';

const isContainsBlank = (str: string) => str.match(/\s+/);

const isInteger = (value: number) => Number.isInteger(value);

const isSmallerThan100 = (value: number) => value < 100;

const isNotDividedBy10 = (value: number) => value % 10 !== 0;

function isValidProduct(
  { name, price, quantity }: Partial<Product>,
  products: Product[],
) {
  if (!name || !price || !quantity) {
    alert('모든 값이 입력이 되어야 합니다.');
    return false;
  }

  if (isContainsBlank(name)) {
    alert('상품명에 공백이 있어서는 안됩니다.');
    return false;
  }
  if (!every((product: Product) => product.name !== name, products)) {
    alert('상품명은 고유해야 합니다.');
    return false;
  }

  if (!isInteger(price) || !isInteger(quantity)) {
    alert('가격 또는 수량은 자연수여야 합니다.');
    return false;
  }

  if (isSmallerThan100(price) || isNotDividedBy10(price)) {
    alert('상품 가격은 100원부터 시작하며 10원으로 나누어져야 합니다.');
    return false;
  }

  return true;
}

export { isValidProduct };
