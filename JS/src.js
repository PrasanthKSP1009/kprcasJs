console.log("hello workd");

//JavaScript Variables 
var x = 10;
{
    let x = 2;
}

console.log(x);

const p = 3.14;

console.log(p);

//p = 1;
//console.log(p);

// Operators
console.log(1+2);
console.log(2-1);
console.log(2*1);
console.log(20/10);

//Data types
//Functions
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);

console.log(value);
//Objects
//Events
//Strings
//Numbers
//Arrays
//Conditional statements
//Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let numb = fruits.get("apples");

console.log(numb);
