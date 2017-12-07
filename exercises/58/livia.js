// 58. Write a JavaScript program to create a new string of 4 copies of the
// last 3 characters of a given original string.
// The length of the given string must be 3 and above.

function copies(str){
  if (str.length<3){
    return false;
  }else{
    str1=str.slice(str.length-3,str.length);
    return new_str=str1.repeat(4);
  }
}

console.log(copies("masina"));


// 59. Write a JavaScript program to extract the first half of a string of even length.

function first_half(str){
  return str.slice(0,str.length/2);
}

console.log(first_half("copila"));

// 60. Write a JavaScript program to create a new string without the first and last
// character of a given string.

function new_string(str){
  return str.slice(1,str.length-1);
}

console.log(new_string("birou"));


// 61. Write a JavaScript program to concatenate two strings except their first character.

function two_strings(str1,str2){
  return str1.slice(1,str1.length)+str2.slice(1,str1.length);
}

console.log(two_strings("fata","baiat"));


// 62. Write a JavaScript program to move last three character to the start of a
// given string.
// The string length must be greater or equal to three.

function three_chr(str){
  if (str.length<3){
    return false;
  }else{
    return str.slice(str.length-3,str.length)+str.slice(0,str.length-3);
  }
}

console.log(three_chr("tractor"));

// 64. Write a JavaScript program to concatenate two strings and return the result.
//  If the length of the strings
// are not same then remove the characters from the longer string.

function concatenate_string(str1,str2){
  if(str1.length!=str2.length){
    if(str1>str2){
      return str1;
    }else{
      return str2;
    }
  }
  else{
    return str1+str2;
  }
}

console.log(concatenate_string("caine","pisica"));
console.log(concatenate_string("pasare","pisica"));


// 65. Write a JavaScript program to test if a string end with "Script". The string
// length must be greater or equal to 6.

function endScript(str){
  if(str.length<6){
    return false;
  }else{
    if (str.slice(str.length-6,str.length)=="script"){
      return "corect";
    }else{
      return "eroare"
    }
  }
}

console.log(endScript("endscript"));
console.log(endScript("catel"));
console.log(endScript("televizor"));


// 66. Write a JavaScript program to display the city name if the string begins with
//  "Los" or "New" otherwise return blank.

function city_name(city){
  if (city.substring(0,3)=="Los" || city.substring(0,3)=="New"){
    return city;
  }else{
    return '';
  }
}

console.log(city_name("Los Angeles"));
console.log(city_name("NewYork"));
console.log(city_name("Iasi"));

// 69. Write a JavaScript program to compute the sum of three elements of a given
// array of integers of length 3.


function three_nr(num){
  return num[0]+num[1]+num[2];
}
console.log(three_nr([10,15,10]));

// 70. Write a JavaScript program to rotate the elements left of a given array of
//  integers of length 3.

function rotateel(nr){
  return [nr[1],nr[2],nr[0]];
}
console.log(rotateel([1,2,3]));

// 72. Write a JavaScript program to check if the first and last elements are equal
//  of a given array of integers length 3.

function first_last(nr){
  if (nr[0]==nr[2]){
    return true;
  }else{
    return false;
  }
}
console.log(first_last([2,5,2]));
console.log(first_last([2,5,5]));
