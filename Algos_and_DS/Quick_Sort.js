function quickSort(arr){
  let wall = 0;
  let currentElem;
  let i;
  let pivot;
  //while wall does not reach the pivot
  while(wall !== arr.length-1){
    //one complete iteration of the array
    pivot = arr[arr.length-1];
    currentElem = arr[wall];
    i = wall;
    while(i < arr.length-1){
      if(arr[i] > pivot){
        i++;
      }
      let swap = currentElem;
      currentElem = arr[i];
      arr[i] = swap;
      wall++;
    }
    let swapper = pivot;
    pivot = currentElem;
    currentElem = swapper;
    wall++;
  }
  return arr;
}
console.log(quickSort([6,5,1,3,8,4,7,9,2]))
