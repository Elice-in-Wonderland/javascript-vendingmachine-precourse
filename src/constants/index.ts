import { deepFreeze } from '../utils/common';

const SELECTOR = deepFreeze({
  ROOT: '#app',
  HEADER: '#header',
  MAIN: '#main',
  TAB_MENU: {
    PRODUCT_ADD: '#product-add-menu',
    VENDING_MACHINE_MANAGE: '#vending-machine-manage-menu',
    PRODUCT_PURCHASE: '#product-purchase-menu',
  },
  PRODUCT_ADD: {
    FORM: '#product-add-form',
    NAME_INPUT: '#product-name-input',
    PRICE_INPUT: '#product-price-input',
    QUANTITY_INPUT: '#product-quantity-input',
    BUTTON: '#product-add-button',
  },
  VENDING_MACHINE_MANAGE: {
    CHARGE_FORM: '#vending-machine-charge-form',
    CHARGE_INPUT: '#vending-machine-charge-input',
    CHARGE_BUTTON: '#vending-machine-charge-button',
    CHARGE_AMOUNT: '#vending-machine-charge-amount',
    COIN_500_QUANTITY: '#vending-machine-coin-500-quantity',
    COIN_100_QUANTITY: '#vending-machine-coin-100-quantity',
    COIN_50_QUANTITY: '#vending-machine-coin-50-quantity',
    COIN_10_QUANTITY: '#vending-machine-coin-10-quantity',
  },
  PRODUCT_PURCHASE: {
    CHARGE_FORM: '#charge-form',
    CHARGE_INPUT: '#charge-input',
    CHARGE_BUTTON: '#charge-button',
    CHARGE_AMOUNT: '#charge-amount',
    COIN_RETURN_BUTTON: '#coin-return-button',
    COIN_500_QUANTITY: '#coin-500-quantity',
    COIN_100_QUANTITY: '#coin-100-quantity',
    COIN_50_QUANTITY: '#coin-50-quantity',
    COIN_10_QUANTITY: '#coin-10-quantity',
  },
  PRODUCT: {
    MANAGE_ITEM: '.product-manage-item',
    MANAGE_NAME: '.product-manage-name',
    MANAGE_PRICE: '.product-manage-price',
    MANAGE_QUANTITY: '.product-manage-quantity',
    PURCHASE_ITEM: '.product-purchase-item',
    PURCHASE_BUTTON: '.purchase-button',
    PURCHASE_NAME: '.product-purchase-name',
    PURCHASE_PRICE: '.product-purchase-price',
    PURCHASE_QUANTITY: '.product-purchase-quantity',
  },
});

const ERROR_MESSAGE = Object.freeze({
  PRODUCT_NAME_EMPTY: '상품명을 입력해주세요. ex) 코카콜라',
  PRODUCT_NAME_BLANK: '상품명에 공백이 있어서는 안됩니다. ex) 펩시콜라',
  PRODUCT_NAME_DUPLICATE:
    '상품의 이름은 중복되지 않게 작성해주세요. ex) 코카콜라, 펩시콜라',
  PRODUCT_PRICE_EMPTY: '가격을 입력해주세요. ex) 150',
  PRODUCT_PRICE_TYPE: '가격은 자연수여야 합니다. ex) 150',
  PRODUCT_PRICE_RANGE:
    '상품 가격은 100원부터 시작하며 10원으로 나누어져야 합니다. ex) 150',
  PRODUCT_QUANTITY_EMPTY: '수량을 입력해주세요. ex) 10',
  PRODUCT_QUANTITY_TYPE: '수량은 자연수여야 합니다. ex) 10',
  AMOUNT_EMPTY: '금액을 입력해주세요. ex) 10000',
  AMOUNT_RANGE:
    '금액은 자연수이면서 금액은 10으로 나누어 떨어져야 합니다. ex) 10000',
});

const COIN_LIST = [500, 100, 50, 10];

export { SELECTOR, ERROR_MESSAGE, COIN_LIST };
