let x = [1,2,2,4,2,4,2];

let arrMax = Math.max(...x);
let count = 0;
for(let i = 0; i < x.length; i++){
  if(x[i] === arrMax){
    count+=1;
  }
}
console.log(count);
