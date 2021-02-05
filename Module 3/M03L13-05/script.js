let person = {
    name: 'Britt',
    age: 26,
    evaluations: [7, 10, 9]
};

var selectedColors = ["groen", "blauw", "rood"];
var total = selectedColors.push("geel", 5, { greeting: "Hi ik ben een object" });

var lastElement = selectedColors[selectedColors.length - 1];

console.log(lastElement);