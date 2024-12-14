//Scope
// Global scope
Sum = 0;// global scope
for(var i =0;i<5;i++) {
    Sum +=i;
}
console.log(Sum);

while(i<10) {
    Sum +=i;
    i++;
}
console.log(Sum);

do {
    Sum +=i;
    i++;
}while(i<10);
console.log(Sum);

// local scope
for(let j =0;j<5;j++) {
    Sum +=j;
}
//console.log(j); // error
//Block scope
var a = 10;
console.log(a);
{
    let a = 5;
    let b = 5;
    console.log(a);
    console.log(b);
} // let a will be destroyed 
console.log(a); //10