import * as assert from 'assert';
import { reduce } from './reduce';

describe('Function: reduce(arr, iter, acc)', () => {
    it('should return 10 for reduce([1, 2, 3, 4], (a, b) => a + b, 0)', () => {
        assert.equal(
            10,
            reduce([1, 2, 3, 4], (a, b) => a + b, 0)
        );
    });

    it('should return 10 for reduce([1, 2, 3, 4], (a, b) => a + b)', () => {
        assert.equal(
            10,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            reduce([1, 2, 3, 4], (a, b) => a + b)
        );
    });

    it('should return undefined for reduce([], (a, b) => a + b)', () => {
        assert.equal(
            undefined,
            reduce([], (a, b) => a + b)
        );
    });
});
