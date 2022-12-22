//count digits of number with while

let userInput = +prompt("Enter the number",0);
let sum = 0;
let counter = 0;

while(userInput / 10 != 0) {
    sum = sum + (userInput % 10);
    counter++;
    userInput = Math.floor(userInput / 10);
}

confirm("digits of numbers is: " + counter);