const fs = require("fs");

//Load function - reads from books.json
const loadBooks = () => {
  try {
    let rawdata = fs.readFileSync("books.json");
    let books = JSON.parse(rawdata); //Converts JSON strings into JavaScript object
    return books;
  } catch (err) {
    console.log(err);
    return;
  }
};

//declare data variable
let data = loadBooks();

//Save function - writes to the books.json
const saveBooks = (books) => {
  //Converts an object into a JSON string
  let stringData = JSON.stringify(books, null, 2);

  //write to the file
  fs.writeFile("books.json", stringData, "utf-8", (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      //We successfully wrote the the file
      // console.log("Successfully wrote to file");
    }
  });
};

//Add a new book - check for duplicates
const addBook = (title, author, desc) => {
  data = loadBooks();

  //Error checking for empty string values
  if (title === "" || author === "" || desc === "") {
    console.log(
      "Arguments can't be empty strings. Please enter a valid value."
    );
    return;
  }

  //create a book object
  const newBook = {
    title: title,
    author: author,
    desc: desc,
  };

  //Error checking if the user enters a book with a duplicate title
  if (data.find((book) => book.title === newBook.title)) {
    console.log(
      "Duplicate titles are not accepted. Please enter a different title."
    );
    return;
  }

  //push the new book object to the array and save
  data.push(newBook);
  console.log("Book added");
  saveBooks(data);
};

//Remove book -- Check if it exists first and then remove
const removeBook = (title) => {
  data = loadBooks();

  //if the books.json is empty, there is nothing to remove
  if (data.length === 0) {
    console.log(
      "There are no saved books to remove currently. Please add a new entry."
    );
    return;
  }

  let book = data.some((book) => book.title === title);

  //if there is some book with the matching title in the json, take it out of the array
  if (book) {
    let newData = data.filter((book) => book.title !== title);
    console.log("Book removed");
    saveBooks(newData);
  } else {
    //if there is no book with a matching title, return
    console.log(
      `There is no matching book with title: ${title}. Please try to remove a different book.`
    );
    return;
  }
};

//List Books - Print all books from books.json file
const listBooks = () => {
  data = loadBooks();

  if (data.length === 0) {
    console.log(
      "There are no saved books to list currently. Please add a new entry."
    );
    return;
  } else {
    data.forEach((book) => console.log(book));
  }
};

//Read books -- read from .json file and filter on the title
const readBook = (title) => {
  data = loadBooks();

  //checking to see if any values exist in the books.json
  if (data.length === 0) {
    console.log(
      "There are no saved books to read currently. Please add a new entry."
    );
    return;
  }

  //Finds the book with the matching title and returns that book object
  let book = data.find((book) => book.title === title);

  //If the book with the matching title exists, log it to the console.
  if (book) {
    console.log(book);
  } else {
    //Otherwise print error message.
    console.log(
      `There is no matching book with title: ${title}. Please try to read a different title.`
    );
  }
};

//Exporting functions
module.exports = {
  loadBooks,
  saveBooks,
  addBook,
  removeBook,
  listBooks,
  readBook,
};
