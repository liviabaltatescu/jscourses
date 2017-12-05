// 18. Write a JavaScript program to check two given numbers and return true
// if one of the number is 50 or if their sum is 50.


function check(x,y){
  if ((x==50)||(y==50)||(x+y==50))
    return true;
    else
      return false;

}

console.log(check(4,5));
console.log(check(50,5));
console.log(check(23,27));
