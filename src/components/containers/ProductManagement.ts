/* eslint-disable prettier/prettier */
import Component from '../../core/Components';
import { longTableStyle } from '../../style';
import { getInputValue, addEvent } from '../../utils/dom';
import { STORAGE_KEY } from '../../utils/constants';
import { setLocalStorage, getLocalStorage } from '../../utils/storage';
import { productValidation } from '../../utils/validation';
export default class ProductManagement extends Component {
    init() {
        this.state = { products: getLocalStorage(STORAGE_KEY.PRODUCT, []) };
    }
    markup() {
        return `
            <h3>상품 추가하기</h3>
                ${this.renderAddProduct()}
            <h3>상품 현황</h3>
                ${this.renderProductStatus()}
    `;
    }
    renderAddProduct() {
        return `
        <div>
            <input type="text" id="product-name-input"  placeholder="상품명">
            <input type="number" id="product-price-input"  placeholder="가격">
            <input type="number" id="product-quantity-input"  placeholder="수량">
            <button id="product-add-button">추가하기</button>
        </ㅇ>
        `;
    }
    renderProductStatus() {
        return `
        <table style='${longTableStyle}'>
            <tr>
                <td style='${longTableStyle}'>상품명</td>
                <td style='${longTableStyle}'>가격</td>
                <td style='${longTableStyle}'>수량</td>
            </tr>
        </table>
        `;
    }
    setEvent() {
        addEvent(this.container, 'click', '#product-add-button', (e: Event) => {
            e.preventDefault();
            const inputName = getInputValue(this.container, 'product-name-input');
            const inputPrice = Number(getInputValue(this.container, 'product-price-input'));
            const inputQuantity = Number(getInputValue(this.container, 'product-quantity-input'));

            const product = {
                name: inputName,
                price: inputPrice,
                quantity: inputQuantity,
            };
            if (productValidation(product, this.state.products)) {
                this.setState({ products: [...this.state.products, product] });
                setLocalStorage(STORAGE_KEY.PRODUCT, this.state.products);
            }
        });
    }
}
