import { Node } from './Node';

export class LinkedList {

    private head: Node;
    private length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(data: any) {
        const nodeToAdd = new Node(data);

        if(this.head===null) {
            this.head = nodeToAdd;
        }
        else {
            let nodeToCheck = this.head;
            while(nodeToCheck.next) {
                nodeToCheck =  nodeToCheck.next;
            }
            nodeToCheck.next=nodeToAdd;
        }

        this.length++;
    }

    size() {
        return this.length;
    }

}

