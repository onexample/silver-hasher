import * as assert from 'assert';
import { isBalanced } from './isBalanced';

describe('Function: isBalanced(str)', () => {
    it('should return false for str = }{ ', () => {
        assert.equal(false, isBalanced('}{'));
    });

    it('should return false for str = [[] ', () => {
        assert.equal(false, isBalanced('[[]'));
    });

    it('should return true for str = (()) ', () => {
        assert.equal(true, isBalanced('(())'));
    });

    it('should return true for str = foo { bar { baz } boo } ', () => {
        assert.equal(true, isBalanced('foo { bar { baz } boo }'));
    });

    it('should return false for str = foo { bar { baz } ', () => {
        assert.equal(false, isBalanced('foo { bar { baz }'));
    });

    it('should return false for str = foo { bar } } ', () => {
        assert.equal(false, isBalanced('foo { bar } }'));
    });
});
