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
