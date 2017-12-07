// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

function reversenr(no){
  return no.split("").reverse().join("");
}
console.log(reversenr("32243"));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward,
// e.g., madam or nurses run.

function palindrome(str){
  if (str==str.split("").reverse().join("")){
    return true;
  }else{
    return false;
  }
}

console.log(palindrome('madam'));
console.log(palindrome('dog'));


// 6. Write a JavaScript function that accepts a string as a parameter and find the
// longest word within the string.

function find_longest_word(str)
{
  var array1 = str.match(/[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    }
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));
