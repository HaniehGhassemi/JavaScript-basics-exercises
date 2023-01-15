//Get 2 number
//1st number make power of 2nd

let input1 = +prompt("1st number:", 0);
let input2 = +prompt("2nd number:", 0);
let i = 0;
let powerOfNum = 1;
while(i < input2) {
    powerOfNum *= input1;
    i++;

}

alert(powerOfNum);
