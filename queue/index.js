const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const mergedQueue = new Queue();
    let biggestQueueSize;
    let smallestQueueSize;
    if(sourceOne.size() > sourceTwo.size()){
        biggestQueueSize = sourceOne;
        smallestQueueSize = sourceTwo;
    }else{
        smallestQueueSize = sourceOne;
        biggestQueueSize = sourceTwo;
    }

    if(sourceOne.size() === sourceTwo.size()){
        const size = sourceTwo.size();
        for(let i = 0; i < size; i++){
            mergedQueue.add(sourceOne.remove());
            mergedQueue.add(sourceTwo.remove());
        }
    }else{
        const biggestSize = biggestQueueSize.size();
        const smallestSize = smallestQueueSize.size();
        for(let i = 0; i < biggestSize; i++){
            if(i + 1 > smallestSize){
                mergedQueue.add(biggestQueueSize.remove());
            }else{
                mergedQueue.add(biggestQueueSize.remove());
                mergedQueue.add(smallestQueueSize.remove());
            }
           
        }
    }
    
    return mergedQueue;
}

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
queueOne.add(3);
queueOne.add(4);
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
queueTwo.add('How');
queueTwo.add('Are');
queueTwo.add('You');
const q = weave(queueOne, queueTwo);
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());


module.exports = weave;