const Age = 19;
const isFemale = true;
const driverStatus = "bob";
const Name = "Sarah";
const totalAmount = 100;

if (Age > 18) {

    console.log("Je bent ouder dan 18 jaar, je mag naar binnen.")

} else if (Age == 18) {

    console.log("Je bent 18 jaar, je  mag naar  binnen.")

} else {

    console.log("Je bent jonger dan 18 jaar, je mag niet naar binnen en je wordt vriendelijke verzocht buiten te blijven.")
}

if (Age > 17 && Age < 26) {

    console.log("Je krijgt 50% korting!")

}

if (isFemale) {

    console.log("Ladies Night!")

} else {

    console.log("Het is een Ladies Night, je bent helaas niet welkom.")
}

if (driverStatus == "bob") {

    console.log("Je mag gaan rijden.")

} else {

    console.log("Je mag niet rijden.")
}

if (Name == "Sarah" || Name == "Bram") {

    console.log("Gratis biertje!")

}

if (totalAmount >= 26 && totalAmount <= 50) {

    console.log("Je krijgt gratis (vega)bitterballen!")

} else if (totalAmount >= 51 && totalAmount <= 99) {

    console.log("Je krijgt gratis een portie nachos!")

} else if (totalAmount >= 100) {

    console.log("Je krijgt een gratis flesje champagne!")

} 