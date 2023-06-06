import * as assert from 'assert';
import { indexOf } from './indexOf';

describe('Function: indexOf(arr, value)', () => {
    it('should return  2 for [1, 2, 3, 4] for value=3', () => {
        assert.equal(2, indexOf([1, 2, 3, 4], 3));
    });

    it('should return -1 for [1, 2, 3, 4] for value=5', () => {
        assert.equal(-1, indexOf([1, 2, 3, 4], 5));
    });
});
