const Book = require("../models/book");

exports.getAddBook = (req, res, next) => {
  res.render("admin/add-book", {
    pageTitle: "Add Book",
    path: "/admin/add-book",
    formsCSS: true,
    bookCSS: true,
    activeAddBook: true,
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

exports.getBooks = (req, res, next) => {
  Book.fetchAll((books) => {
    res.render("admin/books", {
      prods: books,
      pageTitle: "Admin Books",
      path: "/admin/books",
    });
  });
};
