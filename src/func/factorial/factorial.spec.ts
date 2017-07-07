import * as assert from 'assert';
import { factorial } from './factorial';

describe('Function: factorial(n) ', () =>
{

    it('should return 1 if n=0', () =>
    {
        assert.equal(1, factorial(0));
    });

    it('should return 1 if n=1', () =>
    {
        assert.equal(1, factorial(1));
    });

    it('should return 720 if n=6',() =>
    {
        assert.equal(720, factorial(6));
    });


});
