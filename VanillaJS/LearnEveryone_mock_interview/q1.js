//How can you create an object in javascript?
//Answer:

//Using the bracket notation
var obj = {name: "Zara", age: 10};
//Using object constructor
var objNew = new Object();
//Using Object.create()
var myObj = Object.create(null);
//Using a function constructor
var funcObj = function(name){
  this.name = name;
}
