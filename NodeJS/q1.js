//What is error-first callback?
var fs = require('fs');
fs.readFile('hello.txt', (err, data)=>{
  if(err){
    console.log(err)
  }else{
    console.log(data)
  }
})
