// 47. Write a JavaScript program to check if a number in the range 40..10000
//  inclusive presents in two number (in same range).
// For example 40 presents in 400 and 4000

function range(x,y){
  var x_div=parseInt(x/40);
  var x_mod= x%40;
  var y_div=parseInt(y/40);
  var y_mod= y%40;
  return x_div === y_div || x_mod === y_mod ||
           x_div === y_mod || x_mod === y_div;

}

console.log(range(40,4000));


// 48. Write a JavaScript program to reverse a given string.

function reverseString(str){
  return str.split("").reverse().join("");
}


console.log(reverseString("masina"));


// 49. Write a JavaScript program to replace every character in a given string
//  with the character following it in the alphabet.


// 50. Write a JavaScript program to capitalize the first letter
//  of each word of a given string.


function capital_letter(str)
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
console.log(capital_letter("ana are mere"));

// 51. Write a JavaScript program to convert a given number to hours and minutes.


function hours_minutes(number){
  hours=Math.floor(number/60);
  minutes=Math.abs(number%60);
  return hours+ ":"+ minutes;
}
console.log(hours_minutes(71));
