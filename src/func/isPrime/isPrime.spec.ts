import * as assert from 'assert';

import { isPrime } from './isPrime'

describe('Function: isPrime(n)', () =>
{

    it('should return false if n=0', () =>
    {
        assert.equal(isPrime(0), false, '0 is not a prime number');
    });

    it('should return false if n=1', () =>
    {
        assert.equal(isPrime(1), false, '1 is not a prime number');
    });

    it('should return true if n=17', () =>
    {
        assert.equal(isPrime(17), true, '17 is prime number');
    });

    it('should return false if n=10000000000000', () =>
    {
        assert.equal(isPrime(10000000000000), false, '10000000000000 is not prime number');
    });

});
