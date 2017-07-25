import * as assert from 'assert';
import * as sinon from 'sinon';
import { debounce } from './debounce';

describe('Function: debounce (fn, delay) ', () =>
{
    it('should be only one call in 100ms', ()=>{

        let timer = sinon.useFakeTimers();

        let spy = sinon.spy(console, 'log');

        const debounced =  debounce(()=>console.log(''), 100);

        debounced();
        debounced();
        debounced();

        timer.tick(200);

        assert(spy.calledOnce);

    })

});