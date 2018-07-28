//Use Promise
var testEven = new Promise((resolve, reject)=>{
  let date = new Date();
  if(date%2 === 0){
    resolve("Even!")
  }else{
    reject("Odd!")
  }
})

testEven.then((result)=>{
  console.log(result)
},
(err)=>{
  console.log(err)
})

//Use Async await
function returnsPromise(){
  return new Promise((resolve, reject)=>{
    resolve("success!");
  })
}


var promiseResult = async function(){
  console.log("About to resolve promise");
  let result = await returnsPromise();
  console.log(result);
}

promiseResult();
