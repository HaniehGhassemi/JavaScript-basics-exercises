//Creat a function that get number
//then Show the number is even or odd

let userInput = +prompt("put number", "0");
function ShowNumber () {
    if (userInput % 2  === 0)
    confirm( userInput + " is even" );
    else {
        confirm(userInput + " is odd" )   
        }
    }
    ShowNumber(userInput);