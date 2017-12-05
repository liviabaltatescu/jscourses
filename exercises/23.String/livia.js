// 23. Write a JavaScript program to create a new string from a
//  given string changing the position of first and last characters.
// The string length must be greater than or equal to 1.

function first_str(str1){
  if (str1.length<=1){
    return str1;
  }
  midStr=str1.substring(1,str1.length-1);
  return midStr;
}

console.log(first_str('apartamanet'));
console.log(first_str('ac'));


// 24. Write a JavaScript program to
// create a new string from a given string with the first
//  character of the given string added at the front and back.


function frontBack(string){
  str2=string.slice(0,1);
  return(str2+string+str2);

}

console.log(frontBack('apa'))
