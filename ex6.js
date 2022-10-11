//Get age and gender from user
//if user is male or under 18 years old show error message
//else show welcome message

let UserAge = prompt("Enter your age:");
let UserGender = prompt("Enter your gender:", "Female or Male");

if(UserAge < 18 || UserGender == "Male") {
    alert("You can't acsess to this part of website");
} else {
    alert("Welcom!");
}