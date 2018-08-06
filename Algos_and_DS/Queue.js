class Queue{
  constructor(){
    this.queue = [];
    this.size = 0;
  }

  enqueue(item){
    let newArray = [...this.queue,item];
    this.queue = newArray;
    this.size++;
  }

  dequeue(){
    let dequeuedItem = this.queue[0];
    if(this.size === 0){
      return "Queue is empty!";
    }
    else if(this.size === 1){
      this.queue = [];
      return dequeuedItem;
    }else{
      let tempArray = this.queue.slice(1);
      this.queue = tempArray;
      return dequeuedItem;
    }
  }
}

let myQueue = new Queue();
console.log(myQueue.queue);
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
console.log(myQueue.queue);
console.log(myQueue.dequeue());
console.log(myQueue.queue);
