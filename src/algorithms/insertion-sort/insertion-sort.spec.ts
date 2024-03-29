import * as assert from 'assert';
import { insertionSort } from './insertion-sort';

describe('Algorithm: insertionSort(arr)', () => {
    it('should sort array in ascending order', () => {
        const payload = [1, 4, 2, 444, 22, 192];
        const actual = insertionSort(payload);
        const expected = [1, 2, 4, 22, 192, 444];
        assert.deepEqual(actual, expected);
    });
});
