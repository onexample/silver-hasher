import * as assert from 'assert';
import { isSorted } from './isSorted';

describe('Function: isSorted(arr)', () => {
    it('should return true for sorted array in increasing order [-Infinity, -5, 0, 3, 9]', () => {
        assert.equal(true, isSorted([-Infinity, -5, 0, 3, 9]));
    });

    it('should return true for empty array', () => {
        assert.equal(true, isSorted([]));
    });

    it('should return true for sorted array in decreasing order [9, 4, 3, -1, -Infinity]', () => {
        assert.equal(true, isSorted([9, 4, 3, -1, -Infinity]));
    });

    it('should return false for unsorted array [3, 9, -3, 10]', () => {
        assert.equal(false, isSorted([3, 9, -3, 10]));
    });
});
