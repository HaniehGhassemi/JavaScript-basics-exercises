//Creat a function that get 3 numbers
//then Show the average oh them

let userInput1 = +prompt("put 1st number", "0");
let userInput2 = +prompt("put 2nd number", "0");
let userInput3 = +prompt("put 3rd number", "0");

function averageNumbers () {
    let average = (userInput1 + userInput2 + userInput3) / 3;
    alert( "the average of numbers is: " + average);
}

averageNumbers(userInput1 , userInput2 , userInput3);