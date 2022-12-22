//Get 5 number from user
//show average of numbers

let numberInput  = 0;
let sum = 0;
for(i = 0; i < 5; i++) {
    numberInput = +prompt( "put " + (i+1) + " number" );
    sum = sum + numberInput;
}
let average = sum / 5;
confirm( "The average of numbers are: " + average ); 
//instead of line 10 and 11 can write just "confirm( "The average of numbers are: " + sum /5 )"
