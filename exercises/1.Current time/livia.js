// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22


var days=['Monday','Tuesday','Wendesday','Thurstday','Friday','Saturday','Sunday'];
var day=new Date();
var currentDay=days[day.getDay()-1];


var hours= day.getHours();
var minutes= day.getMinutes();
var seconds= day.getSeconds();

if (hours>=12){
  hours=hours + " PM";
}else{
  hours=hours + " AM";
}

console.log(day);
console.log("Today is : "+ currentDay);
console.log("Current time is : " + hours + " : " + minutes + " : " + seconds);
