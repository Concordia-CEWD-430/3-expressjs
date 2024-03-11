const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addBook(id, bookPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { books: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing book
      const existingBookIndex = cart.books.findIndex(
        prod => prod.id === id
      );
      const existingBook = cart.books[existingBookIndex];
      let updatedBook;
      // Add new book/ increase quantity
      if (existingBook) {
        updatedBook = { ...existingBook };
        updatedBook.qty = updatedBook.qty + 1;
        cart.books = [...cart.books];
        cart.books[existingBookIndex] = updatedBook;
      } else {
        updatedBook = { id: id, qty: 1 };
        cart.books = [...cart.books, updatedBook];
      }
      cart.totalPrice = cart.totalPrice + +bookPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static deleteBook(id, bookPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const book = updatedCart.books.find(prod => prod.id === id);
      if (!book) {
          return;
      }
      const bookQty = book.qty;
      updatedCart.books = updatedCart.books.filter(
        prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - bookPrice * bookQty;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      });
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};
