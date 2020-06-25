function getLastChar(array){

    let string = "";

    if(array.length === 1){
        return string += array[0];;
    }

    string += array.pop();

    return string += getLastChar(array);
}

function reverse(string){
     if(string.length === 0){
         return;
     }

     if(string.length === 1){ 
         return string;
     }

     
     let stringArr = string.split("");
     string = getLastChar(stringArr);

     return string;
}

console.log(reverse("abc"));

module.exports = reverse;