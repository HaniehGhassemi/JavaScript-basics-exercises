//Get the user's GPA
//Specify its level
//For 20-18 level A
//For 17-15 level B
//For 14-12 level C
//For under 12 level F

let UserGPA = +prompt("Enter your GPA:");
switch (UserGPA) {
    case 20:
    case 19:
    case 18:
        alert("Your level is A!");
        break;
    case 17:
    case 16:
    case 15:
        alert("Your level is B!");
        break;
    case 14:
    case 13:
    case 12:
        alert("Your level is C!");
        break;
    default:
        alert("You failed. Your level is F :(")
        break;
}