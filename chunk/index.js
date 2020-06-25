function chunk(array, size){
  let motherArray = [];
  const arrayCanDivided = array.length % size === 0;
  if(arrayCanDivided){
    for(let i = array.length; i > array.length; i--){
        motherArray.push(array.splice(0,size));
    }
    return motherArray;
  }
}

console.log(chunk([1,2,3,4,5,6,7,8,9,10], 2));

module.exports = chunk; 