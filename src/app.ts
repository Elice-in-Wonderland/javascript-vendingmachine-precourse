import Page from './pages/page';
import { domSelector } from './utils/dom';

class App {
  app: HTMLElement;

  page: Page;

  constructor(page: Page) {
    this.app = domSelector('#app');
    this.page = page.getPageRoot();
    this.addPageToApp(this.app);
  }

  addPageToApp(app: HTMLElement) {
    app.appendChild(this.page);
  }
}
export default App;
