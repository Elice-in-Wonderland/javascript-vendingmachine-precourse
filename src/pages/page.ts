import Navbar from '../components/navbar';
import { domCreator } from '../utils/dom';
import BuyProductPage from './buyProductPage';
import ChargeChangePage from './chargeChangePage';
import ProductMgtPage from './productMgtPage';

class Page {
  navbar: Navbar;

  pageRoot: HTMLElement;

  pageElement: HTMLElement;

  constructor(navbar: Navbar) {
    this.navbar = navbar;
    navbar.addNavBtnElements(navbar.createNavBtnElements());
    this.pageRoot = domCreator('div');
    this.pageElement = domCreator('div');
    new ProductMgtPage(this.pageElement);
    this.addPage(this.pageElement);
  }

  changePage(pageName: string): void {
    this.pageElement = domCreator('div');
    switch (pageName) {
      case '상품 관리':
        new ProductMgtPage(this.pageElement);
        break;
      case '잔돈 충전':
        new ChargeChangePage(this.pageElement);
        break;
      case '상품 구매':
        new BuyProductPage(this.pageElement);
        break;
    }
    this.addPage(this.pageElement);
  }

  addPage(newNode: HTMLElement) {
    if (this.pageRoot.firstChild === null) {
      this.pageRoot.appendChild(newNode);
      return;
    }
    this.pageRoot.replaceChild(newNode, this.pageRoot.firstChild);
  }

  getPageRoot(): HTMLElement {
    return this.pageRoot;
  }
}

export default Page;
