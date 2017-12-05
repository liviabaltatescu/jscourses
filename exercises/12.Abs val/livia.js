// 15. Write a JavaScript program to get the difference between a given number and 13,
//  if the number is greater than 13 return double the absolute difference.


// var givenNumber=5;
// var number=13;
//  var diferrence=givenNumber-number;
//  console.log(Math.abs(diferrence));

 function difference(val){
   if(val<=13)
     return 13-val;
     else
    return Math.abs(13-val)*2;


 }

 console.log(difference(15));
