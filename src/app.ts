import vendingMachine from './vendingMachine';

class App {
    constructor({ container }) {
        new vendingMachine({ container });
    }
}

export default App;
