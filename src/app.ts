import Navbar from './components/navbar';
import { domCreator, domSelector } from './utils/dom';
import BuyProductPage from './pages/buyProductPage';
import ChargeChangePage from './pages/chargeChangePage';
import ProductMgtPage from './pages/productMgtPage/productMgtPage';

class App {
  app: HTMLElement;

  navbar: Navbar;

  pageRoot: HTMLElement;

  constructor(navbar: Navbar) {
    this.app = domSelector('#app');
    this.navbar = navbar;
    navbar.addNavBtnElements(navbar.createNavBtnElements());
    this.pageRoot = domCreator('div');
    this.addFirstPage();
  }

  addFirstPage() {
    this.renderProductMgtPage();
    this.app.appendChild(this.pageRoot);
  }

  changePage(pageName: string): void {
    this.pageRoot = domCreator('div');

    switch (pageName) {
      case '상품 관리':
        this.renderProductMgtPage();
        break;
      case '잔돈 충전':
        this.renderChargeChangePage();
        break;
      case '상품 구매':
        this.renderBuyProductPage();
        break;
    }

    this.app?.replaceChild(this.pageRoot, this.app.lastChild);
  }

  renderProductMgtPage(): void {
    const productMgtPage = new ProductMgtPage(this.pageRoot);
    productMgtPage.addProductMgtPageElement(
      productMgtPage.createProductMgtPageElement(),
    );
  }

  renderChargeChangePage(): void {
    const chargeChangePage = new ChargeChangePage(this.pageRoot);
    chargeChangePage.addChargeChangePageElement(
      chargeChangePage.createChargeChangePageElement(),
    );
  }

  renderBuyProductPage(): void {
    const buyProductPage = new BuyProductPage(this.pageRoot);
    buyProductPage.addBuyProductPageElement(
      buyProductPage.createBuyProductPageElement(),
    );
  }
}

export default App;
