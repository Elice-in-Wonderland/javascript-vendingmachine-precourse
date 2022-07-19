import { COIN_LIST } from '../constants';
import { Coin } from '../types/vendingMachine';

function getRandomNumber(numberList: typeof COIN_LIST): Coin {
  return MissionUtils.Random.pickNumberInList(numberList);
}

export { getRandomNumber };
