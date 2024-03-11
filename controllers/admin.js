const Book = require("../models/book");

exports.getAddBook = (req, res, next) => {
  res.render("admin/edit-book", {
    editing: false,
    pageTitle: "Add Book",
    path: "/admin/add-book",
  });
};

exports.postAddBook = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const book = new Book(title, imageUrl, description, price);
  book.save();
  res.redirect("/");
};

exports.getEditBook = (req, res, next) => {
  const bookId = req.params.bookId;
  Book.findById(bookId, (book) => {
    if (!book) {
      return res.redirect("/");
    }
    res.render("admin/edit-book", {
      book,
      editing: true,
      pageTitle: "Edit Book",
      path: "/admin/edit-book",
    });
  });
};

exports.getBooks = (req, res, next) => {
  Book.fetchAll((books) => {
    res.render("admin/books", {
      prods: books,
      pageTitle: "Admin Books",
      path: "/admin/books",
    });
  });
};
