// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
const performance = require('perf_hooks').performance;


function vowels(str) {
    var t0 = performance.now();
   
    str = str.toLowerCase();
    let foundVowelCounter = 0;
    const vowels = new Set();
    vowels.add("a");
    vowels.add("e");
    vowels.add("i");
    vowels.add("o");
    vowels.add("u");

    for (let i = 0; i < str.length; i++) {
        if (vowels.has(str.charAt(i))) {
            foundVowelCounter++;
        }
    }
    var t1 = performance.now();
    console.log("took " + (t1 - t0) + " milliseconds.");
    return foundVowelCounter;
}

console.log(vowels("abcdefghijklmnopqrstuvwxyz"));

module.exports = vowels;