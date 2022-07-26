import Components from './core/Components';
import Menu from './components/Menu';
import ProductManagement from './components/containers/ProductManagement';
import ChangeCharge from './components/containers/ChangeCharge';
import ProductPurchase from './components/containers/ProductPurchase';
export default class vendingMachine extends Components {
    markup() {
        return `
        <h1>🥤자판기🥤</h1>
        <div class="menu">탭</div>
        <div class="container"></div>
        `;
    }
    menuRender() {
        const MenuContainer = this.container.querySelector('.menu');
        new Menu({
            container: MenuContainer,
            props: {
                clickProductManageMent: this.clickProductManageMent.bind(this),
                clickProductPurchase: this.clickProductPurchase.bind(this),
                clickChangeCharge: this.clickChangeCharge.bind(this),
            },
        });
    }

    renderContainer(type) {
        const container = this.container.querySelector('.container');
        new type({ container: container });
    }

    renderCallback() {
        this.menuRender();
        this.renderContainer(ProductPurchase);
    }

    clickProductManageMent() {
        this.renderContainer(ProductManagement);
    }
    clickChangeCharge() {
        this.renderContainer(ChangeCharge);
    }
    clickProductPurchase() {
        this.renderContainer(ProductPurchase);
    }
}
