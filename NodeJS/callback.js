//What is a callback function in JS? Write a callback function in js

/*Ans: A higher function is also called a callback function in JS.
A function that is passed as a parameter to another function ins called a callback function in JS*/

//Simple examples we commonly use in JS:
//Array methods like -> forEach, map, filter
let arr = [1,2,3,4];

arr.forEach((elem)=>{console.log(elem)});

//Another example
var errCallback = function(err){
  if(err){
    return true
  }else{
    return false
  }
}

var useCallback = function(callback){
  if(callback){
    console.log("error");
  }else{
    console.log("success!");
  }
}
useCallback(errCallback(false));
