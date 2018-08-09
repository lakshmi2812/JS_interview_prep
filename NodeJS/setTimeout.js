function callAfterms(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve('success!'),ms)
  })
}

callAfterms(1000)
.then((result)=>{
  console.log(result);
});
