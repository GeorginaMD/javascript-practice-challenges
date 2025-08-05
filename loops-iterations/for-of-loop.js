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
