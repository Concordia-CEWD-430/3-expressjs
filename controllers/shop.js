const Book = require("../models/book");
const Cart = require("../models/cart");

exports.getBooks = (req, res, next) => {
  Book.fetchAll((books) => {
    res.render("shop/book-list", {
      prods: books,
      pageTitle: "All Books",
      path: "/books",
    });
  });
};

exports.getBook = (req, res, next) => {
  const bookId = req.params.id;
  Book.findById(bookId, (book) => {
    res.render("shop/book-detail", {
      book,
      path: "/books",
      pageTitle: book.title,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Book.fetchAll((books) => {
    res.render("shop/index", {
      prods: books,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.addToCart = (req, res, next) => {
  const bookId = req.body.bookId;
  Book.findById(bookId, (book) => {
    Cart.addBook(bookId, book.price);
  });
  res.redirect("/cart");
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
