const Book = require("../models/book");

exports.getAddBook = (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book",
    path: "/admin/add-book",
  });
};

exports.postAddBook = (req, res, next) => {
  const book = new Book(req.body.title);
  book.save();
  res.redirect("/");
};

exports.getBooks = (req, res, next) => {
  const books = Book.fetchAll();
  res.render("shop", {
    path: "/",
    books: books,
    pageTitle: "Shop",
  });
};
