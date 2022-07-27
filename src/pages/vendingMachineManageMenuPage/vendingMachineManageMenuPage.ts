import CommonComponent from '../../commonComponent';
import { domSelector, addEventListenerToTarget } from '../../utils/dom';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../utils/localStorage';
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
              <td>갯수</td>
          </tr>
          <tr>
              <td>100원</td>
              <td>갯수</td>
          </tr>
          <tr>
              <td>50원</td>
              <td>갯수</td>
          </tr>
          <tr>
              <td>10원</td>
              <td>갯수</td>
          </tr>
      </table>
    `;
  }

  renderTotalAmount(): void {
    const totalAmout = domSelector('#vending-machine-charge-input').value;
    domSelector('#total-amount').innerHTML = totalAmout;
    setLocalStorageItem('coins', { totalAmount: totalAmout });
  }

  onVendingMachineChargeButtonClick(): void {
    this.renderTotalAmount();
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
