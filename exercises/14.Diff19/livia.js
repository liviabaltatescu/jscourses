// 17. Write a JavaScript program to compute the absolute difference between
// a specified number and 19. Returns triple their absolute difference
// if the specified number is greater than 19.


function specificNumber(x){
  if(x<19)
  return x-19
  else
  return Math.abs((x-19)*3)
}

console.log(specificNumber(5));
console.log(specificNumber(20));
