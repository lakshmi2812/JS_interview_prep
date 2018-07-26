//When a function is called as a method of an object, 'this' refers to the object that the
//method is called on.
const obj = {
  a:1,
  b:2,
  getA: function(){
    console.log(this.a);
    return this;
  },
  getB: function(){
    console.log(this.a);
  }
}

obj.getA().getB();
