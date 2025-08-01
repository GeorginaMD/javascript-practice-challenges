// EXERCISE:
//Write a function countEvens(n) that uses a while loop to count how many even numbers exist from 1 to n (inclusive), and return that count.

function countEvens(n) {
  let i = 1; //start counting from 1 to n
  let count = 0; //only store the counted even numbers to then return
  while (i <= n /* run until n is reached (inclusive) */) {
    if (i % 2 === 0) {
      /* check if the counted num is even */
      count++; //if num is even,increase count by 1
    }
    i++; //move to the next number
  }
  return count; //the total of even num
}
console.log(countEvens(8));
