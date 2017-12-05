// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message
// "Good Work" otherwise display a message "Not matched".


var randomNum = Math.floor(Math.random()*10 + 1);
var userInput = window.prompt('Please enter a number!');

console.log(randomNum);
if (randomNum === userInput){
alert('good work!');
}
else{
alert('Not matched! ' + randomNum);
}
