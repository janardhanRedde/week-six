//Calculate the sum of numbers within an array
// positive and negative numbers
function sumOfArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const numsArray = [1,4,-6,12,-20];
console.log(sumOfArray(numsArray));

// integars and decimals
function sumOfArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const numArray = [3,5,6,2.6,0.7,0.99,];
console.log(sumOfArray(numArray));