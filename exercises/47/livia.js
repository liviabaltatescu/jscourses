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

// 52. Write a JavaScript program to convert the
// letters of a given string in alphabetical order.

function order(str){
  return str.split("").sort().join("");
}

console.log(order("masina"));
console.log(order("calculator"));


// 53. Write a JavaScript program to check if the characters a and b are separated by
//  exactly 3 places anywhere (at least once) in a given string.

function checkab(str){
  return (/a...b/).test(str)||(/b...a/).test(str);
}

console.log(order("maChainsbreaksina"));
console.log(order("pane borrowed"));
console.log(order("abCheck"));

// 54. Write a JavaScript program to count the number of vowels in a given string.


function vowels(str){
  return str.replace(/[^aeiou]/g,"").length;
}

console.log(vowels("tractor"));

// 55. Write a JavaScript program to check if a given string contains
//  equal number of p's and t's present.

function p_and_t(str1){
  nr1=str1.replace(/[^p]/g,"").length;
  nr2=str1.replace(/[^t]/g,"").length;
  if (nr1==nr2){
    return true;
  }else{
    return false;
  }
}

console.log(p_and_t("patent"));
console.log(p_and_t("teapa"));

// 57. Write a JavaScript program to create a new string of specified copies
 // (positive number) of a given string.

function str_copies(str,n){
  if (n<0){
    return false;
  }else{
    return str.repeat(n);
  }

}

console.log(str_copies("abc",2));
