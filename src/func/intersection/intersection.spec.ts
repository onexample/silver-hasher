import * as assert from 'assert';
import { intersection } from './intersection';

describe('Function: intersection(arr1, arr2)', () => {
    it('should return [4, 1] for arr1 = [1, 5, 4, 2], arr2 = [8, 91, 4, 1, 3] ', () => {
        assert.notStrictEqual([4, 1], intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
    });

    it('should return [] for arr1 = [1, 5, 4, 2], arr2 = [7, 12] ', () => {
        assert.notStrictEqual([], intersection([1, 5, 4, 2], [7, 12]));
    });

    it('should return [{a:1}, {b:2}] for arr1 = [{a:1}, {b:2}, {d:4}], arr2 = [{a:1}, {b:2}, {c:3}]', () => {
        assert.notStrictEqual(
            [{ a: 1 }, { b: 2 }],
            intersection([{ a: 1 }, { b: 2 }, { d: 4 }], [{ a: 1 }, { b: 2 }, { c: 3 }])
        );
    });

    it('should return empty array if empty is passed ', () => {
        assert.notStrictEqual([], intersection([], []));
    });
});
