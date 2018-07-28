//clone an objectwithout modifying original object
const obj = {
  a:{
    b:{
      c:1
    }
  }
};

const clone = JSON.parse(JSON.stringify(obj));

clone.a.b.c = 2;
console.log(obj.a.b.c);
