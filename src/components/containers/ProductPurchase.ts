import { longTableStyle } from './../../style';
import Component from '../../core/Components';
import { printCoinPossession, getInputValue, addEvent } from '../../utils/dom';
import { chargeValidation } from '../../utils/validation';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';
import { STORAGE_KEY } from '../../utils/constants';
import { returnCoin } from '../../utils/coin';
import { VALIDATION_MESSAGE } from '../../utils/constants';
export default class ProductPurchase extends Component {
    init() {
        this.state = {
            inputCharge: getLocalStorage(STORAGE_KEY.INPUT_CHARGE, 0),
            returnCoins: {},
        };
        this.ref = {
            products: getLocalStorage(STORAGE_KEY.PRODUCT, []),
            coins: getLocalStorage(STORAGE_KEY.COINS, {}),
        };
    }
    markup() {
        return `
        <h3>금액 투입</h3>
            ${this.renderInputMoney()}
        <br/>
            <span id="charge-amount">투입한 금액:${this.state.inputCharge}</span>
        <h3>구매할 수 있는 상품 현황</h3>

        <h3>잔돈</h3>
            <button id="coin-return-button">반환하기</button>

    `;
    }

    renderInputMoney() {
        return `
            <div>
                <input type="text" id="charge-input">
                <button id="charge-button">투입하기</button>
            </div>
        `;
    }

    setEvent() {
        addEvent(this.container, 'click', '#charge-button', () => {
            const chargeInput = Number(getInputValue(this.container, 'charge-input'));
            if (chargeValidation(chargeInput)) {
                this.setState({ ...this.state, inputCharge: this.state.inputCharge + chargeInput });
                setLocalStorage(STORAGE_KEY.INPUT_CHARGE, this.state.inputCharge);
            }
        });
    }
}
