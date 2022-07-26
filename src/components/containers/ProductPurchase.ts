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
            ${this.renderAvailableProducts()}
        <h3>잔돈</h3>
            <button id="coin-return-button">반환하기</button>
            ${printCoinPossession(this.state.returnCoins)}
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

    renderAvailableProducts() {
        return `
        <table style='${longTableStyle}' id="product-purchase-table">
            <tr>
                <td style='${longTableStyle}'>상품명</td>
                <td style='${longTableStyle}'>가격</td>
                <td style='${longTableStyle}'>수량</td>
                <td style='${longTableStyle}'>구매</td>
            </tr>
            ${this.ref.products
                .map(
                    ({ name, price, quantity }, index: number) => `
            <tr class="product-purchase-item">
                <td style='${longTableStyle}' class="product-purchase-name" data-product-name=${name}>${name}</td>
                <td style='${longTableStyle}' class="product-purchase-price" data-product-price=${price}>${price}</td>
                <td style='${longTableStyle}' class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
                <td style='${longTableStyle}'><button class="purchase-button" data-index=${index} ${
                        quantity === 0 && 'disabled'
                    }>구매하기</button></td>
            </tr>`,
                )
                .join('')}
        </table>
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
        addEvent(this.container, 'click', '#product-purchase-table', (e: Event) => {
            if (!(e.target instanceof HTMLButtonElement)) {
                return;
            }
            if (e.target.tagName === 'BUTTON') {
                const { index } = e.target.dataset;
                if (this.ref.products[index].price <= this.state.inputCharge) {
                    this.ref.products[index].quantity -= 1;
                    this.setState({
                        ...this.state,
                        inputCharge: this.state.inputCharge - this.ref.products[index].price,
                    });
                    setLocalStorage(STORAGE_KEY.PRODUCT, this.ref.products);
                    setLocalStorage(STORAGE_KEY.INPUT_CHARGE, this.state.inputCharge);
                    return;
                }
                alert(VALIDATION_MESSAGE.INSUFFICIENCY_MONEY);
            }
        });
        addEvent(this.container, 'click', '#coin-return-button', () => {
            const { money, coins, returnCoins, totalReturnMoney } = returnCoin(this.state.inputCharge, this.ref.coins);
            setLocalStorage(STORAGE_KEY.INPUT_CHARGE, money);
            setLocalStorage(STORAGE_KEY.COINS, coins);
            setLocalStorage(STORAGE_KEY.CHANGE, getLocalStorage(STORAGE_KEY.CHANGE, 0) - totalReturnMoney);
            this.setState({ inputCharge: money, returnCoins: returnCoins });
        });
    }
}
