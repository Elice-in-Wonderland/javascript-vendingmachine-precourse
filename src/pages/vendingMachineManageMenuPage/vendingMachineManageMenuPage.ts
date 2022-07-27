import CommonComponent from '../../commonComponent';
import { domSelector, addEventListenerToTarget } from '../../utils/dom';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../utils/localStorage';
import { isCoinValid } from '../../utils/validate';
import './vendingMachineManageMenuPage.css';

class VendingMachineManageMenuPage extends CommonComponent {
  markUp(): string {
    return `
      <h1>자판기 동전 충전하기</h1>
      <input id="vending-machine-charge-input" type="number"/>
      <button id="vending-machine-charge-button">추가하기</button>
      <div>보유 금액: <div id="total-amount"></div>원</div>
      <h1>동전 보유 현황</h1>
      <table id="coin-list">
          <tr>
              <td>동전</td>
              <td>갯수</td>
          </tr>
          <tr>
              <td>500원</td>
              <td id="coin-500"></td>
          </tr>
          <tr>
              <td>100원</td>
              <td id="coin-100"></td>
          </tr>
          <tr>
              <td>50원</td>
              <td id="coin-50"></td>
          </tr>
          <tr>
              <td>10원</td>
              <td id="coin-10"></td>
          </tr>
      </table>
    `;
  }

  saveTotalAmount(): void {
    const totalAmount = Number(
      domSelector('#vending-machine-charge-input').value,
    );

    let coinList = getLocalStorageItem('coins');
    if (coinList === null) {
      setLocalStorageItem('coins', {
        500: 0,
        100: 0,
        50: 0,
        10: 0,
        totalAmount: totalAmount,
      });
      return;
    }
    coinList['totalAmount'] =
      Number(getLocalStorageItem('coins')['totalAmount']) + totalAmount;
    setLocalStorageItem('coins', coinList);
  }

  renderTotalAmount(): void {
    domSelector('#total-amount').innerHTML =
      getLocalStorageItem('coins')['totalAmount'] + '';
  }

  generateRandomCoins(chargeInput: number) {
    if (!isCoinValid(chargeInput)) {
      return;
    }

    let coins = { 500: 0, 100: 0, 50: 0, 10: 0 };

    while (chargeInput > 0) {
      const randomNumber = MissionUtils.Random.pickNumberInList([
        10, 50, 100, 500,
      ]);

      if (chargeInput / randomNumber >= 1) {
        coins[randomNumber] += 1;
        chargeInput -= randomNumber;
      }
    }
    return coins;
  }

  renderCoins(): void {
    domSelector('#coin-500').innerHTML =
      getLocalStorageItem('coins')[500] + '개';
    domSelector('#coin-100').innerHTML =
      getLocalStorageItem('coins')[100] + '개';
    domSelector('#coin-50').innerHTML = getLocalStorageItem('coins')[50] + '개';
    domSelector('#coin-10').innerHTML = getLocalStorageItem('coins')[10] + '개';
  }

  onVendingMachineChargeButtonClick(): void {
    this.saveTotalAmount();

    const ramdomCoins = this.generateRandomCoins(
      Number(domSelector('#vending-machine-charge-input').value),
    );
    let coinList = getLocalStorageItem('coins');
    const unitList = [500, 100, 50, 10];

    unitList.forEach((unit) => {
      coinList[unit] += ramdomCoins[unit];
    });

    setLocalStorageItem('coins', coinList);

    this.renderTotalAmount();
    this.renderCoins();
  }

  setEvent(): void {
    addEventListenerToTarget(
      domSelector('#vending-machine-charge-button'),
      'click',
      this.onVendingMachineChargeButtonClick.bind(this),
    );
  }
}
export default VendingMachineManageMenuPage;
