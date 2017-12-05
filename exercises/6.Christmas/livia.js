// 9. Write a JavaScript program to calculate days left until next Christmas.


var today= new Date();
var christmas=new Date(today.getFullYear(),11,25);

var one_day=24*60*60*1000;


console.log(today);
console.log(christmas);

console.log(Math.ceil((christmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

console.log(Math.ceil((christmas-today)/one_day)+
" days left until Christmas!");
