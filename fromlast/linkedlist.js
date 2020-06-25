// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let size = 0;
        let node = this.head;

        while (node) {
            size++;
            node = node.next;
        }

        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head.next;

        while (node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null;

    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(value) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === value) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null; 
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            this.head = this.head.next;
        }

        const prev = this.getAt(index - 1);
        if(!prev || !prev.next){
            return null;
        }
        prev.next = prev.next.next;
    }

    insertAt(data, index){

        if(!this.head){
            this.head = new Node(data);
        }

        if(index === 0){
            this.head = new Node(data, this.head);
        }

        const prev = this.getAt(index  - 1) || this.getLast();
        const toBeAddedNode = new Node(data, prev.next);

        prev.next = toBeAddedNode;

    }

    forEach(fn){
        let node = this.head;
        let counter = 0;

        while(node){
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

const list = new LinkedList();
list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);

console.log(list.size());

module.exports = { Node, LinkedList };