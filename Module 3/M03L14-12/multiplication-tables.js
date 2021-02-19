const multiplier = 9;
for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + "*" + i + "=" + result);
}

// Bonus: gebruik een geneste for-loop, om alle tafels van 1 t/m 10 te printen naarr de console.

for (let multiplier = 0; multiplier <= 10; multiplier++) {
    for (let i = 0; i <= 10; i++) {
        let result = multiplier * i;
        console.log(multiplier + "*" + i + "=" + result);
    }
}