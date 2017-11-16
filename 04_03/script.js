var a=12/2;
var b=11/2;

var theBiggestOne = function() {
  var result;
  a>b ? result = ["a",a] : result = ["b",b];
  return result;

}

console.log(theBiggestOne());
