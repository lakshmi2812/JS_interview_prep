const a = [1,2,5,7,9];
const b = [2,5,7,12,100];

function merge(a,b){
  let i = 0;
  let j = 0;
  let c = [];
  while(i < a.length && j < b.length){
    if(a[i]<b[j]){
      c.push(a[i])
      i++;
    }else{
      c.push(b[j])
      j++;
    }
  }
  while(i < a.length){
    c.push(a[i])
    i++;
  }
  while(j < b.length){
    c.push(b[j])
    j++;
  }
  return c;
}

console.log(merge(a,b));
