let numberToBeGuessed = null;
let name;
let guess;
const min = 0;
const max = 25;

name = prompt("Welkom! Wat is je naam?");

alert("Hey " + name);

numberToBeGuessed = Math.floor(Math.random() * (max - min) + min);
console.log("Psst het nummer is: " + numberToBeGuessed);

while (guess !== numberToBeGuessed) {
    i <= 5
    let i = 0;
    alert("Je hebt " + i + "pogingen gedaan en nog " + 5 - i + " pogingen over.")
    i++
    guess = parseInt(prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..."));
    alert("Je gok is: " + guess);
    if (guess > numberToBeGuessed) {
        alert("Helaas, je gok was te hoog. Probeer het opnieuw:");
    } else if (guess < numberToBeGuessed) {
        alert("Helaas je gok was te laag. Probeer het opnieuw:");
    } else {
        alert("Goed geraden, het nummer was inderdaad: " + guess);
        alert("We sluiten de game af. Bedankt voor het spelen, tot de volgende keer " + name + " !");
    }
}