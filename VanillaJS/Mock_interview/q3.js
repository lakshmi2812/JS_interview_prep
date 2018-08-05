//Find number of occurences of character 'c' in given string

function charOccurences(string, c){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === c){
      count++;
    }
  }
  return count;
}

console.log(charOccurences("success", "s"));
