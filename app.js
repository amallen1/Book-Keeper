const notes = require("./books.js");
const yargs = require("yargs");
const { argv } = require("yargs");

//Project done by: (TEAM 1) Aniya Allen and Stephen Ng

//ADD COMMAND
yargs.command({
  command: "add",
  describe: "Add a new book",
  builder: {
    title: {
      describe: "Book Title",
      demandOption: true,
      type: "string",
    },
    author: {
      describe: "Book Body",
      demandOption: true,
      type: "string",
    },
    desc: {
      describe: "Book Description",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addBook(argv.title, argv.author, argv.desc);
  },
});

//REMOVE COMMAND
yargs.command({
  command: "remove",
  describe: "Remove the selected book",
  builder: {
    title: {
      describe: "Book Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeBook(argv.title);
  },
});

//LIST COMMAND
yargs.command({
  command: "list",
  describe: "List all books",

  handler(argv) {
    notes.listBooks();
  },
});

//READ COMMAND
yargs.command({
  command: "read",
  describe: "Read book w/ the matching title",
  builder: {
    title: {
      describe: "Book Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readBook(argv.title);
  },
});

yargs.parse();
