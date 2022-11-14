//create random captcha code with 5 character
let randomNumber = Math.random() * 100000;
let deleteFloor = Math.floor(randomNumber);
console.log("Your captcha code is: " + deleteFloor);