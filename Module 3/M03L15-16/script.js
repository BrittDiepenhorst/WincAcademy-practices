// Opdracht 1: Een click event vastmaken aan een button 
const myButton = document.querySelector("#mybutton");

const buttonAlert = myButton.addEventListener('click', function () {
    alert('Button clicked')
});

// Opdracht 2: Change Background
const myButton2 = document.querySelector("#mybutton2");

const redBackground = document.querySelector(".red-background");

const changeColor = () => {
    myButton2.classList.add("red-background");
};

myButton2.addEventListener("click", changeColor);

// Opdracht 3: ChangeColor
const myButton3 = document.querySelector("#mybutton3");

const toggleColor = () => {
    myButton3.classList.toggle("red-background");
};

myButton3.addEventListener("click", toggleColor);

