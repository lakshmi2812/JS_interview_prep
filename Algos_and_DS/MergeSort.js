function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);
  console.log(left);
  console.log(right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while(i < left.length && j < right.length){
    if(left[i]<=right[j]){
      mergedArray.push(left[i]);
      i++;
    }else{
      mergedArray.push(right[j]);
      j++;
    }
  }
  while(i<left.length){
    mergedArray.push(left[i]);
    i++;
  }
  while(j<right.length){
    mergedArray.push(right[j]);
    j++;
  }
  return mergedArray;
}

console.log(mergeSort([6,2,5,2,4,5]));//expected: [2,2,4,5,5,6]
