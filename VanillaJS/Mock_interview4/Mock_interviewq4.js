'use strict';

let time = '2:03PM';

//Convert time to 24 hr format military time format

function convertToMilitaryTime(time){
  let reAM = /(AM)/;
  let rePM = /(PM)/;
  let militaryTime = "";

  let hrs = time.split(":")[0];
  let mins = time.split(":")[1].replace('AM', '').replace('PM', '');
  let hrsInt = 0;
  if(time.match(reAM)){
    militaryTime = time.replace('AM', '');
    return militaryTime;
  }else if(time.match(rePM)){
    hrsInt = parseInt(hrs);
    console.log('hrsInt', hrsInt);
    if(hrsInt !== 12){
      hrsInt += 12;
    }
    militaryTime = String(hrsInt)+":"+mins;
    return militaryTime;
  }
}

console.log(convertToMilitaryTime(time));
