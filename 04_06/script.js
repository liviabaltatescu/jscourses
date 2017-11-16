var a=9;
var b=2;


var theBiggest=(function (a,b) {
  var result;
  if (a>b) {
    result=["a",a]
  }
    else{
        result=["b",b];
    }


  return result;

})(a,b)
console.log(theBiggest);
