const books = [];

exports.getAddBook = (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book",
    path: "/admin/add-book",
  });
};

exports.postAddBook = (req, res, next) => {
  books.push({ title: req.body.title });
  res.redirect("/");
};

exports.getBooks = (req, res, next) => {
  res.render("shop", {
    path: "/",
    books: books,
    pageTitle: "Shop",
  });
};

exports.books = books;
