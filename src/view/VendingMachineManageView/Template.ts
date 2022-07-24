import { SELECTOR } from '../../constants';
import { Coin, VendingMachine } from '../../types/vendingMachine';
import { removeFirstLetter } from '../../utils/common';

export function getCoinsSum(coins: Record<Coin, number>) {
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
      ${this.getCoinList(vendingMachine)}
    `;
  }

  getCoinList(vendingMachine: VendingMachine) {
    return `
      <section>
        <h2>동전 보유 현황</h2>
        <table>
          <tr>
            <th>동전</th><th>개수</th>
          </tr>
          <tr>
            <th>500원</th><td id=${removeFirstLetter(
              SELECTOR.VENDING_MACHINE_MANAGE.COIN_500_QUANTITY,
            )}>${vendingMachine.coins[500]}개</td>
          </tr>
          <tr>
            <th>100원</th><td id=${removeFirstLetter(
              SELECTOR.VENDING_MACHINE_MANAGE.COIN_100_QUANTITY,
            )}>${vendingMachine.coins[100]}개</td>
          </tr>
          <tr>
            <th>50원</th><td id=${removeFirstLetter(
              SELECTOR.VENDING_MACHINE_MANAGE.COIN_50_QUANTITY,
            )}>${vendingMachine.coins[50]}개</td>
          </tr>
          <tr>
            <th>10원</th><td id=${removeFirstLetter(
              SELECTOR.VENDING_MACHINE_MANAGE.COIN_10_QUANTITY,
            )}">${vendingMachine.coins[10]}개</td>
          </tr>
        </table>
      </section>
    `;
  }
}

export default Template;
