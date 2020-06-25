function anagrams(stringA, stringB){
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }

    for (let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;
}

function buildCharMap(str){
    const charMap = {};

    for(char of str.replace(/[^\w]/g, "").toLowerCase()){
        charMap[char] = charMap + 1 || 1
    }

    return charMap;
}

console.log(anagrams("rail safety", "fairy tales"));

module.exports = anagrams;
