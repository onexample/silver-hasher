import * as assert from 'assert';
import { permute } from './permute';

describe('Function: permute(str)', () => {
    it("should return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'] for str=abc", () => {
        assert.deepEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'], permute('abc'));
    });

    it('should return empty array if empty string passed', () => {
        assert.deepEqual([], permute(''));
    });
});
