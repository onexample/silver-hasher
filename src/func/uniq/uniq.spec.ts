import * as assert from 'assert';
import { uniq } from './uniq';

describe('Function: uniq(arr)', () => {
    it('should return empty array for empty array', () => {
        assert.deepEqual([], uniq([]));
    });

    it('should return [1, 4, 2, 3, 8] for array [1, 4, 2, 2, 3, 4, 8]', () => {
        assert.deepEqual([1, 4, 2, 3, 8], uniq([1, 4, 2, 2, 3, 4, 8]));
    });
});
