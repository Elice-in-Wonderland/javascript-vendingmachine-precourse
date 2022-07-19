import { SELECTOR } from '../../constants';
import { Coin, VendingMachine } from '../../types/vendingMachine';
import { removeFirstLetter } from '../../utils';

function getCoinsSum(coins: Record<Coin, number>) {
  let sum = 0;

  Object.entries(coins).forEach(([key, value]) => {
    sum += value * Number(key);
  });

  return sum;
}

class Template {
  getVendingMachineManage(vendingMachine: VendingMachine) {
    return `
      <section>
        <h2>자판기 동전 충전하기</h2>
        <form id=${removeFirstLetter(
          SELECTOR.VENDING_MACHINE_MANAGE.CHARGE_FORM,
        )}>
          <input name="amount" type="number" id=${removeFirstLetter(
            SELECTOR.VENDING_MACHINE_MANAGE.CHARGE_INPUT,
          )} placeholder="자판기가 보유할 금액"/>
          <button id=${removeFirstLetter(
            SELECTOR.VENDING_MACHINE_MANAGE.CHARGE_BUTTON,
          )}>충전하기</button>
        </form>
        <p>보유 금액: <span id=${removeFirstLetter(
          SELECTOR.VENDING_MACHINE_MANAGE.CHARGE_AMOUNT,
        )}>${getCoinsSum(vendingMachine.coins)}</span></p>
      </section>
    `;
  }
}

export default Template;
