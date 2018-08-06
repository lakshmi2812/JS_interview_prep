class Stack{
  constructor(size){
    this.stack = new Array(size)
    this.stack.fill(-1);
    this.sp = 0;
  }

  push(item){
    this.stack[this.sp] = item;
    this.sp++;
  }

  pop(){
    let newStack = [];
    let poppedItem = this.stack[this.sp];
    for(let i = 0; i < this.stack.length; i++){
      if(i<this.sp-1){
        newStack.push(this.stack[i]);
      }else{
        newStack.push(-1);
      }
    }
    this.stack = newStack;
    return poppedItem;
  }

  peek(){
    return this.stack[this.sp];
  }
}

let myStack = new Stack(10);
console.log(myStack.stack);
myStack.push(5);
myStack.push(8);
myStack.push(1);
myStack.push(9);
console.log(myStack.stack);
myStack.pop();
console.log(myStack.stack);
