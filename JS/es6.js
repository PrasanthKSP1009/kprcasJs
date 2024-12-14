// ES6 - ECMAScript standard 6

// 1. Variables - let, var, const
// 2. Arrow function

function hello1() {
    return "hello";
}

hello = function() {
    return "hello";
}
console.log(hello());

hello = () => {return "hello";}

add = () => 10+20;
console.log(add());
add = (a,b) => a+b;

console.log("Arrow fun",add(10,5));

// 3. Destructuring 
var arr = [10,20,30,40,50];
var [a,b,c,d,e] = arr;
console.log(a, b, c, d, e);
// 4. Spread operator
// need to 2 more element 60, 70 and store in new array

var array = [...arr, 60,70];
console.log(array);