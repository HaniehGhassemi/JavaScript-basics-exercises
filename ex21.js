//Get 2 numbers from users
//show even numbers between of them
let userInput1 = +prompt("Enter 1st number:" , 0);
let userInput2 = +prompt("Enter 2nd number:" , 0);

if (userInput1 % 2 === 0){
    while (userInput1 < userInput2 ) {
        alert(userInput1);
        userInput1 += 2;   
    }
}else{
    userInput1++;
    while (userInput1 < userInput2 ) {
        alert(userInput1);
        userInput1 += 2;    
    }
}
