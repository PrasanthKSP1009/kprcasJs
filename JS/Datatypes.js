// Number
let length = 8;
let weight = 45;
// String
let color = 'yellow';
let name = "Reena";
// Boolean
let x = true;
// BigInt
// Object
var person = { "firstName": "Reena", "lastName": "Rajan", "Native":"cbe",
     "yoe": 3};
console.log(person);
var person1 = { "firstName": "Reena", "lastName": "Rajan", "Native":"cbe",
    3:"yoe", 3:"l"};
console.log(person1);
person["yoe"] = 4;
console.log(person);

// Object declaration way 2
var student = {};
console.log(student);
student["name"] = "Arun";
student["native"] = "erode";
student["marks"] = "570";
console.log("Object way2", student);

// Object declaration way 3
var employee = new Object();
console.log(employee);
employee["name"] = "Prem";
employee["native"] = "trp";
employee["yoe"] = "4";
console.log("Object way3", employee);
console.log("Native", employee.native);
student["yoe"] = null;
console.log("student", student);
// null
// undefined