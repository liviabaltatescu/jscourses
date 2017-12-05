// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature
//   in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C



// var celsius=60;
// var farad=45;
// var c=(farad-32)/1.8;
// var f=((9*celsius)/5+32);
//
//
// console.log(f);
// console.log(c);


var celsius;
var farad;

function convertToCelsius(Farad_input){
  var celsius=(Farad_input-32)/1.8;
  console.log(Farad_input + "°F is " + celsius +"°C");
}

convertToCelsius(45);


function convertToFarad(Celsius_input){
  var farad=((9*Celsius_input)/5+32);
  console.log(Celsius_input + "°C is "+ farad + "°F");
}

convertToFarad(60);
