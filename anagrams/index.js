function anagrams(stringA, stringB){

    if(stringA.length !== stringB.length){
        return false;
    }

    let stringAJson = {};
    let stringBJson = {};
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort();

    for(char of stringA){
       if(!stringAJson[char]){
           stringAJson[char] = 1;
       }
       stringAJson[char] = stringAJson[char] + 1;
    }

    for(char of stringB){
        if(!stringBJson[char]){
            stringBJson[char] = 1;
        }
        stringBJson[char] = stringBJson[char] + 1;
     }

     if(JSON.stringify(stringAJson) === JSON.stringify(stringBJson)){
         return true;
     }else{
         return false;
     }
}

console.log(anagrams("rail safety", "fairy tales"));
module.exports = anagrams;