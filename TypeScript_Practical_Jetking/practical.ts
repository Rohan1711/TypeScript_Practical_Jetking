//1) Write a TypeScript function that can add, subtract,multiply, divide and find the remainder of two numbers. 

function add(num1:number, num2:number):number {
    return num1 + num2;
}
console.log(`the sum of two number is: ${add(5,4)}`);

function sub(num1:number, num2:number):number {
    return num1 - num2;
}
console.log(`the subtraction of two number is: ${sub(5,4)}`);

function mul(num1:number, num2:number):number {
    return num1 * num2;
}
console.log(`the multiplication of two number is: ${mul(5,4)}`);

function div(num1:number, num2:number):number | string {
    if (num2==0){
        return "can't divide by zero";
    }
    return num1 / num2;
}
console.log(`the dividation of two number is: ${div(5,4)}`);
console.log(`when trying to divide by 0: ${div(5,0)}`);

function findReminder(num1:number, num2:number):number {
        return num1 % num2;
    }
 const result = findReminder(7,3);

console.log(`the reminder is: ${result}`);

