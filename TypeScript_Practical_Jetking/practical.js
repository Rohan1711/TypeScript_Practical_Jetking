//1) Write a TypeScript function that can add, subtract,multiply, divide and find the remainder of two numbers. 
function add(num1, num2) {
    return num1 + num2;
}
console.log("the sum of two number is: ".concat(add(5, 4)));
function sub(num1, num2) {
    return num1 - num2;
}
console.log("the subtraction of two number is: ".concat(sub(5, 4)));
function mul(num1, num2) {
    return num1 * num2;
}
console.log("the multiplication of two number is: ".concat(mul(5, 4)));
function div(num1, num2) {
    if (num2 == 0) {
        return "can't divide by zero";
    }
    return num1 / num2;
}
console.log("the dividation of two number is: ".concat(div(5, 4)));
console.log("when trying to divide by 0: ".concat(div(5, 0)));
function findReminder(num1, num2) {
    return num1 % num2;
}
var result = findReminder(7, 3);
console.log("the reminder is: ".concat(result));
