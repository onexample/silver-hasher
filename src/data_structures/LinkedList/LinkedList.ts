import { Node } from './Node';

/**
 * A linear collection of data elements
 *
 */
export class LinkedList {
    private head: Node;
    private length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(data: any) {
        const nodeToAdd = new Node(data);

        if (this.head === null) {
            this.head = nodeToAdd;
        } else {
            let nodeToCheck = this.head;
            while (nodeToCheck.next) {
                nodeToCheck = nodeToCheck.next;
            }
            nodeToCheck.next = nodeToAdd;
        }

        this.length++;
    }

    size() {
        return this.length;
    }

    remove(position: number) {
        let currentNode = this.head;
        const length = this.length;
        let count = 0;
        const message = 'Failure: non-existent node in this list.';
        let beforeNodeToDelete = null;
        let nodeToDelete = null;
        let deletedNode = null;

        // in case of invalid position passed
        if (position < 0 || position > length) {
            throw new Error(message);
        }

        // in case when first node removed
        if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this.length--;
            return deletedNode;
        }

        // in case when any other node is removed
        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this.length--;

        return deletedNode;
    }
}
