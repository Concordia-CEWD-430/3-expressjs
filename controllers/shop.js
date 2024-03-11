const Book = require('../models/book');
const Cart = require('../models/cart');

exports.getBooks = (req, res, next) => {
  Book.fetchAll(books => {
    res.render('shop/book-list', {
      prods: books,
      pageTitle: 'All Books',
      path: '/books'
    });
  });
};

exports.getBook = (req, res, next) => {
  const prodId = req.params.bookId;
  Book.findById(prodId, book => {
    res.render('shop/book-detail', {
      book: book,
      pageTitle: book.title,
      path: '/books'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Book.fetchAll(books => {
    res.render('shop/index', {
      prods: books,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Book.fetchAll(books => {
      const cartBooks = [];
      for (book of books) {
        const cartBookData = cart.books.find(
          prod => prod.id === book.id
        );
        if (cartBookData) {
          cartBooks.push({ bookData: book, qty: cartBookData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        books: cartBooks
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.bookId;
  Book.findById(prodId, book => {
    Cart.addBook(prodId, book.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteBook = (req, res, next) => {
  const prodId = req.body.bookId;
  Book.findById(prodId, book => {
    Cart.deleteBook(prodId, book.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
