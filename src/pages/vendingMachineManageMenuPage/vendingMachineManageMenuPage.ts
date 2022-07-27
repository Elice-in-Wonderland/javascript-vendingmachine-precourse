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
    const totalAmout = domSelector('#vending-machine-charge-input').value;

    let coinList = getLocalStorageItem('coins');
    if (coinList === null) {
      setLocalStorageItem('coins', {
        500: 0,
        100: 0,
        50: 0,
        10: 0,
        totalAmout: totalAmout,
      });
      return;
    }
    coinList['totalAmount'] = totalAmout;
    setLocalStorageItem('coins', coinList);
  }

  renderTotalAmount(): void {
    domSelector('#total-amount').innerHTML =
      getLocalStorageItem('coins')['totalAmount'];
  }

  calculateCoins(chargeInput: number) {
    if (!isCoinValid(chargeInput)) {
      return;
    }

    let calculatedInputCoins = {};
    const coinUnits = [500, 100, 50, 10];
    let charge = chargeInput;

    coinUnits.forEach((unit) => {
      const coinQuantity = Math.floor(charge / unit);
      calculatedInputCoins[unit] = coinQuantity;
      charge -= coinQuantity * unit;
    });
    return calculatedInputCoins;
  }

  renderCoins(): void {
    domSelector('#coin-500').innerHTML = getLocalStorageItem('coins')[500];
    domSelector('#coin-100').innerHTML = getLocalStorageItem('coins')[100];
    domSelector('#coin-50').innerHTML = getLocalStorageItem('coins')[50];
    domSelector('#coin-10').innerHTML = getLocalStorageItem('coins')[10];
  }

  renderCallback(): void {
    this.renderTotalAmount();
    this.renderCoins();
  }

  onVendingMachineChargeButtonClick(): void {
    this.saveTotalAmount();

    const caculatedCoins = this.calculateCoins(
      Number(domSelector('#vending-machine-charge-input').value),
    );
    let coinList = getLocalStorageItem('coins');

    coinList[500] = caculatedCoins[500];
    coinList[100] = caculatedCoins[100];
    coinList[50] = caculatedCoins[50];
    coinList[10] = caculatedCoins[10];

    setLocalStorageItem('coins', coinList);

    this.renderCallback();
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
