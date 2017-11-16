/*function compareFraction(){
  // console.log("The result is");
  a<b ? console.log ("a: ", a) : console.log("b: ",b);

}

var a =5/4;
var b=1/2;

compareFraction();
*/
function findBiggerFraction(){
  var result;
  a<b ? result= ["a",a] : result=["b",b];
  return result;

}
var a=1/2;
var b=3/2;

// console.log(findBiggerFraction());
console.log("a: ", a);
console.log("b: ", b);
console.log("Fraction " + findBiggerFraction()[0] + " have the value " + findBiggerFraction()[1]);
