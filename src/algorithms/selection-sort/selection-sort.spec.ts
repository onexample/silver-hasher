import * as assert from 'assert';
import { selectionSort } from './selection-sort';

describe('Algorithm: selectionSort(arr)', () => {
    it('should sort array in ascending order', () => {
        const payload = [1, 4, 2, 444, 22, 192];
        const actual = selectionSort(payload);
        const expected = [1, 2, 4, 22, 192, 444];
        assert.deepEqual(actual, expected);
    });
});
