let x = {
  a:function(){
    return this;
  },
  b:function(){
    return this;
  }
}

console.log(x.a().b().a().a());
