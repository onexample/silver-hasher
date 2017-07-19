import * as assert from 'assert';
import { missing } from './missing';

describe('Function: missing(arr)', () =>
{

    it('should return [3] from [1, 2, 4]', () =>
    {
        assert.deepEqual([3], missing([1, 2, 4]));
    });

    it('should return [3, 5] from [1, 2, 4, 6]', () =>
    {
        assert.deepEqual([3, 5], missing([1, 2, 4, 6]));
    });

    it('should return empty array for empty array', () =>
    {
        assert.deepEqual([], missing([]));
    });

});
