/*
[1,2,3,4]
1-> 9      --->  sum of rest of numbers
2 -> 8
3 -> 7
4 -> 6
Find the min and max among this and return as [min,max]
*/

function minMax(arr){
  let total = arr.reduce((accumulator, init)=>accumulator+init);
  //console.log(total);
  let eachTotal = [];
  for(let i = 0; i < arr.length; i++){
    let each = total-arr[i];
    eachTotal.push(each);
  }
  return [Math.max(...eachTotal), Math.min(...eachTotal)];
}

let arr = [1,2,3,4];

console.log(minMax(arr));
