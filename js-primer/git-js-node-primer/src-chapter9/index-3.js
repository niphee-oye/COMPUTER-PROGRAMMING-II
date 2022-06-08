// Making decisions

// If-Else statements
var minimumVotingAge = 18;
var age = 19;
if(age < minimumVotingAge){
    console.log("You are not eligible to vote.");
}
else{
    console.log("You are eligible to vote.");
}
// Switch statements
var today = "Saturday";
switch (today) {
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    case "Saturday":
        console.log("Not it.");
        break;
    case "Friday":
        console.log("Not it.");
        break;
    case "Thursday":
        console.log("Not it.");
        break;
    case "Wednesday":
        console.log("Not it.");
        break;
    case "Tuesday":
        console.log("Not it.");
        break;
    case "Monday":
        console.log("Not it.");
        break;

    default:
        break;
}