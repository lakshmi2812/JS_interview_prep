//[1-100] Given an array of numbers ranging from 1 to 100
//There is one number missing. There are 99 elements left.
//Find that number

function missingNumber(arr){
  let sortedArr = arr.sort((a,b)=>a-b>0);
  console.log(sortedArr);
  let i = 0;
  while(i < sortedArr.length-1){
    if(sortedArr[i]+1 !== sortedArr[i+1]){
      return (sortedArr[i]+1);
    }
    i++;
  }
  if(i === sortedArr.length-1){
    return (sortedArr[i]+1);
  }
}

console.log(missingNumber([8,4,6,10,9,1,5,2,3]));
