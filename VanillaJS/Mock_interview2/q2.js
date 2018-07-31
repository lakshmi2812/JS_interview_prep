//A function should be able to be called both like this add(1,2) and also
//add(1)(2)

function add(x,y){
  if(y){
    return x+y;
  }else{
    return function(z){
      return x+z;
  }
}
}

console.log(add(1,2));
console.log(add(1)(2));
