function maxChar(str){
    let chars = {};
    let highestCharCount = 0;
    let charValue = "";

    for(char of str){
        chars[char] = chars[char] + 1 || 1;
        if(chars[char] > highestCharCount){
            highestCharCount = chars[char];
            charValue = char;
        }
    }

    return charValue;
}

maxChar("Djamaile");

module.exports = maxChar;