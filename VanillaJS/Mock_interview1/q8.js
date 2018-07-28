// const obj = {
//   x:1,
//   getX:function(){
//     const inner = function(){
//       console.log(this.x);
//     }
//     inner();
//   }
// };

//obj.getX() in above code returns undefined
//Q. Fix obj to return 1 as output for line 11

//Solution 1: Make inner an arrow function
const obj = {
  x:1,
  getX:function(){
    const inner = ()=>{
      console.log(this.x);
    }
    inner();
  }
};
obj.getX();
//Solution 2: use call, apply or bind
obj.getX.call(obj)
obj.getX.apply(obj)
obj.getX.bind(obj)
