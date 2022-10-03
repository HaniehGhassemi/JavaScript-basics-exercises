//Get a time in minutes from the user
//Turn it into a clock
// show the result

let Minutes = prompt("please enter time in minutes:", 100);

let MinutesToHours = Minutes / 60;

if (isNaN(MinutesToHours)) {
    alert("the input is not valid");
} else {
    alert( MinutesToHours + " Hours" );
}