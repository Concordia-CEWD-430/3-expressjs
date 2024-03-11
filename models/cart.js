const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "cart.json");

module.exports = class Cart {
  static addBook(id, price) {
    // Fetch previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { books: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart - find existing book
      const existingBookIndex = cart.books.findIndex((book) => book.id === id);
      const existingBook = cart.books[existingBookIndex];
      let updatedBook;
      // Add new book / increase quantity
      if (existingBook) {
        updatedBook = { ...existingBook };
        updatedBook.qty = updatedBook.qty + 1;
        cart.books = [...cart.books];
        cart.books[existingBookIndex] = updatedBook;
      } else {
        updatedBook = { id, qty: 1 };
        cart.books = [...cart.books, updatedBook];
      }
      cart.totalPrice = cart.totalPrice + +price;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
};
