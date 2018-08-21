//Q1.
//What will be the output of the following statements and why?
console.log(2+'2');
/*Ans: '22' because '+' operator can used as sum for numbers but concatenation operator for strings.
Hence, the first 2 will be converted to string
*/
console.log(2-'2');
//Ans: 0 because '-' operator can be used only with numbers. Hence, second 2 will be converted to a number

//Q2.
//Write one line of code in JS to remove duplicates from an array. Do not use for loop, map, reduce, etc.,
//Ans:
let array = [1,2,2,3];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray)
