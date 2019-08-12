import * as assert from 'assert';

import { radixSort } from './radix-sort';

describe('Algorithm: radixSort(arr)', () => {
    
    it('should sort array in ascending order', () => {
        const payload = [1, 4, 2, 444, 22, 192];
        const actual = radixSort(payload);
        const expected = [1, 2, 4, 22, 192, 444];
        assert.deepEqual(actual, expected);
    })

})