function reverseString(string){
    return string.split("").reduce((reversed, char) => char += reversed, '');
}

function palindrome(string){
    if(string.length === 2 || string.length === 3){
        const reversedString = reverseString(string);
        if(reversedString === string){
            return true;
        }else{
            return false;
        }
    }

    const stringIsOdd = string.length % 2 === 0;

    if(!stringIsOdd) {return false;}

    const splittedString = string.split("");
    const firstHalfOfString = splittedString.splice(0, splittedString.length / 2).join("");
    const secondHalfOfString = splittedString.splice(0, splittedString.length).join("");
    const reversedString = reverseString(firstHalfOfString);
   
    if(reversedString === secondHalfOfString){
        return true;
    }else{
        return false;
    }
}

console.log(palindrome("aba"))

module.exports = palindrome;