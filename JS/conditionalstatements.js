
// conditional statements
/*
a = 28;
if(a>18) {
    console.log("eligible to vote");
} else {
    console.log("not eligible to vote");
}

a = 28;
switch(a) {
    case 18>a:
        console.log("not eligible to vote");
        break;
    case 18<a:
        console.log("eligible to vote");
        break;
    default:
        console.log("not a number");
}

// looping
while(true) {
    console.log("Inside while")
    if(a>18) {
        break;
    }
}

do {
    console.log("inside do while");
} while(false);

for(i = 0; i<5;i++){
    console.log("i" +i);
}

arr = [1,2,3,4,5];
list = [1,2,"hi","hello","world"];

// for - in loop
for(let x in list) {
    console.log(list[x]);
}
// for - of loop
console.log("For of loop");
for (let x of list) {
    console.log(x);
}

console.log("For each loop");
list.forEach(value => {
console.log(value);
});
*/
var employee = new Object();
console.log(employee);
employee["name"] = "Prem";
employee["native"] = "trp";
employee["yoe"] = "4";

for(let key1 in employee) {
    console.log(key1, employee[key1]);
}
/*
for([key, value] of employee) {
    console.log(key + " "+ value); // employee object not iterable
}*/

emp = Object.entries(employee);
console.log(emp);
for([key, value] of emp) {
    console.log(key + " "+ value);
}

emp.forEach(([key, val]) => {
    console.log(key,val);
});