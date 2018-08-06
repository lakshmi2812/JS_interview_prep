//find duplicate in array of nums say upto 100. There will be exactly 1 duplicate

// function findDuplicate(arr){
//   //console.log(arrSorted);
//   let countObj = {};
//   for(let i = 0; i < arr.length;i++){
//     if(!countObj[arr[i]]){
//       countObj[arr[i]] = 1;
//     }else{
//       return arr[i];
//     }
//   }
//   console.log(countObj)
// }
//
// console.log(findDuplicate([3,1,5,6,7,7,7,4,8,2,9,10]))

//find duplicate in array of nums say upto 100. There will be multiple duplicates

function findMultipleDuplicates(arr){
  let countObj = {};
  let duplicates = [];
  for(let i = 0; i < arr.length;i++){
    if(!countObj[arr[i]]){
      countObj[arr[i]] = 1;
    }else{
      if(!duplicates.includes(arr[i])){
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

console.log(findMultipleDuplicates([3,1,5,6,7,7,7,4,8,2,2,9,10]));
