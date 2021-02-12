// Functions: three ways to write them: exercise

// #1 Function declaration
function sum1(number1, number2) {
    const squared1 = (number1 * number1) + (number2 * number2)
    return squared1 * squared1
}
const resultSum1 = sum1(1, 5);
console.log(resultSum1);

// #2 Function expression
const sum2 = function (number1, number2) {
    const squared1 = (number1 * number1) + (number2 * number2)
    return squared1 * squared1
};
const resultSum2 = sum2(1, 5);
console.log(resultSum2);

// #3 Arrow function 
const sum3 = (number1, number2) => {
    const squared1 = (number1 * number1) + (number2 * number2)
    return squared1 * squared1
};
const resultSum3 = sum3(1, 5);
console.log(resultSum3);