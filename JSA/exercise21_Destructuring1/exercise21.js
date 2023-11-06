let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
/*let temp = num2;
num2 = num1;
num1 = temp;

 // After swap: 20 10
*/

[num1, num2] = [num2, num1]

console.log('After swap: ', num1, num2);