import Navbar from './components/navbar';
import { domSelector } from './utils/dom';
import BuyProductPage from './pages/buyProductPage';
import ChargeChangePage from './pages/chargeChangePage';
import ProductMgtPage from './pages/productMgtPage/productMgtPage';
import CommonComponent from './commonComponent';

type PageType = ProductMgtPage | ChargeChangePage | BuyProductPage;

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
    this.renderPage(ProductMgtPage);
  }

  onChargeChangePageClicked() {
    this.renderPage(ChargeChangePage);
  }

  onBuyProductPageClicked() {
    this.renderPage(BuyProductPage);
  }

  renderCallback() {
    this.renderNavbar();
    this.renderPage(ProductMgtPage);
  }
}

export default App;
