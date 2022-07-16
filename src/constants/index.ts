import { deepFreeze } from '../utils';

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
    CHARGE_INPUT: '#vending-machine-charge-input',
    CHARGE_BUTTON: '#vending-machine-charge-button',
    CHARGE_AMOUNT: '#vending-machine-charge-amount',
    COIN_500_QUANTITY: '#vending-machine-coin-500-quantity',
    COIN_100_QUANTITY: '#vending-machine-coin-100-quantity',
    COIN_50_QUANTITY: '#vending-machine-coin-50-quantity',
    COIN_10_QUANTITY: '#vending-machine-coin-10-quantity',
  },
  PRODUCT_PURCHASE: {
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

const ERROR_MESSAGE = deepFreeze({
  PRODUCT_NAME_DUPLICATE:
    '제품의 이름은 중복되지 않게 작성해주세요. ex) 코카콜라, 펩시콜라',
});

export { SELECTOR, ERROR_MESSAGE };
