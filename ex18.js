//get number and show number if digits
//for ex: 150 have 3 digits

let numberInput = prompt("put the number:" , 0);
let count = 0;
let lengthNumberinput = numberInput.length;
for( let i = 0; i < lengthNumberinput; i++) {
    if((numberInput % 10) == 0) {
       count = count + 1;
    }
    else {
            count++;
    }

        numberInput = Math.floor(numberInput / 10);
}

confirm("number of digits of this number is: " + count); 

