// 1. Check voting eligibility:  if...else, switch, block
// Write a function that takes an age as input and returns:
// - "Eligible to vote" if age is 18 or older
// - "Too young to vote" if age is less than 18

function canVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else if (age > 0 && age < 18) {
    return "Too young to vote";
  } else {
    return "Invalid age!";
  }
}
/* console.log( */ canVote(17) /* ) */;

//2. Day of the week classifier
// Use a switch statement to classify the day:
// - "Start of the week" for Monday or Tuesday
// - "Midweek" for Wednesday or Thursday
// - "Weekend" for Friday, Saturday, or Sunday

const day = "friday";
switch (day) {
  case "monday":
  case "tuesday":
    console.log("Start of the week");
    break;
  case "wednesday":
  case "thursday":
    console.log("Midweek");
    break;
  case "friday":
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid input");
}
