//Get User's Year of Birth
//Calculate User's age
//Show result

let YearOfBirth = prompt("Please enter your Year of Birth:" , 1999);
let NewDate = new Date;
let YearDate = NewDate.getFullYear();
let UserAge = YearDate - YearOfBirth;

if (isNaN(UserAge)) {
    alert("Year of Birth is not valid");
} else {
    alert("Year of Birth is:" + UserAge );
}

// if user put a year more than now, this meassage show:
if (UserAge < 0) {
    alert("please enter year of your birth correctly");
}
