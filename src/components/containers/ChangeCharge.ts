import { getInputValue } from './../../utils/dom';
import Component from '../../core/Components';
import { addEvent } from '../../utils/dom';
import { chargeValidation } from '../../utils/validation';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';
import { STORAGE_KEY } from '../../utils/constants';
import { randomChargeCoin } from '../../utils/coin';
import { COIN } from '../../utils/constants';
export default class ChangeCharge extends Component {
    init() {
        this.state = { vendingMachineChange: getLocalStorage(STORAGE_KEY.CHANGE, 0) };
        this.ref = { coins: getLocalStorage(STORAGE_KEY.COINS, {}) };
    }
    markup() {
        return `
        <h3>자판기 동전 충전하기</h3>
            ${this.printChangeCharge()}
        <br/>
        <span id="vending-machine-charge-amount">투입한 금액: ${this.state.vendingMachineChange}원</span>
        <h3>동전 보유 현황</h3>

    `;
    }

    printChangeCharge() {
        return `
        <div>
            <input type="number" id="vending-machine-charge-input">
            <button id="vending-machine-charge-button">투입하기</button>
        </div>
        `;
    }
    addCurrentCoin(coins: ICoin) {
        const coinArr = [COIN._10, COIN._50, COIN._100, COIN._500];
        for (const coin of coinArr) {
            this.ref.coins[String(coin)] = this.ref.coins[String(coin)]
                ? this.ref.coins[String(coin)] + coins[coin]
                : coins[coin];
        }
    }
    setEvent() {
        addEvent(this.container, 'click', '#vending-machine-charge-button', () => {
            const vendingMachineChargeInput = Number(getInputValue(this.container, 'vending-machine-charge-input'));
            console.log(vendingMachineChargeInput);
            if (chargeValidation(vendingMachineChargeInput)) {
                this.addCurrentCoin(randomChargeCoin(vendingMachineChargeInput));
                this.setState({ vendingMachineChange: this.state.vendingMachineChange + vendingMachineChargeInput });
                setLocalStorage(STORAGE_KEY.CHANGE, this.state.vendingMachineChange);
                setLocalStorage(STORAGE_KEY.COINS, this.ref.coins);
            }
        });
    }
}
