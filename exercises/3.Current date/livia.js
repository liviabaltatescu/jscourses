// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy,
//  mm/dd/yyyy
// dd-mm-yyyy,
//  dd/mm/yyyy

var date= new Date();

var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();
if (month<10){
    month='0' + month;
}



console.log(month + "-"+day + "-"+year);
console.log(month + "/"+day + "/"+year);
console.log(day + "-"+month + "-"+year);
console.log(day + "/"+month + "/"+year);
