const express = require("express");
const router = express.Router();
const books = require("../books.json");
const bodyParser = require("body-parser");

function getNextID() {
  const newID = books.length + 1;
  return newID;
}

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send(`<h1>Welcome to the books store</h1>`);
});

router.get("/add-book", (req, res) => {
  res.send(`
    <form action= "/books" method="POST">
    <input type="text" placeholder="Aggiungi un titolo" name="title" />
    <input type="text" placeholder="Aggiungi l'autore" name="author" />
    <input type="submit" />
    </form>`);
});

router.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: getNextID(),
    title,
    author,
  };
  res.redirect("/books");
  books.push(newBook);
});

router.get("/books", (req, res) => {
  res.json(books);
});

module.exports = router;
