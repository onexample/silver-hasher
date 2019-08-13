import * as assert from 'assert';
import { LinkedList } from './LinkedList';

describe('DataSctructure: LinkedList', () =>
{

    it('should add item to the List', () => {

        let list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);

        assert.equal(3, list.size())

    });

    it('should remove item from List', () => {
        let list = new LinkedList();
        list.add(1);
        list.add(4);
        list.add(6);
        list.add(7);
        list.add(3);
        list.add(8);
        list.remove(1);
        list.remove(2);
        list.remove(3);

        assert.equal(3, list.size())
    });

    it('should throw exception for invalid position', () => {
        let list = new LinkedList();
        list.add(1);

        assert.throws(() => list.remove(-1), Error);
    });

});
