//Get a number from user
//sum the digits of it
//for ex: 150: 1+5+0 = 6
// 6 is our output
let  numberInput = +prompt( "put number" , 0 );
let sum = 0;
for(i = 0; (numberInput/10) != 0; i++)  {
    sum = sum + (numberInput % 10);
    numberInput = Math.floor(numberInput/10);

}

confirm("sum the digits of this number is: " + sum);