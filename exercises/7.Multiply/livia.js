// 10. Write a JavaScript program to calculate multiplication and division
//  of two numbers (input from user).

function multiplyBy(){
  x1=document.getElementById('firstN').value;
  x2=document.getElementById('secondN').value;
  document.getElementById('result').innerHTML=x1*x2;
}

function divideBy(){
  x1=document.getElementById('firstN').value;
  x2=document.getElementById('secondN').value;
  document.getElementById('result').innerHTML=x1/x2;
}
