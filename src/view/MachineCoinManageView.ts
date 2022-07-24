import View from "../Component/View";
import Coins from "../model/Coins";
import { IState } from "../vc/MainVC";

class MachineCoinManageView extends View {
  coins: Coins;

  constructor(props: IState) {
    super();
    this.coins = props.coins;
    this.container.innerHTML = this.template();
  }

  public override template(): string {
    if (!this.coins) return ``;
    const { coin_500, coin_100, coin_50, coin_10 } = this.coins.getAllCoins();
    return `
      <div>
        <h2>자판기 동전 충전하기</h2>
        <input id="vending-machine-charge-input"></input>
        <button id="vending-machine-charge-button">충전하기</button>
        <p id="vending-machine-charge-amount">보유 금액: ${this.coins.getTotalMoney()}</p>
      </div>
      <div>
        <h2>동전 보유 현황</h2>
        <table border="1" width="500px">
          <th align="center">동전</th>
          <th align="center">개수</th>
          <tr id="vending-machine-coin-500-quantity">
            <th>500원</th>
            <td align="center">${coin_500}개</td>
          </tr>
          <tr id="vending-machine-coin-100-quantity">
            <th>100원</th>
            <td align="center">${coin_100}개</td>
          </tr>
          <tr id="vending-machine-coin-50-quantity">
            <th>50원</th>
            <td align="center">${coin_50}개</td>
          </tr>
          <tr id="vending-machine-coin-10-quantity">
            <th>10원</th>
            <td align="center">${coin_10}개</td>
          </tr>
        </table>
      </div>
    `;
  }
}

export default MachineCoinManageView;
