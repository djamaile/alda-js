function reverseInt(int){
    let turnIntToString = int.toString();
    let splittedString = turnIntToString.split("");

    if(Math.sign(int) === -1){
        const tempChar = splittedString[splittedString.length]; 
        splittedString[splittedString.length] = "-";
        splittedString[0] = tempChar;
    }

    const reversedInt = parseInt(splittedString.reduce((reversed, char) => char += reversed, ''));
    
    if (reversedInt > Math.pow(2,31)-1) {
        return 0;
    }

    return reversedInt;

}

console.log(reverseInt(321));

module.exports = reverseInt;