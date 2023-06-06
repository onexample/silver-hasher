import * as assert from 'assert';
import { debounce } from './debounce';

describe('Function: debounce (fn, delay) ', () => {
    it('should be only one call in 100ms', () => {
        const spy = jest.fn();

        const timer = jest.useFakeTimers();

        const debounced = debounce(() => spy(), 100);

        debounced();
        debounced();
        debounced();

        timer.runAllTimers();

        assert.equal(spy.mock.calls.length, 1);
    });
});
