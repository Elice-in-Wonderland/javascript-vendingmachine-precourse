import Component from '../core/Components';
export default class Menu extends Component {
    markup() {
        return `
    <nav>
        <button id="product-purchase-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-add-menu">상품 구매</button>
    </nav>
    `;
    }
    setEvent() {
        const btn1 = this.container.querySelector('#product-purchase-menu');
        const btn2 = this.container.querySelector('#vending-machine-manage-menu');
        const btn3 = this.container.querySelector('#product-add-menu');
        btn1.addEventListener('click', () => this.props.clickProductManageMent());
        btn2.addEventListener('click', () => this.props.clickChangeCharge());
        btn3.addEventListener('click', () => this.props.clickProductPurchase());
    }
}
