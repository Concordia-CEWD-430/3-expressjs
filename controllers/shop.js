const Book = require("../models/book");

exports.getBooks = (req, res, next) => {
  Book.fetchAll((books) => {
    res.render("shop/book-list", {
      prods: books,
      pageTitle: "All Books",
      path: "/books",
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
