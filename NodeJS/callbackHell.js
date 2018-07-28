//Example of callback hell in JS
var fs = require('fs');
fs.readFile('hello.txt', (err, data)=>{
  if(err){
    console.log(err);
  }else{
    fs.appendFile('hello.txt', 'how are you', (err)=>{
      if(err){
        console.log(err)
      }else{
        console.log("Write to file successful!");
      }
    })
  }
})
