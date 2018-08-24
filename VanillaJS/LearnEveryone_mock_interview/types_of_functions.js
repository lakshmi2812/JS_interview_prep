/*
What are the type sof functions in javascript? Give examples.
Ans: There are two types of functions in Javascript. They are: 1)Named functions and 2) Anonymous functions
*/
//Named function example

function myFunc(age){
  return age;
}

//Anonymous function example
//This is an anonymous function assigned to a variable.
//You can ofcourse pass arguments to an anonymous function

var myAnonymousFunc = function(age){
  return age;
}

console.log(myFunc(10));
console.log(myAnonymousFunc(20));
