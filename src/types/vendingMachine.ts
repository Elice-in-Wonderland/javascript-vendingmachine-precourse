import { COIN_LIST } from '../constants';

type Coin = typeof COIN_LIST[number];

interface VendingMachine {
  inputAmount: number;
  coins: Record<Coin, number>;
  products: Product[];
  changeCoins: Record<Coin, number>;
}

interface Product {
  id?: number;
  name: string;
  price: number;
  quantity: number;
}

export { Coin, VendingMachine, Product };
