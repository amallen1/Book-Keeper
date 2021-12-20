# Book Keeper Application

This application is a NodeJS project where the user can store information about books such as their title, author, and description through the command line.

## Overview

### The challenge

Users should be able to

- [x] Add a new book. Duplicate titles are not accepted. books are saved to the json file.
- [x] Remove a book that matches the title given.
- [x] Display the list of books that are present in the books.json file.
- [x] Given a title, display information about that specific book.

### Commands to run the program

- Adding a book: node app.js add --title="Title" --author="User" --desc="New book"
- Removing a node: node app.js remove --title="Title"
- Reading a book: node app.js read --title="Title"
- Listing a book: node app.js list

Each book has to have

- title
- author
- description
