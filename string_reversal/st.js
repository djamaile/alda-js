function reverse(str){
   const arr = str.split("");
   arr.reverse();
   return arr.join("");
}

function reverse2(str){
    let reversed = "";
    for(let char of str){
        reversed = char + reversed;
    }
}

function reverse3(str){
    return str.split('').reduce((reversed, char) => {
        return char += reversed;
    }, '');
}

reverse("abc");

module.exports = reverse;