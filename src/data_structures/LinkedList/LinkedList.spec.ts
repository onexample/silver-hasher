import * as assert from 'assert';
import { LinkedList } from './LinkedList';

describe('Class: LinkedList', () =>
{

    it('should add item to the List', () => {

        let list = new LinkedList();
        list.add(1);

        assert.equal(1, list.size())

    });
});
