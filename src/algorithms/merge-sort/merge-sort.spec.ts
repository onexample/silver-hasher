import * as assert from 'assert';
import { mergeSort } from './merge-sort';

describe('Algorithm: mergeSort(arr)', () => {

    it('should sort array in asscending order', () => {
        const payload = [1, 4, 5, 0, 3];
        assert.deepEqual([0, 1, 3, 4, 5], mergeSort(payload))
    })

})