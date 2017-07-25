import { Debounced } from '../src';

class ExampleApp {

    constructor () {
        document.addEventListener('mousemove', this.example)
    }

    @Debounced(500)
    public example() {
        console.log('hello')
    }

}

const app = new ExampleApp();
