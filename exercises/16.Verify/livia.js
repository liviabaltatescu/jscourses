// 19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.

function verifyNumber(x){
  return(((x>20)&&(x<100))||(x==400))
}
console.log(verifyNumber(5));
console.log(verifyNumber(400));
console.log(verifyNumber(34));


// 20. Write a JavaScript program to check from two given integers,
// if one is positive and one is negative.

function positive_negative(a, b){
  return(((a>0) && (b<0))||((a<0) && (b>0)))

}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));
