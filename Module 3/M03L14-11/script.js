// Functions calling functions: exercise

const ageChecker = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greetings = function (age) {
    if (ageChecker(age)) {
        return "Hello there";
    } else
        return "Hey kiddo";
};

console.log(greetings(50)); // "Hello there"
console.log(greetings(10)); // "Hey kiddo"

// VAT calculations
// VAT exercise 1

const calculationVAT = function (basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
}

const calculationIncludingVAT = function (basePrice, VATPercentage) {
    const VAT = calculationVAT(basePrice, VATPercentage);
    return basePrice + VAT;
}

console.log(calculationIncludingVAT(1000, 21)); // 1210
console.log(calculationIncludingVAT(2, 9)); // 2.18


// VAT exercise 2
const calculationBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculationBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculationBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculationBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculationBasePriceAndVAT(2.18, 9)); // [2, 0.18]

