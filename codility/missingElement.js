function solution(A) {
    let highestNumber = 1;
    let missingNumber;

    for(let i = 0; i < A.length; i++){
        if(A[i] > highestNumber){
            highestNumber = A[i];
        }
    }

    for(let i = 1; i < highestNumber; i++){
        if(!A.includes(i)){
            missingNumber = i;
            break;
        }
    }

    return missingNumber;
}

console.log(solution([1,2,4,5]));