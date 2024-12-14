// 1. Function without arguments and without return type
function fun1() {
    console.log("Function sample");
}

fun1()
// 2. Function with arguments and without return type
function fun2(a, b) {
    console.log("Function sample2", a, b);
}

fun2(10, 5)
// 3. Function without arguments and with return type
function fun3() {
    console.log("function sample3")
    return 10*5;
}

console.log(fun3())
// 4. Function with arguments and with return type
function fun4(x, y) {
    console.log("function sample4")
    return x * y;
}
console.log(fun4(10, 5))