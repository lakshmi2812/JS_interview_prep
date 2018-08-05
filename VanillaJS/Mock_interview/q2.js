//Check if a string is a palindrome

function isPalindrome(str){
  let reverseStrArr = str.split("").reverse();
  let strArr = str.split("");
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i] !== reverseStrArr[i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("abca"));
