// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function returnSpaceString(n){
    let space = "";
    for(let i = 0; i < n; i++){
        space += " ";
    }

    return space;
}

function logHash(n){
    let hash = "";
    for(let i = 0; i < n; i++){
        hash += "#";
    }

    return hash;
}

function steps(n) {
    for(let i = 1; i < n + 1; i++){
        let hashString = logHash(i);
        let spacestring = returnSpaceString(n - i);
        console.log(hashString + spacestring);
    }
}


steps(10)

module.exports = steps;