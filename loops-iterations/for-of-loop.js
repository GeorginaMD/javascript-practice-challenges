//EXERCISES
//01 - Create a function called sumArray that takes an array of numbers and returns the total sum of all the numbers using a for...of loop.

let numbers = [1, 2, 4, 6, 8];

function sumArray(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }

  return total;
}
console.log(sumArray(numbers));

//02 - Challenge: Print Names of Active Users.You have an array of user objects. Each user has a name and an isActive boolean. Write a function printActiveUsers(users) that: Loops through the array using a for...of loop.Prints only the names of users whose isActive property is true.

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

//03 - Challenge: Average Score of Passed Students. You have an array of student objects. Each student has a name, a scores array, and a passed boolean. Write a function that: Loops through the students. Filters only the students who passed (passed: true). Calculates the average score for each passed student. Returns an array of strings with the format: "StudentName: averageScore".

const students = [
  { name: "Ana", scores: [80, 90, 85], passed: true },
  { name: "Ben", scores: [60, 65, 70], passed: false },
  { name: "Cara", scores: [88, 92, 84], passed: true },
];

function passedStudents(students) {
  let result = [];

  for (let student of students) {
    if (student.passed === true) {
      let sum = 0;
      for (let score of student.scores) {
        sum += score;
      }

      let avrScore = sum / student.scores.length;
      result.push(`${student.name}: ${avrScore}`);
    }
  }
  return result;
}

console.log(passedStudents(students));
