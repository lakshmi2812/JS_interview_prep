//Reverse a string
//Example: i love javascript
//Answer of reversed string: tpircsavaj evol i

function reverseString(str){
  let reverseStrArr = str.split(' ');
  let reversedArr = [];
  reverseStrArr.forEach((subStr)=>{
    reversedArr.push(subStr.split("").reverse().join(''))
  });
  //console.log(reversedArr);
  let reversedStr = reversedArr.join(' ');
  return reversedStr;
}

console.log(reverseString("i love javascript"));
