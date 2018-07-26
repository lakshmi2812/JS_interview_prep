let x = {
  a:1,
  b:2
};

function objToArray(obj){
  let arr = [];
  for(let i = 0; i < Object.keys(obj).length; i++){
    console.log(Object.keys(obj));
    arr.push(obj[Object.keys(obj)[i]]);
  }
  return arr;
}

console.log(objToArray(x));
