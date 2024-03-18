const Book = require("../models/book");

exports.getAddBook = (req, res, next) => {
  res.render("admin/edit-book", {
    pageTitle: "Add Book",
    path: "/admin/add-book",
    editing: false,
  });
};

exports.postAddBook = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const book = new Book(null, title, imageUrl, description, price);
  book
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

exports.getEditBook = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  Book.findById(req.params.bookId)
    .then(([rows]) => {
      res.render("admin/edit-book", {
        book: rows[0],
        editing: editMode,
        pageTitle: "Edit Book",
        path: "/admin/edit-book",
      });
    })
    .catch(() => console.log(err));
};

exports.postEditBook = (req, res, next) => {
  const prodId = req.body.bookId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedBook = new Book(prodId, updatedTitle, updatedImageUrl, updatedDesc, updatedPrice);
  updatedBook
    .updateBookById()
    .then(() => res.redirect("/admin/books"))
    .catch((err) => console.log(err));
};

exports.getBooks = (req, res, next) => {
  Book.fetchAll()
    .then(([rows, metaData]) => {
      res.render("admin/books", {
        prods: rows,
        pageTitle: "Admin Books",
        path: "/admin/books",
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteBook = (req, res, next) => {
  const prodId = req.body.bookId;
  Book.deleteById(prodId)
    .then(() => {
      res.redirect("/admin/books");
    })
    .catch((err) => console.log(err));
};
