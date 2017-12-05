// 25. Write a JavaScript program check if a given positive number is a
// multiple of 3 or a multiple of 7.


function test37(x)
{
  if (x % 3 == 0 || x % 7 == 0)
  {
    return true;
  }
  else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));

// 26. Write a JavaScript program to create a new string from a given
// string taking the last 3 characters
// and added at both the front and back. The string length must be 3 or more.


function threeCaracter(str1){
  if (str1.length>=3) {
    str2=str1.substring(str1.length-3,str1.length);
    str3=str2+str1+str2;
  }
  return str3;
}

console.log(threeCaracter("albina"));


// 27. Write a JavaScript program to check if a
//  string starts with 'Java' and false otherwise.

function javaString(str){
  if (str.substring(0,4)=='Java'){
    return true;
  }else{
    return false;
  }
}


console.log(javaString('Javascript'));
console.log(javaString('avascript'));



// 28. Write a JavaScript program to check if two given integer values
// are in the range 50..99 (inclusive).
// Return true if either of them are in the said range.


function range(a,b){
  if ((a >=50 && a <=99) || (b >=50 && b <=99)){
    return true;
  }else{
    return false;
  }
}


console.log(range(67,88));
console.log(range(7,88));
console.log(range(7,8));
