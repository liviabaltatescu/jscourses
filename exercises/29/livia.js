// 29. Write a JavaScript program to check if three given integer values are
// in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range.


function checkInteger(x,y,z){
  if((x>=50 && x<=99)||(y>=50 && y<=99)||(z>=50 && z<=99)){
    return true;
  }else{
    return false;
  }
}

console.log(checkInteger(1,50,88));
console.log(checkInteger(1,50,8));
console.log(checkInteger(1,5,818));


// 30. Write a JavaScript program to check if a string "Script" presents
// at 5th (index 4) position in a given string, if "Script" presents
// in the string return the string without
//  "Script" otherwise return the original one.

function checkString(word1){
  if (word1.length<6){
    return word1;
  }
  if(word1.slice(4,10)=='Script'){
    return word2=word1.slice(0,4)+word1.slice(10,word1.length);
  }else{
    return word1;
  }
}

console.log(checkString('javaScripts'));
console.log(checkString('coffeeScript'));


// 31. Write a JavaScript program to find the largest of three given integers.

function largestNumber(a,b,c){
  if (a>b && a>c){
    return a;
  }else{
    if (b>a && b>c){
      return b;
    }
    else{
      return c;
    }
  }
}

console.log(largestNumber(3,6,1));
console.log(largestNumber(33,6,1));
console.log(largestNumber(3,6,11));



// 32. Write a JavaScript program to find a value which is nearest to
//  100 from two different given integer values.

function nearest100(a,b){
  if(a != b){
    a1=Math.abs(a-100);
    b1=Math.abs(b-100);
    if (a1<b1){
      return a;
    }
    if (b1<a1){
      return b;
    }

  }
}

console.log(nearest100(10,120));


// 37. Write a JavaScript program to create new string with first 3 characters are in lower case.
// If the string length is less than 3 convert all the characters in upper case.

function lowerCase(str1){
  if (str1.length<=3){
    return str1.toUpperCase();
  }else{
    return str1.toLowerCase();
  }
}

console.log(lowerCase('castaNe'));
console.log(lowerCase('GHINDE'));
console.log(lowerCase('yes'));


// 38. Write a JavaScript program to check the total marks of a student in various examinations.
// The student will get A+ grade if the total marks are in the range 89..100 inclusive,
// if the examination is "Final-exam." the student will get A+ grade and total marks
// must be greater than or equal to 90.
// Return true if the student get A+ grade or false otherwise.


function student(marks){
  if (marks<=100 && marks>=89){
    return true;
  }else{
    return false;
  }

}
console.log(student(50));


// 39. Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.


function sumInteger(a,b){
  var sum=a+b;
  if (sum<=80 && sum>=50){
    return '65';
  }else{
    return '80';
  }
}

console.log(sumInteger(10,80));
console.log(sumInteger(10,50));



// 42. Write a JavaScript program to check if three given numbers (integers) are increasing
// in strict mode and flag is "false", however if "true" is false the numbers will in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31


function flag(a,b,c){
  if (a<b && b<c){
    return false;
  }else{
    if (a<c || b<c){
      return true;
    }else{
      return 'error';
    }
  }
}

console.log(flag(10,4,2));

// 43. Write a JavaScript program to check from three given numbers (non negative integers)
// that two or all of them have the same rightmost digit.

function rightDigit(a,b,c){
  if ((a%10==b%10)|| (a%10==c%10) || (b%10==c%10)){
    return true;
  }else{
    return false;
  }
}
console.log(rightDigit(331,22,103));


// 46. Write a JavaScript program to check two given non-negative integers
// and if one of the number (not both) is multiple of 7 or 11.

function positiveNumber(a){
  if ((a%7==0 || a%11==0 )&&(a%7 !==a%11 )){
    return true;
  }else{
    return false;
  }
}

console.log(positiveNumber(77));
