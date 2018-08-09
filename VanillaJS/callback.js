function takesCallback(callback){
  let name = 'Sam';
  if(callback){
    callback(name)
  }else{
    console.log('error');
  }
}

let callback = function(name){
  console.log(`Hello, ${name}`);
}

takesCallback(callback);
