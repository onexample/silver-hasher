import * as assert from 'assert';
import { isPalindrome } from './isPalindrome';

describe('Function: isPalindrome(str)', () =>
{

    it('should return true  for empty string', () => {
        assert.equal(true, isPalindrome(''));
    });

    it('should return true  for str = abcdcba', () => {
        assert.equal(true, isPalindrome('abcdcba'));
    });

    it('should return false for str = abcd', () => {
        assert.equal(false, isPalindrome('abcd'));
    });

    it('should return true  for str = A man a plan a canal Panama', () => {
        assert.equal(true, isPalindrome('A man a plan a canal Panama'));
    });

});
