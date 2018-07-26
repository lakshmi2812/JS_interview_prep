const a = function(x){
  this.x = x;
  this.getX = function(){
    return this.x;
  }
}

a.prototype.getX = function(){
  return this.x;
}

const b = function(x,y){
  a.call(this,x);
  this.y = y;
  this.getY = function(){
    return this.y;
  }
}

let newB = new b('x', 'y');

console.log(newB.getX());
console.log(newB.getY());
