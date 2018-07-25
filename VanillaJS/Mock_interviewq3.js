const arr = [5, 120, 15, 21];

for(let i = 0; i < arr.length; i++){
  setTimeout(()=>{
    console.log(`Index of ${i}, element: ${arr[i]}`);
  }, arr[i]);
}

/*Expected output:
0 5
2 15
3 21
1 120
*/
