// Oude manieren
// While loop

const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
    console.log(colors[i])
    i++;
}

// For loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Nieuwe manier met forEach
// Array method
colors.forEach((color) => console.log(color));

/* Vragen
1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
While loop: 5 regels, For loop: 3 regels. 

2. Hoeveel regels neemt mijn forEach in beslag?
forEach: 1 regel. 

3. Welke voordelen heeft het gebruiken van een array methode nog meer t.o.v. een for of een while loop?
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
- Je kunt niet meer verstrik raken in een infinite loop.
- Je hoeft niet meer bij teh ouden met een i, bij welke iteratie je bent.
- Je hebt direct toegang tot het item waar je overheen loopt dmv het argument en  de callback-functie die je de  array-method geeft als argument.
- De naam 'forEach' zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop. 

4. Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
Ja, je bent nu aan het itereren. Echter ben je aan het itereren over een OBJECT. 
Array Methods zijn NIET beschikbaar op een object. 
*/

const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (x in myColors) {
    console.log(myColors[x]);
}