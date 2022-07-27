import Navbar from './components/navbar';
import { domSelector } from './utils/dom';
import ProductPurchaseMenuPage from './pages/productPurchaseMenuPage/productPurchaseMenuPage';
import VendingMachineManageMenuPage from './pages/vendingMachineManageMenuPage/vendingMachineManageMenuPage';
import ProductAddMenuPage from './pages/productAddMenuPage/productAddMenuPage';
import CommonComponent from './commonComponent';

type PageType =
  | ProductAddMenuPage
  | VendingMachineManageMenuPage
  | ProductPurchaseMenuPage;

class App extends CommonComponent {
  markUp(): string {
    return `
      <header id="header"></header>
      <main id="main"></main>
    `;
  }

  renderNavbar() {
    new Navbar({
      element: domSelector('#header', this.element),
      props: {
        onProductMgtPageClicked: this.onProductMgtPageClicked.bind(this),
        onChargeChangePageClicked: this.onChargeChangePageClicked.bind(this),
        onBuyProductPageClicked: this.onBuyProductPageClicked.bind(this),
      },
    });
  }

  renderPage(page: PageType) {
    const element = domSelector('#main', this.element);
    new page({ element: element });
  }

  onProductMgtPageClicked() {
    this.renderPage(ProductAddMenuPage);
  }

  onChargeChangePageClicked() {
    this.renderPage(VendingMachineManageMenuPage);
  }

  onBuyProductPageClicked() {
    this.renderPage(ProductPurchaseMenuPage);
  }

  renderCallback() {
    this.renderNavbar();
    this.renderPage(ProductAddMenuPage);
  }
}

export default App;
