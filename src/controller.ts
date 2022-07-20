import Page from './pages/page';
import { domSelector, addEventListenerToTarget } from './utils/dom';

class Controller {
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.addEvent();
  }

  addEvent() {
    addEventListenerToTarget(
      domSelector('#navbar'),
      'click',
      this.handleNavbarBtn.bind(this),
    );
  }

  handleNavbarBtn(e: Event): void {
    this.page.changePage(e.target.innerHTML);
  }
}

export default Controller;
