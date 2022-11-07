//Creat a function that get number
//then Show the number is even or odd

let userInput = +prompt("put number", "0");
function ShowNumber (userInput) {
    if (userInput % 2  === 0)
    confirm( "Numer is even" );
    else {
        confirm( "Number is odd" )   
        }
    }
    ShowNumber(userInput);