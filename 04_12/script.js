function giveMeVal(secondFr){
	var firstFr =5;

function myResult(){
	return secondFr/firstFr;
}
return myResult;

}

var firstValue= giveMeVal(5);
var secondValue= giveMeVal(10);
var thirdValue= giveMeVal(15);

console.log(firstValue());
console.log(secondValue());
console.log(thirdValue());
