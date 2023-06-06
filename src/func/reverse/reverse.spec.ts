import * as assert from 'assert';
import { reverse } from './reverse';

describe('Function: reverse(str)', () => {
    it('should return cba for str=abc', () => {
        assert.equal('fedcba', reverse('abcdef'));
    });

    it('should return empty string if empty string passed', () => {
        assert.equal('', reverse(''));
    });
});
