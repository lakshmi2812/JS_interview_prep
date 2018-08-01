//Function expressions vs Function declarations
/*
Notes:
-----
Function declarations are hoisted.
But, function expressions are not hoisted
So, we cannot use them before defining them
Let us see some examples
*/

// console.log(myFuncExpression());//throws reference error saying that myFuncExpression is not defined
//
//
// let myFuncExpression = function(){
//   return "You cant call me before declaring me because I'm not hoisted";
// }

//Now, consider function declaration

console.log(myFuncDeclaration());

function myFuncDeclaration(){
  return "You can call me before defining me because I'm hoisted :)";
}
