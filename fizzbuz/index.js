
function checkForMultiply(value, multiply){
 if(value % multiply === 0){
     return true;
 }else{
     return false;
 }
}

function fizzBuzz(n){
    for(let i = 1; i < n + 1; i++){
        if(checkForMultiply(i,15)){
            console.log("fizzbuzz");
        }else if(checkForMultiply(i,5)){
            console.log("buzz");
        }else if(checkForMultiply(i,3)){
            console.log("fizz");
        }else{
            console.log(i);
        }
    }
}

fizzBuzz(5);

module.exports = fizzBuzz;