// Creat a programm that users can register
//if User dont have username with +3 character and password with +8 charecter
//show the true message

let Username = prompt("choose a username");
let Password = prompt("choose a password");
if (Username.length < 3 || Password.length < 8) {
   confirm( "invalid input, please refresh this page and put true values!");
} else {
    alert("Welcom " + Username);
}
