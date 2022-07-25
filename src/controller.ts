import App from './app';
import { domSelector, addEventListenerToTarget } from './utils/dom';

class Controller {
  app: App;

  constructor(app: App) {
    this.app = app;
    this.addEvent();
  }

  addEvent() {
    addEventListenerToTarget(
      domSelector('#navbar'),
      'click',
      this.handleNavbarBtn.bind(this),
    );
    addEventListenerToTarget(
      domSelector('#product__add__btn'),
      'click',
      this.handleProductAddBtn.bind(this),
    );
  }

  handleNavbarBtn(e: Event): void {
    this.app.changePage(e.target.innerHTML);
  }

  handleProductAddBtn(e: Event): void {
    this.app.addProductTableElement(
      domSelector('#product__name__value'),
      domSelector('#product__price__value'),
      domSelector('#product__cnt__value'),
    );
  }
}

export default Controller;
