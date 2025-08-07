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
console.log(canVote(17));
