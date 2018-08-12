class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  //build a list with elements 1,2,3
  buildOneTwoThree(){
    let newNode = new Node(1)
    this.head = newNode;
    this.head.next = new Node(2);
    this.head.next.next = new Node(3);
    this.head.next.next.next = null;
    return this.head;
  }

  //print the linked list
  printList(){
    let currentNode = this.head;
    let currentString = "";
    while(currentNode!==null){
      currentString += " " + currentNode.data + " " + "-->" + " ";
      currentNode = currentNode.next;
    }
    currentString += "null";
    console.log(currentString);
  }

  //returns the length of the linked list
  length(){
    if(this.head === null){
      return 0;
    }
    let count = 1;
    let currentNode = this.head;
    while(currentNode.next !== null){
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  //push --> adds node to the beginning of the list
  push(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //appendNode --> adds node to the end of the list
  appendNode(data){
    if(this.head === null){
      this.head = new Node(data);
    }
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
    this.tail = currentNode.next;
    currentNode.next.next = null;
  }

  //copyList --> make a new LinkedList that is a copy of this LinkedList
  copyList(node=this.head){
    let newLinkedList = new LinkedList();
    newLinkedList.head = node;
    let currentCopyNode = newLinkedList.head;
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentCopyNode.next = currentNode.next;
      currentNode = currentNode.next;
      currentCopyNode = currentCopyNode.next;
    }
    return newLinkedList;
  }
}

//Test Cases for buildOneTwoThree
let newList = new LinkedList();
// newList.buildOneTwoThree();
// newList.printList();
// //Test Case for length() function
// console.log(`The linked list has ${newList.length()} elements`);
// //Test Case for push function
// newList.push(5);
// console.log(newList.head);
// newList.printList();
//
//
//**********************************
//Test Case for appendNode function
let arr = [7,90,45,34,23,4567,100];
for(let i = 0; i < arr.length; i++){
  newList.appendNode(arr[i]);
}
newList.printList();
console.log(`HEAD--> ${newList.head.data}`);
console.log(`HEAD.next--> ${newList.head.next.data}`);
//*************************************
//Test case for copyList function
newList.copyList().printList();
