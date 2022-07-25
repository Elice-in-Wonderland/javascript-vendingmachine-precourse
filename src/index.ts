import App from './app';
import Navbar from './components/navbar';
import Controller from './controller';

const navbar = new Navbar();
const app = new App(navbar);

new Controller(app);
