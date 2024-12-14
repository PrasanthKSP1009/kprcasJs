// set
set1 = new Set(["reena", "raj", "dhivi"]);
console.log(set1);
set1.add("hi");
console.log(set1);

for(k of set1) {
    console.log(k);
}

for(let key in set1) {
    console.log(key);
}

map = new Map([
    ["name","ram"],
    ["name1","hari"],
]);

for (key of map) {
    console.log(key);
}

for (value of map) {
    console.log(value[1]);
}

console.log("age key is present", map.has("age"));

for (let [key, val] of map.entries()) {
    if(key === "name1")
        console.log("we found key name and value is ", val)
}