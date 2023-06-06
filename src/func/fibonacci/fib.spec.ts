import * as assert from 'assert';
import { fib } from './fib';

describe('Function: fib(n)', () => {
    it('should return 0 if n=0', () => {
        assert.equal(0, fib(0));
    });

    it('should return 1 if n=1', () => {
        assert.equal(1, fib(1));
    });

    it('should return 55 if n=10', () => {
        assert.equal(55, fib(10));
    });

    it('should return 6765 if n=20', () => {
        assert.equal(6765, fib(20));
    });
});
