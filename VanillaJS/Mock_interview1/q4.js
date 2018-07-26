

Array.prototype.print = function(){
  let result = "";
  for(let i = 0; i < this.length; i++){
    console.log(this[i]);
    // result+=this[i];
    // console.log(result);
  }
}


console.log([1,2].print());

// Array.prototype.myUcase = function() {
//     for (i = 0; i < this.length; i++) {
//         this[i] = this[i].toUpperCase();
//         console.log(this[i]);
//     }
// };
//
// var fruits = ["banana", "plum", "water melon"];
// console.log(fruits.myUcase());
