/*
Consider a number 10345 -> /10 = 1000; /10 -> 100; /10 -> 10; /10 -> 1
Find the length of the number(no.of.digits)
without converting number to a string
*/

function findLength(num){
  let count = 0;
  while(num > 10){
    quotient = num/10;
    num = quotient;
    count++;
  }
    count++;
    return count;
}

console.log(findLength(10,345));
