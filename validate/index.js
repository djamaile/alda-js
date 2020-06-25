// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const Node = require("./node");

function validate(node, min = null, max = null) {
    //onsole.log(node);
    if(max){
        //console.log(`Data: ${node.data} and max ${max}`);
        if(node.data >= max){
            return false;
        }
    }

    if(min){
        //console.log(`Data: ${node.data} and min ${min}`);
        if(node.data >= min){
            return false;
        }
    }

    if(node.left){
        console.log(`Checking ${node.left.data} against max ${node.data}`);
        return validate(node.left,  null, node.data)
    }else if(node.right){
        console.log(`Checking ${node.right.data} against min ${node.data}`);
        return validate(node.right, node.data, null);
    }

    return true;

}

const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);
n.left.left.right = new Node(999);
console.log(validate(n));

module.exports = validate;