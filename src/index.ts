import App from './app';
import Navbar from './components/navbar';
import Controller from './controller';
import Page from './pages/page';

const navbar = new Navbar();
const page = new Page(navbar);

new App(page);
new Controller(page);
