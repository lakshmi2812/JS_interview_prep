let arr = [1,2,5,7];

function arrSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

//Use reduce function to calculate array sum

reduceArraySum = arr.reduce((accumulator, currentValue)=>accumulator*currentValue);

console.log("Array sum using reduce: ", reduceArraySum);

console.log(arrSum(arr));
