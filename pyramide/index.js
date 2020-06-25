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
        if(hash === ""){
            hash += "#";
        }else{
            hash += "##";
        }
    }

    return hash;
}

function pyramid(n) {

    let totalPounds;

    if(n === 1){
      totalPounds = 1;
    }

    if(n === 2){
        totalPounds = 3;
    }

    if(n > 2){
        totalPounds = (n - 2) * 2 + 3; 
    }

    for(let i = 1; i < n + 1; i++){
        let hashString = logHash(i);
        let spacestring = returnSpaceString(totalPounds - hashString.length);
        spacestring = spacestring.slice(0,Math.floor(spacestring.length / 2));
        console.log(spacestring + hashString + spacestring);
    }
}


pyramid(4)

module.exports = pyramid;