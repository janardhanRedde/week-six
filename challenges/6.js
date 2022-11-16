// array from lowest to highest with integer
let numberss = [0,2, 11, 16, 3,26, 10, 20, 30];
numberss.sort((a, b) => a - b);

console.log(numberss);

//array from lowest to highest with negative numbers
let number = [-0,-2, -11, -16, -3,-26, -10, -20, -30];
number.sort((a, b) => a - b);

console.log(number);

// array from lowest to highest with decimals
let numbers = [0.54,0.27,0.88,0.598,1.25,2.22];
numbers.sort((a, b) => a - b);

console.log(numbers);