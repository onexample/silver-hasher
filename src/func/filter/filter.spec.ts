import * as assert from 'assert';
import { filter } from './filter';

describe('Function: filter(arr, fn)', () =>
{

    it('should return filtered array [1, 2] from [1, 2, 3, 4] with fn = n => n < 3', () => {
        assert.deepEqual([1,2], filter([1,2,3,4], n => n < 3 ));
    });

    it('should return filtered array [2, 4] from [1, 2, 3, 4] with fn = n => n % 2 === 0', () => {
        assert.deepEqual([2,4], filter([1,2,3,4], n => n % 2 === 0 ));
    });

    it('should return filtered array [{sum:1}, {sum:2}] from [{sum:1}, {sum:2}, {sum:3}, {sum:4}] with fn = n => n.sum < 3', () => {
        assert.deepEqual([{sum:1}, {sum:2}], filter([{sum:1}, {sum:2}, {sum:3}, {sum:4}], n => n.sum < 3));
    });

});
