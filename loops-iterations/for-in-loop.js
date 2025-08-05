//EXERCISES

// You’re given an object that represents a book. Write a function called describeBook() that takes a book object and logs each property and its value in this format: title: The Hobbit; author: J.R.R. Tolkien; year: 1937;

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
};

function describeBook() {
  for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
  }
}

describeBook();
