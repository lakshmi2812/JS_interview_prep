//[6,5,1,3,8,4,7,9,2]
function quickSort(arr){
  let n = arr.length-1;
  let pivot = arr[n];
  let wall = 0;
  let current = arr[wall];
  let i = 0;
  let swap;
  let _swap;
  //do this n-1 times at max
  while(wall < n){
    let i = wall;
    current = arr[wall];
    //console.log(current);
    console.log(wall);
    while(i < n){
      if(pivot > arr[i]){
        swap =  arr[i];
        arr[i] = current;
        current = swap;
        wall++;
      }
      i++;
    }
    _swap = current;
    pivot = current;
    current = _swap;
    wall++;
    console.log(arr);
  }
  return arr;
}
console.log(quickSort([6,5,1,3,8,4,7,9,2]))
