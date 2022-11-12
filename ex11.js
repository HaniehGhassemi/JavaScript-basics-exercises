//Creat a login systeam that get username and password
//that check is user are login or not
//check with "hanieh" username

let username = prompt("Please put ur username");

if(username.trim().toLowerCase() != "hanieh") {
    alert(username.concat(" welcome!"));
} else {
    alert(username.concat(", You login before!"));
}
