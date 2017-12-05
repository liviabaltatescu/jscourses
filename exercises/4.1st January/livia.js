// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

var year=2014;

for(year=2014;year<=2050;year++){
  var date= new Date(year,0,1);
  if (date.getDay()===0)
  console.log("1 ianuarie este Sambata in", year);
  if (date.getDay()===2)
  console.log("1 ianuarie este Luni in", year);
}


console.log(date);
