function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(X >= Y){
        return 0;
    }

    let remainder = Y - X;

    return Math.ceil((remainder / D) * 1);


}

console.log(solution(10,85,30));