// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }

}


let t = new Tree();
/*tree.root = new Node(20);
tree.root.add(0);
tree.root.add(12);
tree.root.add(-2);
tree.root.add(1);
tree.root.add(40);
tree.root.add(-15);
tree.root.add(-2);*/

t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');


/*tree.traverseBF(node => {
    console.log(node.data)
})*/

t.traverseDF(node => {
    console.log(node.data)
})




module.exports = { Tree, Node };