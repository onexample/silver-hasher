import * as assert from 'assert';

import { isPrime } from './isPrime'

describe('Function: isPrime(n)', () =>
{

    it('should return false if 0 passed', () =>
    {
        assert.equal(isPrime(0), false, '0 is not a prime number');
    });

    it('should return false if 1 passed', () =>
    {
        assert.equal(isPrime(1), false, '1 is not a prime number');
    });

    it('should return true if 17 passed', () =>
    {
        assert.equal(isPrime(17), true, '17 is prime number');
    });

    it('should return false if 10000000000000 passed', () =>
    {
        assert.equal(isPrime(10000000000000), false, '10000000000000 is prime number');
    });

});
