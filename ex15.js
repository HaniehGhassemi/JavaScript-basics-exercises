//Suppose you have a store website
//where the user has selected 5 products from the store
//Get the price of 5 products from the user
//and display the total amount of the shopping cart

let sumPrices = 0;
for (i = 0; i < 5; i++) {
    sumPrices = sumPrices + (+prompt( "please input the price product "));
}

alert("All price product is " + sumPrices);