// #1 Checking if a number is big
// Create a function that has one parameter
const checkNumber = function (number) {
    if (number >= 100) {
        return "true"
    }
    return "false";
}
const resultNumber = checkNumber(99);
console.log(resultNumber);

// Fill in a number to check if the function works
// What kind of function is this? Do, produce or do and produce. This function produce something.

// #2 Bouncer at a club
const bouncerClub = function (currentNumberClub, age) {
    if (currentNumberClub <= 30 && age >= 25) {
        return "come in"
    }
    if (currentNumberClub > 30 && age < 25)
        return "this is a club for adults"

    if (currentNumberClub > 30 && age >= 25)
        return "it's too busy now, come back later"
}

const resultBouncer = bouncerClub(20, 25);
console.log(resultBouncer);

// Fill in a the current number in the club and the age to check if the function works
// What kind of function is this? This function produce something.

// #3 Calculating the average
const average = function (number1, number2, number3, number4, number5) {
    const sum = [number1 + number2 + number3 + number4 + number5] / 5;
    return sum;
}

const resultAverage = average(1, 2, 3, 4, 5);
console.log(resultAverage);

// Fill in five numbers to calculate the average and see if the function works
// What kind of function is this? This function produce something.