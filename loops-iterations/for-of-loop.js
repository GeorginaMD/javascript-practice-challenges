//EXERCISES
// Create a function called sumArray that takes an array of numbers and returns the total sum of all the numbers using a for...of loop.

let numbers = [1, 2, 4, 6, 8];

function sumArray(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }

  return total;
}
console.log(sumArray(numbers));

//Challenge: Print Names of Active Users.You have an array of user objects. Each user has a name and an isActive boolean. Write a function printActiveUsers(users) that: Loops through the array using a for...of loop.Prints only the names of users whose isActive property is true.

const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
];

function printActiveUsers(users) {
  for (let user of users) {
    if (user.isActive === true) {
      console.log(user.name);
    }
  }
}

printActiveUsers(users);
