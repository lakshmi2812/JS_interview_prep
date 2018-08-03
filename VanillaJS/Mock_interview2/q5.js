//Pay bill of $20.47 using least number of coins

const til = {
  penny:12,
  nickel:10,
  dime:2,
  quarter:12,
  dollar:30
}

function payLeastCoins(til, amount){
  let coinValue = {
    dollar:100,
    quarter:25,
    dime:10,
    nickel:5,
    penny:1
  }
  let coinValueSorted = Object.values(coinValue).sort((a,b)=>b-a>0);
  console.log(coinValueSorted);

  let amountInCents = amount*100;
  console.log(amountInCents)
  let count = 0;
  let i = 0;
  while(amountInCents>0){
    if(amountInCents>coinValueSorted[i]){
      let quotient = Math.floor(amountInCents/coinValueSorted[i]);
      if(quotient !== 0){
        count += quotient;
        coinValueSorted -= quotient*coinValueSorted[i]
      }
    }
    i++;
  }
  return count;
}

console.log(payLeastCoins(til,20.47))
